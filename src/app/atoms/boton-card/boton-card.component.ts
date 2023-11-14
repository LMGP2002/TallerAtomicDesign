import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boton-card',
  templateUrl: './boton-card.component.html',
  styleUrls: ['./boton-card.component.scss']
})
export class BotonCardComponent {
  constructor(private router:Router){

  }
  @Input() cardNumber:number=0

  irRegistro(){
    this.router.navigate(['/registro']);
  }
}
