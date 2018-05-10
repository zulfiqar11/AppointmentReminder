import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';

@Injectable()
export class AuthService {
  
  constructor(private fireAuth: AngularFireAuth) { }

  public signup(email: string, password: string): Promise<any>{
    return this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  validLogin: boolean
  login() {
    this.validLogin = true;
  }

  logOut() {
    this.validLogin = false;
  }

  isLoggedIn(){
    return this.validLogin;
  }
}
