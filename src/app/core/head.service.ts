import { DOCUMENT, Injectable, inject } from '@angular/core';

export interface PageHead {
    bootstrap?: boolean | 'css-only';
    fontWeights?: string;
    bootstrapIcons?: boolean;
    leaflet?: boolean;
    simplebar?: boolean;
    htmlLang?: string;
    bodyClass?: string;
}

const BOOTSTRAP_CSS_URL =
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css';
const BOOTSTRAP_CSS_INTEGRITY =
    'sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ';
const BOOTSTRAP_JS_URL =
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js';
const BOOTSTRAP_JS_INTEGRITY =
    'sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe';
const BOOTSTRAP_ICONS_URL =
    'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css';
const LEAFLET_CSS_URL = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
const LEAFLET_CSS_INTEGRITY = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
const SIMPLEBAR_CSS_URL = 'https://cdn.jsdelivr.net/npm/simplebar@6/dist/simplebar.min.css';

@Injectable({ providedIn: 'root' })
export class HeadService {
    private readonly document = inject(DOCUMENT);

    apply(head: PageHead): void {
        if (head.htmlLang) {
            this.document.documentElement.setAttribute('lang', head.htmlLang);
        }
        if (head.bodyClass) {
            this.document.body.classList.add(head.bodyClass);
        }
        if (head.bootstrap) {
            this.stylesheet(BOOTSTRAP_CSS_URL, BOOTSTRAP_CSS_INTEGRITY, true);
            if (head.bootstrap !== 'css-only') {
                this.script(BOOTSTRAP_JS_URL, BOOTSTRAP_JS_INTEGRITY);
            }
        }
        if (head.fontWeights) {
            this.preconnect('https://fonts.googleapis.com');
            this.preconnect('https://fonts.gstatic.com', true);
            this.stylesheet(
                `https://fonts.googleapis.com/css2?family=Roboto:wght@${head.fontWeights}&display=swap`,
            );
        }
        if (head.bootstrapIcons) {
            this.stylesheet(BOOTSTRAP_ICONS_URL);
        }
        if (head.leaflet) {
            this.stylesheet(LEAFLET_CSS_URL, LEAFLET_CSS_INTEGRITY);
        }
        if (head.simplebar) {
            this.stylesheet(SIMPLEBAR_CSS_URL);
        }
    }

    private stylesheet(href: string, integrity?: string, beforeAppStyles = false): void {
        if (this.document.head.querySelector(`link[href="${href}"]`)) {
            return;
        }
        const link = this.document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        if (integrity) {
            link.integrity = integrity;
            link.crossOrigin = 'anonymous';
        }
        const appStyles = beforeAppStyles
            ? this.document.head.querySelector('link[rel="stylesheet"][href^="styles"]')
            : null;
        this.document.head.insertBefore(link, appStyles);
    }

    private preconnect(href: string, crossOrigin = false): void {
        if (this.document.head.querySelector(`link[rel="preconnect"][href="${href}"]`)) {
            return;
        }
        const link = this.document.createElement('link');
        link.rel = 'preconnect';
        link.href = href;
        if (crossOrigin) {
            link.crossOrigin = '';
        }
        this.document.head.appendChild(link);
    }

    private script(src: string, integrity?: string): void {
        if (this.document.querySelector(`script[src="${src}"]`)) {
            return;
        }
        const script = this.document.createElement('script');
        script.src = src;
        if (integrity) {
            script.integrity = integrity;
            script.crossOrigin = 'anonymous';
        }
        this.document.body.appendChild(script);
    }
}
