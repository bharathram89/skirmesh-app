import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { SecureComponent } from './secure/secure.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureRoutingModule { }
