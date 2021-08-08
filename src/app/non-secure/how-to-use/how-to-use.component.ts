import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-to-use',
  templateUrl: './how-to-use.component.html',
  styleUrls: ['./how-to-use.component.scss']
})
export class HowToUseComponent implements OnInit {
  isOpen = false;
  playerContent = "";
  constructor() { }

  ngOnInit(): void {
  }

    changeInfo(toggle){

        this.isOpen = true;

        switch (toggle) {

            case 'register':
                this.playerContent = "Sign in using Facebook, Google, or old school.";
                break;

            case 'wristband':
                this.playerContent = "Connect it to your account to track your actions.";
                break;

            case 'play':
                this.playerContent = "Use tactics and teamwork to solidify the objective and watch your points soar!";
                break;

            case 'game':
                this.playerContent = "Head over to Live Games and keep up with Skirmesh enabled fields.";
                break;

            case 'compete':
                this.playerContent = "Earn points for your team and check the leaderboard to see where you stack up.";
                break;

            default:
                this.playerContent = "";
                this.isOpen = false;
        }

    }


}
