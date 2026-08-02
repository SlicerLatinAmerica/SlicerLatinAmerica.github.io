import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { I18nService } from '../../core/i18n/i18n.service';
import { FOOTER_SECTIONS, NavLink } from '../nav-links';

@Component({
    selector: 'app-site-footer',
    imports: [RouterLink],
    templateUrl: './site-footer.html',
    styles: ':host { display: contents }',
})
export class SiteFooter {
    readonly translated = input(true);

    protected readonly sections = FOOTER_SECTIONS;
    protected readonly year = new Date().getFullYear();
    private readonly i18n = inject(I18nService);

    protected label(link: NavLink): string {
        return this.translated() ? this.i18n.t(`footer.${link.key}`) : link.label;
    }

    protected text(key: string, fallback: string): string {
        return this.translated() ? this.i18n.t(`footer.${key}`) : fallback;
    }
}
