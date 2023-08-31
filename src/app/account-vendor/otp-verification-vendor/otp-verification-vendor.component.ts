import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PostServiceService } from 'src/app/service/postservice.service';

@Component({
  selector: 'app-otp-verification-vendor',
  templateUrl: './otp-verification-vendor.component.html',
  styleUrls: ['./otp-verification-vendor.component.scss']
})
export class OtpVerificationVendorComponent {
  display: any;
  contact_no: any;
  getotp: boolean=true;
  ngOtpInputRef: any;
  codeGenerated: any;
  public timerInterval: any;

  constructor(
    private router: Router,
    private dataservice: PostServiceService, private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.display=59;
  }

  GenerateOtp() {
    var mbb = new String(this.contact_no);

   
    if (mbb.length != 10) {
      this.toastrService.error('Enter valid Mobile Number');
      return;
    }

    //  --------- check mobile no is available or not ------------------
    // let body1 = new HttpParams;
    // body1 = body1.set("contact_number", this.contact_no);
    // alert(this.contact_no)
    // this.dataservice.checkMobile(body1).subscribe(rrr => {
    //   this.MobileNoCount = rrr[0].countOfMobileNo;
    //   if (this.MobileNoCount != 0) {
    //     // this.toastr.error('Mobile Number Already Registerd');
    //   }

    //   if (this.MobileNoCount == 0) {
        this.timer(1);
        const chars = '0123456789';
        const stringLength = 4;
        let randomstring = '';
        for (let i = 0; i < stringLength; i++) {
          const rnum = Math.floor(Math.random() * chars.length);
          randomstring += chars.substring(rnum, rnum + 1);
        }
        this.codeGenerated = randomstring;
        var messege =
          'Your verification code for Anudaan Jagruti Registration is: ' + this.codeGenerated + ' \nRegards, Anudaan Jagruti';

        //  --------- send otp ------------------
        let body = new HttpParams;
        body = body.set("number", this.contact_no);
        body = body.set("messege", this.codeGenerated);
        this.dataservice.sendotp(body).subscribe(rrr => {
          // alert(rrr)
        });
        sessionStorage.setItem('contact_no', this.contact_no);
        sessionStorage.setItem('codeGenerated', this.codeGenerated);
        // alert(sessionStorage.getItem('contact_no') + " " +sessionStorage.getItem('codeGenerated'))
    //   }
    // });
  }

  onOtpChange(event: any) {
    this.ngOtpInputRef = event;
  }

  submit() {
    sessionStorage.setItem('contact_number', this.contact_no);
    var ooo = this.ngOtpInputRef;
    if (sessionStorage.getItem('codeGenerated') === ooo) {
      this.router.navigate(['/account-vendor/registration-vendor']);
    } else {
      // alert('enter otp is inavalid');
      this.toastrService.error('Enter otp is inavalid');

    }
  }

  // start() {
  //   //const [time]="10000"
  //   this.timer(1);
  // }

  timer(minute) {
    let seconds: number = minute * 60;
    let textSec: any = '0';
    let statSec: number = 59;
    const prefix = minute < 10 ? '0' : '';
    this.timerInterval = setInterval(() => {
      seconds--;
      if (statSec != 0) statSec--;
      else statSec = 59;
      if (statSec < 10) {
        textSec = '0' + statSec;
      } else textSec = statSec;
      this.display = `${textSec}`;
      // this.display = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;
      if (seconds == 0) {
        clearInterval(this.timerInterval);
        if (this.getotp == true) {
          this.getotp = false;
        }
      }
    }, 800);
  }
}
