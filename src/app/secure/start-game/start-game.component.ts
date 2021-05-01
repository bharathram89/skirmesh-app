import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/service/user-service.service';
import {
  AUTO_STYLE,
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { BehaviorSubject } from 'rxjs';
import { DeviceService } from 'src/service/device.service';
import { TokenStorageService } from 'src/service/token-storage.service';
import { makeDeviceModals } from 'src/app/global/node.modal';
import { AuthService } from 'src/service/auth.service';

const DEFAULT_DURATION = 300;
@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.scss'],
  animations: [
    trigger('collapse', [
      state('false', style({ height: AUTO_STYLE, visibility: AUTO_STYLE })),
      state('true', style({ height: '0', visibility: 'hidden' })),
      transition('false => true', animate(DEFAULT_DURATION + 'ms ease-in')),
      transition('true => false', animate(DEFAULT_DURATION + 'ms ease-out'))
    ])
  ]
})

export class StartGameComponent implements OnInit {

    gameBoardActive     = false;
    gameModes;
    userSvc             : UserServiceService;
    deviceSvc           : DeviceService;
    tokenSvc            : TokenStorageService;
    authSvc             : AuthService;
    selectedGameMode;
    activeDevices       : BehaviorSubject<any>;
    adminNodes          : BehaviorSubject<any>;
    activeNodes         : BehaviorSubject<any>;
    // deviceListConfigs;
    // activeNodesList;
    // adminNodesList;
    teams = [];
    mapID;

    constructor(
        userService     : UserServiceService,
        deviceService   : DeviceService,
        tokenService    : TokenStorageService,
        authService     : AuthService
    ){
        this.authSvc       = authService;
        this.userSvc       = userService;
        this.deviceSvc     = deviceService;
        this.tokenSvc      = tokenService;
        this.activeDevices = new BehaviorSubject({})
        // this.adminNodes    = new BehaviorSubject({})
    }

    ngOnInit(): void {

        this.deviceSvc.getGameConfigs(this.userSvc.getToken(),this.userSvc.getFieldProfileID()).subscribe(
            savedConfigs => {

                let gameData   = JSON.parse(this.tokenSvc.getGameInfo());
                this.gameModes = savedConfigs;

                if(gameData){

                    this.setSelectedGameConfig(gameData);
                    this.gameBoardActive = true;
                }
                else{
                    this.gameBoardActive = false;
                }
            }
        )
    }

    changeGame(games){
        let gameConfigID = games.target.value;
        this.selectedGameMode = this.gameModes.find(ele => ele.id == gameConfigID);
        console.log(":: SELECTED GAME ::", this.selectedGameMode)
        this.setSelectedGameConfig(this.selectedGameMode);
    }

    startGame(){

        let mode = this.selectedGameMode;

        if (!mode) {return console.log("NO GAME SELECTED")};

        this.deviceSvc.startGame(this.userSvc.getToken(), mode.id).subscribe(
            data => {
                // Why isn't this data stored as the "gameInfo"?
                console.log(":: GAME DATA ::", data)
            }, err=>{console.log(err)}
        )

        // why were these functions nested?  gameData is never used
        // in the nested function
        this.authSvc.getUser(this.tokenSvc.getToken()).subscribe(
            latestDeviceData => {
                // not sure this actually provides a benefit - we don't
                // reset the config data before sending it up
                this.userSvc.setUserData(latestDeviceData);
            },
            err=>{console.log(err)}
        )

        this.setSelectedGameConfig(mode);
        // This should store the actual game data
        this.tokenSvc.saveGameInfo(JSON.stringify(mode));
        // This is not used anymore
        this.gameBoardActive = true;
    }

    getSelectedGameModeName() {
        return this.selectedGameMode ? this.selectedGameMode.description : null
    }

    setSelectedGameConfig(mode){

        this.teams = mode.teams;
        this.mapID = mode.mapID;

        this.activeDevices.next({
            mode        : "active",
            mapID       : this.mapID,
            teams       : this.teams,
            nodeConfigs : makeDeviceModals(mode.deviceMap)
        });
    }


    nodeConfigs(event){
        console.log(":::START GAME nodeCONFIGS:::", event);
    }

    endGame(){
        
        this.tokenSvc.endGame();
        this.gameBoardActive = false;

    }
}
