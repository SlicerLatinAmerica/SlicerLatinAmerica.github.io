import { Route, Routes } from '@angular/router';

import { PageHead } from './core/head.service';
import { GALLERY_PAGES } from './pages/workshops/event-gallery/gallery-pages';

const workshop: PageHead = { bodyClass: 'workshop-body' };
const workshopPt: PageHead = { bodyClass: 'workshop-body', htmlLang: 'pt-BR' };
const site: PageHead = { bootstrap: true, fontWeights: '300;400;500;700' };

function page(
    path: string,
    title: string,
    loadComponent: Route['loadComponent'],
    head: PageHead,
    data?: Record<string, unknown>,
): Route {
    return { path, title, loadComponent, data: { ...data, head } };
}

const loadHome = () => import('./pages/home/home').then((m) => m.HomePage);
const loadNotFound = () => import('./pages/not-found/not-found').then((m) => m.NotFoundPage);

export const routes: Routes = [
    {
        path: '',
        title: '3D Slicer for Latin America',
        loadComponent: loadHome,
        data: { head: site },
    },
    page('index.html', '3D Slicer for Latin America', loadHome, site),
    page(
        'events.html',
        '3D Slicer for Latin America - Events',
        () => import('./pages/events/events').then((m) => m.EventsPage),
        site,
    ),
    page(
        'team.html',
        '3D Slicer for Latin America - Team',
        () => import('./pages/team/team').then((m) => m.TeamPage),
        site,
    ),
    page(
        'work.html',
        'Our Work - 3D Slicer for Latin America',
        () => import('./pages/work/work').then((m) => m.WorkPage),
        site,
    ),
    page(
        'localization.html',
        'Localization - 3D Slicer for Latin America',
        () => import('./pages/localization/localization').then((m) => m.LocalizationPage),
        site,
    ),
    page(
        'community-localization.html',
        'Community Localization - 3D Slicer for Latin America',
        () =>
            import('./pages/community-localization/community-localization').then(
                (m) => m.CommunityLocalizationPage,
            ),
        site,
    ),
    page(
        'tutorial-collection.html',
        'Slicer Tutorial Maker Collection - 3D Slicer for Latin America',
        () =>
            import('./pages/tutorial-collection/tutorial-collection').then(
                (m) => m.TutorialCollectionPage,
            ),
        site,
    ),
    page(
        'sponsors.html',
        '3D Slicer',
        () => import('./pages/sponsors/sponsors').then((m) => m.SponsorsPage),
        site,
    ),
    page(
        'contact.html',
        '3D Slicer',
        () => import('./pages/contact/contact').then((m) => m.ContactPage),
        { ...site, bootstrapIcons: true },
    ),
    page(
        'participants.html',
        '3D Slicer for Latin America: Outreach Events Participants',
        () => import('./pages/participants/participants').then((m) => m.ParticipantsPage),
        { ...site, leaflet: true, simplebar: true },
    ),
    page('404.html', 'Page not found - 3D Slicer for Latin America', loadNotFound, site),
    page(
        'md-viewer.html',
        'Loading…',
        () => import('./pages/md-viewer/md-viewer').then((m) => m.MdViewerPage),
        { bootstrap: 'css-only' },
    ),
    page(
        'WorkshopToluca_AI_Nov2025.html',
        '3D Slicer: AI-based Technology Workshop',
        () =>
            import('./pages/workshops/toluca-ai-nov2025/toluca-ai-nov2025').then(
                (m) => m.TolucaAiNov2025Page,
            ),
        workshop,
    ),
    page(
        'WorkshopToluca_Kidneys_May2024.html',
        'Kidney Segmentation Workshop',
        () =>
            import('./pages/workshops/toluca-kidneys-may2024/toluca-kidneys-may2024').then(
                (m) => m.TolucaKidneysMay2024Page,
            ),
        workshop,
    ),
    page(
        'WorkshopToluca_Physio_Oct2025.html',
        '3D Slicer: AI-based Technology Workshop for Rehabilitation Medicine Physicians',
        () =>
            import('./pages/workshops/toluca-physio-oct2025/toluca-physio-oct2025').then(
                (m) => m.TolucaPhysioOct2025Page,
            ),
        workshop,
    ),
    page(
        'WorkshopToluca_Segmentation_June2024.html',
        '3D Slicer Segmentation Workshop',
        () =>
            import('./pages/workshops/toluca-segmentation-june2024/toluca-segmentation-june2024').then(
                (m) => m.TolucaSegmentationJune2024Page,
            ),
        workshop,
    ),
    page(
        'WorkshopToluca_Ultrasound_June2025.html',
        '3D Slicer: Ultrasound Images',
        () =>
            import('./pages/workshops/toluca-ultrasound-june2025/toluca-ultrasound-june2025').then(
                (m) => m.TolucaUltrasoundJune2025Page,
            ),
        workshop,
    ),
    page(
        'WorkshopToluca_Ultrasound_Oct2025.html',
        'Slicer for Ultrasound in Latin America: Turning Images into Insights',
        () =>
            import('./pages/workshops/toluca-ultrasound-oct2025/toluca-ultrasound-oct2025').then(
                (m) => m.TolucaUltrasoundOct2025Page,
            ),
        workshop,
    ),
    page(
        'WorkshopRP_AI2025.html',
        '3D Slicer Ribeirão Preto Workshop: Bridging Medical Imaging and AI',
        () => import('./pages/workshops/rp-ai2025/rp-ai2025').then((m) => m.RpAi2025Page),
        workshopPt,
    ),
    page(
        'WorkshopRP_AI2025_june.html',
        '3D Slicer Ribeirão Preto Workshop: AI-driven technology for Radiologists',
        () =>
            import('./pages/workshops/rp-ai2025-june/rp-ai2025-june').then(
                (m) => m.RpAi2025JunePage,
            ),
        workshopPt,
    ),
    page(
        'WorkshopRP_AI2025_materials.html',
        'Workshop Materials - 3D Slicer Ribeirão Preto',
        () => import('./pages/workshops/rp-materials/rp-materials').then((m) => m.RpMaterialsPage),
        workshopPt,
        { june: false },
    ),
    page(
        'WorkshopRP_AI2025_materials_june.html',
        'Workshop Materials - 3D Slicer Ribeirão Preto',
        () => import('./pages/workshops/rp-materials/rp-materials').then((m) => m.RpMaterialsPage),
        workshopPt,
        { june: true },
    ),
    page(
        'PW38_2023_GranCanaria.html',
        '38th NA-MIC Project Week - 3D Slicer for Latin America',
        () => import('./pages/workshops/pw38/pw38').then((m) => m.Pw38Page),
        workshop,
    ),
    page(
        'PW39_2023_Montreal.html',
        '39th NA-MIC Project Week - 3D Slicer for Latin America',
        () => import('./pages/workshops/pw39/pw39').then((m) => m.Pw39Page),
        workshop,
    ),
    page(
        'PW40_2024_GranCanaria.html',
        '40th NA-MIC Project Week - 3D Slicer for Latin America',
        () => import('./pages/workshops/pw40/pw40').then((m) => m.Pw40Page),
        workshop,
    ),
    page(
        'PW41_2024_MIT.html',
        '41st NA-MIC Project Week - 3D Slicer for Latin America',
        () => import('./pages/workshops/pw41/pw41').then((m) => m.Pw41Page),
        workshop,
    ),
    page(
        'PW42_2025_GranCanaria.html',
        '42nd NA-MIC Project Week - 3D Slicer for Latin America',
        () => import('./pages/workshops/pw42/pw42').then((m) => m.Pw42Page),
        workshop,
    ),
    page(
        'CZI_OpenScience_2024.html',
        'CZI Open Science 2024 - 3D Slicer for Latin America',
        () => import('./pages/workshops/czi-2024/czi-2024').then((m) => m.Czi2024Page),
        workshop,
    ),
    page(
        'CZI_OpenScience_2025.html',
        'CZI Open Science 2025 - 3D Slicer for Latin America',
        () => import('./pages/workshops/czi-2025/czi-2025').then((m) => m.Czi2025Page),
        workshop,
    ),
    page(
        'CLAIB_CBEB_2022.html',
        'CLAIB 2022 / CBEB 2022 - 3D Slicer for Latin America',
        () =>
            import('./pages/workshops/claib-cbeb-2022/claib-cbeb-2022').then(
                (m) => m.ClaibCbeb2022Page,
            ),
        workshop,
    ),
    page(
        'SoniaPujol_IEEEEMBS_June2026.html',
        'Dr. Sonia Pujol - IEEE EMBS Invited Talk - 3D Slicer for Latin America',
        () =>
            import('./pages/workshops/sonia-pujol-ieee-embs-june2026/sonia-pujol-ieee-embs-june2026').then(
                (m) => m.SoniaPujolIeeeEmbsJune2026Page,
            ),
        workshop,
    ),
    ...Object.entries(GALLERY_PAGES).map(([path, gallery]) =>
        page(
            path,
            gallery.title,
            () =>
                import('./pages/workshops/event-gallery/event-gallery').then(
                    (m) => m.EventGalleryPage,
                ),
            workshop,
            { gallery },
        ),
    ),
    page('**', 'Page not found - 3D Slicer for Latin America', loadNotFound, site),
];

export const prerenderPaths: string[] = routes
    .map((route) => route.path!)
    .filter((path) => path === '' || path.endsWith('.html'))
    .filter((path) => path !== 'index.html');
