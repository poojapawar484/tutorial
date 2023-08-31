import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotpasswordvendorComponent } from './forgotpasswordvendor.component';

describe('ForgotpasswordvendorComponent', () => {
  let component: ForgotpasswordvendorComponent;
  let fixture: ComponentFixture<ForgotpasswordvendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotpasswordvendorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotpasswordvendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
