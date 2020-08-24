import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LogregComponent } from './logreg/logreg.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PersonalizeComponent } from './personalize/personalize.component';
import { CollectionsComponent } from './collections/collections.component';
import { ContactComponent } from './contact/contact.component';
import { MapComponent } from './map/map.component';
import { SuryaComponent } from './surya/surya.component';
import { MudrasComponent } from './mudras/mudras.component';
import { AsanasComponent } from './asanas/asanas.component';
import { PranasComponent } from './pranas/pranas.component';
import { WellnessComponent } from './wellness/wellness.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'logreg', component: LogregComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'personalize', component: PersonalizeComponent },
  {
    path: 'collections',
    component: CollectionsComponent, //parent component within <router-outlet>
    children: [
      {
        path: 'surya',
        component: SuryaComponent,
      },
      {
        path: 'mudras',
        component: MudrasComponent,
      },
      {
        path: 'asanas',
        component: AsanasComponent,
      },
      {
        path: 'pranas',
        component: PranasComponent,
      },
    ],
  },
  { path: 'contact', component: ContactComponent },
  { path: 'map', component: MapComponent },
  { path: 'wellness', component: WellnessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
