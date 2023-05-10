import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageDeImage1Component } from './page-de-image1/page-de-image1.component';
import { InfosFilmComponent } from './infos-film/infos-film.component';

const routes: Routes = [
  {path:"pageDeImage1", component:PageDeImage1Component },
 {path:"infos", component:InfosFilmComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
