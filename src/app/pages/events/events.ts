import { Component, inject } from '@angular/core';

import { HeadService } from '../../core/head.service';
import { TranslateHtmlPipe, TranslatePipe } from '../../core/i18n/translate.pipe';
import { Navbar } from '../../shared/navbar/navbar';
import { SiteFooter } from '../../shared/site-footer/site-footer';

interface EventItem {
    key: string;
    tag: 'div' | 'p';
}

@Component({
    selector: 'app-events-page',
    imports: [Navbar, SiteFooter, TranslatePipe, TranslateHtmlPipe],
    templateUrl: './events.html',
    styles: ':host { display: contents }',
})
export class EventsPage {
    protected readonly items: readonly EventItem[] = [
        { key: 'soniaPujolIEEE2026', tag: 'div' },
        { key: 'workshopTolucaAINov2025', tag: 'div' },
        { key: 'workshopRPAIOct2025', tag: 'div' },
        { key: 'workshopTolucaUSoct2025', tag: 'div' },
        { key: 'cziOpenScience2025', tag: 'div' },
        { key: 'workshopTolucaPhysio2025', tag: 'div' },
        { key: 'workshopRPAIJune2025', tag: 'div' },
        { key: 'workshopTolucaUSJune2025', tag: 'div' },
        { key: 'pw42', tag: 'div' },
        { key: 'cziOpenScience2024', tag: 'div' },
        { key: 'cbeb2024', tag: 'div' },
        { key: 'pw41', tag: 'div' },
        { key: 'workshopTolucaSegJune2024', tag: 'div' },
        { key: 'workshopTolucaKidneysMay2024', tag: 'div' },
        { key: 'pw40', tag: 'div' },
        { key: 'hackathonRP2023', tag: 'p' },
        { key: 'pw39', tag: 'div' },
        { key: 'pw38', tag: 'div' },
        { key: 'rsna2022', tag: 'div' },
        { key: 'claib2022', tag: 'div' },
    ];

    constructor() {
        inject(HeadService).apply({ bootstrap: true, fontWeights: '400;500;700' });
    }
}
