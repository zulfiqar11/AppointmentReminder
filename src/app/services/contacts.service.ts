import { ProfileService } from './profile.service';
import { Injectable } from '@angular/core';
import { Contact } from '../Models/contact';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { User } from '../Models/user';

@Injectable()
export class ContactsService {

  contacts: Contact[];
  constructor(private db: AngularFireDatabase) {}
  contact: Contact;

  getContacts(userid: string): Contact[] {
    this.db.list<Contact>('/users/contacts/' + userid).valueChanges()
            .subscribe(contacts => { this.contacts = contacts; });
    return this.contacts;
  }

  getContact(userId: string, contactId: string): Contact {
    this.db.object<Contact>('/users/contacts/' + userId + '/' + contactId).valueChanges()
                  .subscribe(contact => { this.contact = contact; });
    return this.contact;
  }
}

// return (this.db.object('/contacts/' + profileId.toString() + '/' + contactId.toString()).valueChanges());
// public getUser(uid: string): Observable<User> {
//   return this.db.object<User>(`/users/` + uid).valueChanges();
// }