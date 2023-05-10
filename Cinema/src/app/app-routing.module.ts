import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfosFilmComponent } from './infos-film/infos-film.component';

const routes: Routes = [
  {path:"infos", component:InfosFilmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
