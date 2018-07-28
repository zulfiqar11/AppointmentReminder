import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onReset(resetFormData): void {
    this.authService.resetPassword(resetFormData.value.email).then(() => {
        alert('For reset instructions please check your email =>  ' + resetFormData.value.email + ' . Please do not forget to check spam folder.. just in case');
        this.router.navigateByUrl('/login');
    }).catch((error) => {
        // this.errorMessage = error.message;
        // this.showError = true;
    });
}


}
