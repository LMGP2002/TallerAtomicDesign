import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnRegistroComponent } from './btn-registro.component';

describe('BtnRegistroComponent', () => {
  let component: BtnRegistroComponent;
  let fixture: ComponentFixture<BtnRegistroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnRegistroComponent]
    });
    fixture = TestBed.createComponent(BtnRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
