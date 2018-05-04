import { Injectable, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class TimezonesService {

  constructor(private db: AngularFireDatabase) { }

  getTimeZones() {
    return this.db.list('/TimeZone').valueChanges();
  }

}
