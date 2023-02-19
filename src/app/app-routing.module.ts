import { importProvidersFrom, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authenticate/login/login.component';
import { SignupComponent } from './authenticate/signup/signup.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ServiceComponent } from './pages/service/service.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home' ,component:HomeComponent
  },
  {
    path: 'service' ,component:ServiceComponent
  },
  {
    path: 'contact' ,component:ContactComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path: 'login',component:LoginComponent
  },
  {
    path: 'signup',component:SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
