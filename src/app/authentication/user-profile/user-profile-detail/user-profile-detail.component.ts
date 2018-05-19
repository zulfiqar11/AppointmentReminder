import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { User } from '../../../Models/user';

@Component({
  selector: 'app-user-profile-detail',
  templateUrl: './user-profile-detail.component.html',
  styleUrls: ['./user-profile-detail.component.css']
})
export class UserProfileDetailComponent implements OnInit {

  profileImage: any = '../../../assets/images/person_edit.png';

  user: User;

  constructor(private authService: AuthService,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
      this.user = this.userService.getSavedUser().getValue();
  }

  onLogout(): void {
      this.authService.signout().then(() => {
          this.navigateToLogin();
      });
  }

  navigateToLogin() {
      this.router.navigateByUrl('/login');
  }

}
