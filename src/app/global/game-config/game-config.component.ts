import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/service/user-service.service';
import { TokenStorageService } from 'src/service/token-storage.service';
import { makeDeviceModals } from '../node.modal';
import { SecureAPIService } from 'src/service/secure-api.service';

@Component({
    selector: 'app-game-config',
    templateUrl: './game-config.component.html',
    styleUrls: ['./game-config.component.scss']
})
export class GameConfigComponent implements OnInit {

    gameConfigs = <any>[];

    activeConfig;

    userToken;

    constructor(
        private userSvc: UserServiceService,
        private tokenSvc: TokenStorageService,
        private secAPIsvc: SecureAPIService
    ) { }


    async ngOnInit() {

        let fpID = this.userSvc.getFieldProfileID();
        await this.tokenSvc.getToken().then(
            data => {
                this.userToken = data;
            }
        );

        this.secAPIsvc.getGameConfigs(this.userToken, fpID).subscribe(savedConfigs => {

            this.gameConfigs = savedConfigs;
            this.gameConfigs.forEach(savedConfig => {
                // We need to do this to attach the "#" to the front
                // of each color, because it's not held in the DB
                savedConfig.teams.forEach(team => {
                    team.color = "#" + team.color;
                })

                savedConfig.devices = makeDeviceModals(savedConfig.deviceMap);

            });

        });
    }


    onDeleteMode(config) {

        let safe = confirm("!! WARNING !!\n\nDeleting this Game Configuration will DELETE ALL GAMES and SCORES using this configuration.\n\nAre you sure you want to DELETE it?");

        if (safe) {

            this.secAPIsvc.deleteGameConfig(this.userToken, config.id).subscribe(
                resp => {
                    this.gameConfigs = this.gameConfigs.filter(gc => gc.id != config.id);
                });
        }
    }


    onEditMode(config) {
        this.activeConfig = config;
    }


    deSelectConfig() {
        this.activeConfig = null;
    }


    onAddMode() {

        let newConfig = {
            description: "",
            deviceMap: "[]",
            teams: [{ name: "Team Alpha", color: "#FF0000", id: null },
            { name: "Team Bravo", color: "#0000FF", id: null }],
            devices: []
        }

        this.activeConfig = newConfig;

    }


    findMapName(mapID) {

        let map = this.userSvc.getFieldProfile().maps.find(map => map.id == mapID)
        return map?.name
    }


    updateConfig(config) {

        config.teams.forEach(team => {
            team.color = "#" + team.color;
        })

        config.devices = makeDeviceModals(config.deviceMap);

        let indx = this.gameConfigs.findIndex(gc => gc.id == config.id);
        if (indx != -1) {
            this.gameConfigs[indx] = config;
        }
        else {
            this.gameConfigs.push(config);
        }
    }

}
