import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrilleFilmsComponent } from './voirTousLesFilms/grille-films/grille-films.component';
import { AfficherSeanceComponent } from './afficher-seance/afficher-seance.component';
import { ReservationComponent } from './reservation/reservation.component';
import { InfosFilmComponent } from './infos-film/infos-film.component';
import { ProchainementComponent } from './prochainement/prochainement.component';
import { HorairesJourComponent } from './horaires-jour/horaires-jour.component';
import { PageContactsComponent } from './page-contacts/page-contacts.component';
import { ImprimerReservationComponent } from './imprimer-reservation/imprimer-reservation.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { CarouselModifieComponent } from './carousel-modifie/carousel-modifie.component';
import { FilmsComponent } from './films/films.component';
import { RegisseurComponent } from './regisseur/regisseur.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { RegiSeancesComponent } from './regi-seances/regi-seances.component';


//redirect to = mettre sur la page principal => carroussel
const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'afficher-seance/:id', component: AfficherSeanceComponent },
  { path: 'reservation/:id', component: ReservationComponent },
  { path: 'film/:id', component: InfosFilmComponent },
  { path: 'infos/:id', component:InfosFilmComponent},
  { path: "accueil", component: CarouselModifieComponent},
  { path: "filmographie", component: GrilleFilmsComponent },
  { path: "contacts", component: PageContactsComponent },
  { path: "prochainement", component: ProchainementComponent },
  { path: "horaires", component: HorairesJourComponent },
  { path: "imprimer", component: ImprimerReservationComponent },
  { path: "newsletter", component: NewsletterComponent },
  { path: "listeFilms", component: FilmsComponent },
  { path: "regisseur", component: RegisseurComponent },
  { path: "boutique", component: BoutiqueComponent },
  { path: "regiSeance", component: RegiSeancesComponent },

  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
