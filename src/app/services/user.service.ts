import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from '../Models/user';
import { Observable } from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {

  private subject: BehaviorSubject<User> = new BehaviorSubject(null);

  constructor(private db: AngularFireDatabase) { }

  public addUser(user: User): void {
    this.db.object(`/users/` + user.uid).set(user);
    this.saveUser(user);
  }

  public saveUser(user: User): any {
    this.subject.next(user);
  }

  public getSavedUser(): BehaviorSubject<User> {
    return this.subject;
  }

  public getUser(uid: string): Observable<User> {
    return this.db.object<User>(`/users/` + uid).valueChanges();
  }

  updateUser(user: User): void {
    this.db.object<User>(`/users/` + user.uid).update({email: user.email});
    this.db.object<User>(`/users/` + user.uid).update({mobile: user.mobile});
    this.db.object<User>(`/users/` + user.uid).update({name: user.name});
    this.saveUser(user);
  }
}
