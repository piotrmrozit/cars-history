import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { UserPhoto } from '../shared/user-photo.model';
import { ProfileService } from './profile.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  userPhoto: UserPhoto;

  constructor(private profileService: ProfileService,
              private router: Router
    ) { }

  ngOnInit() {
    this.profileService.getProfile()
    .subscribe(
      (user: User) => {
        this.user = user;
      }
    )
    this.profileService.getProfilePhoto()
    .subscribe(
      (userPhoto: UserPhoto) => {
        this.userPhoto = userPhoto;
      }
    )
  }

  onEdit() {
    this.router.navigate(['profile-edit']);
  }

}
