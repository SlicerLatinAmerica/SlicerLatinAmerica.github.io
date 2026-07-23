import { RenderMode, ServerRoute } from '@angular/ssr';

import { prerenderPaths } from './app.routes';

export const serverRoutes: ServerRoute[] = [
    ...prerenderPaths.map((path): ServerRoute => ({ path, renderMode: RenderMode.Prerender })),
    { path: '**', renderMode: RenderMode.Client },
];
