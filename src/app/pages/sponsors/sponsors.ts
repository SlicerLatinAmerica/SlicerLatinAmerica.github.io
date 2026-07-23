import { Component } from '@angular/core';

import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { Navbar } from '../../shared/navbar/navbar';
import { SiteFooter } from '../../shared/site-footer/site-footer';

@Component({
    selector: 'app-sponsors-page',
    imports: [Navbar, SiteFooter, TranslatePipe],
    templateUrl: './sponsors.html',
    styles: ':host { display: contents }',
})
export class SponsorsPage {}
