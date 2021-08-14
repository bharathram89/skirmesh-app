import { Router } from '@angular/router';
import { UserServiceService } from 'src/service/user-service.service';
import { TokenStorageService } from 'src/service/token-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-non-secure',
  templateUrl: './non-secure.component.html',
  styleUrls: ['./non-secure.component.scss']
})
export class NonSecureComponent implements OnInit {

  constructor(private tokenStorageService: TokenStorageService, private userServiceService: UserServiceService, private router: Router) { }

  ngOnInit(): void {
    this.tokenStorageService.getToken().then(
      token => {
        if(token) {
          return true;
        }  else {
          this.tokenStorageService.signOut();
          this.userServiceService.setSignIn(false);
        }
        return false;
      }
    );
  }

}
