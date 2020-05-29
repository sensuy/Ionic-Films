import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroImagem'
})
export class FiltroImagemPipe implements PipeTransform {

  transform(peliculas: any[]): any[] {

    return peliculas.filter(peli => {
      return peli.backdrop_path;
    });
  }

}
