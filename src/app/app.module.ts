import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';

import { HeroComponent }      from './sections/hero/hero.component';
import { AboutComponent }     from './sections/about/about.component';
import { OfferingsComponent } from './sections/offerings/offerings.component';
import { SkillsComponent }    from './sections/skills/skills.component';
import { ProjectsComponent }  from './sections/projects/projects.component';
import { ContactComponent }   from './sections/contact/contact.component';

import { HomeComponent }      from './pages/home/home.component';
import { ImpressumComponent } from './pages/impressum/impressum.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    OfferingsComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    HomeComponent,
    ImpressumComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
