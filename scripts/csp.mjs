#!/usr/bin/env node
// Writes a Content-Security-Policy <meta> into every HTML page, derived from what the page
// actually loads, so the policy is as strict as the page allows and cannot silently drift.
//
//   node scripts/csp.mjs           # rewrite the <meta http-equiv="Content-Security-Policy"> tags
//   node scripts/csp.mjs --check   # exit 1 if any page's policy is missing or out of date
//
// Run it after any change to a page's <script>, <style>, style="" attributes or stylesheets.
// Stdlib only; no network.
//
// What it derives, per page:
//   script-src   'self' if the page loads a local script; each external script by its exact
//                URL (path-pinned); 'none' if the page runs no script. An external script
//                without an integrity hash is refused, except GoatCounter's count.js, which is
//                an unversioned URL that cannot be hashed (see the exception below). Inline executable scripts are hashed, but there are none
//                today: keep code in files. JSON-LD blocks are data and need nothing.
//   style-src    'self' for local stylesheets, fonts.googleapis.com if a page or one of its
//                stylesheets (@import, followed recursively) uses Google Fonts, a sha256 for
//                each <style> block, and 'unsafe-hashes' plus a sha256 for each distinct
//                style="" attribute value. No 'unsafe-inline': React's style={{...}} props are
//                set through the CSSOM, which CSP does not restrict.
//   font-src     'self' if any reachable CSS has @font-face, fonts.gstatic.com for Google Fonts.
//   img-src      'self', plus data: if reachable CSS uses data: URLs, plus the GoatCounter
//                endpoint where GoatCounter is loaded (its no-sendBeacon fallback is an <img>).
//   connect-src  'none', plus the GoatCounter endpoint (sendBeacon) and EXTRA_CONNECT below.
//   always       default-src 'self'; object-src 'none'; base-uri 'self'; form-action 'none'.
//
// A <meta> policy cannot carry frame-ancestors, report-uri/report-to or sandbox; GitHub Pages
// sets no CSP header, so those are unavailable on this site.
//
// The tag goes directly after <meta charset>: the charset declaration must stay within the
// first 1024 bytes and some policies here are longer than that. Nothing before it loads anything.
//
// The HTML is read with regular expressions, which is enough for these hand-written pages. An
// inline on*= handler or a javascript: URL makes the script fail rather than be allowed.
import { createHash } from 'node:crypto';
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, dirname, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const repo = join(dirname(fileURLToPath(import.meta.url)), '..');
const check = process.argv.includes('--check');

// Endpoints a page's own code fetches, which cannot be read from its tags.
const EXTRA_CONNECT = {
  'kit/index.html': ['https://registry.npmjs.org'], // version pill: /sandstream-kit/latest
};

const GOOGLE_CSS = 'https://fonts.googleapis.com';
const GOOGLE_FONTS = 'https://fonts.gstatic.com';

function htmlPages(dir, acc = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith('.') || e.name === 'node_modules') continue;
    const p = join(dir, e.name);
    if (e.isDirectory()) htmlPages(p, acc);
    else if (e.name.endsWith('.html')) acc.push(p);
  }
  return acc.sort();
}

const sha256 = (text) => `'sha256-${createHash('sha256').update(text, 'utf8').digest('base64')}'`;
const attr = (attrs, name) => {
  const m = new RegExp(`(?:^|\\s)${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`, 'i').exec(attrs);
  return m ? (m[1] ?? m[2] ?? m[3]) : null;
};
const hasAttr = (attrs, name) => new RegExp(`(?:^|\\s)${name}(?:\\s|=|$)`, 'i').test(attrs);
const decode = (s) => s
  .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
  .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
  .replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&amp;/g, '&');
const isRemote = (u) => /^(https?:)?\/\//i.test(u);
const origin = (u) => new URL(u.startsWith('//') ? 'https:' + u : u).origin;

