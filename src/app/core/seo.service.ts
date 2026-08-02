import { DOCUMENT, Injectable, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';

import { SITE_IMAGE, SITE_NAME, SITE_URL } from './site';

export interface PageMeta {
    description: string;
    image?: string;
    htmlLang?: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
    private readonly document = inject(DOCUMENT);
    private readonly meta = inject(Meta);

    apply(page: PageMeta, title: string, path: string): void {
        this.document.documentElement.setAttribute('lang', page.htmlLang ?? 'en');

        const url = this.absolute(path);
        const image = this.absolute(page.image ?? SITE_IMAGE);

        this.setTag('name', 'description', page.description);
        this.setTag('property', 'og:type', 'website');
        this.setTag('property', 'og:site_name', SITE_NAME);
        this.setTag('property', 'og:title', title);
        this.setTag('property', 'og:description', page.description);
        this.setTag('property', 'og:url', url);
        this.setTag('property', 'og:image', image);
        this.setTag('name', 'twitter:card', 'summary_large_image');
        this.setTag('name', 'twitter:title', title);
        this.setTag('name', 'twitter:description', page.description);
        this.setTag('name', 'twitter:image', image);

        this.setCanonical(url);
    }

    private setTag(attr: 'name' | 'property', key: string, content: string): void {
        this.meta.updateTag({ [attr]: key, content }, `${attr}="${key}"`);
    }

    private setCanonical(url: string): void {
        let link = this.document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
        if (!link) {
            link = this.document.createElement('link');
            link.rel = 'canonical';
            this.document.head.appendChild(link);
        }
        link.href = url;
    }

    private absolute(path: string): string {
        const clean = path.replace(/^\.?\//, '');
        return clean ? `${SITE_URL}/${clean}` : `${SITE_URL}/`;
    }
}
