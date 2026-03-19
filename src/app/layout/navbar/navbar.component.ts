import { Component, inject, signal } from '@angular/core';

import { TranslationService } from '../../core/services/translation.service';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { Language } from '../../models/language.model';

interface LanguageOption {
  code: Language;
  label: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslatePipe],
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
