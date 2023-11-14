import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleRegistroComponent } from './title-registro.component';

describe('TitleRegistroComponent', () => {
  let component: TitleRegistroComponent;
  let fixture: ComponentFixture<TitleRegistroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitleRegistroComponent]
    });
    fixture = TestBed.createComponent(TitleRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
