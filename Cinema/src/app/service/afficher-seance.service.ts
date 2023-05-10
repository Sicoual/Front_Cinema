import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AfficherSeance } from './afficher-seance';

@Injectable({
  providedIn: 'root'
})
export class AfficherSeanceService {
  [x: string]: any;


  private _seance : AfficherSeance = {

    id : 0,
    date : 0,
    heure : 0,
    nbPlacesReservees : 0,
    film : 0,
    salle : 0
  }

  public get seance() : AfficherSeance {
    return this._seance;
  }
  
  
  public set seance(seance : AfficherSeance) {
    this._seance = seance;
  }
  
  private _url : string = 'http://localhost:9091/seances'
  
  constructor(private http : HttpClient) { }
  
  getAllSeances() : Observable<[AfficherSeance]>{
    return this.http.get<[AfficherSeance]>(this._url);
  }


  ajouterReservation(idSeance: number, nombrePlaces: number) : Observable<number> {
    const url = `${this._url}/${idSeance}/reservations`;
    return this.http.post<number>(url, { nombrePlaces });

  }

  getId(id: number): Observable<AfficherSeance> {
    return this.http.get<AfficherSeance>(`${this._url}/${id}`);
  }

  }
