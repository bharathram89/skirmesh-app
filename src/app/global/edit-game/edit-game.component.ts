import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/service/auth.service';
import { UserServiceService } from 'src/service/user-service.service';
import { makeDeviceModal, makeDeviceModals} from '../node.modal';

// export class ColorPalette {
//     name       : string;
//     value      : string;
//     foreground : string;
//     id         : number;
// }

@Component({
    selector    : 'app-edit-game',
    templateUrl : './edit-game.component.html',
    styleUrls   : ['./edit-game.component.scss']
})
export class EditGameComponent implements OnInit {

    @Input() gameMode;
    @Output() saveGameMode = new EventEmitter<any>();

    gameModeForm      : FormGroup;
    maps              : [];
    locations         : [];

    isMapSelected     : boolean = false;
    configSet         : boolean = false;
    deviceListConfigs : BehaviorSubject<any>;
    userSvc           : UserServiceService;

    devices;
    deviceConfigs;
    gameConfigs;

    gameModeFrm = {
        id:'',
        name:'',
        teams:[],
        nodeModes:'',
        map:'',
        quantities:[]
    };

    constructor(
        private fb          : FormBuilder,
        private authSvc     : AuthService,
        private userService : UserServiceService, ) {

            this.deviceListConfigs = new BehaviorSubject({});
            this.userSvc           = userService;

            this.gameModeForm      = this.fb.group({
                id        : new FormControl(this.gameModeFrm.id, [Validators.required]),
                name      : new FormControl(this.gameModeFrm.name, [Validators.required]),
                teams     : this.fb.array([]),
                nodeModes : new FormControl(this.gameModeFrm.nodeModes, [Validators.required]),
                map       : new FormControl(this.gameModeFrm.map, [Validators.required])
            });

            let fieldProfile = this.userSvc.getFieldProfile()

            this.maps          = fieldProfile.maps;
            this.devices       = fieldProfile.devices;
            this.gameConfigs   = fieldProfile.gameConfigs;

    }

    ngOnInit() {

        if(this.gameMode.map){

            this.gameMode.teams.forEach(element => {
                this.teams.push(this.fb.group(element))
            });

            this.gameModeForm.patchValue({
                id        : this.gameMode.id ,
                map       : this.gameMode.map || null,
                name      : this.gameMode.name || '',
            });

            this.isMapSelected = true;
            this.locations = this.maps.find(locs=>{

                if(locs['id']==this.gameMode.map){
                    return locs['locations'];
                    }
            })

            this.deviceConfigs =this.gameMode.nodeModes;
            this.deviceListConfigs.next({
                mode        : "create",
                mapID       : this.gameMode.map ,
                teams       : this.gameMode.teams,
                nodeConfigs : this.gameMode.nodeModes
            });

        }else{

            this.deviceConfigs = makeDeviceModals(this.devices,true)
            this.teams.push(this.newTeam());
            this.teams.push(this.newTeam());
            this.gameModeForm.patchValue({
                id        : this.gameMode.id   || null,
                name      : this.gameMode.name || '',
                teams     : this.gameMode.teams ? this.gameMode.teams :[{name:'Team Alpha',color:'#ff0000'},
                                                                        {name:'Team Bravo',color:'#0000ff'}],
                nodeModes : this.deviceConfigs,
                mapID     : this.gameMode.map ? this.gameMode.map : null,
                map       : this.gameMode.map || null,
            });
        }
    }

    onNewGameModeFormSubmit() {

        let dataModel = this.gameModeForm.value;
        console.log(dataModel," final modal?")
        this.saveGameMode.emit(dataModel);
    }

    get teams() : FormArray {
        return this.gameModeForm.get("teams") as FormArray
    }

    nodeConfigs(device){

        this.configSet = true; // Not sure what this does...
        device = JSON.parse(device);

        let isIndex = this.deviceConfigs.findIndex(dev => dev.id == device.id)

        if (isIndex !== -1) {
            this.deviceConfigs[isIndex] = makeDeviceModal(device);
        }

        this.gameModeForm.value.nodeModes = this.deviceConfigs;
    }

    saveConfigs(){
    // console.log(this.gameModeForm.value)
    }

    newTeam(): FormGroup {
        return this.fb.group({
                                name  :'Team Name',
                                color : null,
                                id    : null
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

    changeMap(e){

        this.gameModeForm.controls['map'].setValue(e.target.value)

        this.locations = this.maps.find(maps=>{

            if(maps['id']==e.target.value){
                return maps['locations'];
            }

        })['locations']

        this.setNodes()
        this.isMapSelected = true;
    }

    setNodes(){

        this.deviceListConfigs.next({
            mode        : "create",
            mapID       : this.gameModeForm.get('map').value,
            teams       : this.gameModeForm.get('teams')['controls'],
            nodeConfigs : this.gameModeForm.get('nodeModes').value
        })
    }

}
