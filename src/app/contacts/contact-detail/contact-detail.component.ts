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

  contactId: number;
  profileId: number;
  contact$;

  constructor(private route: ActivatedRoute, private contactService: ContactsService) {
    this.profileId = 1;
    this.contactId = 4; // +this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.contact$ = this.contactService.getContact(this.profileId , this.contactId);
  }
}
