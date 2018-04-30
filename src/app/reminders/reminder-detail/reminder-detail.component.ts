import { RemindersService } from './../../services/reminders.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Reminder } from '../../Models/reminder';

@Component({
  selector: 'app-reminder-detail',
  templateUrl: './reminder-detail.component.html',
  styleUrls: ['./reminder-detail.component.css']
})
export class ReminderDetailComponent implements OnInit {

  id: number;
  reminder: Reminder;
  constructor(private route: ActivatedRoute, private reminderService: RemindersService) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.reminder = this.reminderService.getReminder(this.id);
  }

}
