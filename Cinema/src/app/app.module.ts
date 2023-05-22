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
import { FooterComponent } from './footer/footer.component';
import { GrilleFilmsComponent } from './voirTousLesFilms/grille-films/grille-films.component';
import { PageContactsComponent } from './page-contacts/page-contacts.component';
import { ProchainementComponent } from './prochainement/prochainement.component';
import { HorairesJourComponent } from './horaires-jour/horaires-jour.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { ImprimerReservationComponent } from './imprimer-reservation/imprimer-reservation.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { CarouselModifieComponent } from './carousel-modifie/carousel-modifie.component';
import { FilmsComponent } from './films/films.component';
import { RegisseurComponent } from './regisseur/regisseur.component';
import { RegiSeancesComponent } from './regi-seances/regi-seances.component';


@NgModule({
  declarations: [
    AppComponent,
    GrilleFilmsComponent,
    InfosFilmComponent,
    HeaderComponent,
    AfficherSeanceComponent,
    ReservationComponent,
    FooterComponent,
    PageContactsComponent,
    ProchainementComponent,
    HorairesJourComponent,
    BoutiqueComponent,
    ImprimerReservationComponent,
    NewsletterComponent,
    CarouselModifieComponent,
    FilmsComponent,
    RegisseurComponent,
    RegiSeancesComponent,
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
