import { Injectable } from '@angular/core';
import { Contact } from '../Models/contact';

import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ContactsService {

  // contacts: Array<Contact> = [
  //   {id: 1, FirstName: 'Elon', LastName: 'Musk', Phone:  '714-469-1491', Email:  'elon@spacex.com', TimeZone:  'Pacific'},
  //   {id: 2, FirstName: 'Bill', LastName: 'Gates', Phone:  '714-854-1234', Email:  'bill@microsoft.com', TimeZone:  'Mountain'},
  //   {id: 3, FirstName: 'Steve', LastName: 'Jobs', Phone:  '714-987-5678', Email:  'steve@apple.com', TimeZone:  'Central'},
  //   {id: 4, FirstName: 'Mark', LastName: 'Zuck', Phone:  '714-654-4123', Email:  'mark@facebook.com', TimeZone:  'Eastern'}
  // ];

  conatact;

  constructor(private db: AngularFireDatabase) { }

  getContacts(profileId: number) {
    return this.db.list('/contacts/' + profileId.toString()).valueChanges();
  }

  getContact(profileId: number, contactId: number) {
    return (this.db.object('/contacts/' + profileId.toString() + '/' + contactId.toString()).valueChanges());
  }


  // getContacts(): Array<Contact> {
  //   return this.contacts;
  // }

    // console.log('/contacts/' + profileId.toString() + '/' + contactId.toString());
    // .list('/contacts/' + profileId.toString() + '/' + contactId.toString()).query.toJSON);
    // return null; // this.db.list('/contacts/' + profileId.toString() + '/' + contactId.toString()).valueChanges().first;



    // if (id > 0) {
    //   return this.contacts.find(c => c.id === id);
    // } else {
    //   const blankContact: Array<Contact> = [
    //     {id: 0, FirstName: '', LastName: '', Phone:  '', Email:  '', TimeZone:  ''},
    //   ];
    //   return blankContact[0];
    // }

  // getContact(id: number): Contact {

  //   if (id > 0) {
  //     return this.contacts.find(c => c.id === id);
  //   } else {
  //     const blankContact: Array<Contact> = [
  //       {id: 0, FirstName: '', LastName: '', Phone:  '', Email:  '', TimeZone:  ''},
  //     ];
  //     return blankContact[0];
  //   }
  // }
}
