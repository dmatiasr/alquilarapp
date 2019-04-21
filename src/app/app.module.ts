import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FilterBoxComponent } from './components/filterallbox/filterallbox.component';
import { ListAllComponent } from './components/listall/listall.component';
import { NotFoundComponent } from './components/notfound/notfound.component';
import { ProfileComponent } from './components/profile/profile.component';
// Services

import { PropertyService } from './services/property.service/property.service';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { from } from 'rxjs';
import { IndividualComponent } from './components/individual/individual.component';

library.add(fas);


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FilterBoxComponent,
    ListAllComponent,
    NotFoundComponent,
    ProfileComponent,
    IndividualComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [PropertyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
 