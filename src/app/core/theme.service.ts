import { DOCUMENT, Injectable, inject, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'slicerla_theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
    private readonly document = inject(DOCUMENT);

    readonly theme = signal<Theme>('light');

    init(): void {
        const current = this.document.documentElement.dataset['theme'];
        this.theme.set(current === 'dark' ? 'dark' : 'light');
    }

    toggle(): void {
        this.set(this.theme() === 'dark' ? 'light' : 'dark');
    }

    private set(theme: Theme): void {
        this.theme.set(theme);
        this.document.documentElement.dataset['theme'] = theme;
        try {
            localStorage.setItem(STORAGE_KEY, theme);
        } catch {
            /* storage unavailable */
        }
    }
}
