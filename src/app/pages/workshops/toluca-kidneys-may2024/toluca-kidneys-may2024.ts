import { Component } from '@angular/core';

import { Speaker, Speakers } from '../../../shared/workshop/speakers/speakers';
import {
    WORKSHOP_FOOTER_SHORT,
    WorkshopFooter,
} from '../../../shared/workshop/workshop-footer/workshop-footer';
import { WorkshopButtons } from '../../../shared/workshop/workshop-buttons/workshop-buttons';
import { WorkshopHeader } from '../../../shared/workshop/workshop-header/workshop-header';

@Component({
    selector: 'app-toluca-kidneys-may2024-page',
    imports: [WorkshopButtons, WorkshopHeader, WorkshopFooter, Speakers],
    templateUrl: './toluca-kidneys-may2024.html',
    styles: ':host { display: contents }',
})
export class TolucaKidneysMay2024Page {
    protected readonly footerLinks = WORKSHOP_FOOTER_SHORT;

    protected readonly speakers: readonly Speaker[] = [
        {
            name: 'Dr. Sonia Pujol',
            org: 'Assistant Professor of Radiology, Harvard Medical School',
            img: 'public/assets/img/members/sonia_pujol.webp',
            href: 'https://www.linkedin.com/in/sonia-pujol-165660186/',
            bio: 'Director of Training, Education, and Internationalization, 3D Slicer | PhD in Biomedical Engineering',
        },
    ];

    protected readonly organizers: readonly Speaker[] = [
        {
            name: 'Enrique Hernández',
            org: 'Universidad Autónoma del Estado de México',
            img: 'public/assets/img/members/enrique_laredo.jpg',
            bio: 'Medical Bioengineer. Member of the Mexican Team for the 3D Slicer for Latin America project.',
        },
    ];
}
