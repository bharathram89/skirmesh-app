import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SecureAPIService {

  headers = new HttpHeaders({
      'Content-Type': 'application/json'
  });


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


  constructor(
      private http: HttpClient
  ) {}

  // █▀▀ █▀▀▄ ░▀░ ▀▀█▀▀ 　 █▀▀▀ █▀▀█ █▀▄▀█ █▀▀
  // █▀▀ █░░█ ▀█▀ ░░█░░ 　 █░▀█ █▄▄█ █░▀░█ █▀▀
  // ▀▀▀ ▀▀▀░ ▀▀▀ ░░▀░░ 　 ▀▀▀▀ ▀░░▀ ▀░░░▀ ▀▀▀

  modifyNodeConfig(token, data) {

      let route = this.BASE + this.RSRC + this.DEVC;

      const options = { params  : new HttpParams().set("token", token),
                        headers : this.headers }

      return this.http.put(route, data, options);
  }

  // token and data are swapped!!! correct in UI!!!
  saveGameConfigs(token, data) {

      let route = this.BASE + this.GCFG

      const options = { params  : new HttpParams().set("token", token),
                        headers : this.headers }

      return this.http.post(route, data, options)
  }
  // token and data are swapped!!! correct in UI!!!
  modifyGameConfig(token, data) {

      let route = this.BASE + this.GCFG

      const options = { params  : new HttpParams().set("token", token),
                        headers : this.headers }

      return this.http.put(route, data, options)
  }
  // token and data are swapped!!! correct in UI!!!
  deleteTeam(token, teamID) {

      let route = this.BASE + this.TEAM

      const options = { params  : new HttpParams()
                                      .set("token", token)
                                      .set("id", teamID) }

      return this.http.delete(route, options)
  }

  getGameConfigs(token, fieldProfileID) {

      let route = this.BASE + this.GCFG

      const options = { params  : new HttpParams()
                                      .set("token", token)
                                      .set("fieldPofileID", fieldPofileID) }

      return this.http.get(route, options)
  }


  deleteGameConfig(token, gameConfigID) {

      let route = this.BASE + this.GCFG

      const options = { params  : new HttpParams()
                                      .set("token", token)
                                      .set("id", gameConfigID) }

      return this.http.delete(route, options)
  }


  // █░░█ █▀▀ █▀▀ █▀▀█ 　 █▀▀█ █▀▀█ █▀▀█ █▀▀ ░▀░ █░░ █▀▀
  // █░░█ ▀▀█ █▀▀ █▄▄▀ 　 █░░█ █▄▄▀ █░░█ █▀▀ ▀█▀ █░░ █▀▀
  // ░▀▀▀ ▀▀▀ ▀▀▀ ▀░▀▀ 　 █▀▀▀ ▀░▀▀ ▀▀▀▀ ▀░░ ▀▀▀ ▀▀▀ ▀▀▀

  updatePass(token, data) {

      let route = this.BASE + this.RSRC + this.USER;

      const options = { params  : new HttpParams().set("token", token),
                        headers : this.headers }

      return this.http.put(route, data, options);
  }

  saveProfile(token, data) {

      let user   = data.user;
      let player = data.player;
      let field  = data.field;

      let route = this.BASE + this.RSRC;

      const options = { params  : new HttpParams().set("token", token),
                        headers : this.headers }

      if (Object.keys(field).length) {

          this.http.put(route + this.FPRO, field, options).subscribe(
              resp => {},
              err => {}
          )
      }

      else if (Object.keys(player).length) {

          this.http.put(route + this.PPRO, player, options).subscribe(
              resp => {},
              err => {}
          )
      }

      return this.http.put(route + this.USER, user, options);
  }

  saveImage(token, data) {

      let route = this.BASE + this.RSRC + this.IMAG;

      const options = { params  : new HttpParams().set("token", token),
                        headers : this.headers }

      this.http.put(route, data, options).subscribe(
          resp => {},
          err => {}
      );

  }

  getUser(token) {

      let route = this.BASE + this.RSRC + this.USER;

      const options = { params  : new HttpParams().set("token", token)}

      return this.http.get(route, options);
  }

  deleteUser(token) {

      let route = this.BASE + this.RSRC + this.USER;

      const options = { params  : new HttpParams().set("token", token)}

      return this.http.delete(route, options);
  }


  // █░░ ░▀░ ▀█░█▀ █▀▀ 　 █▀▀▀ █▀▀█ █▀▄▀█ █▀▀ █▀▀
  // █░░ ▀█▀ ░█▄█░ █▀▀ 　 █░▀█ █▄▄█ █░▀░█ █▀▀ ▀▀█
  // ▀▀▀ ▀▀▀ ░░▀░░ ▀▀▀ 　 ▀▀▀▀ ▀░░▀ ▀░░░▀ ▀▀▀ ▀▀▀

  getGamesByFieldProfile(token, fieldProfileID) {

      let route = this.BASE + this.RSRC;

      const options = { params  : new HttpParams()
                                      .set("token", token)
                                      .set("fieldPofileID", fieldPofileID)}

      return this.http.get(route + 'gamesBy', options)
  }

  getActiveGamesByFieldProfile(token, fieldProfileID) {

      const options = { params  : new HttpParams()
                                      .set("token", token)
                                      .set("fieldPofileID", fieldPofileID)}

      return this.http.get(this.BASE + 'games/activeGamesBy', options)
  }

  pauseGame(token, data) {

      const options = { params  : new HttpParams().set("token", token),
                        headers : this.headers }

      return this.http.put(this.BASE + 'gameplay/pauseGame', data, options)
  }

  startGame(token, gameConfigID){

      let data = {"gameConfigID":gameConfigID}

      const options = { params  : new HttpParams().set("token", token),
                        headers : this.headers }

      return this.http.post(this.BASE + 'games/startGame', data, options)
  }

  endGame(token, gameID){

      let data = {"id":gameID}

      const options = { params  : new HttpParams().set("token", token),
                        headers : this.headers }

      return this.http.put(this.BASE + 'games/endGame', data, options)
  }


  // █▀▀ ░▀░ █▀▀ █░░ █▀▀▄ 　 █▀▀█ █▀▀▄ █▀▄▀█ ░▀░ █▀▀▄
  // █▀▀ ▀█▀ █▀▀ █░░ █░░█ 　 █▄▄█ █░░█ █░▀░█ ▀█▀ █░░█
  // ▀░░ ▀▀▀ ▀▀▀ ▀▀▀ ▀▀▀░ 　 ▀░░▀ ▀▀▀░ ▀░░░▀ ▀▀▀ ▀░░▀

  getFieldProfileFromAPI(token, fieldProfileID) {

      let route = this.BASE + this.RSRC + this.FPRO;

      const options = { params  : new HttpParams()
                                      .set("token", token)
                                      .set("id", fieldPofileID)}

      return this.http.get(route, options)
  }

  getUserListFromAPI(token) {

      let route = this.BASE + this.RSRC;

      const options = { params  : new HttpParams().set("token", token)}

      return this.http.get(route + 'user_list', options)
  }

  pairUid(token, data) {

      let route = this.BASE + this.RSRC;

      const options = { params  : new HttpParams().set("token", token),
                        headers : this.headers }

      return this.http.put(route + 'pair_rfid', data, options)
  }

  updateFieldProfile(token, data) {
      // Requires fieldPofileID as id in data
      let route = this.BASE + this.RSRC + this.FPRO;

      const options = { params  : new HttpParams().set("token", token),
                        headers : this.headers }

      return this.http.put(route, data, options)
  }

}
