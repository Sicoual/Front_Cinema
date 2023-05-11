import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfficherSeanceComponent } from './afficher-seance/afficher-seance.component';
import { ReservationComponent } from './reservation/reservation.component';
import { InfosFilmComponent } from './infos-film/infos-film.component';


//redirect to = mettre sur la page principal => carroussel
const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'afficher-seance', component: AfficherSeanceComponent },
  { path: 'reservation/:id', component: ReservationComponent },
  { path: 'film/:id', component: InfosFilmComponent },
  { path:"infos/:id", component:InfosFilmComponent},
  ];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
