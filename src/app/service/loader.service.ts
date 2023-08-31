import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { PostServiceService } from './postservice.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class Loader implements HttpInterceptor {

  constructor(private spinner: NgxSpinnerService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
     this.spinner.show();
     return next.handle(request).pipe(
           finalize(() => 
           setTimeout(() => {
           this.spinner.hide()
            
           }, 5000)
           ),
     );
  }
}

