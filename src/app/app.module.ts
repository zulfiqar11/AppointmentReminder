import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

const appRoutes: Routes = [
  { path: 'reminders/:id', component: ReminderDetailComponent },
  { path: 'reminders', component: ReminderListComponent },
  { path: 'contacts/:id', component: ContactDetailComponent },
  { path: 'contacts',      component: ContactListComponent },
  { path: 'login', component: LoginComponent },
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
    NavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [RemindersService, ContactsService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }


