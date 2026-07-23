import { Route, Routes } from '@angular/router';

import { GALLERY_PAGES } from './pages/workshops/event-gallery/gallery-pages';

function page(
    path: string,
    title: string,
    loadComponent: Route['loadComponent'],
    data?: Route['data'],
): Route {
    return { path, title, loadComponent, data };
}

const loadHome = () => import('./pages/home/home').then((m) => m.HomePage);

export const routes: Routes = [
    { path: '', title: '3D Slicer for Latin America', loadComponent: loadHome },
    page('index.html', '3D Slicer for Latin America', loadHome),
    page('events.html', '3D Slicer for Latin America - Events', () =>
        import('./pages/events/events').then((m) => m.EventsPage),
    ),
    page('team.html', '3D Slicer for Latin America - Team', () =>
        import('./pages/team/team').then((m) => m.TeamPage),
    ),
    page('work.html', 'Our Work - 3D Slicer for Latin America', () =>
        import('./pages/work/work').then((m) => m.WorkPage),
    ),
    page('localization.html', 'Localization - 3D Slicer for Latin America', () =>
        import('./pages/localization/localization').then((m) => m.LocalizationPage),
    ),
    page(
        'community-localization.html',
        'Community Localization - 3D Slicer for Latin America',
        () =>
            import('./pages/community-localization/community-localization').then(
                (m) => m.CommunityLocalizationPage,
            ),
    ),
    page(
        'tutorial-collection.html',
        'Slicer Tutorial Maker Collection - 3D Slicer for Latin America',
        () =>
            import('./pages/tutorial-collection/tutorial-collection').then(
                (m) => m.TutorialCollectionPage,
            ),
    ),
    page('sponsors.html', '3D Slicer', () =>
        import('./pages/sponsors/sponsors').then((m) => m.SponsorsPage),
    ),
    page('contact.html', '3D Slicer', () =>
        import('./pages/contact/contact').then((m) => m.ContactPage),
    ),
    page('participants.html', '3D Slicer for Latin America: Outreach Events Participants', () =>
        import('./pages/participants/participants').then((m) => m.ParticipantsPage),
    ),
    page('md-viewer.html', 'Loading…', () =>
        import('./pages/md-viewer/md-viewer').then((m) => m.MdViewerPage),
    ),
    page('WorkshopToluca_AI_Nov2025.html', '3D Slicer: AI-based Technology Workshop', () =>
        import('./pages/workshops/toluca-ai-nov2025/toluca-ai-nov2025').then(
            (m) => m.TolucaAiNov2025Page,
        ),
    ),
    page('WorkshopToluca_Kidneys_May2024.html', 'Kidney Segmentation Workshop', () =>
        import('./pages/workshops/toluca-kidneys-may2024/toluca-kidneys-may2024').then(
            (m) => m.TolucaKidneysMay2024Page,
        ),
    ),
    page(
        'WorkshopToluca_Physio_Oct2025.html',
        '3D Slicer: AI-based Technology Workshop for Rehabilitation Medicine Physicians',
        () =>
            import('./pages/workshops/toluca-physio-oct2025/toluca-physio-oct2025').then(
                (m) => m.TolucaPhysioOct2025Page,
            ),
    ),
    page('WorkshopToluca_Segmentation_June2024.html', '3D Slicer Segmentation Workshop', () =>
        import('./pages/workshops/toluca-segmentation-june2024/toluca-segmentation-june2024').then(
            (m) => m.TolucaSegmentationJune2024Page,
        ),
    ),
    page('WorkshopToluca_Ultrasound_June2025.html', '3D Slicer: Ultrasound Images', () =>
        import('./pages/workshops/toluca-ultrasound-june2025/toluca-ultrasound-june2025').then(
            (m) => m.TolucaUltrasoundJune2025Page,
        ),
    ),
    page(
        'WorkshopToluca_Ultrasound_Oct2025.html',
        'Slicer for Ultrasound in Latin America: Turning Images into Insights',
        () =>
            import('./pages/workshops/toluca-ultrasound-oct2025/toluca-ultrasound-oct2025').then(
                (m) => m.TolucaUltrasoundOct2025Page,
            ),
    ),
    page(
        'WorkshopRP_AI2025.html',
        '3D Slicer Ribeirão Preto Workshop: Bridging Medical Imaging and AI',
        () => import('./pages/workshops/rp-ai2025/rp-ai2025').then((m) => m.RpAi2025Page),
    ),
    page(
        'WorkshopRP_AI2025_june.html',
        '3D Slicer Ribeirão Preto Workshop: AI-driven technology for Radiologists',
        () =>
            import('./pages/workshops/rp-ai2025-june/rp-ai2025-june').then(
                (m) => m.RpAi2025JunePage,
            ),
    ),
    page(
        'WorkshopRP_AI2025_materials.html',
        'Workshop Materials - 3D Slicer Ribeirão Preto',
        () => import('./pages/workshops/rp-materials/rp-materials').then((m) => m.RpMaterialsPage),
        { june: false },
    ),
    page(
        'WorkshopRP_AI2025_materials_june.html',
        'Workshop Materials - 3D Slicer Ribeirão Preto',
        () => import('./pages/workshops/rp-materials/rp-materials').then((m) => m.RpMaterialsPage),
        { june: true },
    ),
    page(
        'PW38_2023_GranCanaria.html',
        '38th NA-MIC Project Week - 3D Slicer for Latin America',
        () => import('./pages/workshops/pw38/pw38').then((m) => m.Pw38Page),
    ),
    page('PW39_2023_Montreal.html', '39th NA-MIC Project Week - 3D Slicer for Latin America', () =>
        import('./pages/workshops/pw39/pw39').then((m) => m.Pw39Page),
    ),
    page(
        'PW40_2024_GranCanaria.html',
        '40th NA-MIC Project Week - 3D Slicer for Latin America',
        () => import('./pages/workshops/pw40/pw40').then((m) => m.Pw40Page),
    ),
    page('PW41_2024_MIT.html', '41st NA-MIC Project Week - 3D Slicer for Latin America', () =>
        import('./pages/workshops/pw41/pw41').then((m) => m.Pw41Page),
    ),
    page(
        'PW42_2025_GranCanaria.html',
        '42nd NA-MIC Project Week - 3D Slicer for Latin America',
        () => import('./pages/workshops/pw42/pw42').then((m) => m.Pw42Page),
    ),
    page('CZI_OpenScience_2024.html', 'CZI Open Science 2024 - 3D Slicer for Latin America', () =>
        import('./pages/workshops/czi-2024/czi-2024').then((m) => m.Czi2024Page),
    ),
    page('CZI_OpenScience_2025.html', 'CZI Open Science 2025 - 3D Slicer for Latin America', () =>
        import('./pages/workshops/czi-2025/czi-2025').then((m) => m.Czi2025Page),
    ),
    page('CLAIB_CBEB_2022.html', 'CLAIB 2022 / CBEB 2022 - 3D Slicer for Latin America', () =>
        import('./pages/workshops/claib-cbeb-2022/claib-cbeb-2022').then(
            (m) => m.ClaibCbeb2022Page,
        ),
    ),
    page(
        'SoniaPujol_IEEEEMBS_June2026.html',
        'Dr. Sonia Pujol - IEEE EMBS Invited Talk - 3D Slicer for Latin America',
        () =>
            import('./pages/workshops/sonia-pujol-ieee-embs-june2026/sonia-pujol-ieee-embs-june2026').then(
                (m) => m.SoniaPujolIeeeEmbsJune2026Page,
            ),
    ),
    ...Object.entries(GALLERY_PAGES).map(([path, gallery]) =>
        page(
            path,
            gallery.title,
            () =>
                import('./pages/workshops/event-gallery/event-gallery').then(
                    (m) => m.EventGalleryPage,
                ),
            { gallery },
        ),
    ),
];

export const prerenderPaths: string[] = routes
    .map((route) => route.path!)
    .filter((path) => path === '' || path.endsWith('.html'))
    .filter((path) => path !== 'index.html');
