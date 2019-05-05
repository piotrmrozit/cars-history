import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  genders = ['male', 'female'];
  forbiddenUsernames = ['Anna'];
  loginForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'userName': new FormControl(null, [Validators.required, this.forbiddenUsernamesValidator.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
      console.log(this.loginForm);
  }

  forbiddenUsernamesValidator(control: FormControl): {[s: string]: boolean} {
    if(this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'usernameIsForbidden': true};
    }
    return null;
  }

}
