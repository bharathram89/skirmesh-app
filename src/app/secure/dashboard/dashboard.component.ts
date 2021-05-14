import { Component, OnInit, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { combineLatest } from 'rxjs';
import { AuthService } from 'src/service/auth.service';
import { DeviceService } from 'src/service/device.service';
import { GameService } from 'src/service/game.service';
import { UserServiceService } from 'src/service/user-service.service';

// actionIDs associated with specific actions
const MEDIC = 11;
const CAPTURE = 2;
const ASSIST = 3;
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
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
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


  gameSvc: GameService;
  authSvc: AuthService;
  userSvc: UserServiceService;
  constructor(gameService: GameService, authService: AuthService, userService: UserServiceService) {
    this.gameSvc = gameService;
    this.authSvc = authService;
    this.userSvc = userService;
  }

  ngOnInit(): void {

    this.isPlayer = this.userSvc.isPlayer;
    this.isField = this.userSvc.isField;

    combineLatest([this.userSvc.getUserData(), this.gameSvc.getActions()]).subscribe(([userData, actions]) => {

      this.actionList = actions;

      this.setGameStats(userData);

      console.log("PLAYER.TEAMPLAYER.ID", userData)

      if (this.isField) {
        this.currentVals.profile = userData.fieldProfile.profile ? userData.fieldProfile.profile : 'Describe your Field!';
        this.currentVals.fieldName = userData.callSign ? userData.callSign : 'Your Field Name';
        this.currentVals.fieldProfileID = userData.fieldProfile.id;
        this.currentVals.imageID = userData.fieldProfile.imageID ? userData.fieldProfile.imageID : 0;
      }
      else if (this.isPlayer) {
        this.currentVals.bio = userData.playerProfile.outfit ? userData.playerProfile.outfit : 'Tell us about your loadout!';
        this.currentVals.clanTag = userData.playerProfile.clanTag ? userData.playerProfile.clanTag : 'Declare your Clan!';
        this.currentVals.callSign = userData.playerProfile.callSign ? userData.callSign : 'Whats your callsign!';
        this.currentVals.imageID = userData.playerProfile.imageID ? userData.playerProfile.imageID : 0;
      }
      this.currentVals.firstName = userData.firstName ? userData.firstName : 'First Name';
      this.currentVals.lastName = userData.lastName ? userData.lastName : 'Last Name';
      this.currentVals.email = userData.email ? userData.email : 'E-mail';
      this.currentVals.phone = userData.phoneNumber ? userData.phoneNumber : 'Phone Number';

      this.currentVals.userID = userData.id;

      this.authSvc.getImage(this.currentVals.imageID).subscribe(
        imageData => {
          this.currentVals.imageData = imageData['image'] ? imageData['image'] : null;
        }
      )
    })
  }


  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
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

  setGameStats(userData) {

    let actions = [];

    for (let rfid of userData.rfids) {
      for (let action of rfid.gameActions) {
        actions.push(action)
      }
    }

    this.allActions = actions.sort((a, b) => b.id - a.id)

    for (let action of actions) {

      let points = this.actionList.find(ele => ele.id == action.actionID).points;

      switch (action.actionID) {

        case MEDIC:
          this.totalMedics += points;
          break;

        case CAPTURE:
          this.totalCaptures += points;
          break;

        case ASSIST:
          this.totalAssists += points;
          break;

        case BOMB_ARM:
          this.totalBombArm += points;
          break;

        case BOMB_DIF:
          this.totalBombDis += points;
          break;
      }

    }
    this.pieData = [{name:"Medic",value:this.totalMedics},{name:"Capture",value:this.totalCaptures},{name:"Assists",value:this.totalAssists},{name:"Bomb Armed",value:this.totalBombArm},{name:"Bomb Difused",value:this.totalBombDis}  ]
  }
}
