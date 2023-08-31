import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  condition: boolean = false;
  username: any;
  isSeller: boolean = false;
  isVendor: boolean = false;
  vendor_username:any;
  isCollapsed:boolean =true;
  isSticky = false;
  constructor(
    private router: Router) { }

  ngOnInit() {
    this.username = sessionStorage.getItem('username')
    this.vendor_username = sessionStorage.getItem('vendor_username')

    if (sessionStorage.getItem('isLogin')) {
      // alert("ok");
      this.condition = true;
      if (sessionStorage.getItem('userType')=="seller") {
this.isSeller=true;
this.isVendor=false;
      }
      else if (sessionStorage.getItem('userType')=="vendor"){
        this.isSeller=false;
        this.isVendor=true;
        
      }

      }
    else {
      this.condition = false;
    }
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/account/login']);
  }

  // -----------------------------onScroll-----------------------------------------------
scroll(el: any) {
  const element = document.getElementById(el);
  element.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
}

// -----------------------------whatsapp-------------------------------------------------
generateWhatsAppLink(phoneNumber: string, message: string): string {
  const baseLink = 'https://wa.me/';
  const encodedPhoneNumber = encodeURIComponent(phoneNumber);
  const encodedMessage = encodeURIComponent(message);
  return `${baseLink}${encodedPhoneNumber}?text=${encodedMessage}`;
}

isActiveRoute(currentRoute:any){
  // alert(currentRoute);
  var sss = this.router.url;
  // alert(sss);
  if (currentRoute == sss){
    return true;
  }else{
    return false;
  }
}

closetabNavResponsive() {
  setTimeout(() => {
    this.isCollapsed = !this.isCollapsed;
    // this.box.classList.add('collapse show');

  }, 100);
}

// @HostListener("window:scroll")
// scrollEvent() {
//     window.pageYOffset >= 80 ? (this.isScrolled = true) : (this.isScrolled = false);
// }

scrolltop() {
  setTimeout(() => {
    this.isCollapsed = !this.isCollapsed;
  

  }, 100);
}
}