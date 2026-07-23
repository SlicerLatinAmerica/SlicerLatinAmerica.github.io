import { Component, afterNextRender, inject, input, signal } from '@angular/core';

import { I18nService, LANG_META, Lang, SUPPORTED_LANGS } from '../../core/i18n/i18n.service';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { NAV_LINKS, NavKey } from '../nav-links';

@Component({
    selector: 'app-navbar',
    imports: [TranslatePipe],
    templateUrl: './navbar.html',
    styles: ':host { display: contents }',
    host: { '(document:click)': 'closeMenu()' },
})
export class Navbar {
    readonly active = input<NavKey | null>(null);
    readonly translated = input(true);

    protected readonly links = NAV_LINKS;
    protected readonly langs = SUPPORTED_LANGS.map((code) => ({ code, ...LANG_META[code] }));
    protected readonly menuOpen = signal(false);
    protected readonly i18n = inject(I18nService);

    constructor() {
        afterNextRender(() => {
            if (this.translated()) {
                this.i18n.init();
            }
        });
    }

    protected toggleMenu(event: Event): void {
        event.stopPropagation();
        this.menuOpen.update((open) => !open);
    }

    protected selectLang(lang: Lang, event: Event): void {
        event.stopPropagation();
        this.i18n.setLanguage(lang);
        this.menuOpen.set(false);
    }

    protected closeMenu(): void {
        this.menuOpen.set(false);
    }
}
