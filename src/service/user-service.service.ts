import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  signedIn: Subject<boolean>;
  userType: Subject<String>;
  constructor() {
    this.signedIn = new Subject<false>();
    this.userType = new Subject();
  }
  setUserData(userData){
    console.log(userData,"all user data")
    this.userType.next(userData.type);
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
