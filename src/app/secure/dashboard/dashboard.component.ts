import { Component, OnInit, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { combineLatest } from 'rxjs';
import { AuthService } from 'src/service/auth.service';
import { DeviceService } from 'src/service/device.service';
import { GameService } from 'src/service/game.service';
import { UserServiceService } from 'src/service/user-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  @ViewChild(DatatableComponent) table: DatatableComponent;
  ColumnMode = ColumnMode;
  rows = [ 
  ];

  currentVals = {
    firstName:      '',
    lastName:       '',
    clanTag:        '',
    email:          '',
    phone:          '',
    bio:            '',
    profile:        '',
    fieldName:      '',
    callSign:       '',
    fieldProfileID: '',
    userID:         '',
    imageID:        '',
    imageData:      ''
  }
  temp = [];
  columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];
  isPlayer;
  isField;
  gameSvc:GameService;
  authSvc:AuthService;
  userSvc:UserServiceService;
  constructor(gameService: GameService,authService:AuthService,userService: UserServiceService) { 
    this.gameSvc = gameService;
    this.authSvc = authService;
    this.userSvc = userService;
  }

  ngOnInit(): void {

    this.isPlayer        = this.userSvc.isPlayer;
    this.isField         = this.userSvc.isField;

    combineLatest([this.gameSvc.getPastGames(),this.userSvc.getUserData()]).subscribe(([pastGames,userData])=>{
      console.log(pastGames,'all game')  
      pastGames


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
}
