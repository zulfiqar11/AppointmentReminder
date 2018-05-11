import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { User } from '../../Models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  errorMessage = '';
  showError: boolean ;

  constructor(private authService: AuthService,
    private userService: UserService) {
  }

  ngOnInit() {
  }

  onSignup(signupFormData): void {
    this.authService.signup(signupFormData.value.email,
    signupFormData.value.password).then((userInfo) => {
       // Register the new user
       const user: User =
            new User(
                signupFormData.value.email,
                signupFormData.value.name,
                signupFormData.value.mobile,
                userInfo.uid);

        this.userService.addUser(user);

    }).catch((error) => {
       this.showError = true;
       this.errorMessage = error.message;
    });
 }
}
