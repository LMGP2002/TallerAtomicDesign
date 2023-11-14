import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '../atoms/atoms.module';
import { CardComponent } from './card/card.component';
import { FormRegistroComponent } from './form-registro/form-registro.component';
import { FormsModule } from '@angular/forms';
import { TitleCardComponent } from './title-card/title-card.component';



@NgModule({
  declarations: [CardComponent, FormRegistroComponent, TitleCardComponent],
  imports: [
    CommonModule,
    AtomsModule,
    FormsModule
  ],
  exports:[
    CardComponent,
    FormRegistroComponent,
    TitleCardComponent
  ]
})
export class MoleculesModule { }
