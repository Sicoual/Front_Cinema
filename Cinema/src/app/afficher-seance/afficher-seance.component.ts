import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AfficherSeance } from '../services/seance/afficher-seance';
import { AfficherSeanceService } from '../services/seance/afficher-seance.service';

@Component({
  selector: 'app-afficher-seance',
  templateUrl: './afficher-seance.component.html',
  styleUrls: ['./afficher-seance.component.css']
})
export class AfficherSeanceComponent {

  seances : AfficherSeance[] = [];
  filmId!: number;
  

  constructor(private seanceService : AfficherSeanceService, private router : Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.filmId = Number(params['id']);
      this.getListeSeances();
    });
  }

  getListeSeances() {
    this.seanceService.getAllSeances().subscribe({
      next: (donneesSeances) => {
    
        this.seances = donneesSeances.filter((seance) => seance.film.id === this.filmId);
      },
      error: (erreur) => {
        console.log(erreur);
      },
      complete: () => {}
    });
  }

  AllerAReservation(seance: AfficherSeance) {
    this.router.navigate(['/reservation', seance.id]);
  }
}
