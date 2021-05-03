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
   teams;
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
      console.log(gameID.target.value,"selected game")
      let gameConfigID = this.findGameConfigIDForGame(gameID.target.value).gameConfigID;
      this.deviceSvc.getGameConfigsByID(this.tokenSvc.getToken(),gameConfigID ).subscribe(
         gameConfig=>{
            console.log(gameConfig, "selected COnfigs details")
            this.activeGame = true;
            this.gameConfig = gameConfig;
            this.teams = gameConfig["teams"];
            this.map = gameConfig['mapID'];
            this.description = gameConfig['description'];
            this.devices = this.findDevicesForGameID(gameConfigID);
            console.log(this.devices,"finsl divs")

         }
      )
   }
   findGameConfigIDForGame(gameID){
      return this.activeGames.find(ele => ele.id == gameID)
   }
   findDevicesForGameID(gameID){
      return this.activeGames.filter(ele=> ele.gameConfigID == gameID && ele.devices.length > 0)[0].devices;
   }
   //TODO: WE NEED TO STORE THIS SVG IN DB AND PULL IT DOWN TO SET.
   ngAfterViewInit() {

   }
}
