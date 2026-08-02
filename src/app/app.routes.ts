import { Route, Routes } from '@angular/router';

import { PageMeta } from './core/seo.service';
import { GALLERY_PAGES } from './pages/workshops/event-gallery/gallery-pages';

const SUFFIX = ' - 3D Slicer for Latin America';

function page(
    path: string,
    title: string,
    description: string,
    loadComponent: Route['loadComponent'],
    extra: Partial<PageMeta> & { data?: Record<string, unknown> } = {},
): Route {
    const { data, ...meta } = extra;
    return {
        path,
        title,
        loadComponent,
        data: { ...data, meta: { description, ...meta } satisfies PageMeta },
    };
}

const loadHome = () => import('./pages/home/home').then((m) => m.HomePage);
const loadNotFound = () => import('./pages/not-found/not-found').then((m) => m.NotFoundPage);

const HOME_DESCRIPTION =
    'A Chan Zuckerberg Initiative funded effort localizing the 3D Slicer medical imaging platform into Latin American Spanish and Brazilian Portuguese, automating tutorial workflows, and training researchers and clinicians across the region.';

interface WorkshopRoute {
    path: string;
    title: string;
    description: string;
    load: Route['loadComponent'];
    pt?: boolean;
    data?: Record<string, unknown>;
}

