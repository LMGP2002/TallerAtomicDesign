import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-miscursos',
  templateUrl: './miscursos.component.html',
  styleUrls: ['./miscursos.component.scss']
})
export class MiscursosComponent {
  id: number;
  
  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.queryParams['id'];
  }

}
