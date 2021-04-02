import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { SecurePlayerComponent } from './secure-player/secure-player.component';

const routes: Routes = [
  { path: '',
 component: SecurePlayerComponent,
 children: [
   {
     path: '',
     component:SecurePlayerComponent
   } 
 ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurePlayerRoutingModule { }
