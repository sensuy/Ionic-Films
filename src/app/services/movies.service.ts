import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaMDB } from '../interfaces/interface';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http: HttpClient
  ) { }


  getFeature() {
    return this.http.get<RespuestaMDB>(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2019-01-01&primary_release_date.lte=2019-01-31&api_key=a6a6b727c6d1dd50658bde614a723fd7&language=pt`);
  }
}
