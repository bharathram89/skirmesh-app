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





}
