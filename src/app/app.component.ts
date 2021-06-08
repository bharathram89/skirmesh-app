import { Component } from '@angular/core';

import { Meta, MetaDefinition } from '@angular/platform-browser';
import { NgxFeedbackService, FeedbackData } from 'ngx-feedback';
import { NonSecureAPIService } from 'src/service/non-secure-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'skirmesh-ui';

  constructor(
      private metaService: Meta,
      private readonly feedbackService: NgxFeedbackService,
      private nonSecAPIsvc : NonSecureAPIService) { }

  ngOnInit() {

    this.metaService.addTag({ name: 'google-site-verification',
                              content: "Eau3tLmNdfqfQ9_oxjjmGa6QDfnPqRqQNppovPKIqNo" });

    if (!location.host.includes('localhost') && location.protocol !== 'https:') {
        location.replace(`https:${location.href.substring(location.protocol.length)}`);
    }


    this.feedbackService.listenForFeedbacks().subscribe((data: FeedbackData) => {
      // Use the data coming from the feedback here
        // var form_data = new FormData();
        //
        // for ( var key in data ) {
        //   if(key =='screenshot'){
        //     delete data[key];
        //   }
        // }
        // console.log(form_data,data)

        // this.nonSecAPIsvc.sendFeedback(JSON.stringify(data)).subscribe(
        this.nonSecAPIsvc.sendFeedback(data).subscribe(
            resp => {},
            err  => {}
        )
    });
    
  }

}
