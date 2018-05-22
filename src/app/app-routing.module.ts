import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "../app/pages/home/home.component";
import { DetailComponent } from "../app/pages/detail/detail.component";
import { AddProductComponent } from "../app/pages//add-product/add-product.component";
import { SearchComponent } from "../app/pages/search/search.component";

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'ProductDetail/:productID', component: DetailComponent },
  { path: 'AddProduct', component: AddProductComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
    declarations: []
})
export class AppRoutingModule { }
