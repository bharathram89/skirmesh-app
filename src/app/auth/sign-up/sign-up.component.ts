import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  addUser: FormGroup;
  socailPass: FormGroup;
  fields = { fname: '', lname: '', email: '', password: '', callSign: '', confirmPassword: "", fieldName: "" }
  fbFields ={ pass:'',confirmPass:''}
  fbPassword:boolean=false;
  socialLogin:boolean=false;
  socialData:Object;
  constructor(
    private socialAuthService: SocialAuthService,
    private authSvc: AuthService) { }

  ngOnInit(): void {
    this.socailPass = new FormGroup({
      "pass": new FormControl(this.fbFields.pass, [
        Validators.required,
        Validators.minLength(6)
      ]),
      "confirmPass": new FormControl(this.fbFields.confirmPass, [
        Validators.required
      ])
    },{ validators: this.checkFBPasswords.bind(this) })
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
    },{ validators: this.checkPasswords.bind(this) })
    this.socialAuthService.authState.subscribe((user) => {
      // this.socialUser = user;
      // this.isLoggedin = (user != null);
      console.log('user fb login', user)
    });
    this.addUser.controls['fieldName'].disable();//needed in ngonInit to disable fieldName
  } 
  checkPasswords(group: FormGroup){
    const password = group.get('password').value;
  const confirmPassword = group.get('confirmPassword').value;

  return password === confirmPassword ? null : group.controls['confirmPassword'].setErrors({ notSame: true });

  }
  checkFBPasswords(group: FormGroup){
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
    let social = document.getElementById("social_media");
    let or = document.getElementById("or");
    let fieldSignUp = document.getElementById("fieldSignUp");
    let playerSignUp = document.getElementById("playerSignUp");
    let callSign = document.getElementById("callSign");
    let fieldName = document.getElementById("fieldName")
    callSign.style.display = 'none'
    fieldName.style.display = 'block'
    this.addUser.controls['callSign'].disable();
    this.addUser.controls['fieldName'].enable();
    social.style.display = 'none'
    or.style.display = 'none'
    playerSignUp.classList.remove("active");
    fieldSignUp.classList.add("active");
  }
  playerSignUp() {
    let social = document.getElementById("social_media");
    let or = document.getElementById("or");
    let fieldSignUp = document.getElementById("fieldSignUp");
    let playerSignUp = document.getElementById("playerSignUp");
    let callSign = document.getElementById("callSign");
    let fieldName = document.getElementById("fieldName")
    callSign.style.display = 'block'
    fieldName.style.display = 'none'
    this.addUser.controls['callSign'].enable();
    this.addUser.controls['fieldName'].disable();
    social.style.display = 'flex'
    or.style.display = 'block'
    fieldSignUp.classList.remove("active");
    playerSignUp.classList.add("active");
  }
  loginWithFacebook(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(fbData=>{
      this.socialLogin = true;
      console.log(fbData,"fb data");
      let type = document.getElementById('fieldSignUp').classList.contains('active') ? 'field' : 'player';
      //fb.Data.response.picture.data.url has url for image of user in fb so we can make a get call to that and then transform the data to what we need and store it in back end
      this.socialData = {
        "facebook":JSON.stringify({"ID":fbData.id,'PROVIDER':'facebook'}),
        "callSign": fbData.name,
        "firstName": fbData.firstName,
        "lastName": fbData.lastName,
        "password": '',
        "email": fbData.email,
        "type": type
      }
    });
  }
  onSubmit() {
    let type = document.getElementById('fieldSignUp').classList.contains('active') ? 'field' : 'player';
    let data = {
      "callSign": type=='field'?this.addUser.value.fieldName:this.addUser.value.callSign,
      "firstName": this.addUser.value.fname,
      "lastName": this.addUser.value.lname,
      "password": this.addUser.value.password,
      "email": this.addUser.value.email,
      "type": type
    }
    this.authSvc.createUser(data).subscribe(data=>{
      document.getElementById('userCreatedMessage').classList.toggle('d-none')
    },
    err=>{
      document.getElementById('userCreatFaileddMessage').classList.toggle('d-none')
      console.log(err,"resp")
    })
  }
  onSocialSubmit(){
    this.socialData['password']=this.socailPass.value.pass; 
    console.log(this.socialData, this.socailPass.value.pass)
    this.authSvc.createUser(this.socialData).subscribe(data=>{
      document.getElementById('FBuserCreatedMessage').classList.toggle('d-none')
      console.log(data,'fb user created')
    },
    err=>{
      document.getElementById('FBuserCreatFaileddMessage').classList.toggle('d-none')
      console.log(err,"resp")
    })
  }

  signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(googleData=>{
      this.socialLogin = true;
      console.log(googleData,"google Data");
      // let type = document.getElementById('fieldSignUp').classList.contains('active') ? 'field' : 'player';
      // //fb.Data.response.picture.data.url has url for image of user in fb so we can make a get call to that and then transform the data to what we need and store it in back end
      this.socialData = { 
        "facebook":JSON.stringify({"ID":googleData.id,'PROVIDER':'google'}), 
        "callSign": googleData.name,
        "firstName": googleData.firstName,
        "lastName": googleData.lastName,
        "password": '',
        "email": googleData.email,
        "type": 'player'
      }
    });;
  }


}
