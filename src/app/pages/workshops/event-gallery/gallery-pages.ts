import { GalleryImage } from '../../../shared/workshop/gallery/gallery';

export interface GalleryPageData {
    title: string;
    heading: string;
    subtitle: string;
    sectionTitle: string;
    intro?: readonly string[];
    images: readonly GalleryImage[];
    backHref: string;
    decodingAsync?: boolean;
}

const RP_INTRO = [
    'We would like to express our sincere gratitude to everyone who attended and contributed to the success of our workshop. It was an inspiring day of learning, collaboration, and innovation in AI-driven medical imaging.',
    'Here are some memorable moments from the event:',
] as const;

function numbered(images: readonly GalleryImage[]): GalleryImage[] {
    return images.map((image, index) => ({ ...image, alt: `Workshop Photo ${index + 1}` }));
}

export const GALLERY_PAGES: Record<string, GalleryPageData> = {
    'WorkshopToluca_AI_Nov2025_ending.html': {
        title: 'Gallery - AI in Medicine Workshop',
        heading: 'Photo Gallery',
        subtitle: '3D Slicer: Taller de tecnología basada en IA',
        sectionTitle: 'Event Moments',
        backHref: 'WorkshopToluca_AI_Nov2025.html',
        images: [
            { src: 'public/assets/img/WorkshopToluca_AI_Nov2025/IMG_8585.jpg' },
            { src: 'public/assets/img/WorkshopToluca_AI_Nov2025/IMG_8588.jpg', variant: 'tall' },
            { src: 'public/assets/img/WorkshopToluca_AI_Nov2025/IMG_8600.jpg' },
            { src: 'public/assets/img/WorkshopToluca_AI_Nov2025/IMG_8614.jpg', variant: 'wide' },
            { src: 'public/assets/img/WorkshopToluca_AI_Nov2025/IMG_9244.JPEG' },
            { src: 'public/assets/img/WorkshopToluca_AI_Nov2025/IMG_9246.JPEG', variant: 'tall' },
            { src: 'public/assets/img/WorkshopToluca_AI_Nov2025/IMG_9247.JPEG' },
            { src: 'public/assets/img/WorkshopToluca_AI_Nov2025/IMG_9248.JPEG', variant: 'wide' },
            {
                src: 'public/assets/img/WorkshopToluca_AI_Nov2025/WhatsApp Image 2025-11-29 at 12.41.56_85627d28.jpg',
                variant: 'tall',
            },
            {
                src: 'public/assets/img/WorkshopToluca_AI_Nov2025/WhatsApp Image 2025-11-29 at 12.41.56_40c326d2.jpg',
            },
            {
                src: 'public/assets/img/WorkshopToluca_AI_Nov2025/WhatsApp Image 2025-11-29 at 12.42.01_0883a9f1.jpg',
            },
            {
                src: 'public/assets/img/WorkshopToluca_AI_Nov2025/WhatsApp Image 2025-11-29 at 12.42.01_dff280bf.jpg',
                variant: 'wide',
            },
        ],
    },
    'WorkshopToluca_Kidneys_May2024_ending.html': {
        title: 'Gallery - Obtaining 3D models of the kidneys from CT imaging workshop',
        heading: 'Photo Gallery',
        subtitle: 'Obtaining 3D models of the kidneys from CT imaging workshop',
        sectionTitle: 'Event Moments',
        backHref: 'WorkshopToluca_Kidneys_May2024.html',
        images: [
            { src: 'public/assets/img/WorkshopToluca_Kidneys_May2024/image7.png' },
            {
                src: 'public/assets/img/WorkshopToluca_Kidneys_May2024/image23.jpg',
                variant: 'tall',
            },
            { src: 'public/assets/img/WorkshopToluca_Kidneys_May2024/image5.jpg' },
            { src: 'public/assets/img/WorkshopToluca_Kidneys_May2024/image9.jpg', variant: 'wide' },
            { src: 'public/assets/img/WorkshopToluca_Kidneys_May2024/image1.jpg', variant: 'tall' },
            { src: 'public/assets/img/WorkshopToluca_Kidneys_May2024/img20.jpg' },
            {
                src: 'public/assets/img/WorkshopToluca_Kidneys_May2024/Evidencia 3D Slicer riñones (1)_page-0001.jpg',
                variant: 'wide',
            },
            {
                src: 'public/assets/img/WorkshopToluca_Kidneys_May2024/IMG_3794 (1).jpeg',
                variant: 'tall',
            },
            { src: 'public/assets/img/WorkshopToluca_Kidneys_May2024/4.png' },
            { src: 'public/assets/img/WorkshopToluca_Kidneys_May2024/5.png' },
            { src: 'public/assets/img/WorkshopToluca_Kidneys_May2024/6.jpg', variant: 'tall' },
            { src: 'public/assets/img/WorkshopToluca_Kidneys_May2024/8.jpg', variant: 'wide' },
            { src: 'public/assets/img/WorkshopToluca_Kidneys_May2024/9.jpg' },
            { src: 'public/assets/img/WorkshopToluca_Kidneys_May2024/10.jpg', variant: 'tall' },
            { src: 'public/assets/img/WorkshopToluca_Kidneys_May2024/12.png' },
            { src: 'public/assets/img/WorkshopToluca_Kidneys_May2024/13.png', variant: 'wide' },
            { src: 'public/assets/img/WorkshopToluca_Kidneys_May2024/15.png' },
            { src: 'public/assets/img/WorkshopToluca_Kidneys_May2024/16.jpeg', variant: 'tall' },
            { src: 'public/assets/img/WorkshopToluca_Kidneys_May2024/19.png' },
            { src: 'public/assets/img/WorkshopToluca_Kidneys_May2024/20.jpg' },
        ],
    },
    'WorkshopToluca_Physio_Oct2025_ending.html': {
        title: 'Gallery - 3D Slicer: Rehabilitation Medicine Workshop',
        heading: 'Photo Gallery',
        subtitle: '3D Slicer: Taller de tecnología basada en IA para médicos de rehabilitación',
        sectionTitle: 'Event Moments',
        backHref: 'WorkshopToluca_Physio_Oct2025.html',
        images: [
            { src: 'public/assets/img/WorkshopToluca_Physio_Oct2025/2.jpg' },
            {
                src: 'public/assets/img/WorkshopToluca_Physio_Oct2025/IMG_8176.jpg',
                variant: 'tall',
            },
            { src: 'public/assets/img/WorkshopToluca_Physio_Oct2025/IMG_8181.jpg' },
            {
                src: 'public/assets/img/WorkshopToluca_Physio_Oct2025/IMG_8185.jpg',
                variant: 'wide',
            },
            { src: 'public/assets/img/WorkshopToluca_Physio_Oct2025/IMG_8197.jpg' },
            {
                src: 'public/assets/img/WorkshopToluca_Physio_Oct2025/IMG_8199.jpg',
                variant: 'tall',
            },
            { src: 'public/assets/img/WorkshopToluca_Physio_Oct2025/IMG_8204.jpg' },
            { src: 'public/assets/img/WorkshopToluca_Physio_Oct2025/IMG_8206.jpg' },
            {
                src: 'public/assets/img/WorkshopToluca_Physio_Oct2025/IMG_8211.jpg',
                variant: 'wide',
            },
            { src: 'public/assets/img/WorkshopToluca_Physio_Oct2025/IMG_9016.JPEG' },
            {
                src: 'public/assets/img/WorkshopToluca_Physio_Oct2025/IMG_9018.JPEG',
                variant: 'tall',
            },
            { src: 'public/assets/img/WorkshopToluca_Physio_Oct2025/IMG_9019.JPEG' },
            { src: 'public/assets/img/WorkshopToluca_Physio_Oct2025/IMG_9020.JPEG' },
            {
                src: 'public/assets/img/WorkshopToluca_Physio_Oct2025/IMG_9022.JPEG',
                variant: 'wide',
            },
            {
                src: 'public/assets/img/WorkshopToluca_Physio_Oct2025/IMG_9023.JPEG',
                variant: 'tall',
            },
            {
                src: 'public/assets/img/WorkshopToluca_Physio_Oct2025/IMG_9026.JPEG',
                variant: 'wide',
            },
        ],
    },
    'WorkshopToluca_Segmentation_June2024_ending.html': {
        title: 'Gallery - 3D Slicer: Segmentation and 3D Reconstruction Workshop',
        heading: 'Photo Gallery',
        subtitle: '3D Slicer: Segmentation and 3D Reconstruction Workshop',
        sectionTitle: 'Event Moments',
        backHref: 'WorkshopToluca_Segmentation_June2024.html',
        images: [
            { src: 'public/assets/img/WorkshopToluca_Segmentation_June2024/IMG_4572.JPEG' },
            {
                src: 'public/assets/img/WorkshopToluca_Segmentation_June2024/IMG_4573.JPEG',
                variant: 'tall',
            },
            { src: 'public/assets/img/WorkshopToluca_Segmentation_June2024/IMG_4574.JPEG' },
            {
                src: 'public/assets/img/WorkshopToluca_Segmentation_June2024/IMG_4575.JPEG',
                variant: 'wide',
            },
            { src: 'public/assets/img/WorkshopToluca_Segmentation_June2024/IMG_4576.JPEG' },
            {
                src: 'public/assets/img/WorkshopToluca_Segmentation_June2024/IMG_4577.JPEG',
                variant: 'tall',
            },
            { src: 'public/assets/img/WorkshopToluca_Segmentation_June2024/IMG_4578.JPEG' },
            {
                src: 'public/assets/img/WorkshopToluca_Segmentation_June2024/IMG_4579.JPEG',
                variant: 'wide',
            },
            { src: 'public/assets/img/WorkshopToluca_Segmentation_June2024/IMG_4580.JPEG' },
            {
                src: 'public/assets/img/WorkshopToluca_Segmentation_June2024/IMG_4583.JPEG',
                variant: 'tall',
            },
            { src: 'public/assets/img/WorkshopToluca_Segmentation_June2024/IMG_4584.JPEG' },
            {
                src: 'public/assets/img/WorkshopToluca_Segmentation_June2024/IMG_4585.JPEG',
                variant: 'wide',
            },
            { src: 'public/assets/img/WorkshopToluca_Segmentation_June2024/IMG_4586.JPEG' },
            {
                src: 'public/assets/img/WorkshopToluca_Segmentation_June2024/IMG_4587.JPEG',
                variant: 'tall',
            },
            { src: 'public/assets/img/WorkshopToluca_Segmentation_June2024/IMG_4588.JPEG' },
            {
                src: 'public/assets/img/WorkshopToluca_Segmentation_June2024/IMG_4589.JPEG',
                variant: 'wide',
            },
            { src: 'public/assets/img/WorkshopToluca_Segmentation_June2024/IMG_4590.JPEG' },
            {
                src: 'public/assets/img/WorkshopToluca_Segmentation_June2024/IMG_4591.JPEG',
                variant: 'tall',
            },
            { src: 'public/assets/img/WorkshopToluca_Segmentation_June2024/IMG_4592.JPEG' },
            {
                src: 'public/assets/img/WorkshopToluca_Segmentation_June2024/IMG_4593.JPEG',
                variant: 'wide',
            },
            { src: 'public/assets/img/WorkshopToluca_Segmentation_June2024/IMG_4594.JPEG' },
            {
                src: 'public/assets/img/WorkshopToluca_Segmentation_June2024/IMG_4595.JPEG',
                variant: 'tall',
            },
            { src: 'public/assets/img/WorkshopToluca_Segmentation_June2024/IMG_4596.JPEG' },
            {
                src: 'public/assets/img/WorkshopToluca_Segmentation_June2024/IMG_4597.JPEG',
                variant: 'wide',
            },
            { src: 'public/assets/img/WorkshopToluca_Segmentation_June2024/IMG_4598.JPEG' },
            {
                src: 'public/assets/img/WorkshopToluca_Segmentation_June2024/IMG_4599.JPEG',
                variant: 'tall',
            },
            { src: 'public/assets/img/WorkshopToluca_Segmentation_June2024/IMG_4600.JPEG' },
            { src: 'public/assets/img/WorkshopToluca_Segmentation_June2024/IMG_4601.JPEG' },
            { src: 'public/assets/img/WorkshopToluca_Segmentation_June2024/IMG_4602.JPEG' },
            {
                src: 'public/assets/img/WorkshopToluca_Segmentation_June2024/IMG_4603.JPEG',
                variant: 'wide',
            },
            { src: 'public/assets/img/WorkshopToluca_Segmentation_June2024/IMG_4604.JPEG' },
        ],
    },
    'WorkshopToluca_Ultrasound_June2025_ending.html': {
        title: 'Gallery - 3D Slicer: Ultrasound Images',
        heading: 'Photo Gallery',
        subtitle: '3D Slicer: Ultrasound Images',
        sectionTitle: 'Event Moments',
        backHref: 'WorkshopToluca_Ultrasound_June2025.html',
        images: [
            { src: 'public/assets/img/WorkshopToluca_Ultrasound_June2025/IMG_8659.JPEG' },
            {
                src: 'public/assets/img/WorkshopToluca_Ultrasound_June2025/IMG_8661.JPEG',
                variant: 'tall',
            },
            {
                src: 'public/assets/img/WorkshopToluca_Ultrasound_June2025/IMG_8663.JPEG',
                variant: 'wide',
            },
            { src: 'public/assets/img/WorkshopToluca_Ultrasound_June2025/IMG_8664.JPEG' },
            { src: 'public/assets/img/WorkshopToluca_Ultrasound_June2025/IMG_8665.JPEG' },
            { src: 'public/assets/img/WorkshopToluca_Ultrasound_June2025/IMG_8667.JPEG' },
            {
                src: 'public/assets/img/WorkshopToluca_Ultrasound_June2025/IMG_8671.JPEG',
                variant: 'wide',
            },
            { src: 'public/assets/img/WorkshopToluca_Ultrasound_June2025/IMG_8673.JPEG' },
            { src: 'public/assets/img/WorkshopToluca_Ultrasound_June2025/IMG_8674.JPEG' },
        ],
    },
    'WorkshopToluca_Ultrasound_Oct2025_ending.html': {
        title: 'Gallery - 3D Slicer: Ultrasound Workshop',
        heading: 'Photo Gallery',
        subtitle:
            'Slicer para ultrasonido en América Latina: convirtiendo imágenes en conocimientos',
        sectionTitle: 'Event Moments',
        backHref: 'WorkshopToluca_Ultrasound_Oct2025.html',
        images: [
            { src: 'public/assets/img/WorkshopToluca_Ultrasound_Oct2025/IMG_8357.jpg' },
            {
                src: 'public/assets/img/WorkshopToluca_Ultrasound_Oct2025/IMG_8359.jpg',
                variant: 'tall',
            },
            { src: 'public/assets/img/WorkshopToluca_Ultrasound_Oct2025/IMG_8363.jpg' },
            {
                src: 'public/assets/img/WorkshopToluca_Ultrasound_Oct2025/IMG_8365.jpg',
                variant: 'wide',
            },
            { src: 'public/assets/img/WorkshopToluca_Ultrasound_Oct2025/IMG_8375.jpg' },
            {
                src: 'public/assets/img/WorkshopToluca_Ultrasound_Oct2025/IMG_8378.jpg',
                variant: 'tall',
            },
            { src: 'public/assets/img/WorkshopToluca_Ultrasound_Oct2025/IMG_8386.jpg' },
            { src: 'public/assets/img/WorkshopToluca_Ultrasound_Oct2025/IMG_8388.jpg' },
            {
                src: 'public/assets/img/WorkshopToluca_Ultrasound_Oct2025/IMG_8393.jpg',
                variant: 'wide',
            },
            { src: 'public/assets/img/WorkshopToluca_Ultrasound_Oct2025/IMG_8394.jpg' },
            {
                src: 'public/assets/img/WorkshopToluca_Ultrasound_Oct2025/IMG_8396.jpg',
                variant: 'tall',
            },
            { src: 'public/assets/img/WorkshopToluca_Ultrasound_Oct2025/IMG_9098.JPEG' },
            { src: 'public/assets/img/WorkshopToluca_Ultrasound_Oct2025/IMG_9106.JPEG' },
            {
                src: 'public/assets/img/WorkshopToluca_Ultrasound_Oct2025/IMG_9107.JPEG',
                variant: 'wide',
            },
            { src: 'public/assets/img/WorkshopToluca_Ultrasound_Oct2025/IMG_9111.JPEG' },
            {
                src: 'public/assets/img/WorkshopToluca_Ultrasound_Oct2025/IMG_9126.JPEG',
                variant: 'tall',
            },
            { src: 'public/assets/img/WorkshopToluca_Ultrasound_Oct2025/IMG_9127.JPEG' },
            { src: 'public/assets/img/WorkshopToluca_Ultrasound_Oct2025/IMG_9135.JPEG' },
            {
                src: 'public/assets/img/WorkshopToluca_Ultrasound_Oct2025/WhatsApp Image 2025-11-29 at 12.42.04_1de533dc.jpg',
                variant: 'wide',
            },
            {
                src: 'public/assets/img/WorkshopToluca_Ultrasound_Oct2025/WhatsApp Image 2025-11-29 at 12.42.05_4d8c17a0.jpg',
            },
            {
                src: 'public/assets/img/WorkshopToluca_Ultrasound_Oct2025/WhatsApp Image 2025-11-29 at 12.42.05_818e655a.jpg',
                variant: 'tall',
            },
            {
                src: 'public/assets/img/WorkshopToluca_Ultrasound_Oct2025/WhatsApp Image 2025-11-29 at 12.42.05_e7c81ebb.jpg',
            },
            {
                src: 'public/assets/img/WorkshopToluca_Ultrasound_Oct2025/WhatsApp Image 2025-11-29 at 12.42.06_55118bf6.jpg',
                variant: 'wide',
            },
            {
                src: 'public/assets/img/WorkshopToluca_Ultrasound_Oct2025/WhatsApp Image 2025-11-29 at 12.42.06_950fb317.jpg',
            },
            {
                src: 'public/assets/img/WorkshopToluca_Ultrasound_Oct2025/WhatsApp Image 2025-11-29 at 12.42.06_a5b6ac8f.jpg',
                variant: 'tall',
            },
            {
                src: 'public/assets/img/WorkshopToluca_Ultrasound_Oct2025/WhatsApp Image 2025-11-29 at 12.42.06_eeba1486.jpg',
            },
            {
                src: 'public/assets/img/WorkshopToluca_Ultrasound_Oct2025/WhatsApp Image 2025-11-29 at 12.42.07_f3f9b86c.jpg',
                variant: 'wide',
            },
        ],
    },
    'WorkshopRP_AI2025_ending.html': {
        title: 'Thank You - 3D Slicer Ribeirão Preto Workshop',
        heading: 'Thank You for Participating!',
        subtitle: '3D Slicer Ribeirão Preto Workshop: AI-driven technology for Radiologists',
        sectionTitle: 'Event Highlights',
        intro: RP_INTRO,
        backHref: 'WorkshopRP_AI2025.html',
        decodingAsync: true,
        images: numbered([
            { src: 'public/assets/img/WorkshopRP_AI2025_ending/DSC03639.JPG' },
            { src: 'public/assets/img/WorkshopRP_AI2025_ending/DSC03630.JPG', variant: 'tall' },
            { src: 'public/assets/img/WorkshopRP_AI2025_ending/DSC03635.JPG' },
            { src: 'public/assets/img/WorkshopRP_AI2025_ending/DSC03633.JPG', variant: 'tall' },
            { src: 'public/assets/img/WorkshopRP_AI2025_ending/DSC03625.JPG' },
            { src: 'public/assets/img/WorkshopRP_AI2025_ending/DSC03647.JPG', variant: 'wide' },
            { src: 'public/assets/img/WorkshopRP_AI2025_ending/DSC03650.JPG', variant: 'tall' },
            { src: 'public/assets/img/WorkshopRP_AI2025_ending/DSC03651.JPG' },
            { src: 'public/assets/img/WorkshopRP_AI2025_ending/DSC03652.JPG' },
            { src: 'public/assets/img/WorkshopRP_AI2025_ending/DSC03653.JPG', variant: 'wide' },
            { src: 'public/assets/img/WorkshopRP_AI2025_ending/DSC03658.JPG' },
            { src: 'public/assets/img/WorkshopRP_AI2025_ending/DSC03656.JPG' },
            { src: 'public/assets/img/WorkshopRP_AI2025_ending/DSC03655.JPG' },
        ]),
    },
    'WorkshopRP_AI2025_june_ending.html': {
        title: 'Thank You - 3D Slicer Ribeirão Preto Workshop (June)',
        heading: 'Thank You for Participating!',
        subtitle: '3D Slicer Ribeirão Preto Workshop (June): AI-driven technology for Radiologists',
        sectionTitle: 'Event Highlights',
        intro: RP_INTRO,
        backHref: 'WorkshopRP_AI2025_june.html',
        decodingAsync: true,
        images: numbered([
            { src: 'public/assets/img/WorkshopRP_AI2025_june_ending/1 (1).jpg' },
            { src: 'public/assets/img/WorkshopRP_AI2025_june_ending/1 (2).jpg', variant: 'tall' },
            { src: 'public/assets/img/WorkshopRP_AI2025_june_ending/1 (3).jpg' },
            { src: 'public/assets/img/WorkshopRP_AI2025_june_ending/1 (4).jpg' },
            { src: 'public/assets/img/WorkshopRP_AI2025_june_ending/1 (5).jpg', variant: 'tall' },
            { src: 'public/assets/img/WorkshopRP_AI2025_june_ending/1 (6).jpg' },
            { src: 'public/assets/img/WorkshopRP_AI2025_june_ending/1 (7).jpg', variant: 'wide' },
            { src: 'public/assets/img/WorkshopRP_AI2025_june_ending/1 (8).jpg', variant: 'tall' },
            { src: 'public/assets/img/WorkshopRP_AI2025_june_ending/1 (9).jpg' },
            { src: 'public/assets/img/WorkshopRP_AI2025_june_ending/1 (10).jpg', variant: 'wide' },
        ]),
    },
};
