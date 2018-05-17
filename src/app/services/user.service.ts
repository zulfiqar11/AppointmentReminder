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

  public updateEmail(user: User, newEmail: string): void {
    this.db.object<User>(`/users/` + user.uid).update({email: newEmail});
    this.saveUser(user);
  }

  public updateMobile(user: User, mobile: string): void {
    this.db.object<User>(`/users/` + user.uid).update({mobile: mobile});
    this.saveUser(user);
  }

  public updateName(user: User, name: string): void {
    this.db.object<User>(`/users/` + user.uid).update({name: name});
    this.saveUser(user);
  }
}
