import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  isMapSelected:boolean=false;
  @Input() gameMode;
  @Output() saveGameMode = new EventEmitter<any>();
  userSvc:UserServiceService;
  gameModeFrm={id:'',name:'',teams:'',nodeModes:'',map:''}
  constructor(private fb: FormBuilder,
    private authSvc: AuthService,
    private userService: UserServiceService, ) {
      this.userSvc =userService;
    this.gameModeForm = this.fb.group({
      id: new FormControl(this.gameModeFrm.id, [
        Validators.required
      ]),
      name: new FormControl(this.gameModeFrm.name, [
        Validators.required
      ]),
      teams: new FormControl(this.gameModeFrm.teams, [
        Validators.required
      ]),
      nodeModes: new FormControl(this.gameModeFrm.nodeModes, [
        Validators.required
      ]),
      map:new FormControl(this.gameModeFrm.map, [
        Validators.required
      ]),
    });
    this.userSvc.getFieldProfile().subscribe(data=>{
      this.maps = data.maps;
      this.locations = data.maps[0].locations
      console.log(this.gameModeForm.value,this.locations)
    })
   
  }
  changeMap(e){
    this.gameModeForm.controls['map'].setValue(e.target.value)
    console.log(this.gameModeForm.value)
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
    this.gameModeForm.setValue({
      id: this.gameMode.id || -1,
      name: this.gameMode.name || '',
      teams: this.gameMode.teams || '',
      nodeModes: this.gameMode.nodeModes || '',
      map: this.gameMode.map || ''
    });
  }

  onNewGameModeFormSubmit() {
    let dataModel = this.gameModeForm.value;
    this.saveGameMode.emit(dataModel);
  }

}
