import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from '../Models/user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  public addUser(user: User): void {
    this.db.object('${USERS_CHILD}/${user.uid}').set(user);
  }

  public getUser(uid: string): Observable<User> {
    console.log('dddddddd' + uid);
    return this.db.object<User>('${USERS_CHILD}/${uid}').valueChanges();
  }
}
