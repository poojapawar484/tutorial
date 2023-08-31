import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpVerificationVendorComponent } from './otp-verification-vendor.component';

describe('OtpVerificationVendorComponent', () => {
  let component: OtpVerificationVendorComponent;
  let fixture: ComponentFixture<OtpVerificationVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpVerificationVendorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtpVerificationVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
