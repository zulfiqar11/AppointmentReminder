import { TimezonesService } from './../../services/timezones.service';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../../Models/contact';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {

  pageTitle = 'Contact Add';
//  contact: Contact;
  debugMsg: string;
  timeZones: Observable<any[]>;
  contactId: number;
  profileId: number;
  contact$;


  // C:\projects\learn\angular\AppointmentReminder>npm install --save firebase angularfire2

  constructor(private contactService: ContactsService,
                private route: ActivatedRoute,
                private timeZoneService: TimezonesService ) { 

                  this.profileId = +this.route.snapshot.params['pid'];
                  this.contactId = +this.route.snapshot.params['cid'];

                }

  ngOnInit() {
    if (this.contactId > 0) {this.pageTitle = 'Contact Edit'; }
    this.timeZones = this.timeZoneService.getTimeZones();
    this.contact$ = this.contactService.getContact(this.profileId , this.contactId);
    // const id = +this.route.snapshot.params['id'];
    // this.contact = this.contactService.getContact(id);
  
    

    /*
    this.timeZones.forEach(item => {console.log(item); }); //looks like array
    this.debugMsg = JSON.stringify(this.timeZones) + " " + this.contact.TimeZone;
    this.timeZones = this.timeZoneService.getTimeZones().subscribe(timeZones => this.timeZones = timeZones);
    */
  }

  SaveContact() {
    this.debugMsg = JSON.stringify(this.contact$);
  }

}
