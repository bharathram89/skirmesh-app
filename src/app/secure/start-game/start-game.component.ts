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
  deviceSvc:DeviceService;
  selectedGameMode; 
  adminNodes: BehaviorSubject<any>;
  activeNodes: BehaviorSubject<any>;
  activeNodesList;
  adminNodesList;
  teams;
  mapID;

  constructor(userService:UserServiceService,deviceService:DeviceService) {
    this.userSvc = userService;
    this.deviceSvc = deviceService;
    this.activeNodes = new BehaviorSubject({})
    this.adminNodes = new BehaviorSubject({})
   }

  ngOnInit(): void { 
    this.gameModes = this.userSvc.getGameModes(); 
    
    //see if any active games open
  }
  changeGame(e){
    this.selectedGameMode = e.target.value;
  }
  startGame(){
    this.setSelectedGameConfig();
    // this.deviceSvc.startGame(this.userSvc.getToken(),)
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

      let movedNode =JSON.parse(e.replace('makeNodeAdmin',''));
      
      this.adminNodesList.push(movedNode);
      this.adminNodes.next({
        mode:"adminNodes",
        location:this.mapID,
        teams:this.teams,
        nodeConfigs: this.adminNodesList
      })
      this.activeNodesList = this.activeNodesList.filter(data=> data.address !=movedNode.address )
       console.log(this.activeNodesList,"updated active list")
       this.activeNodes.next({
        mode:"activeNodes",
        teams:this.teams,
        location:this.mapID,
        nodeConfigs:this.activeNodesList
      })


      
    }else if (e.includes('makeNodeActive')){
      let movedNode =JSON.parse(e.replace('makeNodeActive',''));
      this.activeNodesList.push(movedNode);
      this.activeNodes.next({
        mode:"activeNodes",
        location:this.mapID,
        teams:this.teams,
        nodeConfigs: this.activeNodesList
      })

      this.adminNodesList = this.adminNodesList.filter(data=>!data.address || data.address !=movedNode.address )
      console.log(this.adminNodesList,"updated admin list",this.activeNodesList)
      this.adminNodes.next({
        mode:"adminNodes",
        location:this.mapID,
        teams:this.teams,
        nodeConfigs: this.adminNodesList
      })
    }
    
  }
}
