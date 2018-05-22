import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import {IProductItem} from "../../interfaces/ProductItem";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public productItem: IProductItem[];

  constructor(private route: ActivatedRoute, private http: Http) { 
    this.route.params.subscribe(params => {
    console.log(params['productID']);
    /*let headers = new Headers();
    headers.append("Authorization", "Basic " + btoa("admin:admin"));
    let opts = new RequestOptions();
    opts.headers = headers; */
    let url = "https://katalog-backend.herokuapp.com/product/"+params['productID']; 
    this.http.get(url).subscribe( 
        result => {this.productItem = result.json() as IProductItem[];
        console.log(this.productItem);
    },err=>{
      console.log(err);
    });
   });
  }

  ngOnInit() {
    
  }

}
