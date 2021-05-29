import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { UserServiceService } from 'src/service/user-service.service';
import { makeDeviceModal, makeDeviceModals} from '../node.modal';
import { SecureAPIService } from 'src/service/secure-api.service';


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

    secAPIsvc : SecureAPIService;

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
        private fb            : FormBuilder,
        userService   : UserServiceService,
        secAPIservice : SecureAPIService) {

            this.deviceListConfigs = new BehaviorSubject({});
            this.userSvc           = userService;
            this.secAPIsvc         = secAPIservice;

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

            this.deviceConfigs = this.gameMode.nodeModes;
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

        this.setNodes();

        let dataModel = this.gameModeForm.value;
        this.saveGameMode.emit(dataModel);
    }

    get teams() : FormArray {
        return this.gameModeForm.get("teams") as FormArray
    }

    // This listens to the output of nodeConfigs in device-list.component.ts
    // due to the emitter --- for edit, the emitted device is spliced into configs
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
                                color :'#A000A0',
                                id    : null
                             })
    }

    addTeam() {

        this.teams.push(this.newTeam());
        this.setNodes();
    }

    removeTeam(i:number) {

        let team = this.teams.value[i];

        if (team.id) {
            this.secAPIsvc.deleteTeam(this.userSvc.getToken(), team.id).subscribe(
                data => {}
            );
        }
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

        this.gameModeForm.value.nodeModes = this.deviceConfigs

        this.deviceListConfigs.next({
            mode        : "create",
            mapID       : this.gameModeForm.get('map').value,
            teams       : this.gameModeForm.get('teams')['controls'],
            nodeConfigs : this.deviceConfigs
        })
    }

}
