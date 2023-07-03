import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseData } from './movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private baseUrl: string = 'https://api.themoviedb.org/3';

  private apiKey: string =
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0N2FjOTlkMDQ1MjY1ZDZiODQzZWU3ZTQxN2Y0ODE4ZiIsInN1YiI6IjYyMTUyOTBmMzIzZWJhMDAxZWI3Njc1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.05CExT0KbAC1DiBGzAmqFW_CrYVgk4EY-HVfpsl7v6w';

  constructor(private _http: HttpClient) {}

  getAll(): Observable<ResponseData> {
    return this._http.get<ResponseData>(`${this.baseUrl}/trending/all/week`, {
      headers: { Authorization: this.apiKey },
      params: { language: 'es-ES' },
    });
  }

  getMovies(): Observable<ResponseData> {
    return this._http.get<ResponseData>(`${this.baseUrl}/trending/movie/week`, {
      headers: { Authorization: this.apiKey },
      params: { language: 'es-ES' },
    });
  }

  getSeries(): Observable<ResponseData> {
    return this._http.get<ResponseData>(`${this.baseUrl}/trending/tv/week`, {
      headers: { Authorization: this.apiKey },
      params: { language: 'es-ES' },
    });
  }
}
