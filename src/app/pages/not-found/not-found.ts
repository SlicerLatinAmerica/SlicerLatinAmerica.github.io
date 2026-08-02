import { DOCUMENT, Component, afterNextRender, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { Navbar } from '../../shared/navbar/navbar';
import { SiteFooter } from '../../shared/site-footer/site-footer';

const LEGACY_TUTORIALS_PREFIX = '/media/Tutorials/';
const TUTORIALS_PREFIX = '/public/assets/pdfs/Tutorials/';

@Component({
    selector: 'app-not-found-page',
    imports: [Navbar, SiteFooter, TranslatePipe, RouterLink],
    templateUrl: './not-found.html',
    styles: ':host { display: contents }',
})
export class NotFoundPage {
    private readonly document = inject(DOCUMENT);

    constructor() {
        afterNextRender(() => this.redirectLegacyPaths());
    }

    private redirectLegacyPaths(): void {
        const path = this.document.location.pathname;
        if (path.startsWith(LEGACY_TUTORIALS_PREFIX)) {
            this.document.location.replace(
                TUTORIALS_PREFIX + path.slice(LEGACY_TUTORIALS_PREFIX.length),
            );
        }
    }
}
