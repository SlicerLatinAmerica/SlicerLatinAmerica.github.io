import { Component } from '@angular/core';

import { TranslateHtmlPipe, TranslatePipe } from '../../core/i18n/translate.pipe';
import { Navbar } from '../../shared/navbar/navbar';
import { SiteFooter } from '../../shared/site-footer/site-footer';
import { TutorialCards } from '../../shared/tutorial-cards/tutorial-cards';

@Component({
    selector: 'app-tutorial-collection-page',
    imports: [Navbar, SiteFooter, TranslatePipe, TranslateHtmlPipe, TutorialCards],
    templateUrl: './tutorial-collection.html',
    styles: ':host { display: contents }',
})
export class TutorialCollectionPage {}
