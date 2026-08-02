import { Component, signal } from '@angular/core';

import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { Navbar } from '../../shared/navbar/navbar';
import { SiteFooter } from '../../shared/site-footer/site-footer';
import { GLOSSARY_CARDS, IGT_GROUPS, IGT_UNITS, LOCALIZATION_CARDS } from './localization-data';

@Component({
    selector: 'app-localization-page',
    imports: [Navbar, SiteFooter, TranslatePipe],
    templateUrl: './localization.html',
    styles: ':host { display: contents }',
})
export class LocalizationPage {
    protected readonly cards = LOCALIZATION_CARDS;
    protected readonly igtGroups = IGT_GROUPS;
    protected readonly igtUnits = IGT_UNITS;
    protected readonly glossaries = GLOSSARY_CARDS;
    protected readonly openGroup = signal<string | null>(null);

    protected toggleGroup(id: string): void {
        this.openGroup.update((current) => (current === id ? null : id));
    }
}
