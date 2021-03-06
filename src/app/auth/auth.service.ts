import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from './../shared/user.model';

import * as firebase from 'firebase/app';
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  constructor(private router: Router, private http: HttpClient) { }

  register(user: User) {
    this.http.post('http://localhost:8000/api/users/register', user)
      .subscribe(
        registeredUser => {
          console.log('registeredUser >', registeredUser);
          this.router.navigate(['login']);
        }
      )
  }

  login(username: string, email: string, password: string) {
    const userLoginData = {
      username: username,
      email: email,
      password: password
    }
    this.http.post('http://localhost:8000/api/users/login', userLoginData)
    .subscribe(
      loggedUser => {
        console.log('loggedUser >', loggedUser);
        localStorage.setItem('token', JSON.stringify(loggedUser['token']));
        this.router.navigate(['profile']);
      }
    )
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isAuthenticated() {
    return localStorage.getItem('token') != null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  /* FIREBASE */
  // registerUser(email: string, password: string) {
  //   firebase.auth().createUserWithEmailAndPassword(email, password)
  //     .catch(error => console.log(error));
  // }

  // loginUser(email: string, password: string) {
  //   firebase.auth().signInWithEmailAndPassword(email, password)
  //     .then(response => {
  //       this.router.navigate(['profile']);
  //       firebase.auth().currentUser.getIdToken()
  //         .then((token: string) => {
  //           this.token = token;
  //         })
  //     })
  //     .catch(error => console.log(error));
  // }

  // logout() {
  //   firebase.auth().signOut();
  //   this.token = null;
  //   this.router.navigate(['/']);
  // }

  // getToken() {
  //   firebase.auth().currentUser.getIdToken()
  //     .then(
  //       (token: string) => this.token = token
  //     );
  //     return this.token;
  // }

  // isAuthenticated() {
  //   return this.token != null;
  // }

}
