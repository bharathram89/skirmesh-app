import { map } from 'rxjs/operators';
import { SecureAPIService } from 'src/service/secure-api.service';
import { UserServiceService } from 'src/service/user-service.service';
import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';
import {BehaviorSubject} from 'rxjs';

const TOKEN_KEY = 'auth-token';
const GAME_KEY = 'game-key';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  userToken: BehaviorSubject<any> = new BehaviorSubject(null)

  constructor(private userSvc: UserServiceService,
    private secAPIsvc: SecureAPIService,) { }

  signOut = async () => {
    this.userToken.next(null);
    return await Storage.clear();
  };


  saveToken = async (token: string) => {
    await Storage.remove({ key: TOKEN_KEY });
    return await Storage.set({
      key: TOKEN_KEY,
      value: token,
    });
  }

  getToken = async () => {
    const token = await Storage.get({ key: TOKEN_KEY });
     await this.verifyToken(token.value);
     this.userToken.next(token.value);
     return token.value;
  }

  async verifyToken(token) {
    if (!token && window.location.href.includes('token')) {
      const urlParams = new URLSearchParams(window.location.search);
      token = urlParams.get('token');
      await this.saveToken(token);
      return true;
    }
    if (token) {
      return await this.secAPIsvc.getUser(token).subscribe(userdata => {
          if (userdata) {
            this.userSvc.setUserData(userdata);
            return true;
          }
        },

          err => {
            this.userToken.next(null);
            this.signOut();
            return false;
          })

    } else {
      return false;
    }
  }

  // public saveGameInfo(gameInfo): void {
  //   window.sessionStorage.removeItem(GAME_KEY);
  //   window.sessionStorage.setItem(GAME_KEY, gameInfo);
  // }

  // public getGameInfo(): string | null {
  //   return window.sessionStorage.getItem(GAME_KEY);
  // }

  // public endGame(): void {
  //   window.sessionStorage.removeItem(GAME_KEY);
  // }
}
