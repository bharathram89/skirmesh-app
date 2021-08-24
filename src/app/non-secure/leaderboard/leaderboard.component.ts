import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { NonSecureAPIService } from 'src/service/non-secure-api.service';
import { ScoreService } from 'src/service/score.service';
import { UserServiceService } from 'src/service/user-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
    selector: 'app-leaderboard',
    templateUrl: './leaderboard.component.html',
    styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

    leaderboardColumns = [
          {name:'Callsign',      prop:'name',      },
          {name:'Total Points',  prop:'total_points'}
        ];

    leaderboardData = [];
    podiumData = [];
    yScaleMax;

    isWeekly    = false;
    signInError = false;

    podiumColors = {
        domain: ['#A7A7AD', '#D6AF36', '#A77044']
    };

    constructor(
            private userSvc      : UserServiceService,
            private nonSecAPIsvc : NonSecureAPIService,
            private scoreSvc     : ScoreService,
            private router       : Router,
        ) {}

    ngOnInit(): void {

        this.setLeaderboardData()

    }


    get minDate() {

        var date = new Date();

        if (this.isWeekly) {date.setDate(date.getDate() - 7);}
        else {date.setMonth(date.getMonth() - 1);}

        return date.toDateString()
    }

    get nowDate() {

        var date = new Date();
        return date.toDateString()
    }

    setLeaderboardData() {

        this.isWeekly = !this.isWeekly;

        this.nonSecAPIsvc.getLeaderboard({weekly:this.isWeekly}).subscribe(

            leaderboard => {

                this.leaderboardData = leaderboard as [];
                this.leaderboardData.sort((a,b) => b.total_points - a.total_points)
                this.leaderboardData = this.leaderboardData.slice(0,10);
                console.log( this.leaderboardData,'dtat')
                this.podiumData = [
                    {
                    "name"  : this.leaderboardData[1].name,
                    "value" : this.leaderboardData[1].total_points
                    },
                    {
                    "name"  : this.leaderboardData[0].name,
                    "value" : this.leaderboardData[0].total_points
                    },
                    {
                    "name"  : this.leaderboardData[2].name,
                    "value" : this.leaderboardData[2].total_points
                    }
                ];

                this.yScaleMax = this.leaderboardData[0].total_points * 1.1;
        })
    }


    viewPlayerProfile(playerName){

        if (!this.userSvc.isSignedIn()) {
            this.signInError = true;
            return
        }

        this.router.navigate(['/secure/dashboard'],{ queryParams: {viewForUser : playerName } })

    }



}
