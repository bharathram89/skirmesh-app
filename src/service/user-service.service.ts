import { tokenName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  signedIn:boolean =false;
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
    // this.signedIn     = new BehaviorSubject(false);
  }


    setUserData(userData){

        if(userData.user.fieldProfile){

            this.isField = true;

            this.fieldProfileID = userData.user.fieldProfile.id;
            this.fieldProfile = new BehaviorSubject(userData.user.fieldProfile);
        }
        this.userData = new BehaviorSubject(userData.user);
    }

    getFieldProfileID(){
        let fpID;
        this.fieldProfile.subscribe(fp => {fpID = fp.id});
        return fpID
    }

    getFieldProfile(){
        let fieldProfile
        this.fieldProfile.subscribe(fp => {fieldProfile = fp});
        return fieldProfile
    }

    setSignIn(val: boolean) {
        this.signedIn=val;
    }

    isSignedIn() {
        return this.signedIn;
    }

    getUserData(){
        return this.userData;
    }

    getGameModes(){
        return this.fieldProfile.gameConfigs;
    }

}
