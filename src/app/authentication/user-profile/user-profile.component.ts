import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../Models/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  profileImage: any = '../../../assets/images/person_edit.png';

  user: User;

  // @ViewChild(EditDialogComponent) editDialog: EditDialogComponent;

  constructor(private authService: AuthService,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
      this.user = this.userService.getSavedUser().getValue();
      console.log('userprofile -- ngoninit ------- ' + this.user.email);
  }

  onLogout(): void {
      this.authService.signout().then(() => {
          this.navigateToLogin();
      });
  }

  navigateToLogin() {
      this.router.navigateByUrl('/login');
  }

  onNameChange() {

  }

  onEmailChange() {

  }

  onMobileChange() {

  }

  onPasswordChange() {

  }

}
