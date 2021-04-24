import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/service/auth.service';
import { UserServiceService } from 'src/service/user-service.service';
import { BombSettings, CaptureSettings, DeviceSettings, MedicSettings, QueryPlayerSettings, RegisterPlayer } from '../node.modal';

export class ColorPalette {
  name: string;
  value: string;
  foreground: string;
  id:number
}


@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.scss']
})
export class EditGameComponent implements OnInit {
  gameModeForm: FormGroup;
  maps:[];
  locations:[];
  values = [];
  // deviceListConfigs;
  isMapSelected:boolean=false;
  configSet:boolean=false;
  @Input() gameMode;
 deviceListConfigs :BehaviorSubject<any>;
  @Output() saveGameMode = new EventEmitter<any>();
  userSvc:UserServiceService;
  gameModeFrm={id:'',name:'',teams:[],nodeModes:'',map:'',quantities:[]}
  devices;
  color:BehaviorSubject<ColorPalette>;
  colors: ColorPalette[] = [
    { name: 'Red', value: '#ff1744', foreground: 'white' ,id:0},
    { name: 'Pink', value: '#ff80ab', foreground: 'black',id:1 },
    { name: 'Purple', value: '#d500f9', foreground: 'white' ,id:2},
    { name: 'Deep Purple', value: '#7c4dff', foreground: 'white' ,id:3},
    { name: 'Indigo', value: '#3d5afe', foreground: 'white' ,id:4},
    { name: 'Blue', value: '#2979ff', foreground: 'white' ,id:5},
    { name: 'Light Blue', value: '#00b0ff', foreground: 'black',id:6 },
    { name: 'Cyan', value: '#00e5ff', foreground: 'black' ,id:7},
    { name: 'Teal', value: '#1de9b6', foreground: 'black' ,id:8},
    { name: 'Green', value: '#00e676', foreground: 'black' ,id:9},
    { name: 'Light Green', value: '#76ff03', foreground: 'black',id:10 },
    { name: 'Lime', value: '#c6ff00', foreground: 'black' ,id:11 },
    { name: 'Yellow', value: '#ffea00', foreground: 'black' ,id:12},
    { name: 'Amber', value: '#ffc400', foreground: 'black' ,id:13},
    { name: 'Orange', value: '#ff9100', foreground: 'black' ,id:14},
    { name: 'Deep Orange', value: '#ff3d00', foreground: 'white' ,id:15},
    { name: 'Brown', value: '#8d6e63', foreground: 'white' ,id:16},
    { name: 'Light Gray', value: '#bdbdbd', foreground: 'black' ,id:17},
    { name: 'Dark Gray', value: '#616161', foreground: 'white' ,id:18},
    { name: 'Blue Gray', value: '#78909c', foreground: 'white' ,id:19}
  ];


deviceConfigs;
gameConfigs;
  constructor(private fb: FormBuilder,
    private authSvc: AuthService,
    private userService: UserServiceService, ) {
      this.deviceListConfigs =new BehaviorSubject({});
      this.userSvc =userService;

      this.color = new BehaviorSubject(new ColorPalette())
    this.gameModeForm = this.fb.group({
      id: new FormControl(this.gameModeFrm.id, [
        Validators.required
      ]),
      name: new FormControl(this.gameModeFrm.name, [
        Validators.required
      ]),
      teams: this.fb.array([]),

      nodeModes: new FormControl(this.gameModeFrm.nodeModes, [
        Validators.required
      ]),
      map:new FormControl(this.gameModeFrm.map, [
        Validators.required
      ])
    });
    this.userSvc.getFieldProfile().subscribe(data=>{
      // console.log(data);
      this.maps = data.maps;
      this.devices = data.devices;
      this.gameConfigs = data.gameConfigs;
      this.deviceConfigs = this.makeDeviceModals(this.devices, this.gameConfigs)
    })
    // this.deviceListConfigs.next({
    //   mode:"createMode"
    // })
  }

  get teams() : FormArray {
    return this.gameModeForm.get("teams") as FormArray
  }
  nodeConfigs(e){
    this.configSet = true;
    // console.log(e," node Cofings receieved")
    this.gameModeForm.value.nodeModes = e;
    this.deviceConfigs = JSON.parse(e);
  }
  saveConfigs(){
    // console.log(this.gameModeForm.value)
  }
  newTeam(): FormGroup {
    return this.fb.group({
     name:'Team Name',
     color:''
    })
  }

