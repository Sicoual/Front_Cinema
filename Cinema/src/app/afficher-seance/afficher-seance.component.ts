import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AfficherSeance } from '../services/seance/afficher-seance';
import { AfficherSeanceService } from '../services/seance/afficher-seance.service';

@Component({
  selector: 'app-afficher-seance',
  templateUrl: './afficher-seance.component.html',
  styleUrls: ['./afficher-seance.component.css']
})
export class AfficherSeanceComponent {

  seances : AfficherSeance[] = [];

  constructor(private seanceService : AfficherSeanceService, private router : Router, private route: ActivatedRoute){}


  ngOnInit(): void {
    // Récupération de l'id du film à partir de l'URL
    const idFilm = this.route.snapshot.paramMap.get('id');
  
    // Récupération de toutes les séances
    this.getListeSeances();
  
    // Filtrer la liste des séances pour n'afficher que celles avec un id de film correspondant
    this.seances = this.seances.filter((seance) => seance.film.id === idFilm);
  }

  getListeSeances(){
    this.seanceService.getAllSeances().subscribe({
      next : (donnesseances)=>{ this.seances = donnesseances},
      error : (erreur)=>{ console.log(erreur)},
      complete : ()=>{}
    });
  }

  AllerAReservation(seance: AfficherSeance) {
    this.router.navigate(['/reservation', seance.id]);
  }
}
