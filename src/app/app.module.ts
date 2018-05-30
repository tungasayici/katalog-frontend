import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FiltersComponent } from './components/filters/filters.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { DetailComponent } from './pages/detail/detail.component';
import { SearchComponent } from './pages/search/search.component';
import { HeadComponent } from './components/head/head.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FiltersComponent,
    AddProductComponent,
    DetailComponent,
    SearchComponent,
    HeadComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
    SlimLoadingBarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
