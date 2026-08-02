import { Component, afterNextRender, computed, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { I18nService, LANG_META, Lang, SUPPORTED_LANGS } from '../../core/i18n/i18n.service';
import { ThemeService } from '../../core/theme.service';
import { NavGroup, NavItem, NavKey, NavLink, PRIMARY_NAV, isGroup } from '../nav-links';

@Component({
    selector: 'app-navbar',
    imports: [RouterLink],
    templateUrl: './navbar.html',
    styles: ':host { display: contents }',
    host: {
        '(document:click)': 'closeMenus()',
        '(document:keydown.escape)': 'onEscape()',
    },
})
export class Navbar {
    readonly active = input<NavKey | null>(null);
    readonly translated = input(true);

    protected readonly items = PRIMARY_NAV;
    protected readonly langs = SUPPORTED_LANGS.map((code) => ({ code, ...LANG_META[code] }));
    protected readonly i18n = inject(I18nService);
    protected readonly themes = inject(ThemeService);

    protected readonly navOpen = signal(false);
    protected readonly openMenu = signal<string | null>(null);
    protected readonly isGroup = isGroup;

    protected readonly activeGroup = computed(() => {
        const active = this.active();
        const group = PRIMARY_NAV.find(
            (item) => isGroup(item) && item.children.some((child) => child.key === active),
        );
        return group?.key ?? null;
    });

    constructor() {
        afterNextRender(() => {
            this.themes.init();
            if (this.translated()) {
                this.i18n.init();
            }
        });
    }

    protected label(item: NavItem): string {
        return this.translated() ? this.i18n.t(`nav.${item.key}`) : item.label;
    }

    protected children(item: NavItem): readonly NavLink[] {
        return (item as NavGroup).children;
    }

    protected toggleNav(event: Event): void {
        event.stopPropagation();
        this.navOpen.update((open) => !open);
        this.openMenu.set(null);
    }

    protected toggleMenu(id: string, event: Event): void {
        event.stopPropagation();
        this.openMenu.update((current) => (current === id ? null : id));
    }

    protected selectLang(lang: Lang, event: Event): void {
        event.stopPropagation();
        this.i18n.setLanguage(lang);
        this.openMenu.set(null);
    }

    protected toggleTheme(event: Event): void {
        event.stopPropagation();
        this.themes.toggle();
    }

    protected closeMenus(): void {
        this.openMenu.set(null);
    }

    protected onEscape(): void {
        this.openMenu.set(null);
        this.navOpen.set(false);
    }
}
