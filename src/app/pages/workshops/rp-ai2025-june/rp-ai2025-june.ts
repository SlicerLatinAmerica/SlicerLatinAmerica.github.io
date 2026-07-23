import { Component } from '@angular/core';

import { Speaker, Speakers } from '../../../shared/workshop/speakers/speakers';
import {
    WORKSHOP_FOOTER_SHORT,
    WorkshopFooter,
} from '../../../shared/workshop/workshop-footer/workshop-footer';
import { WorkshopButtons } from '../../../shared/workshop/workshop-buttons/workshop-buttons';
import { WorkshopHeader } from '../../../shared/workshop/workshop-header/workshop-header';

@Component({
    selector: 'app-rp-ai2025-june-page',
    imports: [WorkshopButtons, WorkshopHeader, WorkshopFooter, Speakers],
    templateUrl: './rp-ai2025-june.html',
    styles: ':host { display: contents }',
})
export class RpAi2025JunePage {
    protected readonly footerLinks = WORKSHOP_FOOTER_SHORT;

    protected readonly speakers: readonly Speaker[] = [
        {
            name: 'Dr. Sonia Pujol',
            org: 'Assistant Professor of Radiology, Harvard Medical School',
            img: 'public/assets/img/members/sonia_pujol.webp',
            href: 'https://www.linkedin.com/in/sonia-pujol-165660186/',
            bio: ' Director of Training, Education, and Internationalization, 3D Slicer | PhD in Biomedical Engineering | Dual Engineering Degrees in Physics and Computer Science and Applied Mathematics',
        },
        {
            name: 'Dr. Luiz Otavio Murta Junior',
            org: 'University of São Paulo',
            img: 'public/assets/img/members/luiz_murta.jpg',
            href: 'https://www.linkedin.com/in/lomurta/',
            bio: "Associate Professor at the University of São Paulo. Undergraduate in Physics and Electrical Engineer (1992), master's (1995), and Ph.D. (2001) in Applied Physics",
        },
        {
            name: 'Dr. Helio Rubens Machado',
            org: 'University of São Paulo',
            img: 'public/assets/img/members/3f58c5e6-4108-4b2c-b34b-bf88f536d581.jpg',
            href: 'http://lattes.cnpq.br/2357165887480846',
            bio: 'Founder of the Division of Pediatric Neurosurgery at FMRP USP and founding member of the Brazilian Society of Pediatric Neurosurgery',
        },
    ];

    protected readonly organizers: readonly Speaker[] = [
        {
            name: 'Dr. Jorge Elias Júnio',
            org: 'Coordinator at CCIFM, University of São Paulo',
            img: 'https://rio.fmrp.usp.br/wp-content/uploads/sites/538/ultimatemember/21874/profile_photo.jpg?1750247692',
            href: 'https://www.linkedin.com/in/jorge-elias-jr-10a42817/',
        },
        {
            name: 'Dr. Antonio Carlos dos Santos',
            org: 'Deputy Coordinator at CCIFM, University of São Paulo',
            img: 'https://i1.rgstatic.net/ii/profile.image/272302499692546-1441933383104_Q128/Antonio-Santos-69.jpg',
            href: 'http://lattes.cnpq.br/8227933586403761',
        },
        {
            name: 'Dr. Luiz Otavio Murta Junior',
            org: 'Associate Professor at DCM, University of São Paulo',
            img: 'public/assets/img/members/luiz_murta.jpg',
            href: 'https://www.linkedin.com/in/lomurta/',
        },
        {
            name: 'Dr. Sonia Pujol',
            org: 'Assistant Professor of Radiology, Harvard Medical School',
            img: 'public/assets/img/members/sonia_pujol.webp',
            href: 'https://www.linkedin.com/in/sonia-pujol-165660186/',
        },
        {
            name: 'Douglas Samuel Gonçalves',
            org: "Master's Student in Bioengineering, University of São Paulo",
            img: 'https://avatars.githubusercontent.com/u/28208639?v=4',
            href: 'https://www.linkedin.com/in/dousam/',
        },
        {
            name: 'Lucas Sanchez Silva',
            org: "Master's Student in Applied Computing, University of São Paulo",
            img: 'public/assets/img/members/lucas_silva.jpeg',
            href: 'https://www.linkedin.com/in/lucas-sanchez-silva-2a4917209/',
        },
        {
            name: 'Lucas Miranda',
            org: "Bachelor's degree student in Computer Science, University of São Paulo",
            img: 'public/assets/img/members/lucas_miranda.jpg',
            href: 'https://www.linkedin.com/in/miiranta/',
        },
        {
            name: 'Dr. Paulo Eduardo de Barros Veiga',
            org: 'Doctorate in Literary Studies, University of São Paulo',
            img: 'public/assets/img/members/paulo_veiga.jpeg',
            href: 'https://www.linkedin.com/in/paulo-eduardo-de-barros-veiga-85a174321/',
        },
    ];
}
