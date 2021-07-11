import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';

import { GameService } from 'src/service/game.service';
import { TokenStorageService } from 'src/service/token-storage.service';
import { NonSecureAPIService } from 'src/service/non-secure-api.service';
import { ScoreService } from 'src/service/score.service';
import { GoogleAnalyticsService } from 'src/service/google-analytics.service';

@Component({
    selector: 'app-mydevices',
    templateUrl: './mydevices.component.html',
    styleUrls: ['./mydevices.component.scss']
})
export class MydevicesComponent implements OnInit {

    activeGame = false;

    activeGamesByConfig;

    map;

    gameConfigs = [];
    gameCardData = [];

    gameID;

    newAction;
    playerUpdate;
    checkSocketConnect;

    temp;

    fbShareUrl = 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fplay.skirmesh.net%2Fnon-secure%2Flive-games%3Fgameid%3DgameidFromUrl&amp;src=sdkpreparse'
    description;
    currentTab = 'map'

    constructor(
        private tokenSvc: TokenStorageService,
        private gameSvc: GameService,
        private nonSecAPIsvc: NonSecureAPIService,
        private scoreSvc: ScoreService,
        private analyticSvc: GoogleAnalyticsService,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {

        this.setGameData();

        this.activatedRoute.queryParams.subscribe(
            data => {
                if(data.gameid) {
                    const gameid = data.gameid
                    //Need to check if game is active else we get console error.
                    this.selectActiveGame({ target: { value: gameid } })
                } else {
                    this.goBackToMainMenu();
                }

            }
        )
    }

    ngAfterViewInit() {
        // Socket Data routes
        // Single socket setup in app.component - these listen for different
        // socket events to update specific areas
        this.newAction = this.gameSvc.getNewAction().subscribe(
            socketData => {
                console.log(socketData, " New Action");

                if (this.activeGame &&
                    this.gameID &&
                    this.gameID == socketData["gameID"]) {

                      this.scoreSvc.updateActionAndCalcScore(socketData);
                }
            })

        this.playerUpdate = this.gameSvc.getPlayerUpdate().subscribe(
            socketData => {
                console.log(socketData, " Player Update");

                if (this.activeGame &&
                    this.scoreSvc.gameConfig?.length &&
                    this.scoreSvc.gameConfig?.teams.find(team => team.id == socketData["teamID"])) {

                      this.scoreSvc.updatePlayerData(socketData);
                }
            })

        this.checkSocketConnect = this.gameSvc.checkSocketConnect().subscribe(
            () => {
                console.log("SOCKET CONNECTED")

                if (this.activeGame && this.gameID) {
                    // We need to update all the data for the tables when the
                    // socket reconnects
                    this.nonSecAPIsvc.getGameStats(this.gameID).subscribe(
                        stats => {
                            this.scoreSvc.gameStats = stats;
                            this.scoreSvc.calcScoreAndSetActions();
                        }
                    )
                }
                this.setGameData();
            }
        )
    }


    setGameData() {

        combineLatest([this.nonSecAPIsvc.getActiveGamesByConfig(),
        this.nonSecAPIsvc.getLocationsList(),
        this.nonSecAPIsvc.getActionsList()
        ])
            .subscribe(

                ([activeGamesByConfig, locations, actions]) => {

                    this.gameCardData = [];

                    this.scoreSvc.setGlobalData(locations, actions);

                    this.activeGamesByConfig = activeGamesByConfig;

                    for (let config of this.activeGamesByConfig) {
                        // This works well, for now, because each game config
                        // can only have a single active game with that config
                        // That's why we always shift() the first index
                        let game = config.games.shift()
                        if (!game) { continue }

                        let start = new Date(game.startTime)
                        this.gameCardData.push({
                            'description': config.description,
                            'startTime': start.toLocaleString('en-US', { hour12: false }),
                            'id': game.id,
                            'mapID': config.mapID,
                            'devices': game.devices
                        });


                    }
                    this.gameCardData.sort((a, b) => b.id - a.id);
                })
    }


    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.playerUpdate.unsubscribe()
        this.newAction.unsubscribe()
        this.checkSocketConnect.unsubscribe()
    }


    changeGameTab(tabToChangeTo) {

        this.currentTab = tabToChangeTo;
        // this.router.navigate([], {
        //     queryParams: {
        //         currentTab: tabToChangeTo
        //     },
        //     queryParamsHandling: 'merge',
        //   });
        document.getElementById("map").classList.remove('active');
        // document.getElementById("teamScore").classList.remove('active');
        document.getElementById("eventsTracker").classList.remove('active');

        document.getElementById(tabToChangeTo).classList.add('active');
    }


    selectActiveGame(ID) {

        const gameID = ID.target ? ID.target.value : ID;

        this.gameID = gameID;
        // Pull device data in from live devices - not config data
        this.router.navigate([], {
            queryParams: {
                gameid: gameID
            }
        });

        this.analyticSvc.viewLiveGame('view_live_game', 'engagement', 'view game ' + gameID)

        combineLatest([this.nonSecAPIsvc.getExtendedGameData(gameID),
        this.nonSecAPIsvc.getGameStats(gameID)]).subscribe(

            ([extendedGameData, stats]) => {

                this.fbShareUrl = this.fbShareUrl.replace('gameidFromUrl', gameID)
                let configData = extendedGameData["configData"];
                let gameData = extendedGameData["gameData"];

                this.activeGame = true;
                this.map = configData.mapID;
                this.description = configData.description;

                this.scoreSvc.gameID = gameID;
                this.scoreSvc.devices = gameData.devices;
                this.scoreSvc.gameStats = stats
                this.scoreSvc.gameConfig = configData

                this.scoreSvc.calcScoreAndSetActions();
                this.temp = [...this.scoreSvc.allActions];
            })
    }


    goBackToMainMenu() {
        this.router.navigate([]);
        this.activeGame = false;
        this.gameID = null;
    }


    getRowClass(player) {
        return { "is_dead": !player.is_alive };
    }

    updateFilter(event) {

        const val = event.target.value.toLowerCase();

        // filter our data
        const temp = this.temp.filter(action => {
            return action.name.toLowerCase().indexOf(val) !== -1 || !val;
        });

        // update the rows
        this.scoreSvc.allActions = temp;
    }

}
