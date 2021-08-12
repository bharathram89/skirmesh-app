import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { NonSecureAPIService } from 'src/service/non-secure-api.service';
import { TokenStorageService } from 'src/service/token-storage.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  addUser: FormGroup;
  socailPass: FormGroup;

  fields = { fname: '', lname: '', email: '', password: '', callSign: '', confirmPassword: "", fieldName: "" }
  fbFields = { pass: '', confirmPass: '' }

  constructor(
    private socialAuthService: SocialAuthService,
    private nonSecAPIsvc: NonSecureAPIService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.socailPass = new FormGroup({
      "pass": new FormControl(this.fbFields.pass, [
        Validators.required,
        Validators.minLength(6)
      ]),
      "confirmPass": new FormControl(this.fbFields.confirmPass, [
        Validators.required
      ])
    }, { validators: this.checkFBPasswords.bind(this) })
    this.addUser = new FormGroup({

      "fname": new FormControl(this.fields.fname, [
        Validators.required
      ]),
      "lname": new FormControl(this.fields.lname, [
        Validators.required
      ]),
      "email": new FormControl(this.fields.email, [
        Validators.required,
        Validators.email
      ]),
      "password": new FormControl(this.fields.password, [
        Validators.required,
        Validators.minLength(6)
      ]),
      "callSign": new FormControl(this.fields.callSign, [
        Validators.required
      ]),
      "confirmPassword": new FormControl(this.fields.confirmPassword, [
        Validators.required
      ]),
      "fieldName": new FormControl(this.fields.fieldName, [
        Validators.required
      ]),
    }, { validators: this.checkPasswords.bind(this) })
    this.socialAuthService.authState.subscribe((user) => {
      // this.socialUser = user;
      // this.isLoggedin = (user != null);
      console.log('user fb login', user)
    });
    this.addUser.controls['fieldName'].disable();//needed in ngonInit to disable fieldName
  }
  checkPasswords(group: FormGroup) {
    const password = group.get('password').value;
    const confirmPassword = group.get('confirmPassword').value;

    return password === confirmPassword ? null : group.controls['confirmPassword'].setErrors({ notSame: true });

  }
  checkFBPasswords(group: FormGroup) {
    const password = group.get('pass').value;
    const confirmPassword = group.get('confirmPass').value;

    return password === confirmPassword ? null : group.controls['confirmPass'].setErrors({ notSame: true });

  }

  get pass() { return this.socailPass.get('pass'); }
  get confirmPass() { return this.socailPass.get('confirmPass'); }


  get fname() { return this.addUser.get('fname'); }
  get lname() { return this.addUser.get('lname'); }
  get email() { return this.addUser.get('email'); }
  get password() { return this.addUser.get('password'); }
  get callSign() { return this.addUser.get('callSign'); }
  get confirmPassword() { return this.addUser.get('confirmPassword'); }
  get fieldName() { return this.addUser.get('fieldName'); }

  fieldSignUp() {

    let fieldSignUp = document.getElementById("fieldSignUp");
    let playerSignUp = document.getElementById("playerSignUp");
    let callSign = document.getElementById("callSign");
    let fieldName = document.getElementById("fieldName")

    callSign.style.display = 'none'
    fieldName.style.display = 'block'
    this.addUser.controls['callSign'].disable();
    this.addUser.controls['fieldName'].enable();

    playerSignUp.classList.remove("active");
    fieldSignUp.classList.add("active");
  }
  playerSignUp() {

    let fieldSignUp = document.getElementById("fieldSignUp");
    let playerSignUp = document.getElementById("playerSignUp");
    let callSign = document.getElementById("callSign");
    let fieldName = document.getElementById("fieldName")

    callSign.style.display = 'block'
    fieldName.style.display = 'none'
    this.addUser.controls['callSign'].enable();
    this.addUser.controls['fieldName'].disable();

    fieldSignUp.classList.remove("active");
    playerSignUp.classList.add("active");
  }

  loginWithFacebook(): void {

    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(fbData => {

      let type = document.getElementById('fieldSignUp').classList.contains('active') ? 'field' : 'player';

      let socialData = {
        "facebookID": fbData.id,
        // "facebook"   : JSON.stringify({"ID":fbData.id,"provider":"facebook","skirmesh":"rocks"}),
        "callSign": fbData.name + this.getRandomInt(),
        "firstName": fbData.firstName,
        "lastName": fbData.lastName,
        "password": fbData.name + this.getRandomInt(),
        "email": fbData.email,
        "type": type
      }
      let logindata = {
        "facebookID": fbData.id, 
        "email": fbData.email
      }
      this.submitSocial(socialData,logindata);
    });
  }

  signInWithGoogle(): void {

    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(googleData => {

      let type = document.getElementById('fieldSignUp').classList.contains('active') ? 'field' : 'player';

      let socialData = {
        "googleID": googleData.id,
        // "google"    : JSON.stringify({"ID":googleData.id,"provider":"google","skirmesh":"rocks"}),
        "callSign": googleData.name + this.getRandomInt(),
        "firstName": googleData.firstName,
        "lastName": googleData.lastName,
        "password": googleData.name + this.getRandomInt(),
        "email": googleData.email,
        "type": type
      }
      let logindata = {
        "googleID": googleData.id, 
        "email": googleData.email
      }
      this.submitSocial(socialData,logindata);
    });
  }


  getRandomInt() {

    return Math.floor(Math.random() * 100000)
  }


  onSubmit() {
    let type = document.getElementById('fieldSignUp').classList.contains('active') ? 'field' : 'player';
    let data = {
      "callSign": type == 'field' ? this.addUser.value.fieldName : this.addUser.value.callSign,
      "firstName": this.addUser.value.fname,
      "lastName": this.addUser.value.lname,
      "password": this.addUser.value.password,
      "email": this.addUser.value.email,
      "type": type
    }
    this.nonSecAPIsvc.createUser(data).subscribe(createUserRsp => {
      let logindata = {
        "callSign": data.callSign,
        "password": data.password
      }
      this.nonSecAPIsvc.userLogin(logindata).subscribe(
        respData => { 
          this.tokenStorage.saveToken(respData['token']).then(
            data => {
              this.router.navigate(['/secure/dashboard']);
            }
          )
        },
        err => {
          document.getElementById('userCreateFailedMessage').classList.toggle('d-none')
        }
      )
    },
      err => {
        document.getElementById('userCreateFailedMessage').classList.toggle('d-none')
        console.log(err, "resp")
      })
  }


  submitSocial(socialData,logindata) {

    this.nonSecAPIsvc.createUser(socialData).subscribe(data => { 
      this.nonSecAPIsvc.userLogin(logindata).subscribe(
        respData => { 
          this.tokenStorage.saveToken(respData['token']).then(
            data=> {
              this.router.navigate(['/secure/dashboard']);
            }
          )
        },
        err => {
          document.getElementById('userCreateFailedMessage').classList.toggle('d-none')
        }
      ) 
    },
      err => {
        document.getElementById('userCreateFailedMessage').classList.toggle('d-none')
        console.log(err, "resp")
      })
  }

}
