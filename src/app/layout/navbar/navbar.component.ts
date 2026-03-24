import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TranslationService } from '../../core/services/translation.service';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { KIconComponent } from '../../shared/components/k-icon/k-icon.component';
import { Language } from '../../models/language.model';

interface LanguageOption {
  code: Language;
  label: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslatePipe, KIconComponent, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  protected readonly translationService = inject(TranslationService);

  readonly languageOptions: LanguageOption[] = [
    { code: 'de',  label: 'DE' },
    { code: 'en',  label: 'EN' },
    { code: 'hsb', label: 'HSB' },
  ];

  readonly isMenuOpen = signal(false);

  selectLanguage(lang: Language): void {
    this.translationService.setLanguage(lang);
    this.isMenuOpen.set(false);
  }

  toggleMenu(): void {
    this.isMenuOpen.update(open => !open);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

}
