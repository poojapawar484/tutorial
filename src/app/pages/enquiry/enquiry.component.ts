import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationDialogService } from 'src/app/service/confirmation-dialog.service';
import { PostServiceService } from 'src/app/service/postservice.service';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.scss']
})
export class EnquiryComponent {
  scrapDetails: FormGroup;
  submitted = false;
  buttonText: any = "Submit";
  show: boolean;
  makerdetails: any = [];
  g: any = [];
  modeldetails: any = [];
  // modelList = [
  //   {
  //     id: 1,
  //     maker: 'Tata Motors',
  //     models: [
  //       { id: 1, model: 'Tata Tiago' },
  //       { id: 2, model: 'Tata Harrier' },
  //       { id: 3, model: 'Tata Safari' },
  //       { id: 4, model: 'Tata Nexon' },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     maker: 'Honda',
  //     models: [
  //       { id: 1, model: 'Honda Amaze' },
  //       { id: 2, model: 'Honda Jazz' },
  //       { id: 3, model: 'Honda WR-V' },
  //       { id: 3, model: 'Honda City 4th Generation' },
  //     ],
  //   },
  // ];
  // makerList = [
  //   {
  //     id: 1,
  //     maker: 'Tata Motors',
  //     models: [
  //       { id: 1, maker: 'Tata Tiago' },
  //       { id: 2, maker: 'Tata Harrier' },
  //       { id: 3, maker: 'Tata Safari' },
  //       { id: 4, maker: 'Tata Nexon' },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     maker: 'Honda',
  //     models: [
  //       { id: 1, maker: 'Honda Amaze' },
  //       { id: 2, maker: 'Honda Jazz' },
  //       { id: 3, maker: 'Honda WR-V' },
  //       { id: 4, maker: 'Honda City 4th Generation' },
  //     ],
  //   },
  // ];
  

  constructor(
    private router: Router,  private formBuilder: FormBuilder,private serviceobj: PostServiceService,  private httpClient: HttpClient, private toastrService: ToastrService, private confirmationDialogService: ConfirmationDialogService) {

  }

  //-------------------------------For Model And Maker DropDown----------------------------------------------------------
  getData(event) {
      console.log(event)
      let body = new HttpParams;
      body = body.set("Maker", event);
      alert(body)
      this.serviceobj.getModeldetails(body).subscribe(data => {
      this.modeldetails=data;
      // alert(JSON.stringify(data));
      // this.modelListGGG = this.modeldetails.Model;
      // alert(this.modeldetails.Model);
      // console.log(this.modelListGGG)
    });
  }

  ngOnInit() {

    this.scrapDetails = this.formBuilder.group({
      Maker: ['', Validators.required],
      Model: ['', Validators.required],
      Year: ['', Validators.required],
      Fullname: ['', [Validators.required]],
      ContactNumber: ['', [Validators.required, Validators.maxLength(10), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      PickupLocation: ['', Validators.required,],
    });

      this.serviceobj.getMakerdetails().subscribe(data => {
      this.makerdetails=data;
      this.g=JSON.stringify(data);
      console.log(this.makerdetails);
    });
  }
  get f() { return this.scrapDetails.controls; }

  //------------------------------Confirmation Dialog ------------------------------------
  public openConfirmationDialog() {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to ... ?')
    .then((confirm) => {
      if (confirm) {
        this.onSubmit();
      }
    })
      
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

//------------------------------onSubmit function------------------------------------------
  onSubmit() {
    alert("Done")
    this.submitted = true;
    if (this.scrapDetails.valid) {
      let obj = this.scrapDetails.value;
      let body = new HttpParams;
      body = body.set('Maker', obj.Maker);
      body = body.set('Model', obj.Model);
      body = body.set('Year', obj.Model);
      body = body.set('Fullname', obj.Fullname);;
      body = body.set('ContactNumber', obj.ContactNumber);
      body = body.set('PickupLocation', obj.PickupLocation);

    
      this.serviceobj.addScrapDetails(body).subscribe((res) => {
        console.log(res);
        if (res.affectedRows == 1) {
          alert("Done")
          
          // body = body.set('firstname', obj.name);
          // body = body.set('contact_number', this.contact_number);
          // this.serviceobj.sendmailVendorRegistraion(body).subscribe((res) => {
          // alert(JSON.stringify(res))
          // });

          this.toastrService.success('Contacted Success!', 'Contacted Complete');
          //  this.router.navigate(['/account/login']);
        } else {
          this.toastrService.error('Something Wrong!', 'Try Again!');
        }
      }
      );
    }
    this.scrapDetails.reset();
  }
}
