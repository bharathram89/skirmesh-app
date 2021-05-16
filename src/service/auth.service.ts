import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:  HttpClient) { }
  // option={

  // }
  headers =new HttpHeaders({
    'Content-Type': 'application/json'
  });
  options = { headers: this.headers };

  BASE = 'http://api.skirmesh.net/';


  createUser(data){
    return this.http.post(this.BASE + 'resources/createUser',data,this.options)
  }


  userLogin(data){
    return this.http.post(this.BASE + 'login',data,this.options)
  }


  getUser(token){
    return this.http.get(this.BASE + 'resources/user?token='+token)
  }

  updatePass(pass){
    return this.http.put(this.BASE + 'resources/user', pass, this.options)
  }

  saveProfile(token, data){

    var user   = data.user;
    var player = data.player;
    var field  = data.field;

    if (Object.keys(field).length) {
      this.http.put(this.BASE + 'resources/fieldProfile', field, this.options).subscribe(
        resp => { console.log(resp, "resp") },
        err => { console.log(err, "err in update field profile") }
      )
    }
    else if (Object.keys(player).length) {
      this.http.put(this.BASE + 'resources/playerProfile', player, this.options).subscribe(
        resp => { console.log(resp, "resp") },
        err => { console.log(err, "err in update player profile") }
      )
    }

    return this.http.put(this.BASE + 'resources/user?token='+token, user, this.options)
  }


  saveImage(token, data) {

    this.http.put(this.BASE + 'resources/image', data).subscribe(
      resp => { console.log(resp, "resp") },
      err => { console.log(err, "err in update image") }
    );

  }

  getImage(imageID) {
    return this.http.get(this.BASE + 'resources/serve_image/'+imageID)
  }
}
