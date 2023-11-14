import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgAlertComponent } from './msg-alert.component';

describe('MsgAlertComponent', () => {
  let component: MsgAlertComponent;
  let fixture: ComponentFixture<MsgAlertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MsgAlertComponent]
    });
    fixture = TestBed.createComponent(MsgAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
