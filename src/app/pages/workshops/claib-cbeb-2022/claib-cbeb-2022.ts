import { Component } from '@angular/core';

import { WorkshopButtons } from '../../../shared/workshop/workshop-buttons/workshop-buttons';
import { WorkshopHeader } from '../../../shared/workshop/workshop-header/workshop-header';
import { SiteFooter } from '../../../shared/site-footer/site-footer';

@Component({
    selector: 'app-claib-cbeb-2022-page',
    imports: [WorkshopButtons, WorkshopHeader, SiteFooter],
    templateUrl: './claib-cbeb-2022.html',
    styles: ':host { display: contents }',
})
export class ClaibCbeb2022Page {}
