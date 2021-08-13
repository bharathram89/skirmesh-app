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
    this.userSvc.userData.subscribe(
      userData => {
        console.log(userData);
        if (userData?.fieldProfile) {
          this.isField = true;
        } else {
          this.isField = false;
        }
      }
    );
    await this.tokenSvc.getToken().then(
      data => {
        if (data) {
          if (data.length) {
            this.isSecure = true;
    this.userSvc.setSignIn(true);

          } else {
            this.isSecure = false;
          }
        } else {
          this.isSecure = false;
        }

      }
    ) 
  }

}
