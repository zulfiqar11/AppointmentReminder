import { Component, OnInit } from '@angular/core';

import { Reminder } from '../../Models/reminder';
import { RemindersService } from '../../services/reminders.service';

@Component({
  selector: 'app-reminder-list',
  templateUrl: './reminder-list.component.html',
  styleUrls: ['./reminder-list.component.css']
})
export class ReminderListComponent implements OnInit {

  reminders: Reminder[]

  constructor(private remindersService : RemindersService) {  }

  ngOnInit() {
    this.reminders = this.remindersService.getReminders(); 
  }

}
