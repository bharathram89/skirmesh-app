import { Injectable } from '@angular/core';

declare let gtag:Function;
@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {

  constructor() { 
    gtag('config', 'G-K544NHEE4R', {
      send_page_view: false
    });
  }
  public viewLiveGame( 
    eventName: string, 
    eventCategory: string, 
    eventAction: string, 
    eventLabel: string = null,  
    eventValue: number = null ){ 
         gtag('event', eventName, { 
                 eventCategory: eventCategory, 
                 eventLabel: eventLabel, 
                 eventAction: eventAction, 
                 eventValue: eventValue
               })
    }
    public pageView( 
      page_title: string, 
      page_location: string, 
      page_path: string,  ){ 
        gtag('event', 'page_view', {
          page_title: page_title,
          page_location: page_location,
          page_path: page_path,
          send_to: 'G-K544NHEE4R'
        })
      }
}
