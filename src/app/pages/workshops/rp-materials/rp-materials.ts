import { Component, input } from '@angular/core';

import { WorkshopButtons } from '../../../shared/workshop/workshop-buttons/workshop-buttons';
import {
    WORKSHOP_FOOTER_SHORT,
    WorkshopFooter,
} from '../../../shared/workshop/workshop-footer/workshop-footer';

@Component({
    selector: 'app-rp-materials-page',
    imports: [WorkshopButtons, WorkshopFooter],
    templateUrl: './rp-materials.html',
    styles: ':host { display: contents }',
})
export class RpMaterialsPage {
    readonly june = input(false);

    protected readonly footerLinks = WORKSHOP_FOOTER_SHORT;
}
