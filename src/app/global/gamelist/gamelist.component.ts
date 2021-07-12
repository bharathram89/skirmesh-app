import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserServiceService } from 'src/service/user-service.service';

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.scss']
})
export class GamelistComponent implements OnInit {

    @Input() gamemodes;
    @Output() addMode    = new EventEmitter<any>();
    @Output() editMode   = new EventEmitter<any>();
    @Output() deleteMode = new EventEmitter<any>();

    constructor(
      private userSvc : UserServiceService
    ) {}

    ngOnInit(): void {}

    findMapName(mapID){

        let map = this.userSvc.getFieldProfile().maps.find(map => map.id == mapID)
        return map?.name
    }
}
