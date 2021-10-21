import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn= false;

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
 
   
  constructor() { }
  
}
  

