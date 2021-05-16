import { Component, Input, OnInit, ɵConsole } from '@angular/core';
import { GameService } from 'src/service/game.service';
// import * as bootstrap from 'bootstrap';
import { TokenStorageService } from 'src/service/token-storage.service';
import { UserServiceService } from 'src/service/user-service.service';

const REGISTER = 0x01;
const QUERY = 0x02;
const PAIR_UID = 0x03;
const CAPTURE = 0x0A;
const MEDIC = 0x0E;
const BOMB = 0xBB;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.svg',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input() mapID
  @Input() mapData
  content = 'it works'
  map;
  tokenSvc: TokenStorageService
  userSvc: UserServiceService;
  gameSvc: GameService;
  constructor(tokenService: TokenStorageService, userService: UserServiceService, gameService: GameService) {
    this.userSvc = userService;
    this.tokenSvc = tokenService;
    this.gameSvc = gameService;
  }

  ngOnInit(): void {

    this.gameSvc.getDeviceUpdate().subscribe(socketData => {
      // console.log("** DATA RECIEVED IN MAP COMPONENT *** mapid: ",this.mapID," mapData: ",this.mapData)
      console.log(socketData, " Device Update");
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
    // Without the timeout the map doesn't initialize --Fixed with moving to ngAfterViewInit.
    // setTimeout(() => {this.updateMapState();}, 200);
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.updateMapState()
  }
  updateMapState() {
    for (let device of this.mapData) { this.updateLocationState(device) }
  }
  updateTooltipContent(location) {
    location = location.replace('loc', '')
    let data = this.mapData.find(ele => ele.location == location) 
    this.content = location + " it works"
    console.log(this.mapData, data, location)
  }
  updateLocationState(device) {

    let locID = device.location;
    let stable = device.stable;
    let color = '#' + device.team;

    let element = document.getElementById("loc" + locID);
    // If the device corresponds to a location and the configuration
    // is of CAPTURE or REGISTER ... maybe later ... MEDIC, update
    // to beacon or fill the color as appropriate
    if (element && (device.config == CAPTURE || device.config == REGISTER)) {

      if (!stable && device.team) {

        element.classList.remove("owned");
        element.classList.add("beacon");
        element.setAttribute("fill", color);

      }
      else if (stable && device.team) {

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
    // If we found an element, but the device is not one of the above,
    // then give it standard styling.
    else if (element) {

      element.classList.remove("owned");
      element.classList.remove("beacon");
      element.setAttribute("fill", null);
    }

  }
}
