import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/service/app.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  appSvc:AppService;
  constructor( appSvc: AppService) { 

    this.appSvc = appSvc;
  }

  ngOnInit(): void {
  }

}
