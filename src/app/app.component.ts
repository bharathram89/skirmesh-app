import { Component } from '@angular/core';

import { Meta, MetaDefinition } from '@angular/platform-browser';
import { NgxFeedbackService, FeedbackData } from 'ngx-feedback';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'skirmesh-ui';
  constructor(private metaService: Meta, private readonly feedbackService: NgxFeedbackService) { }

  ngOnInit() {
    this.metaService.addTag({ name: 'google-site-verification', content: "Eau3tLmNdfqfQ9_oxjjmGa6QDfnPqRqQNppovPKIqNo" });
    if (!location.host.includes('localhost') && location.protocol !== 'https:') {
      location.replace(`https:${location.href.substring(location.protocol.length)}`);
    }
    this.feedbackService.listenForFeedbacks().subscribe((data: FeedbackData) => {
      // Use the data coming from the feedback here
      console.log(data, 'feedbackdata')
    });
    // console.log(location,"location")
  }


}
