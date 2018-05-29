import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http';

import { Consumer } from '../../models/Consumer';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {}

  Signup(email, password, username, jobTitle, bio, profileImageUrl, companyName, fullName){

    var consumer = new Consumer();
    consumer.email = email;
    consumer.password = password;
    consumer.username = username;
    consumer.jobTitle = jobTitle;
    consumer.bio = bio;
    consumer.profileImageUrl = profileImageUrl;
    consumer.companyName = companyName;
    consumer.fullName = fullName;

    let url = "https://katalog-backend.herokuapp.com/consumer/register"; 
    this.http.post(url, consumer).subscribe( 
        result => {
        console.log(result.json());
        alert(JSON.stringify(result.json()));
    },err=>{
      console.log(JSON.stringify(err));
      alert("bir şey oldu! console log kayıtlarını incele!");
    });
  }

}
