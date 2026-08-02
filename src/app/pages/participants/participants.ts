import { NgTemplateOutlet } from '@angular/common';
import { Component, ElementRef, afterNextRender, computed, signal, viewChild } from '@angular/core';
import SimpleBar from 'simplebar';

import { Navbar } from '../../shared/navbar/navbar';
import { SiteFooter } from '../../shared/site-footer/site-footer';
import PARTICIPANTS from './participants-data.json';
import { ParticipantsMap } from './participants-map';
import {
    CountryColumn,
    MergedParticipant,
    Participant,
    WORKSHOP_DATES,
    buildStatColumns,
    calculateStatistics,
    countLabel,
    filterParticipants,
    formatWorkshopName,
    getSpecialtyParts,
    mergeByName,
    normalizeInstitution,
    normalizeName,
} from './participants-logic';

interface DisplayCard {
    name: string;
    role: string;
    specialty: string | null;
    institution: string;
    country: string;
    workshopBadges?: string[];
}

interface WorkshopSection {
    title: string;
    count: number;
    cards: DisplayCard[];
}

@Component({
    selector: 'app-participants-page',
    imports: [Navbar, SiteFooter, NgTemplateOutlet, ParticipantsMap],
    templateUrl: './participants.html',
    styleUrl: './participants.css',
})
export class ParticipantsPage {
    protected readonly mode = signal<'alphabetical' | 'workshop'>('alphabetical');
    protected readonly searchTerm = signal('');

    private readonly data = PARTICIPANTS as Participant[];
    private readonly leftCol = viewChild.required<ElementRef<HTMLDivElement>>('leftCol');
    private readonly rightCol = viewChild.required<ElementRef<HTMLDivElement>>('rightCol');

    private readonly filtered = computed(() => filterParticipants(this.data, this.searchTerm()));

    protected readonly alphabetical = computed<WorkshopSection>(() => {
        const merged = mergeByName(this.filtered());
        merged.sort((a, b) => a.name.localeCompare(b.name));
        return {
            title: 'All',
            count: merged.length,
            cards: merged.map((m) => this.mergedCard(m)),
        };
    });

    protected readonly workshopSections = computed<WorkshopSection[]>(() => {
        const groups: Record<string, Participant[]> = {};
        this.filtered().forEach((p) => {
            (groups[p.workshop] ??= []).push(p);
        });

        const workshopNames = Object.keys(groups).sort(
            (a, b) => (WORKSHOP_DATES[b]?.sort ?? 0) - (WORKSHOP_DATES[a]?.sort ?? 0),
        );

        return workshopNames.map((ws) => {
            const dateLabel = WORKSHOP_DATES[ws]?.label ? ` (${WORKSHOP_DATES[ws].label})` : '';
            const displayName = WORKSHOP_DATES[ws]?.label ? ws.replace(/\s*\([^)]+\)$/, '') : ws;
            const cards = [...groups[ws]]
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((p) => this.card(p));
            return { title: `${displayName}${dateLabel}`, count: cards.length, cards };
        });
    });

    private readonly statColumns = computed(() => buildStatColumns(calculateStatistics(this.data)));
    protected readonly leftColumns = computed<CountryColumn[]>(() => this.statColumns().left);
    protected readonly rightColumns = computed<CountryColumn[]>(() => this.statColumns().right);

    protected readonly countLabel = countLabel;

    constructor() {
        afterNextRender(() => this.initScrollbars());
    }

    protected setMode(mode: 'alphabetical' | 'workshop'): void {
        this.mode.set(mode);
    }

    protected onSearch(event: Event): void {
        this.searchTerm.set((event.target as HTMLInputElement).value);
    }

    private card(p: Participant): DisplayCard {
        const { role, specialty } = getSpecialtyParts(p.title);
        return {
            name: normalizeName(p.name),
            role,
            specialty,
            institution: normalizeInstitution(p.institution),
            country: p.country,
        };
    }

    private mergedCard(m: MergedParticipant): DisplayCard {
        const { role, specialty } = getSpecialtyParts(m.title);
        return {
            name: normalizeName(m.name),
            role,
            specialty,
            institution: normalizeInstitution(m.institution),
            country: m.country,
            workshopBadges: m.workshops.map((ws) => formatWorkshopName(ws)),
        };
    }

    private initScrollbars(): void {
        new SimpleBar(this.leftCol().nativeElement, { autoHide: false });
        new SimpleBar(this.rightCol().nativeElement, { autoHide: false });
    }
}
