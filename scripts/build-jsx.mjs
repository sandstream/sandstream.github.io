#!/usr/bin/env node
// Compiles every *.jsx component to a plain *.js file next to it, so the pages can run
// without @babel/standalone (which needs 'unsafe-eval' and 'unsafe-inline' in the CSP).
// The .jsx files stay the source; the .js files are committed and served.
//
//   node scripts/build-jsx.mjs           # rewrite the .js files
//   node scripts/build-jsx.mjs --check   # exit 1 if any .js differs from its .jsx
//
// Needs the TypeScript compiler, nothing else. It looks for TSC (a path to tsc or to
// typescript/bin/tsc), then ./node_modules/.bin/tsc, then `tsc` on PATH. The committed
// output was produced with TypeScript 5.9.3; another version may format it differently,
// so a --check failure after a TypeScript upgrade means "rebuild and commit", not a bug.
//
// Flags, and why:
//   --jsx react      classic React.createElement calls: React and ReactDOM are UMD globals.
//   --target ES5     const/let become var. Each file runs as its own classic <script>, and
//                    several files declare `const { useState, ... } = React;` at top level,
//                    which is a redeclaration error between scripts unless it is var. Babel's
//                    in-browser default did the same.
//   no module flag   the files are plain scripts that share globals, as before.
//   --noCheck        transpile only; the files reference globals (React, T, CASES) that tsc
//                    has no types for.
import { spawnSync } from 'node:child_process';
import { existsSync, readdirSync, readFileSync, mkdtempSync, rmSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';

const repo = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIRS = ['.', join('design-system', 'ui_kits', 'portfolio')];
const check = process.argv.includes('--check');

function tscCommand() {
  const env = process.env.TSC;
  if (env) return env.endsWith('.js') ? [process.execPath, env] : [env];
  const local = join(repo, 'node_modules', '.bin', process.platform === 'win32' ? 'tsc.cmd' : 'tsc');
  if (existsSync(local)) return [local];
  return [process.platform === 'win32' ? 'tsc.cmd' : 'tsc'];
}

const [cmd, ...pre] = tscCommand();
const shell = process.platform === 'win32';
// TypeScript 6 deprecates --target ES5 and refuses it unless told to ignore that; 5.x rejects
// the same flag value, so pass it only to 6 and later.
const version = spawnSync(cmd, [...pre, '--version'], { encoding: 'utf8', shell });
const major = Number(/Version (\d+)\./.exec(version.stdout ?? '')?.[1] ?? 0);
const compat = major >= 6 ? ['--ignoreDeprecations', '6.0'] : [];
let drift = 0;
for (const dir of DIRS) {
  const abs = join(repo, dir);
  const sources = readdirSync(abs).filter((f) => f.endsWith('.jsx')).sort();
  if (sources.length === 0) continue;
  const out = check ? mkdtempSync(join(tmpdir(), 'build-jsx-')) : abs;
  const args = [...pre, ...compat, '--jsx', 'react', '--target', 'ES5', '--lib', 'es2019,dom',
    '--allowJs', '--noCheck', '--skipLibCheck', '--noResolve', '--newLine', 'lf',
    '--outDir', out, ...sources.map((f) => join(abs, f))];
  const r = spawnSync(cmd, args, { stdio: 'inherit', shell });
  if (r.status !== 0) {
    console.error(`tsc failed in ${dir} (exit ${r.status ?? r.error})`);
    process.exit(2);
  }
  for (const f of sources) {
    const js = f.replace(/\.jsx$/, '.js');
    if (check) {
      const want = readFileSync(join(out, js), 'utf8');
      const have = existsSync(join(abs, js)) ? readFileSync(join(abs, js), 'utf8') : null;
      if (want !== have) { drift++; console.error(`out of date: ${relative(repo, join(abs, js))}`); }
    } else {
      console.log(`wrote ${relative(repo, join(abs, js))}`);
    }
  }
  if (check) rmSync(out, { recursive: true, force: true });
}
if (drift) { console.error(`${drift} compiled file(s) differ from their .jsx; run node scripts/build-jsx.mjs`); process.exit(1); }
if (check) console.log('compiled .js files match their .jsx sources');
