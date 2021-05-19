import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { subscribeOn } from 'rxjs/operators';
import { AuthService } from 'src/service/auth.service';
import { UserServiceService } from 'src/service/user-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

  playerSelected; //this is the selected player from list
  rfidToPair;
  playerList;

  pfNav           : HTMLElement;
  securityNav     : HTMLElement;
  settingsNav     : HTMLElement;
  pfSection       : HTMLElement;
  securitySection : HTMLElement;
  settingsSection : HTMLElement;
  passReset       : FormGroup;
  base64toUpload;
  resetPass = { pass:'',confirmPass:''}
  profileForm     : FormGroup;

  field = { firstName:    '',
            lastName:     '',
            email:        '',
            clanTag:      '',
            phone:        '',
            bio:          '',
            profile:      '',
            fieldName:    '',
            callSign:     '',
            profileImage: ''
           }

  isField: boolean;
  isPlayer: boolean;

  currentVals = {
                  firstName:      '',
                  lastName:       '',
                  clanTag:        '',
                  email:          '',
                  phone:          '',
                  bio:            '',
                  profile:        '',
                  fieldName:      '',
                  callSign:       '',
                  fieldProfileID: '',
                  userID:         '',
                  imageID:        '',
                  imageData:      ''
                }


  userSvc: UserServiceService;
  authSvc: AuthService;


  constructor(
      private userService: UserServiceService,
      private authService: AuthService
  ) {
    this.authSvc = authService;
    this.userSvc = userService;
  }

  ngOnInit(): void {

    this.pfNav           = document.getElementById('profileNav');
    this.securityNav     = document.getElementById('securityNav');
    this.settingsNav     = document.getElementById('settingsNav');
    this.pfSection       = document.getElementById('profile');
    this.securitySection = document.getElementById('security');
    this.settingsSection = document.getElementById('settings');

    this.pfSection.style.display = 'block';

    this.isPlayer        = this.userSvc.isPlayer;
    this.isField         = this.userSvc.isField;

    this.passReset = new FormGroup({
      "pass": new FormControl(this.resetPass.pass, [
        Validators.required,
        Validators.minLength(6)
      ]),
      "confirmPass": new FormControl(this.resetPass.confirmPass, [
        Validators.required
      ])
    },{ validators: this.checkPasswords.bind(this) })
    this.profileForm = new FormGroup({

      "firstName":    new FormControl(this.field.firstName, [Validators.required]),
      "lastName":     new FormControl(this.field.lastName, [Validators.required]),
      "email":        new FormControl(this.field.email, [Validators.required,Validators.email]),
      "clanTag":      new FormControl(this.field.clanTag, []),
      "phone":        new FormControl(this.field.phone, []),
      "bio":          new FormControl(this.field.bio, []),
      "profile":      new FormControl(this.field.profile, []),
      "fieldName":    new FormControl(this.field.fieldName, []),
      "callSign":     new FormControl(this.field.callSign, []),
      "profileImage": new FormControl(this.field.profileImage, [])

    })


    this.userSvc.getUserData().subscribe(

      userData => {

        if (this.isField) {

          this.currentVals.profile = userData.fieldProfile.profile ? userData.fieldProfile.profile : 'Describe your Field!';
          this.currentVals.fieldName = userData.callSign ? userData.callSign : 'Your Field Name';
          this.currentVals.fieldProfileID = userData.fieldProfile.id;
          this.currentVals.imageID = userData.fieldProfile.imageID ? userData.fieldProfile.imageID : 0;
        }

        else if (this.isPlayer) {

          this.currentVals.bio = userData.playerProfile.outfit ? userData.playerProfile.outfit : 'Tell us about your loadout!';
          this.currentVals.clanTag = userData.playerProfile.clanTag ? userData.playerProfile.clanTag : 'Declare your Clan!';
          this.currentVals.callSign = userData.playerProfile.callSign ? userData.callSign : 'Whats your callsign!';
          this.currentVals.imageID = userData.playerProfile.imageID ? userData.playerProfile.imageID : 0;
        }

        this.currentVals.firstName = userData.firstName ? userData.firstName : 'First Name';
        this.currentVals.lastName = userData.lastName ? userData.lastName : 'Last Name';
        this.currentVals.email = userData.email ? userData.email : 'E-mail';
        this.currentVals.phone = userData.phoneNumber ? userData.phoneNumber : 'Phone Number';

        this.currentVals.userID = userData.id;

      })

    this.authSvc.getImage(this.currentVals.imageID).subscribe(
      imageData => {
        this.currentVals.imageData = imageData['image'] ? imageData['image'] : null;
      }
    )


    if (this.isField) {

        this.userSvc.getUserListFromAPI(this.userSvc.getToken()).subscribe(
            data => this.playerList = data
        )
    }


  }


  checkRfidToPair() {

      this.userSvc.getFieldProfileFromAPI(this.userSvc.getToken(), this.currentVals.fieldProfileID).subscribe(
          data => this.rfidToPair = data["pair_uid"]
      )
  }

  pairRfidToPlayer(){

      console.log("WILL PAIR User:", this.playerSelected, "to UID", this.rfidToPair)

  }


  get pass() { return this.passReset.get('pass'); }
  get confirmPass() { return this.passReset.get('confirmPass'); }

  onPasswordReset(){
    let data = {'password':this.passReset.get('pass').value}
    this.authSvc.updatePass(this.userSvc.getToken() ,data).subscribe(
      resp=>{console.log('password Reset response',resp)},
      err=>{console.log('password Reset failed',err)}
    )
  }


  profile() {
    this.pfNav.classList.add('active')
    this.securityNav.classList.remove('active')
    if(this.isField){
      document.getElementById('settingsNav').classList.remove('active')
      this.settingsSection.style.display = 'none';
    }
    this.pfSection.style.display = 'block';
    this.securitySection.style.display = 'none';
  }


  settings() {
    this.pfNav.classList.remove('active')
    this.securityNav.classList.remove('active')
    if(this.isField){
      document.getElementById('settingsNav').classList.add('active')
      this.settingsSection.style.display = 'block';
    }
    this.pfSection.style.display = 'none';
    this.securitySection.style.display = 'none';
  }


  security() {
    this.pfNav.classList.remove('active')
    this.securityNav.classList.add('active')

    if(this.isField){
      document.getElementById('settingsNav').classList.remove('active')
      this.settingsSection.style.display = 'none';
    }
    this.pfSection.style.display = 'none';
    this.securitySection.style.display = 'block';
  }


  onSubmit() {

    let data  = {"user":{}, "field":{}, "player":{}}
    this.profileForm.value.firstName ? data.user['firstName'] = this.profileForm.value.firstName : null;
    this.profileForm.value.lastName ? data.user['lastName'] = this.profileForm.value.lastName : null;
    this.profileForm.value.email ? data.user['email'] = this.profileForm.value.email : null;
    this.profileForm.value.phone ? data.user['phoneNumber'] = this.profileForm.value.phone : null;

    if (this.isField) {
      this.profileForm.value.fieldName ? data.user['callSign'] = this.profileForm.value.fieldName:null;
      this.profileForm.value.profile ? data.field['profile'] = this.profileForm.value.profile : null;
      // Need to include fieldProfile.id
      data.field['id'] = this.currentVals.fieldProfileID;
      // console.log(data.field);

    } else if (this.isPlayer) {
      this.profileForm.value.callSign ? data.user['callSign'] = this.profileForm.value.callSign:null;
      this.profileForm.value.bio ? data.player['outfit'] = this.profileForm.value.bio : null;
      this.profileForm.value.clanTag ? data.player['clanTag'] = this.profileForm.value.clanTag : null;
      // Need to include the playerProfile.id
      data.player['id'] = this.currentVals.userID;
    }
    // console.log(data.player)
    this.authSvc.saveProfile(this.userSvc.getToken(), data).subscribe(
      resp => {
        // this.profileForm.reset();
        document.getElementById('userCreatedMessage').classList.remove('d-none')
        // console.log(resp, "resp")
      },
      err=>{
        this.profileForm.reset();
        document.getElementById('userCreatFaileddMessage').classList.remove('d-none')
        console.log(err, "err in update profile")
      }
    )
    //saveProfile
  }


  checkPasswords(group: FormGroup){
    const password = group.get('pass').value;
  const confirmPassword = group.get('confirmPass').value;

  return password === confirmPassword ? null : group.controls['confirmPass'].setErrors({ notSame: true });

  }


  getFile(event) {

    const fileReader = new FileReader();
    const file = event.target.files[0]

    fileReader.addEventListener("load", function () {
      // convert image file to base64 string
      this.base64toUpload = fileReader.result;
      document.getElementById('profileImage').setAttribute("src", this.base64toUpload)
      // console.log(this.base64toUpload);
    }.bind(this), false);

    if (file) {
      fileReader.readAsDataURL(file);
    }

  }


  saveImage() {

    let data  = {'user' :{'id':            this.currentVals.userID,
                          'imageID':       this.currentVals.imageID,
                          'fieldProfileID':this.currentVals.fieldProfileID},
                 'image':{'data':this.base64toUpload}};

    // console.log(data)

    this.authSvc.saveImage(this.userSvc.getToken(), data);



  }

}
