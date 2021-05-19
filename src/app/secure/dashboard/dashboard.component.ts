import { Component, OnInit, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { combineLatest } from 'rxjs';
import { AuthService } from 'src/service/auth.service';
import { DeviceService } from 'src/service/device.service';
import { GameService } from 'src/service/game.service';
import { UserServiceService } from 'src/service/user-service.service';

// actionIDs associated with specific actions
const MEDIC    = 11;
const CAPTURE  = 2;
const ASSIST   = 3;
const BOMB_ARM = 8;
const BOMB_DIF = 9;


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  pieData: any[];
  view: any[] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#CC5500', '#AAAAAA']
  };

  @ViewChild(DatatableComponent) table: DatatableComponent;
  ColumnMode = ColumnMode;
  rows = [
  ];

  currentVals = {
    firstName: '',
    lastName: '',
    clanTag: '',
    email: '',
    phone: '',
    bio: '',
    profile: '',
    fieldName: '',
    callSign: '',
    fieldProfileID: '',
    userID: '',
    imageID: '',
    imageData: ''
  }
  temp = [];
  columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];

  isPlayer;
  isField;

  actionList;

  allActions;
  totalCaptures = 0;
  totalAssists = 0;
  totalMedics = 0;
  totalBombArm = 0;
  totalBombDis = 0;

  gameHistData = [];

  gameSvc: GameService;
  authSvc: AuthService;
  userSvc: UserServiceService;
  deviceSvc: DeviceService;

  constructor(gameService: GameService,
              authService: AuthService,
              userService: UserServiceService,
              deviceService: DeviceService) {
    this.gameSvc = gameService;
    this.authSvc = authService;
    this.userSvc = userService;
    this.deviceSvc = deviceService;
  }

  ngOnInit(): void {

    this.isPlayer = this.userSvc.isPlayer;
    this.isField = this.userSvc.isField;

    combineLatest([this.userSvc.getUserData(), this.gameSvc.getActions()]).subscribe(([userData, actions]) => {

      this.actionList = actions;

      if (this.isField) {

        this.setGameHistStats(userData);
        this.currentVals.profile = userData.fieldProfile.profile ? userData.fieldProfile.profile : 'Describe your Field!';
        this.currentVals.fieldName = userData.callSign ? userData.callSign : 'Your Field Name';
        this.currentVals.fieldProfileID = userData.fieldProfile.id;
        this.currentVals.imageID = userData.fieldProfile.imageID ? userData.fieldProfile.imageID : 0;
      }
      else if (this.isPlayer) {

        this.setGameScoreStats(userData);

        this.currentVals.bio = userData.playerProfile.outfit ? userData.playerProfile.outfit : 'Tell us about your loadout!';
        this.currentVals.clanTag = userData.playerProfile.clanTag ? userData.playerProfile.clanTag : 'Declare your Clan!';
        this.currentVals.callSign = userData.callSign ? userData.callSign : 'Whats your callsign!';
        this.currentVals.imageID = userData.playerProfile.imageID ? userData.playerProfile.imageID : 0;
      }
      this.currentVals.firstName = userData.firstName ? userData.firstName : 'First Name';
      this.currentVals.lastName = userData.lastName ? userData.lastName : 'Last Name';
      this.currentVals.email = userData.email ? userData.email : 'E-mail';
      this.currentVals.phone = userData.phoneNumber ? userData.phoneNumber : 'Phone Number';

      this.currentVals.userID = userData.id;
      if(this.currentVals.imageID){
        this.authSvc.getImage(this.currentVals.imageID).subscribe(
          imageData => {
            this.currentVals.imageData = imageData['image'] ? imageData['image'] : null;
          }
        )
      }

    })
  }

  onSelect(data): void {
    // console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    // console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    // console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  updateFilter(event) {

    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  setGameScoreStats(userData) {

    let games       = [];

    for (let rfid of userData.rfids) {

      for (let action of rfid.gameActions) {
        // Look to see if that game exists, if not create it
        // and stuff actions under the right game
        let game = games.find(ele => ele.id == action.gameID)

        if (game) { game.actions.push(action) }
        else      { games.push({id:action.gameID, actions:[action]}) }

      }
    }

    games = games.sort((a,b) => b.id - a.id);

    for (let game of games) {

        let medics   = 0;
        let captures = 0;
        let assists  = 0;
        let bombArm  = 0;
        let bombDis  = 0;

        for (let action of game.actions) {

          let points = this.actionList.find(ele => ele.id == action.actionID).points;

          switch (action.actionID) {

            case MEDIC:
              medics += points;
              this.totalMedics += points;
              break;

            case CAPTURE:
              captures += points;
              this.totalCaptures += points;
              break;

            case ASSIST:
              assists += points;
              this.totalAssists += points;
              break;

            case BOMB_ARM:
              bombArm += points;
              this.totalBombArm += points;
              break;

            case BOMB_DIF:
              bombDis += points;
              this.totalBombDis += points;
              break;
          }
        }

        this.gameHistData.push({

            id       : game.id,
            // start    : game.startTime.toLocaleString('en-US', {hourCycle:"h24"}),
            // end      : game.endTime.toLocaleString('en-US', {hourCycle:"h24"}),
            pieData  : [{name:"Medics",         value:medics},
                        {name:"Captures",       value:captures},
                        {name:"Assists",        value:assists},
                        {name:"Bombs Armed",    value:bombArm},
                        {name:"Bombs Diffused", value:bombDis}]
            // duration : new Date(duration).toUTCString().slice(17,25)

        })

    }
    this.pieData = [{name:"Medics",         value:this.totalMedics},
                    {name:"Captures",       value:this.totalCaptures},
                    {name:"Assists",        value:this.totalAssists},
                    {name:"Bombs Armed",    value:this.totalBombArm},
                    {name:"Bombs Diffused", value:this.totalBombDis}]
  }


    printTimeFromTotalMilli(milli) {

        let tot_secs = milli/1000;

        let hrs = Math.floor(tot_secs / 3600);
        tot_secs %= 3600;
        let mins = Math.floor(tot_secs / 60);
        let secs = tot_secs % 60;

        return [hrs,mins,secs]
    }

  setGameHistStats(userData) {

    let games;
    this.gameSvc.getGamesByFieldProfile(this.userSvc.getToken(), userData.fieldProfile.id).subscribe(

        data => {

            games = data;

            for (let game of games.sort((a, b) => b.id - a.id)) {

                console.log(game.id, game.gameActions)
                if (!game.gameActions.length || !game.endTime){
                    continue
                }

                let medics   = 0;
                let captures = 0;
                let assists  = 0;
                let bombArm  = 0;
                let bombDis  = 0;

                for (let action of game.gameActions){
                    switch (action.actionID) {

                      case MEDIC:
                        medics ++;
                        this.totalMedics ++;
                        break;

                      case CAPTURE:
                        captures ++;
                        this.totalCaptures ++;
                        break;

                      case ASSIST:
                        assists ++;
                        this.totalAssists ++;
                        break;

                      case BOMB_ARM:
                        bombArm ++;
                        this.totalBombArm ++;
                        break;

                      case BOMB_DIF:
                        bombDis ++;
                        this.totalBombDis ++;
                        break;
                    }
                }

                let duration = Date.parse(game.endTime) - Date.parse(game.startTime)

                let pieData = [{name:"Medics",        value:medics},
                               {name:"Captures",      value:captures},
                               {name:"Assists",       value:assists},
                               {name:"Bombs Armed",   value:bombArm},
                               {name:"Bombs Diffused",value:bombDis}]

                this.gameHistData.push({

                    id       : game.id,
                    start    : game.startTime.toLocaleString('en-US', {hourCycle:"h24"}),
                    end      : game.endTime.toLocaleString('en-US', {hourCycle:"h24"}),
                    pieData  : pieData,
                    duration : new Date(duration).toUTCString().slice(17,25)

                })


            }


            this.pieData = [{name:"Medics",        value:this.totalMedics},
                            {name:"Captures",      value:this.totalCaptures},
                            {name:"Assists",       value:this.totalAssists},
                            {name:"Bombs Armed",   value:this.totalBombArm},
                            {name:"Bombs Diffused",value:this.totalBombDis}]

        }
    )

    console.log(this.gameHistData)
  }


}
