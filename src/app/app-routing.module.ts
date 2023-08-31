import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Full_ROUTES } from './shared/routes/full-layout.routes';
import { CONTENT_ROUTES } from './shared/routes/content-layout.routes';
import { FullComponent } from './layout/full/full.component';
import { ContentComponent } from './layout/content/content.component';
import { AuthGuard } from './auth.guard';
import { LoginRequired_ROUTES } from './shared/routes/loginrequired-layout.routes';
import { LoginrequiredComponent } from './layout/loginrequired/loginrequired.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages/home',
    pathMatch: 'full',
  },
  { path: '', component: FullComponent, data: { title: 'full Views' }, children: Full_ROUTES },
  { path: '', component: ContentComponent, data: { title: 'content Views' }, children: CONTENT_ROUTES },
  { path: '', component: LoginrequiredComponent, data: { title: 'login required' }, children: LoginRequired_ROUTES, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled", useHash: true })],

  exports: [RouterModule]
})
export class AppRoutingModule { }
