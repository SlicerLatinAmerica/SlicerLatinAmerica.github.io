import { Component, input } from '@angular/core';

import { WORKSHOP_FOOTER_SHORT, WorkshopFooter } from '../../../shared/workshop/workshop-footer';

@Component({
    selector: 'app-rp-materials-page',
    imports: [WorkshopFooter],
    templateUrl: './rp-materials.html',
    styles: ':host { display: contents }',
})
export class RpMaterialsPage {
    readonly june = input(false);

    protected readonly footerLinks = WORKSHOP_FOOTER_SHORT;
}
