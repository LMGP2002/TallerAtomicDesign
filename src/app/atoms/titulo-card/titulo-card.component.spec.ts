import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloCardComponent } from './titulo-card.component';

describe('TituloCardComponent', () => {
  let component: TituloCardComponent;
  let fixture: ComponentFixture<TituloCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TituloCardComponent]
    });
    fixture = TestBed.createComponent(TituloCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
