import { Injectable } from '@angular/core';
import { Contact } from '../Models/contact';

@Injectable()
export class ContactsService {

  constructor() { }

  getContacts() : Array<Contact> {
    return [
      {FirstName: 'Sobia', LastName: 'Syed', Phone:  '714-469-1491', Email:  'datagig@gmail.com', TimeZone:  'PST'},
      {FirstName: 'Zulfiqar', LastName: 'Syed', Phone:  '714-469-1491', Email:  'datagig@gmail.com', TimeZone:  'PST'},
      {FirstName: 'Lenah', LastName: 'Syed', Phone:  '714-469-1491', Email:  'datagig@gmail.com', TimeZone:  'PST'}
    ];
  };
}
