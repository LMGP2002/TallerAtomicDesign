import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() titulo:string='';
  @Input() cardNumber:number=0;
  @Input() id:number=0;

  
  
}
