export interface TutorialLink {
    href: string;
    labelKey?: string;
    label?: string;
}

export interface TutorialCard {
    title: string;
    links: readonly TutorialLink[];
    igt?: boolean;
}

const PDFS = './public/assets/pdfs/Tutorials';

export const LOCALIZATION_CARDS: readonly TutorialCard[] = [
    {
        title: 'Slicer Welcome Tutorial',
        links: [
            { href: `${PDFS}/SlicerWelcome-SPujol_en_US.pdf`, labelKey: 'english' },
            { href: `${PDFS}/Welcome_Pt.pdf`, labelKey: 'portugueseBR' },
            { href: `${PDFS}/Welcome_Es.pdf`, labelKey: 'spanishLA' },
        ],
    },
    {
        title: 'Slicer in 4 minutes',
        links: [
            { href: `${PDFS}/Four_Minutes_En.pdf`, labelKey: 'english' },
            { href: `${PDFS}/Four_Minutes_Pt.pdf`, labelKey: 'portugueseBR' },
            { href: `${PDFS}/Four_Minutes_Es.pdf`, labelKey: 'spanishLA' },
        ],
    },
    {
        title: 'DICOM and 3D Slicer Tutorial',
        links: [
            { href: `${PDFS}/3DSlicerDICOMTutorial-SPujol_en_US.pdf`, labelKey: 'english' },
            { href: `${PDFS}/DICOM_Pt.pdf`, labelKey: 'portugueseBR' },
            { href: `${PDFS}/DICOM_Es.pdf`, labelKey: 'spanishLA' },
            { href: `${PDFS}/3DSlicerDICOMTutorial-SPujol_fr.pdf`, labelKey: 'french' },
        ],
    },
    {
        title: 'Basics of Data Loading and 3D Visualization',
        links: [
            { href: `${PDFS}/SlicerVisualizationTutorial-SPujol_en_US.pdf`, labelKey: 'english' },
            { href: `${PDFS}/Basics_of_Data_Loading_Pt.pdf`, labelKey: 'portugueseBR' },
            { href: `${PDFS}/Basics_of_Data_Loading_Es.pdf`, labelKey: 'spanishLA' },
            { href: `${PDFS}/SlicerVisualizationTutorial-SPujol_fr.pdf`, labelKey: 'french' },
        ],
    },
    {
        title: 'AI-Based Segmentation in 3D Slicer',
        links: [
            {
                href: `${PDFS}/SlicerTutorialAiBasedSegmentationIn3dSlicer-SPujol_en-US.pdf`,
                labelKey: 'english',
            },
            {
                href: `${PDFS}/SlicerAI_Segmentation_SoniaPujol_pt-BR.pdf`,
                labelKey: 'portugueseBR',
            },
            { href: `${PDFS}/SlicerAI_Segmentation_SoniaPujol_es419.pdf`, labelKey: 'spanishLA' },
        ],
    },
    {
        title: 'Slicer Developer Tutorial: Programming in Slicer',
        links: [
            { href: `${PDFS}/Slicer5_ProgrammingTutorial_SPujol-SPieper.pdf`, label: 'English' },
            {
                href: `${PDFS}/Slicer5_Programando no Slicer_SPujol-SPieper.pdf`,
                label: 'Portuguese (BR)',
            },
            {
                href: `${PDFS}/Slicer5_ProgrammingTutorial_Espagnol_5_10.pdf`,
                label: 'Spanish (Latin America)',
            },
        ],
    },
    {
        title: 'Segmentation for 3D Printing',
        links: [
            { href: `${PDFS}/Segmentation3DPrinting-ANagy-CPinter_en_US.pdf`, labelKey: 'english' },
            {
                href: `${PDFS}/Segmentation3DPrinting-ANagy-CPinter_pt-BR.pdf`,
                labelKey: 'portugueseBR',
            },
            { href: `${PDFS}/SegmentationFor3DPrinting_es.pdf`, labelKey: 'spanishLA' },
        ],
    },
    {
        title: 'Introduction to Image Phenotyping',
        links: [
            { href: `${PDFS}/ImagePhenotypingTutorial_SoniaPujol_en_US.pdf`, label: 'English' },
            {
                href: `${PDFS}/ImagePhenotypingTutorial_SoniaPujol_pt_BR.pdf`,
                label: 'Portuguese (BR)',
            },
            {
                href: `${PDFS}/IntroduccionAImagenesFenotipicas5_10.pdf`,
                label: 'Spanish (Latin America)',
            },
        ],
    },
    { title: 'SlicerIGT Tutorials', links: [], igt: true },
    {
        title: 'Tutorial Maker',
        links: [
            {
                href: 'https://github.com/SoniaPujolLab/SlicerTutorialMaker/blob/main/README.md',
                labelKey: 'english',
            },
            {
                href: 'https://github.com/SoniaPujolLab/SlicerTutorialMaker/blob/main/README_pt-br.md',
                labelKey: 'portugueseBR',
            },
            {
                href: 'https://github.com/SoniaPujolLab/SlicerTutorialMaker/blob/main/README_esp.md',
                labelKey: 'spanishLA',
            },
        ],
    },
];

