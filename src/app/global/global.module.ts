import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { RouterModule } from '@angular/router'; 
import { SecureFooterComponent } from './secure-footer/secure-footer.component'; 
import { AuthService } from 'src/service/auth.service';
import { UserServiceService } from 'src/service/user-service.service';
@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [
    RouterModule,
    CommonModule
    
  ],
  providers: [UserServiceService],
  exports: [FooterComponent, HeaderComponent]
})
export class GlobalModule { }
//AuthService