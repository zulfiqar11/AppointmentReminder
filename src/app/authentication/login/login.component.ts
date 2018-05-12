import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../Models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  errorMessage: string;
  showError: boolean;
  private user: User;

  ngOnInit(): void {  }

  constructor(private userService: UserService,
              private router: Router,
              private authService: AuthService,
              private angularFireAuth: AngularFireAuth) {

    this.angularFireAuth.auth.onAuthStateChanged(user => {
                                                    if (user) {
                                                      this.getUserInfo(user.uid);
                                                    }
    });
  }

  onLogin(loginFormData): void {
    this.authService.login(loginFormData.value.email, loginFormData.value.password).then((user) => {
                            // Login user
                            const uid: string = user.uid;
                            this.getUserInfo(uid);
                          }).catch((error) => {
                            this.errorMessage = error.message;
                            this.showError = true;
                          });
  }

  private getUserInfo(uid: string) {
    this.userService.getUser(uid).subscribe(snapshot => {
      this.user = snapshot;
    });
  }


}
