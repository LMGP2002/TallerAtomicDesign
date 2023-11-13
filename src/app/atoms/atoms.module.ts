import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TituloCardComponent } from './titulo-card/titulo-card.component';
import { ParrafoCardComponent } from './parrafo-card/parrafo-card.component';
import { BotonCardComponent } from './boton-card/boton-card.component';
import { TitleHeaderComponent } from './title-header/title-header.component';
import { CursosComponent } from './cursos/cursos.component';
import { TextFooterComponent } from './text-footer/text-footer.component';



@NgModule({
  declarations: [
    TituloCardComponent,
    ParrafoCardComponent,
    BotonCardComponent,
    TitleHeaderComponent,
    CursosComponent,
    TextFooterComponent
  ],
  exports:[
    BotonCardComponent,
    TituloCardComponent,
    ParrafoCardComponent,
    TitleHeaderComponent,
    CursosComponent,
    TextFooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AtomsModule { }
