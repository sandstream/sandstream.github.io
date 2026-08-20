#!/usr/bin/env node
/**
 * Keep the kit page's two NON-self-healing version values in step with npm.
 *
 * Why this exists: the visible version pill fetches the npm registry at load, so live
 * visitors always see the current release. Two values do not self-heal —
 *
 *   1. `softwareVersion` in the JSON-LD. Crawlers read it and no JS runs for them.
 *   2. the pill's hardcoded fallback, which is what renders with JS off, on a fetch
 *      failure, or before the fetch resolves.
 *
 * — and they were bumped by hand. Measured outcome of that: the field sat four releases
 * behind (6.3.1 while npm was 6.6.5), and nine hours after being corrected to 6.6.5 it
 * was stale again because 6.7.0 shipped. A number a human must remember on every release
 * is a claim that is wrong by default.
 *
 * A scheduled job that COMMITS is deliberate rather than one that opens a PR: the last
 * hand-fix for exactly this field sat unmerged for nine days, so a PR-based repair would
 * reproduce the failure it is meant to remove.
 *
 * Because it commits unattended, it is fail-closed in both directions. It rewrites only
 * the two lines above, then re-reads the file and REFUSES to write if any other line
 * moved — the corpus-proof and attestation sections carry version numbers that name the
 * release which produced each measurement (kit 5.0.0, 6.3.2) and must never track the
 * current release. A regex confident enough to update a version is confident enough to
 * corrupt a measurement, so the guard checks the outcome instead of trusting the pattern.
 *
 *   node scripts/sync-kit-version.mjs --check   # exit 1 if stale, no writes
 *   node scripts/sync-kit-version.mjs           # sync, or exit 0 unchanged
 */
import { readFileSync, writeFileSync } from "node:fs";

const FILE = "kit/index.html";
const PKG = "sandstream-kit";
const SEMVER = /^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/;

const JSONLD = /("softwareVersion":\s*")([^"]+)(")/;
const PILL = /(id="version-pill">v)([^<]+)(<)/;

/** The npm dist-tag `latest`, validated — a garbled response must not become a claim. */
async function latestVersion() {
  const res = await fetch(`https://registry.npmjs.org/${PKG}`, {
    headers: { accept: "application/vnd.npm.install-v1+json" },
  });
  if (!res.ok) throw new Error(`registry HTTP ${res.status}`);
  const version = (await res.json())?.["dist-tags"]?.latest;
  if (typeof version !== "string" || !SEMVER.test(version)) {
    throw new Error(`registry returned no usable latest version: ${JSON.stringify(version)}`);
  }
  return version;
}

function read(text, re, label) {
  const m = text.match(re);
  if (!m) throw new Error(`could not find ${label} in ${FILE} — refusing to guess`);
  return m[2];
}

/**
 * Only the lines whose index differs. Comparing the OUTCOME is the point: it holds no
 * matter how the replacement was expressed, where asserting "the regex is narrow" only
 * restates the assumption being checked.
 */
function changedLines(before, after) {
  const a = before.split("\n");
  const b = after.split("\n");
  if (a.length !== b.length) return null; // a line count change is never expected here
  const out = [];
  for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) out.push(i + 1);
  return out;
}

const check = process.argv.includes("--check");
const before = readFileSync(FILE, "utf8");
const current = { jsonld: read(before, JSONLD, "JSON-LD softwareVersion"), pill: read(before, PILL, "version-pill fallback") };
const latest = await latestVersion();

if (current.jsonld === latest && current.pill === latest) {
  console.log(`in step: ${FILE} and npm both say ${latest}`);
  process.exit(0);
}

console.log(`stale: page says ${current.jsonld} (JSON-LD) / ${current.pill} (pill), npm says ${latest}`);
if (check) {
  console.error("--check: not writing. Run without --check to sync.");
  process.exit(1);
}

const after = before.replace(JSONLD, `$1${latest}$3`).replace(PILL, `$1${latest}$3`);

// Fail closed: the two intended lines, and nothing else.
const moved = changedLines(before, after);
if (moved === null) throw new Error("line count changed — refusing to write");
const expected = [before.split("\n").findIndex((l) => JSONLD.test(l)) + 1, before.split("\n").findIndex((l) => PILL.test(l)) + 1];
const unexpected = moved.filter((n) => !expected.includes(n));
if (unexpected.length > 0) {
  throw new Error(`refusing to write: unexpected line(s) changed: ${unexpected.join(", ")}`);
}
// And the values now read back as the version we intended, not whatever the regex produced.
for (const [label, re] of [["JSON-LD", JSONLD], ["pill", PILL]]) {
  const got = read(after, re, label);
  if (got !== latest) throw new Error(`refusing to write: ${label} became ${got}, expected ${latest}`);
}

writeFileSync(FILE, after);
console.log(`synced ${FILE} to ${latest} (lines ${moved.join(", ")})`);
