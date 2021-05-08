import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { DeviceService } from 'src/service/device.service';
import { GameService } from 'src/service/game.service';
import { TokenStorageService } from 'src/service/token-storage.service';
import { UserServiceService } from 'src/service/user-service.service';


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
    LOCATIONS;

    teams = [];
    players = [];
    allActions = [];
    locationList;
    actions;
    description;
    currentTab = 'map'
    tokenSvc: TokenStorageService;
    gameSvc: GameService;
    deviceSvc: DeviceService;
    userSvc: UserServiceService;

    constructor(
        tokenService: TokenStorageService,
        gameService: GameService,
        deviceService: DeviceService,
        userService: UserServiceService) {

        this.tokenSvc = tokenService;
        this.gameSvc = gameService;
        this.deviceSvc = deviceService;
        this.userSvc = userService;
    }

    ngOnInit() {

        combineLatest([this.gameSvc.getGames(this.tokenSvc.getToken()), this.gameSvc.getLocations(), this.gameSvc.getActions()])
            .subscribe(
                ([activeGames, location, actions]) => {
                    this.locationList = location;
                    this.actions = actions;
                    // console.log(location, actions)
                    this.activeGames = activeGames;
                    console.log(this.activeGames, "ACTIVE GAMES IN MY DEVICES")
                },
                err => {
                    //show message on page no games are active.
                }
            )
    }

    // getGamesWithActiveDevices(listOfGames){
    //    return listOfGames.filter(ele=>ele.devices.length>0)
    // }


    changeGameTab(tabToChangeTo) {
        this.currentTab = tabToChangeTo;
        if (tabToChangeTo == "map") {
            document.getElementById("teamScore").classList.remove('active');
            document.getElementById("EventsTracker").classList.remove('active');
        } else if (tabToChangeTo == "teamScore") {
            document.getElementById("map").classList.remove('active');
            document.getElementById("EventsTracker").classList.remove('active');
        } else if (tabToChangeTo == "EventsTracker") {
            document.getElementById("teamScore").classList.remove('active');
            document.getElementById("map").classList.remove('active');
        }
        document.getElementById(tabToChangeTo).classList.add('active');
    }


    selectActiveGame(gameID) {
        //need to reset teams info.
        // this.teams = [];
        let gameConfigID = this.findGameConfigIDForGame(gameID.target.value).gameConfigID;

        combineLatest([this.deviceSvc.getGameConfigsByID(this.tokenSvc.getToken(), gameConfigID),
        this.gameSvc.getGameStats(gameID.target.value)],
        ).subscribe(
            ([gameConfig, stats]) => {

                this.activeGame = true; 
                this.map = gameConfig['mapID'];
                this.description = gameConfig['description'];
                this.devices = this.findDevicesForGameID(gameConfigID);


                stats["player_stats"].forEach(player => {

                    let playerObj = {
                        teamID: player.teamID,
                        name: player.name,
                        is_alive: player.is_alive,
                        lastAction: this.actions.find(ele =>ele.id == player.data[player.data.length - 1].actionID).action, // TODO Need to query actions
                        lastLocation: this.findLastLocation(player.data[player.data.length - 1].deviceID),
                        totalPoints: player.data.reduce((prev, next) => prev + next.points, 0)
                    }
                    this.players.push(playerObj)

                    for (let act of player.data) {

                        let historyObj = {
                            team: stats["team_stats"].find(ele => ele.id == player.teamID).name,
                            name: player.name,
                            action: this.actions.find(ele =>ele.id == act.actionID).action, //this.findActionName(act.actionID), // TODO use this to search for action name
                            points: act.actionID, // TODO use this to search for action
                            timestamp: Date.parse(act.creationDate)
                        }

                        this.allActions.push(historyObj);
                    }
                });


                stats["team_stats"].forEach(team => {

                    let teamObj = {
                        teamID: team.id,
                        name: team.name,
                        color: '#' + team.color,
                        score: team.data.reduce((prev, next) => prev + next.points, 0),
                        players: this.players.filter(player => player.teamID == team.id)
                    }

                    this.teams.push(teamObj);

                    for (let act of team.data) {

                        let historyObj = {
                            team: team.name,
                            name: null,
                            action: this.actions.find(ele =>ele.id == act.actionID).action, // TODO use this to search for action name
                            points: act.points, // TODO use this to search for action
                            timestamp: Date.parse(act.creationDate)
                        }

                        this.allActions.push(historyObj);
                    }

                });


                this.allActions = this.allActions.sort((a, b) => (a.timestamp < b.timestamp) ? 1 : -1);

                console.log(":: POST GAME SELECT DATA ::", ":: TEAMS ::", this.teams, ":: PLAYERS ::", this.players, this.allActions)

            })
    }

    getTotalPlayerScore(userActions){
        let total;
        console.log(userActions,"user Actions",this.actions)

    } 
    findGameConfigIDForGame(gameID) {
        return this.activeGames.find(ele => ele.id == gameID)
    }


    findDevicesForGameID(gameID) {
        return this.activeGames.filter(ele => ele.gameConfigID == gameID && ele.devices.length > 0)[0].devices;
    }


    findLastAction(rfID, team) {
        let gameActions = team[0].data;
        let userActions = gameActions ? gameActions.filter(action => action.rfidID == rfID) : null;
        // console.log(userActions,"findLastAction")
        return userActions && userActions[0] && userActions[0].actionID ? userActions[0].actionID : 'Interact with a Node'
    }


    findLastLocation(deviceID) {
        //TODO: Grab device data and filter for location
        let device = this.devices.find(ele => ele.id = deviceID)
        // console.log(device,deviceID,this.devices,"devices");
        let location;
        if(device.location) {
            location = this.locationList.find(ele => ele.id = device.location); 
        }
        return location && location.name ?  location.name : 'Interacted with an Objective'
    }

    //TODO: WE NEED TO STORE THIS SVG IN DB AND PULL IT DOWN TO SET.
    ngAfterViewInit() {

    }
}
