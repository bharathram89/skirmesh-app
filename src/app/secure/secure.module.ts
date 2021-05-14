import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SecureComponent } from './secure/secure.component';
import { GlobalModule } from '../global/global.module';
import { SecureRoutingModule } from './secure-routing.module';
import { StartGameComponent } from './start-game/start-game.component';
import { ManageGameComponent } from './manage-game/manage-game.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxChartsModule } from '@swimlane/ngx-charts';
@NgModule({
    declarations: [ProfileComponent, DashboardComponent, SecureComponent, StartGameComponent, ManageGameComponent],
    imports: [
        CommonModule,
        SecureRoutingModule,
        GlobalModule,
        FormsModule,
        ReactiveFormsModule,
        TypeaheadModule.forRoot(),
        NgxDatatableModule, 
        NgxChartsModule
    ]
})
export class SecureModule {
}
