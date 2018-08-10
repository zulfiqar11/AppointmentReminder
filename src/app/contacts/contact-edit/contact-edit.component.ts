import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { TimezonesService } from './../../services/timezones.service';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';
import { Contact } from '../../Models/contact';
import { Observable } from 'rxjs';
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
  contactImage: any = '../../../assets/images/person_edit.png';

  constructor(private contactService: ContactsService,
                private router: Router,
                private route: ActivatedRoute,
                private timeZoneService: TimezonesService ) {

                  this.userId = this.route.snapshot.params['userid'];
                  this.contactId = this.route.snapshot.params['contactid'];
                }

  ngOnInit() {
    this.timeZones = this.timeZoneService.getTimeZones();
    this.contactService.getContact(this.userId , this.contactId)
                                .subscribe(c => { this.contact = c; });
  }

  SaveContact() {
    this.contactService.updateContact(this.userId, this.contact);
    this.router.navigateByUrl('/contacts');
  }

  onContactEdit(event) {
    const selectedFiles: FileList = event.target.files;
    const file = selectedFiles.item(0);
    this.contactService.addContactImage(this.userId, this.contactId, file);
  }

  onContactRemoveImage(event) {
    this.contactService.removeContactImage(this.userId, this.contact);
  }
}
