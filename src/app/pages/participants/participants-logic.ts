export interface Participant {
    name: string;
    title: string;
    institution: string;
    country: string;
    workshop: string;
}

export interface MergedParticipant {
    name: string;
    title: string;
    institution: string;
    country: string;
    workshops: string[];
}

interface WorkshopDate {
    sort: number;
    label: string;
}

export const WORKSHOP_DATES: Record<string, WorkshopDate> = {
    'Slicer Project Week 38 (Jan. 2023)': { sort: 20230130, label: 'Jan. 30 – Feb. 3, 2023' },
    'Slicer Project Week 39 (Jun. 2023)': { sort: 20230612, label: 'June 12–16, 2023' },
    'Slicer Project Week 40 (Jan. 2024)': { sort: 20240129, label: 'Jan. 29 – Feb. 2, 2024' },
    'Slicer Toluca Workshop (May 2024)': { sort: 20240507, label: 'May 7 & 14, 2024' },
    'Slicer Toluca Workshop (Jun. 2024)': { sort: 20240610, label: 'June 10, 2024' },
    'Slicer Project Week 41 (Jun. 2024)': { sort: 20240624, label: 'June 24–28, 2024' },
    'Slicer Project Week 42 (Jan. 2025)': { sort: 20250127, label: 'Jan. 27–31, 2025' },
    'Slicer Toluca Workshop (Jun. 2025)': { sort: 20250606, label: 'June 6, 2025' },
    'Slicer Ribeirão Preto Workshop (Jun. 2025)': { sort: 20250630, label: 'June 30, 2025' },
    'Slicer Toluca Workshop (Oct. 2025)': { sort: 20251008, label: 'October 8-10, 2025' },
    'Slicer Toluca Workshop (Oct. 27, 2025)': { sort: 20251027, label: 'October 27, 2025' },
    'Slicer Ribeirão Preto Workshop (Oct. 2025)': { sort: 20251031, label: 'October 31, 2025' },
    'Slicer Toluca Workshop (Nov. 2025)': { sort: 20251112, label: 'November 12-14, 2025' },
};

export function normalizeName(name: string): string {
    if (name === name.toUpperCase()) {
        return name.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
    }
    return name;
}

export function normalizeInstitution(institution: string): string {
    const uaemexFaculties: Record<string, string> = {
        'Facultad de Ingeniería': 'Facultad de Ingeniería - UAEMéx',
        'Facultad de Medicina': 'Facultad de Medicina - UAEMéx',
        'Facultad de Lenguas': 'Facultad de Lenguas - UAEMéx',
    };
    return uaemexFaculties[institution] ?? institution;
}

export function getSpecialtyParts(title: string): { role: string; specialty: string | null } {
    const dashIdx = title.indexOf(' - ');
    return dashIdx !== -1
        ? { role: title.substring(0, dashIdx), specialty: title.substring(dashIdx + 3) }
        : { role: title, specialty: null };
}

export function mergeByName(data: readonly Participant[]): MergedParticipant[] {
    const map: Record<string, MergedParticipant> = {};
    data.forEach((p) => {
        const key = p.name.toLowerCase().trim();
        if (!map[key]) {
            map[key] = {
                name: p.name,
                title: p.title,
                institution: p.institution,
                country: p.country,
                workshops: [],
            };
        }
        if (!map[key].workshops.includes(p.workshop)) {
            map[key].workshops.push(p.workshop);
        }
    });
    return Object.values(map);
}

export function filterParticipants(
    data: readonly Participant[],
    searchTerm: string,
): Participant[] {
    if (!searchTerm) {
        return [...data];
    }
    const lowerTerm = searchTerm.toLowerCase();
    return data.filter(
        (p) =>
            p.name.toLowerCase().includes(lowerTerm) ||
            p.institution.toLowerCase().includes(lowerTerm) ||
            p.workshop.toLowerCase().includes(lowerTerm) ||
            p.country.toLowerCase().includes(lowerTerm) ||
            p.title.toLowerCase().includes(lowerTerm),
    );
}

export function formatWorkshopName(ws: string): string {
    const entry = WORKSHOP_DATES[ws];
    if (entry?.label) {
        return ws.replace(/\s*\([^)]+\)$/, '') + ' (' + entry.label + ')';
    }
    return ws;
}

