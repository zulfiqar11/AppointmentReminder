import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';

@Injectable()
export class AuthService {

  validLogin: boolean
  constructor() { }

  login() {
    //return this.http.post('/api/authenticate', JSON.stringify(credentials));
    this.validLogin = true;
  }

  logOut() {
    this.validLogin = false;
  }

  isLoggedIn(){
    return this.validLogin;
  }
}