  addTeam() {
    this.teams.push(this.newTeam());
    this.setNodes();
  }
  removeTeam(i:number) {
    this.teams.removeAt(i);
    this.setNodes();
  }
  onChangeOfTeamList(){
    this.setNodes();
  }
//setNodes
  changeMap(e){
    this.gameModeForm.controls['map'].setValue(e.target.value)
    this.locations = this.maps.find(locs=>{
      if(locs['name']==e.target.value){
        return locs['locations'];
      }
    })
    this.setNodes()
    this.isMapSelected=true;
  }
  changeColor(e,i){
    let color = this.colors.filter(color=>{return color.name==e.target.value})[0]
    // console.log(color,e.target.value,i,'selected color')
     this.color.next(color)
  }
  setNodes(){
    this.deviceListConfigs.next({
      mode:"createMode",
      mapID:this.gameModeForm.get('map').value,
      teams:this.gameModeForm.get('teams')['controls'],
      nodeConfigs: this.gameModeForm.get('nodeModes').value ? JSON.parse(this.gameModeForm.get('nodeModes').value) : this.makeDeviceModals(this.devices, this.gameConfigs)
    })
    // document.getElementById("exampleModal").style.display = "block"
    // document.getElementById("exampleModal").className += "show"
  }
  ngOnInit() {
    if(this.gameMode.teams){

      this.gameMode.teams.forEach(element => {
        this.teams.push(this.newTeam())
      });
    }else{
      this.teams.push(this.newTeam());
      this.teams.push(this.newTeam())

    }
    this.gameModeForm.patchValue({
      id: this.gameMode.id || -1,
      name: this.gameMode.name || '',
      teams: this.gameMode.teams ? this.gameMode.teams :[{name:'Team Alpha',color:'#ff0000'},{name:'Team Bravo',color:'#ff0000'}],
      nodeModes: this.gameMode.nodeModes || '',
      map: this.userSvc.findMapName(this.gameMode.map) || ''
    });

    if(this.gameMode.map){
      this.isMapSelected=true;
      this.locations = this.maps.find(locs=>{
        if(locs['id']==this.gameMode.map){
          return locs['locations'];
        }
      })

      let valFromApi = JSON.parse(this.gameModeForm.get('nodeModes').value);
      let arr=[];
      valFromApi.forEach(eachNodeConfig => {
        arr.push(this.apiToUiModel(eachNodeConfig,this.gameModeForm.get('map').value ))
      });
      this.deviceListConfigs.next({
        mode:"createMode",
        mapID:this.gameModeForm.get('map').value ,
        teams: this.gameModeForm.get('teams')['controls'],
        nodeConfigs: this.gameModeForm.get('nodeModes').value ? arr : this.makeDeviceModals(this.devices, this.gameConfigs)
      })
    }
  }

  private REGISTER = 0x01;
  private QUERY    = 0x02;
  private PAIR_UID = 0x03;
  private CAPTURE  = 0x0A;
  private MEDIC    = 0x0E;
  private BOMB     = 0xBB;

  apiToUiModel(deviceConfig,mapid){

    console.log(deviceConfig,"apiToUiModel")

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
    let loc = deviceConfig.location ? this.userSvc.findLocationName(mapid,deviceConfig.location) : null;
    let ds = new DeviceSettings(deviceConfig.id,deviceConfig.enabled,deviceConfig.address,loc,deviceConfig.med_time,med,bomb,cap,reg,query)
    return ds;
  }

  
  onNewGameModeFormSubmit() {
    let dataModel = this.gameModeForm.value;
    console.log(dataModel," final modal?")
    // dataModel.map = this.userSvc.findMapID(dataModel.map)
    this.saveGameMode.emit(dataModel);
  }


  makeDeviceModals(alldevices, gameConfigs): DeviceSettings[] {
    let arr: DeviceSettings[]=[];
    alldevices.forEach(element => {
      // console.log(element,"exisitng config? ")
      let med = new MedicSettings(element.allow_medic)
      let bmb = new BombSettings(false,element.arm_time,element.bomb_time,element.diff_time)
      let cap = new CaptureSettings(false,element.cap_time,element.cap_asst,element.point_scale,element.allow_medic)
      let query = new QueryPlayerSettings(false)
      let reg = new RegisterPlayer(false,null)
      let ds = new DeviceSettings(element.id,false,element.address,null,element.med_time,med,bmb,cap,reg,query)
      arr.push(ds)
    });

    return arr;
  }


  //


}
