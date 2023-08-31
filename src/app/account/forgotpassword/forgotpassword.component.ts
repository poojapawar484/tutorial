import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PostServiceService } from 'src/app/service/postservice.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent {
  display: any;
  contact_no: any;
  ngOtpInputRef: any;
  codeGenerated: any;
  public timerInterval: any;
  getotp: boolean = true;
  MobileNoCount:any;
  forgotpasswordForm: FormGroup;
  submitted = false;
  show: boolean = false;
  hide: boolean = false;
  constructor(
    private router: Router,
    private dataservice: PostServiceService,
    private formBuilder: FormBuilder,private toastrService: ToastrService
  ) {}
  ngOnInit(): void {
  
    this.forgotpasswordForm = this.formBuilder.group({

      mobile_number: ['', Validators.required],
      password1: ['', Validators.required],  
       password2: ['', Validators.required]



    },{
      validator: this.ConfirmedValidator('password1', 'password2')
    });
    
    this.display=59;
  }

  GenerateOtp() {
    var mbb = new String(this.contact_no);

    alert('sss'+mbb.length)
    if (mbb.length != 10) {
      // this.toastr.error('Enter valid Mobile Number');
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
  get f() { return this.forgotpasswordForm.controls; }
  onOtpChange(event: any) {
    this.ngOtpInputRef = event;
  }
  

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

  submit() {
    // sessionStorage.setItem('contact_number', this.contact_no);
    // var ooo = this.ngOtpInputRef;
    // if (sessionStorage.getItem('codeGenerated') === ooo) {
    //   this.router.navigate(['/account/registration']);
    // } else {
    //   alert('Entered otp is inavalid');
    // }
    
    this.submitted = true;
    if (this.forgotpasswordForm.invalid) {
      return;
    }

    let obj = this.forgotpasswordForm.value;
    let body = new HttpParams;
    body = body.set("contact_number", obj.mobile_number);
    body = body.set("password", obj.password1);


   
//     var sss = (<HTMLInputElement>document.getElementById("mnumber")).value;

 
// alert("p"+sss)

//     sessionStorage.setItem('contact_no', sss);
//     this.contact_no = sessionStorage.getItem('contact_no');
    var ooo=this.ngOtpInputRef;
    
    if (sessionStorage.getItem('codeGenerated') === ooo )

    {
      this.dataservice.forgotpassword(body).subscribe((res) => {
        
        // alert("data update sucess: " + res);
        this.toastrService.success("Password Updated Successfully");

        this.router.navigate(['/account/login'])
        setTimeout(() => {

        }, 100);
     });
     
   
    }
    else {
    
      this.toastrService.error("enter otp is inavalid", "Otp verification");


    }
    setTimeout(() => {

    }, 500);
   
     
  }


  ConfirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors['confirmedValidator']) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }
}
