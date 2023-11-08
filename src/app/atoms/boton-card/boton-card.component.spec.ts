import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonCardComponent } from './boton-card.component';

describe('BotonCardComponent', () => {
  let component: BotonCardComponent;
  let fixture: ComponentFixture<BotonCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotonCardComponent]
    });
    fixture = TestBed.createComponent(BotonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
