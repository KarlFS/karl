import { Component } from '@angular/core';
import { SKILL_GROUPS } from '../../data/skill-groups.data';
import { SkillGroup } from '../../models/skill-group.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  readonly skillGroups: SkillGroup[] = SKILL_GROUPS;
}
