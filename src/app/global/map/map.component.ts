import { Component, OnInit } from '@angular/core';
// import * as bootstrap from 'bootstrap';
import { TokenStorageService } from 'src/service/token-storage.service';
import { UserServiceService } from 'src/service/user-service.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  map;
  tokenSvc: TokenStorageService
  userSvc:UserServiceService;
   constructor(tokenService: TokenStorageService, userService: UserServiceService) {
     this.userSvc = userService;
      this.tokenSvc = tokenService;
   }

  ngOnInit(): void {
    let activeGame = JSON.parse(this.tokenSvc.getGameInfo());
    if (activeGame) { 
       this.map = this.userSvc.findMapName(activeGame.mapID);   
    } else {

    }
  }
  locationClick(locationName){
    // let modal = new bootstrap.Modal(document.getElementById('locationModal'), {
    //   keyboard: false
    // }) 
    // modal.show()
  }
}
