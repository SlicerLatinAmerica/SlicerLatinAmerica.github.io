import { Component, input } from '@angular/core';

export interface Speaker {
    name: string;
    org: string;
    img: string;
    alt?: string;
    href?: string;
    bio?: string;
}

@Component({
    selector: 'app-speakers',
    templateUrl: './speakers.html',
    styles: ':host { display: contents }',
})
export class Speakers {
    readonly speakers = input.required<readonly Speaker[]>();
}
