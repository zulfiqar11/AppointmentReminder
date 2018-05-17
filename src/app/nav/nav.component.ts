import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  authService: AuthService;
  constructor(private router: Router, private authoService: AuthService) {
    this.authService = authoService;
  }

  logOut() {
    this.authService.signout();
    this.router.navigateByUrl('/home');
  }

  ngOnInit() {

  }

}
