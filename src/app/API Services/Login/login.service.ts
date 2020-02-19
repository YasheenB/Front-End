import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Location} from '@angular/common';
import {Router} from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrlRegister: string = "https://localhost:44344/api/registerUser";
  private apiUrlLogin: string = "https://localhost:44344/api/userLogin";
  constructor(private http : HttpClient, private myLocation: Location, private myRouter: Router) { }

  RegisterUser(username, UserPassword){
      this.http.post(this.apiUrlRegister,{
      UserName: username,
      UserPassword: UserPassword,
    }).subscribe();
  }
  loginPassed;
  userLogin(username,passwordForUser){
    this.http.post(this.apiUrlLogin,{
      UserName: username,
      UserPassword: passwordForUser
    }).subscribe((data: any) => {this.loginPassed = data; if(this.loginPassed == "Password for username: " + username + " is incorrect." ||
    this.loginPassed ==  "User with username: " + username + " does not exist."){
      window.alert(this.loginPassed);
    } 
  else {
    this.myRouter.navigate(["/Country"]);
  }} );
  }
}
