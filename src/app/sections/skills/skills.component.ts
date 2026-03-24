import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { SKILL_GROUPS } from '../../data/skill-groups.data';
import { SkillGroup } from '../../models/skill-group.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslatePipe],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  readonly skillGroups: SkillGroup[] = SKILL_GROUPS;
}
