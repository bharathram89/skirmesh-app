import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NonSecureAPIService {

    // }
    headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    options = { headers : this.headers };


    BASE = 'https://api.skirmesh.net/'

    // setup source routes
    RSRC = 'resources/'
    GAME = 'games/'
    STAT = 'statistics/'
    LOGN = 'login'

    // setup subroutes
    DEVC = 'devices'
    USER = 'user'
    FPRO = 'fieldProfile'
    PPRO = 'playerProfile'
    IMAG = 'image'
    GCFG = 'gameConfig'
    TEAM = 'team'

    constructor(
        private http: HttpClient
    ) {}


    // █░░ █▀▀█ █▀▀▀ ░▀░ █▀▀▄ 　 █▀▀ █▀▀ █▀▀█ ▀█░█▀ ░▀░ █▀▀ █▀▀ █▀▀
    // █░░ █░░█ █░▀█ ▀█▀ █░░█ 　 ▀▀█ █▀▀ █▄▄▀ ░█▄█░ ▀█▀ █░░ █▀▀ ▀▀█
    // ▀▀▀ ▀▀▀▀ ▀▀▀▀ ▀▀▀ ▀░░▀ 　 ▀▀▀ ▀▀▀ ▀░▀▀ ░░▀░░ ▀▀▀ ▀▀▀ ▀▀▀ ▀▀▀

    createUser(data){

        let route = this.BASE + this.RSRC
        return this.http.post(route + 'createUser',data,this.options)
    }


    userLogin(data){

        return this.http.post(this.BASE + this.LOGN, data, this.options)
    }

    getImage(imageID) {

        let route = this.BASE + this.RSRC + 'serve_image/' + imageID
        return this.http.get(route)
    }


    // █▀▀▀ █▀▀█ █▀▄▀█ █▀▀ 　 ░▀░ █▀▀▄ █▀▀ █▀▀█ █▀▀█ █▀▄▀█ █▀▀█ ▀▀█▀▀ ░▀░ █▀▀█ █▀▀▄
    // █░▀█ █▄▄█ █░▀░█ █▀▀ 　 ▀█▀ █░░█ █▀▀ █░░█ █▄▄▀ █░▀░█ █▄▄█ ░░█░░ ▀█▀ █░░█ █░░█
    // ▀▀▀▀ ▀░░▀ ▀░░░▀ ▀▀▀ 　 ▀▀▀ ▀░░▀ ▀░░ ▀▀▀▀ ▀░▀▀ ▀░░░▀ ▀░░▀ ░░▀░░ ▀▀▀ ▀▀▀▀ ▀░░▀

    getGameConfigsByID(gameConfigID){

        let route = this.BASE + this.RSRC + this.GCFG

        const options = { params  : new HttpParams().set("id", gameConfigID) }

        return this.http.get(route, options)
    }


    getActiveGames() {
        return this.http.get(this.BASE + this.GAME + 'activeGames')
    }


    getPastGames() {
        return this.http.get(this.BASE + this.GAME + 'pastGames')
    }


    getGameStats(gameID){

        let route = this.BASE + this.STAT

        const options = { params  : new HttpParams().set("id", gameID) }

        return this.http.get(route + 'game', options)
    }


    getLocations(){
        return this.http.get(this.BASE + this.RSRC + 'locations')
    }


    getMapData(mapID){

        const options = { params  : new HttpParams().set("id", mapID) }

        return this.http.get(this.BASE + this.RSRC + 'map', options)
    }


    getActions(){
        return this.http.get(this.BASE + this.RSRC + 'actions')
    }


    getDevicesByGameID(gameID){

        const options = { params  : new HttpParams().set("gameID", gameID) }

        return this.http.get(this.BASE + this.RSRC + this.DEVC, options)
    }


}
