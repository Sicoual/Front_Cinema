import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film } from './film';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private _film: Film = {
    id: 0,
    nom: '',
    realisateur: '',
    acteur_1: '',
    acteur_2: '',
    duree: '',
    dateSortie: new Date(),
    synopsis: '',
    categorie: '',
    langue: '',
    bandeAnnonce: '',
    // listeSeances[] : Seance,
    image : '',
  };
  
  public get film() : Film {
    return this._film
  }
  
  public set film(film : Film) {
    this._film = film;
  }
  
  private _url : string = 'http://localhost:9091/films'

  constructor(private http : HttpClient) {}

  getAllFilms() : Observable<[Film]>{
    return this.http.get<[Film]>(this._url)
  }

  addFilm(film : Film) : Observable<Film> {
    return this.http.post<Film>(this._url, film);
  }

  updateFilm(film : Film) : Observable<Film> {
    return this.http.put<Film>(this._url, film);
  }

  deleteFilm(film : Film) : Observable<Film> {
    // return this.http.delete<Film>(this._url + "/" + film.id);
    return this.http.delete<Film>(`${this._url}/${film.id}`);
  }

  getFilmById(id : number) : Observable<Film> {
    return this.http.get<Film>(this._url + "/" + id);
  }

  getFilmByLangue(langue : string) : Observable<Film> {
    return this.http.get<Film>(this._url + "/" + langue);
  }

  getFilmByCategorie(categorie : string) : Observable<Film> {
    return this.http.get<Film>(this._url + "/" + categorie);
  }

}
