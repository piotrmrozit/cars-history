import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './../shared/user.model';
import { UserPhoto} from './../shared/user-photo.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getProfile() {
    return this.http.get<User>('http://localhost:8000/api/users/profile');
  }

  getProfilePhoto() {
    return this.http.get<UserPhoto>('http://localhost:8000/api/users/profilephoto');
  }

}
