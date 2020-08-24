import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

//imported AgmCoreModule here
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AboutComponent } from './about/about.component';
import { LogregComponent } from './logreg/logreg.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
//imported ngb here
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { PersonalizeComponent } from './personalize/personalize.component';
import { CollectionsComponent } from './collections/collections.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { MapComponent } from './map/map.component';
import { SuryaComponent } from './surya/surya.component';
import { MudrasComponent } from './mudras/mudras.component';
import { AsanasComponent } from './asanas/asanas.component';
import { PranasComponent } from './pranas/pranas.component';
import { WellnessComponent } from './wellness/wellness.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomeComponent,
    AboutComponent,
    LogregComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    PersonalizeComponent,
    CollectionsComponent,
    FooterComponent,
    ContactComponent,
    MapComponent,
    SuryaComponent,
    MudrasComponent,
    AsanasComponent,
    PranasComponent,
    WellnessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    NgImageSliderModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA5RwbtTvMmwYhZrU1Czi6i3ShjMIvmH4w',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
