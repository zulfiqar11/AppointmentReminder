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
  contactId: string;

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

  updateContact(userId: string, contact: Contact) {
    this.db.object<Contact>('/users/contacts/' + userId + '/' + contact.cid).update({firstname: contact.firstname});
    this.db.object<Contact>('/users/contacts/' + userId + '/' + contact.cid).update({lastname: contact.lastname});
    this.db.object<Contact>('/users/contacts/' + userId + '/' + contact.cid).update({email: contact.email});
    this.db.object<Contact>('/users/contacts/' + userId + '/' + contact.cid).update({phone: contact.phone});
    this.db.object<Contact>('/users/contacts/' + userId + '/' + contact.cid).update({timezone: contact.timezone});
  }

  addContact(userId: string, contact: Contact) {
    this.db.list('/users/contacts/' + userId + '/')
              .push(contact)
              .then((item) => {
                  this.db.object<Contact>('/users/contacts/' + userId + '/' + item.key).update({cid: item.key});
              });
  }
}
