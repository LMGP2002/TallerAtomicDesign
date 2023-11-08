import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TituloCardComponent } from './titulo-card/titulo-card.component';
import { ParrafoCardComponent } from './parrafo-card/parrafo-card.component';
import { BotonCardComponent } from './boton-card/boton-card.component';



@NgModule({
  declarations: [
    TituloCardComponent,
    ParrafoCardComponent,
    BotonCardComponent
  ],
  exports:[
    BotonCardComponent,
    TituloCardComponent,
    ParrafoCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AtomsModule { }
