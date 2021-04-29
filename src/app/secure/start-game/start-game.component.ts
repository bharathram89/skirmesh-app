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

    gameBoardCollapsed = false;
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
        this.gameModes = savedConfigs;//this.userSvc.getGameModes();

        if(gameData){
            this.setSelectedGameConfig(gameData);
            this.gameBoardCollapsed= true;
        }
        })
    }

    changeGame(e){
        let gameID = e.target.value;
        this.selectedGameMode = this.gameModes.find(ele => ele.id = gameID);
    }

    startGame(){

        let mode = this.selectedGameMode;
        this.deviceSvc.startGame(this.userSvc.getToken(), mode.id).subscribe(
            data => {

                this.authSvc.getUser(this.tokenSvc.getToken()).subscribe(
                latestDeviceData => {

                    // Do this to ensure the latest data is used/pushed
                    this.userSvc.setUserData(latestDeviceData);

                    this.setSelectedGameConfig(mode);
                    this.tokenSvc.saveGameInfo(JSON.stringify(mode));
                    this.gameBoardCollapsed = true;
                },
                err=>{
                    console.log(err);
                })
          },
          err=>{
                console.log(err);
          }
        )
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


    nodeConfigs(e){
      // ONLY SEND UPDATED NODE - SINGLE NODE AT A TIME
        console.log(":::START GAME NODE CONFIGS:::", e)

        if (e.includes('endGame')){
            this.tokenSvc.endGame();
            this.gameBoardCollapsed=false;
        }else{
        //update to
        }
    }
}
