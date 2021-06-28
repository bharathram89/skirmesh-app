import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { AuthGuardGuard } from 'src/app/helpers/auth-guard.guard';
import { TokenStorageService } from 'src/service/token-storage.service';
import { NonSecureAPIService } from 'src/service/non-secure-api.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  login: FormGroup;
  fields = {  callSign: '', password: "" }

  constructor(
    private socialAuthService: SocialAuthService,
    private tokenStorage: TokenStorageService,
    private nonSecAPIsvc : NonSecureAPIService,
    private router: Router
  ) {

   }

  ngOnInit(): void {
    this.login = new FormGroup({

      "callSign": new FormControl(this.fields.callSign, [
        Validators.required
      ]),

      "password": new FormControl(this.fields.password, [
        Validators.required,
        Validators.minLength(6)
      ]),

    })

  }

  get password() { return this.login.get('password'); }
  get callSign() { return this.login.get('callSign'); }

  onSubmit(){

    let data = {
      "callSign": this.login.value.callSign,
      "password": this.login.value.password
    }

    this.nonSecAPIsvc.userLogin(data).subscribe(

      respData=>{

        this.tokenStorage.saveToken(respData['token'])
        this.router.navigate(['/secure/dashboard']);
      },
      err=>{
        document.getElementById('userLoginFaileddMessage').classList.toggle('d-none')
      }
    )
  }

  signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(googleData=>{

      let data = { "googleID" : googleData.id,
                   // "google"   : JSON.stringify({"ID":googleData.id,"provider":"google","skirmesh":"rocks"}),
                   "email"    : googleData.email}

      this.nonSecAPIsvc.userLogin(data).subscribe(

        respData=>{

          this.tokenStorage.saveToken(respData['token'])
          this.router.navigate(['/secure/dashboard']);

        },
        err=>{
          document.getElementById('userLoginFaileddMessage').classList.toggle('d-none')
        }
      )
    });;
  }


  loginWithFacebook(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(fbData=>{

      let data = {"facebookID" : fbData.id ,
                  // 'facebook'   : JSON.stringify({"ID":fbData.id,"provider":"facebook","skirmesh":"rocks"}),
                  "email"      : fbData.email}

      this.nonSecAPIsvc.userLogin(data).subscribe(

        respData=>{

          this.tokenStorage.saveToken(respData['token'])
          this.router.navigate(['/secure/dashboard']);

        },
        err=>{
          document.getElementById('userLoginFaileddMessage').classList.toggle('d-none')
        }
      )
    });
  }


}
