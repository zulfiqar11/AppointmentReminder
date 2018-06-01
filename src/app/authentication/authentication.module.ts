import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';


@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ],
  declarations: [],
  providers: [
    AuthService,
    UserService
]
})
export class AuthenticationModule { }
