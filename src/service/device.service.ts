import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tokenName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { TokenStorageService } from './token-storage.service';

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


  constructor(private http:HttpClient,
    tokenSvc:TokenStorageService) { 

  }
  saveGameConfigs(data,token){
console.log(data,"data to send back")
    // this.http.post(this.BASE+'resources/gameConfig?token='+token,data,this.options)
  }
  modifyGameConfig(data, token){
    this.http.put(this.BASE+'resources/gameConfig?token='+token,data,this.options)
  }
}
