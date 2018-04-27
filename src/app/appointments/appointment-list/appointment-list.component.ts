import { Appointment } from './../../Models/appointment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  appointments: Appointment[] = [
    {FirstName: 'Sobia', LastName: 'Syed', Date:  '4/26/2018', Time:  '5:49 PM', Day:  'Thursday', Frequency: 'Weekly'},
    {FirstName: 'Zulfiqar', LastName: 'Syed', Date:  '4/26/2018', Time:  '5:49 PM', Day:  'Thursday', Frequency: 'Daily'},
    {FirstName: 'Lenah', LastName: 'Syed', Date:  '4/21/2018', Time:  '5:49 PM', Day:  'Thursday', Frequency: 'Daily'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
