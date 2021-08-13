import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/service/user-service.service';
import {
    AUTO_STYLE,
    animate,
    state,
    style,
    transition,
    trigger
} from '@angular/animations';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { TokenStorageService } from 'src/service/token-storage.service';
import { makeDeviceModals } from 'src/app/global/node.modal';
import { NonSecureAPIService } from 'src/service/non-secure-api.service';
import { SecureAPIService } from 'src/service/secure-api.service';
import { GameService } from 'src/service/game.service';


const DEFAULT_DURATION = 300;
@Component({
    selector: 'app-start-game',
    templateUrl: './start-game.component.html',
    styleUrls: ['./start-game.component.scss'],
    animations: [
        trigger('collapse', [
            state('false', style({ height: AUTO_STYLE, visibility: AUTO_STYLE })),
            state('true', style({ height: '0', visibility: 'hidden' })),
            transition('false => true', animate(DEFAULT_DURATION + 'ms ease-in')),
            transition('true => false', animate(DEFAULT_DURATION + 'ms ease-out'))
        ])
    ]
})

export class StartGameComponent implements OnInit {

    gameBoardActive = false;
    gameInProgress = false;
    gameModes;

    selectedMapID;
    selectedGameMode;
    filteredGameModes;

    activeDevices: BehaviorSubject<any>;
    allDevices: [];
    deviceInUse = false;

    teams = [];
    mapID;
    gameData = <any>{};

    countUpTime;
    countUpTimer;
    pausedTimer = 0;

    teamsHavePlayers = true;
    fieldProfile;
    playerUpdate;
    teamColumns = [{ name: 'RFID', prop: 'rfidID', sortable: true }];
    userToken;
    constructor(
        private userSvc: UserServiceService,
        private tokenSvc: TokenStorageService,
        private nonSecAPIsvc: NonSecureAPIService,
        private secAPIsvc: SecureAPIService,
        private gameSvc: GameService,
    ) {
        this.activeDevices = new BehaviorSubject({});
        this.tokenSvc.userToken.subscribe(
            data => {
                this.userToken = data;
            }
        );
    }

    ngOnInit() {

        this.userSvc.fieldProfile.subscribe(
            res => {
                if (res) {
                    this.fieldProfile = res;
                    this.secAPIsvc.getGameConfigs(this.userToken, res.id).subscribe(
                        savedConfigs => {
                            this.gameModes = savedConfigs;
                            this.allDevices = res.devices;
                        }
                    )
                }
            }
        )
        // This sets the dropdown menu with available game configurations



    }


