import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
      providedIn: 'root'
})
export class GameService {

    // GameService is primarily used to provide socket updates
    // during the live game view

    constructor(
      private socket: Socket
    ) {}


    public getDeviceUpdate() {
      return new Observable((observer) => {
              this.socket.on('deviceUpdate', (message) => {
                // console.log(message,"message from socket")
                  observer.next(message);
              });
      });
    }

    public getNewAction() {
      return new Observable((observer) => {
              this.socket.on('newAction', (message) => {
                // console.log(message,"message from socket")
                  observer.next(message);
              });
      });
    }

    public getPlayerUpdate() {
      return new Observable((observer) => {
              this.socket.on('playerUpdate', (message) => {
                // console.log(message,"message from socket")
                  observer.next(message);
              });
      });
    }

}
