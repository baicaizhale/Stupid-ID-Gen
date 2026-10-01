// 把真正要发布到 Cloudflare Pages 的静态资源拷进 dist/
import fs from 'node:fs';
import path from 'node:path';

const FILES = ['index.html', 'style.css', 'app.js'];
const out = 'dist';

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
for (const file of FILES) fs.copyFileSync(file, path.join(out, file));
console.log(`built ${FILES.length} files -> ${out}/`);
