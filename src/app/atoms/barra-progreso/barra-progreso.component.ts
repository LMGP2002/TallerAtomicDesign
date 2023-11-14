import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-barra-progreso',
  templateUrl: './barra-progreso.component.html',
  styleUrls: ['./barra-progreso.component.scss']
})
export class BarraProgresoComponent {
  @Input() cardNumber:number=0
}
