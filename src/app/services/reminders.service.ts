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
}
