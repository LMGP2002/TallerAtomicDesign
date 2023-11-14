import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-registro',
  templateUrl: './btn-registro.component.html',
  styleUrls: ['./btn-registro.component.scss']
})
export class BtnRegistroComponent {
  @Input() cardNumber:number=0

}
