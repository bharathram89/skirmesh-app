import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { TokenStorageService } from 'src/service/token-storage.service';
import { UserServiceService } from 'src/service/user-service.service';

@Component({
  selector: 'app-mydevices',
  templateUrl: './mydevices.component.html',
  styleUrls: ['./mydevices.component.scss']
})
export class MydevicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}