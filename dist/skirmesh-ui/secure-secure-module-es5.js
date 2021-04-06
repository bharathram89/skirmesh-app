(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["secure-secure-module"], {
    /***/
    "67J5":
    /*!*****************************************************!*\
      !*** ./src/app/secure/profile/profile.component.ts ***!
      \*****************************************************/

    /*! exports provided: ProfileComponent */

    /***/
    function J5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
        return ProfileComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_service_user_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/service/user-service.service */
      "7ttW");
      /* harmony import */


      var src_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/service/auth.service */
      "u6mN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function ProfileComponent_div_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Clan Tag");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx_r0.currentVals.clanTag);
        }
      }

      function ProfileComponent_div_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Bio");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx_r1.currentVals.bio);
        }
      }

      function ProfileComponent_div_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Field Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx_r2.currentVals.fieldName);
        }
      }

      function ProfileComponent_div_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Field Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx_r3.currentVals.profile);
        }
      }

      function ProfileComponent_div_171_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Manage Settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "fieldset", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Device Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Launch demo modal ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h5", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Modal title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " ... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Save changes");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Clan Tag");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "fieldset", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "h3", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Contact Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "input", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "input", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "input", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return ["/non-secure/contact-us"];
      };

      var ProfileComponent = /*#__PURE__*/function () {
        function ProfileComponent(userService, authService) {
          _classCallCheck(this, ProfileComponent);

          this.userService = userService;
          this.authService = authService;
          this.fields = {
            fname: '',
            lname: '',
            email: '',
            clanTag: '',
            phone: '',
            bio: '',
            profile: '',
            fieldName: '',
            callSign: ''
          };
          this.currentVals = {
            fName: "",
            lName: "",
            clanTag: "",
            email: "",
            phone: "",
            bio: '',
            profile: '',
            fieldName: '',
            callSign: ''
          };
          this.authSvc = authService;
          this.userSvc = userService;
        }

        _createClass(ProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.pfNav = document.getElementById('profileNav');
            this.securityNav = document.getElementById('securityNav');
            this.settingsNav = document.getElementById('settingsNav');
            this.pfSection = document.getElementById('profile');
            this.securitySection = document.getElementById('security');
            this.settingsSection = document.getElementById('settings');
            this.pfSection.style.display = 'block';
            this.isPlayer = this.userSvc.isPlayer;
            this.isField = this.userSvc.isField;
            this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
              "fname": new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.fields.fname, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
              "lname": new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.fields.lname, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
              "email": new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.fields.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]),
              "clanTag": new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.fields.clanTag, []),
              "phone": new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.fields.phone, []),
              "bio": new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.fields.bio, []),
              "profile": new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.fields.profile, []),
              "fieldName": new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.fields.fieldName, []),
              "callSign": new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.fields.callSign, [])
            });
            this.userSvc.getUserData().subscribe(function (userData) {
              if (_this.isField) {
                _this.currentVals.profile = userData.fieldProfiles.profile ? userData.fieldProfiles.profile : 'Describe your field';
                _this.currentVals.fieldName = userData.callSign ? userData.callSign : 'Your Field Name';
              } else if (_this.isPlayer) {
                _this.currentVals.bio = userData.playerProfile.outfit ? userData.playerProfile.outfit : 'Tell us about you loadout!';
                _this.currentVals.clanTag = userData.playerProfile.clanTag ? userData.playerProfile.clanTag : 'Declare your Clan!';
                _this.currentVals.callSign = userData.playerProfile.callSign ? userData.playerProfile.callSign : 'Whats ur call sign!';
              }

              _this.currentVals.fName = userData.firstName ? userData.firstName : 'Please Enter First Name';
              _this.currentVals.lName = userData.lastName ? userData.lastName : 'Please Enter Last Name';
              _this.currentVals.email = userData.email ? userData.email : 'Please Enter Email';
              _this.currentVals.phone = userData.phoneNumber ? userData.phoneNumber : 'Please Enter Phone Number';
            });
          }
        }, {
          key: "profile",
          value: function profile() {
            this.pfNav.classList.add('active');
            this.securityNav.classList.remove('active');
            this.settingsNav.classList.remove('active');
            this.pfSection.style.display = 'block';
            this.securitySection.style.display = 'none';
            this.settingsSection.style.display = 'none';
          }
        }, {
          key: "settings",
          value: function settings() {
            this.pfNav.classList.remove('active');
            this.securityNav.classList.remove('active');
            this.settingsNav.classList.add('active');
            this.pfSection.style.display = 'none';
            this.securitySection.style.display = 'none';
            this.settingsSection.style.display = 'block';
          }
        }, {
          key: "security",
          value: function security() {
            this.pfNav.classList.remove('active');
            this.securityNav.classList.add('active');
            this.settingsNav.classList.remove('active');
            this.pfSection.style.display = 'none';
            this.securitySection.style.display = 'block';
            this.settingsSection.style.display = 'none';
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this2 = this;

            var data = {};
            this.profileForm.value.fname ? data['firstName'] = this.profileForm.value.fname : null;
            this.profileForm.value.lname ? data['lastName'] = this.profileForm.value.lname : null;
            this.profileForm.value.email ? data['email'] = this.profileForm.value.email : null;
            this.profileForm.value.phone ? data['phoneNumber'] = this.profileForm.value.phone : null;

            if (this.isField) {
              this.profileForm.value.fieldName ? data['callSign'] = this.profileForm.value.fieldName : null;
              this.profileForm.value.profile ? data['profile'] = this.profileForm.value.profile : null;
            } else if (this.isPlayer) {
              this.profileForm.value.callSign ? data['callSign'] = this.profileForm.value.callSign : null;
              this.profileForm.value.bio ? data['outfit'] = this.profileForm.value.bio : null;
              this.profileForm.value.clanTag ? data['clanTag'] = this.profileForm.value.clanTag : null;
            }

            this.authSvc.saveProfile(this.userSvc.getToken(), data).subscribe(function (resp) {
              _this2.profileForm.reset();

              document.getElementById('userCreatedMessage').classList.remove('d-none');
              console.log(resp, "resp");
            }, function (err) {
              _this2.profileForm.reset();

              document.getElementById('userCreatFaileddMessage').classList.remove('d-none');
              console.log(err, "err in update profile");
            }); //saveProfile
          }
        }]);

        return ProfileComponent;
      }();

      ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
        return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_service_user_service_service__WEBPACK_IMPORTED_MODULE_2__["UserServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
      };

      ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ProfileComponent,
        selectors: [["app-profile"]],
        decls: 225,
        vars: 12,
        consts: [[1, "cust_skirmesh", "container"], [1, "view-account"], [1, "module"], [1, "module-inner"], [1, "side-bar"], [1, "side-menu"], [1, "nav"], ["id", "profileNav", 1, "active", 3, "click"], [1, "fa", "fa-user"], ["id", "settingsNav", 3, "click"], [1, "fa", "fa-cog"], ["id", "securityNav", 3, "click"], [1, "fa", "fa-credit-card"], ["id", "profile", 1, "content-panel"], [1, "title", "center-cust"], ["autocomplete", "off", "method", "PUT", 1, "form-horizontal", 3, "formGroup"], [1, "fieldset"], [1, "fieldset-title"], [1, "form-group", "avatar"], [1, "figure", "col-md-2", "col-sm-3", "col-xs-12"], ["src", "https://bootdey.com/img/Content/avatar/avatar1.png", "alt", "", 1, "img-rounded", "img-responsive"], [1, "form-inline", "col-md-10", "col-sm-9", "col-xs-12"], ["type", "file", 1, "file-uploader", "pull-left"], ["type", "submit", 1, "btn", "btn-sm", "btn-default-alt", "pull-left"], [1, "form-group"], [1, "col-md-2", "col-sm-3", "col-xs-12", "control-label"], [1, "col-md-10", "col-sm-9", "col-xs-12"], ["formControlName", "fname", "type", "text", 1, "form-control", 3, "placeholder"], ["formControlName", "lname", "type", "text", 1, "form-control", 3, "placeholder"], ["class", "form-group", 4, "ngIf"], [1, "col-sm-3", "col-xs-12", "control-label"], ["formControlName", "email", "type", "email", 1, "form-control", 3, "placeholder"], ["formControlName", "phone", "type", "text", 1, "form-control", 3, "placeholder"], [1, "col-md-10", "col-sm-9", "col-xs-12", "col-md-push-2", "col-sm-push-3", "col-xs-push-0"], ["type", "submit", "value", "Update Profile", 1, "btn", "btn-primary", 3, "click"], [1, "row"], ["id", "userCreatedMessage", 1, "alert", "alert-primary", "d-none", "center-cust"], ["id", "userCreatFaileddMessage", 1, "alert", "alert-danger", "d-none", "center-cust"], [3, "routerLink"], ["id", "socalMedia"], [1, "col"], ["id", "fb_card", 1, "card"], [1, "card-body"], [1, "fa", "fa-facebook", "fa-5x"], [1, "card-title"], [1, "card-subtitle", "mb-2", "text-muted"], [1, "card-text"], ["href", "#", "id", "fb_connect", 1, "card-link"], ["href", "#", "id", "fb_disconnect", 1, "card-link"], ["id", "twitter_card", 1, "card"], [1, "fa", "fa-twitter", "fa-5x"], ["href", "#", "id", "twitter_connect", 1, "card-link"], ["href", "#", "id", "twitter_disconnect", 1, "card-link"], ["id", "yt", 1, "card"], [1, "fa", "fa-youtube", "fa-5x"], ["href", "#", "id", "yt", 1, "card-link"], ["id", "settings", 1, "content-panel"], [1, "form-horizontal"], ["type", "button", "data-toggle", "modal", "data-target", "#exampleModal", 1, "btn", "btn-primary"], ["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-primary"], ["type", "text", "value", "Sanders", 1, "form-control"], ["type", "text", "value", "Rebecca", 1, "form-control"], ["type", "email", "value", "Rebecca@website.com", 1, "form-control"], ["type", "text", "value", "SpeedyBecky", 1, "form-control"], ["type", "submit", "value", "Update Profile", 1, "btn", "btn-primary"], ["id", "gameConfigs", "class", "content-panel", 4, "ngIf"], ["id", "security", 1, "content-panel"], ["formControlName", "clanTag", "type", "text", 1, "form-control", 3, "placeholder"], ["formControlName", "bio", "type", "text", 1, "form-control", 3, "placeholder"], ["formControlName", "fieldName", "type", "text", 1, "form-control", 3, "placeholder"], ["formControlName", "profile", "type", "text", 1, "form-control", 3, "placeholder"], ["id", "gameConfigs", 1, "content-panel"]],
        template: function ProfileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "section", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nav", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_Template_li_click_7_listener() {
              return ctx.profile();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_Template_li_click_11_listener() {
              return ctx.settings();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Settings");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_Template_li_click_15_listener() {
              return ctx.security();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Security");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "h2", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Manage Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "form", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "fieldset", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h3", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Personal Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "figure", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "img", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Update Image");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "input", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, ProfileComponent_div_43_Template, 5, 1, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, ProfileComponent_div_44_Template, 5, 1, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, ProfileComponent_div_45_Template, 5, 1, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, ProfileComponent_div_46_Template, 5, 1, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "fieldset", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "h3", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Contact Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "label", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "input", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "label", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "input", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "input", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_Template_input_click_63_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, " Your profile has been updated!");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, " We are sorry we were not able to update your profile at this time ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, " Please try again or ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "a", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "contact us from our contact us page");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "i", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "h5", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Facebook Connection");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "h6", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Connected: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "p", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "If you are connected you can share data.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "a", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Connect");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "a", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Disconnect");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "i", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "h5", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Twitter Connection");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "h6", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Connected:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "p", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "If you are connected you can share data.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "a", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "Connect");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "a", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Disconnect");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](107, "i", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "h5", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "Youtube Connection");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "h6", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "Connected: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "p", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "If you are connected you can share data.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "a", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "Connect");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "a", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "Disconnect");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "h2", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "Manage Settings");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "form", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "fieldset", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "h3", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "Device Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "button", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, " Launch demo modal ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "h5", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "Modal title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "button", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "span", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, " ... ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "button", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "button", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "Save changes");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](148, "input", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "Clan Tag");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](153, "input", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "fieldset", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "h3", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, "Contact Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](161, "input", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "Phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](166, "input", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](167, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](170, "input", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](171, ProfileComponent_div_171_Template, 53, 0, "div", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "div", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "h2", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, "Manage Security");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "form", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "fieldset", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "h3", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, "Device Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "button", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, " Launch demo modal ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "h5", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](187, "Modal title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "button", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "span", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](190, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](192, " ... ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "button", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](195, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "button", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, "Save changes");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](200, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](202, "input", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](205, "Clan Tag");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](207, "input", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "fieldset", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "h3", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](210, "Contact Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](213, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](215, "input", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](218, "Phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](220, "input", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](221, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](224, "input", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.profileForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx.currentVals.fName);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx.currentVals.lName);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isPlayer);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isPlayer);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isField);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isField);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx.currentVals.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx.currentVals.phone);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](99);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isField);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgForm"]],
        styles: [".content-panel[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.center-cust[_ngcontent-%COMP%] {\n  justify-content: center;\n  text-align: center;\n}\n\n.cust_skirmesh[_ngcontent-%COMP%] {\n  min-height: 500px;\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.view-account[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  margin-top: 20px;\n}\n\n.view-account[_ngcontent-%COMP%]   .pro-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  padding: 4px 5px;\n  position: relative;\n  top: -5px;\n  margin-left: 10px;\n  display: inline-block;\n}\n\n.view-account[_ngcontent-%COMP%]   .side-bar[_ngcontent-%COMP%] {\n  padding-bottom: 30px;\n}\n\n.view-account[_ngcontent-%COMP%]   .side-bar[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 15px;\n  padding: 30px;\n  color: #616670;\n  border-bottom: 1px solid #f3f3f3;\n}\n\n.view-account[_ngcontent-%COMP%]   .side-bar[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .img-profile[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  margin-bottom: 15px;\n}\n\n.view-account[_ngcontent-%COMP%]   .side-bar[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.view-account[_ngcontent-%COMP%]   .side-bar[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100px;\n  margin-right: 5px;\n  text-align: right;\n}\n\n.view-account[_ngcontent-%COMP%]   .side-bar[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #616670;\n}\n\n.view-account[_ngcontent-%COMP%]   .side-bar[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%]   li.activity[_ngcontent-%COMP%] {\n  color: #a2a6af;\n}\n\n.view-account[_ngcontent-%COMP%]   .side-bar[_ngcontent-%COMP%]   .side-menu[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.view-account[_ngcontent-%COMP%]   .side-bar[_ngcontent-%COMP%]   .side-menu[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 auto;\n}\n\n.view-account[_ngcontent-%COMP%]   .side-bar[_ngcontent-%COMP%]   .side-menu[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-bottom: 0;\n  border-bottom: none;\n  display: inline-block;\n  float: left;\n  margin-right: 15px;\n  margin-bottom: 15px;\n}\n\n.view-account[_ngcontent-%COMP%]   .side-bar[_ngcontent-%COMP%]   .side-menu[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n\n.view-account[_ngcontent-%COMP%]   .side-bar[_ngcontent-%COMP%]   .side-menu[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #9499a3;\n  padding: 5px;\n  border-bottom: 2px solid transparent;\n}\n\n.view-account[_ngcontent-%COMP%]   .side-bar[_ngcontent-%COMP%]   .side-menu[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  color: #616670;\n  background: none;\n}\n\n.view-account[_ngcontent-%COMP%]   .side-bar[_ngcontent-%COMP%]   .side-menu[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #40babd;\n  border-bottom: 2px solid #40babd;\n  background: none;\n  border-right: none;\n}\n\n.theme-2[_ngcontent-%COMP%]   .view-account[_ngcontent-%COMP%]   .side-bar[_ngcontent-%COMP%]   .side-menu[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #6dbd63;\n  border-bottom-color: #6dbd63;\n}\n\n.theme-3[_ngcontent-%COMP%]   .view-account[_ngcontent-%COMP%]   .side-bar[_ngcontent-%COMP%]   .side-menu[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #497cb1;\n  border-bottom-color: #497cb1;\n}\n\n.theme-4[_ngcontent-%COMP%]   .view-account[_ngcontent-%COMP%]   .side-bar[_ngcontent-%COMP%]   .side-menu[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ec6952;\n  border-bottom-color: #ec6952;\n}\n\n.view-account[_ngcontent-%COMP%]   .side-bar[_ngcontent-%COMP%]   .side-menu[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 24px;\n  margin-bottom: 5px;\n}\n\n.view-account[_ngcontent-%COMP%]   .content-panel[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n\n.view-account[_ngcontent-%COMP%]   .content-panel[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  margin-top: 0;\n  font-size: 18px;\n}\n\n.view-account[_ngcontent-%COMP%]   .content-panel[_ngcontent-%COMP%]   .fieldset-title[_ngcontent-%COMP%] {\n  padding-bottom: 15px;\n  border-bottom: 1px solid #eaeaf1;\n  margin-bottom: 30px;\n  color: #616670;\n  font-size: 16px;\n}\n\n.view-account[_ngcontent-%COMP%]   .content-panel[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   .figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  float: right;\n  width: 64px;\n}\n\n.view-account[_ngcontent-%COMP%]   .content-panel[_ngcontent-%COMP%]   .content-header-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 30px;\n}\n\n.view-account[_ngcontent-%COMP%]   .content-panel[_ngcontent-%COMP%]   .content-header-wrapper[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.view-account[_ngcontent-%COMP%]   .content-panel[_ngcontent-%COMP%]   .content-utilities[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 30px;\n}\n\n.view-account[_ngcontent-%COMP%]   .content-panel[_ngcontent-%COMP%]   .content-utilities[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  margin-bottom: 15px;\n}\n\n.view-account[_ngcontent-%COMP%]   .content-panel[_ngcontent-%COMP%]   .content-utilities[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-right: 0;\n}\n\n.view-account[_ngcontent-%COMP%]   .content-panel[_ngcontent-%COMP%]   .content-utilities[_ngcontent-%COMP%]   .page-nav[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.view-account[_ngcontent-%COMP%]   .content-panel[_ngcontent-%COMP%]   .content-utilities[_ngcontent-%COMP%]   .page-nav[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.view-account[_ngcontent-%COMP%]   .content-panel[_ngcontent-%COMP%]   .content-utilities[_ngcontent-%COMP%]   .page-nav[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%] {\n  color: #a2a6af;\n  margin-right: 5px;\n  display: inline-block;\n}\n\n.view-account[_ngcontent-%COMP%]   .content-panel[_ngcontent-%COMP%]   .mails-wrapper[_ngcontent-%COMP%]   .mail-item[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 10px;\n  border-bottom: 1px solid #f3f3f3;\n  color: #616670;\n  overflow: hidden;\n}\n\n.view-account[_ngcontent-%COMP%]   .content-panel[_ngcontent-%COMP%]   .mails-wrapper[_ngcontent-%COMP%]   .mail-item[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.view-account[_ngcontent-%COMP%]   .content-panel[_ngcontent-%COMP%]   .mails-wrapper[_ngcontent-%COMP%]   .mail-item[_ngcontent-%COMP%]   .icheck[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.view-account[_ngcontent-%COMP%]   .content-panel[_ngcontent-%COMP%]   .mails-wrapper[_ngcontent-%COMP%]   .mail-item[_ngcontent-%COMP%]:hover {\n  background: #f9f9fb;\n}\n\n.view-account[_ngcontent-%COMP%]   .content-panel[_ngcontent-%COMP%]   .mails-wrapper[_ngcontent-%COMP%]   .mail-item[_ngcontent-%COMP%]:nth-child(even) {\n  background: #fcfcfd;\n}\n\n.view-account[_ngcontent-%COMP%]   .content-panel[_ngcontent-%COMP%]   .mails-wrapper[_ngcontent-%COMP%]   .mail-item[_ngcontent-%COMP%]:nth-child(even):hover {\n  background: #f9f9fb;\n}\n\n.view-account[_ngcontent-%COMP%]   .content-panel[_ngcontent-%COMP%]   .mails-wrapper[_ngcontent-%COMP%]   .mail-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #616670;\n}\n\n.view-account[_ngcontent-%COMP%]   .content-panel[_ngcontent-%COMP%]   .mails-wrapper[_ngcontent-%COMP%]   .mail-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #494d55;\n  text-decoration: none;\n}\n\n.view-account[_ngcontent-%COMP%]   .content-panel[_ngcontent-%COMP%]   .mails-wrapper[_ngcontent-%COMP%]   .mail-item[_ngcontent-%COMP%]   .checkbox-container[_ngcontent-%COMP%], .view-account[_ngcontent-%COMP%]   .content-panel[_ngcontent-%COMP%]   .mails-wrapper[_ngcontent-%COMP%]   .mail-item[_ngcontent-%COMP%]   .star-container[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 5px;\n}\n\n.view-account[_ngcontent-%COMP%]   .content-panel[_ngcontent-%COMP%]   .mails-wrapper[_ngcontent-%COMP%]   .mail-item[_ngcontent-%COMP%]   .star-container[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  color: #a2a6af;\n  font-size: 16px;\n  vertical-align: middle;\n}\n\n.view-account[_ngcontent-%COMP%]   .content-panel[_ngcontent-%COMP%]   .mails-wrapper[_ngcontent-%COMP%]   .mail-item[_ngcontent-%COMP%]   .star-container[_ngcontent-%COMP%]   .fa.fa-star[_ngcontent-%COMP%] {\n  color: #f2b542;\n}\n\n.view-account[_ngcontent-%COMP%]   .content-panel[_ngcontent-%COMP%]   .mails-wrapper[_ngcontent-%COMP%]   .mail-item[_ngcontent-%COMP%]   .star-container[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]:hover {\n  color: #868c97;\n}\n\n.view-account[_ngcontent-%COMP%]   .content-panel[_ngcontent-%COMP%]   .mails-wrapper[_ngcontent-%COMP%]   .mail-item[_ngcontent-%COMP%]   .mail-to[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 5px;\n  min-width: 120px;\n}\n\n.view-account[_ngcontent-%COMP%]   .content-panel[_ngcontent-%COMP%]   .mails-wrapper[_ngcontent-%COMP%]   .mail-item[_ngcontent-%COMP%]   .mail-subject[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 5px;\n}\n\n.view-account[_ngcontent-%COMP%]   .content-panel[_ngcontent-%COMP%]   .mails-wrapper[_ngcontent-%COMP%]   .mail-item[_ngcontent-%COMP%]   .mail-subject[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.view-account[_ngcontent-%COMP%]   .content-panel[_ngcontent-%COMP%]   .mails-wrapper[_ngcontent-%COMP%]   .mail-item[_ngcontent-%COMP%]   .mail-subject[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]:last-child {\n  margin-right: 10px;\n}\n\n.view-account[_ngcontent-%COMP%]   .content-panel[_ngcontent-%COMP%]   .mails-wrapper[_ngcontent-%COMP%]   .mail-item[_ngcontent-%COMP%]   .mail-subject[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .view-account[_ngcontent-%COMP%]   .content-panel[_ngcontent-%COMP%]   .mails-wrapper[_ngcontent-%COMP%]   .mail-item[_ngcontent-%COMP%]   .mail-subject[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n\n.view-account[_ngcontent-%COMP%]   .content-panel[_ngcontent-%COMP%]   .mails-wrapper[_ngcontent-%COMP%]   .mail-item[_ngcontent-%COMP%]   .mail-subject[_ngcontent-%COMP%]   .label-color-1[_ngcontent-%COMP%] {\n  background: #f77b6b;\n}\n\n.view-account[_ngcontent-%COMP%]   .content-panel[_ngcontent-%COMP%]   .mails-wrapper[_ngcontent-%COMP%]   .mail-item[_ngcontent-%COMP%]   .mail-subject[_ngcontent-%COMP%]   .label-color-2[_ngcontent-%COMP%] {\n  background: #58bbee;\n}\n\n.view-account[_ngcontent-%COMP%]   .content-panel[_ngcontent-%COMP%]   .mails-wrapper[_ngcontent-%COMP%]   .mail-item[_ngcontent-%COMP%]   .mail-subject[_ngcontent-%COMP%]   .label-color-3[_ngcontent-%COMP%] {\n  background: #f8a13f;\n}\n\n.view-account[_ngcontent-%COMP%]   .content-panel[_ngcontent-%COMP%]   .mails-wrapper[_ngcontent-%COMP%]   .mail-item[_ngcontent-%COMP%]   .mail-subject[_ngcontent-%COMP%]   .label-color-4[_ngcontent-%COMP%] {\n  background: #ea5395;\n}\n\n.view-account[_ngcontent-%COMP%]   .content-panel[_ngcontent-%COMP%]   .mails-wrapper[_ngcontent-%COMP%]   .mail-item[_ngcontent-%COMP%]   .mail-subject[_ngcontent-%COMP%]   .label-color-5[_ngcontent-%COMP%] {\n  background: #8a40a7;\n}\n\n.view-account[_ngcontent-%COMP%]   .content-panel[_ngcontent-%COMP%]   .mails-wrapper[_ngcontent-%COMP%]   .mail-item[_ngcontent-%COMP%]   .time-container[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  color: #a2a6af;\n  text-align: left;\n}\n\n.view-account[_ngcontent-%COMP%]   .content-panel[_ngcontent-%COMP%]   .mails-wrapper[_ngcontent-%COMP%]   .mail-item[_ngcontent-%COMP%]   .time-container[_ngcontent-%COMP%]   .attachment-container[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #a2a6af;\n  margin-right: 5px;\n}\n\n.view-account[_ngcontent-%COMP%]   .content-panel[_ngcontent-%COMP%]   .mails-wrapper[_ngcontent-%COMP%]   .mail-item[_ngcontent-%COMP%]   .time-container[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-align: right;\n}\n\n.view-account[_ngcontent-%COMP%]   .content-panel[_ngcontent-%COMP%]   .mails-wrapper[_ngcontent-%COMP%]   .mail-item[_ngcontent-%COMP%]   .time-container[_ngcontent-%COMP%]   .time.today[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #494d55;\n}\n\n.drive-wrapper[_ngcontent-%COMP%] {\n  padding: 15px;\n  background: #f5f5f5;\n  overflow: hidden;\n}\n\n.drive-wrapper[_ngcontent-%COMP%]   .drive-item[_ngcontent-%COMP%] {\n  width: 130px;\n  margin-right: 15px;\n  display: inline-block;\n  float: left;\n}\n\n.drive-wrapper[_ngcontent-%COMP%]   .drive-item[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);\n  z-index: 1;\n}\n\n.drive-wrapper[_ngcontent-%COMP%]   .drive-item-inner[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.drive-wrapper[_ngcontent-%COMP%]   .drive-item-title[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  max-width: 100px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.drive-wrapper[_ngcontent-%COMP%]   .drive-item-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #494d55;\n}\n\n.drive-wrapper[_ngcontent-%COMP%]   .drive-item-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #40babd;\n}\n\n.theme-2[_ngcontent-%COMP%]   .drive-wrapper[_ngcontent-%COMP%]   .drive-item-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #6dbd63;\n}\n\n.theme-3[_ngcontent-%COMP%]   .drive-wrapper[_ngcontent-%COMP%]   .drive-item-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #497cb1;\n}\n\n.theme-4[_ngcontent-%COMP%]   .drive-wrapper[_ngcontent-%COMP%]   .drive-item-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #ec6952;\n}\n\n.drive-wrapper[_ngcontent-%COMP%]   .drive-item-thumb[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 80px;\n  margin: 0 auto;\n  color: #616670;\n}\n\n.drive-wrapper[_ngcontent-%COMP%]   .drive-item-thumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  -webkit-opacity: 0.8;\n  -moz-opacity: 0.8;\n  opacity: 0.8;\n}\n\n.drive-wrapper[_ngcontent-%COMP%]   .drive-item-thumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  -webkit-opacity: 1;\n  -moz-opacity: 1;\n  opacity: 1;\n}\n\n.drive-wrapper[_ngcontent-%COMP%]   .drive-item-thumb[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 36px;\n  margin: 0 auto;\n  margin-top: 20px;\n}\n\n.drive-wrapper[_ngcontent-%COMP%]   .drive-item-footer[_ngcontent-%COMP%]   .utilities[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.drive-wrapper[_ngcontent-%COMP%]   .drive-item-footer[_ngcontent-%COMP%]   .utilities[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  padding-right: 0;\n}\n\n.drive-list-view[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  width: 60%;\n}\n\n.drive-list-view[_ngcontent-%COMP%]   .name.truncate[_ngcontent-%COMP%] {\n  max-width: 100px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.drive-list-view[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%] {\n  width: 15px;\n}\n\n.drive-list-view[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%], .drive-list-view[_ngcontent-%COMP%]   .size[_ngcontent-%COMP%] {\n  max-width: 60px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.drive-list-view[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #494d55;\n}\n\n.drive-list-view[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #40babd;\n}\n\n.theme-2[_ngcontent-%COMP%]   .drive-list-view[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #6dbd63;\n}\n\n.theme-3[_ngcontent-%COMP%]   .drive-list-view[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #497cb1;\n}\n\n.theme-4[_ngcontent-%COMP%]   .drive-list-view[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #ec6952;\n}\n\n.drive-list-view[_ngcontent-%COMP%]   td.date[_ngcontent-%COMP%], .drive-list-view[_ngcontent-%COMP%]   td.size[_ngcontent-%COMP%] {\n  color: #a2a6af;\n}\n\n@media (max-width: 767px) {\n  .view-account[_ngcontent-%COMP%]   .content-panel[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  .view-account[_ngcontent-%COMP%]   .side-bar[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n\n  .view-account[_ngcontent-%COMP%]   .side-bar[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .img-profile[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px;\n  }\n\n  .view-account[_ngcontent-%COMP%]   .side-bar[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-bottom: 5px;\n  }\n\n  .view-account[_ngcontent-%COMP%]   .content-panel[_ngcontent-%COMP%]   .content-header-wrapper[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n    position: static;\n    margin-bottom: 30px;\n  }\n\n  .view-account[_ngcontent-%COMP%]   .content-panel[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n\n  .view-account[_ngcontent-%COMP%]   .content-panel[_ngcontent-%COMP%]   .content-utilities[_ngcontent-%COMP%]   .page-nav[_ngcontent-%COMP%] {\n    position: static;\n    margin-bottom: 15px;\n  }\n\n  .drive-wrapper[_ngcontent-%COMP%]   .drive-item[_ngcontent-%COMP%] {\n    width: 100px;\n    margin-right: 5px;\n    float: none;\n  }\n\n  .drive-wrapper[_ngcontent-%COMP%]   .drive-item-thumb[_ngcontent-%COMP%] {\n    width: auto;\n    height: 54px;\n  }\n\n  .drive-wrapper[_ngcontent-%COMP%]   .drive-item-thumb[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n    font-size: 24px;\n    padding-top: 0;\n  }\n\n  .view-account[_ngcontent-%COMP%]   .content-panel[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   .figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    float: none;\n    margin-bottom: 15px;\n  }\n\n  .view-account[_ngcontent-%COMP%]   .file-uploader[_ngcontent-%COMP%] {\n    margin-bottom: 15px;\n  }\n\n  .view-account[_ngcontent-%COMP%]   .mail-subject[_ngcontent-%COMP%] {\n    max-width: 100px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  .view-account[_ngcontent-%COMP%]   .content-panel[_ngcontent-%COMP%]   .mails-wrapper[_ngcontent-%COMP%]   .mail-item[_ngcontent-%COMP%]   .time-container[_ngcontent-%COMP%] {\n    position: static;\n  }\n\n  .view-account[_ngcontent-%COMP%]   .content-panel[_ngcontent-%COMP%]   .mails-wrapper[_ngcontent-%COMP%]   .mail-item[_ngcontent-%COMP%]   .time-container[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n    width: auto;\n    text-align: left;\n  }\n}\n\n@media (min-width: 768px) {\n  .view-account[_ngcontent-%COMP%]   .side-bar[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n    padding: 0;\n    padding-bottom: 15px;\n  }\n\n  .view-account[_ngcontent-%COMP%]   .mail-subject[_ngcontent-%COMP%]   .subject[_ngcontent-%COMP%] {\n    max-width: 200px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n}\n\n@media (min-width: 992px) {\n  .view-account[_ngcontent-%COMP%]   .content-panel[_ngcontent-%COMP%] {\n    min-height: 800px;\n    border-left: 1px solid #f3f3f7;\n    margin-left: 200px;\n  }\n\n  .view-account[_ngcontent-%COMP%]   .mail-subject[_ngcontent-%COMP%]   .subject[_ngcontent-%COMP%] {\n    max-width: 280px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  .view-account[_ngcontent-%COMP%]   .side-bar[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 200px;\n    min-height: 600px;\n  }\n\n  .view-account[_ngcontent-%COMP%]   .side-bar[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n    border-bottom: none;\n    padding: 30px;\n  }\n\n  .view-account[_ngcontent-%COMP%]   .side-bar[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .img-profile[_ngcontent-%COMP%] {\n    width: 120px;\n    height: 120px;\n  }\n\n  .view-account[_ngcontent-%COMP%]   .side-bar[_ngcontent-%COMP%]   .side-menu[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n\n  .view-account[_ngcontent-%COMP%]   .side-bar[_ngcontent-%COMP%]   .side-menu[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .view-account[_ngcontent-%COMP%]   .side-bar[_ngcontent-%COMP%]   .side-menu[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n    display: block;\n    float: none;\n    font-size: 14px;\n    border-bottom: 1px solid #f3f3f7;\n    margin-right: 0;\n    margin-bottom: 0;\n  }\n\n  .view-account[_ngcontent-%COMP%]   .side-bar[_ngcontent-%COMP%]   .side-menu[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    display: block;\n    color: #9499a3;\n    padding: 10px 15px;\n    padding-left: 30px;\n  }\n\n  .view-account[_ngcontent-%COMP%]   .side-bar[_ngcontent-%COMP%]   .side-menu[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n    background: #f9f9fb;\n  }\n\n  .view-account[_ngcontent-%COMP%]   .side-bar[_ngcontent-%COMP%]   .side-menu[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    background: #f9f9fb;\n    border-right: 4px solid #40babd;\n    border-bottom: none;\n  }\n\n  .theme-2[_ngcontent-%COMP%]   .view-account[_ngcontent-%COMP%]   .side-bar[_ngcontent-%COMP%]   .side-menu[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    border-right-color: #6dbd63;\n  }\n\n  .theme-3[_ngcontent-%COMP%]   .view-account[_ngcontent-%COMP%]   .side-bar[_ngcontent-%COMP%]   .side-menu[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    border-right-color: #497cb1;\n  }\n\n  .theme-4[_ngcontent-%COMP%]   .view-account[_ngcontent-%COMP%]   .side-bar[_ngcontent-%COMP%]   .side-menu[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    border-right-color: #ec6952;\n  }\n\n  .view-account[_ngcontent-%COMP%]   .side-bar[_ngcontent-%COMP%]   .side-menu[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 24px;\n    vertical-align: middle;\n    text-align: center;\n    width: 40px;\n    display: inline-block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxhQUFBO0FBQUo7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFFSSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBQUo7O0FBRUk7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBQ0k7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBRUo7O0FBQ0k7RUFDQSxvQkFBQTtBQUVKOztBQUNJO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7QUFFSjs7QUFDSTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFDSTtFQUNBLG1CQUFBO0FBRUo7O0FBQ0k7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQ0k7RUFDQSxjQUFBO0FBRUo7O0FBQ0k7RUFDQSxjQUFBO0FBRUo7O0FBQ0k7RUFDQSxrQkFBQTtBQUVKOztBQUNJO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBRUo7O0FBQ0k7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFDSTtFQUNBLGVBQUE7QUFFSjs7QUFDSTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtBQUVKOztBQUNJO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQ0k7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQ0k7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7QUFFSjs7QUFDSTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtBQUVKOztBQUNJO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0FBRUo7O0FBQ0k7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQ0k7RUFDQSxhQUFBO0FBRUo7O0FBQ0k7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQ0k7RUFDQSxvQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUNJO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFFSjs7QUFDSTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFDSTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7QUFFSjs7QUFDSTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFDSTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFDSTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQ0k7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0FBRUo7O0FBQ0k7RUFDQSxnQkFBQTtBQUVKOztBQUNJO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFFSjs7QUFDSTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQ0k7RUFDQSxXQUFBO0FBRUo7O0FBQ0k7RUFDQSxzQkFBQTtBQUVKOztBQUNJO0VBQ0EsbUJBQUE7QUFFSjs7QUFDSTtFQUNBLG1CQUFBO0FBRUo7O0FBQ0k7RUFDQSxtQkFBQTtBQUVKOztBQUNJO0VBQ0EsY0FBQTtBQUVKOztBQUNJO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBRUo7O0FBQ0k7O0VBRUEscUJBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUNJO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQUVKOztBQUNJO0VBQ0EsY0FBQTtBQUVKOztBQUNJO0VBQ0EsY0FBQTtBQUVKOztBQUNJO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQ0k7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQ0k7RUFDQSxpQkFBQTtBQUVKOztBQUNJO0VBQ0Esa0JBQUE7QUFFSjs7QUFDSTs7RUFFQSxXQUFBO0FBRUo7O0FBQ0k7RUFDQSxtQkFBQTtBQUVKOztBQUNJO0VBQ0EsbUJBQUE7QUFFSjs7QUFDSTtFQUNBLG1CQUFBO0FBRUo7O0FBQ0k7RUFDQSxtQkFBQTtBQUVKOztBQUNJO0VBQ0EsbUJBQUE7QUFFSjs7QUFDSTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUNJO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFDSTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFDSTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUNJO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFDSTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUNJO0VBQ0Esd0NBQUE7RUFDQSxVQUFBO0FBRUo7O0FBQ0k7RUFDQSxhQUFBO0FBRUo7O0FBQ0k7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBRUo7O0FBQ0k7RUFDQSxjQUFBO0FBRUo7O0FBQ0k7RUFDQSxjQUFBO0FBRUo7O0FBQ0k7RUFDQSxjQUFBO0FBRUo7O0FBQ0k7RUFDQSxjQUFBO0FBRUo7O0FBQ0k7RUFDQSxjQUFBO0FBRUo7O0FBQ0k7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBRUo7O0FBQ0k7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUNJO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQUVKOztBQUNJO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQ0k7RUFDQSxnQkFBQTtBQUVKOztBQUNJO0VBQ0EsZ0JBQUE7QUFFSjs7QUFDSTtFQUNBLFVBQUE7QUFFSjs7QUFDSTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBRUo7O0FBQ0k7RUFDQSxXQUFBO0FBRUo7O0FBQ0k7O0VBRUEsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUVKOztBQUNJO0VBQ0EsY0FBQTtBQUVKOztBQUNJO0VBQ0EsY0FBQTtBQUVKOztBQUNJO0VBQ0EsY0FBQTtBQUVKOztBQUNJO0VBQ0EsY0FBQTtBQUVKOztBQUNJO0VBQ0EsY0FBQTtBQUVKOztBQUNJOztFQUVBLGNBQUE7QUFFSjs7QUFDSTtFQUNBO0lBQ0ksa0JBQUE7RUFFTjs7RUFBRTtJQUNJLFVBQUE7RUFHTjs7RUFERTtJQUNJLFdBQUE7SUFDQSxZQUFBO0VBSU47O0VBRkU7SUFDSSxrQkFBQTtFQUtOOztFQUhFO0lBQ0ksZ0JBQUE7SUFDQSxtQkFBQTtFQU1OOztFQUpFO0lBQ0ksVUFBQTtFQU9OOztFQUxFO0lBQ0ksZ0JBQUE7SUFDQSxtQkFBQTtFQVFOOztFQU5FO0lBQ0ksWUFBQTtJQUNBLGlCQUFBO0lBQ0EsV0FBQTtFQVNOOztFQVBFO0lBQ0ksV0FBQTtJQUNBLFlBQUE7RUFVTjs7RUFSRTtJQUNJLGVBQUE7SUFDQSxjQUFBO0VBV047O0VBVEU7SUFDSSxXQUFBO0lBQ0EsbUJBQUE7RUFZTjs7RUFWRTtJQUNJLG1CQUFBO0VBYU47O0VBWEU7SUFDSSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7SUFDQSx1QkFBQTtFQWNOOztFQVpFO0lBQ0ksZ0JBQUE7RUFlTjs7RUFiRTtJQUNJLFdBQUE7SUFDQSxnQkFBQTtFQWdCTjtBQUNGOztBQWJJO0VBQ0E7SUFDSSxVQUFBO0lBQ0Esb0JBQUE7RUFlTjs7RUFiRTtJQUNJLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtJQUNBLHVCQUFBO0VBZ0JOO0FBQ0Y7O0FBYkk7RUFDQTtJQUNJLGlCQUFBO0lBQ0EsOEJBQUE7SUFDQSxrQkFBQTtFQWVOOztFQWJFO0lBQ0ksZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0lBQ0EsdUJBQUE7RUFnQk47O0VBZEU7SUFDSSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtFQWlCTjs7RUFmRTtJQUNJLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBO0VBa0JOOztFQWhCRTtJQUNJLFlBQUE7SUFDQSxhQUFBO0VBbUJOOztFQWpCRTtJQUNJLGdCQUFBO0VBb0JOOztFQWxCRTtJQUNJLGNBQUE7RUFxQk47O0VBbkJFO0lBQ0ksY0FBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0lBQ0EsZ0NBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7RUFzQk47O0VBcEJFO0lBQ0ksY0FBQTtJQUNBLGNBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0VBdUJOOztFQXJCRTtJQUNJLG1CQUFBO0VBd0JOOztFQXRCRTtJQUNJLG1CQUFBO0lBQ0EsK0JBQUE7SUFDQSxtQkFBQTtFQXlCTjs7RUF2QkU7SUFDSSwyQkFBQTtFQTBCTjs7RUF4QkU7SUFDSSwyQkFBQTtFQTJCTjs7RUF6QkU7SUFDSSwyQkFBQTtFQTRCTjs7RUExQkU7SUFDSSxlQUFBO0lBQ0Esc0JBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxxQkFBQTtFQTZCTjtBQUNGIiwiZmlsZSI6InByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jb250ZW50LXBhbmVsIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLmNlbnRlci1jdXN0e1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4uY3VzdF9za2lybWVzaHtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc29sZGllckIuanBnJyk7XG4gICAgbWluLWhlaWdodDogNTAwcHg7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuICAgIC52aWV3LWFjY291bnR7XG4gICAgYmFja2dyb3VuZDojRkZGRkZGOyBcbiAgICBtYXJnaW4tdG9wOjIwcHg7XG4gICAgfVxuICAgIC52aWV3LWFjY291bnQgLnByby1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHBhZGRpbmc6IDRweCA1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTVweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcbiAgICB9XG4gICAgXG4gICAgLnZpZXctYWNjb3VudCAuc2lkZS1iYXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4XG4gICAgfVxuICAgIFxuICAgIC52aWV3LWFjY291bnQgLnNpZGUtYmFyIC51c2VyLWluZm8ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgY29sb3I6ICM2MTY2NzA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmM2YzZjNcbiAgICB9XG4gICAgXG4gICAgLnZpZXctYWNjb3VudCAuc2lkZS1iYXIgLnVzZXItaW5mbyAuaW1nLXByb2ZpbGUge1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHhcbiAgICB9XG4gICAgXG4gICAgLnZpZXctYWNjb3VudCAuc2lkZS1iYXIgLnVzZXItaW5mbyAubWV0YSBsaSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweFxuICAgIH1cbiAgICBcbiAgICAudmlldy1hY2NvdW50IC5zaWRlLWJhciAudXNlci1pbmZvIC5tZXRhIGxpIHNwYW4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHRcbiAgICB9XG4gICAgXG4gICAgLnZpZXctYWNjb3VudCAuc2lkZS1iYXIgLnVzZXItaW5mbyAubWV0YSBsaSBhIHtcbiAgICBjb2xvcjogIzYxNjY3MFxuICAgIH1cbiAgICBcbiAgICAudmlldy1hY2NvdW50IC5zaWRlLWJhciAudXNlci1pbmZvIC5tZXRhIGxpLmFjdGl2aXR5IHtcbiAgICBjb2xvcjogI2EyYTZhZlxuICAgIH1cbiAgICBcbiAgICAudmlldy1hY2NvdW50IC5zaWRlLWJhciAuc2lkZS1tZW51IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbiAgICB9XG4gICAgXG4gICAgLnZpZXctYWNjb3VudCAuc2lkZS1iYXIgLnNpZGUtbWVudSAubmF2IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiAwIGF1dG9cbiAgICB9XG4gICAgXG4gICAgLnZpZXctYWNjb3VudCAuc2lkZS1iYXIgLnNpZGUtbWVudSAubmF2PmxpIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweFxuICAgIH1cbiAgICBcbiAgICAudmlldy1hY2NvdW50IC5zaWRlLWJhciAuc2lkZS1tZW51IC5uYXY+bGk6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwXG4gICAgfVxuICAgIFxuICAgIC52aWV3LWFjY291bnQgLnNpZGUtYmFyIC5zaWRlLW1lbnUgLm5hdj5saT5hIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY29sb3I6ICM5NDk5YTM7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudFxuICAgIH1cbiAgICBcbiAgICAudmlldy1hY2NvdW50IC5zaWRlLWJhciAuc2lkZS1tZW51IC5uYXY+bGk+YTpob3ZlciB7XG4gICAgY29sb3I6ICM2MTY2NzA7XG4gICAgYmFja2dyb3VuZDogbm9uZVxuICAgIH1cbiAgICBcbiAgICAudmlldy1hY2NvdW50IC5zaWRlLWJhciAuc2lkZS1tZW51IC5uYXY+bGkuYWN0aXZlIGEge1xuICAgIGNvbG9yOiAjNDBiYWJkO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNDBiYWJkO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lXG4gICAgfVxuICAgIFxuICAgIC50aGVtZS0yIC52aWV3LWFjY291bnQgLnNpZGUtYmFyIC5zaWRlLW1lbnUgLm5hdj5saS5hY3RpdmUgYSB7XG4gICAgY29sb3I6ICM2ZGJkNjM7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzZkYmQ2M1xuICAgIH1cbiAgICBcbiAgICAudGhlbWUtMyAudmlldy1hY2NvdW50IC5zaWRlLWJhciAuc2lkZS1tZW51IC5uYXY+bGkuYWN0aXZlIGEge1xuICAgIGNvbG9yOiAjNDk3Y2IxO1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICM0OTdjYjFcbiAgICB9XG4gICAgXG4gICAgLnRoZW1lLTQgLnZpZXctYWNjb3VudCAuc2lkZS1iYXIgLnNpZGUtbWVudSAubmF2PmxpLmFjdGl2ZSBhIHtcbiAgICBjb2xvcjogI2VjNjk1MjtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZWM2OTUyXG4gICAgfVxuICAgIFxuICAgIC52aWV3LWFjY291bnQgLnNpZGUtYmFyIC5zaWRlLW1lbnUgLm5hdj5saSAuaWNvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweFxuICAgIH1cbiAgICBcbiAgICAudmlldy1hY2NvdW50IC5jb250ZW50LXBhbmVsIHtcbiAgICBwYWRkaW5nOiAzMHB4XG4gICAgfVxuICAgIFxuICAgIC52aWV3LWFjY291bnQgLmNvbnRlbnQtcGFuZWwgLnRpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgZm9udC1zaXplOiAxOHB4XG4gICAgfVxuICAgIFxuICAgIC52aWV3LWFjY291bnQgLmNvbnRlbnQtcGFuZWwgLmZpZWxkc2V0LXRpdGxlIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VhZWFmMTtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIGNvbG9yOiAjNjE2NjcwO1xuICAgIGZvbnQtc2l6ZTogMTZweFxuICAgIH1cbiAgICBcbiAgICAudmlldy1hY2NvdW50IC5jb250ZW50LXBhbmVsIC5hdmF0YXIgLmZpZ3VyZSBpbWcge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB3aWR0aDogNjRweFxuICAgIH1cbiAgICBcbiAgICAudmlldy1hY2NvdW50IC5jb250ZW50LXBhbmVsIC5jb250ZW50LWhlYWRlci13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweFxuICAgIH1cbiAgICBcbiAgICAudmlldy1hY2NvdW50IC5jb250ZW50LXBhbmVsIC5jb250ZW50LWhlYWRlci13cmFwcGVyIC5hY3Rpb25zIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwXG4gICAgfVxuICAgIFxuICAgIC52aWV3LWFjY291bnQgLmNvbnRlbnQtcGFuZWwgLmNvbnRlbnQtdXRpbGl0aWVzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweFxuICAgIH1cbiAgICBcbiAgICAudmlldy1hY2NvdW50IC5jb250ZW50LXBhbmVsIC5jb250ZW50LXV0aWxpdGllcyAuYnRuLWdyb3VwIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4XG4gICAgfVxuICAgIFxuICAgIC52aWV3LWFjY291bnQgLmNvbnRlbnQtcGFuZWwgLmNvbnRlbnQtdXRpbGl0aWVzIC5mYSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbi1yaWdodDogMFxuICAgIH1cbiAgICBcbiAgICAudmlldy1hY2NvdW50IC5jb250ZW50LXBhbmVsIC5jb250ZW50LXV0aWxpdGllcyAucGFnZS1uYXYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDBcbiAgICB9XG4gICAgXG4gICAgLnZpZXctYWNjb3VudCAuY29udGVudC1wYW5lbCAuY29udGVudC11dGlsaXRpZXMgLnBhZ2UtbmF2IC5idG4tZ3JvdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDBcbiAgICB9XG4gICAgXG4gICAgLnZpZXctYWNjb3VudCAuY29udGVudC1wYW5lbCAuY29udGVudC11dGlsaXRpZXMgLnBhZ2UtbmF2IC5pbmRpY2F0b3Ige1xuICAgIGNvbG9yOiAjYTJhNmFmO1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xuICAgIH1cbiAgICBcbiAgICAudmlldy1hY2NvdW50IC5jb250ZW50LXBhbmVsIC5tYWlscy13cmFwcGVyIC5tYWlsLWl0ZW0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjNmM2YzO1xuICAgIGNvbG9yOiAjNjE2NjcwO1xuICAgIG92ZXJmbG93OiBoaWRkZW5cbiAgICB9XG4gICAgXG4gICAgLnZpZXctYWNjb3VudCAuY29udGVudC1wYW5lbCAubWFpbHMtd3JhcHBlciAubWFpbC1pdGVtPmRpdiB7XG4gICAgZmxvYXQ6IGxlZnRcbiAgICB9XG4gICAgXG4gICAgLnZpZXctYWNjb3VudCAuY29udGVudC1wYW5lbCAubWFpbHMtd3JhcHBlciAubWFpbC1pdGVtIC5pY2hlY2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZcbiAgICB9XG4gICAgXG4gICAgLnZpZXctYWNjb3VudCAuY29udGVudC1wYW5lbCAubWFpbHMtd3JhcHBlciAubWFpbC1pdGVtOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjlmOWZiXG4gICAgfVxuICAgIFxuICAgIC52aWV3LWFjY291bnQgLmNvbnRlbnQtcGFuZWwgLm1haWxzLXdyYXBwZXIgLm1haWwtaXRlbTpudGgtY2hpbGQoZXZlbikge1xuICAgIGJhY2tncm91bmQ6ICNmY2ZjZmRcbiAgICB9XG4gICAgXG4gICAgLnZpZXctYWNjb3VudCAuY29udGVudC1wYW5lbCAubWFpbHMtd3JhcHBlciAubWFpbC1pdGVtOm50aC1jaGlsZChldmVuKTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2Y5ZjlmYlxuICAgIH1cbiAgICBcbiAgICAudmlldy1hY2NvdW50IC5jb250ZW50LXBhbmVsIC5tYWlscy13cmFwcGVyIC5tYWlsLWl0ZW0gYSB7XG4gICAgY29sb3I6ICM2MTY2NzBcbiAgICB9XG4gICAgXG4gICAgLnZpZXctYWNjb3VudCAuY29udGVudC1wYW5lbCAubWFpbHMtd3JhcHBlciAubWFpbC1pdGVtIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjNDk0ZDU1O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxuICAgIH1cbiAgICBcbiAgICAudmlldy1hY2NvdW50IC5jb250ZW50LXBhbmVsIC5tYWlscy13cmFwcGVyIC5tYWlsLWl0ZW0gLmNoZWNrYm94LWNvbnRhaW5lcixcbiAgICAudmlldy1hY2NvdW50IC5jb250ZW50LXBhbmVsIC5tYWlscy13cmFwcGVyIC5tYWlsLWl0ZW0gLnN0YXItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHhcbiAgICB9XG4gICAgXG4gICAgLnZpZXctYWNjb3VudCAuY29udGVudC1wYW5lbCAubWFpbHMtd3JhcHBlciAubWFpbC1pdGVtIC5zdGFyLWNvbnRhaW5lciAuZmEge1xuICAgIGNvbG9yOiAjYTJhNmFmO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXG4gICAgfVxuICAgIFxuICAgIC52aWV3LWFjY291bnQgLmNvbnRlbnQtcGFuZWwgLm1haWxzLXdyYXBwZXIgLm1haWwtaXRlbSAuc3Rhci1jb250YWluZXIgLmZhLmZhLXN0YXIge1xuICAgIGNvbG9yOiAjZjJiNTQyXG4gICAgfVxuICAgIFxuICAgIC52aWV3LWFjY291bnQgLmNvbnRlbnQtcGFuZWwgLm1haWxzLXdyYXBwZXIgLm1haWwtaXRlbSAuc3Rhci1jb250YWluZXIgLmZhOmhvdmVyIHtcbiAgICBjb2xvcjogIzg2OGM5N1xuICAgIH1cbiAgICBcbiAgICAudmlldy1hY2NvdW50IC5jb250ZW50LXBhbmVsIC5tYWlscy13cmFwcGVyIC5tYWlsLWl0ZW0gLm1haWwtdG8ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBtaW4td2lkdGg6IDEyMHB4XG4gICAgfVxuICAgIFxuICAgIC52aWV3LWFjY291bnQgLmNvbnRlbnQtcGFuZWwgLm1haWxzLXdyYXBwZXIgLm1haWwtaXRlbSAubWFpbC1zdWJqZWN0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHhcbiAgICB9XG4gICAgXG4gICAgLnZpZXctYWNjb3VudCAuY29udGVudC1wYW5lbCAubWFpbHMtd3JhcHBlciAubWFpbC1pdGVtIC5tYWlsLXN1YmplY3QgLmxhYmVsIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweFxuICAgIH1cbiAgICBcbiAgICAudmlldy1hY2NvdW50IC5jb250ZW50LXBhbmVsIC5tYWlscy13cmFwcGVyIC5tYWlsLWl0ZW0gLm1haWwtc3ViamVjdCAubGFiZWw6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4XG4gICAgfVxuICAgIFxuICAgIC52aWV3LWFjY291bnQgLmNvbnRlbnQtcGFuZWwgLm1haWxzLXdyYXBwZXIgLm1haWwtaXRlbSAubWFpbC1zdWJqZWN0IC5sYWJlbCBhLFxuICAgIC52aWV3LWFjY291bnQgLmNvbnRlbnQtcGFuZWwgLm1haWxzLXdyYXBwZXIgLm1haWwtaXRlbSAubWFpbC1zdWJqZWN0IC5sYWJlbCBhOmhvdmVyIHtcbiAgICBjb2xvcjogI2ZmZlxuICAgIH1cbiAgICBcbiAgICAudmlldy1hY2NvdW50IC5jb250ZW50LXBhbmVsIC5tYWlscy13cmFwcGVyIC5tYWlsLWl0ZW0gLm1haWwtc3ViamVjdCAubGFiZWwtY29sb3ItMSB7XG4gICAgYmFja2dyb3VuZDogI2Y3N2I2YlxuICAgIH1cbiAgICBcbiAgICAudmlldy1hY2NvdW50IC5jb250ZW50LXBhbmVsIC5tYWlscy13cmFwcGVyIC5tYWlsLWl0ZW0gLm1haWwtc3ViamVjdCAubGFiZWwtY29sb3ItMiB7XG4gICAgYmFja2dyb3VuZDogIzU4YmJlZVxuICAgIH1cbiAgICBcbiAgICAudmlldy1hY2NvdW50IC5jb250ZW50LXBhbmVsIC5tYWlscy13cmFwcGVyIC5tYWlsLWl0ZW0gLm1haWwtc3ViamVjdCAubGFiZWwtY29sb3ItMyB7XG4gICAgYmFja2dyb3VuZDogI2Y4YTEzZlxuICAgIH1cbiAgICBcbiAgICAudmlldy1hY2NvdW50IC5jb250ZW50LXBhbmVsIC5tYWlscy13cmFwcGVyIC5tYWlsLWl0ZW0gLm1haWwtc3ViamVjdCAubGFiZWwtY29sb3ItNCB7XG4gICAgYmFja2dyb3VuZDogI2VhNTM5NVxuICAgIH1cbiAgICBcbiAgICAudmlldy1hY2NvdW50IC5jb250ZW50LXBhbmVsIC5tYWlscy13cmFwcGVyIC5tYWlsLWl0ZW0gLm1haWwtc3ViamVjdCAubGFiZWwtY29sb3ItNSB7XG4gICAgYmFja2dyb3VuZDogIzhhNDBhN1xuICAgIH1cbiAgICBcbiAgICAudmlldy1hY2NvdW50IC5jb250ZW50LXBhbmVsIC5tYWlscy13cmFwcGVyIC5tYWlsLWl0ZW0gLnRpbWUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHRvcDogMTBweDtcbiAgICBjb2xvcjogI2EyYTZhZjtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0XG4gICAgfVxuICAgIFxuICAgIC52aWV3LWFjY291bnQgLmNvbnRlbnQtcGFuZWwgLm1haWxzLXdyYXBwZXIgLm1haWwtaXRlbSAudGltZS1jb250YWluZXIgLmF0dGFjaG1lbnQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY29sb3I6ICNhMmE2YWY7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHhcbiAgICB9XG4gICAgXG4gICAgLnZpZXctYWNjb3VudCAuY29udGVudC1wYW5lbCAubWFpbHMtd3JhcHBlciAubWFpbC1pdGVtIC50aW1lLWNvbnRhaW5lciAudGltZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0XG4gICAgfVxuICAgIFxuICAgIC52aWV3LWFjY291bnQgLmNvbnRlbnQtcGFuZWwgLm1haWxzLXdyYXBwZXIgLm1haWwtaXRlbSAudGltZS1jb250YWluZXIgLnRpbWUudG9kYXkge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICM0OTRkNTVcbiAgICB9XG4gICAgXG4gICAgLmRyaXZlLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICBvdmVyZmxvdzogaGlkZGVuXG4gICAgfVxuICAgIFxuICAgIC5kcml2ZS13cmFwcGVyIC5kcml2ZS1pdGVtIHtcbiAgICB3aWR0aDogMTMwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmbG9hdDogbGVmdFxuICAgIH1cbiAgICBcbiAgICAuZHJpdmUtd3JhcHBlciAuZHJpdmUtaXRlbTpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgLjEpO1xuICAgIHotaW5kZXg6IDFcbiAgICB9XG4gICAgXG4gICAgLmRyaXZlLXdyYXBwZXIgLmRyaXZlLWl0ZW0taW5uZXIge1xuICAgIHBhZGRpbmc6IDE1cHhcbiAgICB9XG4gICAgXG4gICAgLmRyaXZlLXdyYXBwZXIgLmRyaXZlLWl0ZW0tdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXNcbiAgICB9XG4gICAgXG4gICAgLmRyaXZlLXdyYXBwZXIgLmRyaXZlLWl0ZW0tdGl0bGUgYSB7XG4gICAgY29sb3I6ICM0OTRkNTVcbiAgICB9XG4gICAgXG4gICAgLmRyaXZlLXdyYXBwZXIgLmRyaXZlLWl0ZW0tdGl0bGUgYTpob3ZlciB7XG4gICAgY29sb3I6ICM0MGJhYmRcbiAgICB9XG4gICAgXG4gICAgLnRoZW1lLTIgLmRyaXZlLXdyYXBwZXIgLmRyaXZlLWl0ZW0tdGl0bGUgYTpob3ZlciB7XG4gICAgY29sb3I6ICM2ZGJkNjNcbiAgICB9XG4gICAgXG4gICAgLnRoZW1lLTMgLmRyaXZlLXdyYXBwZXIgLmRyaXZlLWl0ZW0tdGl0bGUgYTpob3ZlciB7XG4gICAgY29sb3I6ICM0OTdjYjFcbiAgICB9XG4gICAgXG4gICAgLnRoZW1lLTQgLmRyaXZlLXdyYXBwZXIgLmRyaXZlLWl0ZW0tdGl0bGUgYTpob3ZlciB7XG4gICAgY29sb3I6ICNlYzY5NTJcbiAgICB9XG4gICAgXG4gICAgLmRyaXZlLXdyYXBwZXIgLmRyaXZlLWl0ZW0tdGh1bWIge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgY29sb3I6ICM2MTY2NzBcbiAgICB9XG4gICAgXG4gICAgLmRyaXZlLXdyYXBwZXIgLmRyaXZlLWl0ZW0tdGh1bWIgYSB7XG4gICAgLXdlYmtpdC1vcGFjaXR5OiAuODtcbiAgICAtbW96LW9wYWNpdHk6IC44O1xuICAgIG9wYWNpdHk6IC44XG4gICAgfVxuICAgIFxuICAgIC5kcml2ZS13cmFwcGVyIC5kcml2ZS1pdGVtLXRodW1iIGE6aG92ZXIge1xuICAgIC13ZWJraXQtb3BhY2l0eTogMTtcbiAgICAtbW96LW9wYWNpdHk6IDE7XG4gICAgb3BhY2l0eTogMVxuICAgIH1cbiAgICBcbiAgICAuZHJpdmUtd3JhcHBlciAuZHJpdmUtaXRlbS10aHVtYiAuZmEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWFyZ2luLXRvcDogMjBweFxuICAgIH1cbiAgICBcbiAgICAuZHJpdmUtd3JhcHBlciAuZHJpdmUtaXRlbS1mb290ZXIgLnV0aWxpdGllcyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMFxuICAgIH1cbiAgICBcbiAgICAuZHJpdmUtd3JhcHBlciAuZHJpdmUtaXRlbS1mb290ZXIgLnV0aWxpdGllcyBsaTpsYXN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwXG4gICAgfVxuICAgIFxuICAgIC5kcml2ZS1saXN0LXZpZXcgLm5hbWUge1xuICAgIHdpZHRoOiA2MCVcbiAgICB9XG4gICAgXG4gICAgLmRyaXZlLWxpc3QtdmlldyAubmFtZS50cnVuY2F0ZSB7XG4gICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXNcbiAgICB9XG4gICAgXG4gICAgLmRyaXZlLWxpc3QtdmlldyAudHlwZSB7XG4gICAgd2lkdGg6IDE1cHhcbiAgICB9XG4gICAgXG4gICAgLmRyaXZlLWxpc3QtdmlldyAuZGF0ZSxcbiAgICAuZHJpdmUtbGlzdC12aWV3IC5zaXplIHtcbiAgICBtYXgtd2lkdGg6IDYwcHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzXG4gICAgfVxuICAgIFxuICAgIC5kcml2ZS1saXN0LXZpZXcgYSB7XG4gICAgY29sb3I6ICM0OTRkNTVcbiAgICB9XG4gICAgXG4gICAgLmRyaXZlLWxpc3QtdmlldyBhOmhvdmVyIHtcbiAgICBjb2xvcjogIzQwYmFiZFxuICAgIH1cbiAgICBcbiAgICAudGhlbWUtMiAuZHJpdmUtbGlzdC12aWV3IGE6aG92ZXIge1xuICAgIGNvbG9yOiAjNmRiZDYzXG4gICAgfVxuICAgIFxuICAgIC50aGVtZS0zIC5kcml2ZS1saXN0LXZpZXcgYTpob3ZlciB7XG4gICAgY29sb3I6ICM0OTdjYjFcbiAgICB9XG4gICAgXG4gICAgLnRoZW1lLTQgLmRyaXZlLWxpc3QtdmlldyBhOmhvdmVyIHtcbiAgICBjb2xvcjogI2VjNjk1MlxuICAgIH1cbiAgICBcbiAgICAuZHJpdmUtbGlzdC12aWV3IHRkLmRhdGUsXG4gICAgLmRyaXZlLWxpc3QtdmlldyB0ZC5zaXplIHtcbiAgICBjb2xvcjogI2EyYTZhZlxuICAgIH1cbiAgICBcbiAgICBAbWVkaWEgKG1heC13aWR0aDo3NjdweCkge1xuICAgIC52aWV3LWFjY291bnQgLmNvbnRlbnQtcGFuZWwgLnRpdGxlIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG4gICAgfVxuICAgIC52aWV3LWFjY291bnQgLnNpZGUtYmFyIC51c2VyLWluZm8ge1xuICAgICAgICBwYWRkaW5nOiAwXG4gICAgfVxuICAgIC52aWV3LWFjY291bnQgLnNpZGUtYmFyIC51c2VyLWluZm8gLmltZy1wcm9maWxlIHtcbiAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgIGhlaWdodDogNjBweFxuICAgIH1cbiAgICAudmlldy1hY2NvdW50IC5zaWRlLWJhciAudXNlci1pbmZvIC5tZXRhIGxpIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4XG4gICAgfVxuICAgIC52aWV3LWFjY291bnQgLmNvbnRlbnQtcGFuZWwgLmNvbnRlbnQtaGVhZGVyLXdyYXBwZXIgLmFjdGlvbnMge1xuICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4XG4gICAgfVxuICAgIC52aWV3LWFjY291bnQgLmNvbnRlbnQtcGFuZWwge1xuICAgICAgICBwYWRkaW5nOiAwXG4gICAgfVxuICAgIC52aWV3LWFjY291bnQgLmNvbnRlbnQtcGFuZWwgLmNvbnRlbnQtdXRpbGl0aWVzIC5wYWdlLW5hdiB7XG4gICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHhcbiAgICB9XG4gICAgLmRyaXZlLXdyYXBwZXIgLmRyaXZlLWl0ZW0ge1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICBmbG9hdDogbm9uZVxuICAgIH1cbiAgICAuZHJpdmUtd3JhcHBlciAuZHJpdmUtaXRlbS10aHVtYiB7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBoZWlnaHQ6IDU0cHhcbiAgICB9XG4gICAgLmRyaXZlLXdyYXBwZXIgLmRyaXZlLWl0ZW0tdGh1bWIgLmZhIHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMFxuICAgIH1cbiAgICAudmlldy1hY2NvdW50IC5jb250ZW50LXBhbmVsIC5hdmF0YXIgLmZpZ3VyZSBpbWcge1xuICAgICAgICBmbG9hdDogbm9uZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweFxuICAgIH1cbiAgICAudmlldy1hY2NvdW50IC5maWxlLXVwbG9hZGVyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweFxuICAgIH1cbiAgICAudmlldy1hY2NvdW50IC5tYWlsLXN1YmplY3Qge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpc1xuICAgIH1cbiAgICAudmlldy1hY2NvdW50IC5jb250ZW50LXBhbmVsIC5tYWlscy13cmFwcGVyIC5tYWlsLWl0ZW0gLnRpbWUtY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IHN0YXRpY1xuICAgIH1cbiAgICAudmlldy1hY2NvdW50IC5jb250ZW50LXBhbmVsIC5tYWlscy13cmFwcGVyIC5tYWlsLWl0ZW0gLnRpbWUtY29udGFpbmVyIC50aW1lIHtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnRcbiAgICB9XG4gICAgfVxuICAgIFxuICAgIEBtZWRpYSAobWluLXdpZHRoOjc2OHB4KSB7XG4gICAgLnZpZXctYWNjb3VudCAuc2lkZS1iYXIgLnVzZXItaW5mbyB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4XG4gICAgfVxuICAgIC52aWV3LWFjY291bnQgLm1haWwtc3ViamVjdCAuc3ViamVjdCB7XG4gICAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzXG4gICAgfVxuICAgIH1cbiAgICBcbiAgICBAbWVkaWEgKG1pbi13aWR0aDo5OTJweCkge1xuICAgIC52aWV3LWFjY291bnQgLmNvbnRlbnQtcGFuZWwge1xuICAgICAgICBtaW4taGVpZ2h0OiA4MDBweDtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZjNmM2Y3O1xuICAgICAgICBtYXJnaW4tbGVmdDogMjAwcHhcbiAgICB9XG4gICAgLnZpZXctYWNjb3VudCAubWFpbC1zdWJqZWN0IC5zdWJqZWN0IHtcbiAgICAgICAgbWF4LXdpZHRoOiAyODBweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXNcbiAgICB9XG4gICAgLnZpZXctYWNjb3VudCAuc2lkZS1iYXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgbWluLWhlaWdodDogNjAwcHhcbiAgICB9XG4gICAgLnZpZXctYWNjb3VudCAuc2lkZS1iYXIgLnVzZXItaW5mbyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDMwcHhcbiAgICB9XG4gICAgLnZpZXctYWNjb3VudCAuc2lkZS1iYXIgLnVzZXItaW5mbyAuaW1nLXByb2ZpbGUge1xuICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgIGhlaWdodDogMTIwcHhcbiAgICB9XG4gICAgLnZpZXctYWNjb3VudCAuc2lkZS1iYXIgLnNpZGUtbWVudSB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnRcbiAgICB9XG4gICAgLnZpZXctYWNjb3VudCAuc2lkZS1iYXIgLnNpZGUtbWVudSAubmF2IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2tcbiAgICB9XG4gICAgLnZpZXctYWNjb3VudCAuc2lkZS1iYXIgLnNpZGUtbWVudSAubmF2PmxpIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjNmM2Y3O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBcbiAgICB9XG4gICAgLnZpZXctYWNjb3VudCAuc2lkZS1iYXIgLnNpZGUtbWVudSAubmF2PmxpPmEge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgY29sb3I6ICM5NDk5YTM7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4XG4gICAgfVxuICAgIC52aWV3LWFjY291bnQgLnNpZGUtYmFyIC5zaWRlLW1lbnUgLm5hdj5saT5hOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y5ZjlmYlxuICAgIH1cbiAgICAudmlldy1hY2NvdW50IC5zaWRlLWJhciAuc2lkZS1tZW51IC5uYXY+bGkuYWN0aXZlIGEge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjlmOWZiO1xuICAgICAgICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCAjNDBiYWJkO1xuICAgICAgICBib3JkZXItYm90dG9tOiBub25lXG4gICAgfVxuICAgIC50aGVtZS0yIC52aWV3LWFjY291bnQgLnNpZGUtYmFyIC5zaWRlLW1lbnUgLm5hdj5saS5hY3RpdmUgYSB7XG4gICAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogIzZkYmQ2M1xuICAgIH1cbiAgICAudGhlbWUtMyAudmlldy1hY2NvdW50IC5zaWRlLWJhciAuc2lkZS1tZW51IC5uYXY+bGkuYWN0aXZlIGEge1xuICAgICAgICBib3JkZXItcmlnaHQtY29sb3I6ICM0OTdjYjFcbiAgICB9XG4gICAgLnRoZW1lLTQgLnZpZXctYWNjb3VudCAuc2lkZS1iYXIgLnNpZGUtbWVudSAubmF2PmxpLmFjdGl2ZSBhIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjZWM2OTUyXG4gICAgfVxuICAgIC52aWV3LWFjY291bnQgLnNpZGUtYmFyIC5zaWRlLW1lbnUgLm5hdj5saSAuaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrXG4gICAgfVxuICAgIH0iXX0= */"]
      });
      /***/
    },

    /***/
    "BdvD":
    /*!*********************************************************!*\
      !*** ./src/app/secure/dashboard/dashboard.component.ts ***!
      \*********************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function BdvD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent() {
          _classCallCheck(this, DashboardComponent);
        }

        _createClass(DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
        return new (t || DashboardComponent)();
      };

      DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DashboardComponent,
        selectors: [["app-dashboard"]],
        decls: 241,
        vars: 0,
        consts: [["id", "content", 1, "container"], [1, "page-heading"], [1, "media", "clearfix"], [1, "media-left", "pr30"], ["href", "#"], ["src", "https://bootdey.com/img/Content/avatar/avatar7.png", "alt", "...", 1, "media-object", "mw150"], [1, "media-body", "va-m"], [1, "media-heading"], [1, "lead"], [1, "media-links"], [1, "list-inline", "list-unstyled"], ["href", "#", "title", "facebook link"], [1, "fa", "fa-facebook-square", "fs35", "text-primary"], ["href", "#", "title", "twitter link"], [1, "fa", "fa-twitter-square", "fs35", "text-info"], ["href", "#", "title", "google plus link"], [1, "fa", "fa-google-plus-square", "fs35", "text-danger"], [1, "hidden"], ["href", "#", "title", "behance link"], [1, "fa", "fa-behance-square", "fs35", "text-primary"], ["href", "#", "title", "pinterest link"], [1, "fa", "fa-pinterest-square", "fs35", "text-danger-light"], ["href", "#", "title", "linkedin link"], [1, "fa", "fa-linkedin-square", "fs35", "text-info"], ["href", "#", "title", "github link"], [1, "fa", "fa-github-square", "fs35", "text-dark"], [1, ""], ["href", "#", "title", "phone link"], [1, "fa", "fa-phone-square", "fs35", "text-system"], ["href", "#", "title", "email link"], [1, "fa", "fa-envelope-square", "fs35", "text-muted"], ["href", "#", "title", "external link"], [1, "fa", "fa-external-link-square", "fs35", "text-muted"], [1, "row"], [1, "col-md-4"], [1, "panel"], [1, "panel-heading"], [1, "panel-icon"], [1, "fa", "fa-star"], [1, "panel-title"], [1, "panel-body", "pn"], [1, "table", "mbn", "tc-icon-1", "tc-med-2", "tc-bold-last"], [1, "mw30"], [1, "fa", "fa-desktop", "text-warning"], [1, "fa", "fa-caret-up", "text-info", "pr10"], [1, "fa", "fa-microphone", "text-primary"], [1, "fa", "fa-caret-down", "text-danger", "pr10"], [1, "fa", "fa-newspaper-o", "text-info"], [1, "fa", "fa-trophy"], [1, "panel-body", "pb5"], [1, "label", "label-warning", "mr5", "mb10", "ib", "lh15"], [1, "label", "label-primary", "mr5", "mb10", "ib", "lh15"], [1, "label", "label-info", "mr5", "mb10", "ib", "lh15"], [1, "label", "label-success", "mr5", "mb10", "ib", "lh15"], [1, "label", "label-alert", "mr5", "mb10", "ib", "lh15"], [1, "label", "label-system", "mr5", "mb10", "ib", "lh15"], [1, "fa", "fa-pencil"], [1, "text-muted"], [1, "short", "br-lighter"], [1, "text-muted", "pb10"], [1, "col-md-8"], [1, "tab-block"], [1, "nav", "nav-tabs"], [1, "active"], ["href", "#tab1", "data-toggle", "tab"], [1, "tab-content", "p30", 2, "height", "730px"], ["id", "tab1", 1, "tab-pane", "active"], [1, "media"], ["href", "#", 1, "pull-left"], ["src", "https://bootdey.com/img/Content/avatar/avatar1.png", "alt", "...", 1, "media-object", "mn", "thumbnail", "mw50"], [1, "media-body"], [1, "media-heading", "mb20"], ["src", "https://bootdey.com/img/Content/avatar/avatar6.png", 1, "mw140", "mr25", "mb20"], ["src", "https://bootdey.com/img/Content/avatar/avatar8.png", 1, "mw140", "mr25", "mb20"], ["src", "https://bootdey.com/img/Content/avatar/avatar7.png", 1, "mw140", "mb20"], [1, "text-light", "fs12", "mr10"], [1, "fa", "fa-thumbs-o-up", "text-primary", "mr5"], [1, "fa", "fa-share", "text-primary", "mr5"], [1, "fa", "fa-floppy-o", "text-primary", "mr5"], [1, "fa", "fa-comment", "text-primary", "mr5"], [1, "media", "mt25"], ["src", "https://bootdey.com/img/Content/avatar/avatar6.png", "alt", "...", 1, "media-object", "mn", "thumbnail", "thumbnail-sm", "rounded", "mw40"], [1, "media-body", "mb5"], [1, "media-heading", "mbn"], [1, "media", "pb10"], ["src", "https://bootdey.com/img/Content/avatar/avatar1.png", "alt", "...", 1, "media-object", "mn", "thumbnail", "thumbnail-sm", "rounded", "mw40"], [1, "media", "mtn"], ["src", "https://bootdey.com/img/Content/avatar/avatar2.png", "alt", "...", 1, "media-object", "mn", "thumbnail", "thumbnail-sm", "rounded", "mw40"], ["src", "https://bootdey.com/img/Content/avatar/avatar2.png", "alt", "...", 1, "media-object", "thumbnail", "mw50"], ["src", "https://bootdey.com/img/Content/avatar/avatar2.png", 1, "mw140", "mr25", "mb20"], ["src", "https://bootdey.com/img/Content/avatar/avatar3.png", 1, "mw140", "mr25", "mb20"], ["src", "https://bootdey.com/img/Content/avatar/avatar4.png", 1, "mw140", "mb20"], ["id", "tab2", 1, "tab-pane"], ["id", "tab3", 1, "tab-pane"], ["id", "tab4", 1, "tab-pane"]],
        template: function DashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Michael Halls ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " - Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Lorem ipsum dolor sit amet ctetur adicing elit, sed do eiusmod tempor incididunt");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "span", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "span", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " User Popularity");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "table", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "tr", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "th", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Revenue");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "span", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Television");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "$855,913");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "span", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Radio");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "i", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "$349,712");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "span", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Newspaper");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "i", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "$1,259,742");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "i", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " My Skills");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Default");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "span", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Warning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Danger");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "span", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Ui Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "span", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "span", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "i", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "span", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "About Me");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Experience");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Facebook Internship");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "p", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " University of Missouri, Columbia ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " Student Health Center, June 2010 - 2012 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "hr", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Education");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Bachelor of Science, PhD");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "p", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " University of Missouri, Columbia ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " Student Health Center, June 2010 through Aug 2011 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "hr", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Accomplishments");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Successful Business");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "p", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, " University of Missouri, Columbia ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, " Student Health Center, June 2010 through Aug 2011 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "ul", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "li", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "a", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Activity");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "a", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Social");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "a", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Media");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "a", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "img", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "h5", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Simon Rivers Posted ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, " - 3 hours ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "img", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "img", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "img", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "span", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "span", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, " Like ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "span", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "span", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, " Share ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "span", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "span", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, " Save ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "span", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "span", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, " Comment ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "a", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "img", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "h5", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "Simon Rivers Posted ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, " - 3 hours ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, " Omg so freaking sweet dude.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "a", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "img", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "h5", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Jessica Wong ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, " - 3 hours ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Omgosh I'm in love");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "a", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "img", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "h5", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Jessica Wong ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, " - 3 hours ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Omgosh I'm in love");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "a", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "img", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "h5", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "Simon Rivers Posted ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, " - 3 hours ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "img", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "img", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "img", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "span", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "span", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, " Like ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "span", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](230, "span", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, " Share ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "span", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "span", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, " Save ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "span", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "span", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, " Comment ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](238, "div", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "div", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "div", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["@charset \"UTF-8\";\n.fs35[_ngcontent-%COMP%] {\n  font-size: 35px !important;\n}\n.mw50[_ngcontent-%COMP%] {\n  max-width: 50px !important;\n}\n.mn[_ngcontent-%COMP%] {\n  margin: 0 !important;\n}\n.mw140[_ngcontent-%COMP%] {\n  max-width: 140px !important;\n}\n.mb20[_ngcontent-%COMP%] {\n  margin-bottom: 20px !important;\n}\n.mr25[_ngcontent-%COMP%] {\n  margin-right: 25px !important;\n}\n.mw40[_ngcontent-%COMP%] {\n  max-width: 40px !important;\n}\n.p30[_ngcontent-%COMP%] {\n  padding: 30px !important;\n}\n.page-heading[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 30px 40px;\n  margin: 0px 0px 25px;\n  border-bottom: 1px solid #d9d9d9;\n  background-color: #f2f2f2;\n}\n.page-tabs[_ngcontent-%COMP%] {\n  margin: -25px -20px 30px;\n  padding: 15px 25px 0;\n  border-bottom: 1px solid #ddd;\n  background: #e9e9e9;\n}\n.page-tabs[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%] {\n  border-bottom: 0;\n}\n.page-tabs[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: #AAA;\n  padding: 10px 20px;\n}\n.page-tabs[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%], .page-tabs[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:focus    > a[_ngcontent-%COMP%] {\n  border-color: #ddd;\n}\n.page-tabs[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .page-tabs[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .page-tabs[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\n  color: #666;\n  font-weight: 600;\n  background-color: #eee;\n  border-bottom-color: transparent;\n}\n@media (max-width: 800px) {\n  .page-tabs[_ngcontent-%COMP%] {\n    padding: 25px 20px 0;\n  }\n\n  .page-tabs[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    float: none;\n    margin-bottom: 5px;\n  }\n\n  .page-tabs[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child, .page-tabs[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]:last-child {\n    margin-bottom: 10px;\n  }\n\n  .page-tabs[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .page-tabs[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\n    border: 1px solid #DDD;\n  }\n\n  .page-tabs[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .page-tabs[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .page-tabs[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\n    border-bottom-color: #ddd;\n  }\n}\n.panel[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 27px;\n  background-color: #ffffff;\n  border-radius: 3px;\n}\n.panel.panel-transparent[_ngcontent-%COMP%] {\n  background: none;\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n.panel.panel-border[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: 0;\n}\n.panel.panel-border.top[_ngcontent-%COMP%] {\n  border-top-width: 5px;\n}\n.panel.panel-border.right[_ngcontent-%COMP%] {\n  border-right-width: 5px;\n}\n.panel.panel-border.bottom[_ngcontent-%COMP%] {\n  border-bottom-width: 5px;\n}\n.panel.panel-border.left[_ngcontent-%COMP%] {\n  border-left-width: 5px;\n}\n.panel.panel-border[_ngcontent-%COMP%]    > .panel-heading[_ngcontent-%COMP%] {\n  background-color: #fafafa;\n  border-color: #e2e2e2;\n  border-top: 1px solid transparent;\n}\n.panel.panel-border[_ngcontent-%COMP%]    > .panel-heading[_ngcontent-%COMP%]    > .panel-title[_ngcontent-%COMP%] {\n  color: #999999;\n}\n.panel.panel-border.panel-default[_ngcontent-%COMP%] {\n  border-color: #DDD;\n}\n.panel.panel-border.panel-default[_ngcontent-%COMP%]    > .panel-heading[_ngcontent-%COMP%] {\n  border-top: 1px solid transparent;\n}\n.panel-menu[_ngcontent-%COMP%] {\n  background-color: #fafafa;\n  padding: 12px;\n  border: 1px solid #e2e2e2;\n}\n.panel-menu.dark[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n}\n.panel-body[_ngcontent-%COMP%]   .panel-menu[_ngcontent-%COMP%] {\n  border-left: 0;\n  border-right: 0;\n}\n.panel-heading[_ngcontent-%COMP%]    + .panel-menu[_ngcontent-%COMP%], .panel-menu[_ngcontent-%COMP%]    + .panel-body[_ngcontent-%COMP%], .panel-body[_ngcontent-%COMP%]    + .panel-menu[_ngcontent-%COMP%], .panel-body[_ngcontent-%COMP%]    + .panel-body[_ngcontent-%COMP%] {\n  border-top: 0;\n}\n.panel-body[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 15px;\n  border: 1px solid #e2e2e2;\n}\n.panel-body[_ngcontent-%COMP%]    + .panel-footer[_ngcontent-%COMP%] {\n  border-top: 0;\n}\n.panel-heading[_ngcontent-%COMP%] {\n  position: relative;\n  height: 52px;\n  line-height: 49px;\n  letter-spacing: 0.2px;\n  color: #999999;\n  font-size: 15px;\n  font-weight: 400;\n  padding: 0 8px;\n  background: #fafafa;\n  border: 1px solid #e2e2e2;\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n}\n.panel-heading[_ngcontent-%COMP%]    + .panel-body[_ngcontent-%COMP%] {\n  border-top: 0;\n}\n.panel-heading[_ngcontent-%COMP%]    > .dropdown[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.panel-heading[_ngcontent-%COMP%]   .widget-menu[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%] {\n  margin-top: -3px;\n}\n.panel-heading[_ngcontent-%COMP%]   .widget-menu[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  font-size: 11px;\n  height: 27px;\n  padding: 2px 10px;\n  border-radius: 1px;\n}\n.panel-heading[_ngcontent-%COMP%]   .widget-menu[_ngcontent-%COMP%]   .form-control.input-sm[_ngcontent-%COMP%] {\n  margin-top: 9px;\n  height: 22px;\n}\n.panel-heading[_ngcontent-%COMP%]   .widget-menu[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%] {\n  margin-top: 11px;\n  margin-bottom: 0;\n}\n.panel-heading[_ngcontent-%COMP%]   .widget-menu[_ngcontent-%COMP%]   .progress-bar-lg[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.panel-heading[_ngcontent-%COMP%]   .widget-menu[_ngcontent-%COMP%]   .progress-bar-sm[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n.panel-heading[_ngcontent-%COMP%]   .widget-menu[_ngcontent-%COMP%]   .progress-bar-xs[_ngcontent-%COMP%] {\n  margin-top: 17px;\n}\n.panel-icon[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n.panel-title[_ngcontent-%COMP%] {\n  padding-left: 6px;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.panel-title[_ngcontent-%COMP%]    > .fa[_ngcontent-%COMP%], .panel-title[_ngcontent-%COMP%]    > .glyphicon[_ngcontent-%COMP%], .panel-title[_ngcontent-%COMP%]    > .glyphicons[_ngcontent-%COMP%], .panel-title[_ngcontent-%COMP%]    > .imoon[_ngcontent-%COMP%] {\n  top: 2px;\n  min-width: 22px;\n  color: inherit;\n  font-size: 14px;\n}\n.panel-title[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.panel-footer[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n  background-color: #fafafa;\n  border: 1px solid #e2e2e2;\n  border-bottom-right-radius: 2px;\n  border-bottom-left-radius: 2px;\n}\n.panel[_ngcontent-%COMP%]    > .list-group[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.panel[_ngcontent-%COMP%]    > .list-group[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n.panel[_ngcontent-%COMP%]    > .list-group[_ngcontent-%COMP%]:first-child   .list-group-item[_ngcontent-%COMP%]:first-child {\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n}\n.panel[_ngcontent-%COMP%]    > .list-group[_ngcontent-%COMP%]:last-child   .list-group-item[_ngcontent-%COMP%]:last-child {\n  border-bottom-right-radius: 2px;\n  border-bottom-left-radius: 2px;\n}\n.panel-heading[_ngcontent-%COMP%]    + .list-group[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:first-child {\n  border-top-width: 0;\n}\n.panel-body[_ngcontent-%COMP%]    + .list-group[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:first-child {\n  border-top-width: 0;\n}\n.list-group[_ngcontent-%COMP%]    + .panel-footer[_ngcontent-%COMP%] {\n  border-top-width: 0;\n}\n.panel[_ngcontent-%COMP%]    > .table[_ngcontent-%COMP%], .panel[_ngcontent-%COMP%]    > .table-responsive[_ngcontent-%COMP%]    > .table[_ngcontent-%COMP%], .panel[_ngcontent-%COMP%]    > .panel-collapse[_ngcontent-%COMP%]    > .table[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.panel[_ngcontent-%COMP%]    > .table[_ngcontent-%COMP%]:first-child, .panel[_ngcontent-%COMP%]    > .table-responsive[_ngcontent-%COMP%]:first-child    > .table[_ngcontent-%COMP%]:first-child {\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n}\n.panel[_ngcontent-%COMP%]    > .table[_ngcontent-%COMP%]:first-child    > thead[_ngcontent-%COMP%]:first-child    > tr[_ngcontent-%COMP%]:first-child   td[_ngcontent-%COMP%]:first-child, .panel[_ngcontent-%COMP%]    > .table-responsive[_ngcontent-%COMP%]:first-child    > .table[_ngcontent-%COMP%]:first-child    > thead[_ngcontent-%COMP%]:first-child    > tr[_ngcontent-%COMP%]:first-child   td[_ngcontent-%COMP%]:first-child, .panel[_ngcontent-%COMP%]    > .table[_ngcontent-%COMP%]:first-child    > tbody[_ngcontent-%COMP%]:first-child    > tr[_ngcontent-%COMP%]:first-child   td[_ngcontent-%COMP%]:first-child, .panel[_ngcontent-%COMP%]    > .table-responsive[_ngcontent-%COMP%]:first-child    > .table[_ngcontent-%COMP%]:first-child    > tbody[_ngcontent-%COMP%]:first-child    > tr[_ngcontent-%COMP%]:first-child   td[_ngcontent-%COMP%]:first-child, .panel[_ngcontent-%COMP%]    > .table[_ngcontent-%COMP%]:first-child    > thead[_ngcontent-%COMP%]:first-child    > tr[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%]:first-child, .panel[_ngcontent-%COMP%]    > .table-responsive[_ngcontent-%COMP%]:first-child    > .table[_ngcontent-%COMP%]:first-child    > thead[_ngcontent-%COMP%]:first-child    > tr[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%]:first-child, .panel[_ngcontent-%COMP%]    > .table[_ngcontent-%COMP%]:first-child    > tbody[_ngcontent-%COMP%]:first-child    > tr[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%]:first-child, .panel[_ngcontent-%COMP%]    > .table-responsive[_ngcontent-%COMP%]:first-child    > .table[_ngcontent-%COMP%]:first-child    > tbody[_ngcontent-%COMP%]:first-child    > tr[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 2px;\n}\n.panel[_ngcontent-%COMP%]    > .table[_ngcontent-%COMP%]:first-child    > thead[_ngcontent-%COMP%]:first-child    > tr[_ngcontent-%COMP%]:first-child   td[_ngcontent-%COMP%]:last-child, .panel[_ngcontent-%COMP%]    > .table-responsive[_ngcontent-%COMP%]:first-child    > .table[_ngcontent-%COMP%]:first-child    > thead[_ngcontent-%COMP%]:first-child    > tr[_ngcontent-%COMP%]:first-child   td[_ngcontent-%COMP%]:last-child, .panel[_ngcontent-%COMP%]    > .table[_ngcontent-%COMP%]:first-child    > tbody[_ngcontent-%COMP%]:first-child    > tr[_ngcontent-%COMP%]:first-child   td[_ngcontent-%COMP%]:last-child, .panel[_ngcontent-%COMP%]    > .table-responsive[_ngcontent-%COMP%]:first-child    > .table[_ngcontent-%COMP%]:first-child    > tbody[_ngcontent-%COMP%]:first-child    > tr[_ngcontent-%COMP%]:first-child   td[_ngcontent-%COMP%]:last-child, .panel[_ngcontent-%COMP%]    > .table[_ngcontent-%COMP%]:first-child    > thead[_ngcontent-%COMP%]:first-child    > tr[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%]:last-child, .panel[_ngcontent-%COMP%]    > .table-responsive[_ngcontent-%COMP%]:first-child    > .table[_ngcontent-%COMP%]:first-child    > thead[_ngcontent-%COMP%]:first-child    > tr[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%]:last-child, .panel[_ngcontent-%COMP%]    > .table[_ngcontent-%COMP%]:first-child    > tbody[_ngcontent-%COMP%]:first-child    > tr[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%]:last-child, .panel[_ngcontent-%COMP%]    > .table-responsive[_ngcontent-%COMP%]:first-child    > .table[_ngcontent-%COMP%]:first-child    > tbody[_ngcontent-%COMP%]:first-child    > tr[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 2px;\n}\n.panel[_ngcontent-%COMP%]    > .table[_ngcontent-%COMP%]:last-child, .panel[_ngcontent-%COMP%]    > .table-responsive[_ngcontent-%COMP%]:last-child    > .table[_ngcontent-%COMP%]:last-child {\n  border-bottom-right-radius: 2px;\n  border-bottom-left-radius: 2px;\n}\n.panel[_ngcontent-%COMP%]    > .table[_ngcontent-%COMP%]:last-child    > tbody[_ngcontent-%COMP%]:last-child    > tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]:first-child, .panel[_ngcontent-%COMP%]    > .table-responsive[_ngcontent-%COMP%]:last-child    > .table[_ngcontent-%COMP%]:last-child    > tbody[_ngcontent-%COMP%]:last-child    > tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]:first-child, .panel[_ngcontent-%COMP%]    > .table[_ngcontent-%COMP%]:last-child    > tfoot[_ngcontent-%COMP%]:last-child    > tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]:first-child, .panel[_ngcontent-%COMP%]    > .table-responsive[_ngcontent-%COMP%]:last-child    > .table[_ngcontent-%COMP%]:last-child    > tfoot[_ngcontent-%COMP%]:last-child    > tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]:first-child, .panel[_ngcontent-%COMP%]    > .table[_ngcontent-%COMP%]:last-child    > tbody[_ngcontent-%COMP%]:last-child    > tr[_ngcontent-%COMP%]:last-child   th[_ngcontent-%COMP%]:first-child, .panel[_ngcontent-%COMP%]    > .table-responsive[_ngcontent-%COMP%]:last-child    > .table[_ngcontent-%COMP%]:last-child    > tbody[_ngcontent-%COMP%]:last-child    > tr[_ngcontent-%COMP%]:last-child   th[_ngcontent-%COMP%]:first-child, .panel[_ngcontent-%COMP%]    > .table[_ngcontent-%COMP%]:last-child    > tfoot[_ngcontent-%COMP%]:last-child    > tr[_ngcontent-%COMP%]:last-child   th[_ngcontent-%COMP%]:first-child, .panel[_ngcontent-%COMP%]    > .table-responsive[_ngcontent-%COMP%]:last-child    > .table[_ngcontent-%COMP%]:last-child    > tfoot[_ngcontent-%COMP%]:last-child    > tr[_ngcontent-%COMP%]:last-child   th[_ngcontent-%COMP%]:first-child {\n  border-bottom-left-radius: 2px;\n}\n.panel[_ngcontent-%COMP%]    > .table[_ngcontent-%COMP%]:last-child    > tbody[_ngcontent-%COMP%]:last-child    > tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]:last-child, .panel[_ngcontent-%COMP%]    > .table-responsive[_ngcontent-%COMP%]:last-child    > .table[_ngcontent-%COMP%]:last-child    > tbody[_ngcontent-%COMP%]:last-child    > tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]:last-child, .panel[_ngcontent-%COMP%]    > .table[_ngcontent-%COMP%]:last-child    > tfoot[_ngcontent-%COMP%]:last-child    > tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]:last-child, .panel[_ngcontent-%COMP%]    > .table-responsive[_ngcontent-%COMP%]:last-child    > .table[_ngcontent-%COMP%]:last-child    > tfoot[_ngcontent-%COMP%]:last-child    > tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]:last-child, .panel[_ngcontent-%COMP%]    > .table[_ngcontent-%COMP%]:last-child    > tbody[_ngcontent-%COMP%]:last-child    > tr[_ngcontent-%COMP%]:last-child   th[_ngcontent-%COMP%]:last-child, .panel[_ngcontent-%COMP%]    > .table-responsive[_ngcontent-%COMP%]:last-child    > .table[_ngcontent-%COMP%]:last-child    > tbody[_ngcontent-%COMP%]:last-child    > tr[_ngcontent-%COMP%]:last-child   th[_ngcontent-%COMP%]:last-child, .panel[_ngcontent-%COMP%]    > .table[_ngcontent-%COMP%]:last-child    > tfoot[_ngcontent-%COMP%]:last-child    > tr[_ngcontent-%COMP%]:last-child   th[_ngcontent-%COMP%]:last-child, .panel[_ngcontent-%COMP%]    > .table-responsive[_ngcontent-%COMP%]:last-child    > .table[_ngcontent-%COMP%]:last-child    > tfoot[_ngcontent-%COMP%]:last-child    > tr[_ngcontent-%COMP%]:last-child   th[_ngcontent-%COMP%]:last-child {\n  border-bottom-right-radius: 2px;\n}\n.panel[_ngcontent-%COMP%]    > .panel-body[_ngcontent-%COMP%]    + .table[_ngcontent-%COMP%], .panel[_ngcontent-%COMP%]    > .panel-body[_ngcontent-%COMP%]    + .table-responsive[_ngcontent-%COMP%] {\n  border-top: 1px solid #eeeeee;\n}\n.panel[_ngcontent-%COMP%]    > .table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]:first-child    > tr[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%], .panel[_ngcontent-%COMP%]    > .table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]:first-child    > tr[_ngcontent-%COMP%]:first-child   td[_ngcontent-%COMP%] {\n  border-top: 0;\n}\n.panel[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%], .panel[_ngcontent-%COMP%]    > .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%] {\n  border: 0;\n}\n.panel[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child, .panel[_ngcontent-%COMP%]    > .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child, .panel[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child, .panel[_ngcontent-%COMP%]    > .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child, .panel[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tfoot[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child, .panel[_ngcontent-%COMP%]    > .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tfoot[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child, .panel[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%]:first-child, .panel[_ngcontent-%COMP%]    > .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%]:first-child, .panel[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%]:first-child, .panel[_ngcontent-%COMP%]    > .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%]:first-child, .panel[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tfoot[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%]:first-child, .panel[_ngcontent-%COMP%]    > .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tfoot[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%]:first-child {\n  border-left: 0;\n}\n.panel[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child, .panel[_ngcontent-%COMP%]    > .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child, .panel[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child, .panel[_ngcontent-%COMP%]    > .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child, .panel[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tfoot[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child, .panel[_ngcontent-%COMP%]    > .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tfoot[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child, .panel[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%]:last-child, .panel[_ngcontent-%COMP%]    > .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%]:last-child, .panel[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%]:last-child, .panel[_ngcontent-%COMP%]    > .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%]:last-child, .panel[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tfoot[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%]:last-child, .panel[_ngcontent-%COMP%]    > .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tfoot[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%]:last-child {\n  border-right: 0;\n}\n.panel[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:first-child    > td[_ngcontent-%COMP%], .panel[_ngcontent-%COMP%]    > .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:first-child    > td[_ngcontent-%COMP%], .panel[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:first-child    > td[_ngcontent-%COMP%], .panel[_ngcontent-%COMP%]    > .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:first-child    > td[_ngcontent-%COMP%], .panel[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:first-child    > th[_ngcontent-%COMP%], .panel[_ngcontent-%COMP%]    > .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:first-child    > th[_ngcontent-%COMP%], .panel[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:first-child    > th[_ngcontent-%COMP%], .panel[_ngcontent-%COMP%]    > .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:first-child    > th[_ngcontent-%COMP%] {\n  border-bottom: 0;\n}\n.panel[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:last-child    > td[_ngcontent-%COMP%], .panel[_ngcontent-%COMP%]    > .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:last-child    > td[_ngcontent-%COMP%], .panel[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tfoot[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:last-child    > td[_ngcontent-%COMP%], .panel[_ngcontent-%COMP%]    > .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tfoot[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:last-child    > td[_ngcontent-%COMP%], .panel[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:last-child    > th[_ngcontent-%COMP%], .panel[_ngcontent-%COMP%]    > .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:last-child    > th[_ngcontent-%COMP%], .panel[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tfoot[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:last-child    > th[_ngcontent-%COMP%], .panel[_ngcontent-%COMP%]    > .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tfoot[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:last-child    > th[_ngcontent-%COMP%] {\n  border-bottom: 0;\n}\n.panel[_ngcontent-%COMP%]    > .table-responsive[_ngcontent-%COMP%] {\n  border: 0;\n  margin-bottom: 0;\n}\n.panel-group[_ngcontent-%COMP%] {\n  margin-bottom: 19px;\n}\n.panel-group[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n.panel-group[_ngcontent-%COMP%]   .panel-heading[_ngcontent-%COMP%], .panel-group[_ngcontent-%COMP%]   .panel-heading[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  width: 100%;\n}\n.panel-group.accordion-lg[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]    + .panel[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.panel-group.accordion-lg[_ngcontent-%COMP%]   .panel-heading[_ngcontent-%COMP%] {\n  font-size: 14px;\n  height: 54px;\n  line-height: 52px;\n}\n.panel-group[_ngcontent-%COMP%]   .accordion-icon[_ngcontent-%COMP%] {\n  padding-left: 35px;\n}\n.panel-group[_ngcontent-%COMP%]   .accordion-icon[_ngcontent-%COMP%]:after {\n  position: absolute;\n  content: \"\uF068\";\n  font-family: \"FontAwesome\";\n  font-size: 12px;\n  font-style: normal;\n  font-weight: normal;\n  -webkit-font-smoothing: antialiased;\n  color: #555;\n  left: 10px;\n  top: 0;\n}\n.panel-group[_ngcontent-%COMP%]   .accordion-icon.collapsed[_ngcontent-%COMP%]:after {\n  content: \"\uF067\";\n}\n.panel-group[_ngcontent-%COMP%]   .accordion-icon.icon-right[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  padding-right: 30px;\n}\n.panel-group[_ngcontent-%COMP%]   .accordion-icon.icon-right[_ngcontent-%COMP%]:after {\n  left: auto;\n  right: 5px;\n}\n.panel-group[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  border-radius: 3px;\n}\n.panel-group[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]    + .panel[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n.panel-group[_ngcontent-%COMP%]   .panel-heading[_ngcontent-%COMP%]    + .panel-collapse[_ngcontent-%COMP%]    > .panel-body[_ngcontent-%COMP%] {\n  border-top: 0;\n}\n.panel-group[_ngcontent-%COMP%]   .panel-footer[_ngcontent-%COMP%] {\n  border-top: 0;\n}\n.panel-group[_ngcontent-%COMP%]   .panel-footer[_ngcontent-%COMP%]    + .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #eeeeee;\n}\n.media[_ngcontent-%COMP%] {\n  color: #999999;\n  font-weight: 600;\n  margin-top: 15px;\n}\n.media[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n.media-right[_ngcontent-%COMP%], .media[_ngcontent-%COMP%]    > .pull-right[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n.media-left[_ngcontent-%COMP%], .media[_ngcontent-%COMP%]    > .pull-left[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\n.media-left[_ngcontent-%COMP%], .media-right[_ngcontent-%COMP%], .media-body[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: top;\n}\n.media-middle[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.media-bottom[_ngcontent-%COMP%] {\n  vertical-align: bottom;\n}\n.media-heading[_ngcontent-%COMP%] {\n  color: #555555;\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.media-list[_ngcontent-%COMP%] {\n  padding-left: 0;\n  list-style: none;\n}\n\n\n.tab-block[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.tab-block[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%] {\n  overflow: auto;\n  position: relative;\n  z-index: 10;\n  min-height: 125px;\n  padding: 16px 12px;\n  border: 1px solid #e2e2e2;\n  background-color: #FFF;\n}\n\n.tab-block[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%] {\n  position: relative;\n  border: 0;\n}\n\n.tab-block[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  float: left;\n  margin-bottom: -1px;\n}\n\n.tab-block[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  z-index: 9;\n  position: relative;\n  color: #AAA;\n  font-size: 14px;\n  font-weight: 400;\n  padding: 14px 20px;\n  margin-right: -1px;\n  border-color: #e2e2e2;\n  border-radius: 0;\n  background: #fafafa;\n}\n.tab-block[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:first-child    > a[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n\n.tab-block[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  background-color: #f4f4f4;\n}\n\n.tab-block[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .tab-block[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .tab-block[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\n  cursor: default;\n  position: relative;\n  z-index: 12;\n  color: #555555;\n  background: #FFF;\n  border-color: #e2e2e2;\n  border-bottom: 1px solid #FFF;\n}\n\n.tabs-left[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.tabs-left[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  float: none;\n  margin: 0 -1px -1px 0;\n}\n\n.tabs-left[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  color: #777;\n  font-weight: 600;\n  border: 1px solid transparent;\n  border-color: #DDD;\n  background: #fafafa;\n}\n\n\n.tab-block[_ngcontent-%COMP%]   .tabs-left[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .tab-block[_ngcontent-%COMP%]   .tabs-left[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .tab-block[_ngcontent-%COMP%]   .tabs-left[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\n  color: #555;\n  border-color: #DDD #FFF #DDD #DDD;\n  cursor: default;\n  position: relative;\n  z-index: 12;\n  background: #FFF;\n}\n\n.tabs-right[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.tabs-right[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  float: none;\n  margin: 0 0 -1px -1px;\n}\n\n.tabs-right[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  color: #777;\n  font-weight: 600;\n  border: 1px solid transparent;\n  border-color: #DDD;\n  background: #fafafa;\n}\n\n\n.tab-block[_ngcontent-%COMP%]   .tabs-right[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .tab-block[_ngcontent-%COMP%]   .tabs-right[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .tab-block[_ngcontent-%COMP%]   .tabs-right[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\n  color: #555;\n  border-color: #DDD #DDD #DDD #FFF;\n  cursor: default;\n  position: relative;\n  z-index: 12;\n  background: #FFF;\n}\n\n.tabs-below[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.tabs-below[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  float: left;\n  margin-top: -1px;\n}\n\n.tabs-below[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 9;\n  margin-right: -1px;\n  padding: 11px 16px;\n  color: #777;\n  font-weight: 600;\n  border: 1px solid #DDD;\n  background: #fafafa;\n}\n\n\n.tab-block[_ngcontent-%COMP%]   .tabs-below[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .tab-block[_ngcontent-%COMP%]   .tabs-below[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .tab-block[_ngcontent-%COMP%]   .tabs-below[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\n  cursor: default;\n  position: relative;\n  z-index: 12;\n  color: #555555;\n  background: #FFF;\n  border-color: #DDD;\n  border-top: 1px solid #FFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFDWjtFQUNJLDBCQUFBO0FBQ1I7QUFFSTtFQUNJLDBCQUFBO0FBQ1I7QUFDSTtFQUNJLG9CQUFBO0FBRVI7QUFBSTtFQUNJLDJCQUFBO0FBR1I7QUFESTtFQUNJLDhCQUFBO0FBSVI7QUFGSTtFQUNJLDZCQUFBO0FBS1I7QUFGSTtFQUNJLDBCQUFBO0FBS1I7QUFGSTtFQUNJLHdCQUFBO0FBS1I7QUFGSTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7QUFLTjtBQUhJO0VBQ0Usd0JBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFNTjtBQUpJO0VBQ0UsZ0JBQUE7QUFPTjtBQUxJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBUU47QUFOSTs7RUFFRSxrQkFBQTtBQVNOO0FBUEk7OztFQUdFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7QUFVTjtBQVJJO0VBQ0U7SUFDRSxvQkFBQTtFQVdOOztFQVRJO0lBQ0UsV0FBQTtJQUNBLGtCQUFBO0VBWU47O0VBVkk7O0lBRUUsbUJBQUE7RUFhTjs7RUFYSTs7SUFFRSxzQkFBQTtFQWNOOztFQVpJOzs7SUFHRSx5QkFBQTtFQWVOO0FBQ0Y7QUFiSTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBZU47QUFiSTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBZ0JOO0FBZEk7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUFpQk47QUFmSTtFQUNFLHFCQUFBO0FBa0JOO0FBaEJJO0VBQ0UsdUJBQUE7QUFtQk47QUFqQkk7RUFDRSx3QkFBQTtBQW9CTjtBQWxCSTtFQUNFLHNCQUFBO0FBcUJOO0FBbkJJO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlDQUFBO0FBc0JOO0FBcEJJO0VBQ0UsY0FBQTtBQXVCTjtBQXJCSTtFQUNFLGtCQUFBO0FBd0JOO0FBdEJJO0VBQ0UsaUNBQUE7QUF5Qk47QUF2Qkk7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQTBCTjtBQXhCSTtFQUNFLHlCQUFBO0FBMkJOO0FBekJJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUE0Qk47QUExQkk7Ozs7RUFJRSxhQUFBO0FBNkJOO0FBM0JJO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUE4Qk47QUE1Qkk7RUFDRSxhQUFBO0FBK0JOO0FBN0JJO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7QUFnQ047QUE5Qkk7RUFDRSxhQUFBO0FBaUNOO0FBL0JJO0VBQ0UsY0FBQTtBQWtDTjtBQWhDSTtFQUNFLGdCQUFBO0FBbUNOO0FBakNJO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQW9DTjtBQWxDSTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBcUNOO0FBbkNJO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQXNDTjtBQXBDSTtFQUNFLGdCQUFBO0FBdUNOO0FBckNJO0VBQ0UsZ0JBQUE7QUF3Q047QUF0Q0k7RUFDRSxnQkFBQTtBQXlDTjtBQXZDSTtFQUNFLGlCQUFBO0FBMENOO0FBeENJO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUEyQ047QUF6Q0k7Ozs7RUFJRSxRQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBNENOO0FBMUNJO0VBQ0UsY0FBQTtBQTZDTjtBQTNDSTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7QUE4Q047QUE1Q0k7RUFDRSxnQkFBQTtBQStDTjtBQTdDSTtFQUNFLGdCQUFBO0FBZ0ROO0FBOUNJO0VBQ0UsNEJBQUE7RUFDQSwyQkFBQTtBQWlETjtBQS9DSTtFQUNFLCtCQUFBO0VBQ0EsOEJBQUE7QUFrRE47QUFoREk7RUFDRSxtQkFBQTtBQW1ETjtBQWpESTtFQUNFLG1CQUFBO0FBb0ROO0FBbERJO0VBQ0UsbUJBQUE7QUFxRE47QUFuREk7OztFQUdFLGdCQUFBO0FBc0ROO0FBcERJOztFQUVFLDRCQUFBO0VBQ0EsMkJBQUE7QUF1RE47QUFyREk7Ozs7Ozs7O0VBUUUsMkJBQUE7QUF3RE47QUF0REk7Ozs7Ozs7O0VBUUUsNEJBQUE7QUF5RE47QUF2REk7O0VBRUUsK0JBQUE7RUFDQSw4QkFBQTtBQTBETjtBQXhESTs7Ozs7Ozs7RUFRRSw4QkFBQTtBQTJETjtBQXpESTs7Ozs7Ozs7RUFRRSwrQkFBQTtBQTRETjtBQTFESTs7RUFFRSw2QkFBQTtBQTZETjtBQTNESTs7RUFFRSxhQUFBO0FBOEROO0FBNURJOztFQUVFLFNBQUE7QUErRE47QUE3REk7Ozs7Ozs7Ozs7OztFQVlFLGNBQUE7QUFnRU47QUE5REk7Ozs7Ozs7Ozs7OztFQVlFLGVBQUE7QUFpRU47QUEvREk7Ozs7Ozs7O0VBUUUsZ0JBQUE7QUFrRU47QUFoRUk7Ozs7Ozs7O0VBUUUsZ0JBQUE7QUFtRU47QUFqRUk7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7QUFvRU47QUFsRUk7RUFDRSxtQkFBQTtBQXFFTjtBQW5FSTtFQUNFLGVBQUE7QUFzRU47QUFwRUk7O0VBRUUsa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQXVFTjtBQXJFSTtFQUNFLGdCQUFBO0FBd0VOO0FBdEVJO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQXlFTjtBQXZFSTtFQUNFLGtCQUFBO0FBMEVOO0FBeEVJO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0FBMkVOO0FBekVJO0VBQ0UsWUFBQTtBQTRFTjtBQTFFSTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUE2RU47QUEzRUk7RUFDRSxVQUFBO0VBQ0EsVUFBQTtBQThFTjtBQTVFSTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUErRU47QUE3RUk7RUFDRSxlQUFBO0FBZ0ZOO0FBOUVJO0VBQ0UsYUFBQTtBQWlGTjtBQS9FSTtFQUNFLGFBQUE7QUFrRk47QUFoRkk7RUFDRSxnQ0FBQTtBQW1GTjtBQS9FSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBa0ZOO0FBaEZJO0VBQ0UsYUFBQTtBQW1GTjtBQWpGSTs7RUFFRSxrQkFBQTtBQW9GTjtBQWxGSTs7RUFFRSxtQkFBQTtBQXFGTjtBQW5GSTs7O0VBR0UsbUJBQUE7RUFDQSxtQkFBQTtBQXNGTjtBQXBGSTtFQUNFLHNCQUFBO0FBdUZOO0FBckZJO0VBQ0Usc0JBQUE7QUF3Rk47QUF0Rkk7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBeUZOO0FBdkZJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBMEZOO0FBdkZJOzttREFBQTtBQUdBLGlCQUFBO0FBQ0E7RUFDRSxrQkFBQTtBQTBGTjtBQXhGSSxpQkFBQTtBQUNBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FBMkZOO0FBekZJOzttREFBQTtBQUdBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FBNEZOO0FBMUZJLGlCQUFBO0FBQ0E7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUE2Rk47QUEzRkksaUJBQUE7QUFDQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBOEZOO0FBNUZJO0VBQ0UsY0FBQTtBQStGTjtBQTdGSSx1QkFBQTtBQUNBO0VBQ0UseUJBQUE7QUFnR047QUE5Rkksb0NBQUE7QUFDQTs7O0VBR0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7QUFpR047QUEvRkk7O21EQUFBO0FBR0E7RUFDRSxXQUFBO0FBa0dOO0FBaEdJLGlCQUFBO0FBQ0E7RUFDRSxXQUFBO0VBQ0EscUJBQUE7QUFtR047QUFqR0ksc0JBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBb0dOO0FBbEdJLHVCQUFBO0FBQ0Esb0NBQUE7QUFDQTs7O0VBR0UsV0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBcUdOO0FBbkdJOzttREFBQTtBQUdBO0VBQ0UsWUFBQTtBQXNHTjtBQXBHSSxpQkFBQTtBQUNBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0FBdUdOO0FBckdJLHNCQUFBO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQXdHTjtBQXRHSSx1QkFBQTtBQUNBLG9DQUFBO0FBQ0E7OztFQUdFLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQXlHTjtBQXZHSTs7bURBQUE7QUFHQTtFQUNFLGtCQUFBO0FBMEdOO0FBeEdJLGlCQUFBO0FBQ0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUEyR047QUF6R0ksc0JBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBNEdOO0FBMUdJLHVCQUFBO0FBQ0Esb0NBQUE7QUFDQTs7O0VBR0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUE2R04iLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLmZzMzUge1xuICAgICAgICBmb250LXNpemU6IDM1cHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgXG4gICAgLm13NTAge1xuICAgICAgICBtYXgtd2lkdGg6IDUwcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLm1uIHtcbiAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5tdzE0MCB7XG4gICAgICAgIG1heC13aWR0aDogMTQwcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLm1iMjAge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5tcjI1IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIFxuICAgIC5tdzQwIHtcbiAgICAgICAgbWF4LXdpZHRoOiA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIFxuICAgIC5wMzAge1xuICAgICAgICBwYWRkaW5nOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIFxuICAgIC5wYWdlLWhlYWRpbmcge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgcGFkZGluZzogMzBweCA0MHB4O1xuICAgICAgbWFyZ2luOiAwcHggMHB4IDI1cHg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q5ZDlkOTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICAgfVxuICAgIC5wYWdlLXRhYnMge1xuICAgICAgbWFyZ2luOiAtMjVweCAtMjBweCAzMHB4O1xuICAgICAgcGFkZGluZzogMTVweCAyNXB4IDA7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgICAgIGJhY2tncm91bmQ6ICNlOWU5ZTk7XG4gICAgfVxuICAgIC5wYWdlLXRhYnMgLm5hdi10YWJzIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgfVxuICAgIC5wYWdlLXRhYnMgLm5hdi10YWJzID4gbGkgPiBhIHtcbiAgICAgIGNvbG9yOiAjQUFBO1xuICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIH1cbiAgICAucGFnZS10YWJzIC5uYXYtdGFicyA+IGxpOmhvdmVyID4gYSxcbiAgICAucGFnZS10YWJzIC5uYXYtdGFicyA+IGxpOmZvY3VzID4gYSB7XG4gICAgICBib3JkZXItY29sb3I6ICNkZGQ7XG4gICAgfVxuICAgIC5wYWdlLXRhYnMgLm5hdi10YWJzID4gbGkuYWN0aXZlID4gYSxcbiAgICAucGFnZS10YWJzIC5uYXYtdGFicyA+IGxpLmFjdGl2ZSA+IGE6aG92ZXIsXG4gICAgLnBhZ2UtdGFicyAubmF2LXRhYnMgPiBsaS5hY3RpdmUgPiBhOmZvY3VzIHtcbiAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgICAucGFnZS10YWJzIHtcbiAgICAgICAgcGFkZGluZzogMjVweCAyMHB4IDA7XG4gICAgICB9XG4gICAgICAucGFnZS10YWJzIC5uYXYtdGFicyBsaSB7XG4gICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICB9XG4gICAgICAucGFnZS10YWJzIC5uYXYtdGFicyBsaTpsYXN0LWNoaWxkLFxuICAgICAgLnBhZ2UtdGFicyAubmF2LXRhYnMgbGkuYWN0aXZlOmxhc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgfVxuICAgICAgLnBhZ2UtdGFicyAubmF2LXRhYnMgPiBsaSA+IGE6aG92ZXIsXG4gICAgICAucGFnZS10YWJzIC5uYXYtdGFicyA+IGxpID4gYTpmb2N1cyB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNEREQ7XG4gICAgICB9XG4gICAgICAucGFnZS10YWJzIC5uYXYtdGFicyA+IGxpLmFjdGl2ZSA+IGEsXG4gICAgICAucGFnZS10YWJzIC5uYXYtdGFicyA+IGxpLmFjdGl2ZSA+IGE6aG92ZXIsXG4gICAgICAucGFnZS10YWJzIC5uYXYtdGFicyA+IGxpLmFjdGl2ZSA+IGE6Zm9jdXMge1xuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZGRkO1xuICAgICAgfVxuICAgIH1cbiAgICAucGFuZWwge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjdweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgfVxuICAgIC5wYW5lbC5wYW5lbC10cmFuc3BhcmVudCB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgYm9yZGVyOiAwO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogMDtcbiAgICB9XG4gICAgLnBhbmVsLnBhbmVsLWJvcmRlciB7XG4gICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgYm9yZGVyLXdpZHRoOiAwO1xuICAgIH1cbiAgICAucGFuZWwucGFuZWwtYm9yZGVyLnRvcCB7XG4gICAgICBib3JkZXItdG9wLXdpZHRoOiA1cHg7XG4gICAgfVxuICAgIC5wYW5lbC5wYW5lbC1ib3JkZXIucmlnaHQge1xuICAgICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiA1cHg7XG4gICAgfVxuICAgIC5wYW5lbC5wYW5lbC1ib3JkZXIuYm90dG9tIHtcbiAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDVweDtcbiAgICB9XG4gICAgLnBhbmVsLnBhbmVsLWJvcmRlci5sZWZ0IHtcbiAgICAgIGJvcmRlci1sZWZ0LXdpZHRoOiA1cHg7XG4gICAgfVxuICAgIC5wYW5lbC5wYW5lbC1ib3JkZXIgPiAucGFuZWwtaGVhZGluZyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICAgICAgYm9yZGVyLWNvbG9yOiAjZTJlMmUyO1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIH1cbiAgICAucGFuZWwucGFuZWwtYm9yZGVyID4gLnBhbmVsLWhlYWRpbmcgPiAucGFuZWwtdGl0bGUge1xuICAgICAgY29sb3I6ICM5OTk5OTk7XG4gICAgfVxuICAgIC5wYW5lbC5wYW5lbC1ib3JkZXIucGFuZWwtZGVmYXVsdCB7XG4gICAgICBib3JkZXItY29sb3I6ICNEREQ7XG4gICAgfVxuICAgIC5wYW5lbC5wYW5lbC1ib3JkZXIucGFuZWwtZGVmYXVsdCA+IC5wYW5lbC1oZWFkaW5nIHtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICB9XG4gICAgLnBhbmVsLW1lbnUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTJlMmUyO1xuICAgIH1cbiAgICAucGFuZWwtbWVudS5kYXJrIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG4gICAgfVxuICAgIC5wYW5lbC1ib2R5IC5wYW5lbC1tZW51IHtcbiAgICAgIGJvcmRlci1sZWZ0OiAwO1xuICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xuICAgIH1cbiAgICAucGFuZWwtaGVhZGluZyArIC5wYW5lbC1tZW51LFxuICAgIC5wYW5lbC1tZW51ICsgLnBhbmVsLWJvZHksXG4gICAgLnBhbmVsLWJvZHkgKyAucGFuZWwtbWVudSxcbiAgICAucGFuZWwtYm9keSArIC5wYW5lbC1ib2R5IHtcbiAgICAgIGJvcmRlci10b3A6IDA7XG4gICAgfVxuICAgIC5wYW5lbC1ib2R5IHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTJlMmUyO1xuICAgIH1cbiAgICAucGFuZWwtYm9keSArIC5wYW5lbC1mb290ZXIge1xuICAgICAgYm9yZGVyLXRvcDogMDtcbiAgICB9XG4gICAgLnBhbmVsLWhlYWRpbmcge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgaGVpZ2h0OiA1MnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDQ5cHg7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gICAgICBjb2xvcjogIzk5OTk5OTtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBwYWRkaW5nOiAwIDhweDtcbiAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTJlMmUyO1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgICB9XG4gICAgLnBhbmVsLWhlYWRpbmcgKyAucGFuZWwtYm9keSB7XG4gICAgICBib3JkZXItdG9wOiAwO1xuICAgIH1cbiAgICAucGFuZWwtaGVhZGluZyA+IC5kcm9wZG93biAuZHJvcGRvd24tdG9nZ2xlIHtcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIH1cbiAgICAucGFuZWwtaGVhZGluZyAud2lkZ2V0LW1lbnUgLmJ0bi1ncm91cCB7XG4gICAgICBtYXJnaW4tdG9wOiAtM3B4O1xuICAgIH1cbiAgICAucGFuZWwtaGVhZGluZyAud2lkZ2V0LW1lbnUgLmZvcm0tY29udHJvbCB7XG4gICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICBoZWlnaHQ6IDI3cHg7XG4gICAgICBwYWRkaW5nOiAycHggMTBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgICB9XG4gICAgLnBhbmVsLWhlYWRpbmcgLndpZGdldC1tZW51IC5mb3JtLWNvbnRyb2wuaW5wdXQtc20ge1xuICAgICAgbWFyZ2luLXRvcDogOXB4O1xuICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgIH1cbiAgICAucGFuZWwtaGVhZGluZyAud2lkZ2V0LW1lbnUgLnByb2dyZXNzIHtcbiAgICAgIG1hcmdpbi10b3A6IDExcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbiAgICAucGFuZWwtaGVhZGluZyAud2lkZ2V0LW1lbnUgLnByb2dyZXNzLWJhci1sZyB7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cbiAgICAucGFuZWwtaGVhZGluZyAud2lkZ2V0LW1lbnUgLnByb2dyZXNzLWJhci1zbSB7XG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIH1cbiAgICAucGFuZWwtaGVhZGluZyAud2lkZ2V0LW1lbnUgLnByb2dyZXNzLWJhci14cyB7XG4gICAgICBtYXJnaW4tdG9wOiAxN3B4O1xuICAgIH1cbiAgICAucGFuZWwtaWNvbiB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICB9XG4gICAgLnBhbmVsLXRpdGxlIHtcbiAgICAgIHBhZGRpbmctbGVmdDogNnB4O1xuICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICAgIC5wYW5lbC10aXRsZSA+IC5mYSxcbiAgICAucGFuZWwtdGl0bGUgPiAuZ2x5cGhpY29uLFxuICAgIC5wYW5lbC10aXRsZSA+IC5nbHlwaGljb25zLFxuICAgIC5wYW5lbC10aXRsZSA+IC5pbW9vbiB7XG4gICAgICB0b3A6IDJweDtcbiAgICAgIG1pbi13aWR0aDogMjJweDtcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgICAucGFuZWwtdGl0bGUgPiBhIHtcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIH1cbiAgICAucGFuZWwtZm9vdGVyIHtcbiAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTJlMmUyO1xuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDJweDtcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDJweDtcbiAgICB9XG4gICAgLnBhbmVsID4gLmxpc3QtZ3JvdXAge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gICAgLnBhbmVsID4gLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbSB7XG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIH1cbiAgICAucGFuZWwgPiAubGlzdC1ncm91cDpmaXJzdC1jaGlsZCAubGlzdC1ncm91cC1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAycHg7XG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAycHg7XG4gICAgfVxuICAgIC5wYW5lbCA+IC5saXN0LWdyb3VwOmxhc3QtY2hpbGQgLmxpc3QtZ3JvdXAtaXRlbTpsYXN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAycHg7XG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAycHg7XG4gICAgfVxuICAgIC5wYW5lbC1oZWFkaW5nICsgLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbTpmaXJzdC1jaGlsZCB7XG4gICAgICBib3JkZXItdG9wLXdpZHRoOiAwO1xuICAgIH1cbiAgICAucGFuZWwtYm9keSArIC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW06Zmlyc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLXRvcC13aWR0aDogMDtcbiAgICB9XG4gICAgLmxpc3QtZ3JvdXAgKyAucGFuZWwtZm9vdGVyIHtcbiAgICAgIGJvcmRlci10b3Atd2lkdGg6IDA7XG4gICAgfVxuICAgIC5wYW5lbCA+IC50YWJsZSxcbiAgICAucGFuZWwgPiAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZSxcbiAgICAucGFuZWwgPiAucGFuZWwtY29sbGFwc2UgPiAudGFibGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gICAgLnBhbmVsID4gLnRhYmxlOmZpcnN0LWNoaWxkLFxuICAgIC5wYW5lbCA+IC50YWJsZS1yZXNwb25zaXZlOmZpcnN0LWNoaWxkID4gLnRhYmxlOmZpcnN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAycHg7XG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAycHg7XG4gICAgfVxuICAgIC5wYW5lbCA+IC50YWJsZTpmaXJzdC1jaGlsZCA+IHRoZWFkOmZpcnN0LWNoaWxkID4gdHI6Zmlyc3QtY2hpbGQgdGQ6Zmlyc3QtY2hpbGQsXG4gICAgLnBhbmVsID4gLnRhYmxlLXJlc3BvbnNpdmU6Zmlyc3QtY2hpbGQgPiAudGFibGU6Zmlyc3QtY2hpbGQgPiB0aGVhZDpmaXJzdC1jaGlsZCA+IHRyOmZpcnN0LWNoaWxkIHRkOmZpcnN0LWNoaWxkLFxuICAgIC5wYW5lbCA+IC50YWJsZTpmaXJzdC1jaGlsZCA+IHRib2R5OmZpcnN0LWNoaWxkID4gdHI6Zmlyc3QtY2hpbGQgdGQ6Zmlyc3QtY2hpbGQsXG4gICAgLnBhbmVsID4gLnRhYmxlLXJlc3BvbnNpdmU6Zmlyc3QtY2hpbGQgPiAudGFibGU6Zmlyc3QtY2hpbGQgPiB0Ym9keTpmaXJzdC1jaGlsZCA+IHRyOmZpcnN0LWNoaWxkIHRkOmZpcnN0LWNoaWxkLFxuICAgIC5wYW5lbCA+IC50YWJsZTpmaXJzdC1jaGlsZCA+IHRoZWFkOmZpcnN0LWNoaWxkID4gdHI6Zmlyc3QtY2hpbGQgdGg6Zmlyc3QtY2hpbGQsXG4gICAgLnBhbmVsID4gLnRhYmxlLXJlc3BvbnNpdmU6Zmlyc3QtY2hpbGQgPiAudGFibGU6Zmlyc3QtY2hpbGQgPiB0aGVhZDpmaXJzdC1jaGlsZCA+IHRyOmZpcnN0LWNoaWxkIHRoOmZpcnN0LWNoaWxkLFxuICAgIC5wYW5lbCA+IC50YWJsZTpmaXJzdC1jaGlsZCA+IHRib2R5OmZpcnN0LWNoaWxkID4gdHI6Zmlyc3QtY2hpbGQgdGg6Zmlyc3QtY2hpbGQsXG4gICAgLnBhbmVsID4gLnRhYmxlLXJlc3BvbnNpdmU6Zmlyc3QtY2hpbGQgPiAudGFibGU6Zmlyc3QtY2hpbGQgPiB0Ym9keTpmaXJzdC1jaGlsZCA+IHRyOmZpcnN0LWNoaWxkIHRoOmZpcnN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDJweDtcbiAgICB9XG4gICAgLnBhbmVsID4gLnRhYmxlOmZpcnN0LWNoaWxkID4gdGhlYWQ6Zmlyc3QtY2hpbGQgPiB0cjpmaXJzdC1jaGlsZCB0ZDpsYXN0LWNoaWxkLFxuICAgIC5wYW5lbCA+IC50YWJsZS1yZXNwb25zaXZlOmZpcnN0LWNoaWxkID4gLnRhYmxlOmZpcnN0LWNoaWxkID4gdGhlYWQ6Zmlyc3QtY2hpbGQgPiB0cjpmaXJzdC1jaGlsZCB0ZDpsYXN0LWNoaWxkLFxuICAgIC5wYW5lbCA+IC50YWJsZTpmaXJzdC1jaGlsZCA+IHRib2R5OmZpcnN0LWNoaWxkID4gdHI6Zmlyc3QtY2hpbGQgdGQ6bGFzdC1jaGlsZCxcbiAgICAucGFuZWwgPiAudGFibGUtcmVzcG9uc2l2ZTpmaXJzdC1jaGlsZCA+IC50YWJsZTpmaXJzdC1jaGlsZCA+IHRib2R5OmZpcnN0LWNoaWxkID4gdHI6Zmlyc3QtY2hpbGQgdGQ6bGFzdC1jaGlsZCxcbiAgICAucGFuZWwgPiAudGFibGU6Zmlyc3QtY2hpbGQgPiB0aGVhZDpmaXJzdC1jaGlsZCA+IHRyOmZpcnN0LWNoaWxkIHRoOmxhc3QtY2hpbGQsXG4gICAgLnBhbmVsID4gLnRhYmxlLXJlc3BvbnNpdmU6Zmlyc3QtY2hpbGQgPiAudGFibGU6Zmlyc3QtY2hpbGQgPiB0aGVhZDpmaXJzdC1jaGlsZCA+IHRyOmZpcnN0LWNoaWxkIHRoOmxhc3QtY2hpbGQsXG4gICAgLnBhbmVsID4gLnRhYmxlOmZpcnN0LWNoaWxkID4gdGJvZHk6Zmlyc3QtY2hpbGQgPiB0cjpmaXJzdC1jaGlsZCB0aDpsYXN0LWNoaWxkLFxuICAgIC5wYW5lbCA+IC50YWJsZS1yZXNwb25zaXZlOmZpcnN0LWNoaWxkID4gLnRhYmxlOmZpcnN0LWNoaWxkID4gdGJvZHk6Zmlyc3QtY2hpbGQgPiB0cjpmaXJzdC1jaGlsZCB0aDpsYXN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAycHg7XG4gICAgfVxuICAgIC5wYW5lbCA+IC50YWJsZTpsYXN0LWNoaWxkLFxuICAgIC5wYW5lbCA+IC50YWJsZS1yZXNwb25zaXZlOmxhc3QtY2hpbGQgPiAudGFibGU6bGFzdC1jaGlsZCB7XG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMnB4O1xuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMnB4O1xuICAgIH1cbiAgICAucGFuZWwgPiAudGFibGU6bGFzdC1jaGlsZCA+IHRib2R5Omxhc3QtY2hpbGQgPiB0cjpsYXN0LWNoaWxkIHRkOmZpcnN0LWNoaWxkLFxuICAgIC5wYW5lbCA+IC50YWJsZS1yZXNwb25zaXZlOmxhc3QtY2hpbGQgPiAudGFibGU6bGFzdC1jaGlsZCA+IHRib2R5Omxhc3QtY2hpbGQgPiB0cjpsYXN0LWNoaWxkIHRkOmZpcnN0LWNoaWxkLFxuICAgIC5wYW5lbCA+IC50YWJsZTpsYXN0LWNoaWxkID4gdGZvb3Q6bGFzdC1jaGlsZCA+IHRyOmxhc3QtY2hpbGQgdGQ6Zmlyc3QtY2hpbGQsXG4gICAgLnBhbmVsID4gLnRhYmxlLXJlc3BvbnNpdmU6bGFzdC1jaGlsZCA+IC50YWJsZTpsYXN0LWNoaWxkID4gdGZvb3Q6bGFzdC1jaGlsZCA+IHRyOmxhc3QtY2hpbGQgdGQ6Zmlyc3QtY2hpbGQsXG4gICAgLnBhbmVsID4gLnRhYmxlOmxhc3QtY2hpbGQgPiB0Ym9keTpsYXN0LWNoaWxkID4gdHI6bGFzdC1jaGlsZCB0aDpmaXJzdC1jaGlsZCxcbiAgICAucGFuZWwgPiAudGFibGUtcmVzcG9uc2l2ZTpsYXN0LWNoaWxkID4gLnRhYmxlOmxhc3QtY2hpbGQgPiB0Ym9keTpsYXN0LWNoaWxkID4gdHI6bGFzdC1jaGlsZCB0aDpmaXJzdC1jaGlsZCxcbiAgICAucGFuZWwgPiAudGFibGU6bGFzdC1jaGlsZCA+IHRmb290Omxhc3QtY2hpbGQgPiB0cjpsYXN0LWNoaWxkIHRoOmZpcnN0LWNoaWxkLFxuICAgIC5wYW5lbCA+IC50YWJsZS1yZXNwb25zaXZlOmxhc3QtY2hpbGQgPiAudGFibGU6bGFzdC1jaGlsZCA+IHRmb290Omxhc3QtY2hpbGQgPiB0cjpsYXN0LWNoaWxkIHRoOmZpcnN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDJweDtcbiAgICB9XG4gICAgLnBhbmVsID4gLnRhYmxlOmxhc3QtY2hpbGQgPiB0Ym9keTpsYXN0LWNoaWxkID4gdHI6bGFzdC1jaGlsZCB0ZDpsYXN0LWNoaWxkLFxuICAgIC5wYW5lbCA+IC50YWJsZS1yZXNwb25zaXZlOmxhc3QtY2hpbGQgPiAudGFibGU6bGFzdC1jaGlsZCA+IHRib2R5Omxhc3QtY2hpbGQgPiB0cjpsYXN0LWNoaWxkIHRkOmxhc3QtY2hpbGQsXG4gICAgLnBhbmVsID4gLnRhYmxlOmxhc3QtY2hpbGQgPiB0Zm9vdDpsYXN0LWNoaWxkID4gdHI6bGFzdC1jaGlsZCB0ZDpsYXN0LWNoaWxkLFxuICAgIC5wYW5lbCA+IC50YWJsZS1yZXNwb25zaXZlOmxhc3QtY2hpbGQgPiAudGFibGU6bGFzdC1jaGlsZCA+IHRmb290Omxhc3QtY2hpbGQgPiB0cjpsYXN0LWNoaWxkIHRkOmxhc3QtY2hpbGQsXG4gICAgLnBhbmVsID4gLnRhYmxlOmxhc3QtY2hpbGQgPiB0Ym9keTpsYXN0LWNoaWxkID4gdHI6bGFzdC1jaGlsZCB0aDpsYXN0LWNoaWxkLFxuICAgIC5wYW5lbCA+IC50YWJsZS1yZXNwb25zaXZlOmxhc3QtY2hpbGQgPiAudGFibGU6bGFzdC1jaGlsZCA+IHRib2R5Omxhc3QtY2hpbGQgPiB0cjpsYXN0LWNoaWxkIHRoOmxhc3QtY2hpbGQsXG4gICAgLnBhbmVsID4gLnRhYmxlOmxhc3QtY2hpbGQgPiB0Zm9vdDpsYXN0LWNoaWxkID4gdHI6bGFzdC1jaGlsZCB0aDpsYXN0LWNoaWxkLFxuICAgIC5wYW5lbCA+IC50YWJsZS1yZXNwb25zaXZlOmxhc3QtY2hpbGQgPiAudGFibGU6bGFzdC1jaGlsZCA+IHRmb290Omxhc3QtY2hpbGQgPiB0cjpsYXN0LWNoaWxkIHRoOmxhc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDJweDtcbiAgICB9XG4gICAgLnBhbmVsID4gLnBhbmVsLWJvZHkgKyAudGFibGUsXG4gICAgLnBhbmVsID4gLnBhbmVsLWJvZHkgKyAudGFibGUtcmVzcG9uc2l2ZSB7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZWVlZTtcbiAgICB9XG4gICAgLnBhbmVsID4gLnRhYmxlID4gdGJvZHk6Zmlyc3QtY2hpbGQgPiB0cjpmaXJzdC1jaGlsZCB0aCxcbiAgICAucGFuZWwgPiAudGFibGUgPiB0Ym9keTpmaXJzdC1jaGlsZCA+IHRyOmZpcnN0LWNoaWxkIHRkIHtcbiAgICAgIGJvcmRlci10b3A6IDA7XG4gICAgfVxuICAgIC5wYW5lbCA+IC50YWJsZS1ib3JkZXJlZCxcbiAgICAucGFuZWwgPiAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZS1ib3JkZXJlZCB7XG4gICAgICBib3JkZXI6IDA7XG4gICAgfVxuICAgIC5wYW5lbCA+IC50YWJsZS1ib3JkZXJlZCA+IHRoZWFkID4gdHIgPiB0aDpmaXJzdC1jaGlsZCxcbiAgICAucGFuZWwgPiAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZS1ib3JkZXJlZCA+IHRoZWFkID4gdHIgPiB0aDpmaXJzdC1jaGlsZCxcbiAgICAucGFuZWwgPiAudGFibGUtYm9yZGVyZWQgPiB0Ym9keSA+IHRyID4gdGg6Zmlyc3QtY2hpbGQsXG4gICAgLnBhbmVsID4gLnRhYmxlLXJlc3BvbnNpdmUgPiAudGFibGUtYm9yZGVyZWQgPiB0Ym9keSA+IHRyID4gdGg6Zmlyc3QtY2hpbGQsXG4gICAgLnBhbmVsID4gLnRhYmxlLWJvcmRlcmVkID4gdGZvb3QgPiB0ciA+IHRoOmZpcnN0LWNoaWxkLFxuICAgIC5wYW5lbCA+IC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlLWJvcmRlcmVkID4gdGZvb3QgPiB0ciA+IHRoOmZpcnN0LWNoaWxkLFxuICAgIC5wYW5lbCA+IC50YWJsZS1ib3JkZXJlZCA+IHRoZWFkID4gdHIgPiB0ZDpmaXJzdC1jaGlsZCxcbiAgICAucGFuZWwgPiAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZS1ib3JkZXJlZCA+IHRoZWFkID4gdHIgPiB0ZDpmaXJzdC1jaGlsZCxcbiAgICAucGFuZWwgPiAudGFibGUtYm9yZGVyZWQgPiB0Ym9keSA+IHRyID4gdGQ6Zmlyc3QtY2hpbGQsXG4gICAgLnBhbmVsID4gLnRhYmxlLXJlc3BvbnNpdmUgPiAudGFibGUtYm9yZGVyZWQgPiB0Ym9keSA+IHRyID4gdGQ6Zmlyc3QtY2hpbGQsXG4gICAgLnBhbmVsID4gLnRhYmxlLWJvcmRlcmVkID4gdGZvb3QgPiB0ciA+IHRkOmZpcnN0LWNoaWxkLFxuICAgIC5wYW5lbCA+IC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlLWJvcmRlcmVkID4gdGZvb3QgPiB0ciA+IHRkOmZpcnN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci1sZWZ0OiAwO1xuICAgIH1cbiAgICAucGFuZWwgPiAudGFibGUtYm9yZGVyZWQgPiB0aGVhZCA+IHRyID4gdGg6bGFzdC1jaGlsZCxcbiAgICAucGFuZWwgPiAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZS1ib3JkZXJlZCA+IHRoZWFkID4gdHIgPiB0aDpsYXN0LWNoaWxkLFxuICAgIC5wYW5lbCA+IC50YWJsZS1ib3JkZXJlZCA+IHRib2R5ID4gdHIgPiB0aDpsYXN0LWNoaWxkLFxuICAgIC5wYW5lbCA+IC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlLWJvcmRlcmVkID4gdGJvZHkgPiB0ciA+IHRoOmxhc3QtY2hpbGQsXG4gICAgLnBhbmVsID4gLnRhYmxlLWJvcmRlcmVkID4gdGZvb3QgPiB0ciA+IHRoOmxhc3QtY2hpbGQsXG4gICAgLnBhbmVsID4gLnRhYmxlLXJlc3BvbnNpdmUgPiAudGFibGUtYm9yZGVyZWQgPiB0Zm9vdCA+IHRyID4gdGg6bGFzdC1jaGlsZCxcbiAgICAucGFuZWwgPiAudGFibGUtYm9yZGVyZWQgPiB0aGVhZCA+IHRyID4gdGQ6bGFzdC1jaGlsZCxcbiAgICAucGFuZWwgPiAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZS1ib3JkZXJlZCA+IHRoZWFkID4gdHIgPiB0ZDpsYXN0LWNoaWxkLFxuICAgIC5wYW5lbCA+IC50YWJsZS1ib3JkZXJlZCA+IHRib2R5ID4gdHIgPiB0ZDpsYXN0LWNoaWxkLFxuICAgIC5wYW5lbCA+IC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlLWJvcmRlcmVkID4gdGJvZHkgPiB0ciA+IHRkOmxhc3QtY2hpbGQsXG4gICAgLnBhbmVsID4gLnRhYmxlLWJvcmRlcmVkID4gdGZvb3QgPiB0ciA+IHRkOmxhc3QtY2hpbGQsXG4gICAgLnBhbmVsID4gLnRhYmxlLXJlc3BvbnNpdmUgPiAudGFibGUtYm9yZGVyZWQgPiB0Zm9vdCA+IHRyID4gdGQ6bGFzdC1jaGlsZCB7XG4gICAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgfVxuICAgIC5wYW5lbCA+IC50YWJsZS1ib3JkZXJlZCA+IHRoZWFkID4gdHI6Zmlyc3QtY2hpbGQgPiB0ZCxcbiAgICAucGFuZWwgPiAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZS1ib3JkZXJlZCA+IHRoZWFkID4gdHI6Zmlyc3QtY2hpbGQgPiB0ZCxcbiAgICAucGFuZWwgPiAudGFibGUtYm9yZGVyZWQgPiB0Ym9keSA+IHRyOmZpcnN0LWNoaWxkID4gdGQsXG4gICAgLnBhbmVsID4gLnRhYmxlLXJlc3BvbnNpdmUgPiAudGFibGUtYm9yZGVyZWQgPiB0Ym9keSA+IHRyOmZpcnN0LWNoaWxkID4gdGQsXG4gICAgLnBhbmVsID4gLnRhYmxlLWJvcmRlcmVkID4gdGhlYWQgPiB0cjpmaXJzdC1jaGlsZCA+IHRoLFxuICAgIC5wYW5lbCA+IC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlLWJvcmRlcmVkID4gdGhlYWQgPiB0cjpmaXJzdC1jaGlsZCA+IHRoLFxuICAgIC5wYW5lbCA+IC50YWJsZS1ib3JkZXJlZCA+IHRib2R5ID4gdHI6Zmlyc3QtY2hpbGQgPiB0aCxcbiAgICAucGFuZWwgPiAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZS1ib3JkZXJlZCA+IHRib2R5ID4gdHI6Zmlyc3QtY2hpbGQgPiB0aCB7XG4gICAgICBib3JkZXItYm90dG9tOiAwO1xuICAgIH1cbiAgICAucGFuZWwgPiAudGFibGUtYm9yZGVyZWQgPiB0Ym9keSA+IHRyOmxhc3QtY2hpbGQgPiB0ZCxcbiAgICAucGFuZWwgPiAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZS1ib3JkZXJlZCA+IHRib2R5ID4gdHI6bGFzdC1jaGlsZCA+IHRkLFxuICAgIC5wYW5lbCA+IC50YWJsZS1ib3JkZXJlZCA+IHRmb290ID4gdHI6bGFzdC1jaGlsZCA+IHRkLFxuICAgIC5wYW5lbCA+IC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlLWJvcmRlcmVkID4gdGZvb3QgPiB0cjpsYXN0LWNoaWxkID4gdGQsXG4gICAgLnBhbmVsID4gLnRhYmxlLWJvcmRlcmVkID4gdGJvZHkgPiB0cjpsYXN0LWNoaWxkID4gdGgsXG4gICAgLnBhbmVsID4gLnRhYmxlLXJlc3BvbnNpdmUgPiAudGFibGUtYm9yZGVyZWQgPiB0Ym9keSA+IHRyOmxhc3QtY2hpbGQgPiB0aCxcbiAgICAucGFuZWwgPiAudGFibGUtYm9yZGVyZWQgPiB0Zm9vdCA+IHRyOmxhc3QtY2hpbGQgPiB0aCxcbiAgICAucGFuZWwgPiAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZS1ib3JkZXJlZCA+IHRmb290ID4gdHI6bGFzdC1jaGlsZCA+IHRoIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgfVxuICAgIC5wYW5lbCA+IC50YWJsZS1yZXNwb25zaXZlIHtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICAgIC5wYW5lbC1ncm91cCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxOXB4O1xuICAgIH1cbiAgICAucGFuZWwtZ3JvdXAgLnBhbmVsLXRpdGxlIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICB9XG4gICAgLnBhbmVsLWdyb3VwIC5wYW5lbC1oZWFkaW5nLFxuICAgIC5wYW5lbC1ncm91cCAucGFuZWwtaGVhZGluZyBhIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5wYW5lbC1ncm91cC5hY2NvcmRpb24tbGcgLnBhbmVsICsgLnBhbmVsIHtcbiAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgfVxuICAgIC5wYW5lbC1ncm91cC5hY2NvcmRpb24tbGcgLnBhbmVsLWhlYWRpbmcge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgaGVpZ2h0OiA1NHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDUycHg7XG4gICAgfVxuICAgIC5wYW5lbC1ncm91cCAuYWNjb3JkaW9uLWljb24ge1xuICAgICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICAgIH1cbiAgICAucGFuZWwtZ3JvdXAgLmFjY29yZGlvbi1pY29uOmFmdGVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGNvbnRlbnQ6IFwiXFxmMDY4XCI7XG4gICAgICBmb250LWZhbWlseTogXCJGb250QXdlc29tZVwiO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgY29sb3I6ICM1NTU7XG4gICAgICBsZWZ0OiAxMHB4O1xuICAgICAgdG9wOiAwO1xuICAgIH1cbiAgICAucGFuZWwtZ3JvdXAgLmFjY29yZGlvbi1pY29uLmNvbGxhcHNlZDphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlxcZjA2N1wiO1xuICAgIH1cbiAgICAucGFuZWwtZ3JvdXAgLmFjY29yZGlvbi1pY29uLmljb24tcmlnaHQge1xuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgICB9XG4gICAgLnBhbmVsLWdyb3VwIC5hY2NvcmRpb24taWNvbi5pY29uLXJpZ2h0OmFmdGVyIHtcbiAgICAgIGxlZnQ6IGF1dG87XG4gICAgICByaWdodDogNXB4O1xuICAgIH1cbiAgICAucGFuZWwtZ3JvdXAgLnBhbmVsIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgfVxuICAgIC5wYW5lbC1ncm91cCAucGFuZWwgKyAucGFuZWwge1xuICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIH1cbiAgICAucGFuZWwtZ3JvdXAgLnBhbmVsLWhlYWRpbmcgKyAucGFuZWwtY29sbGFwc2UgPiAucGFuZWwtYm9keSB7XG4gICAgICBib3JkZXItdG9wOiAwO1xuICAgIH1cbiAgICAucGFuZWwtZ3JvdXAgLnBhbmVsLWZvb3RlciB7XG4gICAgICBib3JkZXItdG9wOiAwO1xuICAgIH1cbiAgICAucGFuZWwtZ3JvdXAgLnBhbmVsLWZvb3RlciArIC5wYW5lbC1jb2xsYXBzZSAucGFuZWwtYm9keSB7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZWVlZTtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgLm1lZGlhIHtcbiAgICAgIGNvbG9yOiAjOTk5OTk5O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgfVxuICAgIC5tZWRpYTpmaXJzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgIH1cbiAgICAubWVkaWEtcmlnaHQsXG4gICAgLm1lZGlhID4gLnB1bGwtcmlnaHQge1xuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIH1cbiAgICAubWVkaWEtbGVmdCxcbiAgICAubWVkaWEgPiAucHVsbC1sZWZ0IHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgfVxuICAgIC5tZWRpYS1sZWZ0LFxuICAgIC5tZWRpYS1yaWdodCxcbiAgICAubWVkaWEtYm9keSB7XG4gICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICB9XG4gICAgLm1lZGlhLW1pZGRsZSB7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIH1cbiAgICAubWVkaWEtYm90dG9tIHtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgfVxuICAgIC5tZWRpYS1oZWFkaW5nIHtcbiAgICAgIGNvbG9yOiAjNTU1NTU1O1xuICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG4gICAgLm1lZGlhLWxpc3Qge1xuICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB9XG4gICAgXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgVGFic1xuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiAgICAvKiBUYWJzIFdyYXBwZXIgKi9cbiAgICAudGFiLWJsb2NrIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gICAgLyogVGFicyBDb250ZW50ICovXG4gICAgLnRhYi1ibG9jayAudGFiLWNvbnRlbnQge1xuICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB6LWluZGV4OiAxMDtcbiAgICAgIG1pbi1oZWlnaHQ6IDEyNXB4O1xuICAgICAgcGFkZGluZzogMTZweCAxMnB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UyZTJlMjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgfVxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgIFRhYiBOYXZpZ2F0aW9uXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuICAgIC50YWItYmxvY2sgLm5hdi10YWJzIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGJvcmRlcjogMDtcbiAgICB9XG4gICAgLyogbmF2IHRhYiBpdGVtICovXG4gICAgLnRhYi1ibG9jayAubmF2LXRhYnMgPiBsaSB7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XG4gICAgfVxuICAgIC8qIG5hdiB0YWIgbGluayAqL1xuICAgIC50YWItYmxvY2sgLm5hdi10YWJzID4gbGkgPiBhIHtcbiAgICAgIHotaW5kZXg6IDk7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBjb2xvcjogI0FBQTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IC0xcHg7XG4gICAgICBib3JkZXItY29sb3I6ICNlMmUyZTI7XG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICB9XG4gICAgLnRhYi1ibG9jayAubmF2LXRhYnMgPiBsaTpmaXJzdC1jaGlsZCA+IGEge1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuICAgIC8qIG5hdiB0YWIgbGluazpob3ZlciAqL1xuICAgIC50YWItYmxvY2sgLm5hdi10YWJzID4gbGkgPiBhOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XG4gICAgfVxuICAgIC8qIG5hdiB0YWIgYWN0aXZlIGxpbms6Zm9jdXM6aG92ZXIgKi9cbiAgICAudGFiLWJsb2NrIC5uYXYtdGFicyA+IGxpLmFjdGl2ZSA+IGEsXG4gICAgLnRhYi1ibG9jayAubmF2LXRhYnMgPiBsaS5hY3RpdmUgPiBhOmhvdmVyLFxuICAgIC50YWItYmxvY2sgLm5hdi10YWJzID4gbGkuYWN0aXZlID4gYTpmb2N1cyB7XG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB6LWluZGV4OiAxMjtcbiAgICAgIGNvbG9yOiAjNTU1NTU1O1xuICAgICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICAgIGJvcmRlci1jb2xvcjogI2UyZTJlMjtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRkZGO1xuICAgIH1cbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICBUYWIgTmF2aWdhdGlvbiAtIFRhYnMgTGVmdFxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiAgICAudGFicy1sZWZ0IHtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgIH1cbiAgICAvKiBuYXYgdGFiIGl0ZW0gKi9cbiAgICAudGFicy1sZWZ0ID4gbGkge1xuICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICBtYXJnaW46IDAgLTFweCAtMXB4IDA7XG4gICAgfVxuICAgIC8qIG5hdiB0YWIgaXRlbSBsaW5rICovXG4gICAgLnRhYnMtbGVmdCA+IGxpID4gYSB7XG4gICAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gICAgICBjb2xvcjogIzc3NztcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1jb2xvcjogI0RERDtcbiAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgfVxuICAgIC8qIG5hdiB0YWIgbGluazpob3ZlciAqL1xuICAgIC8qIG5hdiB0YWIgYWN0aXZlIGxpbms6Zm9jdXM6aG92ZXIgKi9cbiAgICAudGFiLWJsb2NrIC50YWJzLWxlZnQgPiBsaS5hY3RpdmUgPiBhLFxuICAgIC50YWItYmxvY2sgLnRhYnMtbGVmdCA+IGxpLmFjdGl2ZSA+IGE6aG92ZXIsXG4gICAgLnRhYi1ibG9jayAudGFicy1sZWZ0ID4gbGkuYWN0aXZlID4gYTpmb2N1cyB7XG4gICAgICBjb2xvcjogIzU1NTtcbiAgICAgIGJvcmRlci1jb2xvcjogI0RERCAjRkZGICNEREQgI0RERDtcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHotaW5kZXg6IDEyO1xuICAgICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICB9XG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgVGFiIE5hdmlnYXRpb24gLSBUYWJzIFJpZ2h0XG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuICAgIC50YWJzLXJpZ2h0IHtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICB9XG4gICAgLyogbmF2IHRhYiBpdGVtICovXG4gICAgLnRhYnMtcmlnaHQgPiBsaSB7XG4gICAgICBmbG9hdDogbm9uZTtcbiAgICAgIG1hcmdpbjogMCAwIC0xcHggLTFweDtcbiAgICB9XG4gICAgLyogbmF2IHRhYiBpdGVtIGxpbmsgKi9cbiAgICAudGFicy1yaWdodCA+IGxpID4gYSB7XG4gICAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gICAgICBjb2xvcjogIzc3NztcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1jb2xvcjogI0RERDtcbiAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgfVxuICAgIC8qIG5hdiB0YWIgbGluazpob3ZlciAqL1xuICAgIC8qIG5hdiB0YWIgYWN0aXZlIGxpbms6Zm9jdXM6aG92ZXIgKi9cbiAgICAudGFiLWJsb2NrIC50YWJzLXJpZ2h0ID4gbGkuYWN0aXZlID4gYSxcbiAgICAudGFiLWJsb2NrIC50YWJzLXJpZ2h0ID4gbGkuYWN0aXZlID4gYTpob3ZlcixcbiAgICAudGFiLWJsb2NrIC50YWJzLXJpZ2h0ID4gbGkuYWN0aXZlID4gYTpmb2N1cyB7XG4gICAgICBjb2xvcjogIzU1NTtcbiAgICAgIGJvcmRlci1jb2xvcjogI0RERCAjREREICNEREQgI0ZGRjtcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHotaW5kZXg6IDEyO1xuICAgICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICB9XG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgVGFiIE5hdmlnYXRpb24gLSBUYWJzIFJpZ2h0XG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuICAgIC50YWJzLWJlbG93IHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gICAgLyogbmF2IHRhYiBpdGVtICovXG4gICAgLnRhYnMtYmVsb3cgPiBsaSB7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIG1hcmdpbi10b3A6IC0xcHg7XG4gICAgfVxuICAgIC8qIG5hdiB0YWIgaXRlbSBsaW5rICovXG4gICAgLnRhYnMtYmVsb3cgPiBsaSA+IGEge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgei1pbmRleDogOTtcbiAgICAgIG1hcmdpbi1yaWdodDogLTFweDtcbiAgICAgIHBhZGRpbmc6IDExcHggMTZweDtcbiAgICAgIGNvbG9yOiAjNzc3O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNEREQ7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgIH1cbiAgICAvKiBuYXYgdGFiIGxpbms6aG92ZXIgKi9cbiAgICAvKiBuYXYgdGFiIGFjdGl2ZSBsaW5rOmZvY3VzOmhvdmVyICovXG4gICAgLnRhYi1ibG9jayAudGFicy1iZWxvdyA+IGxpLmFjdGl2ZSA+IGEsXG4gICAgLnRhYi1ibG9jayAudGFicy1iZWxvdyA+IGxpLmFjdGl2ZSA+IGE6aG92ZXIsXG4gICAgLnRhYi1ibG9jayAudGFicy1iZWxvdyA+IGxpLmFjdGl2ZSA+IGE6Zm9jdXMge1xuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgei1pbmRleDogMTI7XG4gICAgICBjb2xvcjogIzU1NTU1NTtcbiAgICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICAgICBib3JkZXItY29sb3I6ICNEREQ7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0ZGRjtcbiAgICB9Il19 */"]
      });
      /***/
    },

    /***/
    "EPeh":
    /*!*****************************************!*\
      !*** ./src/app/secure/secure.module.ts ***!
      \*****************************************/

    /*! exports provided: SecureModule */

    /***/
    function EPeh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SecureModule", function () {
        return SecureModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _profile_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./profile/profile.component */
      "67J5");
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      "BdvD");
      /* harmony import */


      var _secure_secure_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./secure/secure.component */
      "kIn6");
      /* harmony import */


      var _global_global_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../global/global.module */
      "w1+i");
      /* harmony import */


      var _secure_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./secure-routing.module */
      "JS2F");
      /* harmony import */


      var _start_game_start_game_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./start-game/start-game.component */
      "UMIC");
      /* harmony import */


      var _manage_game_manage_game_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./manage-game/manage-game.component */
      "qWTu");
      /* harmony import */


      var _find_game_find_game_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./find-game/find-game.component */
      "ND8G");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _mydevices_mydevices_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./mydevices/mydevices.component */
      "ynb2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SecureModule = function SecureModule() {
        _classCallCheck(this, SecureModule);
      };

      SecureModule.ɵfac = function SecureModule_Factory(t) {
        return new (t || SecureModule)();
      };

      SecureModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
        type: SecureModule
      });
      SecureModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _secure_routing_module__WEBPACK_IMPORTED_MODULE_5__["SecureRoutingModule"], _global_global_module__WEBPACK_IMPORTED_MODULE_4__["GlobalModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](SecureModule, {
          declarations: [_profile_profile_component__WEBPACK_IMPORTED_MODULE_1__["ProfileComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], _secure_secure_component__WEBPACK_IMPORTED_MODULE_3__["SecureComponent"], _start_game_start_game_component__WEBPACK_IMPORTED_MODULE_6__["StartGameComponent"], _manage_game_manage_game_component__WEBPACK_IMPORTED_MODULE_7__["ManageGameComponent"], _find_game_find_game_component__WEBPACK_IMPORTED_MODULE_8__["FindGameComponent"], _mydevices_mydevices_component__WEBPACK_IMPORTED_MODULE_10__["MydevicesComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _secure_routing_module__WEBPACK_IMPORTED_MODULE_5__["SecureRoutingModule"], _global_global_module__WEBPACK_IMPORTED_MODULE_4__["GlobalModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]]
        });
      })();
      /***/

    },

    /***/
    "JS2F":
    /*!*************************************************!*\
      !*** ./src/app/secure/secure-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: SecureRoutingModule */

    /***/
    function JS2F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SecureRoutingModule", function () {
        return SecureRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      "BdvD");
      /* harmony import */


      var _find_game_find_game_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./find-game/find-game.component */
      "ND8G");
      /* harmony import */


      var _manage_game_manage_game_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./manage-game/manage-game.component */
      "qWTu");
      /* harmony import */


      var _mydevices_mydevices_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./mydevices/mydevices.component */
      "ynb2");
      /* harmony import */


      var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./profile/profile.component */
      "67J5");
      /* harmony import */


      var _secure_secure_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./secure/secure.component */
      "kIn6");
      /* harmony import */


      var _start_game_start_game_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./start-game/start-game.component */
      "UMIC");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _secure_secure_component__WEBPACK_IMPORTED_MODULE_6__["SecureComponent"],
        children: [{
          path: '',
          redirectTo: 'profile'
        }, {
          path: 'profile',
          component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"]
        }, {
          path: 'dashboard',
          component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"]
        }, {
          path: 'startGame',
          component: _start_game_start_game_component__WEBPACK_IMPORTED_MODULE_7__["StartGameComponent"]
        }, {
          path: 'manageGame',
          component: _manage_game_manage_game_component__WEBPACK_IMPORTED_MODULE_3__["ManageGameComponent"]
        }, {
          path: 'findGame',
          component: _find_game_find_game_component__WEBPACK_IMPORTED_MODULE_2__["FindGameComponent"]
        }, {
          path: 'mydevices',
          component: _mydevices_mydevices_component__WEBPACK_IMPORTED_MODULE_4__["MydevicesComponent"]
        }]
      }];

      var SecureRoutingModule = function SecureRoutingModule() {
        _classCallCheck(this, SecureRoutingModule);
      };

      SecureRoutingModule.ɵfac = function SecureRoutingModule_Factory(t) {
        return new (t || SecureRoutingModule)();
      };

      SecureRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: SecureRoutingModule
      });
      SecureRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](SecureRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "ND8G":
    /*!*********************************************************!*\
      !*** ./src/app/secure/find-game/find-game.component.ts ***!
      \*********************************************************/

    /*! exports provided: FindGameComponent */

    /***/
    function ND8G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FindGameComponent", function () {
        return FindGameComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FindGameComponent = /*#__PURE__*/function () {
        function FindGameComponent() {
          _classCallCheck(this, FindGameComponent);
        }

        _createClass(FindGameComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FindGameComponent;
      }();

      FindGameComponent.ɵfac = function FindGameComponent_Factory(t) {
        return new (t || FindGameComponent)();
      };

      FindGameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FindGameComponent,
        selectors: [["app-find-game"]],
        decls: 2,
        vars: 0,
        template: function FindGameComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "find-game works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaW5kLWdhbWUuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "UMIC":
    /*!***********************************************************!*\
      !*** ./src/app/secure/start-game/start-game.component.ts ***!
      \***********************************************************/

    /*! exports provided: StartGameComponent */

    /***/
    function UMIC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StartGameComponent", function () {
        return StartGameComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var StartGameComponent = /*#__PURE__*/function () {
        function StartGameComponent() {
          _classCallCheck(this, StartGameComponent);
        }

        _createClass(StartGameComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return StartGameComponent;
      }();

      StartGameComponent.ɵfac = function StartGameComponent_Factory(t) {
        return new (t || StartGameComponent)();
      };

      StartGameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: StartGameComponent,
        selectors: [["app-start-game"]],
        decls: 2,
        vars: 0,
        template: function StartGameComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "start-game works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGFydC1nYW1lLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "kIn6":
    /*!***************************************************!*\
      !*** ./src/app/secure/secure/secure.component.ts ***!
      \***************************************************/

    /*! exports provided: SecureComponent */

    /***/
    function kIn6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SecureComponent", function () {
        return SecureComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _global_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../global/header/header.component */
      "sqTj");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _global_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../global/footer/footer.component */
      "HNvH");

      var SecureComponent = /*#__PURE__*/function () {
        function SecureComponent() {
          _classCallCheck(this, SecureComponent);
        }

        _createClass(SecureComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SecureComponent;
      }();

      SecureComponent.ɵfac = function SecureComponent_Factory(t) {
        return new (t || SecureComponent)();
      };

      SecureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SecureComponent,
        selectors: [["app-secure"]],
        decls: 3,
        vars: 0,
        template: function SecureComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
          }
        },
        directives: [_global_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _global_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWN1cmUuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "qWTu":
    /*!*************************************************************!*\
      !*** ./src/app/secure/manage-game/manage-game.component.ts ***!
      \*************************************************************/

    /*! exports provided: ManageGameComponent */

    /***/
    function qWTu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManageGameComponent", function () {
        return ManageGameComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ManageGameComponent = /*#__PURE__*/function () {
        function ManageGameComponent() {
          _classCallCheck(this, ManageGameComponent);
        }

        _createClass(ManageGameComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ManageGameComponent;
      }();

      ManageGameComponent.ɵfac = function ManageGameComponent_Factory(t) {
        return new (t || ManageGameComponent)();
      };

      ManageGameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ManageGameComponent,
        selectors: [["app-manage-game"]],
        decls: 313,
        vars: 0,
        consts: [[1, "container"], [1, "container-fluid", "p-0"], [1, "h3", "mb-3"], [1, "row"], [1, "col-xl-8"], [1, "card"], [1, "card-header", "pb-0"], [1, "card-actions", "float-right"], [1, "dropdown", "show"], ["href", "#", "data-toggle", "dropdown", "data-display", "static"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-more-horizontal", "align-middle"], ["cx", "12", "cy", "12", "r", "1"], ["cx", "19", "cy", "12", "r", "1"], ["cx", "5", "cy", "12", "r", "1"], [1, "dropdown-menu", "dropdown-menu-right"], ["href", "#", 1, "dropdown-item"], [1, "card-title", "mb-0"], [1, "card-body"], [1, "table", "table-striped", 2, "width", "100%"], ["src", "https://bootdey.com/img/Content/avatar/avatar1.png", "width", "32", "height", "32", "alt", "Avatar", 1, "rounded-circle", "my-n1"], [1, "badge", "bg-success"], [1, "badge", "bg-danger"], [1, "badge", "bg-warning"], ["src", "https://bootdey.com/img/Content/avatar/avatar2.png", "width", "32", "height", "32", "alt", "Avatar", 1, "rounded-circle", "my-n1"], ["src", "https://bootdey.com/img/Content/avatar/avatar3.png", "width", "32", "height", "32", "alt", "Avatar", 1, "rounded-circle", "my-n1"], ["src", "https://bootdey.com/img/Content/avatar/avatar4.png", "width", "32", "height", "32", "alt", "Avatar", 1, "rounded-circle", "my-n1"], ["src", "https://bootdey.com/img/Content/avatar/avatar5.png", "width", "32", "height", "32", "alt", "Avatar", 1, "rounded-circle", "my-n1"], [1, "col-xl-4"], [1, "card-header"], [1, "row", "g-0"], [1, "col-sm-3", "col-xl-12", "col-xxl-3", "text-center"], ["src", "https://bootdey.com/img/Content/avatar/avatar3.png", "width", "64", "height", "64", "alt", "Angelica Ramos", 1, "rounded-circle", "mt-2"], [1, "col-sm-9", "col-xl-12", "col-xxl-9"], [1, "table", "table-sm", "mt-2", "mb-4"], [1, "timeline", "mt-2", "mb-0"], [1, "timeline-item"], [1, "float-right", "text-muted", "text-sm"]],
        template: function ManageGameComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Clients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "circle", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "circle", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "circle", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h5", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Clients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "table", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Company");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Garrett Winters");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Good Guys");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "garrett@winters.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Ashton Cox");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Levitz Furniture");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "ashton@cox.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Sonya Frost");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Child World");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "sonya@frost.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Deleted");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Jena Gaines");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Helping Hand");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "jena@gaines.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Inactive");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "img", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Charde Marshall");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Price Savers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "charde@marshall.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "img", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Haley Kennedy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Helping Hand");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "haley@kennedy.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Deleted");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "img", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Tatyana Fitzpatrick");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Good Guys");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "tatyana@fitzpatrick.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "img", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Michael Silva");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Red Robin Stores");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "michael@silva.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "img", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Angelica Ramos");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "The Wiz");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "angelica@ramos.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "img", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Jennifer Chang");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Helping Hand");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "jennifer@chang.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Inactive");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "img", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Brenden Wagner");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "The Wiz");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "brenden@wagner.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Inactive");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "img", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Fiona Green");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "The Sample");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "fiona@green.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Inactive");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "img", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Prescott Bartlett");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "The Sample");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "prescott@bartlett.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "img", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Gavin Cortez");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "Red Robin Stores");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "gavin@cortez.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "img", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Howard Hatfield");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Price Savers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "howard@hatfield.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "Inactive");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "svg", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "circle", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "circle", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "circle", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "h5", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "Angelica Ramos");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "img", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "About me");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "table", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "Angelica Ramos");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "Company");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "The Wiz");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "angelica@ramos.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "Phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "+1234123123123");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "Activity");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "ul", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "li", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "Signed out");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "span", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "30m ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "Nam pretium turpis et arcu. Duis arcu tortor, suscipit...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "li", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "Created invoice #1204");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "span", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "2h ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "Sed aliquam ultrices mauris. Integer ante arcu...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "li", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "Discarded invoice #1147");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "span", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, "3h ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "Nam pretium turpis et arcu. Duis arcu tortor, suscipit...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "li", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "Signed in");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "span", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "3h ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "Curabitur ligula sapien, tincidunt non, euismod vitae...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "li", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "Signed up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "span", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "2d ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "Sed aliquam ultrices mauris. Integer ante arcu...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["body[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  background-color: #f7f7fc;\n}\n\n.timeline[_ngcontent-%COMP%] {\n  list-style-type: none;\n  position: relative;\n}\n\n.timeline[_ngcontent-%COMP%]:before {\n  background: #dee2e6;\n  left: 9px;\n  width: 2px;\n  height: 100%;\n}\n\n.timeline-item[_ngcontent-%COMP%]:before, .timeline[_ngcontent-%COMP%]:before {\n  content: \" \";\n  display: inline-block;\n  position: absolute;\n  z-index: 1;\n}\n\n.timeline-item[_ngcontent-%COMP%]:before {\n  background: #fff;\n  border-radius: 50%;\n  border: 3px solid #3b7ddd;\n  left: 0;\n  width: 20px;\n  height: 20px;\n}\n\n.card[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  box-shadow: 0 0 0.875rem 0 rgba(33, 37, 41, 0.05);\n}\n\n.card[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: initial;\n  border: 0 solid transparent;\n  border-radius: 0.25rem;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  padding: 1.25rem;\n}\n\n.card-header[_ngcontent-%COMP%]:first-child {\n  border-radius: 0.25rem 0.25rem 0 0;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  border-bottom-width: 1px;\n}\n\n.pb-0[_ngcontent-%COMP%] {\n  padding-bottom: 0 !important;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem;\n  margin-bottom: 0;\n  background-color: #fff;\n  border-bottom: 0 solid transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21hbmFnZS1nYW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUssZ0JBQUE7RUFDRCx5QkFBQTtBQUVKOztBQUNJO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtBQUVSOztBQUNJO0VBQ0ksbUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFFUjs7QUFDSTs7RUFFSSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFFUjs7QUFDSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUVSOztBQUFJO0VBQ0ksbUJBQUE7RUFDQSxpREFBQTtBQUdSOztBQURJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQUlSOztBQUZJO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBS1I7O0FBSEk7RUFDSSxrQ0FBQTtBQU1SOztBQUpJO0VBQ0ksd0JBQUE7QUFPUjs7QUFMSTtFQUNJLDRCQUFBO0FBUVI7O0FBTkk7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtBQVNSIiwiZmlsZSI6Im1hbmFnZS1nYW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXttYXJnaW4tdG9wOjIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmYztcbiAgICB9XG4gICAgXG4gICAgLnRpbWVsaW5lIHtcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmVcbiAgICB9XG4gICAgXG4gICAgLnRpbWVsaW5lOmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNkZWUyZTY7XG4gICAgICAgIGxlZnQ6IDlweDtcbiAgICAgICAgd2lkdGg6IDJweDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlXG4gICAgfVxuICAgIFxuICAgIC50aW1lbGluZS1pdGVtOmJlZm9yZSxcbiAgICAudGltZWxpbmU6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiAxXG4gICAgfVxuICAgIFxuICAgIC50aW1lbGluZS1pdGVtOmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzNiN2RkZDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGhlaWdodDogMjBweFxuICAgIH1cbiAgICAuY2FyZCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwLjg3NXJlbSAwIHJnYmEoMzMsMzcsNDEsLjA1KTtcbiAgICB9XG4gICAgLmNhcmQge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IGluaXRpYWw7XG4gICAgICAgIGJvcmRlcjogMCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuICAgIH1cbiAgICAuY2FyZC1ib2R5IHtcbiAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDEuMjVyZW07XG4gICAgfVxuICAgIC5jYXJkLWhlYWRlcjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbSAuMjVyZW0gMCAwO1xuICAgIH1cbiAgICAuY2FyZC1oZWFkZXIge1xuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XG4gICAgfVxuICAgIC5wYi0wIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuY2FyZC1oZWFkZXIge1xuICAgICAgICBwYWRkaW5nOiAxcmVtIDEuMjVyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDAgc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgfSJdfQ== */"]
      });
      /***/
    },

    /***/
    "ynb2":
    /*!*********************************************************!*\
      !*** ./src/app/secure/mydevices/mydevices.component.ts ***!
      \*********************************************************/

    /*! exports provided: MydevicesComponent */

    /***/
    function ynb2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MydevicesComponent", function () {
        return MydevicesComponent;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_service_user_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/service/user-service.service */
      "7ttW");
      /* harmony import */


      var src_service_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/service/token-storage.service */
      "E48x");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function MydevicesComponent_div_3_div_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Medic Time");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function MydevicesComponent_div_3_div_20_Template_input_input_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

            var i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r6.medicTime(i_r2, $event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var device_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", device_r1.med_time);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", device_r1.med_time, " ");
        }
      }

      function MydevicesComponent_div_3_div_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Arm Time");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function MydevicesComponent_div_3_div_27_Template_input_input_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

            var i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r10.armTime(i_r2, $event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Time till blast");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function MydevicesComponent_div_3_div_27_Template_input_input_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

            var i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r13.bombTime(i_r2, $event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Difuse Time");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function MydevicesComponent_div_3_div_27_Template_input_input_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

            var i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r15.difuseTime(i_r2, $event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var device_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", device_r1.arm_time);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", device_r1.arm_time, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", device_r1.bomb_time);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", device_r1.bomb_time, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", device_r1.diff_time);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", device_r1.diff_time, " ");
        }
      }

      function MydevicesComponent_div_3_div_34_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Time to Capture Point");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function MydevicesComponent_div_3_div_34_Template_input_input_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

            var i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r18.capTime(i_r2, $event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Capture Assist");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function MydevicesComponent_div_3_div_34_Template_input_input_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

            var i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r21.capasst(i_r2, $event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var device_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", device_r1.cap_time);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", device_r1.cap_time, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", device_r1.cap_asst);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", device_r1.cap_asst, "% ");
        }
      }

      function MydevicesComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Device Name: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h7");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h7");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Point Scale");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function MydevicesComponent_div_3_Template_input_input_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);

            var i_r2 = ctx.index;

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r24.pointScale(i_r2, $event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MydevicesComponent_div_3_Template_input_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);

            var i_r2 = ctx.index;

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r26.enableMedic(i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Medic Enabled:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, MydevicesComponent_div_3_div_20_Template, 7, 2, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MydevicesComponent_div_3_Template_input_click_23_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);

            var i_r2 = ctx.index;

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r27.enableBomb(i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Bomb Mode Enabled:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, MydevicesComponent_div_3_div_27_Template, 17, 6, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MydevicesComponent_div_3_Template_input_click_30_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);

            var i_r2 = ctx.index;

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r28.enableCapture(i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Capture Mode Enabled:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, MydevicesComponent_div_3_div_34_Template, 12, 4, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var device_r1 = ctx.$implicit;
          var i_r2 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Device Address: ", device_r1.address, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Device ID: ", device_r1.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", device_r1.point_scale);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", device_r1.point_scale, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "medicSwitch-" + i_r2)("checked", device_r1.allow_medic);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", "medicSwitch-" + i_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", device_r1.allow_medic, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", device_r1.allow_medic === true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "bombSwitch-" + i_r2)("checked", ctx_r0.bombEnable);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", "bombSwitch-" + i_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.bombEnable, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.bombEnable);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "captureSwitch-" + i_r2)("checked", ctx_r0.captureEnable);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", "captureSwitch-" + i_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.captureEnable, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.captureEnable);
        }
      }

      var MydevicesComponent = /*#__PURE__*/function () {
        function MydevicesComponent(userService, tokenService, router) {
          _classCallCheck(this, MydevicesComponent);

          this.router = router;
          this.userSvc = userService;
          this.tokenSvc = tokenService;
          this.devices = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]({});
        }

        _createClass(MydevicesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.userSvc.getUserData().subscribe(function (userData) {
              _this3.devices.next(userData.fieldProfiles[0].devices);
            });
          }
        }, {
          key: "pointScale",
          value: function pointScale(index, value) {
            this.devices.subscribe(function (data) {
              data[index].point_scale = value;
            });
          }
        }, {
          key: "medicTime",
          value: function medicTime(index, value) {
            this.devices.subscribe(function (data) {
              data[index].med_time = value;
            });
          }
        }, {
          key: "enableMedic",
          value: function enableMedic(num) {
            this.devices.subscribe(function (data) {
              if (data[num].allow_medic) {
                data[num].allow_medic = false;
              } else {
                data[num].allow_medic = true;
              }
            });
          }
        }, {
          key: "enableBomb",
          value: function enableBomb() {
            this.bombEnable = !this.bombEnable;
          }
        }, {
          key: "enableCapture",
          value: function enableCapture() {
            this.captureEnable = !this.captureEnable;
          }
        }, {
          key: "armTime",
          value: function armTime(index, value) {
            this.devices.subscribe(function (data) {
              data[index].arm_time = value;
            });
          }
        }, {
          key: "capTime",
          value: function capTime(index, value) {
            this.devices.subscribe(function (data) {
              data[index].cap_time = value;
            });
          }
        }, {
          key: "bombTime",
          value: function bombTime(index, value) {
            this.devices.subscribe(function (data) {
              data[index].bomb_time = value;
            });
          }
        }, {
          key: "difuseTime",
          value: function difuseTime(index, value) {
            this.devices.subscribe(function (data) {
              data[index].diff_time = value;
            });
          }
        }, {
          key: "capasst",
          value: function capasst(index, value) {
            this.devices.subscribe(function (data) {
              data[index].cap_asst = value;
            });
          }
        }]);

        return MydevicesComponent;
      }();

      MydevicesComponent.ɵfac = function MydevicesComponent_Factory(t) {
        return new (t || MydevicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_service_user_service_service__WEBPACK_IMPORTED_MODULE_2__["UserServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_service_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      MydevicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MydevicesComponent,
        selectors: [["app-mydevices"]],
        decls: 5,
        vars: 3,
        consts: [[1, "container"], [1, ""], [1, "row"], ["class", "card user-card", 4, "ngFor", "ngForOf"], [1, "card", "user-card"], [1, "card-header"], [1, "card-body", "form-group"], ["for", "pointScale"], ["id", "pointScale", "type", "range", "min", "10", "max", "300", "step", "10", 1, "form-control-range", 3, "value", "input"], [1, "custom-control", "custom-switch"], ["type", "checkbox", 1, "custom-control-input", 3, "id", "checked", "click"], [1, "custom-control-label", 3, "for"], [4, "ngIf"], [1, "card", "card-body"], [1, "form-group"], ["for", "medTime"], ["id", "medTime", "type", "range", "min", "1", "max", "10", "step", "1", 1, "form-control-range", 3, "value", "input"], ["for", "armTime"], ["id", "armTime", "type", "range", "min", "1", "max", "10", "step", "1", 1, "form-control-range", 3, "value", "input"], ["for", "blastTime"], ["id", "blastTime", "type", "range", "min", "1", "max", "30", "step", "1", 1, "form-control-range", 3, "value", "input"], ["for", "difuseTime"], ["id", "difuseTime", "type", "range", "min", "1", "max", "30", "step", "1", 1, "form-control-range", 3, "value", "input"], ["for", "captime"], ["id", "captime", "type", "range", "min", "1", "max", "10", "step", "1", 1, "form-control-range", 3, "value", "input"], ["for", "capasst"], ["id", "capasst", "type", "range", "min", "1", "max", "30", "step", "1", 1, "form-control-range", 3, "value", "input"]],
        template: function MydevicesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MydevicesComponent_div_3_Template, 35, 19, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 1, ctx.devices));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
        styles: [".form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.card[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL215ZGV2aWNlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0FBRUo7O0FBQUE7RUFDSSxhQUFBO0FBR0oiLCJmaWxlIjoibXlkZXZpY2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZ3JvdXB7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLmNhcmQtYm9keXtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuLmNhcmR7XG4gICAgcGFkZGluZzogMjBweDtcbn0iXX0= */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=secure-secure-module-es5.js.map