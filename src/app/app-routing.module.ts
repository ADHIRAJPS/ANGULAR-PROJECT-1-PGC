import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component'; 
import { MedicalsupportComponent } from './medicalsupport/medicalsupport.component';

const routes: Routes = [
  {path:'' , redirectTo: '/home' , pathMatch:'full'},
  {path:'home', component: HomepageComponent },
  {path:'about', component: AboutpageComponent },
  {path: 'medicalsupport', component: MedicalsupportComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