    ngAfterViewInit() {
        // Socket Data routes
        // Single socket setup in app.component - these listen for different
        // socket events to update specific areas
        this.playerUpdate = this.gameSvc.getPlayerUpdate().subscribe(
            socketData => {
                this.updatePlayerData(socketData);
            })
    }


    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.playerUpdate.unsubscribe()
    }


    changeGame(gameConfig) {
        // When a dropdown menu selection is made - update the gameboard
        let gameConfigID = gameConfig.target.value;
        this.selectedGameMode = this.gameModes.find(ele => ele.id == gameConfigID);

        this.setSelectedGameConfig(this.selectedGameMode);
    }


    startGame() {
        // On start game, push all device configuration data to each
        // device to baseline all configurations from saved configs
        let mode = this.selectedGameMode;

        this.secAPIsvc.startGame(this.userToken, mode.id).subscribe(

            data => {
                this.gameData = data

                // Update user devices to flag warnings when in use
                const res = this.allDevices.reduce((acc, curr) => {

                    const stored = this.gameData.devices.find(({ id }) => id == curr["id"]);
                    acc.push(stored ? stored : curr);
                    return acc;

                }, <any>[]);

                this.allDevices = res;

                this.countUpFromTime();
            },
            err => { console.log(err) }
        )

        this.setSelectedGameConfig(mode);

        // gameInProgress is used to show or hide game buttons (pause/end)
        this.gameInProgress = true;
    }


    setSelectedGameConfig(mode) {

        this.selectedGameMode = mode;
        this.teams = mode.teams;
        this.mapID = mode.mapID;

        for (let team of this.teams) {
            team.color = "#" + team.color;
        }
        this.activeDevices.next({
            mode: "active",
            mapID: this.mapID,
            teams: this.teams,
            nodeConfigs: makeDeviceModals(mode.deviceMap)
        });

        this.activeDevices.subscribe(
            data => {
                for (let device of data.nodeConfigs) {

                    let check = this.allDevices.find(dev => dev["id"] == device.id);

                    if (check) {
                        this.deviceInUse = check["gameID"] || this.deviceInUse ? true : false;
                        device.saveToConfigs = this.gameInProgress ? true : check["gameID"] ? false : true;
                    }
                    else {
                        device.saveToConfigs = this.gameInProgress ? true : false;
                    }
                }
            }
        )

        this.gameBoardActive = true;
        this.checkTeamPlayers();
    }


    // Device is passed in from device-list.component
    nodeConfigs(device) {
    }


    pauseGame() {

        let paused = !this.gameData.is_paused;

        this.secAPIsvc.pauseGame(this.userToken, { "gameID": this.gameData.id, "is_paused": paused }).subscribe(
            data => this.gameData = data
        )
    }


    endGame() {

        let safe = confirm("Do you really want to end the game?");

        if (safe) {

            this.secAPIsvc.endGame(this.userToken, this.gameData.id).subscribe(
                data => {
                    this.gameInProgress = false;
                    this.gameBoardActive = false;
                    this.teamsHavePlayers = true;
                    this.deviceInUse = false;
                    this.gameData = null;

                    // Clear out devices used in game to remove warning
                    this.activeDevices.subscribe(
                        data => {
                            data.nodeConfigs.forEach(node => {

                                let device = this.allDevices.find(({ id }) => id == node.id) as {};
                                if (device) {
                                    device["gameID"] = null;
                                }
                            })
                        })

                })
        }

        clearInterval(this.countUpTimer);
    }


    countUpFromTime() {

        var secsInAHour, hours, secsInAMin, mins, secs, now, then, timeDiff;

        now = new Date();
        then = new Date(this.gameData.startTime);

        if (this.gameData.is_paused) {
            this.pausedTimer += 1000;
        }

        timeDiff = now - then - this.pausedTimer;

        secsInAHour = 60 * 60 * 1000;
        secsInAMin = 60 * 1000;

        hours = Math.floor(timeDiff / secsInAHour);
        mins = Math.floor((timeDiff % secsInAHour) / secsInAMin);
        secs = Math.floor(((timeDiff % secsInAHour) % secsInAMin) / 1000);

        this.countUpTime = ("0" + hours).slice(-2) + ":"
        this.countUpTime += ("0" + mins).slice(-2) + ":"
        this.countUpTime += ("0" + secs).slice(-2)

        this.countUpTimer = setTimeout(() => this.countUpFromTime(), 1000);
    }


    updatePlayerData(teamPlayer) {

        if (!teamPlayer.teamID) { return }

        let team = this.teams.find(ele => ele.id == teamPlayer.teamID);

        if (!team) { return }

        // This removes the player from other teams
        for (let other_team of this.teams) {
            if (other_team.teamID == teamPlayer.teamID) { continue }
            const plr_idx = other_team.teamPlayers.findIndex(ele => ele.id == teamPlayer.id);
            if (plr_idx != -1) {
                other_team.teamPlayers.splice(plr_idx, 1)
            }
        }

        let player = team.teamPlayers.find(ele => ele.id == teamPlayer.id);

        if (player) {
            player = teamPlayer;
        }
        else {
            team.teamPlayers.push(teamPlayer)
        }

        this.checkTeamPlayers();

    }


    selectMap(mapID) {

        this.selectedMapID = mapID;

        this.filteredGameModes = this.gameModes.filter(config => config.mapID == mapID)

        this.secAPIsvc.getActiveGamesByMap(this.userToken, mapID).subscribe(

            activeGameConfig => {

                if (activeGameConfig) {
                    // Active games route starts query with fieldProfileID and
                    // returns the gameConfig, which contains the game
                    // Look for the game that is not ended
                    let game = activeGameConfig["games"].shift()

                    if (game) {

                        this.gameData = game;
                        this.gameBoardActive = true;
                        this.gameInProgress = true;

                        activeGameConfig["deviceMap"] = game.devices;

                        this.setSelectedGameConfig(activeGameConfig);
                        this.countUpFromTime();

                    }
                }
            },
            err => {
                //show message on page no games are active.
            }
        )
    }


    deSelectMap() {

        this.selectedMapID = null;

        this.gameData = null;
        this.gameBoardActive = false;
        this.gameInProgress = false;

        this.deviceInUse = false;
        clearInterval(this.countUpTimer);
    }


    checkTeamPlayers() {

        for (let team of this.teams) {
            if (!team.teamPlayers.length) {
                this.teamsHavePlayers = false;
                return
            }
        }

        this.teamsHavePlayers = true;
    }

}
