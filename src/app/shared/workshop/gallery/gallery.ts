import { Component, ElementRef, input, signal, viewChild } from '@angular/core';

export interface GalleryImage {
    src: string;
    variant?: 'tall' | 'wide';
    alt?: string;
}

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.html',
    styles: ':host { display: contents }',
})
export class Gallery {
    readonly images = input.required<readonly GalleryImage[]>();
    readonly decodingAsync = input(false);

    protected readonly current = signal<GalleryImage | null>(null);
    private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');

    protected caption(image: GalleryImage, index: number): string {
        return image.alt ?? `Workshop photo ${index + 1}`;
    }

    protected open(image: GalleryImage): void {
        this.current.set(image);
        this.dialog().nativeElement.showModal();
    }

    protected close(): void {
        this.dialog().nativeElement.close();
        this.current.set(null);
    }

    protected onBackdropClick(event: MouseEvent): void {
        if (event.target === this.dialog().nativeElement) {
            this.close();
        }
    }
}
