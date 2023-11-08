import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titulo-card',
  templateUrl: './titulo-card.component.html',
  styleUrls: ['./titulo-card.component.scss']
})
export class TituloCardComponent {
 @Input() titulo:string='';
}
