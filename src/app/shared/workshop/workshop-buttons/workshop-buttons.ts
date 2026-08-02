import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-workshop-buttons',
    imports: [RouterLink],
    templateUrl: './workshop-buttons.html',
    styles: ':host { display: contents }',
})
export class WorkshopButtons {
    readonly homeLabel = input('🏠 Home');
}
