import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { RouterModule } from '@angular/router'; 
import { UserServiceService } from 'src/service/user-service.service';
import { GameConfigComponent } from './game-config/game-config.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';
import { DynamicTabsDirective } from './tabs/dynamic-tabs.directive';
import { GamelistComponent } from './gamelist/gamelist.component';
import { EditGameComponent } from './edit-game/edit-game.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeviceListComponent } from './device-list/device-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ColorPickerModule } from 'ngx-color-picker';
import { MapComponent } from './map/map.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TeamRosterComponent } from './team-roster/team-roster.component';
import { TeamScoreComponent } from './team-score/team-score.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
@NgModule({
  declarations: [FooterComponent, HeaderComponent, GameConfigComponent, TabsComponent, TabComponent,
    TabsComponent,
    TabComponent,
    DynamicTabsDirective,
    GamelistComponent,
    EditGameComponent,
    DeviceListComponent,
    MapComponent,
    TeamRosterComponent,
    TeamScoreComponent,],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxDatatableModule, 
    ColorPickerModule,
    NgxChartsModule,
    TooltipModule.forRoot()

  ],
  exports: [FooterComponent, HeaderComponent,GameConfigComponent,DeviceListComponent,MapComponent,TeamScoreComponent]
})
export class GlobalModule { }
//AuthService
