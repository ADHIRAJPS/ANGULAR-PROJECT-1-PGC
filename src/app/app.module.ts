import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { MedicalsupportComponent } from './medicalsupport/medicalsupport.component';
import { CampaignDetailComponent } from './campaign-detail/campaign-detail.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PersoninfoComponent } from './components/personinfo/personinfo.component';
import { LifesavedComponent } from './components/lifesaved/lifesaved.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TeammembersComponent } from './components/teammembers/teammembers.component';
import { BulletinComponent } from './components/bulletin/bulletin.component';
import { EventsComponent } from './components/events/events.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutpageComponent,
    MedicalsupportComponent,
    CampaignDetailComponent,
    FooterComponent,
    HeaderComponent,
    PersoninfoComponent,
    LifesavedComponent,
    ContactusComponent,
    TeammembersComponent,
    BulletinComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
