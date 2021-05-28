import { Component, Input, OnInit, ɵConsole } from '@angular/core';
import { Observable } from 'rxjs';
import { GameService } from 'src/service/game.service';
// import * as bootstrap from 'bootstrap';
import { NonSecureAPIService } from 'src/service/non-secure-api.service';

const REGISTER = 0x01;
const QUERY = 0x02;
const PAIR_UID = 0x03;
const CAPTURE = 0x0A;
const MEDIC = 0x0E;
const BOMB = 0xBB;

@Component({
    selector    : 'app-map',
    templateUrl : './map.component.svg',
    styleUrls   : ['./map.component.scss']
})
export class MapComponent implements OnInit {

    @Input() mapID
    @Input() deviceData

    tooltipContent = ' '
    socketOBJ;
    map;
    locationList;
    mapData;

    gameSvc      : GameService;
    nonSecAPIsvc : NonSecureAPIService;

    constructor(
        gameService      : GameService,
        nonSecAPIservice : NonSecureAPIService
    ) {
        this.gameSvc = gameService;
        this.nonSecAPIsvc = nonSecAPIservice;
    }

    ngOnInit(): void {

        this.socketOBJ = this.gameSvc.getDeviceUpdate().subscribe(socketData => {
            console.log(socketData, "Device Update");
            this.updateLocationState(socketData);
        })

    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.socketOBJ.unsubscribe()
    }

    ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized.
    //Applies to components only.
        this.updateMapState()

        this.nonSecAPIsvc.getMapData(this.mapID).subscribe(

            mapData => {

                this.mapData = mapData;
                this.locationList = this.mapData.locations;

                let paths = document.getElementsByClassName("location");

                for (let i = 0; i < paths.length; i++) {

                    paths[i].addEventListener("mouseenter", event => {

                        let target = event.target as HTMLTextAreaElement;

                        let loc = this.locationList.find(ele => ele.id == target.id.replace('loc',''));
                        this.tooltipContent = loc ? loc.name : "Mystery Zone";

                    });
                }

            }
        )


    }


    updateMapState() {
        for (let device of this.deviceData) { this.updateLocationState(device) }
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
