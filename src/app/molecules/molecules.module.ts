import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '../atoms/atoms.module';
import { CardComponent } from './card/card.component';
import { FormRegistroComponent } from './form-registro/form-registro.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CardComponent, FormRegistroComponent],
  imports: [
    CommonModule,
    AtomsModule,
    FormsModule
  ],
  exports:[
    CardComponent,
    FormRegistroComponent
  ]
})
export class MoleculesModule { }
