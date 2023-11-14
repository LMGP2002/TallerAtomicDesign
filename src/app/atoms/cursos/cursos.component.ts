import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {
  constructor(private router:Router){

  }
  irCursos(){

    const navigationExtras: NavigationExtras = {
      queryParams: {
        id: 1
      }
    };

    this.router.navigate(['/cursos'], navigationExtras);
  }

}
