import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoleculesModule } from './molecules/molecules.module';
import { AtomsModule } from './atoms/atoms.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MoleculesModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
