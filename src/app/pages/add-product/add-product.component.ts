import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http';

import { ProductItem, CreateProductItem } from "../../models/masterModels/ProductItem";
import { Asset } from "../../models/Asset";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private http: Http) { 
    
  }

  ngOnInit() {

  }

  addProduct(title, price, description, type, imageUrl, difficulty, webUrl, notes, customers, founders, detailUrl, kpiList, dataChannelId, financalLevel, companyName, fileUrl1, fileUrl2, note, fundingNeed, valuation, score, evalDate, currency, tags, groupsIds ){
    var productItem = new CreateProductItem();
    
    productItem.product.title = title;
    productItem.product.price = price;
    productItem.product.description = description;
    productItem.product.consumerId = 1;
    productItem.product.type = type;
    productItem.product.imageUrl = imageUrl;
    productItem.product.difficulty = difficulty;
    productItem.product.webUrl = webUrl;
    productItem.product.isActive = true;
    productItem.product.notes = notes;
    productItem.product.customers = customers;
    productItem.product.founders = founders;
    productItem.product.detailUrl = detailUrl;
    productItem.product.kpiList = kpiList;
    productItem.product.dataChannelId = dataChannelId;
    productItem.product.financalLevel = financalLevel;
    productItem.product.companyName = companyName;

    var asset1 = new Asset;
    asset1.fileUrl = fileUrl1;
    asset1.assetType = "pdf";

    var asset2 = new Asset;
    asset2.fileUrl = fileUrl2;
    asset2.assetType = "jpg";

    productItem.assetList.push(asset1);
    productItem.assetList.push(asset2);

    productItem.investmentLog.note = note;
    productItem.investmentLog.fundingNeed = fundingNeed;
    productItem.investmentLog.valuation = valuation;
    productItem.investmentLog.score = score;
    productItem.investmentLog.evalDate = evalDate;
    productItem.investmentLog.currency = currency;

    productItem.tagsGroups.tags = tags;
    productItem.tagsGroups.groupIds = groupsIds;

    console.log(productItem);

    let url = "https://katalog-backend.herokuapp.com/product/create"; 
    this.http.post(url, productItem).subscribe( 
        result => {
        console.log(result);
    },err=>{
      console.log(JSON.stringify(err));
    });
  }
}