const WORKSHOPS: WorkshopRoute[] = [
    {
        path: 'WorkshopToluca_AI_Nov2025.html',
        title: '3D Slicer: AI-based Technology Workshop',
        description:
            'Hands-on workshop on medical imaging and AI-based technology with 3D Slicer, held in November 2025 at Centro Médico Lic. Adolfo López Mateos, Toluca.',
        load: () =>
            import('./pages/workshops/toluca-ai-nov2025/toluca-ai-nov2025').then(
                (m) => m.TolucaAiNov2025Page,
            ),
    },
    {
        path: 'WorkshopToluca_Kidneys_May2024.html',
        title: 'Kidney Segmentation Workshop',
        description:
            'Kidney segmentation workshop using 3D Slicer, held in May 2024 in Toluca, México.',
        load: () =>
            import('./pages/workshops/toluca-kidneys-may2024/toluca-kidneys-may2024').then(
                (m) => m.TolucaKidneysMay2024Page,
            ),
    },
    {
        path: 'WorkshopToluca_Physio_Oct2025.html',
        title: '3D Slicer: AI-based Technology Workshop for Rehabilitation Medicine Physicians',
        description:
            'AI-based technology workshop with 3D Slicer for rehabilitation medicine physicians, held in October 2025 in Toluca, México.',
        load: () =>
            import('./pages/workshops/toluca-physio-oct2025/toluca-physio-oct2025').then(
                (m) => m.TolucaPhysioOct2025Page,
            ),
    },
    {
        path: 'WorkshopToluca_Segmentation_June2024.html',
        title: '3D Slicer Segmentation Workshop',
        description:
            'Image segmentation workshop with 3D Slicer, held in June 2024 in Toluca, México.',
        load: () =>
            import('./pages/workshops/toluca-segmentation-june2024/toluca-segmentation-june2024').then(
                (m) => m.TolucaSegmentationJune2024Page,
            ),
    },
    {
        path: 'WorkshopToluca_Ultrasound_June2025.html',
        title: '3D Slicer: Ultrasound Images',
        description:
            'Workshop on working with ultrasound images in 3D Slicer, held in June 2025 in Toluca, México.',
        load: () =>
            import('./pages/workshops/toluca-ultrasound-june2025/toluca-ultrasound-june2025').then(
                (m) => m.TolucaUltrasoundJune2025Page,
            ),
    },
    {
        path: 'WorkshopToluca_Ultrasound_Oct2025.html',
        title: 'Slicer for Ultrasound in Latin America: Turning Images into Insights',
        description:
            'Slicer for Ultrasound in Latin America: turning images into insights, held in October 2025 in Toluca, México.',
        load: () =>
            import('./pages/workshops/toluca-ultrasound-oct2025/toluca-ultrasound-oct2025').then(
                (m) => m.TolucaUltrasoundOct2025Page,
            ),
    },
    {
        path: 'WorkshopRP_AI2025.html',
        title: '3D Slicer Ribeirão Preto Workshop: Bridging Medical Imaging and AI',
        description:
            'Workshop em Ribeirão Preto sobre imagens médicas e inteligência artificial com o 3D Slicer.',
        load: () => import('./pages/workshops/rp-ai2025/rp-ai2025').then((m) => m.RpAi2025Page),
        pt: true,
    },
    {
        path: 'WorkshopRP_AI2025_june.html',
        title: '3D Slicer Ribeirão Preto Workshop: AI-driven technology for Radiologists',
        description:
            'Workshop em Ribeirão Preto sobre tecnologia baseada em IA para radiologistas com o 3D Slicer.',
        load: () =>
            import('./pages/workshops/rp-ai2025-june/rp-ai2025-june').then(
                (m) => m.RpAi2025JunePage,
            ),
        pt: true,
    },
    {
        path: 'WorkshopRP_AI2025_materials.html',
        title: 'Workshop Materials - 3D Slicer Ribeirão Preto',
        description: 'Materiais e instruções do workshop 3D Slicer em Ribeirão Preto.',
        load: () =>
            import('./pages/workshops/rp-materials/rp-materials').then((m) => m.RpMaterialsPage),
        pt: true,
        data: { june: false },
    },
    {
        path: 'WorkshopRP_AI2025_materials_june.html',
        title: 'Workshop Materials - 3D Slicer Ribeirão Preto',
        description: 'Materiais e instruções do workshop 3D Slicer em Ribeirão Preto (junho).',
        load: () =>
            import('./pages/workshops/rp-materials/rp-materials').then((m) => m.RpMaterialsPage),
        pt: true,
        data: { june: true },
    },
    {
        path: 'PW38_2023_GranCanaria.html',
        title: `38th NA-MIC Project Week${SUFFIX}`,
        description:
            'Participation of the 3D Slicer for Latin America project in the 38th NA-MIC Project Week, Gran Canaria, 2023.',
        load: () => import('./pages/workshops/pw38/pw38').then((m) => m.Pw38Page),
    },
    {
        path: 'PW39_2023_Montreal.html',
        title: `39th NA-MIC Project Week${SUFFIX}`,
        description:
            'Participation of the 3D Slicer for Latin America project in the 39th NA-MIC Project Week, Montréal, 2023.',
        load: () => import('./pages/workshops/pw39/pw39').then((m) => m.Pw39Page),
    },
    {
        path: 'PW40_2024_GranCanaria.html',
        title: `40th NA-MIC Project Week${SUFFIX}`,
        description:
            'Participation of the 3D Slicer for Latin America project in the 40th NA-MIC Project Week, Gran Canaria, 2024.',
        load: () => import('./pages/workshops/pw40/pw40').then((m) => m.Pw40Page),
    },
    {
        path: 'PW41_2024_MIT.html',
        title: `41st NA-MIC Project Week${SUFFIX}`,
        description:
            'Participation of the 3D Slicer for Latin America project in the 41st NA-MIC Project Week at MIT, 2024.',
        load: () => import('./pages/workshops/pw41/pw41').then((m) => m.Pw41Page),
    },
    {
        path: 'PW42_2025_GranCanaria.html',
        title: `42nd NA-MIC Project Week${SUFFIX}`,
        description:
            'Participation of the 3D Slicer for Latin America project in the 42nd NA-MIC Project Week, Gran Canaria, 2025.',
        load: () => import('./pages/workshops/pw42/pw42').then((m) => m.Pw42Page),
    },
    {
        path: 'CZI_OpenScience_2024.html',
        title: `CZI Open Science 2024${SUFFIX}`,
        description:
            'The 3D Slicer for Latin America project at the Chan Zuckerberg Initiative Open Science 2024 meeting.',
        load: () => import('./pages/workshops/czi-2024/czi-2024').then((m) => m.Czi2024Page),
    },
    {
        path: 'CZI_OpenScience_2025.html',
        title: `CZI Open Science 2025${SUFFIX}`,
        description:
            'The 3D Slicer for Latin America project at the Chan Zuckerberg Initiative Open Science 2025 meeting.',
        load: () => import('./pages/workshops/czi-2025/czi-2025').then((m) => m.Czi2025Page),
    },
    {
        path: 'CLAIB_CBEB_2022.html',
        title: `CLAIB 2022 / CBEB 2022${SUFFIX}`,
        description:
            'The 3D Slicer for Latin America project at CLAIB 2022 and CBEB 2022 in Florianópolis, Brazil.',
        load: () =>
            import('./pages/workshops/claib-cbeb-2022/claib-cbeb-2022').then(
                (m) => m.ClaibCbeb2022Page,
            ),
    },
    {
        path: 'SoniaPujol_IEEEEMBS_June2026.html',
        title: `Dr. Sonia Pujol - IEEE EMBS Invited Talk${SUFFIX}`,
        description:
            'Invited talk by Dr. Sonia Pujol at the IEEE Engineering in Medicine and Biology Society, June 2026.',
        load: () =>
            import('./pages/workshops/sonia-pujol-ieee-embs-june2026/sonia-pujol-ieee-embs-june2026').then(
                (m) => m.SoniaPujolIeeeEmbsJune2026Page,
            ),
    },
];

