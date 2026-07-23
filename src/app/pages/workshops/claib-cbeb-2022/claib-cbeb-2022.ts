import { Component } from '@angular/core';

import { WorkshopFooter } from '../../../shared/workshop/workshop-footer';
import { WorkshopHeader } from '../../../shared/workshop/workshop-header';

@Component({
    selector: 'app-claib-cbeb-2022-page',
    imports: [WorkshopHeader, WorkshopFooter],
    templateUrl: './claib-cbeb-2022.html',
    styles: ':host { display: contents }',
})
export class ClaibCbeb2022Page {}
