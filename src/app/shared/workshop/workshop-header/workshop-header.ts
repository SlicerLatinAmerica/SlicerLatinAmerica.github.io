import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-workshop-header',
    imports: [RouterLink],
    templateUrl: './workshop-header.html',
    styles: ':host { display: contents }',
})
export class WorkshopHeader {
    readonly logoAlt = input('Logo 3D Slicer');
}
