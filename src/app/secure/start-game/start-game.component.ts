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
import { BehaviorSubject, combineLatest } from 'rxjs';
import { TokenStorageService } from 'src/service/token-storage.service';
import { makeDeviceModals } from 'src/app/global/node.modal';
import { NonSecureAPIService } from 'src/service/non-secure-api.service';
import { SecureAPIService } from 'src/service/secure-api.service';


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

    selectedGameMode;
    activeDevices       : BehaviorSubject<any>;
    adminNodes          : BehaviorSubject<any>;
    activeNodes         : BehaviorSubject<any>;
    // deviceListConfigs;
    // activeNodesList;
    // adminNodesList;
    teams               = [];
    mapID;
    gameData            = null;

    constructor(
        private userSvc      : UserServiceService,
        private tokenSvc     : TokenStorageService,
        private nonSecAPIsvc : NonSecureAPIService,
        private secAPIsvc    : SecureAPIService
    ){
        this.activeDevices = new BehaviorSubject({})
    }

    ngOnInit(): void {

        this.secAPIsvc.getActiveGamesByFieldProfile(this.userSvc.getToken(), this.userSvc.getFieldProfileID()).subscribe(

            activeGameConfig=>{

                if(activeGameConfig){
                    // Active games route starts query with fieldProfileID and
                    // returns the gameConfig, which contains the game
                    // Look for the game that is not ended
                    let game = activeGameConfig["games"].shift()

                    if (game) {

                        this.gameData        = game;
                        this.gameBoardActive = true;
                        this.gameInProgress  = true;

                        activeGameConfig["deviceMap"] = game.devices;

                        this.setSelectedGameConfig(activeGameConfig);
                    }
                }
            },
            err=>{
               //show message on page no games are active.
            }
         )
         // This sets the dropdown menu with available game configurations
         this.secAPIsvc.getGameConfigs(this.userSvc.getToken(),this.userSvc.getFieldProfileID()).subscribe(
             savedConfigs => {
                 this.gameModes = savedConfigs;
             }
         )

    }

    changeGame(gameConfig){
        // When a dropdown menu selection is made - update the gameboard
        let gameConfigID = gameConfig.target.value;
        this.selectedGameMode = this.gameModes.find(ele => ele.id == gameConfigID);

        this.setSelectedGameConfig(this.selectedGameMode);
    }

    startGame(){
        // On start game, push all device configuration data to each
        // device to baseline all configurations from saved configs
        let mode = this.selectedGameMode;

        this.secAPIsvc.startGame(this.userSvc.getToken(), mode.id).subscribe(

            data => {this.gameData = data},
            err => {console.log(err)}
        )

        this.setSelectedGameConfig(mode);
        // gameInProgress is used to show or hide game buttons (pause/end)
        this.gameInProgress = true;
    }


    setSelectedGameConfig(mode){

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


    // Device is passed in from device-list.component
    // I use this method to check for active game and assign
    // a gameID to the device - this will allow an "inactive"
    // device to become "active"
    nodeConfigs(device){

      if (this.gameInProgress && this.gameData.id) {

        device.gameID = this.gameData.id

      }
    }


    pauseGame() {

        let paused = !this.gameData.is_paused;

        this.secAPIsvc.pauseGame(this.userSvc.getToken(), {"gameID":this.gameData.id, "is_paused":paused}).subscribe(
            data => this.gameData = data
        )
    }


    endGame(){

        let safe = confirm("Do you really want to end the game?");

        if (safe) {

            // TODO: Why do we use tokenSvc for game data?
            this.tokenSvc.endGame();

            this.secAPIsvc.endGame(this.userSvc.getToken(), this.gameData.id).subscribe(
                data => {
                        this.gameInProgress = false;
                        this.gameBoardActive = false;
                        this.gameData = null;
                    })
        }
    }
}