// Resolve a local URL as the browser would (root-absolute or relative to the page).
function localPath(fromFile, url) {
  const clean = url.split(/[?#]/)[0];
  return clean.startsWith('/') ? join(repo, ...clean.split('/')) : join(dirname(fromFile), ...clean.split('/'));
}

// Walk a stylesheet and its @imports; report what the CSS needs.
function scanCss(file, text, need, seen = new Set()) {
  if (seen.has(file)) return;
  seen.add(file);
  if (/@font-face/i.test(text)) need.selfFont = true;
  if (/url\(\s*["']?data:/i.test(text)) need.dataImg = true;
  for (const m of text.matchAll(/@import\s+(?:url\(\s*)?["']?([^"')\s;]+)/gi)) {
    const u = m[1];
    if (isRemote(u)) { need.remoteCss.add(origin(u)); continue; }
    const p = localPath(file, u);
    if (!existsSync(p)) throw new Error(`${relative(repo, file)}: @import ${u} not found`);
    need.selfCss = true;
    scanCss(p, readFileSync(p, 'utf8'), need, seen);
  }
}

function policyFor(file, html) {
  const rel = relative(repo, file).split(sep).join('/');
  const body = html.replace(/<meta\s+http-equiv="Content-Security-Policy"[^>]*>\n?/i, '');
  const need = { selfCss: false, selfFont: false, dataImg: false, remoteCss: new Set() };
  const script = new Set(), style = new Set(), styleAttr = new Set(), connect = new Set(), img = new Set();
  let selfScript = false;

  for (const m of body.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi)) {
    const [, attrs, content] = m;
    const src = attr(attrs, 'src');
    const type = (attr(attrs, 'type') || '').toLowerCase();
    if (src) {
      if (isRemote(src)) {
        // gc.zgo.at/count.js is unversioned, so no hash can pin it; it is allowed by exact URL.
        if (!hasAttr(attrs, 'integrity') && !/^https:\/\/gc\.zgo\.at\//.test(src)) {
          throw new Error(`${rel}: external script without integrity: ${src}`);
        }
        script.add(src.startsWith('//') ? 'https:' + src : src);
      } else selfScript = true;
      const gc = attr(attrs, 'data-goatcounter');
      if (gc) { connect.add(origin(gc)); img.add(origin(gc)); }
    } else if (type === '' || /javascript|ecmascript|^module$/.test(type)) {
      if (content.trim()) script.add(sha256(content));
    } else if (type === 'text/babel') {
      throw new Error(`${rel}: text/babel needs 'unsafe-eval'; compile it with scripts/build-jsx.mjs`);
    } // else: a data block (application/ld+json): never executed, not governed by CSP
  }
  for (const m of body.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style\s*>/gi)) {
    style.add(sha256(m[1]));
    scanCss(file, m[1], need);
  }
  for (const m of body.matchAll(/<link\b([^>]*)>/gi)) {
    const attrs = m[1];
    const relv = (attr(attrs, 'rel') || '').toLowerCase();
    const href = attr(attrs, 'href');
    if (!href) continue;
    const isCss = relv.split(/\s+/).includes('stylesheet') || (relv === 'preload' && attr(attrs, 'as') === 'style');
    if (!isCss) continue;
    if (isRemote(href)) { need.remoteCss.add(origin(href)); continue; }
    const p = localPath(file, href);
    if (!existsSync(p)) throw new Error(`${rel}: stylesheet ${href} not found`);
    need.selfCss = true;
    scanCss(p, readFileSync(p, 'utf8'), need);
  }
  for (const m of body.matchAll(/<[a-zA-Z][^>]*>/g)) {
    const tag = m[0];
    if (/\son[a-z]+\s*=/i.test(tag)) throw new Error(`${rel}: inline event handler in ${tag.slice(0, 80)}; use addEventListener in a .js file`);
    if (/=\s*["']?\s*javascript:/i.test(tag)) throw new Error(`${rel}: javascript: URL in ${tag.slice(0, 80)}`);
    for (const a of tag.matchAll(/\sstyle\s*=\s*(?:"([^"]*)"|'([^']*)')/gi)) {
      const v = decode(a[1] ?? a[2]);
      styleAttr.add(sha256(v));
      if (/url\(\s*["']?data:/i.test(v)) need.dataImg = true;
    }
  }
  for (const c of EXTRA_CONNECT[rel] || []) connect.add(c);

  const scriptSrc = [...(selfScript ? ["'self'"] : []), ...[...script].sort()];
  const usesGoogle = need.remoteCss.has(GOOGLE_CSS);
  for (const o of need.remoteCss) if (o !== GOOGLE_CSS) throw new Error(`${rel}: unexpected stylesheet origin ${o}`);
  const styleSrc = [
    ...(need.selfCss ? ["'self'"] : []),
    ...(usesGoogle ? [GOOGLE_CSS] : []),
    ...[...style].sort(),
    ...(styleAttr.size ? ["'unsafe-hashes'", ...[...styleAttr].sort()] : []),
  ];
  const fontSrc = [...(need.selfFont ? ["'self'"] : []), ...(usesGoogle ? [GOOGLE_FONTS] : [])];
  const imgSrc = ["'self'", ...(need.dataImg ? ['data:'] : []), ...[...img].sort()];
  const connectSrc = [...connect].sort();
  const or = (list) => (list.length ? list.join(' ') : "'none'");
  return [
    "default-src 'self'",
    `script-src ${or(scriptSrc)}`,
    `style-src ${or(styleSrc)}`,
    `font-src ${or(fontSrc)}`,
    `img-src ${or(imgSrc)}`,
    `connect-src ${or(connectSrc)}`,
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'none'",
  ].join('; ');
}

let stale = 0;
for (const file of htmlPages(repo)) {
  const rel = relative(repo, file).split(sep).join('/');
  const html = readFileSync(file, 'utf8');
  const tag = `<meta http-equiv="Content-Security-Policy" content="${policyFor(file, html)}">`;
  const existing = /<meta\s+http-equiv="Content-Security-Policy"[^>]*>/i.exec(html);
  if (check) {
    if (!existing || existing[0] !== tag) { stale++; console.error(`${existing ? 'out of date' : 'missing'}: ${rel}`); }
    continue;
  }
  let out;
  if (existing) out = html.replace(existing[0], tag);
  else {
    const charset = /<meta\s+charset=[^>]*>\n?/i.exec(html);
    if (!charset) throw new Error(`${rel}: no <meta charset> to anchor the policy after`);
    const at = charset.index + charset[0].length;
    out = html.slice(0, at) + (charset[0].endsWith('\n') ? '' : '\n') + tag + '\n' + html.slice(at);
  }
  if (out !== html) { writeFileSync(file, out); console.log(`wrote ${rel}`); }
}
if (check) {
  if (stale) { console.error(`${stale} page(s) need node scripts/csp.mjs`); process.exit(1); }
  console.log('every page carries its current policy');
}
