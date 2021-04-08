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

  pfNav: HTMLElement;
  securityNav: HTMLElement;
  settingsNav: HTMLElement;
  pfSection: HTMLElement;
  securitySection: HTMLElement;
  settingsSection: HTMLElement;

  profileForm: FormGroup;
  fields = { firstName:    '',
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
                  firstName:    '',
                  lastName:    '',
                  clanTag:  '',
                  email:    '',
                  phone:    '',
                  bio:      '',
                  profile:  '',
                  fieldName:'',
                  callSign: '',
                  fieldProfileID:  '',
                  userID:  ''
                }


  userSvc: UserServiceService;
  authSvc: AuthService;


  constructor(private userService: UserServiceService, private authService: AuthService) {
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


    this.profileForm = new FormGroup({

      "firstName":    new FormControl(this.fields.firstName, [Validators.required]),
      "lastName":     new FormControl(this.fields.lastName, [Validators.required]),
      "email":        new FormControl(this.fields.email, [Validators.required,Validators.email]),
      "clanTag":      new FormControl(this.fields.clanTag, []),
      "phone":        new FormControl(this.fields.phone, []),
      "bio":          new FormControl(this.fields.bio, []),
      "profile":      new FormControl(this.fields.profile, []),
      "fieldName":    new FormControl(this.fields.fieldName, []),
      "callSign":     new FormControl(this.fields.callSign, []),
      "profileImage": new FormControl(this.fields.profileImage, [])

    })


    this.userSvc.getUserData().subscribe(
      userData => {

        if (this.isField) {
          this.currentVals.profile = userData.fieldProfiles[0].profile ? userData.fieldProfiles[0].profile : 'Describe your Field!';
          this.currentVals.fieldName = userData.callSign ? userData.callSign : 'Your Field Name';
          this.currentVals.fieldProfileID = userData.fieldProfiles[0].id;
        }
        else if (this.isPlayer) {
          this.currentVals.bio = userData.playerProfile.outfit ? userData.playerProfile.outfit : 'Tell us about your loadout!';
          this.currentVals.clanTag = userData.playerProfile.clanTag ? userData.playerProfile.clanTag : 'Declare your Clan!';
          this.currentVals.callSign = userData.playerProfile.callSign ? userData.callSign : 'Whats your callsign!';
        }
        this.currentVals.firstName = userData.firstName ? userData.firstName : 'First Name';
        this.currentVals.lastName = userData.lastName ? userData.lastName : 'Last Name';
        this.currentVals.email = userData.email ? userData.email : 'E-mail';
        this.currentVals.phone = userData.phoneNumber ? userData.phoneNumber : 'Phone Number';

        this.currentVals.userID = userData.id;

      }
    )
  }


  profile() {
    this.pfNav.classList.add('active')
    this.securityNav.classList.remove('active')
    this.settingsNav.classList.remove('active')
    this.pfSection.style.display = 'block';
    this.securitySection.style.display = 'none';
    this.settingsSection.style.display = 'none';
  }
  settings() {
    this.pfNav.classList.remove('active')
    this.securityNav.classList.remove('active')
    this.settingsNav.classList.add('active')
    this.pfSection.style.display = 'none';
    this.securitySection.style.display = 'none';
    this.settingsSection.style.display = 'block';
  }
  security() {
    this.pfNav.classList.remove('active')
    this.securityNav.classList.add('active')
    this.settingsNav.classList.remove('active')
    this.pfSection.style.display = 'none';
    this.securitySection.style.display = 'block';
    this.settingsSection.style.display = 'none';
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
      // Need to include the fieldProfiles[...].id  --- we're just taking the first for now
      data.field['id'] = this.currentVals.fieldProfileID;
      console.log(data.field);

    } else if (this.isPlayer) {
      this.profileForm.value.callSign ? data.user['callSign'] = this.profileForm.value.callSign:null;
      this.profileForm.value.bio ? data.player['outfit'] = this.profileForm.value.bio : null;
      this.profileForm.value.clanTag ? data.player['clanTag'] = this.profileForm.value.clanTag : null;
      // Need to include the playerProfile.id
      data.player['id'] = this.currentVals.userID;
    }
    console.log(data.player)
    this.authSvc.saveProfile(this.userSvc.getToken(), data).subscribe(
      resp => {
        // this.profileForm.reset();
        document.getElementById('userCreatedMessage').classList.remove('d-none')
        console.log(resp, "resp")
      },
      err=>{
        this.profileForm.reset();
        document.getElementById('userCreatFaileddMessage').classList.remove('d-none')
        console.log(err, "err in update profile")
      }
    )
    //saveProfile
  }

  updateImage() {

    let reader = new FileReader();

    this.authSvc.saveImage(this.userSvc.getToken(), this.profileForm)

  }

}
