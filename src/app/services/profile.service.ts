import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ProfileService {

  constructor(private db: AngularFireDatabase) { }

  getProfile() {
    return (this.db.object('/profiles/1').valueChanges());
  }

}
