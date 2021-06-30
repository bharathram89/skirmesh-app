import { Component, OnInit, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { combineLatest } from 'rxjs';

import { UserServiceService } from 'src/service/user-service.service';
import { NonSecureAPIService } from 'src/service/non-secure-api.service';
import { SecureAPIService } from 'src/service/secure-api.service';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

// actionIDs associated with specific actions
const RESPAWN  = 13;
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
  areaData: any[];

  // view: any[] = [700, 400];
  chartView = [500, 300]
  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ['#A10A28', '#C7B42C', '#5AA454', '#CC5500', '#AAAAAA']
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

  isField;

  actionList;

  allActions;
  totalCaptures = 0;
  totalAssists = 0;
  totalMedics = 0;
  totalBombArm = 0;
  totalBombDis = 0;

  // gameHistData = [];

  constructor(
              private userSvc      : UserServiceService,
              private nonSecAPIsvc : NonSecureAPIService,
              private secAPIsvc    : SecureAPIService,
              private breakpointObserver : BreakpointObserver
            ) {}

  ngOnInit(): void {

    this.isField = this.userSvc.isField;

    combineLatest([this.userSvc.getUserData(), this.nonSecAPIsvc.getActionsList()]).subscribe(([userData, actions]) => {

      this.actionList = actions;
      this.breakpointObserver.observe([
        '(max-width: 768px)'
          ]).subscribe(result => {
            if (result.matches) {
              this.chartView =[300,300]
            } else {
              // if necessary:
              this.chartView =[500,300]
            }
          });
      if (this.isField) {

        this.setGameHistStats(userData);
        this.currentVals.profile = userData.fieldProfile.profile ? userData.fieldProfile.profile : 'Describe your Field!';
        this.currentVals.fieldName = userData.callSign ? userData.callSign : 'Your Field Name';
        this.currentVals.fieldProfileID = userData.fieldProfile.id;
        this.currentVals.imageID = userData.fieldProfile.imageID ? userData.fieldProfile.imageID : 0;
      }
      else {

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
        this.nonSecAPIsvc.getImage(this.currentVals.imageID).subscribe(
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

    let stackedAreaData = [{"name"  :"Captures",
                            "series":[]},
                           {"name"  :"Assists",
                            "series":[]},
                           {"name"  :"Medic Events",
                            "series":[]},
                           {"name"  :"Bombs Armed",
                            "series":[]},
                           {"name"  :"Bombs Diffused",
                            "series":[]}];

    games = games.sort((a,b) => a.id - b.id);

    for (let [index, game] of games.entries()) {

        let medics   = 0;
        let captures = 0;
        let assists  = 0;
        let bombArm  = 0;
        let bombDis  = 0;

        for (let action of game.actions) {

          let points = this.actionList.find(ele => ele.id == action.actionID).points;

          switch (action.actionID) {

            case MEDIC:
            case RESPAWN:
              medics ++ // += points;
              this.totalMedics += points;
              break;

            case CAPTURE:
              captures ++ // += points;
              this.totalCaptures += points;
              break;

            case ASSIST:
              assists ++ // += points;
              this.totalAssists += points;
              break;

            case BOMB_ARM:
              bombArm ++ // += points;
              this.totalBombArm += points;
              break;

            case BOMB_DIF:
              bombDis ++ // += points;
              this.totalBombDis += points;
              break;

            default:
              break;
          }
        }

        // this.gameHistData.push({
        //
        //     id       : game.id,
        //     // start    : game.startTime.toLocaleString('en-US', {hourCycle:"h24"}),
        //     // end      : game.endTime.toLocaleString('en-US', {hourCycle:"h24"}),
        //     pieData  : [{name:"Captures",       value:captures},
        //                 {name:"Assists",        value:assists},
        //                 {name:"Medics",         value:medics},
        //                 {name:"Bombs Armed",    value:bombArm},
        //                 {name:"Bombs Diffused", value:bombDis}]
        //     // duration : new Date(duration).toUTCString().slice(17,25)
        //
        // })

        let xVal = "Game #" + (index + 1) + " - " + new Date(game.actions.sort((a,b) => b.id - a.id)[0].creationDate).toDateString()

        stackedAreaData[0].series.push({"value":captures, "name":xVal});
        stackedAreaData[1].series.push({"value":assists,  "name":xVal});
        stackedAreaData[2].series.push({"value":medics,   "name":xVal});
        stackedAreaData[3].series.push({"value":bombArm,  "name":xVal});
        stackedAreaData[4].series.push({"value":bombDis,  "name":xVal});

    }
    this.pieData = [{name:"Captures",       value:this.totalCaptures},
                    {name:"Assists",        value:this.totalAssists},
                    {name:"Medics",         value:this.totalMedics},
                    {name:"Bombs Armed",    value:this.totalBombArm},
                    {name:"Bombs Diffused", value:this.totalBombDis}]

    this.areaData = stackedAreaData;
  }

  formatXAxis(event) {

    return Math.round(event)

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

    let time_options = {dateStyle: "medium",
                        timeStyle: "short",
                        // day    : "2-digit",
                        // month  : "short",
                        // year   : "2-digit",
                        // hour   : "2-digit",
                        // minute : "2-digit",
                        // second : "2-digit",
                        hour12 : false};

    let games;
    this.secAPIsvc.getGamesByFieldProfile(this.userSvc.getToken(), userData.fieldProfile.id).subscribe(

        data => {

            games = data;

            let stackedAreaData = [{"name"  :"Captures",
                                    "series":[]},
                                   {"name"  :"Assists",
                                    "series":[]},
                                   {"name"  :"Medic Events",
                                    "series":[]},
                                   {"name"  :"Bombs Armed",
                                    "series":[]},
                                   {"name"  :"Bombs Diffused",
                                    "series":[]}];

            for (let [index, game] of games.sort((a, b) => a.id - b.id).entries()) {

                if (!game?.gameActions?.length){
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
                      case RESPAWN:
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

                      default:
                        break;
                    }
                }

                let duration = Date.parse(game.endTime) - Date.parse(game.startTime);

                let pieData = [{name:"Captures",      value:captures},
                               {name:"Assists",       value:assists},
                               {name:"Medics",        value:medics},
                               {name:"Bombs Armed",   value:bombArm},
                               {name:"Bombs Diffused",value:bombDis}];

                // this.gameHistData.push({
                //
                //     id       : game.id,
                //     start    : new Date(game.startTime).toLocaleString('en', time_options) ,
                //     end      : new Date(game.endTime).toLocaleString('en', time_options) ,
                //     pieData  : pieData,
                //     duration : new Date(duration).toUTCString().slice(17,25)
                //
                // })

                let xVal = "Game #" + (index + 1) + " - " + new Date(game.gameActions.sort((a,b) => b.id - a.id)[0].creationDate).toDateString()

                stackedAreaData[0].series.push({"value":captures, "name":xVal});
                stackedAreaData[1].series.push({"value":assists,  "name":xVal});
                stackedAreaData[2].series.push({"value":medics,   "name":xVal});
                stackedAreaData[3].series.push({"value":bombArm,  "name":xVal});
                stackedAreaData[4].series.push({"value":bombDis,  "name":xVal});
            }


            this.pieData = [{name:"Captures",      value:this.totalCaptures},
                            {name:"Assists",       value:this.totalAssists},
                            {name:"Medics",        value:this.totalMedics},
                            {name:"Bombs Armed",   value:this.totalBombArm},
                            {name:"Bombs Diffused",value:this.totalBombDis}];

            this.areaData = stackedAreaData;

        }
    )

  }


}
