import { Component, inject } from '@angular/core';

import { HeadService } from '../../../core/head.service';
import { Speaker, Speakers } from '../../../shared/workshop/speakers';
import { WORKSHOP_FOOTER_SHORT, WorkshopFooter } from '../../../shared/workshop/workshop-footer';
import { WorkshopHeader } from '../../../shared/workshop/workshop-header';

@Component({
    selector: 'app-toluca-ultrasound-june2025-page',
    imports: [WorkshopHeader, WorkshopFooter, Speakers],
    templateUrl: './toluca-ultrasound-june2025.html',
    styles: ':host { display: contents }',
})
export class TolucaUltrasoundJune2025Page {
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
            name: 'LBM. Enrique Hernandez Laredo',
            org: 'Universidad Autónoma del Estado de México',
            img: 'public/assets/img/members/enrique_laredo.jpg',
            bio: 'Medical Bioengineer. Member of the Mexican Team for the 3D Slicer for Latin America project.',
        },
        {
            name: 'Dr. Edgar Arturo Rodríguez Ramírez',
            org: 'Salud Digna',
            img: 'public/assets/img/members/Edgar.jpeg',
            bio: "Edgar Arturo Rodríguez Ramírez is a surgeon with a solid specialization in diagnostic medical ultrasonography. A graduate of the Autonomous University of Guadalajara, he complemented his training with diplomas and master's degrees in medical ultrasound, highlighting his Master's in Musculoskeletal Ultrasound from the International University of La Rioja (UNIR) and his Master's in Diagnostic Ultrasound from IMDI / Mesoamerican University.",
        },
        {
            name: 'Ing. Leidy Mora',
            org: 'Universidad Militar Nueva Granada',
            img: 'public/assets/img/members/LeidyMora.png',
            bio: "Biomedical engineer from Nueva Granada Military University, currently pursuing a Master's degree focused on AI in echocardiography. She has experience in ultrasound-guided procedures and 3D reconstruction of anatomical structures using 3D Slicer.",
        },
    ];

    constructor() {
        inject(HeadService).apply({ bodyClass: 'workshop-body' });
    }
}
