import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boton-card',
  templateUrl: './boton-card.component.html',
  styleUrls: ['./boton-card.component.scss']
})
export class BotonCardComponent {
  @Input() cardNumber:number=0
}
