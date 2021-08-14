import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MapComponent } from 'src/app/global/map/map.component';
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
  userToken;
  fieldProfile;
  dateOptions = { "dateStyle": "long", "timeStyle": "medium", "hourCycle": "h24" };

  constructor(
    private userSvc: UserServiceService,
    private tokenSvc: TokenStorageService,
    private nonSecAPIsvc: NonSecureAPIService,
    private secAPIsvc: SecureAPIService,
    private scoreSvc: ScoreService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { 
      
    }

   ngOnInit() {
   
    this.tokenSvc.userToken.subscribe(
      data => {
        if(data){
          this.userToken = data;
          this.userSvc.fieldProfile.subscribe(
            res => {
                if (res) {
                    this.fieldProfile = res;
                }
            }
        );
        combineLatest([this.nonSecAPIsvc.getPastGamesByConfig(),
          this.nonSecAPIsvc.getLocationsList(),
          this.nonSecAPIsvc.getActionsList(),
          this.secAPIsvc.getFieldListFromAPI(this.userToken),
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
    }
  );
  
  }



  selectField(fieldID) {

      const urlTree = this.router.createUrlTree([], {
        queryParams: {
            field     : fieldID,
            gameMode  : null,
            gameID    : null },
        queryParamsHandling: "merge",
        preserveFragment: true });

      window.history.replaceState(urlTree, "Field", urlTree.toString());

      this.selectedField = this.fieldCardData.find(ele => ele.id == fieldID);
  }


  changeGameMode(event) {

    const urlTree = this.router.createUrlTree([], {
      queryParams: {
          field     : this.selectedField.id,
          gameMode  : event.target.value,
          gameID    : null  },
      queryParamsHandling: "merge",
      preserveFragment: true });

    window.history.replaceState(urlTree, "Field", urlTree.toString());

    this.stopReplay();

    let newConfig = this.pastGamesByConfig.find(ele => ele.id == event.target.value)
    this.selectedMode = newConfig;
    this.selectedMode.deviceMap = Array.isArray(newConfig.deviceMap) ? newConfig.deviceMap : JSON.parse(newConfig.deviceMap);
    this.selectedGame = null;
  }



  changeGame(event) {

    const urlTree = this.router.createUrlTree([], {
      queryParams: {
          field     : this.selectedField.id,
          gameMode  : this.selectedMode.id,
          gameID    : event.selected[0].id },
      queryParamsHandling: "merge",
      preserveFragment: true });

    window.history.replaceState(urlTree, "Field", urlTree.toString());

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


  deSelectField() {

    const urlTree = this.router.createUrlTree([], {
      queryParams: {
          field     : null,
          gameMode  : null,
          gameID    : null },
      queryParamsHandling: "merge",
      preserveFragment: true });

    window.history.replaceState(urlTree, "Field", urlTree.toString());
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

    this.secAPIsvc.deleteGame(this.userToken, this.selectedGame.id).subscribe(
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

    let mapElement = document.getElementById("appMapComponent")
    if (this.isElementOutViewport(mapElement)) {
        mapElement.scrollIntoView();
    }

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


  isElementOutViewport(el) {
    var rect = el.getBoundingClientRect();
    return rect.bottom < 0 || rect.right < 0 || rect.left > window.innerWidth || rect.top > window.innerHeight;
  }


}
