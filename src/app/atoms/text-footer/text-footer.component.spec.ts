import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFooterComponent } from './text-footer.component';

describe('TextFooterComponent', () => {
  let component: TextFooterComponent;
  let fixture: ComponentFixture<TextFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextFooterComponent]
    });
    fixture = TestBed.createComponent(TextFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
