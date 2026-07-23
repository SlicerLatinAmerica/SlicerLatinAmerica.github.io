import { Component } from '@angular/core';

import { Speaker, Speakers } from '../../../shared/workshop/speakers/speakers';
import {
    WORKSHOP_FOOTER_SHORT,
    WorkshopFooter,
} from '../../../shared/workshop/workshop-footer/workshop-footer';
import { WorkshopButtons } from '../../../shared/workshop/workshop-buttons/workshop-buttons';
import { WorkshopHeader } from '../../../shared/workshop/workshop-header/workshop-header';

@Component({
    selector: 'app-toluca-segmentation-june2024-page',
    imports: [WorkshopButtons, WorkshopHeader, WorkshopFooter, Speakers],
    templateUrl: './toluca-segmentation-june2024.html',
    styles: ':host { display: contents }',
})
export class TolucaSegmentationJune2024Page {
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
            name: 'PhD. Adriana Vilchis',
            org: 'Universidad Autónoma del Estado de México',
            img: 'public/assets/img/members/adriana_gonzalez.png',
            href: 'https://orcid.org/0000-0002-5422-5593',
            bio: 'Principal Investigator of the Mexican Team for the 3D Slicer for Latin America project.',
        },
        {
            name: 'PhD. Joel Zagoya López',
            org: 'Universidad Autónoma del Estado de México',
            img: 'public/assets/img/members/joel_lopez.jpeg',
            bio: 'Translation Reviewer. Expert in design, segmentation and reconstruction of 3D models for 3D printing.',
        },
    ];

    protected readonly organizers: readonly Speaker[] = [
        {
            name: 'Dr. Juan Carlos Avila Vilchis',
            org: 'Universidad Autónoma del Estado de México',
            img: 'public/assets/img/members/juan_vilchis.png',
            bio: 'Translator Supervisor',
        },
        {
            name: 'Dr. Vianney Muñoz Jiménez',
            org: 'Universidad Autónoma del Estado de México',
            img: 'public/assets/img/members/vianney_jimenez.jpeg',
            bio: 'Developer Supervisor',
        },
        {
            name: 'M. Victor M. Montaño Serrano',
            org: 'Universidad Autónoma del Estado de México',
            img: 'public/assets/img/members/victor_serrano.jpg',
            bio: 'Developer',
        },
        {
            name: 'Enrique Hernandez Laredo',
            org: 'Universidad Autónoma del Estado de México',
            img: 'public/assets/img/members/enrique_laredo.jpg',
            bio: 'Medical Bioengineer. Member of the Mexican Team for the 3D Slicer for Latin America project.',
        },
        {
            name: 'M. Monste Rios Hernandez',
            org: 'Universidad Autónoma del Estado de México',
            img: 'public/assets/img/members/monserrat_rios.jpg',
            bio: 'Developer',
        },
        {
            name: 'Dr . Juana Mariel Davila Vilchis',
            org: 'Universidad Autónoma del Estado de México',
            img: 'public/assets/img/avatarF.png',
        },
        {
            name: 'Mayra Molina Carbajal',
            org: 'Universidad Autónoma del Estado de México',
            img: 'public/assets/img/avatarF.png',
        },
    ];
}
