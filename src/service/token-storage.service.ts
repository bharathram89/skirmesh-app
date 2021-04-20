import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const GAME_KEY = 'game-key';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }
 
  public saveGameInfo(gameInfo):void {
    window.sessionStorage.removeItem(GAME_KEY);
    window.sessionStorage.setItem(GAME_KEY, gameInfo); 
  }

  public getGameInfo():string | null { 
    return window.sessionStorage.getItem(GAME_KEY);
  }

  public endGame():void{
    window.sessionStorage.removeItem(GAME_KEY); 
  }
}
