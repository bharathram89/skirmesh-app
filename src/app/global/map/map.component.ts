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

    constructor(tokenService: TokenStorageService,
                userService: UserServiceService) {

        this.userSvc  = userService;
        this.tokenSvc = tokenService;
    }

    ngOnInit(): void {

        console.log("** MAP COMPONENT **", this.mapID, this.mapData)

    }

    updateMapState() {
        for (let device of this.mapData){this.updateLocationState(device)}
    }

    updateLocationState(device) {

        let locID    = device.location;
        let stable   = device.stable;
        let color    = '#' + device.team;

        let element = document.getElementById(locID);

        if (element) {

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
    }
}
