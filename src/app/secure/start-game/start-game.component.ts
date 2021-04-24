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
import { BombSettings, CaptureSettings, DeviceSettings, MedicSettings, QueryPlayerSettings, RegisterPlayer } from 'src/app/global/node.modal';
import { AuthService } from 'src/service/auth.service';

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
  gameModes;
  userSvc:UserServiceService;
  deviceSvc:DeviceService;
  tokenSvc: TokenStorageService;
  authSvc:AuthService;
  selectedGameMode;
  adminNodes: BehaviorSubject<any>;
  activeNodes: BehaviorSubject<any>;
  activeNodesList;
  adminNodesList;
  teams;
  mapID;

  constructor(userService:UserServiceService,deviceService:DeviceService,tokenService :TokenStorageService,authService:AuthService) {
    this.authSvc = authService;
    this.userSvc = userService;
    this.deviceSvc = deviceService;
    this.tokenSvc = tokenService;
    this.activeNodes = new BehaviorSubject({})
    this.adminNodes = new BehaviorSubject({})
   }

  ngOnInit(): void {
    this.deviceSvc.getGameConfigs(this.userSvc.getToken(),this.userSvc.getFieldProfileID()).subscribe(savedConfigs=>{
      let gameData = JSON.parse(this.tokenSvc.getGameInfo());
      this.gameModes =  savedConfigs;//this.userSvc.getGameModes();
      if(gameData){
          console.log(gameData,"data")
        this.setSelectedGameConfig(gameData);
        this.gameBoardCollapsed= true;

      }
    })


  }
  changeGame(e){
    this.selectedGameMode = e.target.value;
  }
  startGame(){
    let mode = this.gameModes.find(ele=> ele.description == this.selectedGameMode);
    this.deviceSvc.startGame(this.userSvc.getToken(),mode.id).subscribe(
      data=>{
        this.authSvc.getUser(this.tokenSvc.getToken()).subscribe(latestDeviceData=>{
          this.userSvc.setUserData(latestDeviceData);

          // console.log(latestDeviceData['user'].fieldProfiles[0].devices,'start stuff',data,"temp",mode)
          mode.deviceMap = latestDeviceData['user'].fieldProfiles[0].devices
          console.log(latestDeviceData['user']," same some old")
          this.setSelectedGameConfig(mode);
          this.gameBoardCollapsed= true;
          this.tokenSvc.saveGameInfo(JSON.stringify(mode));
          this.gameBoardCollapsed= true;
        },
        err=>{
          console.log(err);
          //show error message saying game cant be started
        })
      },
      err=>{
        console.log(err);
        //show error message saying game cant be started
      }
    )
  }

  setSelectedGameConfig(mode){
    this.teams = mode.teams;
    this.mapID = mode.mapID
    let config = mode.deviceMap
    console.log(config,"deviceMap")
    // config=  config.replace(/\\/g,'').substring(1, config.length);//remove \ and remove first quote
    // config = JSON.parse(config)// remove last quote and parse
    let arr =[];
    config.forEach(element => {
        console.log("HERE", element, this.mapID);
      arr.push(this.apiToUiModel(element,this.userSvc.findMapName(this.mapID)))
    });

    this.activeNodesList = arr.filter(ele=>ele.location);

    this.adminNodesList = arr.filter(ele=>!ele.location);

    console.log(this.gameModes," all game modes",  arr,this.activeNodesList,this.adminNodesList)
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


  private REGISTER = 0x01;
  private QUERY = 0x02;
  private PAIR_UID = 0x03;
  private CAPTURE = 0x0A;
  private MEDIC = 0x0E;
  private BOMB = 0xBB;
  apiToUiModel(deviceConfig,mapid){
    // console.log(deviceConfig,"apiToUiModel")
    let med,cap,bomb,query,reg;
    if(deviceConfig.config == this.MEDIC){
      med=new MedicSettings(true)
    }else{
      med=new MedicSettings(false)
    }

    if(deviceConfig.config == this.CAPTURE){
      cap=new CaptureSettings(true,deviceConfig.cap_time,deviceConfig.cap_asst,deviceConfig.point_scale,deviceConfig.allow_medic)
    }else{
      cap=new CaptureSettings(false,deviceConfig.cap_time,deviceConfig.cap_asst,deviceConfig.point_scale,deviceConfig.allow_medic)
    }

    if(deviceConfig.config == this.BOMB){
      bomb=new BombSettings(true,deviceConfig.arm_time,deviceConfig.bomb_time,deviceConfig.diff_time)
    }else{
      bomb=new BombSettings(false,deviceConfig.arm_time,deviceConfig.bomb_time,deviceConfig.diff_time)
    }

    if(deviceConfig.config == this.QUERY){
      query = new QueryPlayerSettings(true)
    }else{
      query = new QueryPlayerSettings(false)
    }

    if(deviceConfig.config == this.REGISTER){
      reg = new RegisterPlayer(true,null)
    }else{
      reg = new RegisterPlayer(false,null)
    }
    let loc = deviceConfig.location? this.userSvc.findLocationName(mapid,deviceConfig.location):null;
    let ds = new DeviceSettings(deviceConfig.id,deviceConfig.enabled,deviceConfig.address,loc,deviceConfig.med_time,med,bomb,cap,reg,query)
    return ds;
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
     }else if (e.includes('endGame')){
      this.tokenSvc.endGame();
      this.gameBoardCollapsed=false;
     }

  }
}
