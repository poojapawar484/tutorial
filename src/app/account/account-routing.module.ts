import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { OtpverificationComponent } from './otpverification/otpverification.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { FirebaseotpComponent } from './firebaseotp/firebaseotp.component';
import { FireotpComponent } from './fireotp/fireotp.component';
import { CodeComponent } from './code/code.component';

const routes: Routes = [
  {
    path: '',
      
    children: [
      {
        path: 'login',
        component: LoginComponent,
        data: {
          title: ''
        }
      },
      {
        path: 'registration',
        component: RegistrationComponent,
        data: {
          title: ''
        }
      },
      {
        path: 'otpverification',
        component: OtpverificationComponent,
        data: {
          title: ''
        }
      },
      {
        path: 'forgotpassword',
        component: ForgotpasswordComponent,
        data: {
          title: ''
        }
      },
      {
        path: 'firebaseotp',
        component: FirebaseotpComponent,
        data: {
          title: ''
        }
      },
      {
        path: 'fireotp',
        component: FireotpComponent,
        data: {
          title: ''
        }
      },
      {
        path: 'code',
        component: CodeComponent,
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
export class AccountRoutingModule { }
