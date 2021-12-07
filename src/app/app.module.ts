import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './user/components/nav/nav.component';
import { AdminHomePageComponent } from './admin/components/admin-home-page/admin-home-page.component';
import { HomePageComponent } from './user/components/home-page/home-page.component';
import { AboutMeComponent } from './user/components/about-me/about-me.component';
import { SkillsComponent } from './user/components/skills/skills.component';
import { ContactMeComponent } from './user/components/contact-me/contact-me.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AdminHomePageComponent,
    HomePageComponent,
    AboutMeComponent,
    SkillsComponent,
    ContactMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
