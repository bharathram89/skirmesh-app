import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/service/auth.service';
import { UserServiceService } from 'src/service/user-service.service';
import { apiToUiModel, makeDeviceModals} from '../node.modal';

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
      // console.log(data,"field profile in edit-game component");
      this.maps = data.maps;
      this.devices = data.devices;
      this.gameConfigs = data.gameConfigs;
      this.deviceConfigs = makeDeviceModals(this.devices,true)
    })
    // this.deviceListConfigs.next({
    //   mode:"createMode"
    // })
  }

  get teams() : FormArray {
    return this.gameModeForm.get("teams") as FormArray
  }

  // TODO: Does this ever do anything?..
  nodeConfigs(e){
    this.configSet = true;
    console.log(e,"::: node Configs received :::")
    this.gameModeForm.value.nodeModes = e;
    this.deviceConfigs = JSON.parse(e); // I don't think this is correct
  }

  saveConfigs(){
    // console.log(this.gameModeForm.value)
  }

  newTeam(): FormGroup {
    return this.fb.group({
     name:'Team Name',
     color: null,
     id: null
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
    this.locations = this.maps.find(maps=>{
      if(maps['id']==e.target.value){
        return maps['locations'];
      }
    })['locations']

    this.setNodes()
    this.isMapSelected=true;
  }

  changeColor(e,i){
    let color = this.colors.filter(color=>{return color.name==e.target.value})[0]
    // console.log(color,e.target.value,i,'selected color')
     this.color.next(color)
  }

  setNodes(){

    console.log(this.gameModeForm.get('map').value,"map val in exit of edit game")
    this.deviceListConfigs.next({
      mode:"createMode",
      mapID:this.gameModeForm.get('map').value,
      teams:this.gameModeForm.get('teams')['controls'],
      nodeConfigs: this.gameModeForm.get('nodeModes').value
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
      nodeModes: makeDeviceModals(this.devices,true),
      mapID: this.gameMode.map? this.gameMode.map : null,
      map: this.gameMode.map || null,
    });

    if(this.gameMode.map){
      this.isMapSelected=true;
      this.locations = this.maps.find(locs=>{
        if(locs['id']==this.gameMode.map){
          return locs['locations'];
        }
      })

      this.deviceListConfigs.next({
        mode:"createMode",
        mapID:this.gameModeForm.get('map').value ,
        teams: this.gameModeForm.get('teams')['controls'],
        nodeConfigs: this.gameMode.nodeModes
      });
    }
  }

  onNewGameModeFormSubmit() {
    let dataModel = this.gameModeForm.value;
    console.log(dataModel," final modal?")
    // dataModel.map = parseInt(dataModel.map)
    // dataModel.map = this.userSvc.findMapID(dataModel.map)
    this.saveGameMode.emit(dataModel);
  }

  //


}
