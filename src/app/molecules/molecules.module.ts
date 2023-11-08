import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '../atoms/atoms.module';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    AtomsModule
  ],
  exports:[
    CardComponent
  ]
})
export class MoleculesModule { }
