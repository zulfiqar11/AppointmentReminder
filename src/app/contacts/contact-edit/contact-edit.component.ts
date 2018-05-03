import { FormsModule } from '@angular/forms';
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

  pageTitle = 'Contact Add';
  contact: Contact;
  debugMsg: string; 
  timeZones= [
    {id: 0, name: 'Select..'},
    {id: 1, name: 'Pacific'},
    {id: 2, name: 'Central'},
    {id: 3, name: 'Mountain'},
    {id: 4, name: 'Eastern'}
  ];

  constructor(private contactService: ContactsService,
                private route: ActivatedRoute ) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.contact = this.contactService.getContact(id);
    if (id > 0) this.pageTitle = 'Contact Edit';
  }

  SaveContact() {
    this.debugMsg= JSON.stringify(this.contact);
  }

}
