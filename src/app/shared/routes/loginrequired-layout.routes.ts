import { Routes } from '@angular/router';

//Route for content layout with sidebar, navbar and footer.

export const LoginRequired_ROUTES: Routes = [
    {
        path: 'manage-account',
        // loadChildren: () => import('../../manage-account/manage-account-routing.module').then(m => m.ManageAccountRoutingModule)
        loadChildren: () => import('../../manage-account/manage-account.module').then(m => m.ManageAccountModule)
    }
];