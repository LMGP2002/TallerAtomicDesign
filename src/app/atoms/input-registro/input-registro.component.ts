import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'app-input-registro',
  templateUrl: './input-registro.component.html',
  styleUrls: ['./input-registro.component.scss'], 
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting:forwardRef(()=>InputRegistroComponent),
      multi:true
    }
  ]
})
export class InputRegistroComponent implements ControlValueAccessor{
  @Input() valorInput:string='';
  @Input() colorInput:number=0;

  inputValue=this.valorInput;
  onChange=(_:any)=>{}
  onTouch=()=>{}

  writeValue(): void {
    this.inputValue=this.valorInput;
  }
  registerOnChange(fn: any): void {
    this.onChange=fn
  }
  registerOnTouched(fn: any): void {
    this.onTouch=fn
  }

  onInput() {
    this.onChange(this.inputValue)
    this.onTouch()
  }
  
  
  
  
}
