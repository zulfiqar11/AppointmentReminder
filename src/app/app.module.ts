import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ReminderListComponent } from './reminders/reminder-list/reminder-list.component';
import { RemindersService } from './services/reminders.service';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { ContactsService } from './services/contacts.service';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { ReminderDetailComponent } from './reminders/reminder-detail/reminder-detail.component';
import { NavComponent } from './nav/nav.component';
import { AdminComponent } from './admin/admin.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ReminderEditComponent } from './reminders/reminder-edit/reminder-edit.component';
import { ContactEditComponent } from './contacts/contact-edit/contact-edit.component';


const appRoutes: Routes = [
  { path: 'reminders/:id/edit', component: ReminderEditComponent },
  { path: 'reminders/:id', component: ReminderDetailComponent },
  { path: 'reminders', component: ReminderListComponent, canActivate: [AuthGuardService]},
  { path: 'contacts/:id/edit', component: ContactEditComponent },
  { path: 'contacts/:id', component: ContactDetailComponent },
  { path: 'contacts', component: ContactListComponent , canActivate: [AuthGuardService]},
  { path: 'login', component: LoginComponent },
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
    ReminderDetailComponent,
    ContactDetailComponent,
    NavComponent,
    AdminComponent,
    NoAccessComponent,
    ReminderEditComponent,
    ContactEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [RemindersService, AuthGuardService, ContactsService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }


