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
  userData: BehaviorSubject<any>;

  isField:boolean=false;

  fieldProfileID;
  fieldProfile;
    token;
  constructor(
    private tokenSvc  : TokenStorageService,
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

        if (userData.user.marshal_field_id) {

    //   this.token = tokenSvc.getvToken();
            // If they are a Marshal, they don't get to be a field,
            // but we have to set the profile data for management purposes
            this.secAPIsvc.getFieldProfileFromAPI(this.tokenSvc.getToken(), userData.user.marshal_field_id).subscribe(
                fp => {
                    this.fieldProfile = new BehaviorSubject(fp);
                }
            )

        }
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
