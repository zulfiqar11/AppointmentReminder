import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/user';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { ContactsService } from '../../services/contacts.service';
import { Contact } from '../../Models/contact';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts$: Observable<Contact[]>;
  user: User;

  constructor(private userService: UserService, private router: Router,
              private contactsService: ContactsService) {
  }

  ngOnInit() {
    this.user = this.userService.getSavedUser().getValue();
    this.contacts$ = this.contactsService.getContacts(this.user.uid);
  }

  DeleteContact(contactId: string) {
    this.contactsService.removeContact(this.user.uid, contactId);
    this.router.navigateByUrl('/contacts');
  }
}
