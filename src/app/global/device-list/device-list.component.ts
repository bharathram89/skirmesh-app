import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { TokenStorageService } from 'src/service/token-storage.service';
import { UserServiceService } from 'src/service/user-service.service';

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

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})

export class DeviceListComponent implements OnInit {
  p: number = 1;

  userSvc: UserServiceService;
  tokenSvc: TokenStorageService;

  devices: BehaviorSubject<any>;

  REGISTER = 0x01;
  QUERY = 0x02;
  PAIR_UID = 0x03;
  CAPTURE = 0x0A;
  MEDIC = 0x0E;
  BOMB = 0xBB;


  @Input() config;
  mode: String;
  locationsToSet: BehaviorSubject<any>;
  setLocation: BehaviorSubject<any>;
  leftLocations: BehaviorSubject<any>;
  teamsAvaliable: BehaviorSubject<any>;
  constructor(
    userService: UserServiceService,
    tokenService: TokenStorageService,
    private router: Router) {
    this.userSvc = userService;
    this.tokenSvc = tokenService;
    this.devices = new BehaviorSubject({});
    this.locationsToSet = new BehaviorSubject({});
    this.setLocation = new BehaviorSubject({});
    this.teamsAvaliable = new BehaviorSubject([])
  }


  ngOnInit(): void {

    this.config.subscribe(
      modeConfig => {
        this.userSvc.getUserData().subscribe(userData => {
          console.log(modeConfig, "config", userData.fieldProfiles[0].devices)
          this.mode = modeConfig.mode;
          if (modeConfig.mode == 'createMode') {
            this.locationsToSet.next(modeConfig.location);
            if (modeConfig.teams) {
              const teams = [];
              modeConfig.teams.forEach(element => {
                console.log(element, element.value.name)
                teams.push({ 'name': element.value.name })
              });
              this.teamsAvaliable.next(teams)
            }

            //get list of devices

          }
          this.devices.next(this.makeDeviceModals(userData.fieldProfiles[0].devices));


        })

      }
    )
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
    this.devices.subscribe(data => {
      if(data[index].location){
        enabled = true;
      }
    })
    return enabled;
  }
  locationSelected(event,index) {
    this.devices.subscribe(
      devices=>{
        devices[index].location = event.target.value;
        console.log(devices,event.target.value,"data",index)
      }
    )
  }
  pointScale(index, value) {

    var int_map = [0x0f, 0x14, 0x1e, 0x28, 0x30, 0x3c,
      0x4b, 0x50, 0x64, 0x78, 0x96, 0xf0].reverse()

    this.devices.subscribe(data => {
      data[index].point_scale = int_map[value];
    })
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

    this.devices.subscribe(data => {
      data[index].med_time = int_map[value];
    })
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

  enableGlobal() {
    
  }
  isGlobalEnabled() {

  }
  enableAllowMedic(num) {
    this.devices.subscribe(data => {
      if (data[num].allow_medic) {
        data[num].allow_medic = false;
      } else {
        data[num].allow_medic = true;
      }
    })

  }
  getLocationList(){
    return this.locationsToSet;
  }
  enableMedic(num) {

    this.devices.subscribe(data => {
      if (!this.isMedicEnabled(num)) {
        data[num].config = this.MEDIC;
      }
    })
  }
  isMedicEnabled(num) {

    var configured = false;

    this.devices.subscribe(data => {
      configured = data[num].config == this.MEDIC;
    })
    return configured
  }


  enableQuery(num) {

    this.devices.subscribe(data => {
      if (!this.isQueryEnabled(num)) {
        data[num].config = this.QUERY;
      }
    })
  }
  isQueryEnabled(num) {

    var configured = false;

    this.devices.subscribe(data => {
      configured = data[num].config == this.QUERY;
    })
    return configured
  }

  enableRegister(num) {

    this.devices.subscribe(data => {
      if (!this.isRegisterEnabled(num)) {
        data[num].config = this.REGISTER;
      }
    })
  }
  isRegisterEnabled(num) {

    var configured = false;

    this.devices.subscribe(data => {
      configured = data[num].config == this.REGISTER;
    })
    return configured
  }

  enableBomb(num) {

    this.devices.subscribe(data => {
      if (!this.isBombEnabled(num)) {
        data[num].config = this.BOMB;
      }
    })
  }
  isBombEnabled(num) {

    var configured = false;

    this.devices.subscribe(data => {
      configured = data[num].config == this.BOMB;
    })
    return configured
  }

  enableCapture(num) {

    this.devices.subscribe(data => {
      if (!this.isCaptureEnabled(num)) {
        data[num].config = this.CAPTURE;
      }
    })
  }
  isCaptureEnabled(num) {

    var configured = false;

    this.devices.subscribe(data => {
      configured = data[num].config == this.CAPTURE;
    })

    return configured
  }

  armTime(index, value) {

    var int_map = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    this.devices.subscribe(data => {
      data[index].arm_time = int_map[value];
    })
  }
  capTime(index, value) {

    var int_map = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
      15, 18, 21, 24, 27, 30,
      36, 42, 48, 54, 60, 66, 72, 78, 84, 90,
      120, 150, 180, 210, 240]

    this.devices.subscribe(data => {
      data[index].cap_time = int_map[value];
    })
  }
  bombTime(index, value) {

    var int_map = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
      15, 18, 21, 24, 27, 30,
      36, 42, 48, 54, 60, 66, 72, 78, 84, 90,
      120, 150, 180, 210, 240]

    this.devices.subscribe(data => {
      data[index].bomb_time = int_map[value];
    })
  }
  difuseTime(index, value) {

    var int_map = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    this.devices.subscribe(data => {
      data[index].diff_time = int_map[value];
    })
  }
  capasst(index, value) {

    var int_map = [0x64, 0x32, 0x19, 0x14, 0x0a,
      0x05, 0x04, 0x02, 0x01]

    this.devices.subscribe(data => {
      data[index].cap_asst = int_map[value];
    })
  }

  convertPerc(value) {

    var new_val

    return 100 / value

  }
}
