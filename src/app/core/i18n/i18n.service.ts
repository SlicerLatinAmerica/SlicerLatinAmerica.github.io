import { DOCUMENT, Injectable, inject, signal } from '@angular/core';

import en from './locales/en.json';
import es from './locales/es.json';
import fr from './locales/fr.json';
import ptBr from './locales/pt-br.json';

export const SUPPORTED_LANGS = ['en', 'pt-br', 'es', 'fr'] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];

export const LANG_META: Record<Lang, { label: string; flag: string }> = {
    en: { label: 'English', flag: '🇺🇸' },
    'pt-br': { label: 'Portuguese (BR)', flag: '🇧🇷' },
    es: { label: 'Spanish', flag: '🇲🇽' },
    fr: { label: 'French', flag: '🇫🇷' },
};

const DEFAULT_LANG: Lang = 'en';
const STORAGE_KEY = 'slicerla_lang';

interface TranslationTree {
    [key: string]: string | TranslationTree;
}

const TRANSLATIONS: Record<Lang, TranslationTree> = { en, 'pt-br': ptBr, es, fr };

function resolve(key: string, tree: TranslationTree): string | null {
    let node: TranslationTree | string | undefined = tree;
    for (const part of key.split('.')) {
        if (node === undefined || typeof node === 'string') {
            return null;
        }
        node = node[part];
    }
    return typeof node === 'string' ? node : null;
}

@Injectable({ providedIn: 'root' })
export class I18nService {
    private readonly document = inject(DOCUMENT);

    readonly lang = signal<Lang>(DEFAULT_LANG);

    init(): void {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored && this.isSupported(stored) && stored !== this.lang()) {
            this.lang.set(stored);
            this.document.documentElement.lang = stored;
        }
    }

    setLanguage(lang: Lang): void {
        localStorage.setItem(STORAGE_KEY, lang);
        this.lang.set(lang);
        this.document.documentElement.lang = lang;
    }

    t(key: string): string {
        return resolve(key, TRANSLATIONS[this.lang()]) ?? resolve(key, TRANSLATIONS.en) ?? key;
    }

    private isSupported(lang: string): lang is Lang {
        return (SUPPORTED_LANGS as readonly string[]).includes(lang);
    }
}
