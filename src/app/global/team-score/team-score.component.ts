import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/service/user-service.service';

@Component({
  selector: 'app-team-score',
  templateUrl: './team-score.component.html',
  styleUrls: ['./team-score.component.scss']
})
export class TeamScoreComponent implements OnInit {

  @Input() teams;
  @Input() barChartData;

  selected = [];

  teamScoreColumns = [
          {name:'Callsign',      prop:'name',         sortable:true},
          {name:'Last Action',   prop:'lastAction',   sortable:true},
          {name:'Last Location', prop:'lastLocation', sortable:true},
          {name:'Total Points',  prop:'totalPoints',  sortable:true}
        ];


  constructor(
    private router: Router,
    private userSvc: UserServiceService) {
  }


  ngOnInit(): void {}


  getRowClass(player) {
    return player.is_alive ? "" : "is_dead"
  }


  viewPlayerProfile(valObj: any){

    if (!this.userSvc.isSignedIn()) {return}

    let name = valObj.selected[0].name

    this.router.navigate(['/secure/dashboard'],{ queryParams: {viewForUser : name } })

  }
}
