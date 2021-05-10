import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { DeviceService } from 'src/service/device.service';
import { GameService } from 'src/service/game.service';
import { TokenStorageService } from 'src/service/token-storage.service';
import { UserServiceService } from 'src/service/user-service.service';
import { NodeConfigService } from 'src/service/node-status.service';

@Component({
    selector: 'app-mydevices',
    templateUrl: './mydevices.component.html',
    styleUrls: ['./mydevices.component.scss']
})
export class MydevicesComponent implements OnInit {

    devices;
    activeGames;
    activeGame = false;
    map;

    teams         = [];
    players       = [];
    allActions    = [];
    deviceActions = [];

    locationList;
    actionList;

    description;
    currentTab = 'map'
    tokenSvc : TokenStorageService;
    gameSvc  : GameService;
    deviceSvc: DeviceService;
    userSvc  : UserServiceService;
    nodeSvc  : NodeConfigService;

    constructor(
        tokenService: TokenStorageService,
        gameService: GameService,
        deviceService: DeviceService,
        userService: UserServiceService,
        nodeService: NodeConfigService) {

        this.tokenSvc  = tokenService;
        this.gameSvc   = gameService;
        this.deviceSvc = deviceService;
        this.userSvc   = userService;
        this.nodeSvc   = nodeService;
    }

    ngOnInit() {

        combineLatest([this.gameSvc.getGames(), this.gameSvc.getLocations(), this.gameSvc.getActions()
            ])
            .subscribe(
                ([activeGames, location, actions]) => {
                    // console.log(socketData," socketData")
                    this.locationList = location;
                    this.actionList   = actions;
                    this.activeGames  = activeGames;
                },
                err => {
                    //show message on page no games are active.
                }
            )
    }


    changeGameTab(tabToChangeTo) {

        this.currentTab = tabToChangeTo;

        document.getElementById("map").classList.remove('active');
        document.getElementById("teamScore").classList.remove('active');
        document.getElementById("EventsTracker").classList.remove('active');

        document.getElementById(tabToChangeTo).classList.add('active');
    }


    selectActiveGame(gameID) {
        //need to reset teams info.
        // this.teams = [];
        let gameConfigID = this.findGameConfigIDForGame(gameID.target.value).gameConfigID;
        console.log("GAME CONFIG ID", gameID.target.value)

        // Pull device data in from live devices - not config data
        combineLatest([this.deviceSvc.getGameConfigsByID(gameConfigID),
        this.gameSvc.getGameStats(gameID.target.value),
        this.nodeSvc.getDevicesByGameID(gameID.target.value)],
        ).subscribe(
            ([gameConfig, stats,deviceData]) => {
                this.devices = deviceData;
                this.activeGame = true;
                this.map = gameConfig['mapID'];
                this.description = gameConfig['description'];

                // Assemble PLAYER stats from API data
                stats["player_stats"].forEach(player => {

                    let playerObj = {
                        teamID: player.teamID,
                        name: player.name,
                        is_alive: player.is_alive,
                        lastAction: this.actionList.find(ele => ele.id == player.data[player.data.length - 1].actionID).action,
                        lastLocation: this.findLocationFromDeviceID(player.data[player.data.length - 1].deviceID),
                        totalPoints: player.data.reduce((prev, next) => prev + this.actionList.find(ele => ele.id == next.actionID).points, 0)
                    }
                    this.players.push(playerObj)
                    // Stuff it in ALL ACTIONS history also
                    for (let act of player.data) {

                        let date = new Date(act.creationDate);
                        let historyObj = {
                            team      : gameConfig["teams"].find(ele => ele.id == player.teamID).name,
                            name      : player.name,
                            action    : this.actionList.find(ele =>ele.id == act.actionID).action,
                            points    : this.actionList.find(ele => ele.id == act.actionID).points,
                            location  : act.deviceID ? this.findLocationFromDeviceID(act.deviceID) : null,
                            timestamp : date
                        }
                        this.allActions.push(historyObj);
                    }
                });

                // Assemble TEAM stats from API data
                stats["team_stats"].forEach(team => {

                    let team_players = this.players.filter(player => player.teamID == team.id);
                    let plyr_points  = team_players.reduce((prev, next) => prev + next.totalPoints, 0);

                    let teamObj = {
                        teamID  : team.id,
                        name    : team.name,
                        color   : '#' + team.color,
                        score   : team.data.reduce((prev, next) => prev + next.points, 0) + plyr_points,
                        players : team_players
                    }

                    this.teams.push(teamObj);
                    // Stuff it in ALL ACTIONS history also
                    for (let act of team.data) {

                        let date = new Date(act.creationDate);
                        let historyObj = {
                            team      : team.name,
                            name      : null,
                            action    : this.actionList.find(ele =>ele.id == act.actionID).action,
                            points    : act.points,
                            location  : act.deviceID ? this.findLocationFromDeviceID(act.deviceID) : null,
                            timestamp : date
                        }

                        this.allActions.push(historyObj);
                    }

                });
                // Check to see if teams were built from actions - if not, initialize them
                // with empty data for display
                for (let team of gameConfig['teams']) {

                    var index = this.teams.map(function(t) { return t.teamID }).indexOf(team.id);
                    // this shouldn't execute after teams have action
                    if (index === -1) {

                        let team_players = this.players.filter(player => player.teamID == team.id);
                        let plyr_points  = team_players.reduce((prev, next) => prev + next.totalPoints, 0);
                        this.teams.push({
                                         teamID  : team.id,
                                         name    : team.name,
                                         color   : '#' + team.color,
                                         score   : 0 + plyr_points,
                                         players : team_players,
                                        })
                    }
                }
                // Sort actions by descending timestamp
                this.allActions = this.allActions.sort((a, b) => b.timestamp - a.timestamp);

                // Figure out if last action was capture and calculate time held since CAPTURE
                // add those points to the total for each team to show current points status
                for (let device of this.devices) {

                    if (!device["teamID"]) {continue}

                    let actions = this.allActions.filter(action => action.location == this.findLocationFromDeviceID(device["id"]));

                    if (actions.length) {

                        if (actions[0].action == "CAPTURE COMPLETE") {

                            let now = new Date().getTime();
                            let add_score = Math.floor(((now - actions[0].timestamp)/1000) / device["point_scale"]);

                            let dev_team = this.teams.find(team => team.teamID == device["teamID"]);
                            dev_team.score += add_score;

                        }
                    }

                }

            })
    }


    findGameConfigIDForGame(gameID) {
        return this.activeGames.find(ele => ele.id == gameID)
    }


    findLocationFromDeviceID(deviceID) {

        let device = this.devices.find(ele => ele.id == deviceID)

        let location;
        if(device.location) {

            location = this.locationList.find(ele => ele.id == device.location);
        }
        return location && location.name ? location.name : 'Interacted with an Objective'
    }

    //TODO: WE NEED TO STORE THIS SVG IN DB AND PULL IT DOWN TO SET.
    ngAfterViewInit() {

    }
}
