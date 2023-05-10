import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from '../film';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-infos-film',
  templateUrl: './infos-film.component.html',
  styleUrls: ['./infos-film.component.css']
})

@Injectable()
export class InfosFilmComponent implements OnInit {

  public film : Film = {
    id: 0,
    nom: '',
    realisateur: '',
    acteur_1: '',
    acteur_2: '',
    duree: '',
    dateSortie: new Date(),
    synopsis: '',
    categorie: '',
    langue: '',
    bandeAnnonce: '',
  }

  constructor (public filmService : FilmService, private router : Router) {}
  
  afficheLien!: string;
  filmLien!: string;

  ngOnInit(){
    this.filmService.getFilmById(5).subscribe((film) => {
      this.film = film;
      this.afficheLien = `assets/images/${this.film.id}.jpg`;
      this.filmLien = `assets/bandeAnnonces/${this.film.id}.mp4`;
    });
  }
}
