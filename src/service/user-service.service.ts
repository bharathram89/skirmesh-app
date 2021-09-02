import { tokenName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { SecureAPIService } from './secure-api.service';

@Injectable({
    providedIn: 'root'
})
export class UserServiceService {

  signedIn:boolean =false;

  userType;
  userData: BehaviorSubject<any> = new BehaviorSubject(null);

  isField:boolean=false;

  fieldProfileID;
  fieldProfile: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(
    private secAPIsvc : SecureAPIService
  ) {
    // this.signedIn     = new BehaviorSubject(false);
  }


    setUserData(userData) {
        if (userData.user.fieldProfile) {
            this.isField = true;
            this.fieldProfileID = userData.user.fieldProfile.id;
            this.fieldProfile.next(userData.user.fieldProfile);
        }
        this.userData.next(userData.user);
    }

    setFieldProfile(fieldProfile) {
        this.fieldProfile.next(fieldProfile);
    }

    getFieldProfileID(){
        let fpID;
        if (!this.fieldProfile) {return null}
        this.fieldProfile.subscribe(fp => {fpID = fp.id});
        return fpID
    }

    getFieldProfile(){
        let fieldProfile
        if (!this.fieldProfile) {return null}
        this.fieldProfile.subscribe(fp => {fieldProfile = fp});
        return fieldProfile
    }

    setSignIn(val: boolean) {
        this.signedIn = val;
    }

    isSignedIn() {
        return this.signedIn;
    }

    getUserData() {
        if (this.userData) {
            return this.userData;
        }
        return null;
    }

    // getGameModes() {
    //     return this.fieldProfile.gameConfigs;
    // }

    isSocialAccount() {

        let user;
        if (this.userData) {
            this.userData.subscribe(data =>{

                if(data){
                    user = data;
                    return user.facebookID || user.googleID || user.twitterID ? true : false; 
                }
            }
            )
            return false;
        }
    }

}
