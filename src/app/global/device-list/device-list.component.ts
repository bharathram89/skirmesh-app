import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { TokenStorageService } from 'src/service/token-storage.service';
import { UserServiceService } from 'src/service/user-service.service';
import { combineLatest, of } from 'rxjs';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})

export class DeviceListComponent implements OnInit {
  p: number = 1;

  userSvc: UserServiceService;
  tokenSvc: TokenStorageService;

  devices:any;// BehaviorSubject<any>;

  REGISTER = 0x01;
  QUERY = 0x02;
  PAIR_UID = 0x03;
  CAPTURE = 0x0A;
  MEDIC = 0x0E;
  BOMB = 0xBB;


  @Input() config;
  mode: String;
  locationsToSet=[];
  setLocation=[];
  leftLocations=[];
  teamsAvaliable=[];
  selectedLocations= [];
  constructor(
    userService: UserServiceService,
    tokenService: TokenStorageService,
    private router: Router) {
    this.userSvc = userService;
    this.tokenSvc = tokenService;
    // this.devices = ''//new BehaviorSubject({});
    // this.locationsToSet = new BehaviorSubject({});
    // this.setLocation = new BehaviorSubject({});
    // this.teamsAvaliable = new BehaviorSubject([])
    // this.selectedLocations = new BehaviorSubject([])
  }


  ngOnInit(): void {

    this.config.subscribe(
      modeConfig => {
        this.userSvc.getUserData().subscribe(userData => {

          // console.log(modeConfig, "config", userData.fieldProfiles[0].devices)
          this.mode = modeConfig.mode;
          this.selectedLocations=[];//this resets the selcted locations
          if (modeConfig.mode == 'createMode') {
            this.locationsToSet=modeConfig.location;//set locations
            if (modeConfig.teams) {
              const teams = [];
              modeConfig.teams.forEach(element => {
                console.log(element, element.value.name)
                teams.push({ 'name': element.value.name })
              });
              this.teamsAvaliable=teams//set teams
            }
          }
          this.devices=this.makeDeviceModals(userData.fieldProfiles[0].devices);
          
        })

      }
    )
  }
  isSelectedValue(){
  }
  makeDeviceModals(alldevices): DeviceSettings[] {
    let arr: DeviceSettings[]=[];
    alldevices.forEach(element => {
      let med = new MedicSettings(null)
      let bmb = new BombSettings(null,null,null)
      let cap = new CaptureSettings(null,null,null,null)
      let ds = new DeviceSettings(element.address,null,med,bmb,cap)
      arr.push(ds)
    });

    return arr;
  }
  isNodeEnabled(index) { 
    var enabled = false; 
      if(this.devices[index].location){
        enabled = true;
      } 
    return enabled;
  }
  locationSelected(event,index) { 
    this.selectedLocations.push(event.target.value)
    this.devices[index].location = event.target.value;
  }
  getLocationList(){
    let arr=[];
    // combineLatest([this.locationsToSet ]).subscribe(
    //   ([locations])=>{
        this.selectedLocations
        // console.log(locations,' locations ',setLocations)
        if(this.locationsToSet){
          this.locationsToSet.forEach(loc => {
             // setLocations.includes(loc.name)
             console.log(loc.name,"inner",this.selectedLocations,' split ',this.selectedLocations,' split ',this.selectedLocations.indexOf(loc.name));
             // setLocations.includes(loc.name)
             // return setLocations.indexOf(loc.name) !== -1
             if(this.selectedLocations.indexOf(loc.name) == -1){
               if(arr) {
                arr.push({'name':loc.name, 'isDisabled': false}); 
               }
             } else {
              if(arr) {
              arr.push({'name':loc.name, 'isDisabled': true});
              }
             }
          }); 
          console.log(arr,"filtered list 2")
        }else{
          arr = this.locationsToSet;
        }
      
    

    console.log(arr,"filtered list")
    // let arr = this.locationsToSet.subscribe(
    //   locs=>{
        
    //     // locs.filter(loca=>{})
    //   }
    // )
    return arr;
  }

  enableAllowMedic(num) { 
      if (this.devices[num].allow_medic) {
        this.devices[num].allow_medic = false;
      } else {
        this.devices[num].allow_medic = true;
      } 
  }
  enableMedic(num) {
 
      if (!this.isMedicEnabled(num)) {
        this.devices[num].config = this.MEDIC;
      } 
  }
  isMedicEnabled(num) {

    var configured = false;
 
      configured = this.devices[num].config == this.MEDIC; 
    return configured
  }


  enableQuery(num) {
    this.devices[num].config = this.QUERY;
  }
  isQueryEnabled(num) {

    var configured = false;

      configured = this.devices[num].config == this.QUERY;
    return configured
  }



