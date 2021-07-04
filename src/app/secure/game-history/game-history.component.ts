import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { NonSecureAPIService } from 'src/service/non-secure-api.service';
import { ScoreService } from 'src/service/score.service';
import { combineLatest } from 'rxjs';


interface ITab {
  title: string;
  content: string;
  removable?: boolean;
  disabled?: boolean;
  active?: boolean;
  customClass?: string;
}

@Component({
  selector: 'app-game-history',
  templateUrl: './game-history.component.html',
  styleUrls: ['./game-history.component.scss']
})
export class GameHistoryComponent implements OnInit {


  gameModes;
  selectedMode;
  selectedGame;
  gameCardData;
  gameData;

  pastGamesByConfig;

  constructor(
    private nonSecAPIsvc : NonSecureAPIService,
    private scoreSvc : ScoreService) { }

  ngOnInit(): void {

    this.setGameHistoryData()

  }

  changeGameMode(e){
    // console.log(e)
    let newMode = this.gameModes.find(ele=> ele.id == e.target.value)
    this.selectedMode = newMode;
    // this.selectedGame = newMode.games[0]
    this.selectedGame = null;
  }

  changeGame(e){

    let game = this.selectedMode.games.find(ele=> ele.id == e.target.value);

    if (!game) {return}

    this.selectedGame = game;

    combineLatest([this.nonSecAPIsvc.getExtendedGameData(game.id),
                   this.nonSecAPIsvc.getGameStats(game.id)]).subscribe(

                        ([extendedGameData, stats]) => {

                            let configData = extendedGameData["configData"];
                            let gameData   = extendedGameData["gameData"];

                            this.scoreSvc.gameID     = game.id;
                            this.scoreSvc.devices    = gameData.devices;
                            this.scoreSvc.gameStats  = stats
                            this.scoreSvc.gameConfig = configData

                            this.scoreSvc.calcScoreAndSetActions();
                        })
  }


  setGameHistoryData() {

      // Need to clarify this is "ByConfig"
      combineLatest([this.nonSecAPIsvc.getPastGames(),
                     this.nonSecAPIsvc.getLocationsList(),
                     this.nonSecAPIsvc.getActionsList()
          ])
          .subscribe(

              ([pastGamesByConfig, locations, actions]) => {

                  this.gameCardData = [];

                  this.scoreSvc.setGlobalData(location, actions);

                  this.pastGamesByConfig = pastGamesByConfig;

                  //TODO: Cleanup this assignment - use card data or similar
                  this.gameModes = pastGamesByConfig;

                  for (let config of this.pastGamesByConfig) {
                      // This works well, for now, because each game config
                      // can only have a single active game with that config
                      // That's why we always shift() the first index

                      config.games.sort((a, b) => b.id - a.id);

                      // TODO: This is a holdover, but can get used to set
                      // better data for the UI
                      let game = config.games.shift()
                      let start = new Date(game.startTime)
                      this.gameCardData.push({'description': config.description,
                                              'startTime'  : start.toLocaleString('en-US', {hour12:false}),
                                              'id'         : game.id,
                                              'mapID'      : config.mapID,
                                              'devices'    : game.devices});
                  }
                  this.gameCardData.sort((a,b) => b.id - a.id);
          })
  }


}
