import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-registro',
  templateUrl: './input-registro.component.html',
  styleUrls: ['./input-registro.component.scss']
})
export class InputRegistroComponent {
  @Input() valorInput:string='';
  @Input() colorInput:number=0;
  


}
