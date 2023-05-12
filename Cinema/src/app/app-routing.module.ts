import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfosFilmComponent } from './infos-film/infos-film.component';
import { GrilleFilmsComponent } from './voirTousLesFilms/grille-films/grille-films.component';

const routes: Routes = [
  { path: "infos", component: InfosFilmComponent },
  { path: "filmographie", component: GrilleFilmsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
