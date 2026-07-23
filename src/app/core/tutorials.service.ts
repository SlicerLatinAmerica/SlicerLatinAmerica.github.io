import { Injectable, signal } from '@angular/core';

export interface TutorialLanguage {
    label: string;
    url: string;
}

export type TutorialsData = Record<string, TutorialLanguage[] | undefined>;

export type TutorialsState = 'loading' | 'error' | TutorialsData;

@Injectable({ providedIn: 'root' })
export class TutorialsService {
    private readonly stateSignal = signal<TutorialsState>('loading');
    private requested = false;

    readonly state = this.stateSignal.asReadonly();

    load(): void {
        if (this.requested) {
            return;
        }
        this.requested = true;
        fetch('public/assets/data/tutorials.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }
                return response.json() as Promise<TutorialsData>;
            })
            .then((data) => this.stateSignal.set(data))
            .catch(() => this.stateSignal.set('error'));
    }
}
