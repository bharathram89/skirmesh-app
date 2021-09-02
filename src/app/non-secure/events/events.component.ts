import { Component, OnInit, TemplateRef } from '@angular/core';
import { AUTO_STYLE, animate, state, style, transition, trigger } from '@angular/animations';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { combineLatest } from 'rxjs';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/service/token-storage.service';
import { UserServiceService } from 'src/service/user-service.service';
import { SecureAPIService } from 'src/service/secure-api.service';
import { NonSecureAPIService } from 'src/service/non-secure-api.service';


import { Event } from './event'
import { filter, take } from 'rxjs/operators';

const DEFAULT_DURATION = 250;

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.scss'],
    styles:['../../node_modules/ngx-bootstrap/datepicker/bs-datepicker.css']
})
export class EventsComponent implements OnInit {

    createEvent :   boolean = false;
    eventModel  :   Event   = new Event();
    token;
    viewEventModel: boolean = false;

    eventList               = [];
    carouselEvents          = [];
    eventsData              = [];
    configsData             = [];

    submitEventSuccess  :   boolean = false;
    submitEventFailure  :   boolean = false;

    isSecure    :   boolean = false;
    isField     :   boolean = false;
    fieldProfileID;
    gameConfigs = <any>[];

    modalRef: BsModalRef;
    allowDelete = false;

    constructor(
        private router       : Router,
        private modalService : BsModalService,
        private userSvc      : UserServiceService,
        private secAPIsvc    : SecureAPIService,
        private nonSecAPIsvc : NonSecureAPIService,
        private tokenSvc     : TokenStorageService
    ) {
        this.tokenSvc.userToken.pipe(filter(data => !!data)).pipe(take(1)).subscribe(
            data => {
              if (data) {
                if (data.length) {
                  this.isSecure = true;
                  this.userSvc.setSignIn(true);
                  this.tokenSvc.getToken().then(
                    data => {
                        this.token = data;
                        this.loadData();
                    })
                } else {
                  this.isSecure = false;
                }
      
              } else {
                this.isSecure = false;
              }
            }
        );
     }

    ngOnInit(): void {
        this.userSvc.userData.subscribe(
            userData => {
              if (userData?.fieldProfile) {
                  this.fieldProfileID = userData.fieldProfile.id;
                this.isField = true;
              } else {
                this.isField = false;
              }
            //   this.loadData();
            }
          );
        // this.isSecure = this.userSvc.userData ? true : false;
        // this.isField  = this.isSecure && this.userSvc.getFieldProfile() ? true : false;

        // If it's a field, we need to load field profile data alongside event data.
        

    }
    loadData(){
        if (this.isField) {

            this.secAPIsvc.getGameConfigs(this.token,
            this.fieldProfileID).subscribe(
                savedConfigs => this.gameConfigs = savedConfigs
        )}

        // Grab the event data
        this.nonSecAPIsvc.getEventsList().subscribe(
            eventsData => {

                this.configsData = eventsData["configs"];
                this.eventsData  = eventsData["events"];

                this.eventsData.forEach(
                    event => {
                        this.eventList.push(this.buildEventObject(event));
                })
            },
            err => {},
            // After the events have loaded, grab all the images needed
            () => {
                this.eventList.map(
                    event => {
                        if(event.imageID){
                            this.nonSecAPIsvc.getImage(event.imageID).subscribe(
                                image => {
                                    event.imageData = image ? image["image"] : null
                            })
                        }
                        if(event.fieldImageID){
                            this.nonSecAPIsvc.getImage(event.fieldImageID).subscribe(
                                image => {
                                    event.fieldImageData = image ? image["image"] : null
                            })
                        }
                })

                this.sortEventList();
            }
        )
    }

    buildEventObject(event) : Event {

        let newEvent = new Event();

        Object.entries(event).forEach(([key, value]) => {

            switch (key) {
                case "datetime":
                    newEvent[key] = new Date(event[key]);
                    break;

                case "teamsMap":
                    newEvent[key] = event[key] ? event[key] : this.setTeamMapData(event["gameConfigID"]);
                    break;

                default:
                    newEvent[key] = value;
                    break;
            }
        });

        return newEvent
    }


    getConfigName(configID) {
        return this.configsData.find(config => config.id == configID)?.description
    }


    setTeamMapData(gameConfigID) {

        let map = [];
        const config = this.configsData.find(c => c.id == gameConfigID);

        if (config) {

            config.teams.forEach(
                team => {
                    map.push(
                        {
                            id          : team.id,
                            name        : team.name,
                            color       : "#" + team.color,
                            teamPlayers : []
                        }
            )});
        }

        return map
    }


