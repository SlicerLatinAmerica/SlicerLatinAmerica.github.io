import { existsSync, readdirSync, renameSync, rmSync, statSync } from 'node:fs';
import { join } from 'node:path';

const BROWSER_DIR = join('dist', 'slicer-latin-america', 'browser');

if (!existsSync(BROWSER_DIR)) {
    console.error(`flatten-html-routes: ${BROWSER_DIR} not found. Did the build run?`);
    process.exit(1);
}

let flattened = 0;

for (const entry of readdirSync(BROWSER_DIR)) {
    if (!entry.endsWith('.html')) {
        continue;
    }
    const dir = join(BROWSER_DIR, entry);
    if (!statSync(dir).isDirectory()) {
        continue;
    }
    const index = join(dir, 'index.html');
    if (!existsSync(index)) {
        continue;
    }
    const target = join(BROWSER_DIR, `${entry}.tmp`);
    renameSync(index, target);
    rmSync(dir, { recursive: true, force: true });
    renameSync(target, dir);
    flattened++;
}

console.log(`flatten-html-routes: flattened ${flattened} prerendered .html route(s).`);
