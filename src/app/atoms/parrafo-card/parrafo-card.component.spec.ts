import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParrafoCardComponent } from './parrafo-card.component';

describe('ParrafoCardComponent', () => {
  let component: ParrafoCardComponent;
  let fixture: ComponentFixture<ParrafoCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParrafoCardComponent]
    });
    fixture = TestBed.createComponent(ParrafoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