function getInstitutionCountry(institution: string): string {
    const brazilianInstitutions = [
        'Universidade de São Paulo',
        'USP',
        'Faculdade de Medicina de Ribeirão Preto',
        'Instituto Federal de Pernambuco',
        'IFPE',
        'Universidade Paulista',
        'UNIP',
        'Santa Casa de Misericórdia',
        'Universidade Estadual Paulista',
        'UNESP',
        'Universidade Federal Fluminense',
        'UFF',
        'Universidade Federal de Pernambuco',
        'UFPE',
        'Universidade Federal do Rio de Janeiro',
        'UFRJ',
        'Universidade Federal do Triângulo Mineiro',
        'UFTM',
        'Hospital das Clínicas de Ribeirão Preto',
        'HCRP',
        'Hospital Israelita Albert Einstein',
        'HIAE',
        'Fundação de Apoio ao Ensino, Pesquisa e Assistência do Hospital das Clínicas',
        'FAEPA',
        'Faculdade de Filosofia, Ciências e Letras de Ribeirão Preto',
        'Faculdade de Tecnologia de Ribeirão Preto',
        'FATEC',
    ];

    const mexicanInstitutions = [
        'Universidad Autónoma del Estado de México',
        'UAEMéx',
        'UAEMex',
        'Centro de Rehabilitación y Educación Especial Toluca',
        'CREE Toluca',
        'Sistema para el Desarrollo Integral de la Familia del Estado de México',
        'DIFEM',
        'Sistema Nacional para el Desarrollo Integral de la Familia',
        'DIF Nacional',
        'Universidad Juárez Autónoma de Tabasco',
        'UJAT',
        'Facultad de Medicina',
        'Facultad de Ingeniería',
        'Facultad de Lenguas',
        'UAEM',
        'Universidad del Valle de México',
        'UVM',
        'Salud Digna',
        'Instituto de Salud del Estado de México',
        'IMSS Bienestar',
        'Centro Médico',
    ];

    const colombianInstitutions = ['Universidad Militar Nueva Granada'];

    const nigerianInstitutions = [
        'Ladoke Akintola University of Technology',
        'Lagos State University',
    ];

    const usaInstitutions = ["Brigham and Women's Hospital", 'Harvard Medical School', 'Isomics'];

    const canadianInstitutions = ["Queen's University"];

    for (const keyword of brazilianInstitutions) {
        if (institution.includes(keyword)) {
            return 'Brazil';
        }
    }
    for (const keyword of mexicanInstitutions) {
        if (institution.includes(keyword)) {
            return 'Mexico';
        }
    }
    for (const keyword of colombianInstitutions) {
        if (institution.includes(keyword)) {
            return 'Colombia';
        }
    }
    for (const keyword of nigerianInstitutions) {
        if (institution.includes(keyword)) {
            return 'Nigeria';
        }
    }
    for (const keyword of usaInstitutions) {
        if (institution.includes(keyword)) {
            return 'USA';
        }
    }
    for (const keyword of canadianInstitutions) {
        if (institution.includes(keyword)) {
            return 'Canada';
        }
    }
    return 'Other countries';
}

export function resolveCountry(p: Participant): string {
    let country = p.country || '';
    if (country.includes(' - ')) {
        country = country.split(' - ').pop()!.trim();
    }
    country = country.replace(/\s*\([^)]+\)\s*$/, '').trim();
    if (!country) {
        return getInstitutionCountry(p.institution);
    }
    return country;
}

