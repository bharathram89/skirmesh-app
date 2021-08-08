import { Component } from '@angular/core';

import { Meta, MetaDefinition } from '@angular/platform-browser';
import { Router , NavigationEnd} from '@angular/router';
import { NonSecureAPIService } from 'src/service/non-secure-api.service';

declare let gtag: Function;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'skirmesh-ui';

  constructor(
      private metaService: Meta,
      private nonSecAPIsvc : NonSecureAPIService,
      public router: Router) {

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


    if (!location.host.includes('localhost') && location.protocol !== 'https:') {
        location.replace(`https:${location.href.substring(location.protocol.length)}`);
    }


  }

}
