import { Component, inject } from '@angular/core';

import { HeadService } from '../../core/head.service';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { Navbar } from '../../shared/navbar/navbar';
import { SiteFooter } from '../../shared/site-footer/site-footer';

@Component({
    selector: 'app-contact-page',
    imports: [Navbar, SiteFooter, TranslatePipe],
    templateUrl: './contact.html',
    styles: ':host { display: contents }',
})
export class ContactPage {
    constructor() {
        inject(HeadService).apply({
            bootstrap: true,
            fontWeights: '400;700',
            bootstrapIcons: true,
        });
    }
}
