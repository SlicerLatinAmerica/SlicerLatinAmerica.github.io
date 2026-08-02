import { Component, ElementRef, afterNextRender, viewChild } from '@angular/core';
import L from 'leaflet';

import PARTICIPANTS from './participants-data.json';
import { CITY_COORDINATES, Participant, resolveCountry } from './participants-logic';

@Component({
    selector: 'app-participants-map',
    template: '<div #map id="map"></div>',
    styles: ':host { display: contents }',
})
export class ParticipantsMap {
    private readonly data = PARTICIPANTS as Participant[];
    private readonly mapEl = viewChild.required<ElementRef<HTMLDivElement>>('map');

    constructor() {
        afterNextRender(() => this.initMap());
    }

    private initMap(): void {
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
