import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label-registro',
  templateUrl: './label-registro.component.html',
  styleUrls: ['./label-registro.component.scss']
})
export class LabelRegistroComponent {
  @Input() labelText:string=''
}