export const routes: Routes = [
    page('', '3D Slicer for Latin America', HOME_DESCRIPTION, loadHome),
    page('index.html', '3D Slicer for Latin America', HOME_DESCRIPTION, loadHome),
    page(
        'events.html',
        `Events${SUFFIX}`,
        'Workshops, conferences and outreach events run by the 3D Slicer for Latin America project across Mexico, Brazil and beyond.',
        () => import('./pages/events/events').then((m) => m.EventsPage),
    ),
    page(
        'team.html',
        `Our Team${SUFFIX}`,
        'The principal investigator, core team, collaborators and students behind 3D Slicer for Latin America.',
        () => import('./pages/team/team').then((m) => m.TeamPage),
    ),
    page(
        'work.html',
        `Our Work${SUFFIX}`,
        'Localization of 3D Slicer, the Slicer Tutorial Maker extension for automated tutorial generation, and hands-on training across Latin America.',
        () => import('./pages/work/work').then((m) => m.WorkPage),
    ),
    page(
        'localization.html',
        `Localization${SUFFIX}`,
        'Localized 3D Slicer tutorials in Spanish, Portuguese, French and more, plus medical imaging glossaries for translators.',
        () => import('./pages/localization/localization').then((m) => m.LocalizationPage),
    ),
    page(
        'community-localization.html',
        `Community Localization${SUFFIX}`,
        'Community-contributed translations of 3D Slicer tutorials, and how to contribute a translation in your own language.',
        () =>
            import('./pages/community-localization/community-localization').then(
                (m) => m.CommunityLocalizationPage,
            ),
    ),
    page(
        'tutorial-collection.html',
        `Slicer Tutorial Maker Collection${SUFFIX}`,
        'A growing collection of 3D Slicer tutorials generated and maintained with the Slicer Tutorial Maker extension, available in multiple languages.',
        () =>
            import('./pages/tutorial-collection/tutorial-collection').then(
                (m) => m.TutorialCollectionPage,
            ),
    ),
    page(
        'sponsors.html',
        `Acknowledgment${SUFFIX}`,
        'The 3D Slicer for Latin America project is supported by an Essential Open Source Software for Science grant from the Chan Zuckerberg Initiative.',
        () => import('./pages/sponsors/sponsors').then((m) => m.SponsorsPage),
    ),
    page(
        'contact.html',
        `Contact${SUFFIX}`,
        'Get in touch with the 3D Slicer for Latin America team about workshops, localization and collaboration.',
        () => import('./pages/contact/contact').then((m) => m.ContactPage),
    ),
    page(
        'participants.html',
        `Outreach Events Participants${SUFFIX}`,
        'Researchers, clinicians and students from across Latin America and beyond who have taken part in 3D Slicer outreach events.',
        () => import('./pages/participants/participants').then((m) => m.ParticipantsPage),
    ),
    page(
        '404.html',
        `Page not found${SUFFIX}`,
        'The page you were looking for could not be found.',
        loadNotFound,
    ),
    page(
        'md-viewer.html',
        'Loading…',
        'Workshop instructions and materials for 3D Slicer for Latin America events.',
        () => import('./pages/md-viewer/md-viewer').then((m) => m.MdViewerPage),
    ),
    ...WORKSHOPS.map((workshop) =>
        page(workshop.path, workshop.title, workshop.description, workshop.load, {
            ...(workshop.pt ? { htmlLang: 'pt-BR' } : {}),
            data: workshop.data,
        }),
    ),
    ...Object.entries(GALLERY_PAGES).map(([path, gallery]) =>
        page(
            path,
            gallery.title,
            `Photo gallery from ${gallery.heading} - 3D Slicer for Latin America.`,
            () =>
                import('./pages/workshops/event-gallery/event-gallery').then(
                    (m) => m.EventGalleryPage,
                ),
            { data: { gallery } },
        ),
    ),
    page(
        '**',
        `Page not found${SUFFIX}`,
        'The page you were looking for could not be found.',
        loadNotFound,
    ),
];

export const prerenderPaths: string[] = routes
    .map((route) => route.path!)
    .filter((path) => path === '' || path.endsWith('.html'))
    .filter((path) => path !== 'index.html');
