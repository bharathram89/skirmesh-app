import { Component, OnInit, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserServiceService } from 'src/service/user-service.service';
import { TokenStorageService } from 'src/service/token-storage.service';
import { NonSecureAPIService } from 'src/service/non-secure-api.service';
import { SecureAPIService } from 'src/service/secure-api.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/service/app.service';
// actionIDs associated with specific actions

const CAPTURE = 2;
const ASSIST = 3;

const BOMB_ARM = 8;
const BOMB_DIF = 9;

const MEDIC_IN = 11;
const MEDIC_OUT = 12;
const RESPAWN = 13;

const SURVIVAL = 16;


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
  pageLvlError: boolean = false;
  colorScheme = {
    domain: ['#A10A28', '#C7B42C', '#5AA454', '#A0522D', '#CC5500', '#AAAAAA']
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

  viewForUser;
  userToken;

  constructor(
    private userSvc: UserServiceService,
    private tokenSvc: TokenStorageService,
    private nonSecAPIsvc: NonSecureAPIService,
    private secAPIsvc: SecureAPIService,
    private appSvc: AppService,
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  async ngOnInit() {

    await this.tokenSvc.getToken().then(
      data => {
        this.userToken = data;
      }
    );
    this.activatedRoute.queryParams.subscribe(

      data => {
        if (data.viewForUser) {
          //Need to check if game is active else we get console error.
          this.viewForUser = data.viewForUser;
        }

        combineLatest([this.secAPIsvc.getUser(this.userToken, this.viewForUser), this.nonSecAPIsvc.getActionsList(this.viewForUser)]).subscribe(([userDataIn, actions]) => {
          this.isField = this.userSvc.isField;
          let userData;
          userData = userDataIn['user']

          this.pageLvlError = userData ? false : true

          if (!userData) { return }

          this.isField = userData.fieldProfile ? true : false;

          this.actionList = actions;

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
          if (this.currentVals.imageID) {
            this.nonSecAPIsvc.getImage(this.currentVals.imageID).subscribe(
              imageData => {
                this.currentVals.imageData = imageData['image'] ? imageData['image'] : null;
              }
            )
          }



        })
      }
    )


    if (this.appSvc.isMobile) {
      this.chartView = [300, 300]
    }
    else {
      // if necessary:
      this.chartView = [500, 300]
    }


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

  setGameScoreStats(userData) {

    let games = [];

    for (let rfid of userData.rfids) {

      for (let action of rfid.gameActions) {
        // Look to see if that game exists, if not create it
        // and stuff actions under the right game
        let game = games.find(ele => ele.id == action.gameID)

        if (game) { game.actions.push(action) }
        else { games.push({ id: action.gameID, actions: [action] }) }

      }
    }

    let stackedAreaData = [{
      "name": "Captures",
      "series": []
    },
    {
      "name": "Assists",
      "series": []
    },
    {
      "name": "Medic Events",
      "series": []
    },
    {
      "name": "Survivalist",
      "series": []
    },
    {
      "name": "Bombs Armed",
      "series": []
    },
    {
      "name": "Bombs Diffused",
      "series": []
    }];

    games = games.sort((a, b) => a.id - b.id);

    let totalMedics = 0;
    let totalCaptures = 0;
    let totalAssists = 0;
    let totalBombArm = 0;
    let totalBombDis = 0;
    let totalSurvive = 0;

    games.forEach(game => {

      let medics = 0;
      let captures = 0;
      let assists = 0;
      let bombArm = 0;
      let bombDis = 0;
      let survive = 0;

      for (let action of game.actions) {

        let points = action.points || this.actionList.find(ele => ele.id == action.actionID).points;

        switch (action.actionID) {

          case MEDIC_IN:
          case RESPAWN:
            medics++; // += points;
            // totalMedics ++
            totalMedics += points;
            break;

          case MEDIC_OUT:
            totalMedics += points;
            break;

          case CAPTURE:
            captures++; // += points;
            // totalCaptures ++;
            totalCaptures += points;
            break;

          case ASSIST:
            assists++; // += points;
            // totalAssists ++;
            totalAssists += points;
            break;

          case BOMB_ARM:
            bombArm++; // += points;
            // totalBombArm ++;
            totalBombArm += points;
            break;

          case BOMB_DIF:
            bombDis++ // += points;
            // totalBombDis ++;
            totalBombDis += points;
            break;

          case SURVIVAL:
            survive++;
            totalSurvive += points;

          default:
            break;
        }
      }

      let xVal = "Game #" + game.id + " - " + new Date(game.actions.sort((a, b) => b.id - a.id)[0].creationDate).toDateString()

      stackedAreaData[0].series.push({ "value": captures, "name": xVal });
      stackedAreaData[1].series.push({ "value": assists, "name": xVal });
      stackedAreaData[2].series.push({ "value": medics, "name": xVal });
      stackedAreaData[3].series.push({ "value": survive, "name": xVal });
      stackedAreaData[4].series.push({ "value": bombArm, "name": xVal });
      stackedAreaData[5].series.push({ "value": bombDis, "name": xVal });

    })
    this.pieData = [{ name: "Captures", value: totalCaptures },
    { name: "Assists", value: totalAssists },
    { name: "Medics", value: totalMedics },
    { name: "Survival", value: totalSurvive },
    { name: "Bombs Armed", value: totalBombArm },
    { name: "Bombs Diffused", value: totalBombDis }]

    this.areaData = stackedAreaData;
  }

  formatXAxis(event) {

    return Math.round(event)

  }

  printTimeFromTotalMilli(milli) {

    let tot_secs = milli / 1000;

    let hrs = Math.floor(tot_secs / 3600);
    tot_secs %= 3600;
    let mins = Math.floor(tot_secs / 60);
    let secs = tot_secs % 60;

    return [hrs, mins, secs]
  }

  async setGameHistStats(userData) {

    let time_options = {
      dateStyle: "medium",
      timeStyle: "short",
      // day    : "2-digit",
      // month  : "short",
      // year   : "2-digit",
      // hour   : "2-digit",
      // minute : "2-digit",
      // second : "2-digit",
      hour12: false
    };

    let games;
    await this.tokenSvc.getToken().then(
      data => {
        this.userToken = data;
      }
    );
    this.secAPIsvc.getGamesByFieldProfile(this.userToken, userData.fieldProfile.id).subscribe(

      data => {

        games = data;

        let stackedAreaData = [{
          "name": "Captures",
          "series": []
        },
        {
          "name": "Assists",
          "series": []
        },
        {
          "name": "Medic Events",
          "series": []
        },
        {
          "name": "Survivalist",
          "series": []
        },
        {
          "name": "Bombs Armed",
          "series": []
        },
        {
          "name": "Bombs Diffused",
          "series": []
        }];

        let totalMedics = 0;
        let totalCaptures = 0;
        let totalAssists = 0;
        let totalBombArm = 0;
        let totalBombDis = 0;
        let totalSurvive = 0;

        for (let game of games.sort((a, b) => a.id - b.id)) {

          if (!game?.gameActions?.length) {
            continue
          }

          let medics = 0;
          let captures = 0;
          let assists = 0;
          let bombArm = 0;
          let bombDis = 0;
          let survive = 0;

          for (let action of game.gameActions) {

            switch (action.actionID) {

              case MEDIC_IN:
              case RESPAWN:
                medics++;
                totalMedics++;
                break;

              case CAPTURE:
                captures++;
                totalCaptures++;
                break;

              case ASSIST:
                assists++;
                totalAssists++;
                break;

              case BOMB_ARM:
                bombArm++;
                totalBombArm++;
                break;

              case BOMB_DIF:
                bombDis++;
                totalBombDis++;
                break;

              case SURVIVAL:
                survive++;
                totalSurvive++;

              default:
                break;
            }
          }

          let duration = Date.parse(game.endTime) - Date.parse(game.startTime);

          let pieData = [{ name: "Captures", value: captures },
          { name: "Assists", value: assists },
          { name: "Medics", value: medics },
          { name: "Survival", value: survive },
          { name: "Bombs Armed", value: bombArm },
          { name: "Bombs Diffused", value: bombDis }];

          let xVal = "Game #" + game.id + " - " + new Date(game.gameActions.sort((a, b) => b.id - a.id)[0].creationDate).toDateString()

          stackedAreaData[0].series.push({ "value": captures, "name": xVal });
          stackedAreaData[1].series.push({ "value": assists, "name": xVal });
          stackedAreaData[2].series.push({ "value": medics, "name": xVal });
          stackedAreaData[3].series.push({ "value": survive, "name": xVal });
          stackedAreaData[4].series.push({ "value": bombArm, "name": xVal });
          stackedAreaData[5].series.push({ "value": bombDis, "name": xVal });
        }


        this.pieData = [{ name: "Captures", value: totalCaptures },
        { name: "Assists", value: totalAssists },
        { name: "Medics", value: totalMedics },
        { name: "Survival", value: totalSurvive },
        { name: "Bombs Armed", value: totalBombArm },
        { name: "Bombs Diffused", value: totalBombDis }];

        this.areaData = stackedAreaData;

      }
    )

  }

}
