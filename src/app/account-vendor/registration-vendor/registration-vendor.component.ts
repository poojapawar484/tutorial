import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PostServiceService } from 'src/app/service/postservice.service';

@Component({
  selector: 'app-registration-vendor',
  templateUrl: './registration-vendor.component.html',
  styleUrls: ['./registration-vendor.component.scss']
})
export class RegistrationVendorComponent {
  registerVendor: FormGroup;
  submitted = false;
  buttonText: any = "Submit";
  contact_number1: any;
  show: boolean = false;
  hide: boolean = false;



  constructor(
    private router: Router, private formBuilder: FormBuilder, private serviceobj: PostServiceService, private httpClient: HttpClient, private toastrService: ToastrService) {
  }

  ngOnInit() {
    this.contact_number1 = sessionStorage.getItem('contact_number');
    // alert( this.contact_number1)


    setTimeout(() => {
      this.registerVendor.patchValue({
        vendor_contact: this.contact_number1
      })
    }, 100);
// alert( this.contact_number)
    this.registerVendor = this.formBuilder.group({
      vendor_firstname: ['', Validators.required],
      vendor_contact: ['', Validators.required],
      vendor_lastname: ['', Validators.required],
      vendor_email: ['',Validators.required],
      password1: ['', Validators.required],
      password2: ['', Validators.required],
      vendor_pincode: ['',Validators.required],

      
    }, {
      validator: this.ConfirmedValidator('password1', 'password2')
    });
  }
  get f() { return this.registerVendor.controls; }

  // onSubmit() {

  //   this.submitted = true;
  //   if (this.registerVendor.valid) {
  //     let obj = this.registerVendor.value;
  //     let body = new HttpParams;
  //     body = body.set('vendor_name', obj.vendor_name);
  //     body = body.set('vendor_contact', this.contact_number);

  //     body = body.set('location', obj.location);
  //     body = body.set('adharcard_no', obj.adharcard_no);
  //     body = body.set('pancard_no', obj.pancard_no);
  //     body = body.set('verification_no', obj.verification_no);
  //     body = body.set('GST_no', obj.GST_no);


  //     this.serviceobj.addVenderDetails(body).subscribe((res) => {
  //       if (res.affectedRows == 1) {
  //         // body = body.set('firstname', obj.name);
  //         // body = body.set('contact_number', this.contact_number);
  //         // this.serviceobj.sendmailVendorRegistraion(body).subscribe((res) => {
  //         //   alert(JSON.stringify(res))
  //         // });
  //         alert('Registration Complate');
  //         this.router.navigate(['/vendorRegistration/login']);
  //       } else {
  //         alert('Something Wrong Try Again');
  //       }
  //     }
  //     );
  //   }
  // }
  submit() {
    // alert("yess")
    this.submitted = true;
    if (this.registerVendor.valid) {
      let obj = this.registerVendor.value;
      let body = new HttpParams;
      body = body.set("vendor_username", obj.vendor_firstname + " " + obj.vendor_lastname);
      body = body.set('vendor_firstname', obj.vendor_firstname);
      body = body.set('vendor_contact', this.contact_number1);;

      body = body.set('vendor_lastname', obj.vendor_lastname);
      body = body.set('vendor_email', obj.vendor_email);
      body = body.set('vendor_pincode', obj.vendor_pincode);
    
      body = body.set('password', obj.password1);
      this.serviceobj.addVenderDetails(body).subscribe((res) => {
        console.log(res);
        if ({success: true}) {
          // body = body.set('firstname', obj.name);
          // body = body.set('contact_number', this.contact_number);
          // this.serviceobj.sendmailVendorRegistraion(body).subscribe((res) => {
          // alert(JSON.stringify(res))
          // });
          this.serviceobj.sendmailvendor(body).subscribe(data => {
            // alert(data)
          });
          this.toastrService.success('Registration Success!', 'Registration Complete');
          this.router.navigate(['/account-vendor/login-vendor']);
        } else {
          this.toastrService.error('Something Wrong!', 'Try Again!');
        }
      }
      );
    }

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
