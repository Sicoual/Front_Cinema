import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageDeImage1Component } from './page-de-image1/page-de-image1.component';
import { InfosFilmComponent } from './infos-film/infos-film.component';
import { FilmService } from './film.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    InfosFilmComponent,
    HeaderComponent,
    PageDeImage1Component
    ],
  
  imports: [
    
    BrowserModule,
    AppRoutingModule,
     HttpClientModule,
     FormsModule,
      
  ],
 
  providers: [FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
