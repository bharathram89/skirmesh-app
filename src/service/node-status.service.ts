
import { Injectable } from '@angular/core';  

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tokenName } from '@angular/compiler';
import { TokenStorageService } from './token-storage.service';
import { UserServiceService } from './user-service.service';

 


@Injectable({
  providedIn: 'root'
})
export class NodeConfigService {

    // }
    headers =new HttpHeaders({
        'Content-Type': 'application/json'
    });
    options = { headers: this.headers };

    BASE = 'https://api.skirmesh.net/'
    DCTK = 'resources/device?token='


    constructor(
        private http : HttpClient
    ){}

    getDevicesByGameID(gameID){
        return this.http.get(this.BASE+'resources/devices?gameID='+gameID)
    }

    modifyNodeConfig(token, data){
        return this.http.put(this.BASE+this.DCTK+token, data, this.options)
    }

}
