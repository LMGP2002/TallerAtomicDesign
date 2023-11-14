import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { OrganismsModule } from '../organisms/organisms.module';
import { RegistroComponent } from './registro/registro.component';
import { MiscursosComponent } from './miscursos/miscursos.component';



@NgModule({
  declarations: [
    HomeComponent,
    RegistroComponent,
    MiscursosComponent,
  ],
  imports: [
    CommonModule,
    OrganismsModule
  ],
  exports:[
    HomeComponent
  ]
})
export class PagesModule { }
