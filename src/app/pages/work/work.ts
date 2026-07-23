import { Component, inject } from '@angular/core';

import { HeadService } from '../../core/head.service';
import { TranslateHtmlPipe, TranslatePipe } from '../../core/i18n/translate.pipe';
import { Navbar } from '../../shared/navbar/navbar';
import { SiteFooter } from '../../shared/site-footer/site-footer';

@Component({
    selector: 'app-work-page',
    imports: [Navbar, SiteFooter, TranslatePipe, TranslateHtmlPipe],
    templateUrl: './work.html',
    styles: ':host { display: contents }',
})
export class WorkPage {
    protected readonly objectives = [
        'internationalization',
        'accessibility',
        'flexibility',
        'userExperience',
        'sustainability',
    ];

    constructor() {
        inject(HeadService).apply({ bootstrap: true, fontWeights: '300;400;500;700' });
    }
}
