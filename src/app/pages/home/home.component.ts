import { Component } from '@angular/core';

import { HeroComponent }      from '../../sections/hero/hero.component';
import { AboutComponent }     from '../../sections/about/about.component';
import { OfferingsComponent } from '../../sections/offerings/offerings.component';
import { SkillsComponent }    from '../../sections/skills/skills.component';
import { ProjectsComponent }  from '../../sections/projects/projects.component';
import { ContactComponent }   from '../../sections/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    OfferingsComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
