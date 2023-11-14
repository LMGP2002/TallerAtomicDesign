import { Component, Input } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-boton-card',
  templateUrl: './boton-card.component.html',
  styleUrls: ['./boton-card.component.scss']
})
export class BotonCardComponent {
  constructor(private router:Router){

  }
  @Input() cardNumber:number=0
  @Input() titulo:string=''

  irRegistro(){

    const navigationExtras: NavigationExtras = {
      queryParams: {
        cardNumber: this.cardNumber,
        curso:this.titulo
      }
    };

    this.router.navigate(['/registro'], navigationExtras);
  }
}
