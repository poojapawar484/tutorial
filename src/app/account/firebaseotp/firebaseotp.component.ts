import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase';

@Component({
  selector: 'app-firebaseotp',
  templateUrl: './firebaseotp.component.html',
  styleUrls: ['./firebaseotp.component.scss']
})
export class FirebaseotpComponent {
  phoneNumber: any;
  reCaptchaVerifier!: any;
 
  constructor(private router: Router, private ngZone: NgZone) {}
  ngOnInit(): void {
    
  }
  getOTP() {
    this.reCaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      'sign-in-button',
      {
        size: 'invisible',
      }
    );
    console.log("sssss"+JSON.stringify(this.reCaptchaVerifier));

    console.log(this.phoneNumber);
    firebase
      .auth()
      .signInWithPhoneNumber(this.phoneNumber, this.reCaptchaVerifier)
      .then((confirmationResult) => {
        localStorage.setItem(
          'verificationId',
          JSON.stringify(confirmationResult.verificationId)
        );
        this.ngZone.run(() => {
          this.router.navigate(['/account/code']);
        });
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      });
   
      sessionStorage.setItem('contact_number', this.phoneNumber);

  }
}
