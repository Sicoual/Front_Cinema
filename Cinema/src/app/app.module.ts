import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AfficherSeanceComponent } from './afficher-seance/afficher-seance.component';
import { AfficherSeanceService } from './services/seance/afficher-seance.service';
import { ReservationComponent } from './reservation/reservation.component';
import { InfosFilmComponent } from './infos-film/infos-film.component';
import { FilmService } from './services/film/film.service';
import { HeaderComponent } from './header/header.component';
import { CarrouselAfficheComponent } from './carrousel-affiche/carrousel-affiche.component';



@NgModule({
  declarations: [
    AppComponent,
    InfosFilmComponent,
    HeaderComponent,
    AfficherSeanceComponent,
    ReservationComponent,
    CarrouselAfficheComponent,
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
