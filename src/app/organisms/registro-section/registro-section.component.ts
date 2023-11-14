import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-registro-section',
  templateUrl: './registro-section.component.html',
  styleUrls: ['./registro-section.component.scss']
})
export class RegistroSectionComponent {
 @Input() cardNumber:number=0
 @Input() curso:string=''
}
