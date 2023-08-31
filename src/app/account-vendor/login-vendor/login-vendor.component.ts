import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PostServiceService } from 'src/app/service/postservice.service';

@Component({
  selector: 'app-login-vendor',
  templateUrl: './login-vendor.component.html',
  styleUrls: ['./login-vendor.component.scss']
})
export class LoginVendorComponent {
  loginForm: FormGroup;
  submitted = false;
  buttonText: any = "Submit";
  show: boolean;
  SMSType :any= "firebase";
  constructor(
    private router: Router,  private formBuilder: FormBuilder, private httpClient: HttpClient,private toastr: ToastrService,private serviceobj: PostServiceService) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      vendor_contact: ['', Validators.required],
      password: ['', Validators.required]
    });
  
  }

   // ========== login Details Submit Function Start =========================================

   get f() { return this.loginForm.controls; }
   onSubmit() {
     this.submitted = true;
     if (this.loginForm.invalid) { return; }
     let obj = this.loginForm.value;
     let body = new HttpParams;
     body = body.set("vendor_contact", obj.vendor_contact);
     body = body.set("password", obj.password);
     this.serviceobj.loginVendor(body).subscribe(result => {
 
       if (result.success) {
         this.toastr.success('Login successful');
         sessionStorage.setItem('isLogin', "true");
         sessionStorage.setItem('userType', "vendor");

         sessionStorage.setItem('vendor_id', result.data[0].vendor_id);
         sessionStorage.setItem('vendor_username', result.data[0].vendor_username);
         sessionStorage.setItem('vendor_firstname', result.data[0].vendor_firstname);
         sessionStorage.setItem('vendor_lastname', result.data[0].vendor_lastname);
         sessionStorage.setItem('vendor_pincode', result.data[0].vendor_pincode);

         sessionStorage.setItem('vendor_email', result.data[0].vendor_email);
         sessionStorage.setItem('vendor_contact', result.data[0].vendor_contact);
 
         this.router.navigate(['/pages/home']);
       } else {
         this.toastr.error('Wrong Username Or Password');
       }
     });
   }
   // ========== login Details Submit Function End =========================================
 
   onClick() {
     this.show = !this.show;
   }
   otp(){
    if (this.SMSType=='jio'){
      this.router.navigate(['/account-vendor/otpverification-vendor']);
    }
    else if(this.SMSType=='firebase'){
      this.router.navigate(['/account-vendor/vendorfirebaseotp']);

    }
   }
 }
 

