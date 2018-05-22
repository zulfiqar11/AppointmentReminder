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

  getContacts(userid: string): Contact[] {
    this.db.list<Contact>('/users/contacts/' + userid).valueChanges()
            .subscribe(contacts => { this.contacts = contacts; });
    return this.contacts;
  }

  getContact(profileId: number, contactId: number) {
    return (this.db.object('/contacts/' + profileId.toString() + '/' + contactId.toString()).valueChanges());
  }
}
