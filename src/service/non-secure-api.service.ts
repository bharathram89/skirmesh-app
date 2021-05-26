import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NonSecureAPIService {

    // }
    headers =new HttpHeaders({
        'Content-Type': 'application/json'
    });
    options = { headers: this.headers };


    BASE = 'https://api.skirmesh.net/'

    // setup source routes
    RSRC = 'resources/'

    // setup subroutes
    DEVC = 'devices'
    USER = 'user'
    FPRO = 'fieldProfile'
    PPRO = 'playerProfile'
    IMAG = 'image'
    GCFG = 'gameConfig'
    TEAM = 'team'

    // setup additional query params
    TOKN = '?token='
    adID = '&id='


    constructor(
        private http: HttpClient
    ) {}

    // █▀▀ █▀▀▄ ░▀░ ▀▀█▀▀ 　 █▀▀▀ █▀▀█ █▀▄▀█ █▀▀
    // █▀▀ █░░█ ▀█▀ ░░█░░ 　 █░▀█ █▄▄█ █░▀░█ █▀▀
    // ▀▀▀ ▀▀▀░ ▀▀▀ ░░▀░░ 　 ▀▀▀▀ ▀░░▀ ▀░░░▀ ▀▀▀

    modifyNodeConfig(token, data) {

        let route = this.BASE + this.RSRC + this.DEVC + this.TOKN + token;
        return this.http.put(route, data, this.options);
    }

    // token and data are swapped!!! correct in UI!!!
    saveGameConfigs(token, data) {

        let route = this.BASE + this.GCFG + this.TOKN
        return this.http.post(route + token, data, this.options)
    }
    // token and data are swapped!!! correct in UI!!!
    modifyGameConfig(token, data) {

        let route = this.BASE + this.GCFG + this.TOKN
        return this.http.put(route + token, data, this.options)
    }
    // token and data are swapped!!! correct in UI!!!
    deleteTeam(token, teamID) {

        let route = this.BASE + this.TEAM + this.TOKN
        return this.http.delete(route + token + '&id=' + teamID)
    }

    getGameConfigs(token, fieldProfileID) {

        let route = this.BASE + this.GCFG + this.TOKN
        return this.http.get(route + token + '&fieldProfileID=' + fieldProfileID)
    }


    deleteGameConfig(token, gameConfigID) {

        let route = this.BASE + this.GCFG + this.TOKN
        return this.http.delete(this.BASE+this.GCTK+token+'&id='+gameConfigID)
    }


    // █░░█ █▀▀ █▀▀ █▀▀█ 　 █▀▀█ █▀▀█ █▀▀█ █▀▀ ░▀░ █░░ █▀▀
    // █░░█ ▀▀█ █▀▀ █▄▄▀ 　 █░░█ █▄▄▀ █░░█ █▀▀ ▀█▀ █░░ █▀▀
    // ░▀▀▀ ▀▀▀ ▀▀▀ ▀░▀▀ 　 █▀▀▀ ▀░▀▀ ▀▀▀▀ ▀░░ ▀▀▀ ▀▀▀ ▀▀▀

    updatePass(token, data) {

        let route = this.BASE + this.RSRC + this.USER + this.TOKN + token;
        return this.http.put(route, data, this.options);
    }

    saveProfile(token, data) {

        let user   = data.user;
        let player = data.player;
        let field  = data.field;

        let route = this.BASE + this.RSRC;

        if (Object.keys(field).length) {

            this.http.put(route + this.FPRO + this.TOKN + token, field, this.options).subscribe(
                resp => {},
                err => {}
            )
        }

        else if (Object.keys(player).length) {

            this.http.put(route + this.PPRO + this.TOKN + token, player, this.options).subscribe(
                resp => {},
                err => {}
            )
        }

        route += this.USER + this.TOKN + token;

        return this.http.put(route, user, this.options);
    }

    saveImage(token, data) {

        let route = this.BASE + this.RSRC + this.IMAG + this.TOKN;

        this.http.put(route + token, data).subscribe(
            resp => {},
            err => {}
        );

    }

    getUser(token) {

        let route = this.BASE + this.RSRC + this.USER + this.TOKN;
        return this.http.get(route + token);
    }

    deleteUser(token) {

        let route = this.BASE + this.RSRC + this.USER + this.TOKN;
        return this.http.delete(route + token);
    }


    // █░░ ░▀░ ▀█░█▀ █▀▀ 　 █▀▀▀ █▀▀█ █▀▄▀█ █▀▀ █▀▀
    // █░░ ▀█▀ ░█▄█░ █▀▀ 　 █░▀█ █▄▄█ █░▀░█ █▀▀ ▀▀█
    // ▀▀▀ ▀▀▀ ░░▀░░ ▀▀▀ 　 ▀▀▀▀ ▀░░▀ ▀░░░▀ ▀▀▀ ▀▀▀

    getGamesByFieldProfile(token, fieldProfileID) {

        let route = this.BASE + this.RSRC;
        return this.http.get(route + 'gamesBy?token=' + token + "&fieldProfileID=" + fieldProfileID)
    }

    getActiveGamesByFieldProfile(token, fieldProfileID) {

        return this.http.get(this.BASE + 'games/activeGamesBy?token=' + token + "&fieldProfileID=" + fieldProfileID)
    }

    pauseGame(token, data) {

        return this.http.put(this.BASE + 'gameplay/pauseGame?token=' + token, data, this.options)
    }

    startGame(token, gameConfigID){

        let data = {"gameConfigID":gameConfigID}
        return this.http.post(this.BASE + 'games/startGame?token='  +token, data, this.options )
    }

    endGame(token, gameID){

        let data = {"id":gameID}
        return this.http.put(this.BASE + 'games/endGame?token=' + token, data, this.options )
    }


    // █▀▀ ░▀░ █▀▀ █░░ █▀▀▄ 　 █▀▀█ █▀▀▄ █▀▄▀█ ░▀░ █▀▀▄
    // █▀▀ ▀█▀ █▀▀ █░░ █░░█ 　 █▄▄█ █░░█ █░▀░█ ▀█▀ █░░█
    // ▀░░ ▀▀▀ ▀▀▀ ▀▀▀ ▀▀▀░ 　 ▀░░▀ ▀▀▀░ ▀░░░▀ ▀▀▀ ▀░░▀

    getFieldProfileFromAPI(token, fieldProfileID) {

        let route = this.BASE + this.RSRC + this.FPRO + this.TOKN;
        return this.http.get(route + token + '&id=' + fieldProfileID)
    }

    getUserListFromAPI(token) {

        let route = this.BASE + this.RSRC;
        return this.http.get(route + 'user_list?token=' + token)
    }

    pairUid(token, data) {

        let route = this.BASE + this.RSRC;
        return this.http.put(route + 'pair_rfid?token=' + token, data, this.options)
    }

    updateFieldProfile(token, data) {
        // Requires fieldPofileID as id in data
        let route = this.BASE + this.RSRC + this.FPRO + this.TOKN;
        return this.http.put(route + token, data, this.options)
    }

}
