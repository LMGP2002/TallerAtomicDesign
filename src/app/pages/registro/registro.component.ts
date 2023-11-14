import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  cardNumber: number;
  curso: string;
  
  constructor(private route: ActivatedRoute) {
    this.cardNumber = this.route.snapshot.queryParams['cardNumber'];
    this.curso = this.route.snapshot.queryParams['curso'];
  }
  

}
