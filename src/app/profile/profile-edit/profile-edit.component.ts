import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';
import { User } from 'src/app/shared/user.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  genders = ['mężczyzna', 'kobieta'];
  editProfileForm: FormGroup;
  profile: User;

  constructor(private router: Router, 
              private profileService: ProfileService,
              private datePipe: DatePipe) { }

  ngOnInit() {
    this.profileService.getProfile()
      .subscribe((profile: User) => {
        this.profile = profile;
        this.setValues();
      });

    this.editProfileForm = new FormGroup({
      'firstname': new FormControl(null, Validators.required),
      'lastname': new FormControl(null, Validators.required),
      'username': new FormControl(null, Validators.required),
      'birthday': new FormControl(null, Validators.required),
      'email': new FormControl({value: null, disabled: true}, Validators.required),
      'gender': new FormControl(null, Validators.required),
    });

  }

  setValues() {
    this.editProfileForm.setValue({
      firstname: this.profile.firstname,
      lastname: this.profile.lastname,
      username: this.profile.username,
      birthday: this.datePipe.transform(this.profile.birthday, 'yyyy-MM-dd'),
      email: this.profile.email,
      gender: this.profile.gender
    })
  }

  onSubmit() {
    const newProfileData = {
      firstname: this.editProfileForm.value.firstname, 
      lastname: this.editProfileForm.value.lastname, 
      gender: this.editProfileForm.value.gender, 
      username: this.editProfileForm.value.username,
      email: this.editProfileForm.value.email,
      birthday: this.editProfileForm.value.birthday
    }
    this.profileService.saveProfile(newProfileData);
  }

  onCancel() {
    this.router.navigate(['profile']);
  }

}
