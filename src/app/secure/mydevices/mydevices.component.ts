import { Component, OnInit } from '@angular/core';
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

  userSvc: UserServiceService;
  tokenSvc: TokenStorageService;

  devices: BehaviorSubject<any>;

  captureEnable:boolean;
  bombEnable:boolean;
  constructor(
    userService: UserServiceService,
    tokenService: TokenStorageService,
    private router: Router) {
    this.userSvc = userService;
    this.tokenSvc = tokenService;
      this.devices=new BehaviorSubject({});
  }

  ngOnInit(): void {
    this.userSvc.getUserData().subscribe(userData => {
      this.devices.next(userData.fieldProfiles[0].devices);
    })
  }
  
  pointScale(index,value){
    this.devices.subscribe(data=>{
      data[index].point_scale = value;
    })
  }
  medicTime(index,value) {
    this.devices.subscribe(data=>{
      data[index].med_time = value;
    })
  }
  enableMedic(num) { 
    this.devices.subscribe(data=>{
      if(data[num].allow_medic){
        data[num].allow_medic = false;
      }else{
        data[num].allow_medic = true;
      }
    })
    
  }
  enableBomb(){ 
      this.bombEnable=!this.bombEnable
  }
  enableCapture(){
    this.captureEnable=!this.captureEnable

  }
  armTime(index,value){
    this.devices.subscribe(data=>{
      data[index].arm_time = value;
    })
  }
  capTime(index,value){
    this.devices.subscribe(data=>{
      data[index].cap_time = value;
    })
  }
  bombTime(index,value){
    this.devices.subscribe(data=>{
      data[index].bomb_time = value;
    })
  }
  difuseTime(index,value){
    this.devices.subscribe(data=>{
      data[index].diff_time = value;
    })
  }
  capasst(index,value){
    this.devices.subscribe(data=>{
      data[index].cap_asst = value;
    })
  }
}

// <!-- 
// //below are constants
// address: "0013A20041A66B3F"
// id: 7

// //below change per game
// location: null
// deactivated: null
// gameActions: []
// gameID: null


// //below can change anytime during game


// point_scale: 60 -range


// allow_medic: true - switch
// med_time: 3 -range


// arm_time: 1 - range
// bomb_status: 189 ???
// bomb_time: 18 - range
// diff_time: 12 - range


// cap_asst: 20 -range
// cap_time: 1 - range


// config: 10 ?
// stable: 1 -range

// fieldProfileID: 1
// lastChange: "Sun, 04 Apr 2021 17:40:43 GMT"
// creationDate: "Sat, 27 Mar 2021 00:35:08 GMT"


// team: "3333cc"
// teamID: null -->