import { Component, computed, input } from '@angular/core';

import { NAV_LINKS, NavKey } from '../../nav-links';

export const WORKSHOP_FOOTER_FULL: readonly NavKey[] = NAV_LINKS.map((link) => link.key);

export const WORKSHOP_FOOTER_SHORT: readonly NavKey[] = [
    'project',
    'events',
    'team',
    'work',
    'acknowledgment',
    'contact',
];

@Component({
    selector: 'app-workshop-footer',
    templateUrl: './workshop-footer.html',
    styles: ':host { display: contents }',
})
export class WorkshopFooter {
    readonly linkKeys = input<readonly NavKey[]>(WORKSHOP_FOOTER_FULL);

    protected readonly links = computed(() =>
        this.linkKeys().map((key) => NAV_LINKS.find((link) => link.key === key)!),
    );
}
