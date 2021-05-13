import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NonSecureRoutingModule } from './non-secure-routing.module';
import { NonSecureComponent } from './non-secure.component';
import { FeaturesListComponent } from './features-list/features-list.component';
import { HomeComponent } from './home/home.component';
import { GlobalModule } from '../global/global.module';
import { AuthRoutingModule } from '../auth/auth-routing.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { FaqComponent } from './faq/faq.component';
import { PlayerInfoComponent } from './player-info/player-info.component';
import { FieldInfoComponent } from './field-info/field-info.component';
import { MydevicesComponent } from './mydevices/mydevices.component'
import { CarouselModule } from 'ngx-bootstrap/carousel';
@NgModule({
  declarations: [NonSecureComponent, FeaturesListComponent, HomeComponent, ContactUsComponent, PrivacyPolicyComponent, FaqComponent, PlayerInfoComponent, FieldInfoComponent,MydevicesComponent],
  imports: [
    CommonModule,
    NonSecureRoutingModule,
    AuthRoutingModule,
    GlobalModule,
    CarouselModule
  ]
})
export class NonSecureModule { }
