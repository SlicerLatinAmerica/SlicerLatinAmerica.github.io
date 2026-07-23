import { Component } from '@angular/core';

import { Speaker, Speakers } from '../../../shared/workshop/speakers/speakers';
import { WorkshopFooter } from '../../../shared/workshop/workshop-footer/workshop-footer';
import { WorkshopButtons } from '../../../shared/workshop/workshop-buttons/workshop-buttons';
import { WorkshopHeader } from '../../../shared/workshop/workshop-header/workshop-header';

@Component({
    selector: 'app-pw42-page',
    imports: [WorkshopButtons, WorkshopHeader, WorkshopFooter, Speakers],
    templateUrl: './pw42.html',
    styles: ':host { display: contents }',
})
export class Pw42Page {
    protected readonly attendees: readonly Speaker[] = [
        {
            name: 'Douglas Samuel Gonçalves',
            org: 'Universidade de São Paulo (USP), Brazil',
            img: 'public/assets/img/members/douglas.jpg',
        },
        {
            name: 'Lucas Sanchez Silva',
            org: 'Universidade de São Paulo (USP), Brazil',
            img: 'public/assets/img/members/lucas_silva.jpeg',
        },
        {
            name: 'Victor Manuel Montaño Serrano',
            org: 'Universidad Autónoma del Estado de México, Mexico',
            img: 'public/assets/img/members/victor_serrano.jpg',
        },
    ];

    protected readonly fullTeam: readonly string[] = [
        "Sonia Pujol — Brigham and Women's Hospital, Harvard Medical School, USA",
        'Luiz Murta — Universidade de São Paulo, Brazil',
        'Douglas Samuel Gonçalves — Universidade de São Paulo, Brazil',
        'Lucas Sanchez Silva — Universidade de São Paulo, Brazil',
        'Paulo Eduardo de Barros Veiga — Universidade de São Paulo, Brazil',
        'Paulo Guilherme Pinheiro Pereira — Universidade de São Paulo, Brazil',
        'Mirela Teixeira Cazzolato — Universidade de São Paulo, Brazil',
        'Adriana Herlinda Vilchis González — Universidad Autónoma del Estado de México, Mexico',
        'Enrique Hernández Laredo — Universidad Autónoma del Estado de México, Mexico',
        'Victor Manuel Montaño Serrano — Universidad Autónoma del Estado de México, Mexico',
        'Monserrat Ríos-Hernández — Universidad Autónoma del Estado de México, Mexico',
        'Valeria Gómez Valdes — Facultad de Lenguas, Universidad Autónoma del Estado de México, Mexico',
        'Juan Carlos Avila Vilchis — Universidad Autónoma del Estado de México, Mexico',
        'Fatou Bintou Ndiaye — University Cheikh Anta Diop, Senegal',
        'Mohamed Alalli Bilal — University Cheikh Anta Diop, Senegal',
        "Andras Lasso — Queen's University, Canada",
        'Steve Pieper — Isomics Inc., USA',
        'Jean-Christophe Fillion-Robin — Kitware Inc., USA',
    ];
}
