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

  returnUrl: string;
  errorMessage: string;
  showError: boolean;
  private user: User;

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  constructor(private userService: UserService,
              private router: Router,
              private route: ActivatedRoute,
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
                            console.log('calling before saveuser ----' + this.user.name);
                            this.userService.saveUser(user);
                            this.router.navigateByUrl(this.returnUrl);
                          }).catch((error) => {
                            this.errorMessage = error.message;
                            this.showError = true;
                          });
  }

  private getUserInfo(uid: string) {
    this.userService.getUser(uid).subscribe(snapshot => {
      this.user = snapshot;
      const uid1: string = this.user.name;
      console.log('calling inside getUserInfo ----' + uid1);
    });
  }

  onReset(resetFormData): void {
    this.authService.resetPassword(resetFormData.value.email).then(() => {
      alert('Reset instruction sent to your mail');
      }).catch((error) => {
        this.errorMessage = error.message;
        this.showError = true;
      });
  }


}
