import { Component, OnInit } from '@angular/core';
import { Contact } from '../../Models/contact';
import { Reminder } from '../../Models/reminder';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactsService } from '../../services/contacts.service';
import { RemindersService } from '../../services/reminders.service';

@Component({
  selector: 'app-reminder-edit',
  templateUrl: './reminder-edit.component.html',
  styleUrls: ['./reminder-edit.component.css']
})
export class ReminderEditComponent implements OnInit {

  reminder: Reminder;
  userId: string;
  reminderId: string;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private reminderService: RemindersService) {

      this.userId = this.route.snapshot.params['userid'];
      this.reminderId = this.route.snapshot.params['reminderid'];
    }

  ngOnInit() {
  this.reminderService.getReminder(this.userId, this.reminderId)
              .subscribe(r => { this.reminder = r; });
  }

  SaveReminder() {
    this.reminderService.updateReminder(this.userId, this.reminder);
    this.router.navigateByUrl('/reminders');
  }
}
