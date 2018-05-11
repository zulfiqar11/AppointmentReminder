import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';

@Injectable()
export class AuthService {

  validLogin: boolean;

  constructor(private fireAuth: AngularFireAuth) { }

  public signup(email: string, password: string): Promise<any> {
    return this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  public login(email: string, password: string): Promise<any> {
    return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
  }

  public resetPassword(email: string): Promise<any> {
    return this.fireAuth.auth.sendPasswordResetEmail(email);
  }

  logOut() {
    this.validLogin = false;
  }

  isLoggedIn() {
    return this.validLogin;
  }
}
