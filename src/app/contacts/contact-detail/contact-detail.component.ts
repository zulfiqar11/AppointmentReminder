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
  defaultImage: any = '/assets/images/person.jpg';

  constructor(private route: ActivatedRoute, private contactService: ContactsService) {
    this.userId = this.route.snapshot.params['userid'];
    this.contactId = this.route.snapshot.params['contactid'];
  }

  ngOnInit() {
    this.contactService.getContact(this.userId , this.contactId).subscribe( c => { this.contact = c; });
  }

  getContactImage(){
    if (this.contact.image.length == 0) {
      return this.defaultImage;
    }
    else {
      return this.contact.image;
    }
  }
}
