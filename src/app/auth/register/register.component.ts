import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

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
      // 'firstName': new FormControl(null, Validators.required),
      // 'lastName': new FormControl(null, Validators.required),
      // 'userName': new FormControl(null, Validators.required),
      'email': new FormControl(null, Validators.required),
      // 'gender': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required),
      // 'rePassword': new FormControl(null, Validators.required),
    })
  }

  onSubmit() {
    const email = this.registerForm.value.email;
    const password = this.registerForm.value.password;
    this.authService.registerUser(email, password);
  }

}