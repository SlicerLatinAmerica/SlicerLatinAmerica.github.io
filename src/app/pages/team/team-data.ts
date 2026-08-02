export interface TeamMember {
    name: string;
    role: string;
    img: string;
    alt: string;
    lines: readonly string[];
    href?: string;
}

export interface TeamSection {
    titleKey: string;
    members: readonly TeamMember[];
}

export const TEAM_SECTIONS: readonly TeamSection[] = [
    {
        titleKey: 'principalInvestigator',
        members: [
            {
                name: 'Sonia Pujol, PhD',
                role: 'principalInvestigator',
                img: './public/assets/img/members/sonia_pujol.jpg',
                alt: 'Sonia Pujol',
                lines: [
                    "Brigham and Women's Hospital",
                    'Harvard Medical School',
                    'Boston, MA',
                    'USA',
                ],
                href: 'https://www.linkedin.com/in/sonia-pujol-165660186/',
            },
        ],
    },
    {
        titleKey: 'coreTeam',
        members: [
            {
                name: 'Steve Pieper, PhD',
                role: 'slicerArchitect',
                img: './public/assets/img/members/steve_pieper.jpeg',
                alt: 'Steve Pieper',
                lines: ['Isomics, Inc.', 'Cambridge, MA', 'USA'],
            },
            {
                name: 'Andras Lasso, PhD',
                role: 'coreDeveloper',
                img: './public/assets/img/members/andras_lasso.jpg',
                alt: 'Andras Lasso',
                lines: ["Queen's University", 'Kingston, ON', 'Canada'],
            },
        ],
    },
    {
        titleKey: 'brazilianTeam',
        members: [
            {
                name: 'Luiz Murta, PhD',
                role: 'associateProfessor',
                img: './public/assets/img/members/luiz_murta.jpg',
                alt: 'Luiz Murta',
                lines: ['University of São Paulo (USP)', 'Ribeirão Preto', 'Brazil'],
                href: 'https://www.linkedin.com/in/lomurta/',
            },
            {
                name: 'Douglas Gonçalves',
                role: 'softwareEngineer',
                img: './public/assets/img/members/douglas.jpg',
                alt: 'Douglas Gonçalves',
                lines: ['University of São Paulo (USP)', 'Ribeirão Preto', 'Brazil'],
                href: 'https://www.linkedin.com/in/dousam/',
            },
            {
                name: 'Lucas Sanchez Silva',
                role: 'developer',
                img: './public/assets/img/members/lucas_silva.jpeg',
                alt: 'Lucas Silva',
                lines: ['University of São Paulo (USP)', 'Ribeirão Preto', 'Brazil'],
                href: 'https://www.linkedin.com/in/lucas-sanchez-silva-2a4917209/',
            },
            {
                name: 'Paulo Veiga',
                role: 'translator',
                img: './public/assets/img/members/paulo_veiga.jpeg',
                alt: 'Paulo Veiga',
                lines: ['University of São Paulo (USP)', 'Ribeirão Preto', 'Brazil'],
                href: 'https://www.linkedin.com/in/paulo-eduardo-de-barros-veiga-85a174321/',
            },
            {
                name: 'Lucas Miranda Mendoça Rezende',
                role: 'developer',
                img: './public/assets/img/members/lucas_miranda.jpg',
                alt: 'Lucas Miranda',
                lines: ['University of São Paulo (USP)', 'Ribeirão Preto', 'Brazil'],
                href: 'https://www.linkedin.com/in/miiranta/',
            },
        ],
    },
    {
        titleKey: 'mexicanTeam',
        members: [
            {
                name: 'Adriana Herlinda Vilchis González, PhD',
                role: 'associateProfessor',
                img: './public/assets/img/members/adriana_gonzalez.png',
                alt: 'Adriana Vilchis',
                lines: ['Universidad Autónoma del Estado de México (UAEM)', 'Toluca', 'Mexico'],
                href: 'https://orcid.org/0000-0002-5422-5593',
            },
            {
                name: 'Enrique Hernández Laredo',
                role: 'medicalBioengineer',
                img: './public/assets/img/members/enrique_laredo.jpg',
                alt: 'Enrique Hernández',
                lines: ['Universidad Autónoma del Estado de México (UAEM)', 'Toluca', 'Mexico'],
            },
            {
                name: 'Victor Manuel Montaño Serrano',
                role: 'developer',
                img: './public/assets/img/members/victor_serrano.jpg',
                alt: 'Victor Montaño',
                lines: ['Universidad Autónoma del Estado de México (UAEM)', 'Toluca', 'Mexico'],
            },
            {
                name: 'Monserrat Ríos Hernández',
                role: 'developer',
                img: './public/assets/img/members/monserrat_rios.jpg',
                alt: 'Monserrat Ríos Hernández',
                lines: ['Universidad Autónoma del Estado de México (UAEM)', 'Toluca', 'Mexico'],
            },
            {
                name: 'Valeria Gómez Valdés',
                role: 'translator',
                img: './public/assets/img/members/valeria_valdes.jpg',
                alt: 'Valeria Gómez',
                lines: [
                    'Facultad de Lenguas, Universidad Autónoma del Estado de México',
                    'Toluca',
                    'Mexico',
                ],
            },
            {
                name: 'Juan Carlos Ávila Vilchis',
                role: 'translatorSupervisor',
                img: './public/assets/img/members/juan_vilchis.png',
                alt: 'Juan Carlos',
                lines: ['Universidad Autónoma del Estado de México (UAEM)', 'Toluca', 'Mexico'],
            },
            {
                name: 'Mariana Álvarez Carvajal',
                role: 'workshopSupervisor',
                img: './public/assets/img/members/mariana_carvajal.JPG',
                alt: 'Mariana Álvarez',
                lines: ['Universidad Autónoma del Estado de México (UAEM)', 'Toluca', 'Mexico'],
            },
            {
                name: 'Vianney Muñoz Jiménez',
                role: 'developerSupervisor',
                img: './public/assets/img/members/vianney_jimenez.jpeg',
                alt: 'Vianney Muñoz',
                lines: ['Universidad Autónoma del Estado de México (UAEM)', 'Toluca', 'Mexico'],
            },
            {
                name: 'Joel López',
                role: 'translationReviewer',
                img: './public/assets/img/members/joel_lopez.jpeg',
                alt: 'Joel López',
                lines: ['Universidad Autónoma del Estado de México (UAEM)', 'Toluca', 'Mexico'],
            },
        ],
    },
    {
        titleKey: 'projectAlumni',
        members: [
            {
                name: 'João Pedro Alves Januário',
                role: 'developer',
                img: './public/assets/img/members/joao_januario.jpeg',
                alt: 'João Januário',
                lines: [],
            },
            {
                name: 'Abigail Mercado Ponciano',
                role: 'translator',
                img: './public/assets/img/members/abigail_ponciano.jpeg',
                alt: 'Abigail Mercado',
                lines: [],
            },
            {
                name: 'Aida Garcia',
                role: 'translator',
                img: './public/assets/img/members/aida_garcia.jpg',
                alt: 'Aida Garcia',
                lines: [],
            },
            {
                name: 'Diana Alejandra Mendoza Mora',
                role: 'softwareDeveloper',
                img: './public/assets/img/members/diana_mora.jpg',
                alt: 'Diana Mendoza',
                lines: [],
            },
            {
                name: 'Nubia Sofía González Casanova',
                role: 'translator',
                img: './public/assets/img/members/nubia_casanova.jpg',
                alt: 'Nubia González',
                lines: [],
            },
            {
                name: 'Gael Garcia',
                role: 'translator',
                img: './public/assets/img/members/gael_garcia.jpg',
                alt: 'Gael Garcia',
                lines: [],
            },
            {
                name: 'Paulo Guilherme',
                role: 'developer',
                img: './public/assets/img/members/paulo_guilherme.jpg',
                alt: 'Paulo Guilherme',
                lines: [],
            },
        ],
    },
];
