import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { SITE_STATS } from '../../core/site-stats';
import { Navbar } from '../../shared/navbar/navbar';
import { SiteFooter } from '../../shared/site-footer/site-footer';

@Component({
    selector: 'app-home-page',
    imports: [Navbar, SiteFooter, TranslatePipe, RouterLink],
    templateUrl: './home.html',
    styles: ':host { display: contents }',
})
export class HomePage {
    protected readonly stats = SITE_STATS;
    protected readonly objectives = ['localization', 'automation', 'training'] as const;
    protected readonly metrics = [
        { key: 'participants', value: SITE_STATS.participants },
        { key: 'countries', value: SITE_STATS.countries },
        { key: 'institutions', value: SITE_STATS.institutions },
        { key: 'events', value: SITE_STATS.events },
    ] as const;
}
