import { Component, DOCUMENT, ElementRef, afterNextRender, inject, viewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRouteSnapshot, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import SimpleBar from 'simplebar';

import { PageMeta, SeoService } from './core/seo.service';
import { SITE_NAME } from './core/site';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    template: '<div #scroll class="app-scroll"><router-outlet /></div>',
})
export class App {
    private readonly router = inject(Router);
    private readonly seo = inject(SeoService);
    private readonly document = inject(DOCUMENT);
    private readonly scroll = viewChild.required<ElementRef<HTMLDivElement>>('scroll');
    private simplebar: SimpleBar | null = null;

    constructor() {
        this.router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                takeUntilDestroyed(),
            )
            .subscribe(() => {
                this.applyMeta();
                this.scrollToTop();
            });

        afterNextRender(() => this.initScrollbar());
    }

    private initScrollbar(): void {
        const wide = this.document.defaultView?.matchMedia('(min-width: 48em)');
        if (!wide?.matches) {
            return;
        }
        this.document.body.classList.add('has-overlay-scroll');
        this.simplebar = new SimpleBar(this.scroll().nativeElement, { autoHide: true });
    }

    private scrollToTop(): void {
        const element = this.simplebar?.getScrollElement();
        if (element) {
            element.scrollTop = 0;
        }
    }

    private applyMeta(): void {
        let route: ActivatedRouteSnapshot = this.router.routerState.snapshot.root;
        while (route.firstChild) {
            route = route.firstChild;
        }
        const meta = route.data['meta'] as PageMeta | undefined;
        if (meta) {
            const path = route.routeConfig?.path ?? '';
            this.seo.apply(meta, route.title ?? SITE_NAME, path === '**' ? '404.html' : path);
        }
    }
}
