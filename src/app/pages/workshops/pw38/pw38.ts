import { Component, inject } from '@angular/core';

import { HeadService } from '../../../core/head.service';
import { Speaker, Speakers } from '../../../shared/workshop/speakers';
import { WorkshopFooter } from '../../../shared/workshop/workshop-footer';
import { WorkshopHeader } from '../../../shared/workshop/workshop-header';

@Component({
    selector: 'app-pw38-page',
    imports: [WorkshopHeader, WorkshopFooter, Speakers],
    templateUrl: './pw38.html',
    styles: ':host { display: contents }',
})
export class Pw38Page {
    protected readonly team: readonly Speaker[] = [
        {
            name: 'Sonia Pujol',
            org: 'Harvard Medical School, USA',
            img: 'public/assets/img/members/sonia_pujol.jpg',
        },
        {
            name: 'Luiz Otávio Murta Junior',
            org: 'Universidade de São Paulo, Brazil',
            img: 'public/assets/img/members/luiz_murta.jpg',
        },
        {
            name: 'Adriana Herlinda Vilchis González',
            org: 'Universidad Autónoma del Estado de México, Mexico',
            img: 'public/assets/img/members/adriana_gonzalez.png',
        },
        {
            name: 'Enrique Hernández Laredo',
            org: 'Universidad Autónoma del Estado de México, Mexico',
            img: 'public/assets/img/members/enrique_laredo.jpg',
        },
        {
            name: 'Andras Lasso',
            org: "Queen's University, Canada",
            img: 'public/assets/img/members/andras_lasso.jpg',
        },
        {
            name: 'Steve Pieper',
            org: 'Isomics Inc., USA',
            img: 'public/assets/img/members/steve_pieper.jpeg',
        },
    ];

    constructor() {
        inject(HeadService).apply({ bodyClass: 'workshop-body' });
    }
}
