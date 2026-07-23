import { Component, inject } from '@angular/core';

import { HeadService } from '../../core/head.service';
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

    constructor() {
        inject(HeadService).apply({ bootstrap: true, fontWeights: '300;400;500;700' });
    }
}
