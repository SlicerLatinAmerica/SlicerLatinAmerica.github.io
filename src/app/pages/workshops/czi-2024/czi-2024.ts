import { Component, inject } from '@angular/core';

import { HeadService } from '../../../core/head.service';
import { Speaker, Speakers } from '../../../shared/workshop/speakers';
import { WorkshopFooter } from '../../../shared/workshop/workshop-footer';
import { WorkshopHeader } from '../../../shared/workshop/workshop-header';

@Component({
    selector: 'app-czi-2024-page',
    imports: [WorkshopHeader, WorkshopFooter, Speakers],
    templateUrl: './czi-2024.html',
    styles: ':host { display: contents }',
})
export class Czi2024Page {
    protected readonly participants: readonly Speaker[] = [
        {
            name: 'Dr. Sonia Pujol',
            org: "Brigham and Women's Hospital, Harvard Medical School, USA",
            img: 'public/assets/img/members/sonia_pujol.webp',
            href: 'https://www.linkedin.com/in/sonia-pujol-165660186/',
            bio: 'Director of Training, Education, and Internationalization, 3D Slicer | Principal Investigator, 3D Slicer for Latin America',
        },
    ];

    constructor() {
        inject(HeadService).apply({ bodyClass: 'workshop-body' });
    }
}
