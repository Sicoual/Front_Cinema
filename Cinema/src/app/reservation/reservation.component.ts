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
  reservationReussie: boolean | null = null;
  placesRestantes: number | null = null;

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
        this.reservationReussie = true;
        this.placesRestantes = placesRestantes;
        this.router.navigate(['/resa/${id}/${nombrePlaces}']);
      },
      error: (erreur) => {
        console.log(`Erreur lors de la réservation: ${erreur}`);
        this.reservationReussie = false;
        this.placesRestantes = null;
      },
      complete: () => {}
    });
  }

  calculerPrix() {
    this.seanceService.calculerPrixSeance(this.seanceId).subscribe(prix => this.prix = prix);
  }
}
