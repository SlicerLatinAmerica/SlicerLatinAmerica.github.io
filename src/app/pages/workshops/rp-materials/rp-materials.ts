import { Component, input } from '@angular/core';

import { WorkshopButtons } from '../../../shared/workshop/workshop-buttons/workshop-buttons';
import { SiteFooter } from '../../../shared/site-footer/site-footer';

@Component({
    selector: 'app-rp-materials-page',
    imports: [WorkshopButtons, SiteFooter],
    templateUrl: './rp-materials.html',
    styles: ':host { display: contents }',
})
export class RpMaterialsPage {
    readonly june = input(false);
}
