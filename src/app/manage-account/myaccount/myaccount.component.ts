import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PostServiceService } from 'src/app/service/postservice.service';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.scss']
})
export class MyaccountComponent {
  username:any;
  contact_number:any;
  email:any;
  car_model:any;
  car_location:any;
  car_running:any;
  updateuser: FormGroup;
  id: any;
  submitted: boolean = false;
  constructor(
    private router: Router,private toastrService: ToastrService, private serviceobj: PostServiceService, private formBuilder: FormBuilder, private httpClient: HttpClient) {
  }
  ngOnInit(): void {
    this.username = sessionStorage.getItem("username");
    this.contact_number = sessionStorage.getItem("contact_number");
    // alert( this.contact_number)
    this.email = sessionStorage.getItem("email");
    this.car_model = sessionStorage.getItem("car_model");
    // alert(this.car_model)
    this.car_location = sessionStorage.getItem("car_location");
    this.car_running = sessionStorage.getItem("car_running");


    this.updateuser = this.formBuilder.group({
      name: ['', Validators.required],
      car_maker: ['', Validators.required],
      car_model: ['', Validators.required],
      car_location: ['', Validators.required],
      car_running: ['', Validators.required],
    


    });
  }
  get f() { return this.updateuser.controls; }
  logout() {
    sessionStorage.clear();
    window.location.reload();
  }
  patchUserValues() {

    
    this.updateuser.patchValue({
      name:  this.username ,
      email:  this.email ,
      car_model:  this.car_model ,
      car_location:  this.car_location ,
      car_running:  this.car_running ,


    });

  }
  updateuserbyId(data: any) {
    this.submitted = true;


    let obj = this.updateuser.value;
    let body = new HttpParams;


    
    this.id = sessionStorage.getItem('id')


    body = body.set("id", this.id);
    body = body.set("username", obj.username);
    body = body.set("contact_number", obj.contact_number);
    body = body.set("car_maker", obj.car_maker);
    body = body.set("car_model", obj.car_model);
    body = body.set("car_location", obj.car_location);
    body = body.set("car_running", obj.car_running);
    
    //  service 
    this.serviceobj.updateuserbyId(body).subscribe((res) => {





    });



    window.location.reload()
    setTimeout(() => {

    }, 100);
    this.toastrService.success("profile updated Succesfully");
    
  }
}
