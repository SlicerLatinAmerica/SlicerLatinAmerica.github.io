import { Pipe, PipeTransform, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { I18nService } from './i18n.service';

@Pipe({ name: 't', pure: false })
export class TranslatePipe implements PipeTransform {
    private readonly i18n = inject(I18nService);

    transform(key: string): string {
        return this.i18n.t(key);
    }
}

@Pipe({ name: 'tHtml', pure: false })
export class TranslateHtmlPipe implements PipeTransform {
    private readonly i18n = inject(I18nService);
    private readonly sanitizer = inject(DomSanitizer);

    private lastRaw?: string;
    private lastSafe?: SafeHtml;

    transform(key: string): SafeHtml {
        const raw = this.i18n.t(key);
        if (raw !== this.lastRaw) {
            this.lastRaw = raw;
            this.lastSafe = this.sanitizer.bypassSecurityTrustHtml(raw);
        }
        return this.lastSafe!;
    }
}
