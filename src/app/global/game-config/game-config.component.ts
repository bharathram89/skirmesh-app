import { Component, OnInit, ViewChild } from '@angular/core';
import { DeviceService } from 'src/service/device.service';
import { UserServiceService } from 'src/service/user-service.service';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-game-config',
  templateUrl: './game-config.component.html',
  styleUrls: ['./game-config.component.scss']
})
export class GameConfigComponent implements OnInit {

  @ViewChild('gameModeEdit') editModeTemplate;
  @ViewChild(TabsComponent) tabsComponent;
  gameModes = [
 
  ];
  userSvc:UserServiceService
  deviceSvc:DeviceService
  constructor(deviceSvc:DeviceService,userSvc:UserServiceService) { 
    this.deviceSvc = deviceSvc;
    this.userSvc = userSvc;
  }

  ngOnInit(): void { 
    this.deviceSvc.getGameConfigs(this.userSvc.getToken(),this.userSvc.getFieldProfileID()).subscribe(savedConfigs=>{
      console.log(savedConfigs,"savedConfigs");
      JSON.parse(JSON.stringify(savedConfigs)).forEach(savedConfig => { 
        this.gameModes.push({
          id:savedConfig.id,
          name:savedConfig.description,
          teams:savedConfig.teams,
          nodeModes:savedConfig.deviceMap,
          map:savedConfig.mapID
        }); 
      }); 
    }) 
  }

  onDeleteMode(gameMode){
    this.deviceSvc.deleteGameConfig(this.userSvc.getToken(),gameMode.id).subscribe(data=>{
      // console.log(data,"delete")
      this.gameModes = this.gameModes.filter(function( obj ) {
        return obj.id !== gameMode.id;
      });
    })
  }
  onEditMode(gameMode) {
    // console.log(this.tabsComponent,this.editModeTemplate,gameMode,"edit call");
    this.tabsComponent.openTab(
      `Editing ${gameMode.name}`,
      this.editModeTemplate,
      gameMode,
      true
    );
  }

  onAddMode() {
    this.tabsComponent.openTab('New Game Mode', this.editModeTemplate, {}, true);
  }

  onGameModeFormSubmit(dataModel) {
    if (dataModel.id > 0) {
      let apiData ={ 
        mapID:this.userSvc.findMapID(dataModel.map),
        fieldProfileID:this.userSvc.getFieldProfileID(),
        description:dataModel.name,
        deviceMap:dataModel.nodeModes,
        teams:dataModel.teams
      }
      // console.log('edit gameconfig',apiData)
      this.deviceSvc.modifyGameConfig(apiData,this.userSvc.getToken()).subscribe(data=>{

      })
      this.gameModes = this.gameModes.map(gameMode => {
        if (gameMode.id === dataModel.id) {
          return dataModel;
        } else {
          return gameMode;
        }
      });
    } else {
      // create a new one
      let apiData ={
        mapID: dataModel.map,
        fieldProfileID:this.userSvc.getFieldProfileID(),
        description:dataModel.name,
        deviceMap:dataModel.nodeModes,
        teams:dataModel.teams
      }
      // console.log('create gameconfig',apiData)

      dataModel.id = Math.round(Math.random() * 100); 
      this.gameModes.push(dataModel);
      this.deviceSvc.saveGameConfigs(apiData,this.userSvc.getToken()).subscribe(data=>{

      })
    }

    // close the tab
    this.tabsComponent.closeActiveTab();
  }


}
