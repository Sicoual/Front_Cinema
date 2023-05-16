import { Injectable } from '@angular/core';
import { Cinema } from './cinema';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  private _cinema : Cinema = {
    id: 0,
    nom: '',
    localisation: ''
  }
  
  public get cinema() : Cinema {
    return this._cinema;
  }
    
  public set cinema(cinema : Cinema) {
    this._cinema = cinema;
  }
  
  private _url : string = 'http://localhost:9091/cinemas'
 
  constructor(private http : HttpClient) { }

  getAllCinemas() : Observable<[Cinema]>{
    return this.http.get<[Cinema]>(this._url)
  }
}
