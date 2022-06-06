import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component'; 
import { MedicalsupportComponent } from './medicalsupport/medicalsupport.component';
import { ContactusComponent } from './contactus/contactus.component';
import { Covid19Component } from './covid19/covid19.component';

const routes: Routes = [
  {path:'*' , redirectTo: '/home' , pathMatch:'full'},
  {path:'home', component: HomepageComponent },
  {path:'about', component: AboutpageComponent },
  {path: 'medicalsupport', component: MedicalsupportComponent },
  {path: 'contactus' , component: ContactusComponent},
  {path: 'covid19' , component: Covid19Component}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
