import { Component, input } from '@angular/core';

@Component({
    selector: 'app-workshop-buttons',
    templateUrl: './workshop-buttons.html',
    styles: ':host { display: contents }',
})
export class WorkshopButtons {
    readonly homeLabel = input('🏠 Home');
}
