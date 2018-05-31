import { ContactsService } from './../../services/contacts.service';
import { RemindersService } from './../../services/reminders.service';
import { Component, OnInit } from '@angular/core';
import { Reminder } from '../../Models/reminder';
import { Router, ActivatedRoute } from '@angular/router';
import { Contact } from '../../Models/contact';

@Component({
  selector: 'app-reminder-add',
  templateUrl: './reminder-add.component.html',
  styleUrls: ['./reminder-add.component.css']
})
export class ReminderAddComponent implements OnInit {

  userId: string;
  contactId: string;
  reminder: Reminder;
  contact: Contact;
  contact1: Contact;

  constructor(private router: Router,
                private route: ActivatedRoute,
                private contactService: ContactsService,
                private reminderService: RemindersService) {

                  this.userId = this.route.snapshot.params['userid'];
                  this.contactId = this.route.snapshot.params['contactid'];
                  this.reminder = new Reminder(this.contactId, '', '', '', '', '');
                }

  ngOnInit() {
    this.contactService.getContact(this.userId, this.contactId)
                        .subscribe(c => { this.contact = c; });
  }

  SaveReminder() {
    this.reminder.contfirstname = this.contact.firstname;
    this.reminder.contlastname = this.contact.lastname;
    this.reminder.contmobile = this.contact.phone;
    this.reminderService.addReminder(this.userId, this.reminder);
    this.router.navigateByUrl('/reminders');
  }

}
