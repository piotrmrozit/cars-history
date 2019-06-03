import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './../shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getProfile() {
    return this.http.get<User>('http://localhost:8000/api/users/profile');
  }

}
