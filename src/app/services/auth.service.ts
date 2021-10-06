import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn= new BehaviorSubject<boolean>(false);

   

  get isloggedIn(){
    return this.loggedIn.asObservable();
  }

   
  constructor() { }
  
}
  

