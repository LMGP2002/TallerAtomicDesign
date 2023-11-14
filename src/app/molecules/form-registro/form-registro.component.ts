import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.scss']
})
export class FormRegistroComponent {
  @Input() cardNumber:number=0
  @Input() curso:string=''
 
}
