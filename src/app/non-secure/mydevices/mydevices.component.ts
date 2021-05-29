import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';

import { GameService } from 'src/service/game.service';
import { TokenStorageService } from 'src/service/token-storage.service';
import { NonSecureAPIService } from 'src/service/non-secure-api.service';

@Component({
    selector: 'app-mydevices',
    templateUrl: './mydevices.component.html',
    styleUrls: ['./mydevices.component.scss']
})
export class MydevicesComponent implements OnInit {

    devices;
    gameConfig;
    activeGames;
    activeGame = false;
    map;

    teams         = [];
    players       = [];
    allActions    = [];
    deviceActions = [];
    gameConfigs   = [];
    gameCardData  = [];
    gameStats;

    locationList;
    actionList;

    description;
    currentTab = 'map'

    constructor(
        private tokenSvc     : TokenStorageService,
        private gameSvc      : GameService,
        private nonSecAPIsvc : NonSecureAPIService
      ) {}

    ngOnInit() {

        combineLatest([this.nonSecAPIsvc.getActiveGames(),
                       this.nonSecAPIsvc.getLocations(),
                       this.nonSecAPIsvc.getActions()
            ])
            .subscribe(
                ([activeGames, location, actions]) => {
                    // console.log(socketData," socketData")
                    this.locationList = location;
                    this.actionList   = actions;
                    this.activeGames  = activeGames;

                    for (let game of this.activeGames){
                        this.nonSecAPIsvc.getGameConfigsByID(game.gameConfigID).subscribe(
                            data => {
                                this.gameCardData.push({'description': data["description"],
                                                        'startTime'  : game.startTime,
                                                        'id'         : game.id,
                                                        'mapID'      : data["mapID"],
                                                        'devices'    : game.devices});
                            })
                    }})
        // Socket Data routes
        // Single socket setup in app.component - these listen for different
        // socket events to update specific areas
        this.gameSvc.getNewAction().subscribe(socketData=>{
            console.log(socketData," New Action");

            if(this.activeGame){
                this.updateActionAndCalcScore(socketData);
            }
        })

        this.gameSvc.getPlayerUpdate().subscribe(socketData=>{
            console.log(socketData," Player Update");

            if(this.activeGame){
                this.updatePlayerData(socketData);
            }
        })

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

        // Pull device data in from live devices - not config data
        combineLatest([this.nonSecAPIsvc.getGameConfigsByID(gameConfigID),
                       this.nonSecAPIsvc.getGameStats(gameID.target.value),
                       this.nonSecAPIsvc.getDevicesByGameID(gameID.target.value)]).subscribe(
                            ([gameConfig, stats, deviceData]) => {

                                this.devices     = deviceData;
                                this.activeGame  = true;
                                this.map         = gameConfig['mapID'];
                                this.description = gameConfig['description'];
                                this.gameStats   = stats;
                                this.gameConfig  = gameConfig;

                                this.calcScoreAndSetActions();
                            })
    }


    updatePlayerData(player) {
        let index = this.gameStats["player_stats"].findIndex(ele => ele.rfidID == player.rfidID);
        if (index) {this.gameStats["player_stats"][index].is_alive = player.is_alive;}
        this.calcScoreAndSetActions();
    }


    updateActionAndCalcScore(action){

        if (action.teamID && !action.rfidID){

            let team = this.gameStats["team_stats"].find(ele => ele.id == action.teamID);
            if (team) {team.data.push(action);}
        }
        else if (action.rfidID) {

            let player = this.gameStats["player_stats"].find(ele => ele.rfidID == action.rfidID);
            if (player) {player.data.push(action)}
        }

        this.calcScoreAndSetActions();
    }
    // This function grabs player and team stats from the initial load and parses
    // them out for ease of display within the UI
    //
    // stats are grouped by player and team actions --- each action is parsed
    // and scores tallied in order to have total scores for each player and
    // give a list of running game actions.  The lastAction and lastLocation are
    // specifically isolated to show in the UI
    calcScoreAndSetActions() {

        this.allActions = [];
        this.teams      = [];
        this.players    = [];

        // Assemble PLAYER stats from API data
        this.gameStats["player_stats"].forEach(player => {

            let playerObj = {
                teamID       : player.teamID,
                rfidID       : player.rfidID,
                name         : player.name,
                is_alive     : player.is_alive,
                lastAction   : this.actionList.find(ele => ele.id == player.data.sort((a, b) => b.id - a.id)[0].actionID).action,
                lastLocation : this.findLocationFromDeviceID(player.data.sort((a, b) => b.id - a.id)[0].deviceID),
                totalPoints  : player.data.reduce((prev, next) => prev + this.actionList.find(ele => ele.id == next.actionID).points, 0)
            }
            this.players.push(playerObj)

            // Stuff it in ALL ACTIONS history also
            for (let act of player.data.sort((a, b) => b.id - a.id)) {

                let date = new Date(act.creationDate);
                let historyObj = {
                    id        : act.id,
                    team      : this.gameConfig["teams"].find(ele => ele.id == player.teamID).name,
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
        this.gameStats["team_stats"].forEach(team => {

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
                    id        : act.id,
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
        for (let team of this.gameConfig['teams']) {

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
        // Sort actions descending
        this.allActions = this.allActions.sort((a, b) => b.id - a.id);
        // Figure out if last action was capture and calculate time held since CAPTURE
        // add those points to the total for each team to show current points status
        // THIS WILL NOT continue to stack points - a refresh is required - or it will
        // get updated when an action or player update is pushed over the socket
        for (let device of this.devices) {

            if (device.teamID == null || device.config != 0x0A) {continue}

            let actions = this.allActions.filter(action => action.location == this.findLocationFromDeviceID(device.id));
            // If an action exists and the last action doesn't already cover the time
            // held, then add on time since last CAPTURE
            if (actions.length && !actions[0].time_held) {

                let lastCapComplete = actions.find(act => act.action == "CAPTURE COMPLETE");

                if (lastCapComplete) {

                    let now = new Date().getTime();
                    let add_score = Math.floor(((now - lastCapComplete.timestamp)/1000) / device.point_scale);

                    let dev_team = this.teams.find(team => team.teamID == device.teamID);
                    dev_team.score += add_score;

                }
            }

        }
        // Purge all the stuff without a player name to show the stuff that matters
        this.allActions = this.allActions.filter(act => act.name);
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

    goBackToMainMenu() {
        this.activeGame = false;
    }
}
