import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { PeliculaDetalle, Cast } from './../../interfaces/interface';
import { ModalController } from '@ionic/angular';
import { DataLocalService } from 'src/app/services/data-local.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {


  @Input() id;

  pelicula: PeliculaDetalle = {};
  actores: Cast[] = [];
  oculto = 150;

  slideOptActores = {
    slidesPerView: 3.3,
    freeMode: true,
    spacebetween: -5
  };

  constructor(
    private moviesService: MoviesService,
    private modalCtrl: ModalController,
    private dataLocal: DataLocalService
  ) { }

  ngOnInit() {
    console.log('ID: ', this.id);
    this.moviesService.getPeliculaDetalle(this.id)
      .subscribe(resp => {
        console.log(resp);
        this.pelicula = resp;
      });

    this.moviesService.getActoresPelicula(this.id)
      .subscribe(resp => {
        console.log(resp);
        this.actores = resp.cast;
      });
  }

  regressar() {
    this.modalCtrl.dismiss();
  }

  favorito() {
    this.dataLocal.guardarPelicula(this.pelicula);
  }

}
