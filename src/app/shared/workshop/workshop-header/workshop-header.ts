import { Component, input } from '@angular/core';

@Component({
    selector: 'app-workshop-header',
    templateUrl: './workshop-header.html',
    styles: ':host { display: contents }',
})
export class WorkshopHeader {
    readonly logoAlt = input('Logo 3D Slicer');
}
