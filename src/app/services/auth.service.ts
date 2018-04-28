import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  public loggedIn: boolean;

  constructor() { }

  login(): void {
    this.loggedIn = true;
  }

  logOut(): void {
    this.loggedIn = false;
  }
}
