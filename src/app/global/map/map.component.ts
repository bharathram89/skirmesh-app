import { Component, Input, OnInit } from '@angular/core';
// import * as bootstrap from 'bootstrap';
import { TokenStorageService } from 'src/service/token-storage.service';
import { UserServiceService } from 'src/service/user-service.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
    @Input() mapID
    @Input() mapData
    map;
    tokenSvc : TokenStorageService
    userSvc  : UserServiceService;
    constructor(tokenService: TokenStorageService, userService: UserServiceService) {
        this.userSvc  = userService;
        this.tokenSvc = tokenService;
    }

    ngOnInit(): void {

        console.log("** DATA RECIEVED IN MAP COMPONENT *** mapid: ",this.mapID," mapData: ",this.mapData)
        let activeGame = JSON.parse(this.tokenSvc.getGameInfo());
        if (activeGame) {

            this.map = this.userSvc.findMapName(activeGame.mapID);

        } else {

        }

  }

  updateMapState() {

      for (let device of this.mapData){this.updateLocationState(device);}
  }

  updateLocationState(device) {

      let locID    = device.location;
      let stable   = device.stable;
      let color    = '#' + device.team;

      let element = document.getElementById(locID);

      if (element) {

          if (!stable && device.team) {

              element.classList.add("beacon");
              element.setAttribute("fill", color);

          }
          else if (stable && device.team){

              element.classList.remove("beacon");
              element.classList.add("owned");
              element.setAttribute("fill", color);
          }
          else {

              element.classList.remove("beacon");
              element.setAttribute("fill", "transparent")
          }
      }

  }

  locationClick(locationID){
    let deviceConfigForLocation = this.mapData.find(ele => ele.location == locationID);
    console.log(deviceConfigForLocation,'locationState',locationID)
    return false;
  }

  locationState(locationID){
    let deviceConfigForLocation = this.mapData.find(ele => ele.location == locationID);
    if(deviceConfigForLocation && deviceConfigForLocation.enabled) return true;
    return false;
  }

  shouldLocationBlink(locationID){
    let deviceConfigForLocation = this.mapData.find(ele => ele.location == locationID);
    if(deviceConfigForLocation && !deviceConfigForLocation.stable) return true //if stable dont blink
    return false //if not stable blink
  }

  locationColor(locationID){
    let deviceConfigForLocation = this.mapData.find(ele => ele.location == locationID);
    console.log(deviceConfigForLocation,"locationColor")
    if(deviceConfigForLocation && deviceConfigForLocation.team) return '#'+deviceConfigForLocation.team //if team set use that color
    return 'transparent'//default to transparent without any team set
  }
}
