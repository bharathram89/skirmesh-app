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
    GTK = 'resources/gameConfig'
    TMTK = 'resources/team?token='

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
        return this.http.put(this.BASE+this.GCTK+token,data,this.options)
    }
    
    deleteTeam(teamID, token){
        return this.http.delete(this.BASE+this.TMTK+token+'&id='+teamID)
    }

    getGameConfigs(token, fieldProfileID){
        return this.http.get(this.BASE+this.GCTK+token+'&fieldProfileID='+fieldProfileID)
    }

    getGameConfigsByID(gameConfigID){
        return this.http.get(this.BASE+this.GTK+'?id='+gameConfigID)
    }

    deleteGameConfig(token, gameConfigID){
        return this.http.delete(this.BASE+this.GCTK+token+'&id='+gameConfigID)
    }
  // http://api.skirmesh.net/resources/gameConfig

}
