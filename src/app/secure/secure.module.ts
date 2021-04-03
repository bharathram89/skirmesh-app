import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SecureComponent } from './secure/secure.component';
import { GlobalModule } from '../global/global.module';
import { SecureRoutingModule } from './secure-routing.module';



@NgModule({
  declarations: [ProfileComponent, DashboardComponent, SecureComponent],
  imports: [
    CommonModule,
    SecureRoutingModule,
    GlobalModule
  ]
})
export class SecureModule { }
