import { Component } from '@angular/core';

import { Speaker, Speakers } from '../../../shared/workshop/speakers';
import { WORKSHOP_FOOTER_SHORT, WorkshopFooter } from '../../../shared/workshop/workshop-footer';
import { WorkshopHeader } from '../../../shared/workshop/workshop-header';

@Component({
    selector: 'app-toluca-ultrasound-oct2025-page',
    imports: [WorkshopHeader, WorkshopFooter, Speakers],
    templateUrl: './toluca-ultrasound-oct2025.html',
    styles: ':host { display: contents }',
})
export class TolucaUltrasoundOct2025Page {
    protected readonly footerLinks = WORKSHOP_FOOTER_SHORT;

    protected readonly speakers: readonly Speaker[] = [
        {
            name: 'Dr. Sonia Pujol',
            org: 'Assistant Professor of Radiology, Harvard Medical School',
            img: 'public/assets/img/members/sonia_pujol.webp',
            href: 'https://www.linkedin.com/in/sonia-pujol-165660186/',
            bio: 'Director of Training, Education, and Internationalization, 3D Slicer | PhD in Biomedical Engineering',
        },
        {
            name: 'MCC. Enrique Hernández Laredo',
            org: 'Universidad Autónoma del Estado de México',
            img: 'public/assets/img/members/enrique_laredo.jpg',
            bio: 'Medical Bioengineer. Member of the Mexican Team for the 3D Slicer for Latin America project.',
        },
        {
            name: 'Dr. Fausto Álvarez',
            org: 'UltraTab Ultrasound',
            img: 'public/assets/img/members/Fausto.png',
            bio: 'Master in diagnostic ultrasound from Mesoamerican University, specialized in breast, musculoskeletal, Doppler, and obstetric ultrasound. With experience since 2016 in various institutions, he currently practices at UltraTab Ultrasound.',
        },
        {
            name: 'MCI. Monserrat Ríos Hernández',
            org: 'Universidad Autónoma del Estado de México',
            img: 'public/assets/img/members/monserrat_rios.jpg',
            bio: 'Developer.',
        },
        {
            name: 'Ing. Leidy Mora',
            org: 'Universidad Militar Nueva Granada',
            img: 'public/assets/img/members/LeidyMora.png',
            bio: "Biomedical engineer from Nueva Granada Military University, currently pursuing a Master's degree focused on AI in echocardiography. She has experience in ultrasound-guided procedures and 3D reconstruction of anatomical structures using 3D Slicer.",
        },
    ];
}
