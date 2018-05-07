import { Injectable } from '@angular/core';
import { Contact } from '../Models/contact';

@Injectable()
export class ContactsService {

  contacts: Array<Contact> = [
    {id: 1, FirstName: 'Elon', LastName: 'Musk', Phone:  '714-469-1491', Email:  'elon@spacex.com', TimeZone:  'Pacific'},
    {id: 2, FirstName: 'Bill', LastName: 'Gates', Phone:  '714-854-1234', Email:  'bill@microsoft.com', TimeZone:  'Mountain'},
    {id: 3, FirstName: 'Steve', LastName: 'Jobs', Phone:  '714-987-5678', Email:  'steve@apple.com', TimeZone:  'Central'},
    {id: 4, FirstName: 'Mark', LastName: 'Zuck', Phone:  '714-654-4123', Email:  'mark@facebook.com', TimeZone:  'Eastern'}
  ];

  constructor() { }

  getContacts(): Array<Contact> {
    return this.contacts;
  }

  getContact(id: number): Contact {

    if (id > 0) {
      return this.contacts.find(c => c.id === id);
    } else {
      const blankContact: Array<Contact> = [
        {id: 0, FirstName: '', LastName: '', Phone:  '', Email:  '', TimeZone:  ''},
      ];
      return blankContact[0];
    }
  }
}
