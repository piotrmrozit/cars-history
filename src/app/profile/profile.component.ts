import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  loggedUser: Object;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.loggedUser = this.authService.getLoggedUser();
    console.log('profile',this.loggedUser);
  }

}
