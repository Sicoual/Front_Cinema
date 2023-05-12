import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrilleFilmsComponent } from './voirTousLesFilms/grille-films/grille-films.component';
import { AfficherSeanceComponent } from './afficher-seance/afficher-seance.component';
import { ReservationComponent } from './reservation/reservation.component';
import { InfosFilmComponent } from './infos-film/infos-film.component';
import { CarrouselAfficheComponent } from './carrousel-affiche/carrousel-affiche.component';


//redirect to = mettre sur la page principal => carroussel
const routes: Routes = [
  {path: "accueil", component: CarrouselAfficheComponent},
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: "filmographie", component: GrilleFilmsComponent },
  { path: 'afficher-seance', component: AfficherSeanceComponent },
  { path: 'reservation/:id', component: ReservationComponent },
  {path:"infos/:id", component:InfosFilmComponent},
  ];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
