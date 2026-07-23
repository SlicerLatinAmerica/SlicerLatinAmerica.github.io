import { NgTemplateOutlet } from '@angular/common';
import { Component, ElementRef, afterNextRender, computed, signal, viewChild } from '@angular/core';

import { Navbar } from '../../shared/navbar/navbar';
import { SiteFooter } from '../../shared/site-footer/site-footer';
import PARTICIPANTS from './participants-data.json';
import {
    CITY_COORDINATES,
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
    resolveCountry,
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
    imports: [Navbar, SiteFooter, NgTemplateOutlet],
    templateUrl: './participants.html',
    styles: ':host { display: contents }',
})
export class ParticipantsPage {
    protected readonly mode = signal<'alphabetical' | 'workshop'>('alphabetical');
    protected readonly searchTerm = signal('');

    private readonly data = PARTICIPANTS as Participant[];
    private readonly mapEl = viewChild.required<ElementRef<HTMLDivElement>>('map');
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
        afterNextRender(() => {
            void this.initMap();
            void this.initScrollbars();
        });
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

    private async initScrollbars(): Promise<void> {
        const { default: SimpleBar } = await import('simplebar');
        new SimpleBar(this.leftCol().nativeElement, { autoHide: false });
        new SimpleBar(this.rightCol().nativeElement, { autoHide: false });
    }

    private async initMap(): Promise<void> {
        const L = await import('leaflet');
        const map = L.map(this.mapEl().nativeElement).setView([0, -50], 3);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 18,
        }).addTo(map);

        const locationCounts: Record<string, Set<string>> = {};
        this.data.forEach((p) => {
            const country = resolveCountry(p);
            (locationCounts[country] ??= new Set()).add(p.name.toLowerCase().trim());
        });

        Object.keys(locationCounts).forEach((country) => {
            const coords = CITY_COORDINATES[country];
            if (!coords) {
                return;
            }
            const count = locationCounts[country].size;
            const marker = L.circleMarker(coords, {
                radius: Math.min(Math.sqrt(count) * 2.5, 70),
                fillColor: '#0066cc',
                color: '#003d7a',
                weight: 2,
                opacity: 1,
                fillOpacity: 0.6,
            }).addTo(map);
            marker.bindPopup(
                `<div style="max-width: 200px;"><h6 style="margin-bottom: 8px; font-weight: bold;">${country}</h6><p style="margin: 4px 0;"><strong>${count}</strong> ${count > 1 ? 'people' : 'person'}</p></div>`,
            );
        });

        const bounds = Object.keys(locationCounts)
            .filter((country) => CITY_COORDINATES[country])
            .map((country) => CITY_COORDINATES[country]);
        if (bounds.length > 0) {
            map.fitBounds(bounds, { padding: [50, 50] });
        }
        setTimeout(() => map.invalidateSize(), 100);
    }
}
