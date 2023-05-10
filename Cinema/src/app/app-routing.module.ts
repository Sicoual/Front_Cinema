import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfficherSeanceComponent } from './afficher-seance/afficher-seance.component';
import { ReservationComponent } from './reservation/reservation.component';

const routes: Routes = [
  { path: '', redirectTo: '/afficher-seance', pathMatch: 'full' },
  { path: 'afficher-seance', component: AfficherSeanceComponent },
  { path: 'reservation/:id', component: ReservationComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
