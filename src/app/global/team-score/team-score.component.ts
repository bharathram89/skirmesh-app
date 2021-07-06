import { Component, Input, OnInit } from '@angular/core';

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


  constructor() { }

  ngOnInit(): void {}

  getRowClass(player) {
    return {"is_dead": !player.is_alive};
  }
  viewCourseTrainings(valObj: any){
    console.log('clicked',valObj)
    // this.router.navigate(['/home-page/mentor-trainings/'+ valObj.id])
  }
}
