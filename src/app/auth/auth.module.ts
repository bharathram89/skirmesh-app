import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component'; 
import { GlobalModule } from '../global/global.module'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PassResetComponent } from './pass-reset/pass-reset.component'
@NgModule({
  declarations: [AuthComponent, SignUpComponent, SignInComponent, PassResetComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    GlobalModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
