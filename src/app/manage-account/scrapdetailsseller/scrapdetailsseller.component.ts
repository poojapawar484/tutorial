import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PostServiceService } from 'src/app/service/postservice.service';

@Component({
  selector: 'app-scrapdetailsseller',
  templateUrl: './scrapdetailsseller.component.html',
  styleUrls: ['./scrapdetailsseller.component.scss']
})
export class ScrapdetailssellerComponent {
id:any;
maker:any;
model:any;
year:any;
seller_name:any;
note:any;
scrapimage:any=[];
scrap:string[]=[];     
details:any=[];
  constructor(private router: Router,private activatedRoute: ActivatedRoute,private serviceobj: PostServiceService) { }
  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe((params: Params) => {

      let obj = JSON.parse(params['user']);

      this.id = obj.id;
      this.maker=obj.maker
      this.model=obj.model
      this.year=obj.year
      this.seller_name=obj.seller_name
      this.note=obj.note
      this.scrapimage=obj.scrapimage

      alert(JSON.parse(this.scrapimage).length)

      let imgObject=JSON.parse(this.scrapimage);
      for(let i =0; i<imgObject.length;i++){
        this.scrap.push(imgObject[i].image);
      }
    

    });


    
    let body = new HttpParams;
    body = body.set("id", this.id);
    this.serviceobj.deatailsscrapdetailsseller(body).subscribe(data => {
      this.details = data;
      
    });
  }
// this.pictures=this.scrapimage;
// alert()
  pictures = [
    'https://images.unsplash.com/photo-1551198297-e490636298ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1542742518-7ad6e6b91bc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2090&q=80',
    'https://images.unsplash.com/photo-1456014673271-90b7fddf2eea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1551025119-77673c1d37cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'

];
 currentPicture = 0;
 
 imgParse(index:any) {
  let o=JSON.parse(this.scrapimage)
  // alert(index)
    return o[index].image
  }
 select(index) {
   this.currentPicture = index;


 

    
 }

 selectArrow() {
   if (this.currentPicture < this.pictures.length - 1) {
     this.currentPicture++;
   }
 }

 selectLeftArrow() {
   if (this.currentPicture > 0) {
     this.currentPicture--;
   }
 }

  }

