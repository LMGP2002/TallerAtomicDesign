import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputRegistroComponent } from './input-registro.component';

describe('InputRegistroComponent', () => {
  let component: InputRegistroComponent;
  let fixture: ComponentFixture<InputRegistroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputRegistroComponent]
    });
    fixture = TestBed.createComponent(InputRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