function getInstitutionParent(institution: string): string | null {
    if (
        institution === 'Universidade de São Paulo (USP)' ||
        institution === 'Faculdade de Medicina de Ribeirão Preto (FMRP)' ||
        institution === 'Faculdade de Filosofia, Ciências e Letras de Ribeirão Preto (FFCLRP)' ||
        institution === 'Hospital das Clínicas de Ribeirão Preto (HCRP)' ||
        institution === 'Fundação de Apoio ao Ensino, Pesquisa e Assistência do HCRP (FAEPA)' ||
        institution.includes('(USP)') ||
        institution.includes('Universidade de São Paulo')
    ) {
        return 'Universidade de São Paulo (USP)';
    }
    if (
        institution === 'Universidad Autónoma del Estado de México (UAEMéx)' ||
        institution === 'Facultad de Medicina' ||
        institution === 'Facultad de Ingeniería' ||
        institution === 'Facultad de Lenguas' ||
        institution === 'Facultad de Medicina - UAEMéx' ||
        institution === 'Facultad de Ingeniería - UAEMéx' ||
        institution === 'Facultad de Ingeniería/Medicina - UAEMéx' ||
        institution.includes('UAEMéx') ||
        institution.includes('Universidad Autónoma del Estado de México')
    ) {
        return 'Universidad Autónoma del Estado de México (UAEMéx)';
    }
    if (
        institution === 'Centro Médico Lic. Adolfo López Mateos' ||
        institution === 'Instituto de Salud del Estado de México (ISEM)' ||
        institution === 'Instituto de Salud del Estado de México (ISEM) / IMSS Bienestar' ||
        institution === 'IMSS Bienestar / Centro Médico Lic. Adolfo López Mateos'
    ) {
        return 'Instituto de Salud del Estado de México (ISEM)';
    }
    if (
        institution === 'Universidad del Valle de México (UVM)' ||
        institution === 'Universidad del Valle de México Campus Toluca' ||
        institution.includes('Universidad del Valle de México')
    ) {
        return 'Universidad del Valle de México (UVM)';
    }
    if (
        institution ===
            'Sistema para el Desarrollo Integral de la Familia del Estado de México (DIFEM)' ||
        institution === 'Sistema Nacional para el Desarrollo Integral de la Familia (DIF Nacional)'
    ) {
        return 'Sistema para el Desarrollo Integral de la Familia (DIF)';
    }
    if (
        institution.includes('Harvard Medical School') ||
        institution.includes("Brigham and Women's Hospital (BWH)")
    ) {
        return 'Harvard Medical School';
    }
    if (institution.includes('Université Cheikh Anta Diop de Dakar')) {
        return 'Université Cheikh Anta Diop de Dakar (UCAD)';
    }
    if (institution.includes('Université de Nouakchott Al-Asriya')) {
        return 'Université de Nouakchott Al-Asriya';
    }
    if (institution === 'University of Szeged' || institution.startsWith('University of Szeged,')) {
        return 'University of Szeged';
    }
    if (institution === 'University of Lübeck' || institution.endsWith(', University of Lübeck')) {
        return 'University of Lübeck';
    }
    if (institution === 'McGill University') {
        return 'McGill University';
    }
    if (institution === 'Montreal Neurological Institute (MNI)') {
        return 'Montreal Neurological Institute (MNI)';
    }
    if (
        institution === 'Universidad Carlos III de Madrid' ||
        institution.includes('Universidad Carlos III de Madrid')
    ) {
        return 'Universidad Carlos III de Madrid';
    }
    if (
        institution === 'University of Massachusetts' ||
        institution === 'University of Massachusetts Boston'
    ) {
        return 'University of Massachusetts';
    }
    return null;
}

const SUBTOPIC_ALIASES: Record<string, string> = {
    'Universidad del Valle de México Campus Toluca': 'Universidad del Valle de México (UVM)',
    'Universidad del Valle de México': 'Universidad del Valle de México (UVM)',
    'Universidad Autónoma del Estado de México':
        'Universidad Autónoma del Estado de México (UAEMéx)',
    'Centro Médico Lic. Adolfo López Mateos / UAEMéx':
        'Universidad Autónoma del Estado de México (UAEMéx)',
    'Facultad de Medicina - UAEMéx': 'Facultad de Medicina',
    'Facultad de Ingeniería - UAEMéx': 'Facultad de Ingeniería',
    'Facultad de Ingeniería/Medicina - UAEMéx': 'Facultad de Ingeniería/Medicina',
    "Brigham and Women's Hospital (BWH), Harvard Medical School":
        "Brigham and Women's Hospital (BWH)",
    'Massachusetts General Hospital, Harvard Medical School': 'Massachusetts General Hospital',
    'Mass General Brigham (MGB), Harvard Medical School': 'Mass General Brigham (MGB)',
    'McLean Hospital, Harvard Medical School': 'McLean Hospital',
    'Beth Israel Deaconess Medical Center, Harvard Medical School':
        'Beth Israel Deaconess Medical Center',
    'Centro Médico Lic. Adolfo López Mateos': 'Centro Médico Lic. Adolfo López Mateos (CMLAIM)',
    'Instituto de Salud del Estado de México (ISEM) / IMSS Bienestar': 'IMSS Bienestar',
    'IMSS Bienestar / Centro Médico Lic. Adolfo López Mateos': 'IMSS Bienestar',
};

const EDU_MAP: Record<string, string> = {
    'PhD -': 'phd',
    "Master's Degree": 'masters',
    "Bachelor's Degree": 'bachelors',
    'Graduate Student (PhD)': 'graduateStudents',
    "Graduate Student (Master's)": 'graduateStudents',
    'Undergraduate Student': 'undergraduateStudents',
};

