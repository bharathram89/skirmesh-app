import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { LiveGamesComponent } from '../non-secure/liveGames/liveGames.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageGameComponent } from './manage-game/manage-game.component';
import { ProfileComponent } from './profile/profile.component';
import { SecureComponent } from './secure/secure.component';
import { StartGameComponent } from './start-game/start-game.component';
import { GameHistoryComponent } from './game-history/game-history.component';

const routes: Routes = [
  {
    path: '',
    component: SecureComponent,
    children: [
      {
        path: '',
        redirectTo: 'profile',
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'past-games',
        component: GameHistoryComponent,
      },
      {
        path: 'live-games',
        component: LiveGamesComponent,
      },
      {
        path: 'startGame',
        component: StartGameComponent
      },
      {
        path: 'manageGame',
        component: ManageGameComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureRoutingModule { }
