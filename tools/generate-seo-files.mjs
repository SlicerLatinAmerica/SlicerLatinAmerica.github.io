import { existsSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BROWSER_DIR = join('dist', 'slicer-latin-america', 'browser');
const SITE_URL = 'https://slicerlatinamerica.github.io';

if (!existsSync(BROWSER_DIR)) {
    console.error(`generate-seo-files: ${BROWSER_DIR} not found. Did the build run?`);
    process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);

const pages = readdirSync(BROWSER_DIR)
    .filter((entry) => entry.endsWith('.html') && entry !== '404.html')
    .sort();

const urls = ['', ...pages.filter((page) => page !== 'index.html')];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
    .map((page) => {
        const priority = page === '' ? '1.0' : '0.7';
        return `    <url>\n        <loc>${SITE_URL}/${page}</loc>\n        <lastmod>${today}</lastmod>\n        <priority>${priority}</priority>\n    </url>`;
    })
    .join('\n')}
</urlset>
`;

writeFileSync(join(BROWSER_DIR, 'sitemap.xml'), sitemap);
writeFileSync(
    join(BROWSER_DIR, 'robots.txt'),
    `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
);

console.log(`generate-seo-files: sitemap.xml with ${urls.length} URLs + robots.txt`);
