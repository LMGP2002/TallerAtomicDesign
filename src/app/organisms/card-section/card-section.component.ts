import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-section',
  templateUrl: './card-section.component.html',
  styleUrls: ['./card-section.component.scss']
})
export class CardSectionComponent {
  @Input() id:number=0;
  cards=['Taller de HTML','Taller de CSS','Taller de JS', 'Metodologías CSS','Frameworks Frontend', 'Atomic Design']
 
}
