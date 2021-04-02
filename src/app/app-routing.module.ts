import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { AuthComponent } from './auth/auth.component';
import { AuthGuardGuard } from './helpers/auth-guard.guard';

const routes: Routes = [
  { 
    path: 'secure-player', 
    loadChildren: () => import('./secure-player/secure-player.module').then(m => m.SecurePlayerModule),  
    canActivate: [AuthGuardGuard] 
  },
  { 
    path: 'auth', 
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) 
  },  
  { 
    path: 'non-secure', 
    loadChildren: () => import('./non-secure/non-secure.module').then(m => m.NonSecureModule) 
  },
  {
    path: "**",
    redirectTo:'/auth/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
