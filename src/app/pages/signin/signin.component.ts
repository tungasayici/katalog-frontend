import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  User = {
    email: "",
    password: ""
  }

  constructor(private http: Http) { }

  ngOnInit() {
  }

  Login(email, password){
    this.User.email = email;
    this.User.password = password;

    console.log(this.User);

    let url = "https://katalog-backend.herokuapp.com/login"; 
    this.http.post(url, this.User).subscribe( 
        result => {
        console.log(result.json());
        alert(JSON.stringify(result.json()));
    },err=>{
      console.log(JSON.stringify(err));
    });
  }

}
