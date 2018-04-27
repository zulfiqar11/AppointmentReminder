import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ReminderListComponent } from './reminders/reminder-list/reminder-list.component';
import { RemindersService } from './services/reminders.service';


const appRoutes: Routes = [
  { path: 'reminders', component: ReminderListComponent },
  { path: 'contacts',      component: ContactListComponent },
  { path: '',
    redirectTo: '/reminders',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ReminderListComponent,
    ContactListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [RemindersService],
  bootstrap: [AppComponent]
})
export class AppModule { }


