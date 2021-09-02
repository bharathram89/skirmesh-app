import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { subscribeOn } from 'rxjs/operators';
import { UserServiceService } from 'src/service/user-service.service';
import { TokenStorageService } from 'src/service/token-storage.service';
import { NonSecureAPIService } from 'src/service/non-secure-api.service';
import { SecureAPIService } from 'src/service/secure-api.service';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';


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

  playerSelectedForMarshal;
  __playerSelectedForMarshal__;

  deleteAccount = false;

  isSecurityNav = false;
  isSettingsNav = false;
  isProfileNav  = true;
  isFieldMarshalNav = false;
  isFieldMarshal = false;
  fieldMarshalList = <any>[];
  imageUpdateMessage;
  imageUpdateFailedMessage;
  userCreatedMessage;
  userCreateFailedMessage;
  passResetPassed;
  passResetFailed;
  deleteUserFailed;

  passReset: FormGroup;
  uidEntry: FormGroup;

  base64toUpload;
  resetPass = { pass: '', confirmPass: '' }
  enterUID = { uid: '', confirmUid: '' }
  profileForm: FormGroup;

  field = {
    firstName: '',
    lastName: '',
    email: '',
    clanTag: '',
    phone: '',
    bio: '',
    profile: '',
    fieldName: '',
    callSign: '',
    profileImage: ''
  }

  isField: boolean = false;

  currentVals = {
    firstName: '',
    lastName: '',
    clanTag: '',
    email: '',
    phone: '',
    bio: '',
    profile: '',
    fieldName: '',
    callSign: '',
    fieldProfileID: '',
    userID: '',
    imageID: '',
    imageData: ''
  }

  userToken;
  userData;
  constructor(
    private userSvc: UserServiceService,
    private tokenSvc: TokenStorageService,
    private nonSecAPIsvc: NonSecureAPIService,
    private secAPIsvc: SecureAPIService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.passReset = new FormGroup({
      "pass": new FormControl(this.resetPass.pass, [
        Validators.required,
        Validators.minLength(6)
      ]),
      "confirmPass": new FormControl(this.resetPass.confirmPass, [
        Validators.required
      ])
    }, { validators: this.checkPasswords.bind(this) })


    this.uidEntry = new FormGroup({
      "uid": new FormControl(this.enterUID.uid, [
        Validators.required,
        Validators.maxLength(8),
        Validators.minLength(8)
      ]),
      "confirmUid": new FormControl(this.enterUID.confirmUid, [
        Validators.required
      ])
    }, { validators: this.checkRFIDs.bind(this) })


    this.profileForm = new FormGroup({

      "firstName": new FormControl(this.field.firstName, [Validators.required]),
      "lastName": new FormControl(this.field.lastName, [Validators.required]),
      "email": new FormControl(this.field.email, [Validators.required, Validators.email]),
      "clanTag": new FormControl(this.field.clanTag, []),
      "phone": new FormControl(this.field.phone, []),
      "bio": new FormControl(this.field.bio, []),
      "profile": new FormControl(this.field.profile, []),
      "fieldName": new FormControl(this.field.fieldName, []),
      "callSign": new FormControl(this.field.callSign, []),
      "profileImage": new FormControl(this.field.profileImage, [])

    })
    this.tokenSvc.getToken().then(
      data => {
          this.userToken = data;
          this.secAPIsvc.getUser(data).subscribe(
          (user: any) => {
            this.userData = user.user;
            let userData = user.user;
            if (userData.fieldProfile) {

              this.isField = true;

              this.currentVals.profile = userData.fieldProfile.profile ? userData.fieldProfile.profile : 'Describe your Field!';
              this.currentVals.fieldName = userData.callSign ? userData.callSign : 'Your Field Name';
              this.currentVals.fieldProfileID = userData.fieldProfile.id;
              this.currentVals.imageID = userData.fieldProfile.imageID ? userData.fieldProfile.imageID : null;
            }

            else {
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

          })



        if (this.currentVals.imageID) {
          this.nonSecAPIsvc.getImage(this.currentVals.imageID).subscribe(
            imageData => {
              this.currentVals.imageData = imageData['image'] ? imageData['image'] : null;
            }
          )
        }


        if (this.isField) {

          this.getFieldMarshals();

          this.currentVals.profile = this.userData.fieldProfile.profile ?  this.userData.fieldProfile.profile : 'Describe your Field!';
          this.currentVals.fieldName =  this.userData.callSign ?  this.userData.callSign : 'Your Field Name';
          this.currentVals.fieldProfileID =  this.userData.fieldProfile.id;
          this.currentVals.imageID =  this.userData.fieldProfile.imageID ?  this.userData.fieldProfile.imageID : null;
        }

        else {
          if ( this.userData?.marshal_field_id) {
              this.isFieldMarshal = true;
          }

          this.connectedRfids =  this.userData?.rfids;
          this.currentVals.bio =  this.userData?.playerProfile.outfit ?  this.userData?.playerProfile.outfit : 'Tell us about your loadout!';
          this.currentVals.clanTag =  this.userData?.playerProfile.clanTag ?  this.userData?.playerProfile.clanTag : 'Declare your Clan!';
          this.currentVals.callSign =  this.userData?.callSign ?  this.userData?.callSign : 'Whats your callsign!';
          this.currentVals.imageID =  this.userData?.playerProfile.imageID ?  this.userData?.playerProfile.imageID : null;
        }
      }
    );



  }


  deleteCheckboxClicked(){
    this.deleteAccount = !this.deleteAccount;
  }

  deleteSkirmeshAccount() {
    this.secAPIsvc.deleteUser(this.userToken).subscribe(
      resp => {
        this.router.navigate(['/non-secure']);
      },
      err => {
        this.deleteUserFailed = true;
      }
    )
  }

  // clearRfidPairField() {
  //
  //     let data = {id:this.currentVals.fieldProfileID, pair_uid:null}
  //
  //     this.secAPIsvc.updateFieldProfile(this.tokenSvc.getToken(), data).subscribe(
  //         resp => this.rfidToPair = resp["pair_uid"]
  //     )
  // }

  // checkRfidToPair() {
  //
  //     this.secAPIsvc.getMinimalFieldProfileFromAPI(this.tokenSvc.getToken(), this.currentVals.fieldProfileID).subscribe(
  //         data => this.rfidToPair = data["pair_uid"]
  //     )
  // }

  // pairRfidToPlayer(){
  //
  //     let data = {userID : this.playerSelected.id,
  //                 fieldID: this.currentVals.fieldProfileID}
  //
  //     this.secAPIsvc.pairUid(this.tokenSvc.getToken(), data).subscribe(
  //         resp =>{
  //
  //            this.rfidConnected = true;
  //            this.rfidToPair = null;
  //           },
  //         err =>{
  //           this.rfidConnected = false;
  //         }
  //     )
  //     // TODO: Give a success response to the user.
  //
  // }


  get pass() { return this.passReset.get('pass'); }
  get confirmPass() { return this.passReset.get('confirmPass'); }

  get uid() { return this.uidEntry.get('uid'); }
  get confirmUid() { return this.uidEntry.get('confirmUid'); }


  onPasswordReset() {
    let data = { "user": { "password": this.passReset.get('pass').value } }
    this.secAPIsvc.updatePass(this.userToken, data).subscribe(
      resp => {
        this.passResetPassed = true;
      },
      err => {
        this.passResetFailed = true;
      }
    )
  }


  _closeTabs() {
    this.isSecurityNav = false;
    this.isSettingsNav = false;
    this.isProfileNav  = false;
    this.isFieldMarshalNav = false;
  }


  profile() {
    this._closeTabs()
    this.isProfileNav = true;
  }

  fieldMarshal(){
    this._closeTabs()
    this.isFieldMarshalNav = true;
  }
  settings() {
    this._closeTabs()
    this.isSettingsNav = true;

    // if(this.isField){
    //   this.clearRfidPairField();
    // }

  }


  security() {
    this._closeTabs()
    this.isSecurityNav = true;
  }


  onSubmit() {

    let data = { "user": {}, "field": {}, "player": {} }
    this.profileForm.value.firstName ? data.user['firstName'] = this.profileForm.value.firstName : null;
    this.profileForm.value.lastName ? data.user['lastName'] = this.profileForm.value.lastName : null;
    this.profileForm.value.email ? data.user['email'] = this.profileForm.value.email : null;
    this.profileForm.value.phone ? data.user['phoneNumber'] = this.profileForm.value.phone : null;

    if (this.isField) {
      this.profileForm.value.fieldName ? data.user['callSign'] = this.profileForm.value.fieldName : null;
      this.profileForm.value.profile ? data.field['profile'] = this.profileForm.value.profile : null;
      // Need to include fieldProfile.id
      data.field['id'] = this.currentVals.fieldProfileID;

    } else {
      this.profileForm.value.callSign ? data.user['callSign'] = this.profileForm.value.callSign : null;
      this.profileForm.value.bio ? data.player['outfit'] = this.profileForm.value.bio : null;
      this.profileForm.value.clanTag ? data.player['clanTag'] = this.profileForm.value.clanTag : null;
      // Need to include the playerProfile.id
      data.player['id'] = this.currentVals.userID;
    }

    this.secAPIsvc.saveProfile(this.userToken, data).subscribe(
      resp => {
        // this.profileForm.reset();
        this.userCreatedMessage = true;
      },
      err => {
        this.profileForm.reset();
        this.userCreateFailedMessage = true;
      }
    )
    //saveProfile
  }


  checkPasswords(group: FormGroup) {
    if (group) {
      const password = group.get('pass').value;
      const confirmPassword = group.get('confirmPass').value;

      return password === confirmPassword ? null : group.controls['confirmPass'].setErrors({ notSame: true });
    }
  }


  checkRFIDs(group: FormGroup) {

    const uid = group.get('uid').value;
    const confirmUid = group.get('confirmUid').value;

    for (let i = 0; i < uid.length; i += 2) {

      if (!parseInt(uid.slice(i, i + 2), 16)) {
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
    let userID = this.currentVals.userID;

    let data = { uid: uid.toLowerCase(), userID: userID };

    this.secAPIsvc.pairUid(this.userToken, data).subscribe(
      resp => {
        this.connectedRfids = resp;
      },
      err => { }
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

    let data = {
      'user': { 'id': this.currentVals.userID },
      'image': { 'data': this.base64toUpload }
    };

    this.secAPIsvc.saveImage(this.userToken, data).subscribe(
      resp => {
        this.imageUpdateMessage = true;
      },
      err => {
        this.imageUpdateFailedMessage = true;
      }
    );
  }


  deleteRFID(rfidID) {

    let temp = [];
    this.secAPIsvc.deleteUid(this.userToken, rfidID).subscribe(

      resp => {
        let indx = this.connectedRfids.findIndex(rfid => rfid.id == resp["id"]);
        if (indx != -1) {
          this.connectedRfids.splice(indx, 1);
        };
      },
      err => {
        console.log("error in removing rfid")
      }
    )
  }


  getFieldMarshals() {

      if (!this.isField) {return}

      this.secAPIsvc.getFieldMarshals(this.tokenSvc.getToken()).subscribe(
          resp => {
              console.log(resp);
              this.fieldMarshalList = resp;
          },
          err => {},
          () => {}
      )
  }


  onMarshalSelect(event: TypeaheadMatch): void {

      this.playerSelectedForMarshal = event.item;
  }


  addMarshal(){

      if(!this.playerSelectedForMarshal){ return }
      if(this.fieldMarshalList.indexOf(this.playerSelectedForMarshal) != -1 ){
          return
      }

      this.secAPIsvc.addFieldMarshal(this.tokenSvc.getToken(), this.playerSelectedForMarshal.id).subscribe(
          resp => this.fieldMarshalList.push(this.playerSelectedForMarshal),
          err => {},
          () => {}
      )

  }


  removeMarshal(marshal){

      let indx = this.fieldMarshalList.findIndex(m => m.id == marshal.id);

      if (indx != -1) {

          this.secAPIsvc.deleteFieldMarshal(this.tokenSvc.getToken(), marshal.id).subscribe(
              resp => this.fieldMarshalList.splice(indx,1),
              err => {},
              () => {}
          )
      }
  }


}
