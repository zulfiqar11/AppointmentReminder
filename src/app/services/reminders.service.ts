import { Injectable } from '@angular/core';
import { Reminder } from '../Models/Reminder';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RemindersService {

  constructor(private db: AngularFireDatabase) {}

  getReminders(userid: string): Observable<Reminder[]> {
    return this.db.list<Reminder>('/users/reminders/' + userid).valueChanges();
  }

  addReminder(userId: string, reminder: Reminder) {
    this.db.list('/users/reminders/' + userId + '/')
              .push(reminder)
              .then((item) => {
                  this.db.object<Reminder>('/users/reminders/' + userId + '/' + item.key).update({rid: item.key});
              });
  }

  removeReminder(userId: string, reminderId: string) {
    this.db.object<Reminder>('/users/reminders/' + userId + '/' + reminderId).remove();
  }

  getReminder(userId: string, reminderId: string): Observable<Reminder> {
    return this.db.object<Reminder>('/users/reminders/' + userId + '/' + reminderId).valueChanges();
  }

  updateReminder(userId: string, reminder: Reminder) {
    this.db.object<Reminder>('/users/reminders/' + userId + '/' + reminder.rid).update({time: reminder.time});
  }
}
