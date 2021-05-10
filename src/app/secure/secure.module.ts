import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SecureComponent } from './secure/secure.component';
import { GlobalModule } from '../global/global.module';
import { SecureRoutingModule } from './secure-routing.module';
import { StartGameComponent } from './start-game/start-game.component';
import { ManageGameComponent } from './manage-game/manage-game.component';
import { FindGameComponent } from './find-game/find-game.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
 
@NgModule({
    declarations: [ProfileComponent, DashboardComponent, SecureComponent, StartGameComponent, ManageGameComponent, FindGameComponent],
    imports: [
        CommonModule,
        SecureRoutingModule,
        GlobalModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class SecureModule {
}
