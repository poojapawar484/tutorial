import { Routes } from '@angular/router';

//Route for content layout without sidebar, navbar and footer for pages like Login, Registration etc...

export const CONTENT_ROUTES: Routes = [

    {
        path: 'account',
        loadChildren: () => import('../../account/account.module').then(m => m.AccountModule)
    },
    {
        path: 'account-vendor',
        loadChildren: () => import('../../account-vendor/account-vendor.module').then(m => m.AccountVendorModule)
    },
   
];