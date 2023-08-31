import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import DataTables from 'datatables.net';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { PostServiceService } from 'src/app/service/postservice.service';

@Component({
  selector: 'app-myaccountvendor',
  templateUrl: './myaccountvendor.component.html',
  styleUrls: ['./myaccountvendor.component.scss']
})
export class MyaccountvendorComponent {
  vendor_username: any;
  vendor_contact: any;
  vendor_firstname: any;
  vendor_lastname: any;
  vendor_email: any;
  updatevendor: FormGroup;
  submitted: boolean = false;
  vendor_pincode: any;
  enquiry: any = [];

  constructor(
    private router: Router, private toastrService: ToastrService, private serviceobj: PostServiceService, private formBuilder: FormBuilder, private httpClient: HttpClient) {
  }
  ngOnInit(): void {
    this.vendor_username = sessionStorage.getItem("vendor_username");
    this.vendor_contact = sessionStorage.getItem("vendor_contact");

    this.vendor_firstname = sessionStorage.getItem("vendor_firstname");
    this.vendor_lastname = sessionStorage.getItem("vendor_lastname");

    this.vendor_email = sessionStorage.getItem("vendor_email");
    this.vendor_pincode = sessionStorage.getItem("vendor_pincode");


    this.updatevendor = this.formBuilder.group({
      vendor_username: ['', Validators.required],
      vendor_contact: ['', Validators.required],
      vendor_firstname: ['', Validators.required],
      vendor_lastname: ['', Validators.required],
      vendor_email: ['', Validators.required],



    });
    // let body = new HttpParams;
    // body = body.set("vendor_pincode",  this.vendor_pincode);
    this.serviceobj.getapprovedstatus().subscribe(data => {
      this.enquiry = data;
    }
    );
  
  }
  get f() { return this.updatevendor.controls; }
  logout() {
    sessionStorage.clear();
    window.location.reload();
  }

  imgParse(imgarray:any) {
    var img= JSON.parse(imgarray);
    return img[0].image
  }


  patchUserValues() {


    this.updatevendor.patchValue({
      vendor_firstname: this.vendor_firstname,
      vendor_email: this.vendor_email,
      vendor_lastname: this.vendor_lastname,



    });

  }
  updatevendorbyId(data: any) {

  }

  vendordetails(e:any){
    this.router.navigate(['/manage-account/scrapdetailsseller'], {

      queryParams: {
        user:JSON.stringify(e)
      }
    });   
// alert("p"  +id);
  }
}
