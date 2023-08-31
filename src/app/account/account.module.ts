import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OtpverificationComponent } from './otpverification/otpverification.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { ConfirmationDialogService } from '../service/confirmation-dialog.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FirebaseotpComponent } from './firebaseotp/firebaseotp.component';
import { FireotpComponent } from './fireotp/fireotp.component';
import { CodeComponent } from './code/code.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    OtpverificationComponent,
    ForgotpasswordComponent,
    FirebaseotpComponent,
    FireotpComponent,
    CodeComponent,

  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgOtpInputModule,
    NgxSpinnerModule,
    
  ],
  
  providers: [
    ConfirmationDialogService
  ],
  entryComponents: [
    ConfirmationDialogComponent
  ],
})
export class AccountModule { }
