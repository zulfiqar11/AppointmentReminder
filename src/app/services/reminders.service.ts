import { Injectable } from '@angular/core';
import { Reminder } from '../Models/Reminder';

@Injectable()
export class RemindersService {

  constructor() { }

  getReminders(): Array<Reminder> {
    return [
      {id: 1, FirstName: 'Sobia', LastName: 'Syed', Date:  '4/26/2018', Time:  '5:49 PM', Day:  'Thursday', Frequency: 'Weekly'},
      {id: 2, FirstName: 'Zulfiqar', LastName: 'Syed', Date:  '4/26/2018', Time:  '5:49 PM', Day:  'Thursday', Frequency: 'Daily'},
      {id: 3, FirstName: 'Lenah', LastName: 'Syed', Date:  '4/21/2018', Time:  '5:49 PM', Day:  'Thursday', Frequency: 'Daily'}
    ];
  }

  getReminder(id: number): Reminder {
    return {id: 1, FirstName: 'Sobia', LastName: 'Syed', Date:  '4/26/2018', Time:  '5:49 PM', Day:  'Thursday', Frequency: 'Weekly'};
  }

}