    onEventSubmit() {

        this.createEvent = false;

        if(this.eventList.indexOf(this.eventModel) == -1) {

            this.eventList.push(this.eventModel);
            this.secAPIsvc.submitEvent(this.tokenSvc.getToken(), this.eventModel).subscribe(
                resp => {
                    this.eventModel.id = resp["id"]
                    if (!this.configsData.find(c => c.id == resp["gameConfigID"])) {
                        this.configsData.push(
                            this.gameConfigs.find(c => c.id == resp["gameConfigID"])
                        )
                    }
                }
            );
        }
        else{
            this.secAPIsvc.updateEvent(this.tokenSvc.getToken(), this.eventModel).subscribe(
                resp => {
                    this.eventModel = this.buildEventObject(resp);
                }
            );
        }
        this.sortEventList();
    }


    sortEventList() {

        let now = new Date();

        let after = [];
        let before = [];

        // Split what's before and after "now"
        this.eventList.forEach(event => {
            if ((event.datetime.getTime() - now.getTime()) > 0){
                after.push(event);
            }
            else {
                before.push(event);
            }
        })

        // Sort after by what's closest to "now"
        after.sort((a,b) => {
            return Math.abs(now.getTime() - a.datetime.getTime()) -
                        Math.abs(now.getTime() - b.datetime.getTime())
        })

        this.carouselEvents = after.slice(0,3);
        // Sort past games in descending order
        before.sort((a,b) => {
            return b.datetime.getTime() - a.datetime.getTime()
        })

        this.eventList = after.concat(before);

    }


    newEvent() {
        this.eventModel = new Event();
        this.eventModel.fieldProfileID = this.fieldProfileID;
        this.createEvent = true;
    }


    deleteEvent(event) {

        this.secAPIsvc.deleteEvent(this.tokenSvc.getToken(), event.id).subscribe(
            resp => {
                let indx = this.eventList.findIndex( e => e.id == resp["id"] );
                this.eventList.splice(indx, 1);
            }
        );

        this.viewEventModel = false;
    }


    editEvent(event) {

        this.eventModel = event;
        this.createEvent = true;
        this.viewEventModel = false;
    }


    viewEvent(event) {

        this.eventModel = event;
        this.viewEventModel = true;
    }


    joinTeam(team) {
        // Get the user data to show in the teamMap
        let user, teamMap, teamsMap, tempTeam, update, sameTeam;
        let eventData = <any>[];
        this.userSvc.getUserData().subscribe(
            d => user = d
        )

        // If they're registering to the same team, don't do anything.
        this.eventModel.teamsMap.forEach(
            tm => {
                tempTeam = tm;
                const indx = tempTeam.teamPlayers.findIndex(p => p.userID == user.id)
                if (indx != -1) {
                    if (tempTeam.id == team.id) {
                        sameTeam = true;
                        return
                    }
                }
            }
        )
        if (sameTeam) {return}

        // Get most updated teamMap for this team
        this.nonSecAPIsvc.getEvent(this.eventModel.id).subscribe(
            data => {

                eventData = data["events"].pop();
                this.eventModel.teamsMap = eventData.teamsMap;

                teamMap = this.eventModel.teamsMap.find(t => t["id"] == team.id)
        },
        err => {},
        () => {

            // Look through the other teams to see if this player
            // is already registered to another team - if so kick them
            // and put them in the right place.
            this.eventModel.teamsMap.forEach(
                tm => {
                    tempTeam = tm;
                    const indx = tempTeam.teamPlayers.findIndex(p => p.userID == user.id)
                    if (indx != -1) {
                        if (tempTeam.id == team.id) {
                            return
                        }
                        tempTeam.teamPlayers.splice(indx, 1);
                    }
                }
            )

            // If they made it passed all the checks, add them to the front of the
            // list of players on the team, so they'll be displayed at the top
            teamMap.teamPlayers.unshift({
                userID  :user.id,
                callSign:user.callSign
            })

            // Update the database with this new teamMap - but, nothing else.
            update = {id        : this.eventModel.id,
                      teamsMap  : this.eventModel.teamsMap}

            this.secAPIsvc.updateEvent(this.tokenSvc.getToken(), update).subscribe(
                resp => {
                    this.eventModel = this.buildEventObject(resp);
                }
            );

        })
    }


    openModal(template: TemplateRef<any>, event) {
        this.modalRef = this.modalService.show(template);
        this.eventModel = event;
        this.allowDelete = false;
    }


    getFile(event) {

        const fileReader = new FileReader();
        const file = event.target.files[0]

        fileReader.onloadend = function(event) {
            this.eventModel.imageData = fileReader.result;
        }.bind(this)

        if (file) {
            fileReader.readAsDataURL(file)
        }

    }


    viewProfile(callsign){

      if (!this.userSvc.isSignedIn()) {return}
      this.router.navigate(['/secure/dashboard'],{ queryParams: {viewForUser : callsign } })

    }


}
