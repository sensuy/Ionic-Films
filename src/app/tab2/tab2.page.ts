import { Pelicula } from './../interfaces/interface';
import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../components/detalle/detalle.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  ideas = ['Spiderman', 'Avengers', 'O senhor dos Anéis', 'A vida é bela'];
  buscando = false;
  textoBuscar = '';
  peliculas: Pelicula[] = [];

  constructor(
    private moviesService: MoviesService,
    private modalCtrl: ModalController
  ) { }

  buscar(event) {
    this.buscando = true;
    const valor: string = event.detail.value;
    if (valor.length === 0) {
      this.buscando = false;
      this.peliculas = [];
      return;
    }
    this.moviesService.buscarPeliculas(valor)
      .subscribe(resp => {
        // tslint:disable-next-line: no-string-literal
        this.peliculas = resp['results'];
        this.buscando = false;
      });
  }

  async detalle(id: string) {
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    });

    await modal.present();
  }

}
