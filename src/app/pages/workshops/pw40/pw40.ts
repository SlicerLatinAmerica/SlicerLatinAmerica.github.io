import { Component } from '@angular/core';

import { Speaker, Speakers } from '../../../shared/workshop/speakers';
import { WorkshopFooter } from '../../../shared/workshop/workshop-footer';
import { WorkshopHeader } from '../../../shared/workshop/workshop-header';

@Component({
    selector: 'app-pw40-page',
    imports: [WorkshopHeader, WorkshopFooter, Speakers],
    templateUrl: './pw40.html',
    styles: ':host { display: contents }',
})
export class Pw40Page {
    protected readonly attendees: readonly Speaker[] = [
        {
            name: 'Lucas Sanchez Silva',
            org: 'Universidade de São Paulo (USP), Brazil',
            img: 'public/assets/img/members/lucas_silva.jpeg',
        },
        {
            name: 'Luiz Otávio Murta Junior',
            org: 'Universidade de São Paulo (USP), Brazil',
            img: 'public/assets/img/members/luiz_murta.jpg',
        },
        {
            name: 'Enrique Hernández Laredo',
            org: 'Universidad Autónoma del Estado de México, Mexico',
            img: 'public/assets/img/members/enrique_laredo.jpg',
        },
    ];

    protected readonly team: readonly Speaker[] = [
        {
            name: 'Sonia Pujol',
            org: 'Harvard Medical School, USA',
            img: 'public/assets/img/members/sonia_pujol.jpg',
        },
        {
            name: 'Douglas Samuel Gonçalves',
            org: 'Universidade de São Paulo, Brazil',
            img: 'public/assets/img/members/douglas.jpg',
        },
        {
            name: 'Adriana Herlinda Vilchis González',
            org: 'Universidad Autónoma del Estado de México, Mexico',
            img: 'public/assets/img/members/adriana_gonzalez.png',
        },
        {
            name: 'Victor Manuel Montaño Serrano',
            org: 'Universidad Autónoma del Estado de México, Mexico',
            img: 'public/assets/img/members/victor_serrano.jpg',
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
