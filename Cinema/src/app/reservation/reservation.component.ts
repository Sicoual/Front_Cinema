import { Component } from '@angular/core';
import { AfficherSeanceService } from '../service/afficher-seance.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {

  seanceId!: number;
  nombrePlaces = 0;
  prix!: number;
  placesRestantes!: number;
  reservationReussie = false;

  constructor(
    private seanceService: AfficherSeanceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.seanceId = Number(this.route.snapshot.paramMap.get('id'));
    this.calculerPrix();
  }

  reserverPlaces() {
    this.seanceService.ajouterReservation(this.seanceId, this.nombrePlaces).subscribe({
      next: (placesRestantes) => {
        console.log(`Réservation réussie. Places restantes: ${placesRestantes}`);
        this.placesRestantes = placesRestantes;
        this.reservationReussie = true;
      },
      error: (erreur) => {
        console.log(`Erreur lors de la réservation: ${erreur}`);
        this.reservationReussie = false;
      },
      complete: () => {}
    });
  }

  calculerPrix() {
    this.seanceService.calculerPrixSeance(this.seanceId).subscribe(prix => this.prix = prix);
  }
}
