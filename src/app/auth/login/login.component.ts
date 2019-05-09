import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  genders = ['male', 'female'];
  forbiddenUsernames = ['Anna'];
  loginForm: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, this.forbiddenUsernamesValidator.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    const username = this.loginForm.value.username;

    this.authService.login(username, email, password)
    // this.authService.loginUser(email, password);
  }

  forbiddenUsernamesValidator(control: FormControl): {[s: string]: boolean} {
    if(this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'usernameIsForbidden': true};
    }
    return null;
  }

}
