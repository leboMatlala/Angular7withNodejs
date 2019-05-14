import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  phoneNo = '';
  password = '';
  confirmpassword = '';
  newPost = 'no content';


  constructor() {
    console.log(this.phoneNo);
  }

  data() {
    if (this.phoneNo !== '' && this.password !== '' && this.confirmpassword != null) {
      if (this.password === this.confirmpassword) {
        this.newPost = this.phoneNo + '' + this.password;
      } else {
        alert('password do not match');
      }

    } else {
      this.newPost = 'values cannot be empty';
    }

  }

  ngOnInit() {

  }

}
