import { Component, OnInit } from '@angular/core';
import { AfficherSeanceService } from '../service/afficher-seance.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {

  idSeance: number;
  nombrePlaces: number;

  constructor(private seanceService: AfficherSeanceService) { }


  ngOnInit(): void {
  }

  reserverPlaces(idSeance: number, nombrePlaces: number) {
    this.seanceService.ajouterReservation(idSeance, nombrePlaces).subscribe({
      next: (placesRestantes) => {
        console.log(`Réservation réussie. Places restantes: ${placesRestantes}`);
      },
      error: (erreur) => {
        console.log(`Erreur lors de la réservation: ${erreur}`);
      },
      complete: () => {}
    });
  }

  calculerPrix(idSeance: number, nombrePlaces: number) {
    const prix = this.seanceService['calculerPrixSeance'](idSeance);
    const montantTotal = prix * nombrePlaces;
    console.log(`Le prix de cette séance est de ${prix} euros par place, pour un total de ${montantTotal} euros.`);
  }

}