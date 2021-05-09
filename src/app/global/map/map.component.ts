import { Component, Input, OnInit, ɵConsole } from '@angular/core';
import { GameService } from 'src/service/game.service';
// import * as bootstrap from 'bootstrap';
import { TokenStorageService } from 'src/service/token-storage.service';
import { UserServiceService } from 'src/service/user-service.service';

const REGISTER = 0x01;
const QUERY    = 0x02;
const PAIR_UID = 0x03;
const CAPTURE  = 0x0A;
const MEDIC    = 0x0E;
const BOMB     = 0xBB;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.svg',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

    @Input() mapID
    @Input() mapData

    map;
    tokenSvc : TokenStorageService
    userSvc  : UserServiceService;
    gameSvc  : GameService;
    constructor(tokenService: TokenStorageService, userService: UserServiceService, gameService: GameService) {
        this.userSvc  = userService;
        this.tokenSvc = tokenService;
        this.gameSvc = gameService;
    }

    ngOnInit(): void {

      console.log("** DATA RECIEVED IN MAP COMPONENT *** mapid: ",this.mapID)

      this.gameSvc.getMessages().subscribe(socketData=>{
        // console.log("** DATA RECIEVED IN MAP COMPONENT *** mapid: ",this.mapID," mapData: ",this.mapData)
        console.log(socketData," socket Data");
        this.updateLocationState(socketData);
      })

      // Leaving for Bharath to debug and play.
      // setTimeout(() => {
      //   let newConfig= this.mapData[0];
      //   newConfig.stable = false;
      //   console.log(newConfig,"config info")
      //   this.updateLocationState(newConfig)
      // },5000);

      // Set a timeout to load map data...give time to load the pages.
      // Without the timeout the map doesn't initialize
      setTimeout(() => {this.updateMapState();}, 200);
  }

    updateMapState() {
        for (let device of this.mapData){this.updateLocationState(device)}
    }

    updateLocationState(device) {

        let locID    = device.location;
        let stable   = device.stable;
        let color    = '#' + device.team;

        let element = document.getElementById("loc"+locID);

        if (element && (device.config == CAPTURE || device.config == REGISTER)) {

            if (!stable && device.team) {

              element.classList.remove("owned");
              element.classList.add("beacon");
              element.setAttribute("fill", color);

            }
            else if (stable && device.team){

              element.classList.remove("beacon");
              element.classList.add("owned");
              element.setAttribute("fill", color);
            }
            else {

              element.classList.remove("owned");
              element.classList.remove("beacon");
              element.setAttribute("fill", null);
            }
        }
        else {

            element.classList.remove("owned");
            element.classList.remove("beacon");
            element.setAttribute("fill", null);
        }

    }
}
