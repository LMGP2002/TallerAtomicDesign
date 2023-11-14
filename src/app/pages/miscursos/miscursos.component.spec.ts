import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscursosComponent } from './miscursos.component';

describe('MiscursosComponent', () => {
  let component: MiscursosComponent;
  let fixture: ComponentFixture<MiscursosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiscursosComponent]
    });
    fixture = TestBed.createComponent(MiscursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
