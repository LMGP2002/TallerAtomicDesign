import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TituloCardComponent } from './titulo-card/titulo-card.component';
import { ParrafoCardComponent } from './parrafo-card/parrafo-card.component';
import { BotonCardComponent } from './boton-card/boton-card.component';
import { TitleHeaderComponent } from './title-header/title-header.component';
import { CursosComponent } from './cursos/cursos.component';
import { TextFooterComponent } from './text-footer/text-footer.component';
import { LabelRegistroComponent } from './label-registro/label-registro.component';
import { InputRegistroComponent } from './input-registro/input-registro.component';
import { BtnRegistroComponent } from './btn-registro/btn-registro.component';
import { BtnVolverComponent } from './btn-volver/btn-volver.component';
import { AppRoutingModule } from '../app-routing.module';
import { TitlePageComponent } from './title-page/title-page.component';
import { BarraProgresoComponent } from './barra-progreso/barra-progreso.component';



@NgModule({
  declarations: [
    TituloCardComponent,
    ParrafoCardComponent,
    BotonCardComponent,
    TitleHeaderComponent,
    CursosComponent,
    TextFooterComponent,
    LabelRegistroComponent,
    InputRegistroComponent,
    BtnRegistroComponent,
    BtnVolverComponent,
    TitlePageComponent,
    BarraProgresoComponent
  ],
  exports:[
    BotonCardComponent,
    TituloCardComponent,
    ParrafoCardComponent,
    TitleHeaderComponent,
    CursosComponent,
    TextFooterComponent,
    LabelRegistroComponent,
    InputRegistroComponent,
    BtnRegistroComponent,
    BtnVolverComponent,
    TitlePageComponent,
    BarraProgresoComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule

  ]
})
export class AtomsModule { }
