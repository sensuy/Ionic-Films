import { async } from '@angular/core/testing';
import { PeliculaDetalle, Genre } from './../interfaces/interface';
import { Component, OnInit } from '@angular/core';
import { DataLocalService } from '../services/data-local.service';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  peliculas: PeliculaDetalle[] = [];

  genros: Genre[] = [];
  favoritoGenero: any[] = [];

  constructor(
    private dataLocalSerice: DataLocalService,
    private movieService: MoviesService
  ) { }

  async ionViewWillEnter() {
    this.peliculas = await this.dataLocalSerice.cargarFavoritos();
    this.genros = await this.movieService.cargarGeneros();
    this.pelisPorGenro(this.genros, this.peliculas);
  }

  pelisPorGenro(generos: Genre[], peliculas: PeliculaDetalle[]) {
    this.favoritoGenero = [];
    generos.forEach(genero => {
      this.favoritoGenero.unshift({
        genero: genero.name,
        pelis: peliculas.filter(peli => {
          return peli.genres.find(genre => genre.id === genero.id);
        })
      });
    });
    console.log('favoritoGenero: ', this.favoritoGenero);

  }

}
