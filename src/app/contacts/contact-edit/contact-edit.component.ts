import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../../Models/contact';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {

  pageTitle: string = "Contact Edit";
  contact: Contact;

  constructor(private contactService: ContactsService,
                private route: ActivatedRoute ) { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    if (id > 0) {
      this.pageTitle = "Contact Edit";
      this.contact = this.contactService.getContact(id);
    }
    else{
      this.pageTitle = "Contact Add";
    }
  }

}
