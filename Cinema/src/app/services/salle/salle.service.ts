import { Injectable } from '@angular/core';
import { Salle } from './salle';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalleService {
  private _salle: Salle = {
    id: 0,
    nb_places: 0,
    techno: '',
  };
  
  public get salle() : Salle {
    return this._salle
  }
  
  public set salle(salle : Salle) {
    this._salle = salle;
  }
  
  private _url : string = 'http://localhost:9091/salles'

  constructor(private http : HttpClient) { }

  getAllSalles() : Observable<[Salle]>{
    return this.http.get<[Salle]>(this._url)
  }

  addSalle(salle : Salle) : Observable<Salle> {
    return this.http.post<Salle>(this._url, salle);
  }

  updateSalle(salle : Salle) : Observable<Salle> {
    return this.http.put<Salle>(this._url, salle);
  }

  deleteSalle(salle : Salle) : Observable<Salle> {
    return this.http.delete<Salle>(`${this._url}/${salle.id}`);
  }

  getSalleById(id : number) : Observable<Salle> {
    return this.http.get<Salle>(this._url + "/" + id);
  }

  // récupérer la liste des séances pour une salle
  // ajouter une séance à une salle

}
