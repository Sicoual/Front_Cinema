import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfficherSeanceComponent } from './afficher-seance/afficher-seance.component';
import { ReservationComponent } from './reservation/reservation.component';
import { PageDeImage1Component } from './page-de-image1/page-de-image1.component';
import { InfosFilmComponent } from './infos-film/infos-film.component';



const routes: Routes = [
  { path: '', redirectTo: '/afficher-seance', pathMatch: 'full' },
  { path: 'afficher-seance', component: AfficherSeanceComponent },
  { path: 'reservation/:id', component: ReservationComponent },
  {path:"pageDeImage1", component:PageDeImage1Component },
  {path:"infos", component:InfosFilmComponent},
  ];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
