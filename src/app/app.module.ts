import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FilterBoxComponent } from './components/filterallbox/filterallbox.component';
import { ListAllComponent } from './components/listall/listall.component';
import { NotFoundComponent } from './components/notfound/notfound.component';

// Services

import { PropertyService } from './services/property.service/property.service';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { from } from 'rxjs';

library.add(fas);


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FilterBoxComponent,
    ListAllComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [PropertyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
