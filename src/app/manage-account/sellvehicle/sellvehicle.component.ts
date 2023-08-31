import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { BehaviourserviceService } from 'src/app/service/behaviourservice.service';
import { ConfirmationDialogService } from 'src/app/service/confirmation-dialog.service';
import { PostServiceService } from 'src/app/service/postservice.service';

@Component({
  selector: 'app-sellvehicle',
  templateUrl: './sellvehicle.component.html',
  styleUrls: ['./sellvehicle.component.scss']
})
export class SellvehicleComponent {
  public selectedYear = null;
  urlpath: any = [];
  scrapDetailsseller: FormGroup;
  submitted = false;
  buttonText: any = "Submit";
  show: boolean;
  makerdetails: any = [];
  g: any = [];
  modeldetails: any = [];
  file: File[] = [];
  image: any;
  fileArray: any = [];
  details: any = [];
  year: any = [];
  Date: string;
  loadermessage:string;
  seller_id:any;
  constructor(
    private router: Router, private formBuilder: FormBuilder, private serviceobj: PostServiceService, private httpClient: HttpClient, private toastrService: ToastrService, private confirmationDialogService: ConfirmationDialogService,private behaviourSubject: BehaviourserviceService,private spinner: NgxSpinnerService) {
  }
  getData(event) {
    // alert("event" + event)
    let body = new HttpParams;
    body = body.set("Maker", event);
    this.serviceobj.getModeldetails(body).subscribe(data => {
      this.modeldetails = data;
    });
  }
  ngOnInit() {


    this.seller_id = sessionStorage.getItem('id');

    // this.behaviourSubject.message.next("Loading..")
    this.behaviourSubject.message.subscribe(params => {
      this.loadermessage=params;
  //  alert(params)
    });
    this.scrapDetailsseller = this.formBuilder.group({
      Fullname: ['', [Validators.required]],
      note: ['', [Validators.required]],
      Year: [''],
      ContactNumber: ['', [Validators.required, Validators.maxLength(10), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      Maker: [''],
      Model: [''],
      PickupLocation: [''],
    });

    this.serviceobj.getMakerdetails().subscribe(data => {
    this.behaviourSubject.message.next(" please wait..")

      this.makerdetails = data;
    });
    this.getSelectedYear();

    this.serviceobj.getservicearea().subscribe(data => {
      this.details = data;
    });

    for (let i = 1990; i <= 2023; i++) {
      this.year.push(i);
    }
    const date = new Date();
    this.Date = (date.toLocaleString('en-GB'));
  
  
  }

  public openConfirmationDialog() {
    this.submitted = true;
    if (this.scrapDetailsseller.invalid) {
      return;
    }
    this.behaviourSubject.message.next("Submit details please wait..")

    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to ... ?')
      .then((confirm) => {
        if (confirm) {
          let obj = this.scrapDetailsseller.value;
          let body = new HttpParams;
          body = body.set('seller_name', obj.Fullname);
          body = body.set('year', obj.Year);
          body = body.set('contact_number', obj.ContactNumber);
          body = body.set('maker', obj.Maker);
          body = body.set('model', obj.Model);
          body = body.set('pickuplocation', obj.PickupLocation);
          body = body.set('scrapimage', JSON.stringify(this.urlpath));
          body = body.set('note', obj.note);
          body = body.set('seller_id',this.seller_id);

          this.serviceobj.addScrapDetailsSellers(body).subscribe(result => {
            if (result.affectedRows == 1) {
              this.toastrService.success('Contacted Success!', 'Contacted Complete');
            } else {
              this.toastrService.error('Something Wrong!', 'Try Again!');
            }
          });
         
        }
      })

      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  onFileChange(event: any) {
    this.file.push(...event.addedFiles);
    const formData = new FormData();
    this.behaviourSubject.message.next("uploading images please wait..")
    formData.append("file", this.file[this.file.length - 1]);
    this.serviceobj.uploadImage(formData)
      .subscribe(res => {
        console.log(res);
        this.urlpath.push({ "image":  this.serviceobj.imageBaseUrl + res.path })
        // alert('Uploaded Successfully.' + res.path);
    // this.behaviourSubject.message.next("uploading images please wait..")

      })
  }

  onSelect(event) {
    console.log(event);
    this.file.push(...event.addedFiles);
  }
  get f() { return this.scrapDetailsseller.controls; }

  scroll(el: any) {
    const element = document.getElementById(el);
    element.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
  }

  onRemove(event) {
    console.log(event);
    this.urlpath.splice(this.file.indexOf(event), 1);
    this.file.splice(this.file.indexOf(event), 1);

  }

  getSelectedYear() {
    const curDate = new Date();
    const curYear = curDate.getFullYear();
    const curMonth = curDate.getMonth();
    // this.selectedYear = curMonth === 0 ? curYear - 1 + "年" : curYear + "年";
  }
 

}
