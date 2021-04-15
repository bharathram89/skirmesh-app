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
  gameModes=[];
  userSvc:UserServiceService;
  selectedGameMode; 
  adminNodes: BehaviorSubject<any>;
  activeNodes: BehaviorSubject<any>;
  constructor(userService:UserServiceService) {
    this.userSvc = userService;
    this.activeNodes = new BehaviorSubject({})
    this.adminNodes = new BehaviorSubject({})
   }

  ngOnInit(): void { 
    this.gameModes = this.userSvc.getGameModes();  
  }
  changeGame(e){
    this.selectedGameMode = e.target.value;
    let mode = this.gameModes.find(ele=> ele.description == this.selectedGameMode)
    let config = mode.deviceMap
    config=  config.replace(/\\/g,'').substring(1, config.length);//remove \ and remove first quote
    config = JSON.parse(config.substring(0,config.length-1))// remove last quote and parse

    let nodesWithLocationSet = config.filter(ele=>ele.location);

    let nodesWithoutLocationSet = config.filter(ele=>!ele.location);
    
    console.log(this.gameModes," all game modes",  config,nodesWithLocationSet,nodesWithoutLocationSet)
    this.activeNodes.next({
      mode:"activeNodes",
      teams:mode.teams,
      location:mode.mapID,
      nodeConfigs:nodesWithLocationSet
    })
    this.adminNodes.next({
      mode:"adminNodes",
      location:mode.mapID,
      teams:mode.teams,
      nodeConfigs: nodesWithoutLocationSet
    })
    this.gameBoardCollapsed= true;
  }
  getActiveNodesFromConfig(){
    
  }
  getAdminNodesFromConfig(){
    
  }

  nodeConfigs(e){

  }
}
