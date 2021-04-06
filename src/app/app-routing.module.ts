import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';  
import { AuthGuardGuard } from './helpers/auth-guard.guard';

const routes: Routes = [
  { 
    path: 'secure', 
    loadChildren: () => import('./secure/secure.module').then(m => m.SecureModule),  
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
const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  // ...any other options you'd like to use
};
@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
