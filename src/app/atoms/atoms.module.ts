import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TituloCardComponent } from './titulo-card/titulo-card.component';
import { ParrafoCardComponent } from './parrafo-card/parrafo-card.component';
import { BotonCardComponent } from './boton-card/boton-card.component';
import { TitleHeaderComponent } from './title-header/title-header.component';
import { CursosComponent } from './cursos/cursos.component';
import { TextFooterComponent } from './text-footer/text-footer.component';
import { TitleRegistroComponent } from './title-registro/title-registro.component';
import { LabelRegistroComponent } from './label-registro/label-registro.component';
import { InputRegistroComponent } from './input-registro/input-registro.component';



@NgModule({
  declarations: [
    TituloCardComponent,
    ParrafoCardComponent,
    BotonCardComponent,
    TitleHeaderComponent,
    CursosComponent,
    TextFooterComponent,
    TitleRegistroComponent,
    LabelRegistroComponent,
    InputRegistroComponent,
  ],
  exports:[
    BotonCardComponent,
    TituloCardComponent,
    ParrafoCardComponent,
    TitleHeaderComponent,
    CursosComponent,
    TextFooterComponent,
    TitleRegistroComponent,
    LabelRegistroComponent,
    InputRegistroComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class AtomsModule { }
