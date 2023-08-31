import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountVendorRoutingModule } from './account-vendor-routing.module';
import { LoginVendorComponent } from './login-vendor/login-vendor.component';
import { RegistrationVendorComponent } from './registration-vendor/registration-vendor.component';
import { OtpVerificationVendorComponent } from './otp-verification-vendor/otp-verification-vendor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgOtpInputModule } from 'ng-otp-input';
import { ForgotpasswordvendorComponent } from './forgotpasswordvendor/forgotpasswordvendor.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { VendorfirebaseotpComponent } from './vendorfirebaseotp/vendorfirebaseotp.component';
import { VendorcodeComponent } from './vendorcode/vendorcode.component';


@NgModule({
  declarations: [
    LoginVendorComponent,
    RegistrationVendorComponent,
    OtpVerificationVendorComponent,
    ForgotpasswordvendorComponent,
    VendorfirebaseotpComponent,
    VendorcodeComponent
  ],
  exports:[
LoginVendorComponent
  ],
  imports: [
    CommonModule,
    AccountVendorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgOtpInputModule,
    NgxSpinnerModule

  ]
})
export class AccountVendorModule { }
