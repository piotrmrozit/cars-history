import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { UserPhoto } from '../shared/user-photo.model';
import { ProfileService } from './profile.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  userPhoto: UserPhoto;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.getProfile()
    .subscribe(
      (user: User) => {
        console.log('user >', user);
        this.user = user;
      }
    )
    this.profileService.getProfilePhoto()
    .subscribe(
      (userPhoto: UserPhoto) => {
        console.log('photo >', userPhoto);
        this.userPhoto = userPhoto;
      }
    )
  }

}
