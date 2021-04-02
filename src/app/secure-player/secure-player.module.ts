import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurePlayerRoutingModule } from './secure-player-routing.module';
import { SecurePlayerComponent } from './secure-player/secure-player.component';
import { GlobalModule } from '../global/global.module';
import { UserServiceService } from 'src/service/user-service.service';


@NgModule({
  declarations: [SecurePlayerComponent],
  providers: [UserServiceService],
  imports: [
    CommonModule,
    SecurePlayerRoutingModule,
    GlobalModule
  ],
})
export class SecurePlayerModule { }
