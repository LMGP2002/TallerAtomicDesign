import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-registro',
  templateUrl: './title-registro.component.html',
  styleUrls: ['./title-registro.component.scss']
})
export class TitleRegistroComponent {
  @Input() tituloRegistro:string=''
}
