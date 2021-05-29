import { tokenName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  signedIn: BehaviorSubject<boolean>;
  userType;
  userData: BehaviorSubject<any>;
  tokenSvc:TokenStorageService;
  isField:boolean=false;
  isPlayer:boolean=false;
  token;
  fieldProfileID;
  fieldProfile;
  fieldPf;

  constructor(
    tokenService: TokenStorageService
  ) {
    this.tokenSvc= tokenService;
    this.signedIn = new BehaviorSubject(false);
    this.userData = new BehaviorSubject({});
    this.fieldProfile = new BehaviorSubject({});
  }


  setUserData(userData){

    if(userData.user.type=='field'){

      this.isField = true;
      this.isPlayer = false;
      this.fieldProfileID = userData.user.fieldProfile.id;
      this.fieldPf = userData.user.fieldProfile;
      this.fieldProfile = userData.user.fieldProfile;
    }
    else if (userData.user.type =='player'){

      this.isPlayer = true;
      this.isField = false;
    }

    this.token= userData.token;
    this.userType = userData.user.type;
    this.userData.next(userData.user)
    this.tokenSvc.saveToken(userData.token)
  }

  getFieldProfileID(){
    return this.fieldProfileID;
  }

  getFieldProfile(){
    return this.fieldProfile;
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
  // fieldPf
  getGameModes(){
    return this.fieldPf.gameConfigs;
  }

}
