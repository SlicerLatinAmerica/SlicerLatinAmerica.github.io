import { Component, input } from '@angular/core';

import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { NAV_LINKS } from '../nav-links';

@Component({
    selector: 'app-site-footer',
    imports: [TranslatePipe],
    templateUrl: './site-footer.html',
    styles: ':host { display: contents }',
})
export class SiteFooter {
    readonly translated = input(true);

    protected readonly links = NAV_LINKS;
}
