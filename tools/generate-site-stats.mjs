import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const DATA = join('src', 'app', 'pages', 'participants', 'participants-data.json');
const OUT = join('src', 'app', 'core', 'site-stats.ts');

const participants = JSON.parse(readFileSync(DATA, 'utf8'));

function resolveCountry(entry) {
    let country = entry.country || '';
    if (country.includes(' - ')) {
        country = country.split(' - ').pop().trim();
    }
    return country.replace(/\s*\([^)]+\)\s*$/, '').trim();
}

const people = new Set();
const countries = new Set();
const institutions = new Set();
const workshops = new Set();

for (const entry of participants) {
    people.add(entry.name.toLowerCase().trim());
    const country = resolveCountry(entry);
    if (country) {
        countries.add(country);
    }
    if (entry.institution) {
        institutions.add(entry.institution.trim());
    }
    if (entry.workshop) {
        workshops.add(entry.workshop.trim());
    }
}

const stats = {
    participants: people.size,
    countries: countries.size,
    institutions: institutions.size,
    events: workshops.size,
};

writeFileSync(
    OUT,
    `export interface SiteStats {
    participants: number;
    countries: number;
    institutions: number;
    events: number;
}

export const SITE_STATS: SiteStats = ${JSON.stringify(stats, null, 4)};
`,
);

console.log(`generate-site-stats: ${JSON.stringify(stats)}`);
