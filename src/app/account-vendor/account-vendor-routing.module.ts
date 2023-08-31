import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginVendorComponent } from './login-vendor/login-vendor.component';
import { RegistrationVendorComponent } from './registration-vendor/registration-vendor.component';
import { OtpVerificationVendorComponent } from './otp-verification-vendor/otp-verification-vendor.component';
import { ForgotpasswordvendorComponent } from './forgotpasswordvendor/forgotpasswordvendor.component';
import { VendorfirebaseotpComponent } from './vendorfirebaseotp/vendorfirebaseotp.component';
import { VendorcodeComponent } from './vendorcode/vendorcode.component';

const routes: Routes = [

  {
    path: '',
      
    children: [
      {
        path: 'login-vendor',
        component: LoginVendorComponent,
        data: {
          title: ''
        }
      },
      {
        path: 'registration-vendor',
        component: RegistrationVendorComponent,
        data: {
          title: ''
        }
      },
      {
        path: 'otpverification-vendor',
        component: OtpVerificationVendorComponent,
        data: {
          title: ''
        }
      },
      {
        path: 'forgotpasswordvendor',
        component: ForgotpasswordvendorComponent,
        data: {
          title: ''
        }
      },
      {
        path: 'vendorfirebaseotp',
        component: VendorfirebaseotpComponent,
        data: {
          title: ''
        }
      },
      {
        path: 'vendorcode',
        component: VendorcodeComponent,
        data: {
          title: ''
        }
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountVendorRoutingModule { }
