import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AfficherSeanceComponent } from './afficher-seance/afficher-seance.component';
import { AfficherSeanceService } from './service/afficher-seance.service';
import { ReservationComponent } from './reservation/reservation.component';
import { PageDeImage1Component } from './page-de-image1/page-de-image1.component';
import { InfosFilmComponent } from './infos-film/infos-film.component';
import { FilmService } from './film.service';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    InfosFilmComponent,
    HeaderComponent,
    PageDeImage1Component,
    AfficherSeanceComponent,
    ReservationComponent,
    ],
  
  imports: [
    
    BrowserModule,
    AppRoutingModule,
     HttpClientModule,
     FormsModule,
      
  ],
 
  providers: [
    FilmService,
    AfficherSeanceService,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
