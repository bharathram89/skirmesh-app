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

 
  createUser(data){
    return this.http.post('http://api.skirmesh.net/resources'+'/users',data,this.options)
  }

  userLogin(data){
    return this.http.post('http://api.skirmesh.net'+'/login',data,this.options)
  }

  getUser(token){
    return this.http.get('http://api.skirmesh.net'+'/resources/user?token='+token)
  }
}
