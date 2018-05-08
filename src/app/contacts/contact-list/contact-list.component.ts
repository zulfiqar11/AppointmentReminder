import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';
import { Contact } from '../../Models/contact';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Observable<any[]>;
  profileId: number;

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.profileId = 1;
    this.contacts = this.contactsService.getContacts(this.profileId);
  }

}
