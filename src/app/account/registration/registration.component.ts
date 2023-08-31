import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PostServiceService } from 'src/app/service/postservice.service';
import { ConfirmationDialogService } from '../../service/confirmation-dialog.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  registerSeller: FormGroup;
  submitted = false;
  buttonText: any = "Submit";
  show: boolean = false;
  hide: boolean = false;
  phoneNumber: any;
 
  contact_number:any;



  constructor(
    private router: Router,  private formBuilder: FormBuilder,private serviceobj: PostServiceService,  private httpClient: HttpClient, private toastrService: ToastrService, private confirmationDialogService: ConfirmationDialogService) {
  }

  ngOnInit() {

    this.contact_number = sessionStorage.getItem('contact_number');
    // alert( this.contact_number)

    this.registerSeller = this.formBuilder.group({
      contact_number: [''],
    });

   
    setTimeout(() => {
      this.registerSeller.patchValue({
        contact_number: this.contact_number
      })
    }, 100);
   

    this.registerSeller = this.formBuilder.group({
      firstname: ['', Validators.required],
      contact_number: ['', [Validators.required, Validators.maxLength(10), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      lastname: ['', Validators.required,],
      password1: ['', Validators.required],
      password2: ['', Validators.required],
      email: ['', Validators.required,],

    }, {
      validator: this.ConfirmedValidator('password1', 'password2')
    });
  }
  get f() { return this.registerSeller.controls; }

  //------------------------------Confirmation Dialog ------------------------------------
  public openConfirmationDialog() {
    this.submitted = true;
    if (this.registerSeller.invalid) {
      return;
    }
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to ... ?')
    .then((confirm) => {
      if (confirm) {
        let obj = this.registerSeller.value;
        let body = new HttpParams;
        body = body.set("username", obj.firstname + " " + obj.lastname);
        body = body.set('firstname', obj.firstname);
        body = body.set('contact_number',  this.contact_number);;
        body = body.set('password', obj.password1);
        body = body.set('lastname', obj.lastname);
        body = body.set('email', obj.email);
     
      
        this.serviceobj.addSellerDetails(body).subscribe((res) => {
          console.log(res);
          if (res.affectedRows == 1) {
            // body = body.set('firstname', obj.name);
            // body = body.set('contact_number', this.contact_number);
            // this.serviceobj.sendmailVendorRegistraion(body).subscribe((res) => {
            // alert(JSON.stringify(res))
            // });
            this.serviceobj.sendmail(body).subscribe(data => {
              // alert(data)
            });
            this.toastrService.success('Registration Success!', 'Registration Complete');
             this.router.navigate(['/account/login']);
          } else {
            this.toastrService.error('Something Wrong!', 'Try Again!');
          }
        }
        );
      }
    })
      
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

//------------------------------onSubmit function------------------------------------------
  onSubmit() {
    this.submitted = true;
    if (this.registerSeller.valid) {
      let obj = this.registerSeller.value;
      let body = new HttpParams;
      body = body.set("username", obj.firstname + " " + obj.lastname);
      body = body.set('firstname', obj.firstname);
      body = body.set('contact_number', this.phoneNumber);;
      body = body.set('password', obj.password1);
      body = body.set('lastname', obj.lastname);
      body = body.set('email', obj.email);
   
    
      this.serviceobj.addSellerDetails(body).subscribe((res) => {
        console.log(res);
        if (res.affectedRows == 1) {
          // body = body.set('firstname', obj.name);
          // body = body.set('contact_number', this.contact_number);
          // this.serviceobj.sendmailVendorRegistraion(body).subscribe((res) => {
          // alert(JSON.stringify(res))
          // });

          this.toastrService.success('Registration Success!', 'Registration Complete');
           this.router.navigate(['/account/login']);
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
