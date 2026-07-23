import { Component, inject } from '@angular/core';

import { HeadService } from '../../core/head.service';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { Navbar } from '../../shared/navbar/navbar';
import { SiteFooter } from '../../shared/site-footer/site-footer';
import { TEAM_SECTIONS } from './team-data';

@Component({
    selector: 'app-team-page',
    imports: [Navbar, SiteFooter, TranslatePipe],
    templateUrl: './team.html',
    styles: ':host { display: contents }',
})
export class TeamPage {
    protected readonly sections = TEAM_SECTIONS;

    constructor() {
        inject(HeadService).apply({ bootstrap: true, fontWeights: '400;500;700' });
    }
}
