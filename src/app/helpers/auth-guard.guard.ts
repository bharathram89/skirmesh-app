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
    private tokenStorage: TokenStorageService,
    private userSvc: UserServiceService,
    private secAPIsvc: SecureAPIService,
    private router: Router
  ) { }

  canActivate(

    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //if session storage has valid key return true else false
    let bool: boolean = false;
    const flag = this.tokenStorage.userToken;
    flag.subscribe(data => {
      if (flag) {
        bool = true;
      }
    });
    
    return bool;
     
  }
}
