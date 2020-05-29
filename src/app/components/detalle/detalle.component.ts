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
  iconFavorito = 'heart-outline';

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

  async ngOnInit() {

    const existe = await this.dataLocal.existePelicula(this.id);
    this.iconFavorito = existe ? 'heart' : 'heart-outline';

    this.moviesService.getPeliculaDetalle(this.id)
      .subscribe(resp => {
        this.pelicula = resp;
      });

    this.moviesService.getActoresPelicula(this.id)
      .subscribe(resp => {
        this.actores = resp.cast;
      });
  }

  regressar() {
    this.modalCtrl.dismiss();
  }

  favorito() {
    const existe = this.dataLocal.guardarPelicula(this.pelicula);
    this.iconFavorito = (existe) ? 'heart' : 'heart-outline';

  }

}