  enableRegister(num) {
      if (!this.isRegisterEnabled(num)) {
        this.devices[num].config = this.REGISTER;
      }
  }
  isRegisterEnabled(num) {

    var configured = false;

      configured = this.devices[num].config == this.REGISTER;
    return configured
  }

  enableBomb(num) {

      if (!this.isBombEnabled(num)) {
        this.devices[num].config = this.BOMB;
      }
  }
  isBombEnabled(num) {

    var configured = false;
      configured = this.devices[num].config == this.BOMB;
    return configured
  }

  enableCapture(num) {

      if (!this.isCaptureEnabled(num)) {
        this.devices[num].config = this.CAPTURE;
      }
  }
  isCaptureEnabled(num) {

    var configured = false;

      configured = this.devices[num].config == this.CAPTURE;

    return configured
  }


  pointScale(index, value) {

    var int_map = [0x0f, 0x14, 0x1e, 0x28, 0x30, 0x3c,
      0x4b, 0x50, 0x64, 0x78, 0x96, 0xf0].reverse()

      this.devices[index].point_scale = int_map[value];
  }
  convertPointScale(value) {

    var new_val

    new_val = 60 / value + " x"

    return new_val

  }
  getTimeIndex(value) {

    var int_map = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
      15, 18, 21, 24, 27, 30,
      36, 42, 48, 54, 60, 66, 72, 78, 84, 90,
      120, 150, 180, 210, 240];

    return int_map.indexOf(value)
  }

  getPercIndex(value) {

    var int_map = [0x64, 0x32, 0x19, 0x14, 0x0a,
      0x05, 0x04, 0x02, 0x01];

    return int_map.indexOf(value)
  }

  getScaleIndex(value) {

    var int_map = [0x0f, 0x14, 0x1e, 0x28, 0x30, 0x3c,
      0x4b, 0x50, 0x64, 0x78, 0x96, 0xf0].reverse();

    return int_map.indexOf(value)
  }

  medicTime(index, value) {

    var int_map = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,          // Use discrete values to convert
      15, 18, 21, 24, 27, 30,                   // to simple times used for gameplay
      36, 42, 48, 54, 60, 66, 72, 78, 84, 90,
      120, 150, 180, 210, 240]                 // TODO: convert text based on range

    
      this.devices[index].med_time = int_map[value];
    
  }

  convertTime(value) {

    var new_val

    if (value < 12) {
      new_val = value * 10 + " sec"
    }
    else {
      new_val = value * 10 / 60 + " min"
    }

    return new_val

  }

  armTime(index, value) {

    var int_map = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

      this.devices[index].arm_time = int_map[value];
  }
  capTime(index, value) {

    var int_map = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
      15, 18, 21, 24, 27, 30,
      36, 42, 48, 54, 60, 66, 72, 78, 84, 90,
      120, 150, 180, 210, 240]

      this.devices[index].cap_time = int_map[value];
  }
  bombTime(index, value) {

    var int_map = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
      15, 18, 21, 24, 27, 30,
      36, 42, 48, 54, 60, 66, 72, 78, 84, 90,
      120, 150, 180, 210, 240]

      this.devices[index].bomb_time = int_map[value];
  }
  difuseTime(index, value) {

    var int_map = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

      this.devices[index].diff_time = int_map[value];
  }
  capasst(index, value) {

    var int_map = [0x64, 0x32, 0x19, 0x14, 0x0a,
      0x05, 0x04, 0x02, 0x01]

      this.devices[index].cap_asst = int_map[value];
  }

  convertPerc(value) {

    var new_val

    return 100 / value

  }
  
}

export class DeviceSettings {
  address: string;
  location: string;
  medic: MedicSettings;
  bomb: BombSettings;
  capture: CaptureSettings;
  constructor(
    address: string,
    location: string,
    medic: MedicSettings,
    bomb: BombSettings,
    capture: CaptureSettings
  ) {
    this.address = address;
    this.location = location;
    this.medic = medic;
    this.bomb = bomb;
    this.capture = capture;
  }
}
export class MedicSettings {
  id:number;
  team: string;
  constructor(
    team: string
  ) {
    this.team = team;
  }
}
export class BombSettings {
  armTime: number;
  fuseTime: number;
  defuseTime: number;
  constructor(
    armTime: number,
    fuseTime: number,
    defuseTime: number
  ) {
    this.armTime = armTime;
    this.fuseTime = fuseTime;
    this.defuseTime = defuseTime;
  }
}
export class CaptureSettings {
  stablizeTime: number;
  captureAssist: number;
  pointScale: number;
  allowMedic: boolean;
  constructor(
    stablizeTime: number,
    captureAssist: number,
    pointScale: number,
    allowMedic: boolean,
  ){
    this.stablizeTime = stablizeTime;
    this.captureAssist = captureAssist;
    this.pointScale = pointScale;
    this.allowMedic = allowMedic;
  }
}
