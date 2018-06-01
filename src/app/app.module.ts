import { ProfileService } from './services/profile.service';
import { TimezonesService } from './services/timezones.service';
import { environment } from './../environments/environment';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ReminderListComponent } from './reminders/reminder-list/reminder-list.component';
import { RemindersService } from './services/reminders.service';
import { HomeComponent } from './home/home/home.component';
import { ContactsService } from './services/contacts.service';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { ReminderDetailComponent } from './reminders/reminder-detail/reminder-detail.component';
import { NavComponent } from './nav/nav.component';
import { AdminComponent } from './admin/admin.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ReminderEditComponent } from './reminders/reminder-edit/reminder-edit.component';
import { ContactEditComponent } from './contacts/contact-edit/contact-edit.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { LoginComponent } from './authentication/login/login.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { ErrorAlertComponent } from './authentication/error-alert/error-alert.component';
import { UserProfileDetailComponent } from './authentication/user-profile/user-profile-detail/user-profile-detail.component';
import { UserProfileEditComponent } from './authentication/user-profile/user-profile-edit/user-profile-edit.component';
import { ContactAddComponent } from './contacts/contact-add/contact-add.component';
import { ReminderAddComponent } from './reminders/reminder-add/reminder-add.component';
import { ResetPasswordComponent } from './authentication/reset-password/reset-password.component';

const appRoutes: Routes = [
  { path: 'reminders', component: ReminderListComponent, canActivate: [AuthGuardService]},
  { path: 'reminders/:userid/:contactid/add', component: ReminderAddComponent, canActivate: [AuthGuardService]},
  { path: 'reminders/:userid/:reminderid/edit', component: ReminderEditComponent, canActivate: [AuthGuardService]},
  { path: 'contacts/:userid/:contactid/edit', component: ContactEditComponent, canActivate: [AuthGuardService]},
  { path: 'contacts/:userid/add', component: ContactAddComponent, canActivate: [AuthGuardService]},
  { path: 'contacts/:userid/:contactid', component: ContactDetailComponent, canActivate: [AuthGuardService]},
  { path: 'contacts', component: ContactListComponent , canActivate: [AuthGuardService]},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'resetpassword', component: ResetPasswordComponent },
  { path: 'userprofiledetail', component: UserProfileDetailComponent , canActivate: [AuthGuardService]},
  { path: 'userprofileedit', component: UserProfileEditComponent , canActivate: [AuthGuardService]},
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuardService]},
  { path: 'no-access', component: NoAccessComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ReminderListComponent,
    ContactListComponent,
    PageNotFoundComponent,
    HomeComponent,
    LoginComponent,
    ResetPasswordComponent,
    ReminderDetailComponent,
    ContactDetailComponent,
    NavComponent,
    AdminComponent,
    NoAccessComponent,
    ReminderEditComponent,
    ContactEditComponent,
    SignupComponent,
    UserProfileDetailComponent,
    UserProfileEditComponent,
    ErrorAlertComponent,
    ContactAddComponent,
    ReminderAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AuthenticationModule,
    AngularFireAuthModule
  ],
  providers: [
                RemindersService,
                AuthGuardService,
                ContactsService,
                AuthService,
                TimezonesService,
                ProfileService
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }


