import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import {IProductItem} from "../../interfaces/ProductItem";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public productItem: IProductItem[];

  constructor(private http: Http) { 
    /*let headers = new Headers();
    headers.append("Authorization", "Basic " + btoa("admin:admin"));
    let opts = new RequestOptions();
    opts.headers = headers; */
    let url = "https://katalog-backend.herokuapp.com/product/all?isActive=true"; 
    this.http.get(url).subscribe( 
        result => {this.productItem = result.json() as IProductItem[];
        console.log(this.productItem);
    },err=>{
      console.log(err);
    });
  }

  ngOnInit() {
  }

}
