import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MapComponent } from 'src/app/global/map/map.component'
import { NonSecureAPIService } from 'src/service/non-secure-api.service';
import { SecureAPIService } from 'src/service/secure-api.service';
import { UserServiceService } from 'src/service/user-service.service';
import { TokenStorageService } from 'src/service/token-storage.service';
import { ScoreService } from 'src/service/score.service';
import { combineLatest } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';


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

  @ViewChild(MapComponent) childMap: MapComponent;

  selectedField;
  selectedMode;
  selectedGame;
  fieldCardData = [];
  fields;
  gameData;

  pastGamesByConfig;

  tempReplayData = [];
  holdData = [];
  baseDevices = [];
  replayIntervalID;

  dateOptions = { "dateStyle": "long", "timeStyle": "medium", "hourCycle": "h24" };

  constructor(
    private userSvc: UserServiceService,
    private tokenSvc: TokenStorageService,
    private nonSecAPIsvc: NonSecureAPIService,
    private secAPIsvc: SecureAPIService,
    private scoreSvc: ScoreService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    combineLatest([this.nonSecAPIsvc.getPastGamesByConfig(),
    this.nonSecAPIsvc.getLocationsList(),
    this.nonSecAPIsvc.getActionsList(),
    this.secAPIsvc.getFieldListFromAPI(this.tokenSvc.getToken()),
    this.activatedRoute.queryParams
    ])
      .subscribe(

        ([pastGamesByConfig, locations, actions, fields, queryParams]) => {

          this.scoreSvc.setGlobalData(locations, actions);

          this.pastGamesByConfig = pastGamesByConfig;
          this.fields = fields;

          let new_field, field, game, start
          for (let config of this.pastGamesByConfig) {

            config.games.sort((a, b) => b.id - a.id);

            for (let game of config.games) {
              game.creationDate = new Date(game.creationDate);
              game.creationDate = game.creationDate.toLocaleString("en-US", this.dateOptions);
            }

            field = this.fieldCardData.find(ele => ele.id == config.fieldProfileID)
            if (field) {
              field.configs.push(config)
            }
            else {

              new_field = this.fields.find(ele => ele.fieldProfile.id == config.fieldProfileID);
              let cardData = {
                'id': new_field.fieldProfile.id,
                'name': new_field.callSign,
                'description': new_field.fieldProfile.profile,
                'imageData': null,
                'configs': [config]
              }

              if (new_field.fieldProfile.imageID) {
                this.nonSecAPIsvc.getImage(new_field.fieldProfile.imageID).subscribe(
                  imageData => {
                    cardData.imageData = imageData['image'] ? imageData['image'] : null;
                  }
                )
              }

              this.fieldCardData.push(cardData);
            }
          }

          this.fieldCardData.sort((a, b) => b.id - a.id);

          if (queryParams.field) {

            this.selectField(queryParams.field)

            if (queryParams.gameMode) {

              this.changeGameMode({target:{value:queryParams.gameMode}})

              if (queryParams.gameID) {

                this.changeGame({selected:[{id:queryParams.gameID}]})
              }
            }
          }

        })
  }

  changeGameMode(event) {

    this.router.navigate([], {
      queryParams: {
        gameMode: event.target.value
      },
      // queryParamsHandling: 'merge'
    });

    this.stopReplay();

    let newConfig = this.pastGamesByConfig.find(ele => ele.id == event.target.value)
    this.selectedMode = newConfig;
    this.selectedMode.deviceMap = JSON.parse(newConfig.deviceMap);
    this.selectedGame = null;
  }

  changeGame(event) {

    this.router.navigate([], {
      queryParams: {
        gameID: event.selected[0].id,
      },
      // queryParamsHandling: 'merge'
    });

    this.stopReplay();

    let game = this.selectedMode.games.find(ele => ele.id == event.selected[0].id);

    if (!game) { return }

    this.selectedGame = game;

    combineLatest([this.nonSecAPIsvc.getExtendedGameData(game.id),
    this.nonSecAPIsvc.getGameStats(game.id)]).subscribe(

      ([extendedGameData, stats]) => {

        let configData = extendedGameData["configData"];

        this.scoreSvc.gameID = game.id;
        this.scoreSvc.devices = JSON.parse(configData.deviceMap);
        this.scoreSvc.gameStats = stats
        this.scoreSvc.gameConfig = configData

        this.scoreSvc.calcScoreAndSetActions();
      })
  }



  selectField(fieldID) {
    //viewGame
    this.router.navigate(['secure/past-games'], {
      queryParams: {
        field: fieldID
      },
      // queryParamsHandling: 'merge'

    });
    this.selectedField = this.fieldCardData.find(ele => ele.id == fieldID);
  }

  deSelectField() {
    this.router.navigate([]);
    this.selectedField = null;
    this.selectedMode = null;
    this.selectedGame = null;

    this.stopReplay();
  }


  stopReplay() {

    if (this.replayIntervalID) {
      clearInterval(this.replayIntervalID);
      this.replayIntervalID = null;
    }
  }

  deleteGame() {

    if (!this.selectedGame?.id) { return }

    let safe = confirm("!! WARNING !!\n\nDeleting this Game will DELETE ALL SCORES earned from this game.\n\nAre you sure you want to DELETE it?");
    if (!safe) { return }

    this.secAPIsvc.deleteGame(this.tokenSvc.getToken(), this.selectedGame.id).subscribe(
      resp => {
        const indx = this.selectedMode.games.findIndex(ele => ele.id == this.selectedGame.id);
        this.selectedMode.games.splice(indx, 1);
        this.selectedGame = null;
      },
      err => { }
    )
  }


  getTotalGamesFromField(field) {

    return field.configs.reduce((acc, config) => acc + (config.games.length), 0)
  }


  replay() {

    let holdData = [...this.scoreSvc.allActions];

    //Reset map
    for (let device of this.selectedMode.deviceMap) {

      device.team = device.teamID ? device.team : null;
      this.childMap.updateLocationState(device);
    }

    for (let player of this.scoreSvc.gameStats["player_stats"]) {
      player.data = [];
    }

    for (let team of this.scoreSvc.gameStats["team_stats"]) {
      team.data = [];
    }

    this.scoreSvc.calcScoreAndSetActions()

    if (!this.replayIntervalID) {
      this.replayIntervalID = setInterval(
        () => {

          if (!holdData?.length && this.replayIntervalID) {
            clearInterval(this.replayIntervalID);
            this.replayIntervalID = null;
          }

          if (holdData?.length) {

            let act = holdData.pop()
            let dev = this.scoreSvc.devices.find(ele => ele.id == act.deviceID)
            let color = this.scoreSvc.teams.find(ele => ele.teamID == act.teamID)?.color

            if (dev) {

              dev.team = color ? color.replace("#", "") : null;

              switch (act.actionID) {

                case 1:
                  dev.stable = true;
                  dev.config = 0x0A;
                  break;

                case 2:
                  dev.stable = false;
                  dev.config = 0x0A;
                  break;

                case 8:
                  dev.bomb_status = 0xBA;
                  dev.config = 0xBB;
                  break;

                case 9:
                  dev.bomb_status = 0xBD;
                  dev.config = 0xBB;
                  break;

                case 15:
                  dev.bomb_status = 0xDD;
                  dev.config = 0xBB;
                  break;

                case 11:
                case 12:
                case 13:
                  dev.config = 0x0E;
                  break;
              }

              this.childMap.updateLocationState(dev);
            }
            this.scoreSvc.updateActionAndCalcScore(act);
          }

        }, 500);
    }
  }


}
