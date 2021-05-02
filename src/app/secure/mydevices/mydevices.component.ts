import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { TokenStorageService } from 'src/service/token-storage.service';
import { UserServiceService } from 'src/service/user-service.service';
 

@Component({
   selector: 'app-mydevices',
   templateUrl: './mydevices.component.html',
   styleUrls: ['./mydevices.component.scss']
})
export class MydevicesComponent implements OnInit {
  
   activeGame = false;
   map;
   teams;
   tokenSvc: TokenStorageService
   constructor(tokenService: TokenStorageService) {
      this.tokenSvc = tokenService;
   }
   ngOnInit() {
      let activeGame = JSON.parse(this.tokenSvc.getGameInfo());
      if (activeGame) {
         this.activeGame = true;
         this.map = activeGame.mapID;
         this.teams = activeGame.teams;
         console.log(activeGame, "activeGame")
      } else {

      }
   }

   //TODO: WE NEED TO STORE THIS SVG IN DB AND PULL IT DOWN TO SET.
   ngAfterViewInit() {
 


   } 
}