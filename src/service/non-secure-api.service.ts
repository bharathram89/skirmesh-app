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
    // BASE = 'http://lvh.me:5000/'

    // setup source routes
    NONS = 'nonSecure/'
    STAT = 'statistics/'
    LOGN = 'login'

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

    getExtendedGameData(gameID){

        let route = this.BASE + this.NONS

        const options = { params  : new HttpParams().set("id", gameID) }
        // :: returns :: {configData: gameConfig, gameData: game}
        return this.http.get(route + 'extendedGameData', options)
    }


    getActiveGamesByConfig() {
        return this.http.get(this.BASE + this.NONS + 'activeGamesByConfig')
    }


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


    getActionsList(viewForUser?){
        if(viewForUser){ 
            const options = { params  : new HttpParams().set("callSign", viewForUser) } 
            return this.http.get(this.BASE + this.NONS + 'actions',options)
        }else{
            return this.http.get(this.BASE + this.NONS + 'actions')
        } 
    }


    sendFeedback(data){

        let route = this.BASE
        return this.http.post(route + "feedback", data, this.options)
    }


    requestPasswordReset(data){

        let route = this.BASE + this.LOGN

        return this.http.post(route + "/passwordReset", data, this.options)
    }

}
