import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { NonSecureAPIService } from 'src/service/non-secure-api.service';
import { SecureAPIService } from 'src/service/secure-api.service';
import { UserServiceService } from 'src/service/user-service.service';
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

  selectedField;
  selectedMode;
  selectedGame;
  fieldCardData = [];
  fields;
  gameData;

  pastGamesByConfig;

  constructor(
    private userSvc      : UserServiceService,
    private nonSecAPIsvc : NonSecureAPIService,
    private secAPIsvc    : SecureAPIService,
    private scoreSvc     : ScoreService) { }

  ngOnInit(): void {

    this.setGameHistoryData()

  }

  changeGameMode(event){
    let newConfig = this.pastGamesByConfig.find(ele=> ele.id == event.target.value)
    this.selectedMode = newConfig;
    this.selectedGame = null;
  }

  changeGame(event){

    let game = this.selectedMode.games.find(ele=> ele.id == event.target.value);

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
      combineLatest([this.nonSecAPIsvc.getPastGamesByConfig(),
                     this.nonSecAPIsvc.getLocationsList(),
                     this.nonSecAPIsvc.getActionsList(),
                     this.secAPIsvc.getFieldListFromAPI(this.userSvc.getToken()),
          ])
          .subscribe(

              ([pastGamesByConfig, locations, actions, fields]) => {

                  this.scoreSvc.setGlobalData(location, actions);

                  this.pastGamesByConfig = pastGamesByConfig;
                  this.fields = fields;

                  let new_field, field, game, start
                  for (let config of this.pastGamesByConfig) {

                      config.games.sort((a, b) => b.id - a.id);

                      field = this.fieldCardData.find(ele => ele.id == config.fieldProfileID)
                      if (field) {
                        field.configs.push(config)
                      }
                      else {

                        new_field = this.fields.find(ele => ele.fieldProfile.id == config.fieldProfileID);
                        let cardData = {'id'          : new_field.fieldProfile.id,
                                        'name'        : new_field.callSign,
                                        'description' : new_field.fieldProfile.profile,
                                        'imageData'   : null,
                                        'configs'     : [config]}

                        if(new_field.fieldProfile.imageID){
                          this.nonSecAPIsvc.getImage(new_field.fieldProfile.imageID).subscribe(
                            imageData => {
                              cardData.imageData = imageData['image'] ? imageData['image'] : null;
                            }
                          )
                        }

                        this.fieldCardData.push(cardData);
                      }
                  }
                  this.fieldCardData.sort((a,b) => b.id - a.id);
          })
  }

  selectField(fieldID) {
    this.selectedField = this.fieldCardData.find(ele => ele.id == fieldID);
  }

  deSelectField() {
    this.selectedField = null;
  }

}
