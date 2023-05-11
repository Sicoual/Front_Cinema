import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AfficherSeance } from '../service/afficher-seance';
import { AfficherSeanceService } from '../service/afficher-seance.service';

@Component({
  selector: 'app-afficher-seance',
  templateUrl: './afficher-seance.component.html',
  styleUrls: ['./afficher-seance.component.css']
})
export class AfficherSeanceComponent {

  seances : AfficherSeance[] = [];

  constructor(private seanceService : AfficherSeanceService, private router : Router){}

  ngOnInit(): void {
    this.getListeSeances();
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
