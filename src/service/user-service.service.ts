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
  fieldProfile: BehaviorSubject<any>;
  fieldPf;
  constructor(
    tokenService: TokenStorageService
  ) {
    this.tokenSvc= tokenService;
    this.signedIn = new BehaviorSubject(false);
    // this.userType = new BehaviorSubject('');
    this.userData = new BehaviorSubject({});
    this.fieldProfile = new BehaviorSubject({});
  }
  setUserData(userData){
    if(userData.user.type=='field'){
      this.isField = true;
      this.isPlayer = false;
      this.fieldProfileID = userData.user.fieldProfiles[0].id;
      this.fieldPf = userData.user.fieldProfiles[0];
      this.fieldProfile.next(userData.user.fieldProfiles[0]);// set field profile to first by default for now
    }else if (userData.user.type =='player'){
      this.isPlayer = true;
      this.isField = false;
    }
    this.token= userData.token;
    this.userType = userData.user.type;
    this.userData.next(userData.user)
    this.tokenSvc.saveToken(userData.token)
  }
  findMapID(mapName){
    let id ;
    this.fieldPf.maps.forEach(map => {
      if(map.name == mapName){
        id= map.id;
      }
    });
    return id;
  }
  findMapName(mapID){
    let name ;
    this.fieldPf.maps.forEach(map => {
      if(map.id == mapID){
        name= map.name;
      }
    });
    return name;
  }
  findLocationID(mapid,locationName){
    return this.getLocationsForMap(mapid).find(loc=>loc.name == locationName).id
  }
  findLocationName(mapid,locationid){
    return this.getLocationsForMap(this.findMapID(mapid)).find(loc=>loc.id == locationid).name
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
  getLocationsForMap(mapID){

    return this.fieldPf.maps.find(ele=> ele.id==mapID).locations
  }
}
