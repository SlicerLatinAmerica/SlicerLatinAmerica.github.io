import { Component, afterNextRender, computed, inject, input } from '@angular/core';

import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { TutorialsService } from '../../core/tutorials.service';

interface TutorialCardDef {
    id: string;
    code: string;
    key: string;
}

const CARDS: readonly TutorialCardDef[] = [
    { id: 'STC-GEN-101_WelcomeTutorial', code: 'STC-GEN-101', key: 'welcome' },
    { id: 'STC-GEN-102_FourMinuteTutorial', code: 'STC-GEN-102', key: 'fourMinute' },
    { id: 'STC-SEG-103_AIBasedSegmentationIn3DSlicer', code: 'STC-SEG-103', key: 'aiSegmentation' },
    { id: 'STC-VIS-101_VisualizationTutorial', code: 'STC-VIS-101', key: 'visualization' },
];

const COLLECTION_LANGS = new Set([
    'English',
    'French',
    'Portuguese (BR)',
    'Spanish (Latin America)',
]);

const COMMUNITY_LANGS = new Set([
    'English',
    'French',
    'Portuguese (BR)',
    'Spanish (Latin America)',
    'German',
    'hu',
    'zh_Hans',
    'pt',
    'Spanish',
]);

const COMMUNITY_DISPLAY_NAMES: Record<string, string> = {
    hu: 'Hungarian',
    zh_Hans: 'Chinese',
    pt: 'Portuguese',
};

@Component({
    selector: 'app-tutorial-cards',
    imports: [TranslatePipe],
    templateUrl: './tutorial-cards.html',
    styles: ':host { display: contents }',
})
export class TutorialCards {
    readonly mode = input.required<'collection' | 'community'>();

    protected readonly cards = CARDS;
    protected readonly tutorials = inject(TutorialsService);

    protected readonly languagesById = computed(() => {
        const state = this.tutorials.state();
        if (state === 'loading' || state === 'error') {
            return null;
        }
        const allowed = this.mode() === 'community' ? COMMUNITY_LANGS : COLLECTION_LANGS;
        const result = new Map<string, { url: string; display: string }[]>();
        for (const card of CARDS) {
            const languages = (state[card.id] ?? []).filter((lang) => allowed.has(lang.label));
            result.set(
                card.id,
                languages.map((lang) => ({
                    url: lang.url,
                    display:
                        this.mode() === 'community'
                            ? (COMMUNITY_DISPLAY_NAMES[lang.label] ?? lang.label)
                            : lang.label,
                })),
            );
        }
        return result;
    });

    constructor() {
        afterNextRender(() => this.tutorials.load());
    }
}
