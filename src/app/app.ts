import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

import { HeadService, PageHead } from './core/head.service';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.html',
    styles: ':host { display: contents }',
})
export class App {
    private readonly router = inject(Router);
    private readonly head = inject(HeadService);

    constructor() {
        this.router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                takeUntilDestroyed(),
            )
            .subscribe(() => this.applyHead());
    }

    private applyHead(): void {
        let route = this.router.routerState.snapshot.root;
        while (route.firstChild) {
            route = route.firstChild;
        }
        const head = route.data['head'] as PageHead | undefined;
        if (head) {
            this.head.apply(head);
        }
    }
}
