import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {LoginService} from '../API Services/Login/login.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  constructor(private loginSer: LoginService, private myLocation: Location, private myRouter: Router ) { }
  ngOnInit(): void {
  }
  registerUser(username,password,confirmedPassword){
    if(password == confirmedPassword){
      this.loginSer.RegisterUser(username,password);
    }
    this.myRouter.navigate(["/LoginWorldUniversities"]);
  }
}

