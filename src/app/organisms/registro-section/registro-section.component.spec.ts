import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroSectionComponent } from './registro-section.component';

describe('RegistroSectionComponent', () => {
  let component: RegistroSectionComponent;
  let fixture: ComponentFixture<RegistroSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroSectionComponent]
    });
    fixture = TestBed.createComponent(RegistroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
