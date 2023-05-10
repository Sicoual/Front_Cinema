import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from 'src/app/film';
import { FilmService } from 'src/app/film.service';


@Component({
  selector: 'app-grille-films',
  templateUrl: './grille-films.component.html',
  styleUrls: ['./grille-films.component.css']
})
export class GrilleFilmsComponent implements OnInit {
  films: Film[] = []; 

  constructor(private filmService : FilmService, private router : Router) { }

  ngOnInit(): void {
    this.getListeFilm();
  }

  getListeFilm() {
    this.filmService.getAllFilms().subscribe( {
      next : (donnesfilm) => {this.films = donnesfilm},
      error : (erreur) => { console.log(erreur)},
      complete : () => {},
    });
  }








}
