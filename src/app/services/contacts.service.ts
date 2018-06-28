import { ProfileService } from './profile.service';
import { Injectable } from '@angular/core';
import { Contact } from '../Models/contact';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { User } from '../Models/user';
import { AngularFireStorage } from 'angularfire2/storage';

@Injectable()
export class ContactsService {

  constructor(private db: AngularFireDatabase, private fs: AngularFireStorage) {
    this.fbStorage = fs.storage;
  }
  contactId: string;
  private fbStorage: any;

  public addContactImage(userId: string, contactId: string, file: File) {
    this.fbStorage.ref('/contact/' + file.name)
        .put(file).then(
          snapshot => {
            const imageUrl: string = snapshot.downloadURL;
            this.db.object('/users/contacts/' + userId + '/' + contactId)
                .update({image: imageUrl});
          });
  }

  getContacts(userid: string): Observable<Contact[]> {
    return this.db.list<Contact>('/users/contacts/' + userid).valueChanges();
  }

  getContact(userId: string, contactId: string): Observable<Contact> {
    return this.db.object<Contact>('/users/contacts/' + userId + '/' + contactId).valueChanges();
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

  removeContact(userId: string, contactId: string) {
    this.db.object<Contact>('/users/contacts/' + userId + '/' + contactId).remove();
  }
}
