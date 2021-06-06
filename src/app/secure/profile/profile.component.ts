import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { subscribeOn } from 'rxjs/operators';
import { UserServiceService } from 'src/service/user-service.service';
import { NonSecureAPIService } from 'src/service/non-secure-api.service';
import { SecureAPIService } from 'src/service/secure-api.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  rfidConnected;
  playerSelected; //this is the selected player from list
  rfidToPair;
  playerList;
  connectedRfids;
  deleteAccount = false;
  passResetPassed = false;
  passResetFailed = false;
  deleteUserFailed = false;
  pfNav           : HTMLElement;
  securityNav     : HTMLElement;
  settingsNav     : HTMLElement;
  pfSection       : HTMLElement;
  securitySection : HTMLElement;
  settingsSection : HTMLElement;

  passReset       : FormGroup;
  uidEntry        : FormGroup;

  base64toUpload;
  resetPass = { pass:'', confirmPass:''}
  enterUID  = { uid: '', confirmUid: ''}
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

  constructor(
      private userSvc      : UserServiceService,
      private nonSecAPIsvc : NonSecureAPIService,
      private secAPIsvc    : SecureAPIService,
      private router       : Router
  ) {}

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

    this.uidEntry = new FormGroup({
      "uid": new FormControl(this.enterUID.uid, [
        Validators.required,
        Validators.maxLength(8),
        Validators.minLength(8)
      ]),
      "confirmUid": new FormControl(this.enterUID.confirmUid, [
        Validators.required
      ])
    },{ validators: this.checkRFIDs.bind(this) })

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
          this.currentVals.imageID = userData.fieldProfile.imageID ? userData.fieldProfile.imageID : null;
        }

        else if (this.isPlayer) {
          this.connectedRfids = userData.rfids;
          this.currentVals.bio = userData.playerProfile.outfit ? userData.playerProfile.outfit : 'Tell us about your loadout!';
          this.currentVals.clanTag = userData.playerProfile.clanTag ? userData.playerProfile.clanTag : 'Declare your Clan!';
          this.currentVals.callSign = userData.callSign ? userData.callSign : 'Whats your callsign!';
          this.currentVals.imageID = userData.playerProfile.imageID ? userData.playerProfile.imageID : null;
        }

        this.currentVals.firstName = userData.firstName ? userData.firstName : 'First Name';
        this.currentVals.lastName = userData.lastName ? userData.lastName : 'Last Name';
        this.currentVals.email = userData.email ? userData.email : 'E-mail';
        this.currentVals.phone = userData.phoneNumber ? userData.phoneNumber : 'Phone Number';

        this.currentVals.userID = userData.id;

      }
    )
      if(this.currentVals.imageID){
        this.nonSecAPIsvc.getImage(this.currentVals.imageID).subscribe(
          imageData => {
            this.currentVals.imageData = imageData['image'] ? imageData['image'] : null;
          }
        )
      }


    if (this.isField) {

        this.secAPIsvc.getUserListFromAPI(this.userSvc.getToken()).subscribe(
            data => this.playerList = data
        )
    }


  }

  deleteCheckboxClicked(){
    this.deleteAccount = !this.deleteAccount;
  }

  deleteSkirmeshAccount(){
    this.secAPIsvc.deleteUser(this.userSvc.getToken()).subscribe(
      resp => {
        this.router.navigate(['/non-secure']);
      },
      err => {
        this.deleteUserFailed = true;
      }
  )
  }

  clearRfidPairField() {

      let data = {id:this.currentVals.fieldProfileID, pair_uid:null}

      this.secAPIsvc.updateFieldProfile(this.userSvc.getToken(), data).subscribe(
          resp => this.rfidToPair = resp["pair_uid"]
      )
  }

  checkRfidToPair() {

      this.secAPIsvc.getMinimalFieldProfileFromAPI(this.userSvc.getToken(), this.currentVals.fieldProfileID).subscribe(
          data => this.rfidToPair = data["pair_uid"]
      )
  }

  pairRfidToPlayer(){

      let data = {userID : this.playerSelected.id,
                  fieldID: this.currentVals.fieldProfileID}

      this.secAPIsvc.pairUid(this.userSvc.getToken(), data).subscribe(
          resp =>{

             this.rfidConnected = true;
             this.rfidToPair = null;
            },
          err =>{
            this.rfidConnected = false;
          }
      )
      // TODO: Give a success response to the user.

  }


  get pass() { return this.passReset.get('pass'); }
  get confirmPass() { return this.passReset.get('confirmPass'); }

  get uid() { return this.uidEntry.get('uid'); }
  get confirmUid() { return this.uidEntry.get('confirmUid'); }

  onPasswordReset(){
    let data = {'password':this.passReset.get('pass').value}
    this.secAPIsvc.updatePass(this.userSvc.getToken() ,data).subscribe(
      resp=>{ this.passResetFailed  = false;
              this.passResetPassed= true;
            },
      err=>{ this.passResetFailed  = true;
             this.passResetPassed= false;
             console.log('password Reset failed',err)}
    )
  }


  _closeTabs(){}


  profile() {

    this.pfNav.classList.add('active')
    this.securityNav.classList.remove('active')

    document.getElementById('settingsNav').classList.remove('active')
    this.settingsSection.style.display = 'none';

    this.pfSection.style.display = 'block';
    this.securitySection.style.display = 'none';
  }


  settings() {

    this.pfNav.classList.remove('active')
    this.securityNav.classList.remove('active')

    document.getElementById('settingsNav').classList.add('active')
    this.settingsSection.style.display = 'block';

    if(this.isField){
      this.clearRfidPairField();
    }

    this.pfSection.style.display = 'none';
    this.securitySection.style.display = 'none';
  }


  security() {

    this.pfNav.classList.remove('active')
    this.securityNav.classList.add('active')

    document.getElementById('settingsNav').classList.remove('active')
    this.settingsSection.style.display = 'none';

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

    } else if (this.isPlayer) {
      this.profileForm.value.callSign ? data.user['callSign'] = this.profileForm.value.callSign:null;
      this.profileForm.value.bio ? data.player['outfit'] = this.profileForm.value.bio : null;
      this.profileForm.value.clanTag ? data.player['clanTag'] = this.profileForm.value.clanTag : null;
      // Need to include the playerProfile.id
      data.player['id'] = this.currentVals.userID;
    }

    this.secAPIsvc.saveProfile(this.userSvc.getToken(), data).subscribe(
      resp => {
        // this.profileForm.reset();
        document.getElementById('userCreatedMessage').classList.remove('d-none')
      },
      err=>{
        this.profileForm.reset();
        document.getElementById('userCreatFaileddMessage').classList.remove('d-none')
      }
    )
    //saveProfile
  }


  checkPasswords(group: FormGroup){

    const password = group.get('pass').value;
    const confirmPassword = group.get('confirmPass').value;

    return password === confirmPassword ? null : group.controls['confirmPass'].setErrors({ notSame: true });

  }


  checkRFIDs(group: FormGroup) {

    const uid        = group.get('uid').value;
    const confirmUid = group.get('confirmUid').value;

    for (let i = 0; i < uid.length; i += 2) {

        if (!parseInt(uid.slice(i, i+2), 16)) {
            return group.controls['confirmUid'].setErrors({ invalidRfid: true });
        }
    }

    if (uid.length != 8) {
        return group.controls['confirmUid'].setErrors({ invalidLength: true });
    }

    if (uid != confirmUid) {
        return group.controls['confirmUid'].setErrors({ notMatched: true });
    }

    return true

  }


  onSubmitPairRfid() {

      let uid = this.uidEntry.get("uid").value.toLowerCase();
      let userID =  this.currentVals.userID;

      let data = {uid:uid.toLowerCase(), userID:userID};

      this.secAPIsvc.pairUid(this.userSvc.getToken(), data).subscribe(
          resp =>{
            this.connectedRfids = resp;
            console.log(resp,"response")
          },
          err =>{}
      )
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

    this.secAPIsvc.saveImage(this.userSvc.getToken(), data);



  }

}
