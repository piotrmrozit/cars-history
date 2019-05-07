import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    console.log(this.authService.isAuthenticated())
  }

  onLogout() {
    this.authService.logout()
  }

}
