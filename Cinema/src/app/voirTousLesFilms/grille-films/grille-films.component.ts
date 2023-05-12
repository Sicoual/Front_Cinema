import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from 'src/app/services/film/film';
import { FilmService } from 'src/app/services/film/film.service';



@Component({
  selector: 'app-grille-films',
  templateUrl: './grille-films.component.html',
  styleUrls: ['./grille-films.component.css']
})

export class GrilleFilmsComponent implements OnInit {
  films: Film[] = []; 

  public film : Film = {
    id: 1,
    nom: '',
    realisateur: '',
    acteur_1: '',
    acteur_2: '',
    duree: '',
    dateSortie: new Date(),
    synopsis: '',
    categorie: '',
    langue: '',
    bandeAnnonce: ''
  }

  constructor(private filmService : FilmService, private router : Router) { }

  afficheLien!: string;

  ngOnInit() {
    this.getListeFilm();
    this.afficheLien = `assets/images/${this.film.id}.jpg`;
  }

  getListeFilm() {
    this.filmService.getAllFilms().subscribe( {
      next : (donnesfilm) => {this.films = donnesfilm},
      error : (erreur) => { console.log(erreur)},
      complete : () => {},
    });
  }








}
