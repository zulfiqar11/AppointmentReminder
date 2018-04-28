import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'skelta';
  authoService: AuthService;

  constructor(private router: Router, private authService: AuthService) { this.authoService = this.authoService; }

  logOut() {
    this.authService.logOut();
    this.authoService = this.authService;
    this.router.navigateByUrl('/home');
  }
}
