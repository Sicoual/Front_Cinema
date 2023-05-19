import { Component } from '@angular/core';
import { AfficherSeance } from '../services/seance/afficher-seance';
import { AfficherSeanceService } from '../services/seance/afficher-seance.service';
import { FilmService } from '../services/film/film.service';
import { Router } from '@angular/router';
import { Film } from '../services/film/film';

@Component({
  selector: 'app-regi-seances',
  templateUrl: './regi-seances.component.html',
  styleUrls: ['./regi-seances.component.css']
})
export class RegiSeancesComponent {
  seances: AfficherSeance[] = [];
  films: Film[] = [];

  choixDate: string = '';
  rechercheTitre: string = '';

  nouvelleSeance: AfficherSeance = {
    id: 0,
    date: '',
    heure: 0,
    nbPlacesReservees: 0,
    film: {
      id: 0,
      nom: '',
      duree: '',
    },
    salle: {
      id: 0,
      nb_places: 0,
      techno: '',
    },
  };
 


  constructor(
    private seanceService: AfficherSeanceService,
    private filmService: FilmService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Fetch the seances from the database
    this.seanceService.getAllSeances().subscribe(
      (seances) => {
        this.seances = seances;
      },
      (error) => {
        console.log(error);
      }
    );

    this.filmService.getAllFilms().subscribe(
      (films) => {
        this.films = films;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  uneDate(date: string) {
    this.choixDate = date;
    this.seanceService.getSeancesByDate(date).subscribe({
      next: (seances) => {
        this.seances = seances;
        for (let seance of this.seances) {
          this.filmService.getFilmById(seance.film.id).subscribe({
            next: (film) => {
              seance.film = film;
            },
            error: (erreur) => {
              console.log(erreur);
            },
            complete: () => {},
          });
        }
      },
      error: (erreur) => {
        console.log(erreur);
      },
      complete: () => {},
    });
  }

  resetNewSeance() {
    this.nouvelleSeance = {
    id : 0,
    date : '',
    heure : 0,
    nbPlacesReservees : 0,
    film : {
        id: 0,
        nom: '',
        duree: '',
    },
    salle :  {
      id: 0,
      nb_places: 0,
      techno: '',
  }
    };
  }

  ajouterSeance() {
    this.seanceService.ajouterSeance(this.nouvelleSeance).subscribe(
      (seance: AfficherSeance) => {
        this.seances.push(seance);
        this.resetNewSeance();
      },
      (error) => {
        console.log(error);
      }
    );
  }


  supprimerSeance(seance: AfficherSeance) {
    if (confirm("Êtes-vous sûr de vouloir supprimer cette séance ?")) {
      this.seanceService.deleteSeance(seance).subscribe(
        () => {
          // Supprimer le film de la liste des films
          this.seances = this.seances.filter((f) => f.id !== seance.id);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  trierParTitre(): void {
    this.seances.sort((a, b) => {
      if (a.film.nom < b.film.nom) {
        return -1;
      }
      if (a.film.nom > b.film.nom) {
        return 1;
      }
      return 0;
    });
  }

  filtreTitre(seance: AfficherSeance): boolean {
    return seance.film.nom.toLowerCase().startsWith(this.rechercheTitre.toLowerCase());
  }
}
