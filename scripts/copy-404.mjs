/*
 * GitHub Pages serves a static 404.html for any unmatched path. Copying
 * index.html → 404.html lets the Angular SPA pick up deep-linked routes
 * like /terms or /privacy on a hard refresh.
 */
import { copyFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const distDir = join(process.cwd(), 'dist', 'lci-marketing');

const candidates = ['browser', '.'];
let outDir = null;
for (const c of candidates) {
  if (existsSync(join(distDir, c, 'index.html'))) {
    outDir = join(distDir, c);
    break;
  }
}

if (!outDir) {
  console.error(`[copy-404] index.html not found under ${distDir}`);
  process.exit(1);
}

copyFileSync(join(outDir, 'index.html'), join(outDir, '404.html'));
console.log(`[copy-404] wrote ${join(outDir, '404.html')}`);
