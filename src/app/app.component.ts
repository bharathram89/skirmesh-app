import { Component } from '@angular/core';

import { Meta, MetaDefinition } from '@angular/platform-browser';
import { NodeConfigService } from '../service/node-status.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'skirmesh-ui';
  constructor(private metaService:Meta){ }
 
  ngOnInit() {
    this.metaService.addTag( { name:'google-site-verification',content:"Eau3tLmNdfqfQ9_oxjjmGa6QDfnPqRqQNppovPKIqNo"});
  }
  

}
