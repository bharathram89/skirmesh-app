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
import { GameService } from 'src/service/game.service';

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
    gameInProgress      = false;
    gameModes;
    userSvc             : UserServiceService;
    deviceSvc           : DeviceService;
    tokenSvc            : TokenStorageService;
    authSvc             : AuthService;
    gameSvc             : GameService;
    selectedGameMode;
    activeDevices       : BehaviorSubject<any>;
    adminNodes          : BehaviorSubject<any>;
    activeNodes         : BehaviorSubject<any>;
    // deviceListConfigs;
    // activeNodesList;
    // adminNodesList;
    teams               = [];
    mapID;
    gameID              = null;
    gameData            = null;

    constructor(
        userService     : UserServiceService,
        deviceService   : DeviceService,
        tokenService    : TokenStorageService,
        authService     : AuthService,
        gameService     : GameService
    ){
        this.authSvc       = authService;
        this.userSvc       = userService;
        this.deviceSvc     = deviceService;
        this.tokenSvc      = tokenService;
        this.gameSvc       = gameService;
        this.activeDevices = new BehaviorSubject({})
    }

    ngOnInit(): void {
        this.gameSvc.getGames().subscribe(
            activeGames=>{

                if(activeGames[0] ){

                    this.gameData = activeGames[0];
                    this.gameBoardActive = true;
                    this.gameInProgress = true;

                    this.deviceSvc.getGameConfigsByID(this.tokenSvc.getToken(),activeGames[0].gameConfigID ).subscribe(

                        gameConfig=>{
                            this.gameData = activeGames[0]
                           // console.log(gameConfig, "selected COnfigs details")
                           this.setSelectedGameConfig(gameConfig);
                            this.gameBoardActive = true;
                            this.gameInProgress = true;


                        }
                     )
                }else{
                    this.deviceSvc.getGameConfigs(this.userSvc.getToken(),this.userSvc.getFieldProfileID()).subscribe(
                        savedConfigs => {
                            this.gameModes = savedConfigs;
                        }
                    )
                }
               console.log( activeGames," LIST OF ACTIVE GAMES IN START GAME")
            },
            err=>{
               //show message on page no games are active.
            }
         )

    }

    changeGame(games){

        let gameConfigID = games.target.value;
        this.selectedGameMode = this.gameModes.find(ele => ele.id == gameConfigID);

        this.setSelectedGameConfig(this.selectedGameMode);
    }

    startGame(){

        let mode = this.selectedGameMode;

        if (!mode) {return console.log("NO GAME SELECTED")};

        this.gameSvc.startGame(this.userSvc.getToken(), mode.id).subscribe(
            data => {

                this.gameData = data
                console.log(":: START GAME - GAME DATA ::", data)
            }, err=>{console.log(err)}
        )

        this.setSelectedGameConfig(mode);

        this.gameInProgress = true;

    }


    getSelectedGameModeName() {
        return this.selectedGameMode ? this.selectedGameMode.description : null
    }


    setSelectedGameConfig(mode){

        console.log(":: SETTING SELECTED GAME CONFIG ::", mode.deviceMap)

        this.selectedGameMode = mode;
        this.teams            = mode.teams;
        this.mapID            = mode.mapID;

        this.activeDevices.next({
            mode        : "active",
            mapID       : this.mapID,
            teams       : this.teams,
            nodeConfigs : makeDeviceModals(mode.deviceMap)
        });

        this.gameBoardActive = true;
    }


    nodeConfigs(event){
        console.log(":::START GAME nodeCONFIGS:::", event);
    }


    pauseGame() {

        let paused = !this.gameData.is_paused;

        this.gameSvc.pauseGame(this.userSvc.getToken(), {"id":this.gameData.id, "is_paused":paused}).subscribe(
            data => this.gameData = data
        )
    }


    endGame(){

        let safe = confirm("Do you really want to end the game?");

        if (safe) {
            this.tokenSvc.endGame();

            this.gameSvc.endGame(this.userSvc.getToken(), this.gameData.id).subscribe(
                data => {
                        this.gameInProgress = false;
                        this.gameBoardActive = false;
                    })
        }
    }
}
