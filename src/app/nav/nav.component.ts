import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  authoService: AuthService;

  constructor(private router: Router, private authService: AuthService) { this.authoService = this.authoService; }

  logOut() {
    this.authService.logOut();
    this.authoService = this.authService;
    this.router.navigateByUrl('/home');
  }

  ngOnInit(){

  }

}
