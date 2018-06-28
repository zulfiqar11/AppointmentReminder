import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from '../Models/user';
import { Observable , BehaviorSubject} from 'rxjs';
import { FirebaseApp, AngularFireModule } from 'angularfire2';
import { AngularFireStorage } from 'angularfire2/storage';


@Injectable()
export class UserService {

  private subject: BehaviorSubject<User> = new BehaviorSubject(null);
  private fbStorage: any;
  private basePath = '/profile';

  constructor(private fs: AngularFireStorage, private db: AngularFireDatabase) {
    this.fbStorage = fs.storage;
  }

  public addProfileImage(user: User, file: File) {
    this.fbStorage.ref('/profile/' + file.name)
        .put(file).then(
          snapshot => {
            const imageUrl: string = snapshot.downloadURL;
            this.db.object('/users/' + user.uid)
                .update({image: imageUrl});
            user.image = imageUrl;
            this.saveUser(user);
          });
  }

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
