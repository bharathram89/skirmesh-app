import { Component } from '@angular/core';

import { Meta, MetaDefinition } from '@angular/platform-browser';
import { Router , NavigationEnd} from '@angular/router';
import { AppService } from 'src/service/app.service';
import { NonSecureAPIService } from 'src/service/non-secure-api.service';

declare let gtag: Function;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'skirmesh-ui';
  appSvc : AppService;
  constructor(
      private metaService: Meta,
      private nonSecAPIsvc : NonSecureAPIService,
       appSvc : AppService,
      public router : Router) {
        this.appSvc = appSvc;
    this.metaService.addTag({ name: 'google-site-verification',
    content: "Eau3tLmNdfqfQ9_oxjjmGa6QDfnPqRqQNppovPKIqNo" });


        this.router.events.subscribe(event => {
          if(event instanceof NavigationEnd){
              gtag('config', 'G-K544NHEE4R',
                    {
                      'page_path': event.urlAfterRedirects
                    }
                   );
           }
        })



      }

  ngOnInit() {
    if(this.appSvc.isMobileApp){
      document.getElementById('root').classList.add('mobileApp');
    }
    

    if (!location.host.includes('localhost') && location.protocol !== 'https:') {
        location.replace(`https:${location.href.substring(location.protocol.length)}`);
    }


  }

}
