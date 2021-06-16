import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { TokenStorageService } from 'src/service/token-storage.service';
import { UserServiceService } from 'src/service/user-service.service';
import { catchError, map } from 'rxjs/operators';
import { SecureAPIService } from 'src/service/secure-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(
    private tokenStorage : TokenStorageService ,
    private userSvc      : UserServiceService,
    private secAPIsvc    : SecureAPIService,
    private router       : Router
  ){}

  canActivate(

    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //if session storage has valid key return true else false
      let token = this.tokenStorage.getToken();
      console.log(window.location,"urls stuff");
      if(!token && window.location.href.includes('token')){
        const urlParams = new URLSearchParams(window.location.search);
        token = urlParams.get('token'); 
        this.tokenStorage.saveToken(token);
      }
      if (token) {

        return this.secAPIsvc.getUser(token).pipe(

          map(userdata=>{

              if(userdata){
                this.userSvc.setSignIn(true);
                this.userSvc.setUserData(userdata);
                return true;
              }
        },

        err=>{
          console.log(err,"error in AUTH GUARD")
          return false;
        }))

      } else {
        return false;
      }
  }

}
