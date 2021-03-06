import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../Models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  authService: AuthService;
  userService: UserService;
  profileImage: any = '/assets/images/person.jpg';

  constructor(private router: Router, private authoService: AuthService, private userService1: UserService) {
    this.authService = authoService;
    this.userService = userService1;
  }

  logOut() {
    this.authService.signout();
    this.router.navigateByUrl('/home');
  }

  ngOnInit() {

  }

  getUserName(){
    return this.userService.getSavedUser().getValue().name;
  }

  getUserImage() {
    return this.userService.getSavedUser().getValue().image;
  }
}
