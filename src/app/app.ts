import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRouteSnapshot, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

import { PageMeta, SeoService } from './core/seo.service';
import { SITE_NAME } from './core/site';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    template: '<router-outlet />',
})
export class App {
    private readonly router = inject(Router);
    private readonly seo = inject(SeoService);

    constructor() {
        this.router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                takeUntilDestroyed(),
            )
            .subscribe(() => this.applyMeta());
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
