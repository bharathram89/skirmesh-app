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

    BASE = 'http://api.skirmesh.net/'
    GCTK = 'resources/gameConfig?token='

    userSvc:UserServiceService;

    constructor(
        private http:HttpClient,
        tokenSvc:TokenStorageService,
        userSvc: UserServiceService
    ) {
        this.userSvc = userSvc;
    }

    saveGameConfigs(data, token){
        return this.http.post(this.BASE+this.GCTK+token,data,this.options)
    }

    modifyGameConfig(data, token){
        console.log(" MODIFY GAME CONFIG DATA:" , data)
        return this.http.put(this.BASE+this.GCTK+token,data,this.options)
    }

    getGameConfigs(token, fieldProfileID){
        return this.http.get(this.BASE+this.GCTK+token+'&fieldProfileID='+fieldProfileID)
    }

    getGameConfigsByID(token){
        return this.http.get(this.BASE+this.GCTK+token)
    }
    deleteGameConfig(token, gameConfigID){
        return this.http.delete(this.BASE+this.GCTK+token+'&id='+gameConfigID)
    }

    startGame(token, gameConfigID){

        let data = {"gameConfigID":gameConfigID}
        return this.http.post(this.BASE+'gameplay/startGame?token='+token,data,this.options )
    }

    endGame(token, gameID){
        let data = {"id":gameID}
        return this.http.put(this.BASE+'gameplay/endGame?token='+token,data,this.options )
    }
  // http://api.skirmesh.net/resources/gameConfig

}
