import { DetalleComponent } from './detalle/detalle.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesshowBackdropComponent } from './slidesshow-backdrop/slidesshow-backdrop.component';
import { PipesModule } from '../pipes/pipes.module';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { SlideShowParesComponent } from './slide-show-pares/slideshow-pares.component';



@NgModule({
  entryComponents: [
    DetalleComponent
  ],
  declarations: [
    SlidesshowBackdropComponent,
    SlideshowPosterComponent,
    SlideShowParesComponent,
    DetalleComponent
  ],
  exports: [
    SlidesshowBackdropComponent,
    SlideshowPosterComponent,
    SlideShowParesComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
