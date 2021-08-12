import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/service/app.service';
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
  constructor(userService:UserServiceService, appSvc: AppService) { 
    this.isField = userService.isField;
    this.isSecure = userService.isSignedIn();
    this.appSvc = appSvc;
  }

  ngOnInit(): void {
  }

}
