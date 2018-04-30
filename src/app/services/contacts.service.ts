import { Injectable } from '@angular/core';
import { Contact } from '../Models/contact';

@Injectable()
export class ContactsService {

  constructor() { }

  getContacts(): Array<Contact> {
    return [
      {id: 1, FirstName: 'Sobia', LastName: 'Syed', Phone:  '714-469-1491', Email:  'datagig@gmail.com', TimeZone:  'PST'},
      {id: 2, FirstName: 'Zulfiqar', LastName: 'Syed', Phone:  '714-469-1491', Email:  'datagig@gmail.com', TimeZone:  'PST'},
      {id: 3, FirstName: 'Lenah', LastName: 'Syed', Phone:  '714-469-1491', Email:  'datagig@gmail.com', TimeZone:  'PST'}
    ];
  }
}
