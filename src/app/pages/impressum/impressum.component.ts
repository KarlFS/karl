import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss',
})
export class ImpressumComponent {
  // Stored reversed to avoid plain-text scraping of the source/bundle
  private readonly _u = 'ezlohs';
  private readonly _d = 'moc.liamnotorp';

  private get _email(): string {
    const rev = (s: string) => s.split('').reverse().join('');
    return `${rev(this._u)}@${rev(this._d)}`;
  }

  protected readonly mailto  = `mailto:${this._email}`;
  protected readonly display = this._email;
}
