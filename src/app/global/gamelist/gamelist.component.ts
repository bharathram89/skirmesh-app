import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserServiceService } from 'src/service/user-service.service';

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.scss']
})
export class GamelistComponent implements OnInit {

  @Input() gamemodes;
  @Output() addMode = new EventEmitter<any>();
  @Output() editMode = new EventEmitter<any>();
  @Output() deleteMode = new EventEmitter<any>();
  userSvc:UserServiceService
  constructor(userService:UserServiceService) {
    this.userSvc = userService;
   }

  ngOnInit(): void {
  }
  findMapName(e){
    return this.userSvc.findMapName(e);
  }
}
