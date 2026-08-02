import { Component } from '@angular/core';

import { WorkshopFooter } from '../../../shared/workshop/workshop-footer/workshop-footer';
import { WorkshopButtons } from '../../../shared/workshop/workshop-buttons/workshop-buttons';
import { WorkshopHeader } from '../../../shared/workshop/workshop-header/workshop-header';

@Component({
    selector: 'app-claib-cbeb-2022-page',
    imports: [WorkshopButtons, WorkshopHeader, WorkshopFooter],
    templateUrl: './claib-cbeb-2022.html',
    styles: ':host { display: contents }',
})
export class ClaibCbeb2022Page {}
