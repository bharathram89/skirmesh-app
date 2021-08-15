import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const GAME_KEY = 'game-key';

@Injectable({
  providedIn: 'root'
})
export class AppService {
    isMobileApp = false;
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
          if(this.detectMob()){
            this.isMobileApp= true;
          }
    // if(
    //     navigator.userAgent.match(/Android/i) ||
    //     navigator.userAgent.match(/webOS/i) ||
    //     navigator.userAgent.match(/iPhone/i) ||
    //     navigator.userAgent.match(/iPod/i)) { 
    //       this.isMobile = true;
    //    }
    }
    detectMob() {
      const toMatch = [
          /Android/i, 
          /iPhone/i,
          /iPad/i,
          /iPod/i,
          /BlackBerry/i,
          /Windows Phone/i
      ];
      
      return toMatch.some((toMatchItem) => {
          return navigator.userAgent.match(toMatchItem);
      });
  }
}
