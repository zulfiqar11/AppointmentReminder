import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';

@Injectable()
export class AuthService {

  result: Promise<any>;

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

  public isAuthenticated(): boolean {
    return this.fireAuth.auth.currentUser ? true : false;
  }

  public signout() {
    return this.fireAuth.auth.signOut();
  }

  public changeEmail(email: string): Promise<any> {
    return this.fireAuth.auth.currentUser.updateEmail(email);
  }

  public changePassword(password: string): Promise<any> {
    return this.fireAuth.auth.currentUser.updatePassword(password);
  }

}
