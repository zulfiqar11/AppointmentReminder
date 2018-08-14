import { Injectable } from '@angular/core';
import { Reminder } from '../Models/Reminder';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '../../../node_modules/angularfire2/storage';

@Injectable()
export class RemindersService {

  private fbStorage: any;

  constructor(private db: AngularFireDatabase, private fs: AngularFireStorage) {
    this.fbStorage = fs.storage;
  }

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

  removeReminderImage(userId: string, reminder: Reminder) {
    this.db.object<Reminder>('/users/reminders/' + userId + '/' + reminder.rid).update({image: ''});
  }

  public addReminderImage(userId: string, reminderId: string, file: File) {
    this.fbStorage.ref('/users/reminders/' + file.name)
        .put(file).then(
          snapshot => {
            const imageUrl: string = snapshot.downloadURL;
            this.db.object('/users/reminders/' + userId + '/' + reminderId)
                .update({image: imageUrl});
          });
  }
}
