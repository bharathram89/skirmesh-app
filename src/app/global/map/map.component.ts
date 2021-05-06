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
  tokenSvc: TokenStorageService
  userSvc:UserServiceService;
   constructor(tokenService: TokenStorageService, userService: UserServiceService) {
     this.userSvc = userService;
      this.tokenSvc = tokenService;
   }

  ngOnInit(): void {
    console.log("** DATA RECIEVED IN MAP COMPONENT *** mapid: ",this.mapID," mapData: ",this.mapData);
    // if (activeGame) { 
       this.map = this.userSvc.findMapName(this.mapID);   
    // } else {

    // }
    
  }
  locationClick(locationID){
    let deviceConfigForLocation = this.mapData.find(ele => ele.location == locationID);
    console.log(deviceConfigForLocation,'locationState',locationID)
    return false; 
  }
  locationState(locationID){
    let deviceConfigForLocation = this.mapData.find(ele => ele.location == locationID);
    console.log(deviceConfigForLocation,"locationState")
    if(deviceConfigForLocation && deviceConfigForLocation.enabled)return true;
    return false; 
  }
  
  shouldLocationBlink(locationID){
    let deviceConfigForLocation = this.mapData.find(ele => ele.location == locationID);
    console.log(deviceConfigForLocation,"shouldLocationBlink")
    if(deviceConfigForLocation && deviceConfigForLocation.stable) return true //if stable dont blink
    return false //if not stable blink
  }
  locationColor(locationID){
    let deviceConfigForLocation = this.mapData.find(ele => ele.location == locationID);
    console.log(deviceConfigForLocation,"locationColor")
    if(deviceConfigForLocation && deviceConfigForLocation.team) return '#'+deviceConfigForLocation.team //if team set use that color
    return 'transparent'//default to transparent without any team set
  }
}
