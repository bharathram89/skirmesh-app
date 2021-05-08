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
   LOCATIONS;

   teams   = [];
   players = [];

   description;
   currentTab = 'map'
   tokenSvc   : TokenStorageService;
   gameSvc    : GameService;
   deviceSvc  : DeviceService;
   userSvc    : UserServiceService;

   constructor(
        tokenService  : TokenStorageService,
        gameService   : GameService,
        deviceService : DeviceService,
        userService   : UserServiceService) {

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
    if(tabToChangeTo == "map"){
       document.getElementById("teamScore").classList.remove('active');
       document.getElementById("EventsTracker").classList.remove('active');
    }else if(tabToChangeTo == "teamScore"){
       document.getElementById("map").classList.remove('active');
       document.getElementById("EventsTracker").classList.remove('active'); 
    }else if(tabToChangeTo == "EventsTracker"){  
       document.getElementById("teamScore").classList.remove('active');
       document.getElementById("map").classList.remove('active');
    }
    document.getElementById(tabToChangeTo).classList.add('active');
 }


    selectActiveGame(gameID) {
      //need to reset teams info.
      // this.teams = [];
        let gameConfigID = this.findGameConfigIDForGame(gameID.target.value).gameConfigID;

        combineLatest([this.deviceSvc.getGameConfigsByID(this.tokenSvc.getToken(), gameConfigID),
                                                       this.gameSvc.getGameStats(gameID.target.value)]).subscribe(
            ([gameConfig,stats]) => {

                this.activeGame = true;

                stats["player_stats"].forEach(player => {

                    let playerObj = ({
                                       teamID       : player.teamID,
                                       name         : player.name,
                                       is_alive     : player.is_alive, // This is not available
                                       lastAction   : player.data[player.data.length-1].actionID, // Need to query actions
                                       lastLocation : this.findLastLocation( player.data[player.data.length-1].deviceID),
                                       totalPoints  : player.data.reduce((prev, next) => prev + next.points, 0)
                                     })
                    this.players.push(playerObj)
                });


                stats["team_stats"].forEach(team => {

                    let teamObj = {
                                    teamID  : team.id,
                                    name    : team.name,
                                    color   : '#'+team.color,
                                    score   : team.data.reduce((prev, next) => prev + next.points, 0),
                                    players : this.players.filter( player => player.teamID == team.id )
                                  }

                    this.teams.push(teamObj)
                });

                this.map = gameConfig['mapID'];
                this.description = gameConfig['description'];
                this.devices = this.findDevicesForGameID(gameConfigID);

                console.log(":: POST GAME SELECT DATA ::", ":: TEAMS ::", this.teams, ":: PLAYERS ::", this.players)

            })
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


    findLastLocation(deviceID) {
        //TODO: Grab device data and filter for location
        return 'Interacted with device ' + deviceID
    }

    //TODO: WE NEED TO STORE THIS SVG IN DB AND PULL IT DOWN TO SET.
    ngAfterViewInit() {

    }
}
