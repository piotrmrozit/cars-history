import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    
  }

  onLogout() {
    console.log('LOGOUT');
    this.authService.logout()
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

}
