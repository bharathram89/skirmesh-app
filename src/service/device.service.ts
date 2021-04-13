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
    return this.http.post(this.BASE+'resources/gameConfig?token='+token,data,this.options)
  }
  modifyGameConfig(data, token){
    return this.http.put(this.BASE+'resources/gameConfig?token='+token,data,this.options)
  }
  getGameConfigs(token){
    return this.http.get(this.BASE+'resources/gameConfig?token='+token)
  }
}
