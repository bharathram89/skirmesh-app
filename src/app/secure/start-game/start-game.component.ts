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
    adminNodes          : BehaviorSubject<any>;
    activeNodes         : BehaviorSubject<any>;
    activeNodesList;
    adminNodesList;
    teams;
    mapID;

    constructor(
        userService     : UserServiceService,
        deviceService   : DeviceService,
        tokenService    : TokenStorageService,
        authService     : AuthService
    ){
        this.authSvc     = authService;
        this.userSvc     = userService;
        this.deviceSvc   = deviceService;
        this.tokenSvc    = tokenService;
        this.activeNodes = new BehaviorSubject({})
        this.adminNodes  = new BehaviorSubject({})
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

        let config = makeDeviceModals(mode.deviceMap)

        this.activeNodesList = config.filter(ele=>ele.enabled);
        this.adminNodesList  = config.filter(ele=>!ele.enabled);

        console.log(this.gameModes,"all game modes", this.activeNodesList, this.adminNodesList)
        this.activeNodes.next({
            mode        : "activeNodes",
            teams       : this.teams,
            location    : this.mapID,
            nodeConfigs : this.activeNodesList
        })
        this.adminNodes.next({
            mode        : "adminNodes",
            location    : this.mapID,
            teams       : this.teams,
            nodeConfigs : this.adminNodesList
        })
    }

  nodeConfigs(e){
      // ONLY SEND UPDATED NODE - SINGLE NODE AT A TIME
    console.log(e,"recived to move in start game")
    if(e.includes('makeNodeAdmin')){

        let movedNode =JSON.parse(e.replace('makeNodeAdmin',''));
        this.adminNodesList.push(movedNode);

        this.adminNodes.next({
            mode        : "adminNodes",
            location    : this.mapID,
            teams       : this.teams,
            nodeConfigs : this.adminNodesList
        })

        this.activeNodesList = this.activeNodesList.filter(data=> data.address != movedNode.address)
        console.log(this.activeNodesList,"updated active list")

        this.activeNodes.next({
            mode        : "activeNodes",
            teams       : this.teams,
            location    : this.mapID,
            nodeConfigs : this.activeNodesList
        })

    }else if (e.includes('makeNodeActive')){

        let movedNode =JSON.parse(e.replace('makeNodeActive',''));
        this.activeNodesList.push(movedNode);
        this.activeNodes.next({
            mode        : "activeNodes",
            location    : this.mapID,
            teams       : this.teams,
            nodeConfigs : this.activeNodesList
        })

        this.adminNodesList = this.adminNodesList.filter(data=>!data.address || data.address !=movedNode.address )
        // console.log(this.adminNodesList,"updated admin list",this.activeNodesList)
        this.adminNodes.next({
            mode        : "adminNodes",
            location    : this.mapID,
            teams       : this.teams,
            nodeConfigs : this.adminNodesList
        })

        }else if (e.includes('endGame')){
            this.tokenSvc.endGame();
            this.gameBoardCollapsed=false;
        }else{
        //update to
        }
    }
}
