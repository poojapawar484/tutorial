import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { MyaccountvendorComponent } from './myaccountvendor/myaccountvendor.component';
import { SellvehicleComponent } from './sellvehicle/sellvehicle.component';
import { ScrapdetailssellerComponent } from './scrapdetailsseller/scrapdetailsseller.component';

const routes: Routes = [

  {
    path: '',
      
    children: [
      {
        path: 'myaccount',
        component:MyaccountComponent,
        data: {
          title: ''
        }
      },
     
      {
        path: 'myaccountvendor',
        component:MyaccountvendorComponent,
        data: {
          title: ''
        }
      },
      {
        path: 'sellvehicle',
        component:SellvehicleComponent,
        data: {
          title: ''
        }
      },
      {
        path: 'scrapdetailsseller',
        component:ScrapdetailssellerComponent,
        data: {
          title: ''
        }
      },

    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageAccountRoutingModule { }
