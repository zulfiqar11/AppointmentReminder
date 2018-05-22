import { ContactsService } from './../../services/contacts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../../Models/contact';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contactId: string;
  userId: string;
  contact: Contact;

  constructor(private route: ActivatedRoute, private contactService: ContactsService) {
    this.userId = this.route.snapshot.params['pid'];
    this.contactId = this.route.snapshot.params['cid'];
  }

  ngOnInit() {
    this.contact = this.contactService.getContact(this.userId , this.contactId);
  }
}
