import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { DeviceService } from 'src/service/device.service';
import { GameService } from 'src/service/game.service';
import { TokenStorageService } from 'src/service/token-storage.service';
import { UserServiceService } from 'src/service/user-service.service';


@Component({
   selector: 'app-mydevices',
   templateUrl: './mydevices.component.html',
   styleUrls: ['./mydevices.component.scss']
})
export class MydevicesComponent implements OnInit {
   gameConfig;


   devices;
   activeGames;
   activeGame = false;
   map;
   teams = [];
   description;
   currentTab = 'map'
   tokenSvc: TokenStorageService;
   gameSvc:GameService;
   deviceSvc:DeviceService;
   constructor(tokenService: TokenStorageService, gameService:GameService,deviceService :DeviceService) {
      this.tokenSvc = tokenService;
      this.gameSvc = gameService;
      this.deviceSvc = deviceService;
   }

   ngOnInit() {
      this.gameSvc.getGames(this.tokenSvc.getToken()).subscribe(
         activeGames=>{

            this.activeGames = activeGames;
            console.log(this.activeGames,"active Games")
         },
         err=>{
            //show message on page no games are active.
         }
      )
   }

   // getGamesWithActiveDevices(listOfGames){
   //    return listOfGames.filter(ele=>ele.devices.length>0)
   // }

   changeGameTab(tabToChangeTo){
      this.currentTab = tabToChangeTo;
   }

   selectActiveGame(gameID){
      //need to reset teams info.
      this.teams = [];

      console.log(gameID.target.value,"selected game")
      let gameConfigID = this.findGameConfigIDForGame(gameID.target.value).gameConfigID;
      this.deviceSvc.getGameConfigsByID(this.tokenSvc.getToken(),gameConfigID ).subscribe(
         gameConfig=>{
            console.log(gameConfig, "selected COnfigs details")
            this.activeGame = true;
            this.gameConfig = gameConfig;
            gameConfig["teams"].forEach(team => {
               let teamObj = {id:team.id,name:team.name,color:'#'+team.color,players:[]}
               team.teamPlayers.forEach(player => {
                  teamObj.players.push({rfID:player.rfidID
                                       ,is_alive:player.is_alive
                                       ,lastAction:this.findLastAction(team.id,player.rfidID,team)
                                       ,lastLocation:this.findLastLocation(team.id,player.rfidID,team)
                                       ,totalPoints:this.findTotalPoints(team.id,player.rfidID,team)
                                    })
               });
               this.teams.push(teamObj)
            });
            
            this.map = gameConfig['mapID'];
            this.description = gameConfig['description'];
            this.devices = this.findDevicesForGameID(gameConfigID);
            console.log(this.devices,this.teams,"finsl divs")


         }
      )
   }
   findGameConfigIDForGame(gameID){
      return this.activeGames.find(ele => ele.id == gameID)
   }
   findDevicesForGameID(gameID){
      return this.activeGames.filter(ele=> ele.gameConfigID == gameID && ele.devices.length > 0)[0].devices;
   }
   findLastActionTime(teamID,rfID){
      let teamInfo = this.teams.find(ele=>ele.id = teamID);
      let gameActions = teamInfo.gameActions;
      let userActions = gameActions.filter(action => action.rfidID= rfID);
      console.log(userActions,"findLastActionTime")
      return userActions[0].creationDate
   }
   findLastAction(teamID,rfID,team){ 
      let gameActions = team.gameActions;
      let userActions = gameActions.filter(action => action.rfidID= rfID);
      console.log(userActions,"findLastAction")
      return  userActions[0].actionID 
   }

   findTotalPoints(teamID,rfID,team){ 
      let gameActions = team.gameActions;
      let userActions = gameActions.filter(action => action.rfidID= rfID);
      let totalPoints = 0;
      userActions.filter(action => action.points ? totalPoints = totalPoints + action.points:totalPoints = totalPoints )
      console.log(totalPoints,"findTotalPoints")
      return  totalPoints
   }

   findLastLocation(teamID,rfID,team){ 
      let gameActions = team.gameActions;
      let userActions = gameActions.filter(action => action.rfidID= rfID);
      console.log(userActions,"findLastLocation")
      return  userActions[0].deviceID 
   }
   //TODO: WE NEED TO STORE THIS SVG IN DB AND PULL IT DOWN TO SET.
   ngAfterViewInit() {

   }
}
