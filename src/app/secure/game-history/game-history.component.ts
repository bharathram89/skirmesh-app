import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { NonSecureAPIService } from 'src/service/non-secure-api.service';


interface ITab {
  title: string;
  content: string;
  removable?: boolean;
  disabled?: boolean;
  active?: boolean;
  customClass?: string;
}

@Component({
  selector: 'app-game-history',
  templateUrl: './game-history.component.html',
  styleUrls: ['./game-history.component.scss']
})
export class GameHistoryComponent implements OnInit {
 

  gameModes; 
  selectedMode; 
  selectedGame;
  constructor(
    private nonSecAPIsvc : NonSecureAPIService) { }

  ngOnInit(): void { 
    this.nonSecAPIsvc.getPastGames().subscribe(
      data=>{ 
        this.gameModes =data; 
        this.selectedMode = data[0];
        this.selectedGame = data[0].games[0];
        console.log(data,'pat games',this.selectedMode  ,this.selectedGame )
      },
      err=>{}
    )
  }

  changeGameMode(e){
    // console.log(e)
    let newMode = this.gameModes.find(ele=> ele.id == e.target.value)
    this.selectedMode  = newMode;
    this.selectedGame = newMode.games[0]
    console.log(this.selectedGame,this.selectedMode )
  }

  changeGame(e){
    let game = this.selectedMode.games.find(ele=> ele.id == e.target.value);
    this.selectedGame = game; 
    console.log(e,game)
    //call to get game details and show user data and map.
  }

  getGameData(){
    this.nonSecAPIsvc.getGameStats(this.selectedGame.id).subscribe(
      data=>{
        console.log(data)
      }
    )
  }
}
