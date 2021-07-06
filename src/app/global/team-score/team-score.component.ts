import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-score',
  templateUrl: './team-score.component.html',
  styleUrls: ['./team-score.component.scss']
})
export class TeamScoreComponent implements OnInit {

  @Input() teams;
  @Input() barChartData;

  @Input() showLastLocation;
  teamScoreColumns = [
          {name:'Callsign',      prop:'name',         sortable:true},
          {name:'Last Action',   prop:'lastAction',   sortable:true},
          {name:'Last Location', prop:'lastLocation', sortable:true},
          {name:'Total Points',  prop:'totalPoints',  sortable:true}
        ];


  constructor(
    private router: Router) { }

  ngOnInit(): void {}

  getRowClass(player) {
    return {"is_dead": !player.is_alive};
  }
  viewCourseTrainings(valObj: any){
    console.log('clicked',valObj)
    this.router.navigate(['/secure/dashboard'],{ queryParams: { viewForUser:valObj } }) 
  }
}
