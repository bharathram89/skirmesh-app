import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const GAME_KEY = 'game-key';

@Injectable({
  providedIn: 'root'
})
export class AppService {

    isMobile = false;
    constructor(
        private breakpointObserver : BreakpointObserver
        ) { 
            this.breakpointObserver.observe([
                '(max-width: 768px)'
                  ]).subscribe(result => {
          
                    if (result.matches) {
                      this.isMobile =true;
                    }
                    else {
                      // if necessary:
                      this.isMobile =false;
                    }
                  });
          
    // if(
    //     navigator.userAgent.match(/Android/i) ||
    //     navigator.userAgent.match(/webOS/i) ||
    //     navigator.userAgent.match(/iPhone/i) ||
    //     navigator.userAgent.match(/iPod/i)) { 
    //       this.isMobile = true;
    //    }
    }

}
