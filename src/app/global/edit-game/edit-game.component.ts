import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { UserServiceService } from 'src/service/user-service.service';
import { TokenStorageService } from 'src/service/token-storage.service';
import { makeDeviceModal, makeDeviceModals} from '../node.modal';
import { SecureAPIService } from 'src/service/secure-api.service';



@Component({
    selector    : 'app-edit-game',
    templateUrl : './edit-game.component.html',
    styleUrls   : ['./edit-game.component.scss']
})
export class EditGameComponent implements OnInit {

    @Input() gameMode;
    @Output() updateConfig = new EventEmitter<any>();

    gameModeForm      : FormGroup;
    maps              : [];
    locations         : [];
    saveSuccess;
    deviceListConfigs = new BehaviorSubject({});

    devices;
    deviceConfigs;
    gameConfigs;

    gameModeFrm = {
        id:'',
        description:'',
        teams:[],
        devices:'',
        mapID:''
    };

    constructor(
        private fb        : FormBuilder,
        private userSvc   : UserServiceService,
        private tokenSvc  : TokenStorageService,
        private secAPIsvc : SecureAPIService
      ) {

            this.gameModeForm      = this.fb.group({
                id          : new FormControl(this.gameModeFrm.id),
                description : new FormControl(this.gameModeFrm.description, [Validators.required]),
                teams       : this.fb.array([]),
                devices     : new FormControl(this.gameModeFrm.devices, [Validators.required]),
                mapID       : new FormControl(this.gameModeFrm.mapID, [Validators.required])
            });

            let fieldProfile = this.userSvc.getFieldProfile()

            this.maps          = fieldProfile.maps;
            this.devices       = fieldProfile.devices;
            this.gameConfigs   = fieldProfile.gameConfigs;

    }


    ngOnInit() {

        this.deviceConfigs = makeDeviceModals(this.devices,true)

        // Setup the form data
        this.gameMode.teams.forEach(element => {
            this.teams.push(this.fb.group(element))
        });

        this.gameModeForm.patchValue({
            id          : this.gameMode.id ,
            mapID       : this.gameMode.mapID || null,
            description : this.gameMode.description || '',
            devices     : this.deviceConfigs
        });

        // Grab location data for the map - if there is one
        if (this.gameMode.mapID) {
            this.locations = this.maps.find(map => {

                if(map['id']==this.gameMode.mapID){
                    return map['locations'];
                    }
            })
        }

        // Enable the devices already saved to the config
        this.gameMode.devices.forEach(device => {
            device.saveToConfigs = true;
            this.syncNodeConfigs(device)
        })

        // Send DeviceList data to deviceList component
        this.deviceListConfigs.next({
            mode        : "create",
            mapID       : this.gameMode.mapID ,
            teams       : this.gameMode.teams,
            nodeConfigs : this.deviceConfigs
        });


    }


    newTeam(): FormGroup {
        return this.fb.group({
                                name  :'Team Name',
                                color :'#A000A0',
                                id    : null
                             })
    }


    get teams() : FormArray {
        return this.gameModeForm.get("teams") as FormArray
    }


    onFormSubmit() {

        let dataModel = this.gameModeForm.value;

        for (var i = dataModel.devices.length - 1; i >= 0; i--) {
            if (!dataModel.devices[i].saveToConfigs) {
                dataModel.devices.splice(i, 1);
            }
        }

        let apiData = {
            id             : dataModel.id,
            mapID          : dataModel.mapID,
            fieldProfileID : this.userSvc.getFieldProfileID(),
            description    : dataModel.description,
            deviceMap      : dataModel.devices,
            teams          : dataModel.teams
        }

        if (dataModel.id) {
            this.secAPIsvc.modifyGameConfig(this.tokenSvc.getToken(), apiData).subscribe(
                resp => {
                    this.updateConfig.emit(resp);
                    this.gameModeForm.patchValue({teams:resp["teams"]});
                    this.saveSuccess = true;
                } 
            )
        }
        else {

            this.secAPIsvc.saveGameConfig(this.tokenSvc.getToken(), apiData).subscribe(
                resp => {
                    this.updateConfig.emit(resp);
                    this.gameModeForm.controls["id"].setValue(resp["id"]);
                    this.gameModeForm.patchValue({teams:resp["teams"]});
                    this.saveSuccess = true;

                })
        }


    }


    syncNodeConfigs(device){

        if (typeof device === 'string') {
            device = makeDeviceModal(JSON.parse(device));
        }

        let isIndex = this.deviceConfigs.findIndex(dev => dev.id == device.id)

        if (isIndex !== -1) {
            this.deviceConfigs[isIndex] = device;
        }

        this.gameModeForm.controls["devices"].setValue(this.deviceConfigs);
    }


    addTeam() {

        this.teams.push(this.newTeam());
        this.updateDeviceListConfigs();
    }


    removeTeam(i:number) {

        let team = this.teams.value[i];

        if (team.id) {
            this.secAPIsvc.deleteTeam(this.tokenSvc.getToken(), team.id).subscribe(
                data => {}
            );
        }
        this.teams.removeAt(i);
        this.updateDeviceListConfigs();
    }


    changeMap(){

        let mapID = this.gameModeForm.get('mapID').value;
        this.locations = this.maps.find(map => map["id"] == mapID)["locations"];

        this.updateDeviceListConfigs()
        // this.isMapSelected = true;
    }


    updateDeviceListConfigs(){

        this.gameModeForm.controls["devices"].setValue(this.deviceConfigs);

        this.deviceListConfigs.next({
            mode        : "create",
            mapID       : this.gameModeForm.get('mapID').value,
            teams       : this.gameModeForm.get('teams')['controls'],
            nodeConfigs : this.deviceConfigs
        })
    }

}
