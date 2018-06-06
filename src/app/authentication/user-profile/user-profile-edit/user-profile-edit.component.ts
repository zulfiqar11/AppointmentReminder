import { Component, OnInit } from '@angular/core';
import { User } from '../../../Models/user';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile-edit',
  templateUrl: './user-profile-edit.component.html',
  styleUrls: ['./user-profile-edit.component.css']
})
export class UserProfileEditComponent implements OnInit {

  user: User;
  profileImage: any = '../../../../assets/images/person_edit.png';

  constructor(private authService: AuthService,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
      this.user = this.userService.getSavedUser().getValue();
  }

  UpdateProfile()  {
    this.userService.updateUser(this.user);
    this.router.navigateByUrl('/userprofiledetail');
  }

  onPersonEdit(event) {
    const selectedFiles: FileList = event.target.files;
    const file = selectedFiles.item(0);
    this.userService.addProfileImage(this.user, file);
  }
}