const PROFESSIONAL_TITLES = [
    'Physician',
    'Faculty',
    'Resident',
    'Medical Specialist',
    'Researcher',
    'Radiology Technologist',
];

const EXCLUDED_INSTITUTIONS = [
    'UltraTab Ultrasonidos',
    'Ultrasonidos Tabasco',
    'Isomics, Inc.',
    'Independent',
    '',
    'Unaffiliated',
];

export interface InstitutionGroup {
    total: number;
    subtopics: Record<string, number>;
}

export interface Statistics {
    totalParticipants: number;
    institutionsByCountry: Record<string, Record<string, InstitutionGroup>>;
    educationLevels: Record<string, number>;
    professions: Record<string, number>;
}

export function calculateStatistics(participantsData: readonly Participant[]): Statistics {
    const seen = new Set<string>();
    const uniquePeople = participantsData.filter((p) => {
        const key = p.name.toLowerCase().trim();
        if (seen.has(key)) {
            return false;
        }
        seen.add(key);
        return true;
    });

    const institutionsByCountry: Record<string, Record<string, InstitutionGroup>> = {};
    const educationLevels: Record<string, number> = {
        bachelors: 0,
        masters: 0,
        phd: 0,
        undergraduateStudents: 0,
        graduateStudents: 0,
    };
    const professions: Record<string, number> = {};

    uniquePeople.forEach((p) => {
        const country = resolveCountry(p);
        if (!institutionsByCountry[country]) {
            institutionsByCountry[country] = {};
        }

        if (!EXCLUDED_INSTITUTIONS.includes(p.institution)) {
            const parentInst = getInstitutionParent(p.institution);
            const groupName = parentInst || p.institution;

            if (!institutionsByCountry[country][groupName]) {
                institutionsByCountry[country][groupName] = { total: 0, subtopics: {} };
            }
            institutionsByCountry[country][groupName].total++;

            const subtopicKey = SUBTOPIC_ALIASES[p.institution] || p.institution;
            if (!institutionsByCountry[country][groupName].subtopics[subtopicKey]) {
                institutionsByCountry[country][groupName].subtopics[subtopicKey] = 0;
            }
            institutionsByCountry[country][groupName].subtopics[subtopicKey]++;
        }

        const title = p.title;
        const eduKey = Object.keys(EDU_MAP).find((prefix) => title.startsWith(prefix));
        if (eduKey) {
            educationLevels[EDU_MAP[eduKey]]++;
        }

        for (const profTitle of PROFESSIONAL_TITLES) {
            if (title.startsWith(profTitle)) {
                professions[profTitle] = (professions[profTitle] || 0) + 1;
                break;
            }
        }
    });

    return {
        totalParticipants: participantsData.length,
        institutionsByCountry,
        educationLevels,
        professions,
    };
}

export interface StatRow {
    label: string;
    count: number;
    subtopic: boolean;
}

export interface CountryColumn {
    country: string;
    total: number;
    rows: StatRow[];
}

