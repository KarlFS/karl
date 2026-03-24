import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { ObfuscatedComponent } from '../../shared/components/obfuscated/obfuscated.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslatePipe, ObfuscatedComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  // scholze@protonmail.com — stored as char codes to keep plain text out of bundle
  protected readonly emailCodes = [115,99,104,111,108,122,101,64,112,114,111,116,111,110,109,97,105,108,46,99,111,109];

  // Inject mailto: href only on first user interaction — keeps it out of the initial DOM
  protected revealMailto(event: MouseEvent | FocusEvent): void {
    const anchor = event.currentTarget as HTMLAnchorElement;
    if (!anchor.getAttribute('href')) {
      anchor.href = 'mailto:' + this.emailCodes.map(c => String.fromCharCode(c)).join('');
    }
  }
}
