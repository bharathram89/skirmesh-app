import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
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


   devices;
   activeGames;
   activeGame = false;
   map;
   teams = [];
   description;
   currentTab = 'map'
   tokenSvc: TokenStorageService;
   gameSvc: GameService;
   deviceSvc: DeviceService;
   userSvc: UserServiceService;
   constructor(tokenService: TokenStorageService, gameService: GameService, deviceService: DeviceService, userService: UserServiceService) {
      this.tokenSvc  = tokenService;
      this.gameSvc   = gameService;
      this.deviceSvc = deviceService;
      this.userSvc   = userService;
   }

   ngOnInit() {
      this.gameSvc.getGames(this.tokenSvc.getToken()).subscribe(
         activeGames => {

            this.activeGames = activeGames;
            console.log(this.activeGames, "ACTIVE GAMES IN MY DEVICES")
         },
         err => {
            //show message on page no games are active.
         }
      )
   }

   // getGamesWithActiveDevices(listOfGames){
   //    return listOfGames.filter(ele=>ele.devices.length>0)
   // }

   changeGameTab(tabToChangeTo) {
      this.currentTab = tabToChangeTo;
   }

   selectActiveGame(gameID) {
      //need to reset teams info.
      // this.teams = [];
      let gameConfigID = this.findGameConfigIDForGame(gameID.target.value).gameConfigID;
       combineLatest([this.deviceSvc.getGameConfigsByID(this.tokenSvc.getToken(),gameConfigID ),this.gameSvc.getGameStats(gameID.target.value)])
       .subscribe(([gameConfig,stats])=>{
              this.activeGame = true;
              console.log(this.devices,this.teams,"finsl divs",stats,gameConfig)
         gameConfig["teams"].forEach(team => {
            let teamObj = {id:team.id,name:team.name,color:'#'+team.color,score:this.findTeamScore(stats['team_stats'],team['id']),players:[]}
            team.teamPlayers.forEach(player => {
               teamObj.players.push({rfID:player.rfidID
                                    ,is_alive:player.is_alive
                                    ,lastAction:this.findLastAction( player.rfidID,stats['player_stats'])
                                    ,lastLocation:this.findLastLocation( player.rfidID,stats['player_stats'])
                                    ,totalPoints:this.findTotalPoints( player.rfidID,stats['player_stats'])
                                 })
            });
            this.teams.push(teamObj)
         });

         this.map = gameConfig['mapID'];
         this.description = gameConfig['description'];
         this.devices = this.findDevicesForGameID(gameConfigID);

       })



   }
   findTeamScore(stats,teamID) {
      let gameActions = stats[0].data
      let total = 0;
      console.log(stats,"findTeamScore")
      gameActions ? gameActions.filter(action => action.points ? total = total + action.points : total = total):null;
      
      return total
   }
   findGameConfigIDForGame(gameID) {
      return this.activeGames.find(ele => ele.id == gameID)
   }
   findDevicesForGameID(gameID) {
      return this.activeGames.filter(ele => ele.gameConfigID == gameID && ele.devices.length > 0)[0].devices;
   } 
   findLastAction( rfID, team) {
      let gameActions = team[0].data;
      let userActions = gameActions? gameActions.filter(action => action.rfidID == rfID):null;
      // console.log(userActions,"findLastAction")
      return userActions && userActions[0] && userActions[0].actionID ? userActions[0].actionID : 'Interact with a Node'
   }

   findTotalPoints( rfID, team) {
      let gameActions = team[0].data;
      let userActions = gameActions ? gameActions.filter(action => action.rfidID == rfID && action.points):null;
      let totalPoints = 0;
      userActions? userActions.filter(action => action.points ? totalPoints = totalPoints + action.points : totalPoints = totalPoints):null;
      // console.log(totalPoints,"findTotalPoints")
      return totalPoints
   }

   findLastLocation(  rfID, team) {
      let gameActions = team[0].data;
      let userActions = gameActions ? gameActions.filter(action => action.rfidID == rfID):null;
      // console.log(userActions,"findLastLocation")
      return userActions && userActions[0] && userActions[0].deviceID ? userActions[0].deviceID : 'Interact with a Node'
   }
   //TODO: WE NEED TO STORE THIS SVG IN DB AND PULL IT DOWN TO SET.
   ngAfterViewInit() {

   }
}
