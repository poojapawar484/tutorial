import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  
  url = "https://master.vehiscrap.com";
  // url = "  http://localhost:3000";

  imageBaseUrl = "https://vehiscrap.com/Documents/";
  isLoading = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  show() {
    this.isLoading.next(true);
  }
  hide() {
    this.isLoading.next(false);
  }

  sendotp(body: any) {
    return this.http.post('https://anudaanjagruti.com/smsApi/send_otp.php', body);
  }

  addSellerDetails(body: any): Observable<any> {
    return this.http.post(this.url + "/addSellerDetails", body);
  }

  addVenderDetails(body: any): Observable<any> {
    return this.http.post(this.url + "/addVenderDetails", body);
  }

  loginSeller(body: any): Observable<any> {
    return this.http.post(this.url + "/loginSeller", body);
  }

  addContactDetails(body: any): Observable<any> {
    return this.http.post(this.url + "/addContactDetails", body);
  }

  addScrapDetails(body: any): Observable<any> {
    return this.http.post(this.url + "/addScrapDetails", body);
  }

  getMakerdetails(): Observable<any> {
    return this.http.get(this.url + "/getMakerdetails");
  }

  getModeldetails(body: any): Observable<any> {
    return this.http.post(this.url + "/getModeldetails", body);
  }

  // uploadImage(body: any): Observable<any> {
  //   return this.http.post(this.url + "/uploadFile.php", body);
  // }

  uploadImage(formData: any): Observable<any> {
    return this.http.post(this.imageBaseUrl + "/uploadFile.php", formData);
  }
  loginVendor(body: any): Observable<any> {
    return this.http.post(this.url + "/loginVendor", body);
  }
  updateuserbyId(body: any) {
    return this.http.post(this.url + "/updateuserbyId", body);
  }
  getservicearea() {
    return this.http.get(this.url + "/getservicearea");
  }
  checkMobile(body: any) {
    return this.http.post(this.url + "/checkMobile", body);
  }
  forgotpassword(body: any) {
    return this.http.post(this.url + "/forgotpassword", body);
  }
  forgotpasswordvendor(body: any) {
    return this.http.post(this.url + "/forgotpasswordvendor", body);
  }
  sendmail(body: any) {
    return this.http.post(this.url + "/sendmail", body);
  }

  sendmailvendor(body: any) {
    return this.http.post(this.url + "/sendmailvendor", body);
  }
  detailsenquiry(body: any) {
    return this.http.post(this.url + "/detailsenquiry", body);
  }

  addScrapDetailsSellers(body: any): Observable<any> {
    return this.http.post(this.url + "/addScrapDetailsSellers", body);
  }
  getapprovedstatus(): Observable<any> {
    return this.http.get(this.url + "/getapprovedstatus");
  }

  deatailsscrapdetailsseller(body: any) {
    return this.http.post(this.url + "/deatailsscrapdetailsseller", body);
  }

}

