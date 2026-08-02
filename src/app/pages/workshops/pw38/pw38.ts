import { Component } from '@angular/core';

import { Speaker, Speakers } from '../../../shared/workshop/speakers/speakers';
import { WorkshopButtons } from '../../../shared/workshop/workshop-buttons/workshop-buttons';
import { WorkshopHeader } from '../../../shared/workshop/workshop-header/workshop-header';
import { SiteFooter } from '../../../shared/site-footer/site-footer';

@Component({
    selector: 'app-pw38-page',
    imports: [WorkshopButtons, WorkshopHeader, SiteFooter, Speakers],
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
}
