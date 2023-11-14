import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { MiscursosComponent } from './pages/miscursos/miscursos.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'registro',component:RegistroComponent},
  {path:'cursos',component:MiscursosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
