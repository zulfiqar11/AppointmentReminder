import { Component, OnInit } from '@angular/core';

import { Reminder } from '../../Models/reminder';
import { RemindersService } from '../../services/reminders.service';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { User } from '../../Models/user';

@Component({
  selector: 'app-reminder-list',
  templateUrl: './reminder-list.component.html',
  styleUrls: ['./reminder-list.component.css']
})
export class ReminderListComponent implements OnInit {

  user: User;
  reminders$: Observable<Reminder[]>;

  constructor(private userService: UserService, private router: Router, private remindersService: RemindersService) {  }

  ngOnInit() {
    this.user = this.userService.getSavedUser().getValue();
    this.reminders$ = this.remindersService.getReminders(this.user.uid);
  }

  DeleteReminder(reminderid: string) {

  }

}
