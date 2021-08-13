import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/service/app.service';
import { TokenStorageService } from 'src/service/token-storage.service';
import { UserServiceService } from 'src/service/user-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  appSvc:AppService;
  isField;
  isSecure;
  userSvc:UserServiceService; 
  tokenSvc:TokenStorageService;
  constructor(userService:UserServiceService, tokenService: TokenStorageService,appSvc: AppService) { 
    this.appSvc = appSvc;
    this.tokenSvc=tokenService;
    this.userSvc = userService;
    this.appSvc = appSvc;
  }

  async ngOnInit() {

    await this.tokenSvc.getToken().then(
      data => {
        if (data) {
          if (data.length) {
            this.isSecure = true;
          } else {
            this.isSecure = false;
          }
          this.isField = this.userSvc.isField;
        } else {
          this.isSecure = false;
          this.isField = this.userSvc.isField;
        }

      }
    ) 
  }

}
