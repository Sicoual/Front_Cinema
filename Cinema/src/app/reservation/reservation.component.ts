import { Component } from '@angular/core';
import { AfficherSeanceService } from '../services/seance/afficher-seance.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
  placesRestantes! : number;
  seance: any; // Ajout de la variable seance

  constructor(
    private http: HttpClient,
    private seanceService: AfficherSeanceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.seanceId = Number(this.route.snapshot.paramMap.get('id'));
    this.calculerPrix();
    this.infSeance(); // Charger les détails de la séance pour afficher image
  }

  infSeance() { //methode seance pour charger les information d'une seance en fct de l'id et indirectement de film
    this.seanceService.getId(this.seanceId).subscribe(seance => {
      this.seance = seance;
    });
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
        this.placesRestantes = 0;
      },
      complete: () => {}
    });
  }

  calculerPrix() {
    this.seanceService.calculerPrixSeance(this.seanceId).subscribe(prix => this.prix = prix);
  }

  getImageSrc(filmId: number): string {
    return `assets/images/${filmId}.jpg`; // Recupere l'id de l'image
  }
  imprimerReservation() {
    this.router.navigate(['/imprimer']);
  }
}