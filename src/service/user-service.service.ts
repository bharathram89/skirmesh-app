import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  signedIn: BehaviorSubject<boolean>;
  userType: BehaviorSubject<String>;
  constructor() {
    
    this.signedIn = new BehaviorSubject(false);
    this.userType = new BehaviorSubject('');
  }
  setUserData(userData){
    this.userType.next(userData.user.type);
  }
  setSignIn(val: boolean) {
    this.signedIn.next(val);
  }
  isSignedIn() {
    return this.signedIn;
  }
  getUserTye(){
    return this.userType;
  }

}
