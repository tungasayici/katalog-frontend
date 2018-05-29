import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http';

import { ProductItem } from "../../models/masterModels/ProductItem";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public productItem = new Array<ProductItem>();

  constructor(private route: ActivatedRoute, private http: Http) { 
    this.getAllProducts();
  }

  getAllProducts(){
    this.route.params.subscribe(params => {
      console.log(params['productID']);
      /*let headers = new Headers();
      headers.append("Authorization", "Basic " + btoa("admin:admin"));
      let opts = new RequestOptions();
      opts.headers = headers; */
      let url = "https://katalog-backend.herokuapp.com/product/"+params['productID']; 
      this.http.get(url).subscribe( 
          result => {this.productItem = result.json() as Array<ProductItem>;
          console.log(this.productItem);
      },err=>{
        console.log(err);
      });
     });
  }

  ngOnInit() {
    
  }

}
