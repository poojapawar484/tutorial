import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageAccountRoutingModule } from './manage-account-routing.module';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyaccountvendorComponent } from './myaccountvendor/myaccountvendor.component';
import { SharedModule } from '../shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { SellvehicleComponent } from './sellvehicle/sellvehicle.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ScrapdetailssellerComponent } from './scrapdetailsseller/scrapdetailsseller.component';
import { PreviewComponent } from './scrapdetailsseller/preview/preview.component';
import { ThumbComponent } from './scrapdetailsseller/thumb/thumb.component';


@NgModule({
  declarations: [
    MyaccountComponent,
    MyaccountvendorComponent,
    SellvehicleComponent,
    ScrapdetailssellerComponent,
    PreviewComponent,
    ThumbComponent
  ],
  imports: [
    CommonModule,
    ManageAccountRoutingModule,
    ReactiveFormsModule,
    DataTablesModule,
    FormsModule,
    SharedModule,
    NgxSpinnerModule,
    NgxDropzoneModule,
  ]
})
export class ManageAccountModule { }
