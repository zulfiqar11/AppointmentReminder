import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from '../Models/user';

@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  public addUser(user: User): void{
    this.db.object('${USERS_CHILD}/${user.uid}').set(user);
  }
}
