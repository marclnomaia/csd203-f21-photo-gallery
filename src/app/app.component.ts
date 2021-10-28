import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform) {
    this.initializeApp();
    }
    initializeApp() {
    this.platform.ready().then(() => {
    var firebaseConfig = {
    apiKey: "AIzaSyACCAyNDvZ4cmFeWNUIt2Qbp7EElwdS8mE",
    authDomain: "csd203-marcilino.firebaseapp.com",
    projectId: "csd203-marcilino",
    storageBucket: "csd203-marcilino.appspot.com",
    messagingSenderId: "123181122376",
    appId: "1:123181122376:web:e53a020b70faba4269e97d",
    measurementId: "G-GTB278DL60"
    }
    firebase.initializeApp(firebaseConfig);
    });
    }}
   

    