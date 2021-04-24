import { Component, OnInit, ViewChild } from '@angular/core';
import { DeviceService } from 'src/service/device.service';
import { UserServiceService } from 'src/service/user-service.service';
import { DeviceSettings } from '../node.modal';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-game-config',
  templateUrl: './game-config.component.html',
  styleUrls: ['./game-config.component.scss']
})
export class GameConfigComponent implements OnInit {

    private REGISTER = 0x01;
    private QUERY    = 0x02;
    private PAIR_UID = 0x03;
    private CAPTURE  = 0x0A;
    private MEDIC    = 0x0E;
    private BOMB     = 0xBB;

    @ViewChild('gameModeEdit') editModeTemplate;
    @ViewChild(TabsComponent) tabsComponent;

    gameModes = [];
    userSvc: UserServiceService
    deviceSvc: DeviceService

    constructor(deviceSvc: DeviceService, userSvc: UserServiceService) {
        this.deviceSvc = deviceSvc;
        this.userSvc   = userSvc;
    }

    ngOnInit(): void {

        let fpID  = this.userSvc.getFieldProfileID();
        let token = this.userSvc.getToken();

        this.deviceSvc.getGameConfigs(token, fpID).subscribe(savedConfigs => {
            // console.log(savedConfigs, "savedConfigs");
            JSON.parse(JSON.stringify(savedConfigs)).forEach(savedConfig => {

                this.gameModes.push({
                    id:        savedConfig.id,
                    name:      savedConfig.description,
                    teams:     savedConfig.teams,
                    nodeModes: savedConfig.deviceMap,
                    map:       savedConfig.mapID
                });

            });
        })
    }

    uIToAPIDeviceSettings(inputDeviceSettings: DeviceSettings, mapid){

    let locID;

    if(inputDeviceSettings.location == 'NONE' || !inputDeviceSettings.location){
        locID = null;
    } else if(inputDeviceSettings.location){
        locID = this.userSvc.findLocationID(mapid,inputDeviceSettings.location);
    }

    return {

      id          : inputDeviceSettings.id,
      address     : inputDeviceSettings.address,
      enabled     : inputDeviceSettings.enabled,
      location    : locID,

      config      : inputDeviceSettings.medic.enabled              ? this.MEDIC    :
                        inputDeviceSettings.capture.enabled        ? this.CAPTURE  :
                        inputDeviceSettings.bomb.enabled           ? this.BOMB     :
                        inputDeviceSettings.registerPlayer.enabled ? this.REGISTER :
                        inputDeviceSettings.queryPlayer.enabled    ? this.QUERY    :
                        this.CAPTURE, // CAN NEVER BE NULL --> default should be CAPTURE if req'd

      cap_time    : inputDeviceSettings.capture.cap_time,
      cap_asst    : inputDeviceSettings.capture.cap_asst,
      point_scale : inputDeviceSettings.capture.point_scale,
      allow_medic : inputDeviceSettings.capture.allow_medic,

      bomb_time   : inputDeviceSettings.bomb.bomb_time,
      arm_time    : inputDeviceSettings.bomb.arm_time,
      diff_time   : inputDeviceSettings.bomb.diff_time,

      team        : inputDeviceSettings.registerPlayer.enabled ? inputDeviceSettings.registerPlayer.team : null,
      med_time    : inputDeviceSettings.medTime
    }

    }

    onDeleteMode(gameMode) {
        this.deviceSvc.deleteGameConfig(this.userSvc.getToken(), gameMode.id).subscribe(data => {
        // console.log(data,"delete")
            this.gameModes = this.gameModes.filter(function (obj) {
                return obj.id !== gameMode.id;
            });
        })
    }

    onEditMode(gameMode) {
    // console.log(this.tabsComponent,this.editModeTemplate,gameMode,"edit call");
        this.tabsComponent.openTab(
              `Editing ${gameMode.name}`,
              this.editModeTemplate,
              gameMode,
              true
        );
    }

    onAddMode() {
        this.tabsComponent.openTab('New Game Mode', this.editModeTemplate, {}, true);
    }

    onGameModeFormSubmit(dataModel) {

        if (dataModel.id > 0) {

            let apiData = {

                mapID          : this.userSvc.findMapID(dataModel.map),
                fieldProfileID : this.userSvc.getFieldProfileID(),
                description    : dataModel.name,
                deviceMap      : dataModel.nodeModes,
                teams          : dataModel.teams
            }
            // console.log('edit gameconfig',apiData)
            this.deviceSvc.modifyGameConfig(apiData, this.userSvc.getToken()).subscribe(data => {})
            this.gameModes = this.gameModes.map(gameMode => {

                if (gameMode.id === dataModel.id) {
                    return dataModel;
                } else {
                    return gameMode;
                }
          });
        }
        else {
            // create a new one
            // let apiGameConfigData = new UITOAPIDeviceSettings()
            let apiGameConfigData=[];

            JSON.parse(dataModel.nodeModes).forEach(element => {
                apiGameConfigData.push(this.uIToAPIDeviceSettings(element,this.userSvc.findMapID(dataModel.map)))
            });

            let apiData = {
                mapID          : this.userSvc.findMapID(dataModel.map),
                fieldProfileID : this.userSvc.getFieldProfileID(),
                description    : dataModel.name,
                deviceMap      : JSON.stringify(apiGameConfigData),
                teams          : dataModel.teams
            }

            console.log('create gameconfig',dataModel)

            dataModel.map = this.userSvc.findMapID(dataModel.map)
            dataModel.id  = Math.round(Math.random() * 100); // WHAT IS THIS FOR?

            this.gameModes.push(dataModel);
            this.deviceSvc.saveGameConfigs(apiData, this.userSvc.getToken()).subscribe(data => {

            })
        }
        // close the tab
        this.tabsComponent.closeActiveTab();
    }


}
