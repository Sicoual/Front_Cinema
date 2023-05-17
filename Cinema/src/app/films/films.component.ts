import { Component, OnInit } from '@angular/core';
import { Film } from '../services/film/film';
import { FilmService } from '../services/film/film.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  films: Film[] = [];
  nouveauFilm: Film = {
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
  };

  constructor(private filmService: FilmService) {
    this.resetNouveauFilm(); // Ajoutez cette ligne pour initialiser le nouveau film avec enEdition à false
  }
  
  ngOnInit() {
    this.afficheFilms();
  }

  afficheFilms() {
    this.filmService.getAllFilms().subscribe(
      (films: Film[]) => {
        this.films = films;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ajouterFilm() {
    this.filmService.addFilm(this.nouveauFilm).subscribe(
      (film: Film) => {
        this.films.push(film);
        this.resetNouveauFilm();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  resetNouveauFilm() {
    this.nouveauFilm = {
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
      enEdition: false
    };
  }

  supprimerFilm(film: Film) {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce film ?")) {
      this.filmService.deleteFilm(film).subscribe(
        () => {
          // Supprimer le film de la liste des films
          this.films = this.films.filter((f) => f.id !== film.id);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
  activerEdition(film: Film) {
    film.enEdition = true;
  }

  enregistrerModifications(film: Film) {
    this.filmService.updateFilm(film).subscribe(
      () => {
        film.enEdition = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  annulerEdition(film: Film) {
    film.enEdition = false;
  }
}
