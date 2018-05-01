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

  id: number;
  contact: Contact;
  constructor(private route: ActivatedRoute, private contactService: ContactsService) {
    this.id = +this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.contact = this.contactService.getContact(this.id);
  }
}
