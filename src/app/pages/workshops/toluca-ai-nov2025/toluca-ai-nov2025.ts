import { Component, inject } from '@angular/core';

import { HeadService } from '../../../core/head.service';
import { Speaker, Speakers } from '../../../shared/workshop/speakers';
import { WORKSHOP_FOOTER_SHORT, WorkshopFooter } from '../../../shared/workshop/workshop-footer';
import { WorkshopHeader } from '../../../shared/workshop/workshop-header';

@Component({
    selector: 'app-toluca-ai-nov2025-page',
    imports: [WorkshopHeader, WorkshopFooter, Speakers],
    templateUrl: './toluca-ai-nov2025.html',
    styles: ':host { display: contents }',
})
export class TolucaAiNov2025Page {
    protected readonly footerLinks = WORKSHOP_FOOTER_SHORT;

    protected readonly speakers: readonly Speaker[] = [
        {
            name: 'Dr. Adriana Herlinda Vilchis González',
            org: 'Universidad Autónoma del Estado de México',
            img: 'public/assets/img/members/adriana_gonzalez.png',
            href: 'https://orcid.org/0000-0002-5422-5593',
            bio: 'Principal Investigator of the Mexican Team for the 3D Slicer for Latin America project.',
        },
        {
            name: 'Dr. Sonia Pujol',
            org: 'Assistant Professor of Radiology, Harvard Medical School',
            img: 'public/assets/img/members/sonia_pujol.webp',
            href: 'https://www.linkedin.com/in/sonia-pujol-165660186/',
            bio: 'Director of Training, Education, and Internationalization, 3D Slicer | PhD in Biomedical Engineering',
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
