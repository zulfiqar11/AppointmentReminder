import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { TimezonesService } from './../../services/timezones.service';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';
import { Contact } from '../../Models/contact';
import { Observable } from 'rxjs/Observable';
import { User } from '../../Models/user';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {

  timeZones: Observable<any[]>;
  contactId: string;
  userId: string;
  contact: Contact;

  constructor(private contactService: ContactsService,
                private router: Router,
                private route: ActivatedRoute,
                private timeZoneService: TimezonesService ) {

                  this.userId = this.route.snapshot.params['userid'];
                  this.contactId = this.route.snapshot.params['contactid'];
                }

  ngOnInit() {
    this.timeZones = this.timeZoneService.getTimeZones();
    this.contact = this.contactService.getContact(this.userId , this.contactId);
  }

  SaveContact() {
    this.contactService.updateContact(this.userId, this.contact);
    this.router.navigateByUrl('/contacts');
  }

}
