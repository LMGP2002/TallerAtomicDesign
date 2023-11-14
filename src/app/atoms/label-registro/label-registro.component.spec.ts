import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelRegistroComponent } from './label-registro.component';

describe('LabelRegistroComponent', () => {
  let component: LabelRegistroComponent;
  let fixture: ComponentFixture<LabelRegistroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabelRegistroComponent]
    });
    fixture = TestBed.createComponent(LabelRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
