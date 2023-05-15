import { Component } from '@angular/core';
import { AfficherSeanceService } from '../services/seance/afficher-seance.service';
import { AfficherSeance } from '../services/seance/afficher-seance';
import { Router } from '@angular/router';
import { FilmService } from '../services/film/film.service';

@Component({
  selector: 'app-horaires-jour',
  templateUrl: './horaires-jour.component.html',
  styleUrls: ['./horaires-jour.component.css'],
})
export class HorairesJourComponent {
  seances: AfficherSeance[] = [];
  choixDate: string = '';
  rechercheTitre: string = '';

  constructor(
    private seanceService: AfficherSeanceService,
    private filmService: FilmService,
    private router: Router
  ) {}

  ngOnInit(): void {}

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

  AllerAReservation(seance: AfficherSeance) {
    this.router.navigate(['/reservation', seance.id]);
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
