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

    rawLeaderboardData = [];
    leaderboardData = [];
    podiumData = [];
    yScaleMax;

    isWeekly    = false;
    signInError = false;

    fieldProfileImages = [];

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

                this.fieldProfileImages = [];
                this.rawLeaderboardData = leaderboard as [];
                this.rawLeaderboardData.sort((a,b) => b.total_points - a.total_points)
                this.leaderboardData = this.rawLeaderboardData.slice(0,10);

                let imageIDs = <any>[];
                this.leaderboardData.map(data => imageIDs.push(data.fieldProfileImageID))
                imageIDs.filter((x, i, a) => a.indexOf(x) === i).forEach( data =>
                    this.fieldProfileImages.push({id:data, data:null})
                )

                this.setPodiumData();

        },
        err => {},
        () => {

            this.fieldProfileImages.map( image => {
                this.nonSecAPIsvc.getImage(image.id).subscribe( imageData =>
                    image.data = imageData ? imageData["image"] : null
                )
            })
        })


    }


    viewPlayerProfile(playerName){

        if (!this.userSvc.isSignedIn()) {
            this.signInError = true;
            return
        }

        this.router.navigate(['/secure/dashboard'],{ queryParams: {viewForUser : playerName } })

    }


    getFieldImage(imageID) {
        return this.fieldProfileImages.find(image => image.id == imageID)?.data
    }



    setPodiumData() {

        if (!(this.leaderboardData.length > 2)) {return}

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

    }



    filterByField(fieldImageID) {

        let images = this.fieldProfileImages.filter(img => img.isSelected);

        if (fieldImageID && images.length) {

            this.leaderboardData = this.rawLeaderboardData.filter(
                data => {return images.find(img => img.id == data.fieldProfileImageID)}
            );
        }

        else {
            this.leaderboardData = this.rawLeaderboardData;
            this.fieldProfileImages.forEach(
                img => img.isSelected = false
            )
        }

        this.leaderboardData = this.leaderboardData.slice(0,10)
        this.setPodiumData();
    }



}
