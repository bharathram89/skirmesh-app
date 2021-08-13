import { tokenName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserServiceService {

    signedIn: boolean = false;
    userType;
    userData: BehaviorSubject<any> = new BehaviorSubject(null);
    isField: boolean = false;
    token;
    fieldProfileID;
    fieldProfile;

    constructor(
    ) {
        // this.signedIn     = new BehaviorSubject(false);
    }


    setUserData(userData) {
        if (userData.user.fieldProfile) {
            this.isField = true;
            this.fieldProfileID = userData.user.fieldProfile.id;
            this.fieldProfile = new BehaviorSubject(userData.user.fieldProfile);
        }
        this.userData.next(userData.user);
    }

    getFieldProfileID() {
        let fpID;
        if (!this.fieldProfile) { return null }
        this.fieldProfile.subscribe(fp => { fpID = fp.id });
        return fpID
    }

    getFieldProfile() {
        let fieldProfile
        if (!this.fieldProfile) { return null }
        this.fieldProfile.subscribe(fp => { fieldProfile = fp });
        return fieldProfile
    }

    setSignIn(val: boolean) {
        this.signedIn = val;
    }

    isSignedIn() {
        return this.signedIn;
    }

    getUserData(){
        if (this.userData) {
            return this.userData;
        }
        return null;
    }

    getGameModes() {
        return this.fieldProfile.gameConfigs;
    }

    isSocialAccount() {

        let user;
        if (this.userData) {
        this.userData.subscribe( data =>
            user = data
        )
        return user.facebookID || user.googleID || user.twitterID ? true : false 
    }
    }

}
