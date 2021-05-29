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

  BASE = 'https://api.skirmesh.net/';


  createUser(data){
    return this.http.post(this.BASE + 'resources/createUser',data,this.options)
  }


  userLogin(data){
    return this.http.post(this.BASE + 'login',data,this.options)
  }


  getUser(token){
    return this.http.get(this.BASE + 'resources/user?token='+token)
  }

}
