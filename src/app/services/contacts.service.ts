import { Injectable } from '@angular/core';
import { Contact } from '../Models/contact';

import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ContactsService {

  constructor(private db: AngularFireDatabase) { }

  getContacts(profileId: number) {
    return this.db.list('/contacts/' + profileId.toString()).valueChanges();
  }

  getContact(profileId: number, contactId: number) {
    return (this.db.object('/contacts/' + profileId.toString() + '/' + contactId.toString()).valueChanges());
  }
}
