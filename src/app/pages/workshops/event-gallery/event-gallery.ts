import { Component, input } from '@angular/core';

import { Gallery } from '../../../shared/workshop/gallery/gallery';
import {
    WORKSHOP_FOOTER_SHORT,
    WorkshopFooter,
} from '../../../shared/workshop/workshop-footer/workshop-footer';
import { WorkshopHeader } from '../../../shared/workshop/workshop-header/workshop-header';
import { GalleryPageData } from './gallery-pages';

@Component({
    selector: 'app-event-gallery-page',
    imports: [WorkshopHeader, WorkshopFooter, Gallery],
    templateUrl: './event-gallery.html',
    styles: ':host { display: contents }',
})
export class EventGalleryPage {
    readonly gallery = input.required<GalleryPageData>();

    protected readonly footerLinks = WORKSHOP_FOOTER_SHORT;
}
