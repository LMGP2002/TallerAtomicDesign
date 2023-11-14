import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.scss']
})
export class FormRegistroComponent {
  @Input() cardNumber:number=0
  @Input() curso:string=''

  alertNombre=false;
  alertApellido=false;
  alertEmail=false;
  alertTelefono=false;

  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = fb.group({
      'curso':['', Validators.required],
      'nombre':['', Validators.required],
      'apellido':['', Validators.required],
      'email':['', Validators.required],
      'telefono':['', Validators.required],
    });
  }

  onSubmit() {
    this.myForm.get('nombre')?.value=='' ? this.alertNombre=true:this.alertNombre=false;
    this.myForm.get('apellido')?.value=='' ? this.alertApellido=true:this.alertApellido=false;
    this.myForm.get('email')?.value=='' ? this.alertEmail=true:this.alertEmail=false;
    this.myForm.get('telefono')?.value=='' ? this.alertTelefono=true:this.alertTelefono=false;

  }
 
}
