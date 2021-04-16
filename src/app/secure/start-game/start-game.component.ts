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
  activeNodesList;
  adminNodesList;
  teams;
  mapID;

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
  }
  startGame(){
    this.setSelectedGameConfig();

    this.gameBoardCollapsed= true;
  }
   
  setSelectedGameConfig(){
    let mode = this.gameModes.find(ele=> ele.description == this.selectedGameMode);
    this.teams = mode.teams;
    this.mapID = mode.mapID
    let config = mode.deviceMap
    config=  config.replace(/\\/g,'').substring(1, config.length);//remove \ and remove first quote
    config = JSON.parse(config.substring(0,config.length-1))// remove last quote and parse

    this.activeNodesList = config.filter(ele=>ele.location);

    this.adminNodesList = config.filter(ele=>!ele.location);
    
    console.log(this.gameModes," all game modes",  config,this.activeNodesList,this.adminNodesList)
    this.activeNodes.next({
      mode:"activeNodes",
      teams:this.teams,
      location:this.mapID,
      nodeConfigs:this.activeNodesList
    })
    this.adminNodes.next({
      mode:"adminNodes",
      location:this.mapID,
      teams:this.teams,
      nodeConfigs: this.adminNodesList
    })
    
  }
  nodeConfigs(e){

    console.log(e.replace('makeNodeAdmin',''),"recived to move in start game",this.activeNodesList)
    if(e.includes('makeNodeAdmin')){ 

      this.adminNodesList.push(JSON.parse(e.replace('makeNodeAdmin','')));
      this.adminNodes.next({
        mode:"adminNodes",
        location:this.mapID,
        teams:this.teams,
        nodeConfigs: this.adminNodesList
      })

      this.activeNodes.asObservable().forEach(data=>{
        console.log('actie nodes',data)
        data.node
      })




      
    }else if (e.includes('makeNodeActive')){

      this.activeNodesList.push(JSON.parse(e.replace('makeNodeActive','')));
      this.activeNodes.next({
        mode:"activeNodes",
        location:this.mapID,
        teams:this.teams,
        nodeConfigs: this.adminNodesList
      })

    }
    
  }
}
