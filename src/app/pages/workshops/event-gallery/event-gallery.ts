import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Gallery } from '../../../shared/workshop/gallery/gallery';
import { WorkshopHeader } from '../../../shared/workshop/workshop-header/workshop-header';
import { GalleryPageData } from './gallery-pages';
import { SiteFooter } from '../../../shared/site-footer/site-footer';

@Component({
    selector: 'app-event-gallery-page',
    imports: [WorkshopHeader, SiteFooter, Gallery, RouterLink],
    templateUrl: './event-gallery.html',
    styles: ':host { display: contents }',
})
export class EventGalleryPage {
    readonly gallery = input.required<GalleryPageData>();
}
