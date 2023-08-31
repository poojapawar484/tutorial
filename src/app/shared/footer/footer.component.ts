import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  condition: boolean = false;
  username: any;

  constructor(
    private router: Router) { }

  ngOnInit() {
    this.username = sessionStorage.getItem('username')

    if (sessionStorage.getItem('isLogin')) {
      // alert("ok");
      this.condition = true;
    }
    else {
      this.condition = false;
    }
  }



  logout() {
    sessionStorage.clear();
    this.router.navigate(['/account/login']);
  }
}
