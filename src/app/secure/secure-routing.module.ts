import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'; 
import { ManageGameComponent } from './manage-game/manage-game.component'; 
import { ProfileComponent } from './profile/profile.component';
import { SecureComponent } from './secure/secure.component';
import { StartGameComponent } from './start-game/start-game.component';

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
