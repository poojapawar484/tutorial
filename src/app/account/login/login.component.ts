import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PostServiceService } from 'src/app/service/postservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;
  buttonText: any = "Submit";
  show: boolean = false;
  SMSType :any= "firebase";


  constructor(
    private router: Router, private toastrService: ToastrService, private serviceobj: PostServiceService, private formBuilder: FormBuilder, private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      contact_number: ['', Validators.required],
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
    body = body.set("contact_number", obj.contact_number);
    body = body.set("password", obj.password);
    this.serviceobj.loginSeller(body).subscribe(result => {

      if (result.success) {
        this.toastrService.success('Login successful');
        sessionStorage.setItem('isLogin', "true");
        sessionStorage.setItem('userType', "seller");

        sessionStorage.setItem('username', result.data[0].username);
        sessionStorage.setItem('contact_number', result.data[0].contact_number);
        // alert(result.data[0].contact_number);
        sessionStorage.setItem('id', result.data[0].id);
        sessionStorage.setItem('email', result.data[0].email);
        sessionStorage.setItem('car_model', result.data[0].car_model);
        sessionStorage.setItem('car_location', result.data[0].car_location);

        sessionStorage.setItem('car_running', result.data[0].car_running);

        // var name = sessionStorage.getItem('name')
        // alert(name);
        this.router.navigate(['/pages/home']);
      } else {
        this.toastrService.error('Wrong Username Or Password');
      }
    });
  }
  // ========== login Details Submit Function End =========================================

  onClick() {
    this.show = !this.show;
  }
  otp() {
    if (this.SMSType=='jio'){
      this.router.navigate(['/account/otpverification']);
    }
    else if(this.SMSType=='firebase'){
      this.router.navigate(['/account/firebaseotp']);

    }
  }
}
