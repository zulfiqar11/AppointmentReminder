import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {

  }

  canActivate(route, state: RouterStateSnapshot): boolean {
      if (this.authService.isAuthenticated()) { return true; }

      this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
      return false;
  }
}
