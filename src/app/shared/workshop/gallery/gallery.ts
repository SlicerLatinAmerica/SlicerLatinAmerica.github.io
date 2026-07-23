import {
    Component,
    DestroyRef,
    DOCUMENT,
    ElementRef,
    afterNextRender,
    inject,
    input,
    viewChild,
} from '@angular/core';

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

    private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
    private readonly document = inject(DOCUMENT);
    private readonly destroyRef = inject(DestroyRef);
    private readonly lightbox = viewChild.required<ElementRef<HTMLDivElement>>('lightbox');
    private readonly lightboxImg = viewChild.required<ElementRef<HTMLImageElement>>('lightboxImg');
    private readonly floatTimeouts = new Map<HTMLElement, ReturnType<typeof setTimeout>>();

    constructor() {
        afterNextRender(() => this.initEffects());
        this.destroyRef.onDestroy(() => {
            for (const timeout of this.floatTimeouts.values()) {
                clearTimeout(timeout);
            }
            this.floatTimeouts.clear();
        });
    }

    protected openLightbox(src: string): void {
        const lightbox = this.lightbox().nativeElement;
        this.lightboxImg().nativeElement.src = src;
        lightbox.style.display = 'flex';
        void lightbox.offsetWidth;
        lightbox.classList.add('active');
    }

    protected closeLightbox(): void {
        const lightbox = this.lightbox().nativeElement;
        lightbox.classList.remove('active');
        setTimeout(() => {
            lightbox.style.display = 'none';
        }, 300);
    }

    private async initEffects(): Promise<void> {
        const items = this.host.nativeElement.querySelectorAll<HTMLElement>('.gallery-item');
        const { default: VanillaTilt } = await import('vanilla-tilt');
        VanillaTilt.init(items, {
            max: 1,
            speed: 100,
            glare: true,
            'max-glare': 0.2,
            scale: 1.02,
            perspective: 800,
        });
        items.forEach((item) => this.initSlices(item));
    }

    private initSlices(item: HTMLElement): void {
        const img = item.querySelector('img');
        const src = img?.getAttribute('src');
        if (!img || !src) {
            return;
        }

        const floatSlice = (slice: HTMLElement): void => {
            if (item.matches(':hover')) {
                return;
            }
            const depth = slice.dataset['depth'];
            const rx = (Math.random() - 0.5) * 20;
            const ry = (Math.random() - 0.5) * 20;
            slice.style.transform = `translateZ(${depth}px) translate(${rx}px, ${ry}px)`;
            const duration = 3000 + Math.random() * 2000;
            this.floatTimeouts.set(
                slice,
                setTimeout(() => floatSlice(slice), duration),
            );
        };

        for (let i = 1; i <= 3; i++) {
            const slice = this.document.createElement('div');
            slice.classList.add('slice-layer');
            slice.style.backgroundImage = `url('${src}')`;
            const depth = -(i * 10);
            slice.dataset['depth'] = `${depth}`;
            slice.style.transform = `translateZ(${depth}px)`;
            slice.style.filter = `brightness(${1 - i * 0.1})`;
            item.insertBefore(slice, img);
            floatSlice(slice);
        }

        item.addEventListener('mouseenter', () => {
            item.querySelectorAll<HTMLElement>('.slice-layer').forEach((slice) => {
                const timeout = this.floatTimeouts.get(slice);
                if (timeout !== undefined) {
                    clearTimeout(timeout);
                }
            });
        });

        item.addEventListener('mouseleave', () => {
            item.querySelectorAll<HTMLElement>('.slice-layer').forEach((slice) =>
                floatSlice(slice),
            );
        });

        item.addEventListener('tiltChange', (event) => {
            const detail = (event as CustomEvent<{ percentageX: number; percentageY: number }>)
                .detail;
            const pX = (detail.percentageX - 50) / 50;
            const pY = (detail.percentageY - 50) / 50;
            item.querySelectorAll<HTMLElement>('.slice-layer').forEach((slice, index) => {
                const depth = (index + 1) * 5;
                const moveX = pX * (index + 1) * 8;
                const moveY = pY * (index + 1) * 8;
                slice.style.transform = `translateZ(-${depth}px) translate(${moveX}px, ${moveY}px)`;
            });
        });
    }
}
