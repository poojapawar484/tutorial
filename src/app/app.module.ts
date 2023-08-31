import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { FullComponent } from './layout/full/full.component';
import { ContentComponent } from './layout/content/content.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ToastrModule } from 'ngx-toastr';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { NgxSpinnerModule } from 'ngx-spinner';
import { Loader } from './service/loader.service';
// Firebase services + enviorment module
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// import { environment } from 'src/environments/environment.prod';


import firebase from 'firebase';
import { environment } from 'src/environments/environment.prod';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { LoginrequiredComponent } from './layout/loginrequired/loginrequired.component';
import { ManageAccountModule } from './manage-account/manage-account.module';

firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    ContentComponent,
    ConfirmationDialogComponent,
    LoginrequiredComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    ToastrModule.forRoot(),
    NgxDropzoneModule,
    NgxSpinnerModule,
    ManageAccountModule
  ],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: Loader, multi: true },
    AuthService, AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
