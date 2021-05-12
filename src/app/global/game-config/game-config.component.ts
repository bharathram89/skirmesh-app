import { Component, OnInit, ViewChild } from '@angular/core';
import { DeviceService } from 'src/service/device.service';
import { UserServiceService } from 'src/service/user-service.service';
import { makeDeviceModals } from '../node.modal';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-game-config',
  templateUrl: './game-config.component.html',
  styleUrls: ['./game-config.component.scss']
})
export class GameConfigComponent implements OnInit {

    gameConfigs;

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

            this.gameConfigs = savedConfigs;
            this.gameConfigs.forEach(savedConfig => {
                // We need to do this to attach the "#" to the front
                // of each color, because it's not held in the DB
                savedConfig.teams.forEach(team => {
                    team.color = "#" + team.color;
                })
                this.gameModes.push({

                    id:        savedConfig.id,
                    name:      savedConfig.description,
                    teams:     savedConfig.teams,
                    nodeModes: makeDeviceModals(savedConfig.deviceMap),
                    map:       savedConfig.mapID
                });
            });

        });
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
        console.log(this.tabsComponent,this.editModeTemplate,gameMode,"edit call");
        this.tabsComponent.openTab(
              gameMode.name,
              this.editModeTemplate,
              gameMode,
              true
        );
    }

    onAddMode() {
        this.tabsComponent.openTab('New Game Mode', this.editModeTemplate, {}, true);
    }

    onGameModeFormSubmit(dataModel) {

        console.log("::GAME MODE FORM SUBMIT DATA MODEL::", dataModel)

        if (dataModel.id) {
            let teams =[];
            let gameConfig= this.gameConfigs.find(ele=>ele.id==dataModel.id);


            dataModel.teams.forEach(element => {

                let temp_ele = gameConfig.teams.find(ele=>ele.id == element.id);
                if (temp_ele) {element.id = temp_ele.id}

            });

            let apiData = {
                id             : dataModel.id,
                mapID          : dataModel.map,
                fieldProfileID : this.userSvc.getFieldProfileID(),
                description    : dataModel.name,
                deviceMap      : dataModel.nodeModes,
                teams          : dataModel.teams
            }

            this.deviceSvc.modifyGameConfig(apiData, this.userSvc.getToken()).subscribe(
                data => {})
            this.gameModes = this.gameModes.map(gameMode => {

                if (gameMode.id === dataModel.id) {
                    return dataModel;
                } else {
                    return gameMode;
                }
            });
        }

        else {

            let apiData = {
                mapID          : dataModel.map,
                fieldProfileID : this.userSvc.getFieldProfileID(),
                description    : dataModel.name,
                deviceMap      : dataModel.nodeModes,
                teams          : dataModel.teams
            }
            // dataModel.map = this.userSvc.findMapID(dataModel.map)
            dataModel.id  = Math.round(Math.random() * 100); // WHAT IS THIS FOR?

            this.gameModes.push(dataModel);
            this.deviceSvc.saveGameConfigs(apiData, this.userSvc.getToken()).subscribe(data => {

            })
        }
        // close the tab
        this.tabsComponent.closeActiveTab();
    }


}
