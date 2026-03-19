import { Component } from '@angular/core';
import { TranslationService } from '../../core/services/translation.service';
import { Language } from '../../models/language.model';

interface LanguageOption {
  code: Language;
  label: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  readonly languageOptions: LanguageOption[] = [
    { code: 'de',  label: 'DE' },
    { code: 'en',  label: 'EN' },
    { code: 'hsb', label: 'HSB' },
  ];

  isMenuOpen = false;

  constructor(public readonly translationService: TranslationService) {}

  selectLanguage(lang: Language): void {
    this.translationService.setLanguage(lang);
    this.isMenuOpen = false;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
