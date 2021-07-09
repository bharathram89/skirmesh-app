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
    this.userData     = new BehaviorSubject({});
    this.fieldProfile = new BehaviorSubject({});
  }


    setUserData(userData){

        if(userData.user.fieldProfile){

            this.isField = true;

            this.fieldProfileID = userData.user.fieldProfile.id;
            this.fieldProfile = userData.user.fieldProfile;
        }
        this.userData.next(userData.user)
    }

    getFieldProfileID(){
        return this.fieldProfileID;
    }

    getFieldProfile(){
        return this.fieldProfile;
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
