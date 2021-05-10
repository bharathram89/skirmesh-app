
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map }from 'rxjs/operators';
import { Socket } from 'ngx-socket-io';
import { environment } from '../environments/environment';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tokenName } from '@angular/compiler';
import { TokenStorageService } from './token-storage.service';
import { UserServiceService } from './user-service.service';


@Injectable({
  providedIn: 'root'
})
export class NodeConfigSocket extends Socket {

  constructor() {
    super({ url: environment.ws_url, options: {} });
  }

  public sendMessage(message) {
    this.emit('new-message', message);
  }

  public getMessages = () => {
    return new Observable((observer) => {
            this.on('new-message', (message) => {
                observer.next(message);
            });
    });
  }


}


@Injectable({
  providedIn: 'root'
})
export class NodeConfigService {

    // }
    headers =new HttpHeaders({
        'Content-Type': 'application/json'
    });
    options = { headers: this.headers };

    BASE = 'http://api.skirmesh.net/'
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