export function buildStatColumns(stats: Statistics): {
    left: CountryColumn[];
    right: CountryColumn[];
} {
    const left: CountryColumn[] = [];
    const right: CountryColumn[] = [];

    const sortedCountries = Object.keys(stats.institutionsByCountry).sort((a, b) => {
        const totalA = Object.values(stats.institutionsByCountry[a]).reduce(
            (sum, inst) => sum + inst.total,
            0,
        );
        const totalB = Object.values(stats.institutionsByCountry[b]).reduce(
            (sum, inst) => sum + inst.total,
            0,
        );
        return totalB - totalA;
    });

    const countryWeights: Record<string, number> = {};
    sortedCountries.forEach((country) => {
        const inst = stats.institutionsByCountry[country];
        let w = 1;
        Object.entries(inst).forEach(([gn, gd]) => {
            if (gn === 'N/A') {
                return;
            }
            w++;
            const subs = Object.entries(gd.subtopics);
            const show = subs.length > 1 || (subs.length === 1 && subs[0][0] !== gn);
            if (show) {
                subs.forEach(([s]) => {
                    if (s !== gn) {
                        w++;
                    }
                });
            }
        });
        countryWeights[country] = w;
    });

    let leftWeight = countryWeights['Brazil'] || 0;
    let rightWeight = countryWeights['Mexico'] || 0;

    sortedCountries.forEach((country) => {
        const institutions = stats.institutionsByCountry[country];
        const countryTotal = Object.entries(institutions)
            .filter(([name]) => name !== 'N/A')
            .reduce((sum, [, inst]) => sum + inst.total, 0);
        if (countryTotal === 0) {
            return;
        }

        const rows: StatRow[] = [];
        const sortedGroups = Object.entries(institutions).sort((a, b) => {
            if (a[0] === 'N/A') {
                return 1;
            }
            if (b[0] === 'N/A') {
                return -1;
            }
            return b[1].total - a[1].total;
        });

        sortedGroups.forEach(([groupName, data]) => {
            rows.push({ label: groupName, count: data.total, subtopic: false });

            const subtopicEntries = Object.entries(data.subtopics).sort((a, b) => b[1] - a[1]);
            const parentIndex = subtopicEntries.findIndex((entry) => entry[0] === groupName);
            if (parentIndex !== -1) {
                const parentEntry = subtopicEntries.splice(parentIndex, 1)[0];
                subtopicEntries.push(parentEntry);
            }

            const showSubtopics =
                subtopicEntries.length > 1 ||
                (subtopicEntries.length === 1 && subtopicEntries[0][0] !== groupName);

            if (showSubtopics) {
                subtopicEntries.forEach(([subInst, count]) => {
                    if (subInst === groupName) {
                        return;
                    }
                    rows.push({ label: subInst, count, subtopic: true });
                });
            }
        });

        const column: CountryColumn = { country, total: countryTotal, rows };
        const w = countryWeights[country] || 1;
        if (country === 'Brazil') {
            left.unshift(column);
        } else if (country === 'Mexico') {
            right.push(column);
        } else if (leftWeight <= rightWeight) {
            left.push(column);
            leftWeight += w;
        } else {
            right.push(column);
            rightWeight += w;
        }
    });

    return { left, right };
}

export function countLabel(count: number, singular: string, plural = singular + 's'): string {
    return count === 1 ? singular : plural;
}

export const CITY_COORDINATES: Record<string, [number, number]> = {
    'São Paulo': [-23.5505, -46.6333],
    'Ribeirão Preto': [-21.1704, -47.8103],
    Recife: [-8.0476, -34.877],
    Niterói: [-22.8839, -43.1039],
    Uberaba: [-19.7479, -47.9319],
    'Rio das Ostras': [-22.5264, -41.9456],
    Ituverava: [-20.3394, -47.7789],
    Toluca: [19.2827, -99.6559],
    'Mexico City': [19.4326, -99.1332],
    Villahermosa: [17.9892, -92.9281],
    'Boston, MA': [42.3601, -71.0589],
    'Cambridge, MA': [42.3736, -71.1097],
    'Kingston, ON': [44.2298, -76.4815],
    USA: [37.0902, -95.7129],
    Spain: [40.4637, -3.7492],
    Germany: [51.1657, 10.4515],
    Mexico: [23.6345, -102.5528],
    Canada: [56.1304, -106.3468],
    Senegal: [14.4974, -14.4524],
    Mauritania: [21.0079, -10.9408],
    Brazil: [-14.235, -51.9253],
    France: [46.2276, 2.2137],
    Hungary: [47.1625, 19.5033],
    Norway: [60.472, 8.4689],
    Switzerland: [46.8182, 8.2275],
    Netherlands: [52.1326, 5.2913],
    Australia: [-25.2744, 133.7751],
    UK: [55.3781, -3.436],
    Argentina: [-38.4161, -63.6167],
    Italy: [41.8719, 12.5674],
    Sweden: [60.1282, 18.6435],
    Montenegro: [42.7087, 19.3744],
    'Cabo Verde': [16.5388, -23.0418],
    'South Korea': [35.9078, 127.7669],
    Belgium: [50.8503, 4.3517],
    Romania: [45.9432, 24.9668],
    "Côte d'Ivoire": [7.5399, -5.5471],
    Thailand: [15.87, 100.9925],
    Czechia: [49.8175, 15.473],
    India: [20.5937, 78.9629],
    Finland: [61.9241, 25.7482],
    China: [35.8617, 104.1954],
    Egypt: [26.8206, 30.8025],
    Benin: [9.3077, 2.3158],
    Taiwan: [23.6978, 120.9605],
    Poland: [51.9194, 19.1451],
    Pakistan: [30.3753, 69.3451],
    Iran: [32.4279, 53.688],
    Ukraine: [48.3794, 31.1656],
    Nigeria: [9.082, 8.6753],
    Sudan: [12.8628, 30.2176],
    Japan: [36.2048, 138.2529],
    Austria: [47.5162, 14.5501],
    Colombia: [4.5709, -74.2973],
};
