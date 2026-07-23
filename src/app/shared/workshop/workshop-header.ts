import { Component, input } from '@angular/core';

@Component({
    selector: 'app-workshop-header',
    template: `
        <header class="workshop-header">
            <a href="index.html">
                <img src="public/assets/img/logo.png" [alt]="logoAlt()" />
            </a>
            <ng-content />
        </header>
    `,
    styles: ':host { display: contents }',
})
export class WorkshopHeader {
    readonly logoAlt = input('Logo 3D Slicer');
}
