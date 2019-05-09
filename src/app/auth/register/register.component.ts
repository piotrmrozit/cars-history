import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { User } from './../../shared/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  genders = ['mężczyzna', 'kobieta'];
  registerForm: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'firstname': new FormControl(null, Validators.required),
      'lastname': new FormControl(null, Validators.required),
      'username': new FormControl(null, Validators.required),
      'birthday': new FormControl(null, Validators.required),
      'email': new FormControl(null, Validators.required),
      'gender': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required),
      'rePassword': new FormControl(null, Validators.required),
    })
  }

  onSubmit() {
    const user = {
      firstname: this.registerForm.value.firstname, 
      lastname: this.registerForm.value.lastname, 
      gender: this.registerForm.value.gender, 
      username: this.registerForm.value.username,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      birthday: this.registerForm.value.birthday
    }
    this.authService.register(user);
    // this.authService.registerUser(email, password);
  }

}
