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
  token;
  fieldProfileID;
  fieldProfile;

  constructor(
    tokenService: TokenStorageService
  ) {
    this.tokenSvc     = tokenService;
    this.signedIn     = new BehaviorSubject(false);
    this.userData     = new BehaviorSubject({});
    this.fieldProfile = new BehaviorSubject({});
  }


    setUserData(userData){

        if(userData.user.fieldProfile){

            this.isField = true;

            this.fieldProfileID = userData.user.fieldProfile.id;
            this.fieldProfile = userData.user.fieldProfile;
        }

        this.token = userData.token;

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

    getUserData(){
        return this.userData;
    }

    getToken(){
        return this.token;
    }

    getGameModes(){
        return this.fieldProfile.gameConfigs;
    }

}
