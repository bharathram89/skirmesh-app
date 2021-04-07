import { tokenName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  signedIn: BehaviorSubject<boolean>;
  userType: BehaviorSubject<String>;
  userData: BehaviorSubject<any>;
  tokenSvc:TokenStorageService;
  isField:boolean=false;
  isPlayer:boolean=false;
  token;
  constructor(
    tokenService: TokenStorageService
  ) {
    this.tokenSvc= tokenService;
    this.signedIn = new BehaviorSubject(false);
    this.userType = new BehaviorSubject('');
    this.userData = new BehaviorSubject({});
  }
  setUserData(userData){
    if(userData.user.type=='field'){
      this.isField = true;
    }else if (userData.user.type =='player'){
      this.isPlayer = true;
    }
    this.token= userData.token;
    this.userType.next(userData.user.type);
    this.userData.next(userData.user)
    this.tokenSvc.saveToken(userData.token)
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
  getUserData(){
    return this.userData;
  }
  getToken(){
    return this.token;
  }

}
