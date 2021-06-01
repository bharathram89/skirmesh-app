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
    NONS = 'nonSecure/'
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

        let route = this.BASE + this.NONS
        return this.http.post(route + 'createUser', data, this.options)
    }


    userLogin(data){

        return this.http.post(this.BASE + this.LOGN, data, this.options)
    }


    getImage(imageID) {

        let route = this.BASE + this.NONS + 'serve_image/' + imageID
        return this.http.get(route)
    }


    // █▀▀▀ █▀▀█ █▀▄▀█ █▀▀ 　 ░▀░ █▀▀▄ █▀▀ █▀▀█ █▀▀█ █▀▄▀█ █▀▀█ ▀▀█▀▀ ░▀░ █▀▀█ █▀▀▄
    // █░▀█ █▄▄█ █░▀░█ █▀▀ 　 ▀█▀ █░░█ █▀▀ █░░█ █▄▄▀ █░▀░█ █▄▄█ ░░█░░ ▀█▀ █░░█ █░░█
    // ▀▀▀▀ ▀░░▀ ▀░░░▀ ▀▀▀ 　 ▀▀▀ ▀░░▀ ▀░░ ▀▀▀▀ ▀░▀▀ ▀░░░▀ ▀░░▀ ░░▀░░ ▀▀▀ ▀▀▀▀ ▀░░▀

    // getGameConfigsByID(gameConfigID){
    //
    //     let route = this.BASE + this.RSRC + this.GCFG
    //
    //     const options = { params  : new HttpParams().set("id", gameConfigID) }
    //
    //     return this.http.get(route, options)
    // }


    getExtendedGameData(gameID){

        let route = this.BASE + this.NONS

        const options = { params  : new HttpParams().set("id", gameID) }
        // :: returns :: {configData: gameConfig, gameData: game}
        return this.http.get(route + 'extendedGameData', options)
    }


    getActiveGamesByConfig() {
        return this.http.get(this.BASE + this.NONS + 'activeGamesByConfig')
    }


    // getActiveGames() {
    //     return this.http.get(this.BASE + this.GAME + 'activeGames')
    // }


    getPastGamesByConfig() {
        return this.http.get(this.BASE + this.NONS + 'pastGamesByConfig')
    }


    getGameStats(gameID){

        let route = this.BASE + this.STAT

        const options = { params  : new HttpParams().set("id", gameID) }

        return this.http.get(route + 'game', options)
    }


    getLocationsList(){
        return this.http.get(this.BASE + this.NONS + 'locations')
    }


    getMapData(mapID){

        const options = { params  : new HttpParams().set("id", mapID) }

        return this.http.get(this.BASE + this.NONS + 'map', options)
    }


    getActionsList(){
        return this.http.get(this.BASE + this.NONS + 'actions')
    }


    // getDevicesByGameID(gameID){
    //
    //     const options = { params  : new HttpParams().set("gameID", gameID) }
    //
    //     return this.http.get(this.BASE + this.RSRC + this.DEVC, options)
    // }


}