export const IGT_UNITS = ['U01', 'U09', 'U11', 'U12', 'U13'] as const;

export const IGT_GROUPS = [
    {
        id: 'slicerIGTEnglish',
        labelKey: 'english',
        files: [
            `${PDFS}/SlicerIGT-U01_InstallingSoftware_en_US.pdf`,
            `${PDFS}/SlicerIGT-U09_Models_en_US.pdf`,
            `${PDFS}/SlicerIGT-U11_PivotCalibration_en_US.pdf`,
            `${PDFS}/SlicerIGT-U12_LandmarkRegistration_en_US.pdf`,
            `${PDFS}/SlicerIGT-U13_SurfaceRegistration_en_US.pdf`,
        ],
    },
    {
        id: 'slicerIGTPortuguese',
        labelKey: 'portugueseBR',
        files: [
            `${PDFS}/SlicerIGT-U01_InstallingSoftware_pt-BR.pdf`,
            `${PDFS}/SlicerIGT-U09_Models_pt-BR.pdf`,
            `${PDFS}/SlicerIGT-U11_PivotCalibrationPT-BR.pdf`,
            `${PDFS}/SlicerIGT-U12_LandmarkRegistration_pt-BR.pdf`,
            `${PDFS}/SlicerIGT-U13_SurfaceRegistration_pt-BR.pdf`,
        ],
    },
    {
        id: 'slicerIGTSpanish',
        labelKey: 'spanishLA',
        files: [
            `${PDFS}/SlicerIGT-U01_InstallingSoftware_es419.pdf`,
            `${PDFS}/SlicerIGT-U09_Models_es419.pdf`,
            `${PDFS}/SlicerIGT-U11_PivotCalibration_es419.pdf`,
            `${PDFS}/SlicerIGT-U12_LandmarkRegistration_es419.pdf`,
            `${PDFS}/SlicerIGT-U13_SurfaceRegistration_es419.pdf`,
        ],
    },
] as const;

export const GLOSSARY_CARDS = [
    {
        title: 'Slicer Glossary - Spanish (Latin America)',
        href: 'https://github.com/SoniaPujolLab/SlicerLanguagePacks/blob/main/Glossary_es.md',
    },
    {
        title: 'Slicer Glossary - Portuguese (Brazil)',
        href: 'https://github.com/SoniaPujolLab/SlicerLanguagePacks/blob/main/Glossary_pt-br.md',
    },
    {
        title: 'Slicer Glossary - French',
        href: 'https://github.com/SoniaPujolLab/SlicerLanguagePacks/blob/main/Glossary_fr.md',
    },
] as const;
