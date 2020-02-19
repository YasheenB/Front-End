import { Component, OnInit } from '@angular/core';
import {LoginService} from '../API Services/Login/login.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  constructor(private loginSer: LoginService) { }
  ngOnInit(): void {
  }
  Login(username,password){
 
    this.loginSer.userLogin(username,password);
  }
}


