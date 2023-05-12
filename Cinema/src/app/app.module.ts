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
import { FooterComponent } from './footer/footer.component';
import { GrilleFilmsComponent } from './voirTousLesFilms/grille-films/grille-films.component';


@NgModule({
  declarations: [
    AppComponent,
    GrilleFilmsComponent,
    InfosFilmComponent,
    HeaderComponent,
    AfficherSeanceComponent,
    ReservationComponent,
    CarrouselAfficheComponent,
    FooterComponent,
    ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
 
  providers: [
    HttpClientModule,
    FormsModule,
    FilmService,
    AfficherSeanceService,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
