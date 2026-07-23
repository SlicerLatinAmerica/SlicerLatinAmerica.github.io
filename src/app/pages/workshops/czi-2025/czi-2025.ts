import { Component } from '@angular/core';

import { Speaker, Speakers } from '../../../shared/workshop/speakers/speakers';
import { WorkshopFooter } from '../../../shared/workshop/workshop-footer/workshop-footer';
import { WorkshopButtons } from '../../../shared/workshop/workshop-buttons/workshop-buttons';
import { WorkshopHeader } from '../../../shared/workshop/workshop-header/workshop-header';

@Component({
    selector: 'app-czi-2025-page',
    imports: [WorkshopButtons, WorkshopHeader, WorkshopFooter, Speakers],
    templateUrl: './czi-2025.html',
    styles: ':host { display: contents }',
})
export class Czi2025Page {
    protected readonly participants: readonly Speaker[] = [
        {
            name: 'Dr. Sonia Pujol',
            org: "Brigham and Women's Hospital, Harvard Medical School, USA",
            img: 'public/assets/img/members/sonia_pujol.webp',
            href: 'https://www.linkedin.com/in/sonia-pujol-165660186/',
            bio: 'Director of Training, Education, and Internationalization, 3D Slicer | Principal Investigator, 3D Slicer for Latin America',
        },
    ];
}
