import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tokenName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { TokenStorageService } from './token-storage.service';
import { UserServiceService } from './user-service.service';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  // }
  headers =new HttpHeaders({
    'Content-Type': 'application/json'
  });
  options = { headers: this.headers };

  BASE = 'http://api.skirmesh.net/';

userSvc:UserServiceService;

  constructor(private http:HttpClient,
    tokenSvc:TokenStorageService,
    userSvc: UserServiceService) { 
      this.userSvc = userSvc;
  }
  saveGameConfigs(data,token){
    // let stuff = {
    //   description:data.name,
    //   mapID:'',//get mapid
    //   deviceMap:data.nodeModes,
    //   fieldProfileID:this.userSvc.getFieldProfile()['id']
    // }
    console.log(data,"data to send back")

    return this.http.post(this.BASE+'resources/gameConfig?token='+token,data,this.options)
  }
  modifyGameConfig(data, token){
    return this.http.put(this.BASE+'resources/gameConfig?token='+token,data,this.options)
  }
  getGameConfigs(token){
    return this.http.get(this.BASE+'resources/gameConfig?token='+token)
  }
}
