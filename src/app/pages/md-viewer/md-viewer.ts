import {
    Component,
    ElementRef,
    ViewEncapsulation,
    afterNextRender,
    inject,
    signal,
    viewChild,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { marked } from 'marked';

@Component({
    selector: 'app-md-viewer-page',
    imports: [RouterLink],
    templateUrl: './md-viewer.html',
    styleUrl: './md-viewer.css',
    encapsulation: ViewEncapsulation.None,
})
export class MdViewerPage {
    protected readonly error = signal<string | null>(null);
    protected readonly copyLabel = signal('Loading…');
    protected readonly ready = signal(false);

    private readonly title = inject(Title);
    private readonly content = viewChild.required<ElementRef<HTMLDivElement>>('content');

    constructor() {
        afterNextRender(() => {
            this.copyLabel.set('Copy URL');
            this.ready.set(true);
            void this.loadFile();
        });
    }

    protected goBack(event: Event): void {
        event.preventDefault();
        history.back();
    }

    protected async copyUrl(): Promise<void> {
        const original = this.copyLabel();
        try {
            await navigator.clipboard.writeText(window.location.href);
            this.copyLabel.set('Copied!');
        } catch {
            this.copyLabel.set('Copy failed');
        }
        setTimeout(() => this.copyLabel.set(original), 2000);
    }

    private async loadFile(): Promise<void> {
        const params = new URLSearchParams(window.location.search);
        const filePath = params.get('file');

        if (!filePath) {
            this.error.set('No file specified. Add ?file=path/to/file.md to the URL.');
            return;
        }

        this.title.setTitle(filePath.split('/').pop()!.replace('.md', '').replace(/_/g, ' '));

        try {
            const resp = await fetch(filePath);
            if (!resp.ok) {
                throw new Error(`HTTP ${resp.status}`);
            }
            const md = await resp.text();
            const base = filePath.substring(0, filePath.lastIndexOf('/') + 1);

            let mdProcessed = md.replace(
                /!\[([^\]]*)\]\((?!http|data:)([^)]+)\)/g,
                (_, alt: string, path: string) => `![${alt}](${base}${path})`,
            );
            mdProcessed = mdProcessed.replace(
                /src="(?!http|data:|\/)([^"]+)"/g,
                (_, path: string) => `src="${base}${path}"`,
            );
            mdProcessed = mdProcessed.replace(
                /href="(?!http|#|\/)([^"]+\.md)"/g,
                (_, path: string) =>
                    `href="md-viewer.html?file=${encodeURIComponent(base + path)}"`,
            );

            const contentEl = this.content().nativeElement;
            contentEl.innerHTML = await marked.parse(mdProcessed, { breaks: true });

            contentEl.querySelectorAll<HTMLElement>('[style]').forEach((el) => {
                let style = el.getAttribute('style')!;
                style = style.replace(/max-width\s*:\s*([0-9]+)px/g, 'max-width: min($1px, 100%)');
                style = style.replace(/([0-9.]+)rem/g, (_, n: string) => `${parseFloat(n) / 2}rem`);
                el.setAttribute('style', style);
            });
        } catch {
            this.error.set(`Could not load file: ${filePath}`);
        }
    }
}
