import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/service/auth.service';
import { UserServiceService } from 'src/service/user-service.service';

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
  @Input() gameMode;
 deviceListConfigs :BehaviorSubject<any>;
 arrayInputs = [{name : ['a',Validators.required]}, {color: ['b',Validators.required]}];
  @Output() saveGameMode = new EventEmitter<any>();
  userSvc:UserServiceService;
  gameModeFrm={id:'',name:'',teams:[],nodeModes:'',map:'',quantities:[]}

  orderForm: FormGroup;
  // teams: FormArray;




  constructor(private fb: FormBuilder,
    private authSvc: AuthService,
    private userService: UserServiceService, ) {
      this.deviceListConfigs =new BehaviorSubject({});
      this.userSvc =userService;


    this.gameModeForm = this.fb.group({
      id: new FormControl(this.gameModeFrm.id, [
        Validators.required
      ]),
      name: new FormControl(this.gameModeFrm.name, [
        Validators.required
      ]),
      teams: this.fb.array([this.newTeam(),this.newTeam()]),

      nodeModes: new FormControl(this.gameModeFrm.nodeModes, [
        Validators.required
      ]),
      map:new FormControl(this.gameModeFrm.map, [
        Validators.required
      ])
    });
    this.userSvc.getFieldProfile().subscribe(data=>{
      this.maps = data.maps;
    })
    this.deviceListConfigs.next({
      mode:"createMode"
    })
    // this.teams.patchValue(
    //   [this.newTeam()])
    // this.gameModeForm.get('teams').patchValue()
    // this.values.push(this.gameModeForm.get('teams') as FormArray)
  }

  get teams() : FormArray {
    return this.gameModeForm.get("teams") as FormArray
  }

  newTeam(): FormGroup {
    return this.fb.group({
     name:'kl',
     color:'mk'
    })
  }

  addTeam() {
    // let newTm = this.newTeam();
    // newTm.setValue({name:'val',color:'col'})
    this.teams.push(this.newTeam());
    // this.gameModeForm.get('teams')
  }
  removeTeam(i:number) {
    // this.teams.removeAt(i);
  }

  changeMap(e){
    this.gameModeForm.controls['map'].setValue(e.target.value)
    this.locations = this.maps.find(locs=>{
      if(locs['name']==e.target.value){
        return locs['locations'];
      }
    })
    this.deviceListConfigs.next({
      mode:"createMode",
      location:this.locations['locations']
    })
    this.isMapSelected=true;
  }
  setNodes(){
    // document.getElementById("backdrop").style.display = "block"
    document.getElementById("exampleModal").style.display = "block"
    document.getElementById("exampleModal").className += "show"
  }
  closeModal(){
    // document.getElementById("backdrop").style.display = "none"
    document.getElementById("exampleModal").style.display = "none"
    document.getElementById("exampleModal").className += document.getElementById("exampleModal").className.replace("show", "")
  }
  ngOnInit() {
    // this.teams.setValue([{name:'val',color:'val2'},{name:'val',color:'val2'}])
    // console.log(this.gameModeForm.get('teams')['controls'])
    // this.setArrayInputs(this.arrayInputs)
    this.gameModeForm.patchValue({
      id: this.gameMode.id || -1,
      name: this.gameMode.name || '',
      teams: [{name:'val',color:'col'},{name:'val2',color:'col2'}],
      nodeModes: this.gameMode.nodeModes || '',
      map: this.gameMode.map || ''
    });
  }

  onNewGameModeFormSubmit() {
    let dataModel = this.gameModeForm.value;
    this.saveGameMode.emit(dataModel);
  }

}
