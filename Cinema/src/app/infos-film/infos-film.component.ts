import {
  Component,
  Injectable,
  OnInit,
  HostListener,
  ElementRef,
} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Film } from '../services/film/film';
import { FilmService } from '../services/film/film.service';
import { AfficherSeance } from '../services/seance/afficher-seance';

@Component({
  selector: 'app-infos-film',
  templateUrl: './infos-film.component.html',
  styleUrls: ['./infos-film.component.css'],
})
@Injectable()
export class InfosFilmComponent implements OnInit {
  public film: Film = {
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
  seance: any;

  constructor(
    public filmService: FilmService,
    private router: Router,
    private route: ActivatedRoute,
    private elementRef: ElementRef
  ) {}

  voirBA = false;
  // voirBa() {
  //   this.voirBA = !this.voirBA;
  // }

  afficheLien!: string;
  filmLien!: string;

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const idFilm = params['id'];
      this.filmService.getFilmById(idFilm).subscribe({
        next: (film) => {
          this.film = film;
          //this.seances = this.seances.filter((seance) => seance.film.id === idFilm);
          this.afficheLien = `assets/images/${this.film.id}.jpg`;
          this.filmLien = `assets/bandeAnnonces/${this.film.id}.mp4`;
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          this.voirBA = true;
        },
      });
    });
  }

  AllerAListeSeances() {
    this.router.navigate(['/seance', this.film.id]);
  }



}
