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

    public checkSocketConnect() {
      return this.socket.fromEvent('connect')
    }

    public getDeviceUpdate() {
      return this.socket.fromEvent('deviceUpdate')
    }

    public getNewAction() {
      return this.socket.fromEvent('newAction')
    }

    public getPlayerUpdate() {
      return this.socket.fromEvent('playerUpdate')
    }

}
