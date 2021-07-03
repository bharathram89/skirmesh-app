import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  
  gameStats;
  teams;
  players;
  barChartData;
  allActions;



  devices;
  actionList;
  gameConfig;
  locationList;

  constructor( 
  ) {  
  }

  calcScoreAndSetActions(  devices,
    actionList,
    gameConfig,
    locationList
  ) { 
    this.devices = devices;
    this.actionList =actionList;
    this.gameConfig = gameConfig;
    this.locationList = locationList
    // This function grabs player and team stats from the initial load and parses
    // them out for ease of display within the UI

    // stats are grouped by player and team actions --- each action is parsed
    // and scores tallied in order to have total scores for each player and
    // give a list of running game actions.  The lastAction and lastLocation are
    // specifically isolated to show in the UI
    this.allActions = [];
    this.teams      = [];
    this.players    = [];
    // Build barChartData
    this.barChartData = [];

    // Assemble PLAYER stats from API data
    this.gameStats["player_stats"].forEach(player => {

        let playerObj = {
            teamID       : player.teamID,
            rfidID       : player.rfidID,
            name         : player.name,
            is_alive     : player.is_alive,
            lastAction   : this.actionList.find(ele => ele.id == player.data.sort((a, b) => b.id - a.id)[0]?.actionID)?.action || " ",
            lastLocation : this.findLocationFromDeviceID(player.data.sort((a, b) => b.id - a.id)[0]?.deviceID) || " ",
            totalPoints  : player.data.reduce((prev, next) => prev + this.actionList.find(ele => ele.id == next.actionID).points, 0)
        }
        this.players.push(playerObj)

        // Stuff it in ALL ACTIONS history also
        for (let act of player.data.sort((a, b) => b.id - a.id)) {

            let date = new Date(act.creationDate);
            let historyObj = {
                id        : act.id,
                team      : this.gameConfig["teams"].find(ele => ele.id == player.teamID).name,
                name      : player.name,
                action    : this.actionList.find(ele =>ele.id == act.actionID).action,
                points    : this.actionList.find(ele => ele.id == act.actionID).points,
                time_held : act.time_held,
                location  : act.deviceID ? this.findLocationFromDeviceID(act.deviceID) : null,
                timestamp : date.toLocaleString('en-US', {hour12:false})
            }
            this.allActions.push(historyObj);
        }

    });

    // Assemble TEAM stats from API data
    this.gameStats["team_stats"].forEach(team => {

        let team_players = this.players.filter(player => player.teamID == team.id);
        let plyr_points  = team_players.reduce((accu, ele) => accu + ele.totalPoints, 0);

        let team_score = team.data.reduce((accu, ele) => accu + ele.points, 0);

        let teamObj = {
            teamID         : team.id,
            name           : team.name,
            color          : '#' + team.color,
            score          : team_score,
            player_score   : plyr_points,
            comb_score     : team_score + plyr_points,
            players        : team_players
        }

        this.teams.push(teamObj);
        // Stuff it in ALL ACTIONS history also
        for (let act of team.data) {

            let date = new Date(act.creationDate);
            let historyObj = {
                id        : act.id,
                team      : team.name,
                name      : null,
                action    : this.actionList.find(ele =>ele.id == act.actionID).action,
                points    : act.points,
                time_held : act.time_held,
                location  : act.deviceID ? this.findLocationFromDeviceID(act.deviceID) : null,
                timestamp : date.toLocaleString('en-US', {hour12:false})
            }

            this.allActions.push(historyObj);
        }

        this.barChartData.push({"name":teamObj.name, "teamID":team.id, "series":[
                {name:"Objective Control",value:teamObj.score},{name:"Player Action",value:teamObj.player_score}
        ]});

    });
    // Check to see if teams were built from actions - if not, initialize them
    // with empty data for display
    for (let team of this.gameConfig['teams']) {

        var is_team = this.teams.find(ele => ele.teamID == team.id);
        // this shouldn't execute after teams have action
        if (!is_team) {

            let team_players = this.players.filter(player => player.teamID == team.id);
            let plyr_points  = team_players.reduce((accu, ele) => accu + ele.totalPoints, 0);

            this.teams.push({
                             teamID       : team.id,
                             name         : team.name,
                             color        : '#' + team.color,
                             score        : 0,
                             player_score : plyr_points,
                             comb_score   : 0 + plyr_points,
                             players      : team_players,
                            })

            this.barChartData.push({"name":team.name, "teamID":team.id, "series":[
                    {name:"Objective Control",value: 0},{name:"Player Action",value:plyr_points}
            ]});
        }

    }
    // Sort actions descending
    this.allActions.sort((a, b) => b.id - a.id);
    // Figure out if last action was capture and calculate time held since CAPTURE
    // add those points to the total for each team to show current points status
    // THIS WILL NOT continue to stack points - a refresh is required - or it will
    // get updated when an action or player update is pushed over the socket
    for (let device of this.devices) {
        // If the device is not in capture or unstable, skip it.
        if (device.teamID == null || device.config != 0x0A || !device.stable) {continue}

        let actions = this.allActions.filter(action => action.location == this.findLocationFromDeviceID(device.id));
        // If an action exists and the last action doesn't already cover the time
        // held, then add on time since last CAPTURE
        if (actions.length && !actions[0].time_held) {

            let lastCapComplete = actions.find(act => act.action == "CAPTURE COMPLETE");

            if (lastCapComplete) {

                let now = new Date().getTime();
                let lastActionTime = new Date(lastCapComplete.timestamp).getTime()

                let add_score = Math.floor(((now - lastActionTime)/1000) / device.point_scale);

                let dev_team = this.teams.find(team => team.teamID == device.teamID);
                let bar_data = this.barChartData.find(team => team.teamID == device.teamID);

                dev_team.score      += add_score;
                dev_team.comb_score += add_score;

                if (bar_data) {bar_data.series[0].value += add_score;}
            }
        }

    }
    // Purge all the stuff without a player name to show the stuff that matters
    this.teams = [...this.teams]
    this.allActions = this.allActions.filter(act => act.name);
}

findLocationFromDeviceID(deviceID) {

  let device = this.devices.find(ele => ele.id == deviceID)

  let location;
  if(device && device.location) {

      location = this.locationList.find(ele => ele.id == device.location);
  }
  return location && location.name ? location.name : ' '
}


}
