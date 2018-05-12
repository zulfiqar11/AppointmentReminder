import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from '../Models/user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  public addUser(user: User): void {
    this.db.object(`/users/` + user.uid).set(user);
  }

  public getUser(uid: string): Observable<User> {
    return this.db.object<User>(`/users/` + uid).valueChanges();
  }
}
