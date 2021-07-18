import { Component, Input, OnInit, ɵConsole, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { GameService } from 'src/service/game.service';
// import * as bootstrap from 'bootstrap';
import { NonSecureAPIService } from 'src/service/non-secure-api.service';

const REGISTER = 0x01;
const QUERY    = 0x02;
const PAIR_UID = 0x03;
const CAPTURE  = 0x0A;
const MEDIC    = 0x0E;
const BOMB     = 0xBB;

const BOMB_ARMED    = 0xBA;
const BOMB_DISARMED = 0xBD;
const BOMB_DETONATE = 0xDD;

@Component({
    selector    : 'app-map',
    templateUrl : './map.component.svg',
    styleUrls   : ['./map.component.scss']
})
export class MapComponent implements OnInit {

    @Input() mapID
    @Input() deviceData
    @Input() gameID
    @Output() deviceChange = new EventEmitter<any>();

    tooltipContent = ' '
    socketOBJ;
    map;
    locationList;
    mapData;

    constructor(
        private gameSvc      : GameService,
        private nonSecAPIsvc : NonSecureAPIService
    ) {}

    ngOnInit(): void {

        this.socketOBJ = this.gameSvc.getDeviceUpdate().subscribe(socketData => {

            if (socketData["gameID"] == this.gameID) {
                console.log(socketData, " Device Update");
                this.updateLocationState(socketData)
            };
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
    this.nonSecAPIsvc.getMapData(this.mapID).subscribe(

        mapData => {

            this.mapData = mapData;
            this.locationList = this.mapData.locations;

            if(this.deviceData){ this.updateMapState() };

            this.addToolTipListener();
        })
    }


    addToolTipListener() {

        let paths = document.getElementsByClassName("location");

        for (let i = 0; i < paths.length; i++) {

            // paths[i].removeEventListener("mouseenter", event => {this.setToolTipText(event, device)});
            paths[i].addEventListener("mouseenter", event => {

              let target = event.target as HTMLTextAreaElement;
              let loc, dev;

              loc = this.locationList.find(ele => ele.id == target.id.replace('loc',''));

              if (this.deviceData) {
                  dev = this.deviceData.find(ele => ele.location == target.id.replace('loc',''))
              }

              let str = `${loc ? loc.name : "Mystery Zone"}`

              if (dev) {
                  str += "<br/>"
                  str += `${this.translateConfig(dev)}`
              }

              this.tooltipContent = `${str}`
            });
        }
    }


    translateConfig(device) {

        switch (device.config) {

            case CAPTURE:
                let worth = this.convertPointScale(device.point_scale);
                return `Objective (${worth})`
                break;

            case MEDIC:
                let str = "Medic Station";
                let time = device.med_time ? this.convertTime(device.med_time) : "Respawn";

                return `${str} <br/> (${time})`
                break;

            case BOMB:
                let arm  = this.convertTime(device.arm_time);
                let diff = this.convertTime(device.diff_time);
                let fuse = this.convertTime(device.bomb_time);
                return `Bomb / IED <br/> ( arm | fuse | diff ) <br/> ${arm} | ${fuse} | ${diff}`
                break;

            case REGISTER:
                return "Team Registration";
                break;

            default:
                return ""
                break;
        }

    }

    convertTime(value) {

        if (value < 12) {
            return  value * 10 + "sec"
        }
        else {
            return  value * 10 / 60 + "min"
        }
    }

    convertPointScale(value) {
        return 60 / value + "x"
    }


    updateMapState() {
        for (let device of this.deviceData) { this.updateLocationState(device) }
    }


    updateLocationState(device) {

        // Update device data as well since this is the only time
        // socketdata for the device is handled.
        if (this.deviceData) {
            let to_update = this.deviceData.findIndex(dev => dev.id == device.id);
            if (to_update != -1) {
                this.deviceData[to_update] = device
                this.deviceChange.emit(this.deviceData);
            }
        }

        let locID = device.location;
        let stable = device.stable;
        let color = '#' + device.team;

        let element = document.getElementById("loc" + locID);
        // If the device corresponds to a location and the configuration,
        // beacon or fill the color as appropriate
        if (element) {
            // This resets the class list to a proper baseline
            while (element.classList.length) {

                element.classList.remove(element.classList.item(0));
            }
            element.classList.add("location")
        }

        else {return}

        if (device.config == CAPTURE && device.team) {

            if (stable) {

                element.classList.add("owned");
                element.setAttribute("fill", color);

            }
            else {

                element.classList.add("beacon");
                element.setAttribute("fill", color);
            }

        }

        else if (device.config == REGISTER && device.team) {

            element.classList.add("register");
            element.setAttribute("fill", color);

        }

        else if (device.config == BOMB) {

            switch (device.bomb_status) {

                case BOMB_ARMED:
                    element.classList.add("armed");
                    break;

                case BOMB_DISARMED:
                    element.classList.add("disarmed");
                    break;

                case BOMB_DETONATE:
                    element.classList.add("demo");
                    break;

                default:
                    break;
            }

        }

        else if (device.config == MEDIC) {

            element.classList.add("medic");
            element.setAttribute("fill", "#00A000");
            setTimeout(() => element.classList.remove("medic"), 250);

        }

    }



}
