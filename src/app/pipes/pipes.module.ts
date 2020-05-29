import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenPipe } from './imagen.pipe';
import { ParesPipe } from './pares.pipe';
import { FiltroImagemPipe } from './filtro-imagem.pipe';



@NgModule({
  declarations: [
    ImagenPipe,
    ParesPipe,
    FiltroImagemPipe
  ],
  exports: [
    ImagenPipe,
    ParesPipe,
    FiltroImagemPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
