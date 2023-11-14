import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardSectionComponent } from './card-section/card-section.component';
import { MoleculesModule } from '../molecules/molecules.module';
import { HeaderComponent } from './header/header.component';
import { AtomsModule } from '../atoms/atoms.module';
import { FooterComponent } from './footer/footer.component';
import { RegistroSectionComponent } from './registro-section/registro-section.component';



@NgModule({
  declarations: [
    CardSectionComponent,
    HeaderComponent,
    FooterComponent,
    RegistroSectionComponent
  ],
  imports: [
    CommonModule,
    MoleculesModule,
    AtomsModule
  ],
  exports:[
    CardSectionComponent,
    HeaderComponent,
    FooterComponent,
    RegistroSectionComponent
  ]
})
export class OrganismsModule { }
