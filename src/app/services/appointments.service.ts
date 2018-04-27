import { Injectable } from '@angular/core';
import { Appointment } from '../Models/appointment';

@Injectable()
export class AppointmentsService {

  constructor() { }

  getAppointments() : Array<Appointment> {
    return [
      {FirstName: 'Sobia', LastName: 'Syed', Date:  '4/26/2018', Time:  '5:49 PM', Day:  'Thursday', Frequency: 'Weekly'},
      {FirstName: 'Zulfiqar', LastName: 'Syed', Date:  '4/26/2018', Time:  '5:49 PM', Day:  'Thursday', Frequency: 'Daily'},
      {FirstName: 'Lenah', LastName: 'Syed', Date:  '4/21/2018', Time:  '5:49 PM', Day:  'Thursday', Frequency: 'Daily'}
    ];
  };
}
