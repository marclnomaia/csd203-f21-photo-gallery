import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as firebase from 'firebase/auth';
import { DatabaseService } from './database.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn= false;
  userData: any = {
    email: ""
    }
    constructor(private database: DatabaseService) { 
    }
    
    getUserData() {
    return this.userData;
    
    }

    signInWithGooglePopUp() {
    let provider = new firebase.GoogleAuthProvider();
    
    firebase.signInWithPopup(firebase.getAuth(), provider).then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    // result.credential.accessToken;
    this.database.writeLoginToDatabase(result.user.email);
    this.loggedIn = true;
    this.userData.email = result.user.email;
    }).catch((error) => {
    // Handle Errors here.
    //error.code;
    //error.message;
    //error.email;
    console.log(error.message);
    });
    }
  
   

  async signInWithEmail(email: String, password: String) {
    if (email === "testuser" && password === "temp") {
    this.loggedIn = true;
    alert("Sign in pressed");
  } else {
    throw new Error("Invalid credentials");
    }
   

    }

  isLoggedIn(){
    return this.loggedIn;
  }
 
   
  
  
}
  

