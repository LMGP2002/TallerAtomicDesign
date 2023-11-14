import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { OrganismsModule } from '../organisms/organisms.module';
import { RegistroComponent } from './registro/registro.component';



@NgModule({
  declarations: [
    HomeComponent,
    RegistroComponent
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
