import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationDialogService } from 'src/app/service/confirmation-dialog.service';
import { PostServiceService } from 'src/app/service/postservice.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  contactSeller: FormGroup;
  submitted = false;
  buttonText: any = "Submit";
  show: boolean;
  

  constructor(
    private router: Router,  private formBuilder: FormBuilder,private serviceobj: PostServiceService,  private httpClient: HttpClient, private toastrService: ToastrService, private confirmationDialogService: ConfirmationDialogService) {
  }

  ngOnInit() {

    this.contactSeller = this.formBuilder.group({
      contact_name: ['', Validators.required],
      contact_email: ['', [Validators.required]],
      contact_subject: ['', Validators.required,],
      contact_message: ['', Validators.required,],

    });
  }
  get f() { return this.contactSeller.controls; }

  //------------------------------Confirmation Dialog ------------------------------------
  public openConfirmationDialog() {
    this.submitted = true;
    if (this.contactSeller.invalid) {
      return;
    }
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to ... ?')
    .then((confirm) => {
      if (confirm) {
        let obj = this.contactSeller.value;
        let body = new HttpParams;
        body = body.set('contact_name', obj.contact_name);
        body = body.set('contact_email', obj.contact_email);;
        body = body.set('contact_subject', obj.contact_subject);
        body = body.set('contact_message', obj.contact_message);
  
      
        this.serviceobj.addContactDetails(body).subscribe((res) => {
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
    })
      
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

//------------------------------onSubmit function------------------------------------------
  onSubmit() {
   
    this.submitted = true;
    if (this.contactSeller.invalid) {
      return;
    }
      let obj = this.contactSeller.value;
      let body = new HttpParams;
      body = body.set('contact_name', obj.contact_name);
      body = body.set('contact_email', obj.contact_email);;
      body = body.set('contact_subject', obj.contact_subject);
      body = body.set('contact_message', obj.contact_message);

    
      this.serviceobj.addContactDetails(body).subscribe((res) => {
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
}
