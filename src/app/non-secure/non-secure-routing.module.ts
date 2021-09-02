import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FeaturesListComponent } from './features-list/features-list.component';
import { FieldInfoComponent } from './field-info/field-info.component';
import { HomeComponent } from './home/home.component';
import { NonSecureComponent } from './non-secure.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

import { LiveGamesComponent } from './liveGames/liveGames.component'
import { HowToUseComponent } from './how-to-use/how-to-use.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { EventsComponent } from './events/events.component';
import { GameHistoryComponent } from './game-history/game-history.component';

// const routes: Routes = [{ path: '', component: NonSecureComponent }];

const routes: Routes = [
  { path: '',
  component: NonSecureComponent,
  children: [
    {
      path: 'home',
      component: HomeComponent,
    },
    {
      path: 'feature-list',
      component: FeaturesListComponent,
    },
    {
      path: 'contact-us',
      component: ContactUsComponent,
    },
    {
      path: 'privacy-policy',
      component: PrivacyPolicyComponent,
    },
    {
      path: 'field-info',
      component: FieldInfoComponent,
    },
    {
      path: 'live-games',
      component: LiveGamesComponent,
    },
    {
      path: 'how-to-use',
      component: HowToUseComponent,
    },
    {
      path: 'leader-board',
      component: LeaderboardComponent,
    },
    {
      path: 'past-games',
      component: GameHistoryComponent,
    },
    {
      path: 'events',
      component: EventsComponent,
    },
    {
      path: "",
      redirectTo:'/non-secure/home'
    }
  ]},

  // { path: '**',
  // component: NonSecureComponent,
  // children: [
  //   {
  //     path: '**',
  //     redirectTo: 'home',
  //   },
  //   {
  //     path: 'features-list',
  //     component: FeaturesListComponent,
  //   }
  // ]}
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NonSecureRoutingModule { }
