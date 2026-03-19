import { Component } from '@angular/core';
import { TranslationService } from '../../core/services/translation.service';
import { PROJECTS } from '../../data/projects.data';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  readonly projects: Project[] = PROJECTS;

  constructor(private readonly translationService: TranslationService) {}

  getDescription(project: Project): string {
    return project.description[this.translationService.currentLang];
  }
}
