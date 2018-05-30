import { ContactsService } from './../../services/contacts.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { TimezonesService } from '../../services/timezones.service';
import { Contact } from '../../Models/contact';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent implements OnInit {

  timeZones: Observable<any[]>;
  userId: string;
  contact: Contact;

  constructor(private router: Router, private route: ActivatedRoute, private timeZoneService: TimezonesService, 
                private contactService: ContactsService ) {

                  this.userId = this.route.snapshot.params['userid'];
                }

  ngOnInit() {
    this.timeZones = this.timeZoneService.getTimeZones();
    this.contact = new Contact('', '', '', '', '', '');
  }

  SaveContact() {
    this.contactService.addContact(this.userId, this.contact);
    this.router.navigateByUrl('/contacts');
  }
}
