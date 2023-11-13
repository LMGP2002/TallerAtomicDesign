import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardSectionComponent } from './card-section/card-section.component';
import { MoleculesModule } from '../molecules/molecules.module';
import { HeaderComponent } from './header/header.component';
import { AtomsModule } from '../atoms/atoms.module';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    CardSectionComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MoleculesModule,
    AtomsModule
  ],
  exports:[
    CardSectionComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class OrganismsModule { }
