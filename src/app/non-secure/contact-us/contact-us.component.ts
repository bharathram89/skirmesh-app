import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from 'src/service/google-analytics.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor(private analyticSvc:GoogleAnalyticsService) { }

  ngOnInit(): void {
    this.analyticSvc.pageView('contact_us','non-secure','non-secure/contact-us')
  }

}
