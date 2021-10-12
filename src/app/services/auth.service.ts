import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn= false;

  signInWithEmail() {
    this.loggedIn = true;
    alert("Sign in pressed");
    }

  isloggedIn(){
    return this.loggedIn;
  }
 
   
  constructor() { }
  
}
  

