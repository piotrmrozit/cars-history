import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {

  }
  
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA8HHsVaEX_HmbjrN9wX1ZsXv906E34_lo',
      authDomain: 'cars-history-db-cc3ab.firebaseapp.com'
    })
  }

}
