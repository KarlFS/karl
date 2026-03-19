import { Component, inject } from '@angular/core';

import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { TranslationService } from '../../core/services/translation.service';
import { PROJECTS } from '../../data/projects.data';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  readonly projects: Project[] = PROJECTS;

  private readonly translationService = inject(TranslationService);

  getDescription(project: Project): string {
    return project.description[this.translationService.currentLang()];
  }
}
