(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/Brandon/Desktop/battlefield/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    1:
    /*!********************!*\
      !*** ws (ignored) ***!
      \********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    "7ttW":
    /*!*********************************************!*\
      !*** ./src/service/user-service.service.ts ***!
      \*********************************************/

    /*! exports provided: UserServiceService */

    /***/
    function ttW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserServiceService", function () {
        return UserServiceService;
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


      var _token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./token-storage.service */
      "E48x");

      var UserServiceService = /*#__PURE__*/function () {
        function UserServiceService(tokenService) {
          _classCallCheck(this, UserServiceService);

          this.isField = false;
          this.isPlayer = false;
          this.tokenSvc = tokenService;
          this.signedIn = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
          this.userType = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]('');
          this.userData = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]({});
        }

        _createClass(UserServiceService, [{
          key: "setUserData",
          value: function setUserData(userData) {
            if (userData.user.type == 'field') {
              this.isField = true;
            } else if (userData.user.type == 'player') {
              this.isPlayer = true;
            }

            this.token = userData.token;
            this.userType.next(userData.user.type);
            this.userData.next(userData.user);
            this.tokenSvc.saveToken(userData.token);
          }
        }, {
          key: "setSignIn",
          value: function setSignIn(val) {
            this.signedIn.next(val);
          }
        }, {
          key: "isSignedIn",
          value: function isSignedIn() {
            return this.signedIn;
          }
        }, {
          key: "getUserTye",
          value: function getUserTye() {
            return this.userType;
          }
        }, {
          key: "getUserData",
          value: function getUserData() {
            return this.userData;
          }
        }, {
          key: "getToken",
          value: function getToken() {
            return this.token;
          }
        }]);

        return UserServiceService;
      }();

      UserServiceService.ɵfac = function UserServiceService_Factory(t) {
        return new (t || UserServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]));
      };

      UserServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: UserServiceService,
        factory: UserServiceService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        ws_url: "http://localhost:5000/"
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "E48x":
    /*!**********************************************!*\
      !*** ./src/service/token-storage.service.ts ***!
      \**********************************************/

    /*! exports provided: TokenStorageService */

    /***/
    function E48x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TokenStorageService", function () {
        return TokenStorageService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TOKEN_KEY = 'auth-token';

      var TokenStorageService = /*#__PURE__*/function () {
        function TokenStorageService() {
          _classCallCheck(this, TokenStorageService);
        }

        _createClass(TokenStorageService, [{
          key: "signOut",
          value: function signOut() {
            window.sessionStorage.clear();
          }
        }, {
          key: "saveToken",
          value: function saveToken(token) {
            window.sessionStorage.removeItem(TOKEN_KEY);
            window.sessionStorage.setItem(TOKEN_KEY, token);
          }
        }, {
          key: "getToken",
          value: function getToken() {
            return window.sessionStorage.getItem(TOKEN_KEY);
          }
        }]);

        return TokenStorageService;
      }();

      TokenStorageService.ɵfac = function TokenStorageService_Factory(t) {
        return new (t || TokenStorageService)();
      };

      TokenStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: TokenStorageService,
        factory: TokenStorageService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "HNvH":
    /*!***************************************************!*\
      !*** ./src/app/global/footer/footer.component.ts ***!
      \***************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function HNvH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var _c0 = function _c0() {
        return ["/non-secure/contact-us"];
      };

      var _c1 = function _c1() {
        return ["/non-secure/privacy-policy"];
      };

      var _c2 = function _c2() {
        return ["/non-secure/faq"];
      };

      var _c3 = function _c3() {
        return ["/non-secure/feature-list"];
      };

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 58,
        vars: 8,
        consts: [["role", "contentinfo", 1, "mainfooter"], [1, "footer-middle"], [1, "container"], [1, "row"], [1, "col-md-3", "col-sm-6"], [1, "footer-pad"], [1, "list-unstyled"], [3, "routerLink"], ["href", "#"], ["routerLink", "/nextRelease"], [1, "col-md-3"], [1, "social-network", "social-circle"], ["href", "https://www.facebook.com/pages/category/Sports---Recreation/Skirmesh-108898537907505/", "title", "Facebook", 1, "icofacebook"], [1, "fa", "fa-facebook"], ["href", "#", "title", "twitter", 1, "icotwitter"], [1, "fa", "fa-twitter"], [1, "col-md-12", "copy"], [1, "text-center"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Helpful Links");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Contact Us");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Privacy Policy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "FAQs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Product Updates");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Feature List");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Release Notes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "How to's");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "How to use this app");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "How to get setup");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Follow Us");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ul", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\xA9 Copyright 2021 - Skirmesh. All rights reserved.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: ["@charset \"UTF-8\";\n\n\n\n@font-face {\n  font-family: \"FontAwesome\";\n  src: url('fontawesome-webfont.eot');\n  src: url('fontawesome-webfont.eot') format(\"embedded-opentype\"), url('fontawesome-webfont.woff2') format(\"woff2\"), url('fontawesome-webfont.woff') format(\"woff\"), url('fontawesome-webfont.ttf') format(\"truetype\"), url('fontawesome-webfont.svg') format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n}\n.fa[_ngcontent-%COMP%] {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.fa-lg[_ngcontent-%COMP%] {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -15%;\n}\n.fa-2x[_ngcontent-%COMP%] {\n  font-size: 2em;\n}\n.fa-3x[_ngcontent-%COMP%] {\n  font-size: 3em;\n}\n.fa-4x[_ngcontent-%COMP%] {\n  font-size: 4em;\n}\n.fa-5x[_ngcontent-%COMP%] {\n  font-size: 5em;\n}\n.fa-fw[_ngcontent-%COMP%] {\n  width: 1.2857142857em;\n  text-align: center;\n}\n.fa-ul[_ngcontent-%COMP%] {\n  padding-left: 0;\n  margin-left: 2.1428571429em;\n  list-style-type: none;\n}\n.fa-ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  position: relative;\n}\n.fa-li[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -2.1428571429em;\n  width: 2.1428571429em;\n  top: 0.1428571429em;\n  text-align: center;\n}\n.fa-li.fa-lg[_ngcontent-%COMP%] {\n  left: -1.8571428571em;\n}\n.fa-border[_ngcontent-%COMP%] {\n  padding: 0.2em 0.25em 0.15em;\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n}\n.fa-pull-left[_ngcontent-%COMP%] {\n  float: left;\n}\n.fa-pull-right[_ngcontent-%COMP%] {\n  float: right;\n}\n.fa.fa-pull-left[_ngcontent-%COMP%] {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right[_ngcontent-%COMP%] {\n  margin-left: 0.3em;\n}\n\n.pull-right[_ngcontent-%COMP%] {\n  float: right;\n}\n.pull-left[_ngcontent-%COMP%] {\n  float: left;\n}\n.fa.pull-left[_ngcontent-%COMP%] {\n  margin-right: 0.3em;\n}\n.fa.pull-right[_ngcontent-%COMP%] {\n  margin-left: 0.3em;\n}\n.fa-spin[_ngcontent-%COMP%] {\n  -webkit-animation: fa-spin 2s infinite linear;\n  animation: fa-spin 2s infinite linear;\n}\n.fa-pulse[_ngcontent-%COMP%] {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n  animation: fa-spin 1s infinite steps(8);\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(359deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(359deg);\n  }\n}\n.fa-rotate-90[_ngcontent-%COMP%] {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  transform: rotate(90deg);\n}\n.fa-rotate-180[_ngcontent-%COMP%] {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  transform: rotate(180deg);\n}\n.fa-rotate-270[_ngcontent-%COMP%] {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  transform: rotate(270deg);\n}\n.fa-flip-horizontal[_ngcontent-%COMP%] {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  transform: scale(-1, 1);\n}\n.fa-flip-vertical[_ngcontent-%COMP%] {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  transform: scale(1, -1);\n}\n[_ngcontent-%COMP%]:root   .fa-rotate-90[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-rotate-180[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-rotate-270[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-flip-horizontal[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-flip-vertical[_ngcontent-%COMP%] {\n  filter: none;\n}\n.fa-stack[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 2em;\n  height: 2em;\n  line-height: 2em;\n  vertical-align: middle;\n}\n.fa-stack-1x[_ngcontent-%COMP%], .fa-stack-2x[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n.fa-stack-1x[_ngcontent-%COMP%] {\n  line-height: inherit;\n}\n.fa-stack-2x[_ngcontent-%COMP%] {\n  font-size: 2em;\n}\n.fa-inverse[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.fa-glass[_ngcontent-%COMP%]:before {\n  content: \"\uF000\";\n}\n.fa-music[_ngcontent-%COMP%]:before {\n  content: \"\uF001\";\n}\n.fa-search[_ngcontent-%COMP%]:before {\n  content: \"\uF002\";\n}\n.fa-envelope-o[_ngcontent-%COMP%]:before {\n  content: \"\uF003\";\n}\n.fa-heart[_ngcontent-%COMP%]:before {\n  content: \"\uF004\";\n}\n.fa-star[_ngcontent-%COMP%]:before {\n  content: \"\uF005\";\n}\n.fa-star-o[_ngcontent-%COMP%]:before {\n  content: \"\uF006\";\n}\n.fa-user[_ngcontent-%COMP%]:before {\n  content: \"\uF007\";\n}\n.fa-film[_ngcontent-%COMP%]:before {\n  content: \"\uF008\";\n}\n.fa-th-large[_ngcontent-%COMP%]:before {\n  content: \"\uF009\";\n}\n.fa-th[_ngcontent-%COMP%]:before {\n  content: \"\uF00A\";\n}\n.fa-th-list[_ngcontent-%COMP%]:before {\n  content: \"\uF00B\";\n}\n.fa-check[_ngcontent-%COMP%]:before {\n  content: \"\uF00C\";\n}\n.fa-remove[_ngcontent-%COMP%]:before, .fa-close[_ngcontent-%COMP%]:before, .fa-times[_ngcontent-%COMP%]:before {\n  content: \"\uF00D\";\n}\n.fa-search-plus[_ngcontent-%COMP%]:before {\n  content: \"\uF00E\";\n}\n.fa-search-minus[_ngcontent-%COMP%]:before {\n  content: \"\uF010\";\n}\n.fa-power-off[_ngcontent-%COMP%]:before {\n  content: \"\uF011\";\n}\n.fa-signal[_ngcontent-%COMP%]:before {\n  content: \"\uF012\";\n}\n.fa-gear[_ngcontent-%COMP%]:before, .fa-cog[_ngcontent-%COMP%]:before {\n  content: \"\uF013\";\n}\n.fa-trash-o[_ngcontent-%COMP%]:before {\n  content: \"\uF014\";\n}\n.fa-home[_ngcontent-%COMP%]:before {\n  content: \"\uF015\";\n}\n.fa-file-o[_ngcontent-%COMP%]:before {\n  content: \"\uF016\";\n}\n.fa-clock-o[_ngcontent-%COMP%]:before {\n  content: \"\uF017\";\n}\n.fa-road[_ngcontent-%COMP%]:before {\n  content: \"\uF018\";\n}\n.fa-download[_ngcontent-%COMP%]:before {\n  content: \"\uF019\";\n}\n.fa-arrow-circle-o-down[_ngcontent-%COMP%]:before {\n  content: \"\uF01A\";\n}\n.fa-arrow-circle-o-up[_ngcontent-%COMP%]:before {\n  content: \"\uF01B\";\n}\n.fa-inbox[_ngcontent-%COMP%]:before {\n  content: \"\uF01C\";\n}\n.fa-play-circle-o[_ngcontent-%COMP%]:before {\n  content: \"\uF01D\";\n}\n.fa-rotate-right[_ngcontent-%COMP%]:before, .fa-repeat[_ngcontent-%COMP%]:before {\n  content: \"\uF01E\";\n}\n.fa-refresh[_ngcontent-%COMP%]:before {\n  content: \"\uF021\";\n}\n.fa-list-alt[_ngcontent-%COMP%]:before {\n  content: \"\uF022\";\n}\n.fa-lock[_ngcontent-%COMP%]:before {\n  content: \"\uF023\";\n}\n.fa-flag[_ngcontent-%COMP%]:before {\n  content: \"\uF024\";\n}\n.fa-headphones[_ngcontent-%COMP%]:before {\n  content: \"\uF025\";\n}\n.fa-volume-off[_ngcontent-%COMP%]:before {\n  content: \"\uF026\";\n}\n.fa-volume-down[_ngcontent-%COMP%]:before {\n  content: \"\uF027\";\n}\n.fa-volume-up[_ngcontent-%COMP%]:before {\n  content: \"\uF028\";\n}\n.fa-qrcode[_ngcontent-%COMP%]:before {\n  content: \"\uF029\";\n}\n.fa-barcode[_ngcontent-%COMP%]:before {\n  content: \"\uF02A\";\n}\n.fa-tag[_ngcontent-%COMP%]:before {\n  content: \"\uF02B\";\n}\n.fa-tags[_ngcontent-%COMP%]:before {\n  content: \"\uF02C\";\n}\n.fa-book[_ngcontent-%COMP%]:before {\n  content: \"\uF02D\";\n}\n.fa-bookmark[_ngcontent-%COMP%]:before {\n  content: \"\uF02E\";\n}\n.fa-print[_ngcontent-%COMP%]:before {\n  content: \"\uF02F\";\n}\n.fa-camera[_ngcontent-%COMP%]:before {\n  content: \"\uF030\";\n}\n.fa-font[_ngcontent-%COMP%]:before {\n  content: \"\uF031\";\n}\n.fa-bold[_ngcontent-%COMP%]:before {\n  content: \"\uF032\";\n}\n.fa-italic[_ngcontent-%COMP%]:before {\n  content: \"\uF033\";\n}\n.fa-text-height[_ngcontent-%COMP%]:before {\n  content: \"\uF034\";\n}\n.fa-text-width[_ngcontent-%COMP%]:before {\n  content: \"\uF035\";\n}\n.fa-align-left[_ngcontent-%COMP%]:before {\n  content: \"\uF036\";\n}\n.fa-align-center[_ngcontent-%COMP%]:before {\n  content: \"\uF037\";\n}\n.fa-align-right[_ngcontent-%COMP%]:before {\n  content: \"\uF038\";\n}\n.fa-align-justify[_ngcontent-%COMP%]:before {\n  content: \"\uF039\";\n}\n.fa-list[_ngcontent-%COMP%]:before {\n  content: \"\uF03A\";\n}\n.fa-dedent[_ngcontent-%COMP%]:before, .fa-outdent[_ngcontent-%COMP%]:before {\n  content: \"\uF03B\";\n}\n.fa-indent[_ngcontent-%COMP%]:before {\n  content: \"\uF03C\";\n}\n.fa-video-camera[_ngcontent-%COMP%]:before {\n  content: \"\uF03D\";\n}\n.fa-photo[_ngcontent-%COMP%]:before, .fa-image[_ngcontent-%COMP%]:before, .fa-picture-o[_ngcontent-%COMP%]:before {\n  content: \"\uF03E\";\n}\n.fa-pencil[_ngcontent-%COMP%]:before {\n  content: \"\uF040\";\n}\n.fa-map-marker[_ngcontent-%COMP%]:before {\n  content: \"\uF041\";\n}\n.fa-adjust[_ngcontent-%COMP%]:before {\n  content: \"\uF042\";\n}\n.fa-tint[_ngcontent-%COMP%]:before {\n  content: \"\uF043\";\n}\n.fa-edit[_ngcontent-%COMP%]:before, .fa-pencil-square-o[_ngcontent-%COMP%]:before {\n  content: \"\uF044\";\n}\n.fa-share-square-o[_ngcontent-%COMP%]:before {\n  content: \"\uF045\";\n}\n.fa-check-square-o[_ngcontent-%COMP%]:before {\n  content: \"\uF046\";\n}\n.fa-arrows[_ngcontent-%COMP%]:before {\n  content: \"\uF047\";\n}\n.fa-step-backward[_ngcontent-%COMP%]:before {\n  content: \"\uF048\";\n}\n.fa-fast-backward[_ngcontent-%COMP%]:before {\n  content: \"\uF049\";\n}\n.fa-backward[_ngcontent-%COMP%]:before {\n  content: \"\uF04A\";\n}\n.fa-play[_ngcontent-%COMP%]:before {\n  content: \"\uF04B\";\n}\n.fa-pause[_ngcontent-%COMP%]:before {\n  content: \"\uF04C\";\n}\n.fa-stop[_ngcontent-%COMP%]:before {\n  content: \"\uF04D\";\n}\n.fa-forward[_ngcontent-%COMP%]:before {\n  content: \"\uF04E\";\n}\n.fa-fast-forward[_ngcontent-%COMP%]:before {\n  content: \"\uF050\";\n}\n.fa-step-forward[_ngcontent-%COMP%]:before {\n  content: \"\uF051\";\n}\n.fa-eject[_ngcontent-%COMP%]:before {\n  content: \"\uF052\";\n}\n.fa-chevron-left[_ngcontent-%COMP%]:before {\n  content: \"\uF053\";\n}\n.fa-chevron-right[_ngcontent-%COMP%]:before {\n  content: \"\uF054\";\n}\n.fa-plus-circle[_ngcontent-%COMP%]:before {\n  content: \"\uF055\";\n}\n.fa-minus-circle[_ngcontent-%COMP%]:before {\n  content: \"\uF056\";\n}\n.fa-times-circle[_ngcontent-%COMP%]:before {\n  content: \"\uF057\";\n}\n.fa-check-circle[_ngcontent-%COMP%]:before {\n  content: \"\uF058\";\n}\n.fa-question-circle[_ngcontent-%COMP%]:before {\n  content: \"\uF059\";\n}\n.fa-info-circle[_ngcontent-%COMP%]:before {\n  content: \"\uF05A\";\n}\n.fa-crosshairs[_ngcontent-%COMP%]:before {\n  content: \"\uF05B\";\n}\n.fa-times-circle-o[_ngcontent-%COMP%]:before {\n  content: \"\uF05C\";\n}\n.fa-check-circle-o[_ngcontent-%COMP%]:before {\n  content: \"\uF05D\";\n}\n.fa-ban[_ngcontent-%COMP%]:before {\n  content: \"\uF05E\";\n}\n.fa-arrow-left[_ngcontent-%COMP%]:before {\n  content: \"\uF060\";\n}\n.fa-arrow-right[_ngcontent-%COMP%]:before {\n  content: \"\uF061\";\n}\n.fa-arrow-up[_ngcontent-%COMP%]:before {\n  content: \"\uF062\";\n}\n.fa-arrow-down[_ngcontent-%COMP%]:before {\n  content: \"\uF063\";\n}\n.fa-mail-forward[_ngcontent-%COMP%]:before, .fa-share[_ngcontent-%COMP%]:before {\n  content: \"\uF064\";\n}\n.fa-expand[_ngcontent-%COMP%]:before {\n  content: \"\uF065\";\n}\n.fa-compress[_ngcontent-%COMP%]:before {\n  content: \"\uF066\";\n}\n.fa-plus[_ngcontent-%COMP%]:before {\n  content: \"\uF067\";\n}\n.fa-minus[_ngcontent-%COMP%]:before {\n  content: \"\uF068\";\n}\n.fa-asterisk[_ngcontent-%COMP%]:before {\n  content: \"\uF069\";\n}\n.fa-exclamation-circle[_ngcontent-%COMP%]:before {\n  content: \"\uF06A\";\n}\n.fa-gift[_ngcontent-%COMP%]:before {\n  content: \"\uF06B\";\n}\n.fa-leaf[_ngcontent-%COMP%]:before {\n  content: \"\uF06C\";\n}\n.fa-fire[_ngcontent-%COMP%]:before {\n  content: \"\uF06D\";\n}\n.fa-eye[_ngcontent-%COMP%]:before {\n  content: \"\uF06E\";\n}\n.fa-eye-slash[_ngcontent-%COMP%]:before {\n  content: \"\uF070\";\n}\n.fa-warning[_ngcontent-%COMP%]:before, .fa-exclamation-triangle[_ngcontent-%COMP%]:before {\n  content: \"\uF071\";\n}\n.fa-plane[_ngcontent-%COMP%]:before {\n  content: \"\uF072\";\n}\n.fa-calendar[_ngcontent-%COMP%]:before {\n  content: \"\uF073\";\n}\n.fa-random[_ngcontent-%COMP%]:before {\n  content: \"\uF074\";\n}\n.fa-comment[_ngcontent-%COMP%]:before {\n  content: \"\uF075\";\n}\n.fa-magnet[_ngcontent-%COMP%]:before {\n  content: \"\uF076\";\n}\n.fa-chevron-up[_ngcontent-%COMP%]:before {\n  content: \"\uF077\";\n}\n.fa-chevron-down[_ngcontent-%COMP%]:before {\n  content: \"\uF078\";\n}\n.fa-retweet[_ngcontent-%COMP%]:before {\n  content: \"\uF079\";\n}\n.fa-shopping-cart[_ngcontent-%COMP%]:before {\n  content: \"\uF07A\";\n}\n.fa-folder[_ngcontent-%COMP%]:before {\n  content: \"\uF07B\";\n}\n.fa-folder-open[_ngcontent-%COMP%]:before {\n  content: \"\uF07C\";\n}\n.fa-arrows-v[_ngcontent-%COMP%]:before {\n  content: \"\uF07D\";\n}\n.fa-arrows-h[_ngcontent-%COMP%]:before {\n  content: \"\uF07E\";\n}\n.fa-bar-chart-o[_ngcontent-%COMP%]:before, .fa-bar-chart[_ngcontent-%COMP%]:before {\n  content: \"\uF080\";\n}\n.fa-twitter-square[_ngcontent-%COMP%]:before {\n  content: \"\uF081\";\n}\n.fa-facebook-square[_ngcontent-%COMP%]:before {\n  content: \"\uF082\";\n}\n.fa-camera-retro[_ngcontent-%COMP%]:before {\n  content: \"\uF083\";\n}\n.fa-key[_ngcontent-%COMP%]:before {\n  content: \"\uF084\";\n}\n.fa-gears[_ngcontent-%COMP%]:before, .fa-cogs[_ngcontent-%COMP%]:before {\n  content: \"\uF085\";\n}\n.fa-comments[_ngcontent-%COMP%]:before {\n  content: \"\uF086\";\n}\n.fa-thumbs-o-up[_ngcontent-%COMP%]:before {\n  content: \"\uF087\";\n}\n.fa-thumbs-o-down[_ngcontent-%COMP%]:before {\n  content: \"\uF088\";\n}\n.fa-star-half[_ngcontent-%COMP%]:before {\n  content: \"\uF089\";\n}\n.fa-heart-o[_ngcontent-%COMP%]:before {\n  content: \"\uF08A\";\n}\n.fa-sign-out[_ngcontent-%COMP%]:before {\n  content: \"\uF08B\";\n}\n.fa-linkedin-square[_ngcontent-%COMP%]:before {\n  content: \"\uF08C\";\n}\n.fa-thumb-tack[_ngcontent-%COMP%]:before {\n  content: \"\uF08D\";\n}\n.fa-external-link[_ngcontent-%COMP%]:before {\n  content: \"\uF08E\";\n}\n.fa-sign-in[_ngcontent-%COMP%]:before {\n  content: \"\uF090\";\n}\n.fa-trophy[_ngcontent-%COMP%]:before {\n  content: \"\uF091\";\n}\n.fa-github-square[_ngcontent-%COMP%]:before {\n  content: \"\uF092\";\n}\n.fa-upload[_ngcontent-%COMP%]:before {\n  content: \"\uF093\";\n}\n.fa-lemon-o[_ngcontent-%COMP%]:before {\n  content: \"\uF094\";\n}\n.fa-phone[_ngcontent-%COMP%]:before {\n  content: \"\uF095\";\n}\n.fa-square-o[_ngcontent-%COMP%]:before {\n  content: \"\uF096\";\n}\n.fa-bookmark-o[_ngcontent-%COMP%]:before {\n  content: \"\uF097\";\n}\n.fa-phone-square[_ngcontent-%COMP%]:before {\n  content: \"\uF098\";\n}\n.fa-twitter[_ngcontent-%COMP%]:before {\n  content: \"\uF099\";\n}\n.fa-facebook-f[_ngcontent-%COMP%]:before, .fa-facebook[_ngcontent-%COMP%]:before {\n  content: \"\uF09A\";\n}\n.fa-github[_ngcontent-%COMP%]:before {\n  content: \"\uF09B\";\n}\n.fa-unlock[_ngcontent-%COMP%]:before {\n  content: \"\uF09C\";\n}\n.fa-credit-card[_ngcontent-%COMP%]:before {\n  content: \"\uF09D\";\n}\n.fa-feed[_ngcontent-%COMP%]:before, .fa-rss[_ngcontent-%COMP%]:before {\n  content: \"\uF09E\";\n}\n.fa-hdd-o[_ngcontent-%COMP%]:before {\n  content: \"\uF0A0\";\n}\n.fa-bullhorn[_ngcontent-%COMP%]:before {\n  content: \"\uF0A1\";\n}\n.fa-bell[_ngcontent-%COMP%]:before {\n  content: \"\uF0F3\";\n}\n.fa-certificate[_ngcontent-%COMP%]:before {\n  content: \"\uF0A3\";\n}\n.fa-hand-o-right[_ngcontent-%COMP%]:before {\n  content: \"\uF0A4\";\n}\n.fa-hand-o-left[_ngcontent-%COMP%]:before {\n  content: \"\uF0A5\";\n}\n.fa-hand-o-up[_ngcontent-%COMP%]:before {\n  content: \"\uF0A6\";\n}\n.fa-hand-o-down[_ngcontent-%COMP%]:before {\n  content: \"\uF0A7\";\n}\n.fa-arrow-circle-left[_ngcontent-%COMP%]:before {\n  content: \"\uF0A8\";\n}\n.fa-arrow-circle-right[_ngcontent-%COMP%]:before {\n  content: \"\uF0A9\";\n}\n.fa-arrow-circle-up[_ngcontent-%COMP%]:before {\n  content: \"\uF0AA\";\n}\n.fa-arrow-circle-down[_ngcontent-%COMP%]:before {\n  content: \"\uF0AB\";\n}\n.fa-globe[_ngcontent-%COMP%]:before {\n  content: \"\uF0AC\";\n}\n.fa-wrench[_ngcontent-%COMP%]:before {\n  content: \"\uF0AD\";\n}\n.fa-tasks[_ngcontent-%COMP%]:before {\n  content: \"\uF0AE\";\n}\n.fa-filter[_ngcontent-%COMP%]:before {\n  content: \"\uF0B0\";\n}\n.fa-briefcase[_ngcontent-%COMP%]:before {\n  content: \"\uF0B1\";\n}\n.fa-arrows-alt[_ngcontent-%COMP%]:before {\n  content: \"\uF0B2\";\n}\n.fa-group[_ngcontent-%COMP%]:before, .fa-users[_ngcontent-%COMP%]:before {\n  content: \"\uF0C0\";\n}\n.fa-chain[_ngcontent-%COMP%]:before, .fa-link[_ngcontent-%COMP%]:before {\n  content: \"\uF0C1\";\n}\n.fa-cloud[_ngcontent-%COMP%]:before {\n  content: \"\uF0C2\";\n}\n.fa-flask[_ngcontent-%COMP%]:before {\n  content: \"\uF0C3\";\n}\n.fa-cut[_ngcontent-%COMP%]:before, .fa-scissors[_ngcontent-%COMP%]:before {\n  content: \"\uF0C4\";\n}\n.fa-copy[_ngcontent-%COMP%]:before, .fa-files-o[_ngcontent-%COMP%]:before {\n  content: \"\uF0C5\";\n}\n.fa-paperclip[_ngcontent-%COMP%]:before {\n  content: \"\uF0C6\";\n}\n.fa-save[_ngcontent-%COMP%]:before, .fa-floppy-o[_ngcontent-%COMP%]:before {\n  content: \"\uF0C7\";\n}\n.fa-square[_ngcontent-%COMP%]:before {\n  content: \"\uF0C8\";\n}\n.fa-navicon[_ngcontent-%COMP%]:before, .fa-reorder[_ngcontent-%COMP%]:before, .fa-bars[_ngcontent-%COMP%]:before {\n  content: \"\uF0C9\";\n}\n.fa-list-ul[_ngcontent-%COMP%]:before {\n  content: \"\uF0CA\";\n}\n.fa-list-ol[_ngcontent-%COMP%]:before {\n  content: \"\uF0CB\";\n}\n.fa-strikethrough[_ngcontent-%COMP%]:before {\n  content: \"\uF0CC\";\n}\n.fa-underline[_ngcontent-%COMP%]:before {\n  content: \"\uF0CD\";\n}\n.fa-table[_ngcontent-%COMP%]:before {\n  content: \"\uF0CE\";\n}\n.fa-magic[_ngcontent-%COMP%]:before {\n  content: \"\uF0D0\";\n}\n.fa-truck[_ngcontent-%COMP%]:before {\n  content: \"\uF0D1\";\n}\n.fa-pinterest[_ngcontent-%COMP%]:before {\n  content: \"\uF0D2\";\n}\n.fa-pinterest-square[_ngcontent-%COMP%]:before {\n  content: \"\uF0D3\";\n}\n.fa-google-plus-square[_ngcontent-%COMP%]:before {\n  content: \"\uF0D4\";\n}\n.fa-google-plus[_ngcontent-%COMP%]:before {\n  content: \"\uF0D5\";\n}\n.fa-money[_ngcontent-%COMP%]:before {\n  content: \"\uF0D6\";\n}\n.fa-caret-down[_ngcontent-%COMP%]:before {\n  content: \"\uF0D7\";\n}\n.fa-caret-up[_ngcontent-%COMP%]:before {\n  content: \"\uF0D8\";\n}\n.fa-caret-left[_ngcontent-%COMP%]:before {\n  content: \"\uF0D9\";\n}\n.fa-caret-right[_ngcontent-%COMP%]:before {\n  content: \"\uF0DA\";\n}\n.fa-columns[_ngcontent-%COMP%]:before {\n  content: \"\uF0DB\";\n}\n.fa-unsorted[_ngcontent-%COMP%]:before, .fa-sort[_ngcontent-%COMP%]:before {\n  content: \"\uF0DC\";\n}\n.fa-sort-down[_ngcontent-%COMP%]:before, .fa-sort-desc[_ngcontent-%COMP%]:before {\n  content: \"\uF0DD\";\n}\n.fa-sort-up[_ngcontent-%COMP%]:before, .fa-sort-asc[_ngcontent-%COMP%]:before {\n  content: \"\uF0DE\";\n}\n.fa-envelope[_ngcontent-%COMP%]:before {\n  content: \"\uF0E0\";\n}\n.fa-linkedin[_ngcontent-%COMP%]:before {\n  content: \"\uF0E1\";\n}\n.fa-rotate-left[_ngcontent-%COMP%]:before, .fa-undo[_ngcontent-%COMP%]:before {\n  content: \"\uF0E2\";\n}\n.fa-legal[_ngcontent-%COMP%]:before, .fa-gavel[_ngcontent-%COMP%]:before {\n  content: \"\uF0E3\";\n}\n.fa-dashboard[_ngcontent-%COMP%]:before, .fa-tachometer[_ngcontent-%COMP%]:before {\n  content: \"\uF0E4\";\n}\n.fa-comment-o[_ngcontent-%COMP%]:before {\n  content: \"\uF0E5\";\n}\n.fa-comments-o[_ngcontent-%COMP%]:before {\n  content: \"\uF0E6\";\n}\n.fa-flash[_ngcontent-%COMP%]:before, .fa-bolt[_ngcontent-%COMP%]:before {\n  content: \"\uF0E7\";\n}\n.fa-sitemap[_ngcontent-%COMP%]:before {\n  content: \"\uF0E8\";\n}\n.fa-umbrella[_ngcontent-%COMP%]:before {\n  content: \"\uF0E9\";\n}\n.fa-paste[_ngcontent-%COMP%]:before, .fa-clipboard[_ngcontent-%COMP%]:before {\n  content: \"\uF0EA\";\n}\n.fa-lightbulb-o[_ngcontent-%COMP%]:before {\n  content: \"\uF0EB\";\n}\n.fa-exchange[_ngcontent-%COMP%]:before {\n  content: \"\uF0EC\";\n}\n.fa-cloud-download[_ngcontent-%COMP%]:before {\n  content: \"\uF0ED\";\n}\n.fa-cloud-upload[_ngcontent-%COMP%]:before {\n  content: \"\uF0EE\";\n}\n.fa-user-md[_ngcontent-%COMP%]:before {\n  content: \"\uF0F0\";\n}\n.fa-stethoscope[_ngcontent-%COMP%]:before {\n  content: \"\uF0F1\";\n}\n.fa-suitcase[_ngcontent-%COMP%]:before {\n  content: \"\uF0F2\";\n}\n.fa-bell-o[_ngcontent-%COMP%]:before {\n  content: \"\uF0A2\";\n}\n.fa-coffee[_ngcontent-%COMP%]:before {\n  content: \"\uF0F4\";\n}\n.fa-cutlery[_ngcontent-%COMP%]:before {\n  content: \"\uF0F5\";\n}\n.fa-file-text-o[_ngcontent-%COMP%]:before {\n  content: \"\uF0F6\";\n}\n.fa-building-o[_ngcontent-%COMP%]:before {\n  content: \"\uF0F7\";\n}\n.fa-hospital-o[_ngcontent-%COMP%]:before {\n  content: \"\uF0F8\";\n}\n.fa-ambulance[_ngcontent-%COMP%]:before {\n  content: \"\uF0F9\";\n}\n.fa-medkit[_ngcontent-%COMP%]:before {\n  content: \"\uF0FA\";\n}\n.fa-fighter-jet[_ngcontent-%COMP%]:before {\n  content: \"\uF0FB\";\n}\n.fa-beer[_ngcontent-%COMP%]:before {\n  content: \"\uF0FC\";\n}\n.fa-h-square[_ngcontent-%COMP%]:before {\n  content: \"\uF0FD\";\n}\n.fa-plus-square[_ngcontent-%COMP%]:before {\n  content: \"\uF0FE\";\n}\n.fa-angle-double-left[_ngcontent-%COMP%]:before {\n  content: \"\uF100\";\n}\n.fa-angle-double-right[_ngcontent-%COMP%]:before {\n  content: \"\uF101\";\n}\n.fa-angle-double-up[_ngcontent-%COMP%]:before {\n  content: \"\uF102\";\n}\n.fa-angle-double-down[_ngcontent-%COMP%]:before {\n  content: \"\uF103\";\n}\n.fa-angle-left[_ngcontent-%COMP%]:before {\n  content: \"\uF104\";\n}\n.fa-angle-right[_ngcontent-%COMP%]:before {\n  content: \"\uF105\";\n}\n.fa-angle-up[_ngcontent-%COMP%]:before {\n  content: \"\uF106\";\n}\n.fa-angle-down[_ngcontent-%COMP%]:before {\n  content: \"\uF107\";\n}\n.fa-desktop[_ngcontent-%COMP%]:before {\n  content: \"\uF108\";\n}\n.fa-laptop[_ngcontent-%COMP%]:before {\n  content: \"\uF109\";\n}\n.fa-tablet[_ngcontent-%COMP%]:before {\n  content: \"\uF10A\";\n}\n.fa-mobile-phone[_ngcontent-%COMP%]:before, .fa-mobile[_ngcontent-%COMP%]:before {\n  content: \"\uF10B\";\n}\n.fa-circle-o[_ngcontent-%COMP%]:before {\n  content: \"\uF10C\";\n}\n.fa-quote-left[_ngcontent-%COMP%]:before {\n  content: \"\uF10D\";\n}\n.fa-quote-right[_ngcontent-%COMP%]:before {\n  content: \"\uF10E\";\n}\n.fa-spinner[_ngcontent-%COMP%]:before {\n  content: \"\uF110\";\n}\n.fa-circle[_ngcontent-%COMP%]:before {\n  content: \"\uF111\";\n}\n.fa-mail-reply[_ngcontent-%COMP%]:before, .fa-reply[_ngcontent-%COMP%]:before {\n  content: \"\uF112\";\n}\n.fa-github-alt[_ngcontent-%COMP%]:before {\n  content: \"\uF113\";\n}\n.fa-folder-o[_ngcontent-%COMP%]:before {\n  content: \"\uF114\";\n}\n.fa-folder-open-o[_ngcontent-%COMP%]:before {\n  content: \"\uF115\";\n}\n.fa-smile-o[_ngcontent-%COMP%]:before {\n  content: \"\uF118\";\n}\n.fa-frown-o[_ngcontent-%COMP%]:before {\n  content: \"\uF119\";\n}\n.fa-meh-o[_ngcontent-%COMP%]:before {\n  content: \"\uF11A\";\n}\n.fa-gamepad[_ngcontent-%COMP%]:before {\n  content: \"\uF11B\";\n}\n.fa-keyboard-o[_ngcontent-%COMP%]:before {\n  content: \"\uF11C\";\n}\n.fa-flag-o[_ngcontent-%COMP%]:before {\n  content: \"\uF11D\";\n}\n.fa-flag-checkered[_ngcontent-%COMP%]:before {\n  content: \"\uF11E\";\n}\n.fa-terminal[_ngcontent-%COMP%]:before {\n  content: \"\uF120\";\n}\n.fa-code[_ngcontent-%COMP%]:before {\n  content: \"\uF121\";\n}\n.fa-mail-reply-all[_ngcontent-%COMP%]:before, .fa-reply-all[_ngcontent-%COMP%]:before {\n  content: \"\uF122\";\n}\n.fa-star-half-empty[_ngcontent-%COMP%]:before, .fa-star-half-full[_ngcontent-%COMP%]:before, .fa-star-half-o[_ngcontent-%COMP%]:before {\n  content: \"\uF123\";\n}\n.fa-location-arrow[_ngcontent-%COMP%]:before {\n  content: \"\uF124\";\n}\n.fa-crop[_ngcontent-%COMP%]:before {\n  content: \"\uF125\";\n}\n.fa-code-fork[_ngcontent-%COMP%]:before {\n  content: \"\uF126\";\n}\n.fa-unlink[_ngcontent-%COMP%]:before, .fa-chain-broken[_ngcontent-%COMP%]:before {\n  content: \"\uF127\";\n}\n.fa-question[_ngcontent-%COMP%]:before {\n  content: \"\uF128\";\n}\n.fa-info[_ngcontent-%COMP%]:before {\n  content: \"\uF129\";\n}\n.fa-exclamation[_ngcontent-%COMP%]:before {\n  content: \"\uF12A\";\n}\n.fa-superscript[_ngcontent-%COMP%]:before {\n  content: \"\uF12B\";\n}\n.fa-subscript[_ngcontent-%COMP%]:before {\n  content: \"\uF12C\";\n}\n.fa-eraser[_ngcontent-%COMP%]:before {\n  content: \"\uF12D\";\n}\n.fa-puzzle-piece[_ngcontent-%COMP%]:before {\n  content: \"\uF12E\";\n}\n.fa-microphone[_ngcontent-%COMP%]:before {\n  content: \"\uF130\";\n}\n.fa-microphone-slash[_ngcontent-%COMP%]:before {\n  content: \"\uF131\";\n}\n.fa-shield[_ngcontent-%COMP%]:before {\n  content: \"\uF132\";\n}\n.fa-calendar-o[_ngcontent-%COMP%]:before {\n  content: \"\uF133\";\n}\n.fa-fire-extinguisher[_ngcontent-%COMP%]:before {\n  content: \"\uF134\";\n}\n.fa-rocket[_ngcontent-%COMP%]:before {\n  content: \"\uF135\";\n}\n.fa-maxcdn[_ngcontent-%COMP%]:before {\n  content: \"\uF136\";\n}\n.fa-chevron-circle-left[_ngcontent-%COMP%]:before {\n  content: \"\uF137\";\n}\n.fa-chevron-circle-right[_ngcontent-%COMP%]:before {\n  content: \"\uF138\";\n}\n.fa-chevron-circle-up[_ngcontent-%COMP%]:before {\n  content: \"\uF139\";\n}\n.fa-chevron-circle-down[_ngcontent-%COMP%]:before {\n  content: \"\uF13A\";\n}\n.fa-html5[_ngcontent-%COMP%]:before {\n  content: \"\uF13B\";\n}\n.fa-css3[_ngcontent-%COMP%]:before {\n  content: \"\uF13C\";\n}\n.fa-anchor[_ngcontent-%COMP%]:before {\n  content: \"\uF13D\";\n}\n.fa-unlock-alt[_ngcontent-%COMP%]:before {\n  content: \"\uF13E\";\n}\n.fa-bullseye[_ngcontent-%COMP%]:before {\n  content: \"\uF140\";\n}\n.fa-ellipsis-h[_ngcontent-%COMP%]:before {\n  content: \"\uF141\";\n}\n.fa-ellipsis-v[_ngcontent-%COMP%]:before {\n  content: \"\uF142\";\n}\n.fa-rss-square[_ngcontent-%COMP%]:before {\n  content: \"\uF143\";\n}\n.fa-play-circle[_ngcontent-%COMP%]:before {\n  content: \"\uF144\";\n}\n.fa-ticket[_ngcontent-%COMP%]:before {\n  content: \"\uF145\";\n}\n.fa-minus-square[_ngcontent-%COMP%]:before {\n  content: \"\uF146\";\n}\n.fa-minus-square-o[_ngcontent-%COMP%]:before {\n  content: \"\uF147\";\n}\n.fa-level-up[_ngcontent-%COMP%]:before {\n  content: \"\uF148\";\n}\n.fa-level-down[_ngcontent-%COMP%]:before {\n  content: \"\uF149\";\n}\n.fa-check-square[_ngcontent-%COMP%]:before {\n  content: \"\uF14A\";\n}\n.fa-pencil-square[_ngcontent-%COMP%]:before {\n  content: \"\uF14B\";\n}\n.fa-external-link-square[_ngcontent-%COMP%]:before {\n  content: \"\uF14C\";\n}\n.fa-share-square[_ngcontent-%COMP%]:before {\n  content: \"\uF14D\";\n}\n.fa-compass[_ngcontent-%COMP%]:before {\n  content: \"\uF14E\";\n}\n.fa-toggle-down[_ngcontent-%COMP%]:before, .fa-caret-square-o-down[_ngcontent-%COMP%]:before {\n  content: \"\uF150\";\n}\n.fa-toggle-up[_ngcontent-%COMP%]:before, .fa-caret-square-o-up[_ngcontent-%COMP%]:before {\n  content: \"\uF151\";\n}\n.fa-toggle-right[_ngcontent-%COMP%]:before, .fa-caret-square-o-right[_ngcontent-%COMP%]:before {\n  content: \"\uF152\";\n}\n.fa-euro[_ngcontent-%COMP%]:before, .fa-eur[_ngcontent-%COMP%]:before {\n  content: \"\uF153\";\n}\n.fa-gbp[_ngcontent-%COMP%]:before {\n  content: \"\uF154\";\n}\n.fa-dollar[_ngcontent-%COMP%]:before, .fa-usd[_ngcontent-%COMP%]:before {\n  content: \"\uF155\";\n}\n.fa-rupee[_ngcontent-%COMP%]:before, .fa-inr[_ngcontent-%COMP%]:before {\n  content: \"\uF156\";\n}\n.fa-cny[_ngcontent-%COMP%]:before, .fa-rmb[_ngcontent-%COMP%]:before, .fa-yen[_ngcontent-%COMP%]:before, .fa-jpy[_ngcontent-%COMP%]:before {\n  content: \"\uF157\";\n}\n.fa-ruble[_ngcontent-%COMP%]:before, .fa-rouble[_ngcontent-%COMP%]:before, .fa-rub[_ngcontent-%COMP%]:before {\n  content: \"\uF158\";\n}\n.fa-won[_ngcontent-%COMP%]:before, .fa-krw[_ngcontent-%COMP%]:before {\n  content: \"\uF159\";\n}\n.fa-bitcoin[_ngcontent-%COMP%]:before, .fa-btc[_ngcontent-%COMP%]:before {\n  content: \"\uF15A\";\n}\n.fa-file[_ngcontent-%COMP%]:before {\n  content: \"\uF15B\";\n}\n.fa-file-text[_ngcontent-%COMP%]:before {\n  content: \"\uF15C\";\n}\n.fa-sort-alpha-asc[_ngcontent-%COMP%]:before {\n  content: \"\uF15D\";\n}\n.fa-sort-alpha-desc[_ngcontent-%COMP%]:before {\n  content: \"\uF15E\";\n}\n.fa-sort-amount-asc[_ngcontent-%COMP%]:before {\n  content: \"\uF160\";\n}\n.fa-sort-amount-desc[_ngcontent-%COMP%]:before {\n  content: \"\uF161\";\n}\n.fa-sort-numeric-asc[_ngcontent-%COMP%]:before {\n  content: \"\uF162\";\n}\n.fa-sort-numeric-desc[_ngcontent-%COMP%]:before {\n  content: \"\uF163\";\n}\n.fa-thumbs-up[_ngcontent-%COMP%]:before {\n  content: \"\uF164\";\n}\n.fa-thumbs-down[_ngcontent-%COMP%]:before {\n  content: \"\uF165\";\n}\n.fa-youtube-square[_ngcontent-%COMP%]:before {\n  content: \"\uF166\";\n}\n.fa-youtube[_ngcontent-%COMP%]:before {\n  content: \"\uF167\";\n}\n.fa-xing[_ngcontent-%COMP%]:before {\n  content: \"\uF168\";\n}\n.fa-xing-square[_ngcontent-%COMP%]:before {\n  content: \"\uF169\";\n}\n.fa-youtube-play[_ngcontent-%COMP%]:before {\n  content: \"\uF16A\";\n}\n.fa-dropbox[_ngcontent-%COMP%]:before {\n  content: \"\uF16B\";\n}\n.fa-stack-overflow[_ngcontent-%COMP%]:before {\n  content: \"\uF16C\";\n}\n.fa-instagram[_ngcontent-%COMP%]:before {\n  content: \"\uF16D\";\n}\n.fa-flickr[_ngcontent-%COMP%]:before {\n  content: \"\uF16E\";\n}\n.fa-adn[_ngcontent-%COMP%]:before {\n  content: \"\uF170\";\n}\n.fa-bitbucket[_ngcontent-%COMP%]:before {\n  content: \"\uF171\";\n}\n.fa-bitbucket-square[_ngcontent-%COMP%]:before {\n  content: \"\uF172\";\n}\n.fa-tumblr[_ngcontent-%COMP%]:before {\n  content: \"\uF173\";\n}\n.fa-tumblr-square[_ngcontent-%COMP%]:before {\n  content: \"\uF174\";\n}\n.fa-long-arrow-down[_ngcontent-%COMP%]:before {\n  content: \"\uF175\";\n}\n.fa-long-arrow-up[_ngcontent-%COMP%]:before {\n  content: \"\uF176\";\n}\n.fa-long-arrow-left[_ngcontent-%COMP%]:before {\n  content: \"\uF177\";\n}\n.fa-long-arrow-right[_ngcontent-%COMP%]:before {\n  content: \"\uF178\";\n}\n.fa-apple[_ngcontent-%COMP%]:before {\n  content: \"\uF179\";\n}\n.fa-windows[_ngcontent-%COMP%]:before {\n  content: \"\uF17A\";\n}\n.fa-android[_ngcontent-%COMP%]:before {\n  content: \"\uF17B\";\n}\n.fa-linux[_ngcontent-%COMP%]:before {\n  content: \"\uF17C\";\n}\n.fa-dribbble[_ngcontent-%COMP%]:before {\n  content: \"\uF17D\";\n}\n.fa-skype[_ngcontent-%COMP%]:before {\n  content: \"\uF17E\";\n}\n.fa-foursquare[_ngcontent-%COMP%]:before {\n  content: \"\uF180\";\n}\n.fa-trello[_ngcontent-%COMP%]:before {\n  content: \"\uF181\";\n}\n.fa-female[_ngcontent-%COMP%]:before {\n  content: \"\uF182\";\n}\n.fa-male[_ngcontent-%COMP%]:before {\n  content: \"\uF183\";\n}\n.fa-gittip[_ngcontent-%COMP%]:before, .fa-gratipay[_ngcontent-%COMP%]:before {\n  content: \"\uF184\";\n}\n.fa-sun-o[_ngcontent-%COMP%]:before {\n  content: \"\uF185\";\n}\n.fa-moon-o[_ngcontent-%COMP%]:before {\n  content: \"\uF186\";\n}\n.fa-archive[_ngcontent-%COMP%]:before {\n  content: \"\uF187\";\n}\n.fa-bug[_ngcontent-%COMP%]:before {\n  content: \"\uF188\";\n}\n.fa-vk[_ngcontent-%COMP%]:before {\n  content: \"\uF189\";\n}\n.fa-weibo[_ngcontent-%COMP%]:before {\n  content: \"\uF18A\";\n}\n.fa-renren[_ngcontent-%COMP%]:before {\n  content: \"\uF18B\";\n}\n.fa-pagelines[_ngcontent-%COMP%]:before {\n  content: \"\uF18C\";\n}\n.fa-stack-exchange[_ngcontent-%COMP%]:before {\n  content: \"\uF18D\";\n}\n.fa-arrow-circle-o-right[_ngcontent-%COMP%]:before {\n  content: \"\uF18E\";\n}\n.fa-arrow-circle-o-left[_ngcontent-%COMP%]:before {\n  content: \"\uF190\";\n}\n.fa-toggle-left[_ngcontent-%COMP%]:before, .fa-caret-square-o-left[_ngcontent-%COMP%]:before {\n  content: \"\uF191\";\n}\n.fa-dot-circle-o[_ngcontent-%COMP%]:before {\n  content: \"\uF192\";\n}\n.fa-wheelchair[_ngcontent-%COMP%]:before {\n  content: \"\uF193\";\n}\n.fa-vimeo-square[_ngcontent-%COMP%]:before {\n  content: \"\uF194\";\n}\n.fa-turkish-lira[_ngcontent-%COMP%]:before, .fa-try[_ngcontent-%COMP%]:before {\n  content: \"\uF195\";\n}\n.fa-plus-square-o[_ngcontent-%COMP%]:before {\n  content: \"\uF196\";\n}\n.fa-space-shuttle[_ngcontent-%COMP%]:before {\n  content: \"\uF197\";\n}\n.fa-slack[_ngcontent-%COMP%]:before {\n  content: \"\uF198\";\n}\n.fa-envelope-square[_ngcontent-%COMP%]:before {\n  content: \"\uF199\";\n}\n.fa-wordpress[_ngcontent-%COMP%]:before {\n  content: \"\uF19A\";\n}\n.fa-openid[_ngcontent-%COMP%]:before {\n  content: \"\uF19B\";\n}\n.fa-institution[_ngcontent-%COMP%]:before, .fa-bank[_ngcontent-%COMP%]:before, .fa-university[_ngcontent-%COMP%]:before {\n  content: \"\uF19C\";\n}\n.fa-mortar-board[_ngcontent-%COMP%]:before, .fa-graduation-cap[_ngcontent-%COMP%]:before {\n  content: \"\uF19D\";\n}\n.fa-yahoo[_ngcontent-%COMP%]:before {\n  content: \"\uF19E\";\n}\n.fa-google[_ngcontent-%COMP%]:before {\n  content: \"\uF1A0\";\n}\n.fa-reddit[_ngcontent-%COMP%]:before {\n  content: \"\uF1A1\";\n}\n.fa-reddit-square[_ngcontent-%COMP%]:before {\n  content: \"\uF1A2\";\n}\n.fa-stumbleupon-circle[_ngcontent-%COMP%]:before {\n  content: \"\uF1A3\";\n}\n.fa-stumbleupon[_ngcontent-%COMP%]:before {\n  content: \"\uF1A4\";\n}\n.fa-delicious[_ngcontent-%COMP%]:before {\n  content: \"\uF1A5\";\n}\n.fa-digg[_ngcontent-%COMP%]:before {\n  content: \"\uF1A6\";\n}\n.fa-pied-piper-pp[_ngcontent-%COMP%]:before {\n  content: \"\uF1A7\";\n}\n.fa-pied-piper-alt[_ngcontent-%COMP%]:before {\n  content: \"\uF1A8\";\n}\n.fa-drupal[_ngcontent-%COMP%]:before {\n  content: \"\uF1A9\";\n}\n.fa-joomla[_ngcontent-%COMP%]:before {\n  content: \"\uF1AA\";\n}\n.fa-language[_ngcontent-%COMP%]:before {\n  content: \"\uF1AB\";\n}\n.fa-fax[_ngcontent-%COMP%]:before {\n  content: \"\uF1AC\";\n}\n.fa-building[_ngcontent-%COMP%]:before {\n  content: \"\uF1AD\";\n}\n.fa-child[_ngcontent-%COMP%]:before {\n  content: \"\uF1AE\";\n}\n.fa-paw[_ngcontent-%COMP%]:before {\n  content: \"\uF1B0\";\n}\n.fa-spoon[_ngcontent-%COMP%]:before {\n  content: \"\uF1B1\";\n}\n.fa-cube[_ngcontent-%COMP%]:before {\n  content: \"\uF1B2\";\n}\n.fa-cubes[_ngcontent-%COMP%]:before {\n  content: \"\uF1B3\";\n}\n.fa-behance[_ngcontent-%COMP%]:before {\n  content: \"\uF1B4\";\n}\n.fa-behance-square[_ngcontent-%COMP%]:before {\n  content: \"\uF1B5\";\n}\n.fa-steam[_ngcontent-%COMP%]:before {\n  content: \"\uF1B6\";\n}\n.fa-steam-square[_ngcontent-%COMP%]:before {\n  content: \"\uF1B7\";\n}\n.fa-recycle[_ngcontent-%COMP%]:before {\n  content: \"\uF1B8\";\n}\n.fa-automobile[_ngcontent-%COMP%]:before, .fa-car[_ngcontent-%COMP%]:before {\n  content: \"\uF1B9\";\n}\n.fa-cab[_ngcontent-%COMP%]:before, .fa-taxi[_ngcontent-%COMP%]:before {\n  content: \"\uF1BA\";\n}\n.fa-tree[_ngcontent-%COMP%]:before {\n  content: \"\uF1BB\";\n}\n.fa-spotify[_ngcontent-%COMP%]:before {\n  content: \"\uF1BC\";\n}\n.fa-deviantart[_ngcontent-%COMP%]:before {\n  content: \"\uF1BD\";\n}\n.fa-soundcloud[_ngcontent-%COMP%]:before {\n  content: \"\uF1BE\";\n}\n.fa-database[_ngcontent-%COMP%]:before {\n  content: \"\uF1C0\";\n}\n.fa-file-pdf-o[_ngcontent-%COMP%]:before {\n  content: \"\uF1C1\";\n}\n.fa-file-word-o[_ngcontent-%COMP%]:before {\n  content: \"\uF1C2\";\n}\n.fa-file-excel-o[_ngcontent-%COMP%]:before {\n  content: \"\uF1C3\";\n}\n.fa-file-powerpoint-o[_ngcontent-%COMP%]:before {\n  content: \"\uF1C4\";\n}\n.fa-file-photo-o[_ngcontent-%COMP%]:before, .fa-file-picture-o[_ngcontent-%COMP%]:before, .fa-file-image-o[_ngcontent-%COMP%]:before {\n  content: \"\uF1C5\";\n}\n.fa-file-zip-o[_ngcontent-%COMP%]:before, .fa-file-archive-o[_ngcontent-%COMP%]:before {\n  content: \"\uF1C6\";\n}\n.fa-file-sound-o[_ngcontent-%COMP%]:before, .fa-file-audio-o[_ngcontent-%COMP%]:before {\n  content: \"\uF1C7\";\n}\n.fa-file-movie-o[_ngcontent-%COMP%]:before, .fa-file-video-o[_ngcontent-%COMP%]:before {\n  content: \"\uF1C8\";\n}\n.fa-file-code-o[_ngcontent-%COMP%]:before {\n  content: \"\uF1C9\";\n}\n.fa-vine[_ngcontent-%COMP%]:before {\n  content: \"\uF1CA\";\n}\n.fa-codepen[_ngcontent-%COMP%]:before {\n  content: \"\uF1CB\";\n}\n.fa-jsfiddle[_ngcontent-%COMP%]:before {\n  content: \"\uF1CC\";\n}\n.fa-life-bouy[_ngcontent-%COMP%]:before, .fa-life-buoy[_ngcontent-%COMP%]:before, .fa-life-saver[_ngcontent-%COMP%]:before, .fa-support[_ngcontent-%COMP%]:before, .fa-life-ring[_ngcontent-%COMP%]:before {\n  content: \"\uF1CD\";\n}\n.fa-circle-o-notch[_ngcontent-%COMP%]:before {\n  content: \"\uF1CE\";\n}\n.fa-ra[_ngcontent-%COMP%]:before, .fa-resistance[_ngcontent-%COMP%]:before, .fa-rebel[_ngcontent-%COMP%]:before {\n  content: \"\uF1D0\";\n}\n.fa-ge[_ngcontent-%COMP%]:before, .fa-empire[_ngcontent-%COMP%]:before {\n  content: \"\uF1D1\";\n}\n.fa-git-square[_ngcontent-%COMP%]:before {\n  content: \"\uF1D2\";\n}\n.fa-git[_ngcontent-%COMP%]:before {\n  content: \"\uF1D3\";\n}\n.fa-y-combinator-square[_ngcontent-%COMP%]:before, .fa-yc-square[_ngcontent-%COMP%]:before, .fa-hacker-news[_ngcontent-%COMP%]:before {\n  content: \"\uF1D4\";\n}\n.fa-tencent-weibo[_ngcontent-%COMP%]:before {\n  content: \"\uF1D5\";\n}\n.fa-qq[_ngcontent-%COMP%]:before {\n  content: \"\uF1D6\";\n}\n.fa-wechat[_ngcontent-%COMP%]:before, .fa-weixin[_ngcontent-%COMP%]:before {\n  content: \"\uF1D7\";\n}\n.fa-send[_ngcontent-%COMP%]:before, .fa-paper-plane[_ngcontent-%COMP%]:before {\n  content: \"\uF1D8\";\n}\n.fa-send-o[_ngcontent-%COMP%]:before, .fa-paper-plane-o[_ngcontent-%COMP%]:before {\n  content: \"\uF1D9\";\n}\n.fa-history[_ngcontent-%COMP%]:before {\n  content: \"\uF1DA\";\n}\n.fa-circle-thin[_ngcontent-%COMP%]:before {\n  content: \"\uF1DB\";\n}\n.fa-header[_ngcontent-%COMP%]:before {\n  content: \"\uF1DC\";\n}\n.fa-paragraph[_ngcontent-%COMP%]:before {\n  content: \"\uF1DD\";\n}\n.fa-sliders[_ngcontent-%COMP%]:before {\n  content: \"\uF1DE\";\n}\n.fa-share-alt[_ngcontent-%COMP%]:before {\n  content: \"\uF1E0\";\n}\n.fa-share-alt-square[_ngcontent-%COMP%]:before {\n  content: \"\uF1E1\";\n}\n.fa-bomb[_ngcontent-%COMP%]:before {\n  content: \"\uF1E2\";\n}\n.fa-soccer-ball-o[_ngcontent-%COMP%]:before, .fa-futbol-o[_ngcontent-%COMP%]:before {\n  content: \"\uF1E3\";\n}\n.fa-tty[_ngcontent-%COMP%]:before {\n  content: \"\uF1E4\";\n}\n.fa-binoculars[_ngcontent-%COMP%]:before {\n  content: \"\uF1E5\";\n}\n.fa-plug[_ngcontent-%COMP%]:before {\n  content: \"\uF1E6\";\n}\n.fa-slideshare[_ngcontent-%COMP%]:before {\n  content: \"\uF1E7\";\n}\n.fa-twitch[_ngcontent-%COMP%]:before {\n  content: \"\uF1E8\";\n}\n.fa-yelp[_ngcontent-%COMP%]:before {\n  content: \"\uF1E9\";\n}\n.fa-newspaper-o[_ngcontent-%COMP%]:before {\n  content: \"\uF1EA\";\n}\n.fa-wifi[_ngcontent-%COMP%]:before {\n  content: \"\uF1EB\";\n}\n.fa-calculator[_ngcontent-%COMP%]:before {\n  content: \"\uF1EC\";\n}\n.fa-paypal[_ngcontent-%COMP%]:before {\n  content: \"\uF1ED\";\n}\n.fa-google-wallet[_ngcontent-%COMP%]:before {\n  content: \"\uF1EE\";\n}\n.fa-cc-visa[_ngcontent-%COMP%]:before {\n  content: \"\uF1F0\";\n}\n.fa-cc-mastercard[_ngcontent-%COMP%]:before {\n  content: \"\uF1F1\";\n}\n.fa-cc-discover[_ngcontent-%COMP%]:before {\n  content: \"\uF1F2\";\n}\n.fa-cc-amex[_ngcontent-%COMP%]:before {\n  content: \"\uF1F3\";\n}\n.fa-cc-paypal[_ngcontent-%COMP%]:before {\n  content: \"\uF1F4\";\n}\n.fa-cc-stripe[_ngcontent-%COMP%]:before {\n  content: \"\uF1F5\";\n}\n.fa-bell-slash[_ngcontent-%COMP%]:before {\n  content: \"\uF1F6\";\n}\n.fa-bell-slash-o[_ngcontent-%COMP%]:before {\n  content: \"\uF1F7\";\n}\n.fa-trash[_ngcontent-%COMP%]:before {\n  content: \"\uF1F8\";\n}\n.fa-copyright[_ngcontent-%COMP%]:before {\n  content: \"\uF1F9\";\n}\n.fa-at[_ngcontent-%COMP%]:before {\n  content: \"\uF1FA\";\n}\n.fa-eyedropper[_ngcontent-%COMP%]:before {\n  content: \"\uF1FB\";\n}\n.fa-paint-brush[_ngcontent-%COMP%]:before {\n  content: \"\uF1FC\";\n}\n.fa-birthday-cake[_ngcontent-%COMP%]:before {\n  content: \"\uF1FD\";\n}\n.fa-area-chart[_ngcontent-%COMP%]:before {\n  content: \"\uF1FE\";\n}\n.fa-pie-chart[_ngcontent-%COMP%]:before {\n  content: \"\uF200\";\n}\n.fa-line-chart[_ngcontent-%COMP%]:before {\n  content: \"\uF201\";\n}\n.fa-lastfm[_ngcontent-%COMP%]:before {\n  content: \"\uF202\";\n}\n.fa-lastfm-square[_ngcontent-%COMP%]:before {\n  content: \"\uF203\";\n}\n.fa-toggle-off[_ngcontent-%COMP%]:before {\n  content: \"\uF204\";\n}\n.fa-toggle-on[_ngcontent-%COMP%]:before {\n  content: \"\uF205\";\n}\n.fa-bicycle[_ngcontent-%COMP%]:before {\n  content: \"\uF206\";\n}\n.fa-bus[_ngcontent-%COMP%]:before {\n  content: \"\uF207\";\n}\n.fa-ioxhost[_ngcontent-%COMP%]:before {\n  content: \"\uF208\";\n}\n.fa-angellist[_ngcontent-%COMP%]:before {\n  content: \"\uF209\";\n}\n.fa-cc[_ngcontent-%COMP%]:before {\n  content: \"\uF20A\";\n}\n.fa-shekel[_ngcontent-%COMP%]:before, .fa-sheqel[_ngcontent-%COMP%]:before, .fa-ils[_ngcontent-%COMP%]:before {\n  content: \"\uF20B\";\n}\n.fa-meanpath[_ngcontent-%COMP%]:before {\n  content: \"\uF20C\";\n}\n.fa-buysellads[_ngcontent-%COMP%]:before {\n  content: \"\uF20D\";\n}\n.fa-connectdevelop[_ngcontent-%COMP%]:before {\n  content: \"\uF20E\";\n}\n.fa-dashcube[_ngcontent-%COMP%]:before {\n  content: \"\uF210\";\n}\n.fa-forumbee[_ngcontent-%COMP%]:before {\n  content: \"\uF211\";\n}\n.fa-leanpub[_ngcontent-%COMP%]:before {\n  content: \"\uF212\";\n}\n.fa-sellsy[_ngcontent-%COMP%]:before {\n  content: \"\uF213\";\n}\n.fa-shirtsinbulk[_ngcontent-%COMP%]:before {\n  content: \"\uF214\";\n}\n.fa-simplybuilt[_ngcontent-%COMP%]:before {\n  content: \"\uF215\";\n}\n.fa-skyatlas[_ngcontent-%COMP%]:before {\n  content: \"\uF216\";\n}\n.fa-cart-plus[_ngcontent-%COMP%]:before {\n  content: \"\uF217\";\n}\n.fa-cart-arrow-down[_ngcontent-%COMP%]:before {\n  content: \"\uF218\";\n}\n.fa-diamond[_ngcontent-%COMP%]:before {\n  content: \"\uF219\";\n}\n.fa-ship[_ngcontent-%COMP%]:before {\n  content: \"\uF21A\";\n}\n.fa-user-secret[_ngcontent-%COMP%]:before {\n  content: \"\uF21B\";\n}\n.fa-motorcycle[_ngcontent-%COMP%]:before {\n  content: \"\uF21C\";\n}\n.fa-street-view[_ngcontent-%COMP%]:before {\n  content: \"\uF21D\";\n}\n.fa-heartbeat[_ngcontent-%COMP%]:before {\n  content: \"\uF21E\";\n}\n.fa-venus[_ngcontent-%COMP%]:before {\n  content: \"\uF221\";\n}\n.fa-mars[_ngcontent-%COMP%]:before {\n  content: \"\uF222\";\n}\n.fa-mercury[_ngcontent-%COMP%]:before {\n  content: \"\uF223\";\n}\n.fa-intersex[_ngcontent-%COMP%]:before, .fa-transgender[_ngcontent-%COMP%]:before {\n  content: \"\uF224\";\n}\n.fa-transgender-alt[_ngcontent-%COMP%]:before {\n  content: \"\uF225\";\n}\n.fa-venus-double[_ngcontent-%COMP%]:before {\n  content: \"\uF226\";\n}\n.fa-mars-double[_ngcontent-%COMP%]:before {\n  content: \"\uF227\";\n}\n.fa-venus-mars[_ngcontent-%COMP%]:before {\n  content: \"\uF228\";\n}\n.fa-mars-stroke[_ngcontent-%COMP%]:before {\n  content: \"\uF229\";\n}\n.fa-mars-stroke-v[_ngcontent-%COMP%]:before {\n  content: \"\uF22A\";\n}\n.fa-mars-stroke-h[_ngcontent-%COMP%]:before {\n  content: \"\uF22B\";\n}\n.fa-neuter[_ngcontent-%COMP%]:before {\n  content: \"\uF22C\";\n}\n.fa-genderless[_ngcontent-%COMP%]:before {\n  content: \"\uF22D\";\n}\n.fa-facebook-official[_ngcontent-%COMP%]:before {\n  content: \"\uF230\";\n}\n.fa-pinterest-p[_ngcontent-%COMP%]:before {\n  content: \"\uF231\";\n}\n.fa-whatsapp[_ngcontent-%COMP%]:before {\n  content: \"\uF232\";\n}\n.fa-server[_ngcontent-%COMP%]:before {\n  content: \"\uF233\";\n}\n.fa-user-plus[_ngcontent-%COMP%]:before {\n  content: \"\uF234\";\n}\n.fa-user-times[_ngcontent-%COMP%]:before {\n  content: \"\uF235\";\n}\n.fa-hotel[_ngcontent-%COMP%]:before, .fa-bed[_ngcontent-%COMP%]:before {\n  content: \"\uF236\";\n}\n.fa-viacoin[_ngcontent-%COMP%]:before {\n  content: \"\uF237\";\n}\n.fa-train[_ngcontent-%COMP%]:before {\n  content: \"\uF238\";\n}\n.fa-subway[_ngcontent-%COMP%]:before {\n  content: \"\uF239\";\n}\n.fa-medium[_ngcontent-%COMP%]:before {\n  content: \"\uF23A\";\n}\n.fa-yc[_ngcontent-%COMP%]:before, .fa-y-combinator[_ngcontent-%COMP%]:before {\n  content: \"\uF23B\";\n}\n.fa-optin-monster[_ngcontent-%COMP%]:before {\n  content: \"\uF23C\";\n}\n.fa-opencart[_ngcontent-%COMP%]:before {\n  content: \"\uF23D\";\n}\n.fa-expeditedssl[_ngcontent-%COMP%]:before {\n  content: \"\uF23E\";\n}\n.fa-battery-4[_ngcontent-%COMP%]:before, .fa-battery[_ngcontent-%COMP%]:before, .fa-battery-full[_ngcontent-%COMP%]:before {\n  content: \"\uF240\";\n}\n.fa-battery-3[_ngcontent-%COMP%]:before, .fa-battery-three-quarters[_ngcontent-%COMP%]:before {\n  content: \"\uF241\";\n}\n.fa-battery-2[_ngcontent-%COMP%]:before, .fa-battery-half[_ngcontent-%COMP%]:before {\n  content: \"\uF242\";\n}\n.fa-battery-1[_ngcontent-%COMP%]:before, .fa-battery-quarter[_ngcontent-%COMP%]:before {\n  content: \"\uF243\";\n}\n.fa-battery-0[_ngcontent-%COMP%]:before, .fa-battery-empty[_ngcontent-%COMP%]:before {\n  content: \"\uF244\";\n}\n.fa-mouse-pointer[_ngcontent-%COMP%]:before {\n  content: \"\uF245\";\n}\n.fa-i-cursor[_ngcontent-%COMP%]:before {\n  content: \"\uF246\";\n}\n.fa-object-group[_ngcontent-%COMP%]:before {\n  content: \"\uF247\";\n}\n.fa-object-ungroup[_ngcontent-%COMP%]:before {\n  content: \"\uF248\";\n}\n.fa-sticky-note[_ngcontent-%COMP%]:before {\n  content: \"\uF249\";\n}\n.fa-sticky-note-o[_ngcontent-%COMP%]:before {\n  content: \"\uF24A\";\n}\n.fa-cc-jcb[_ngcontent-%COMP%]:before {\n  content: \"\uF24B\";\n}\n.fa-cc-diners-club[_ngcontent-%COMP%]:before {\n  content: \"\uF24C\";\n}\n.fa-clone[_ngcontent-%COMP%]:before {\n  content: \"\uF24D\";\n}\n.fa-balance-scale[_ngcontent-%COMP%]:before {\n  content: \"\uF24E\";\n}\n.fa-hourglass-o[_ngcontent-%COMP%]:before {\n  content: \"\uF250\";\n}\n.fa-hourglass-1[_ngcontent-%COMP%]:before, .fa-hourglass-start[_ngcontent-%COMP%]:before {\n  content: \"\uF251\";\n}\n.fa-hourglass-2[_ngcontent-%COMP%]:before, .fa-hourglass-half[_ngcontent-%COMP%]:before {\n  content: \"\uF252\";\n}\n.fa-hourglass-3[_ngcontent-%COMP%]:before, .fa-hourglass-end[_ngcontent-%COMP%]:before {\n  content: \"\uF253\";\n}\n.fa-hourglass[_ngcontent-%COMP%]:before {\n  content: \"\uF254\";\n}\n.fa-hand-grab-o[_ngcontent-%COMP%]:before, .fa-hand-rock-o[_ngcontent-%COMP%]:before {\n  content: \"\uF255\";\n}\n.fa-hand-stop-o[_ngcontent-%COMP%]:before, .fa-hand-paper-o[_ngcontent-%COMP%]:before {\n  content: \"\uF256\";\n}\n.fa-hand-scissors-o[_ngcontent-%COMP%]:before {\n  content: \"\uF257\";\n}\n.fa-hand-lizard-o[_ngcontent-%COMP%]:before {\n  content: \"\uF258\";\n}\n.fa-hand-spock-o[_ngcontent-%COMP%]:before {\n  content: \"\uF259\";\n}\n.fa-hand-pointer-o[_ngcontent-%COMP%]:before {\n  content: \"\uF25A\";\n}\n.fa-hand-peace-o[_ngcontent-%COMP%]:before {\n  content: \"\uF25B\";\n}\n.fa-trademark[_ngcontent-%COMP%]:before {\n  content: \"\uF25C\";\n}\n.fa-registered[_ngcontent-%COMP%]:before {\n  content: \"\uF25D\";\n}\n.fa-creative-commons[_ngcontent-%COMP%]:before {\n  content: \"\uF25E\";\n}\n.fa-gg[_ngcontent-%COMP%]:before {\n  content: \"\uF260\";\n}\n.fa-gg-circle[_ngcontent-%COMP%]:before {\n  content: \"\uF261\";\n}\n.fa-tripadvisor[_ngcontent-%COMP%]:before {\n  content: \"\uF262\";\n}\n.fa-odnoklassniki[_ngcontent-%COMP%]:before {\n  content: \"\uF263\";\n}\n.fa-odnoklassniki-square[_ngcontent-%COMP%]:before {\n  content: \"\uF264\";\n}\n.fa-get-pocket[_ngcontent-%COMP%]:before {\n  content: \"\uF265\";\n}\n.fa-wikipedia-w[_ngcontent-%COMP%]:before {\n  content: \"\uF266\";\n}\n.fa-safari[_ngcontent-%COMP%]:before {\n  content: \"\uF267\";\n}\n.fa-chrome[_ngcontent-%COMP%]:before {\n  content: \"\uF268\";\n}\n.fa-firefox[_ngcontent-%COMP%]:before {\n  content: \"\uF269\";\n}\n.fa-opera[_ngcontent-%COMP%]:before {\n  content: \"\uF26A\";\n}\n.fa-internet-explorer[_ngcontent-%COMP%]:before {\n  content: \"\uF26B\";\n}\n.fa-tv[_ngcontent-%COMP%]:before, .fa-television[_ngcontent-%COMP%]:before {\n  content: \"\uF26C\";\n}\n.fa-contao[_ngcontent-%COMP%]:before {\n  content: \"\uF26D\";\n}\n.fa-500px[_ngcontent-%COMP%]:before {\n  content: \"\uF26E\";\n}\n.fa-amazon[_ngcontent-%COMP%]:before {\n  content: \"\uF270\";\n}\n.fa-calendar-plus-o[_ngcontent-%COMP%]:before {\n  content: \"\uF271\";\n}\n.fa-calendar-minus-o[_ngcontent-%COMP%]:before {\n  content: \"\uF272\";\n}\n.fa-calendar-times-o[_ngcontent-%COMP%]:before {\n  content: \"\uF273\";\n}\n.fa-calendar-check-o[_ngcontent-%COMP%]:before {\n  content: \"\uF274\";\n}\n.fa-industry[_ngcontent-%COMP%]:before {\n  content: \"\uF275\";\n}\n.fa-map-pin[_ngcontent-%COMP%]:before {\n  content: \"\uF276\";\n}\n.fa-map-signs[_ngcontent-%COMP%]:before {\n  content: \"\uF277\";\n}\n.fa-map-o[_ngcontent-%COMP%]:before {\n  content: \"\uF278\";\n}\n.fa-map[_ngcontent-%COMP%]:before {\n  content: \"\uF279\";\n}\n.fa-commenting[_ngcontent-%COMP%]:before {\n  content: \"\uF27A\";\n}\n.fa-commenting-o[_ngcontent-%COMP%]:before {\n  content: \"\uF27B\";\n}\n.fa-houzz[_ngcontent-%COMP%]:before {\n  content: \"\uF27C\";\n}\n.fa-vimeo[_ngcontent-%COMP%]:before {\n  content: \"\uF27D\";\n}\n.fa-black-tie[_ngcontent-%COMP%]:before {\n  content: \"\uF27E\";\n}\n.fa-fonticons[_ngcontent-%COMP%]:before {\n  content: \"\uF280\";\n}\n.fa-reddit-alien[_ngcontent-%COMP%]:before {\n  content: \"\uF281\";\n}\n.fa-edge[_ngcontent-%COMP%]:before {\n  content: \"\uF282\";\n}\n.fa-credit-card-alt[_ngcontent-%COMP%]:before {\n  content: \"\uF283\";\n}\n.fa-codiepie[_ngcontent-%COMP%]:before {\n  content: \"\uF284\";\n}\n.fa-modx[_ngcontent-%COMP%]:before {\n  content: \"\uF285\";\n}\n.fa-fort-awesome[_ngcontent-%COMP%]:before {\n  content: \"\uF286\";\n}\n.fa-usb[_ngcontent-%COMP%]:before {\n  content: \"\uF287\";\n}\n.fa-product-hunt[_ngcontent-%COMP%]:before {\n  content: \"\uF288\";\n}\n.fa-mixcloud[_ngcontent-%COMP%]:before {\n  content: \"\uF289\";\n}\n.fa-scribd[_ngcontent-%COMP%]:before {\n  content: \"\uF28A\";\n}\n.fa-pause-circle[_ngcontent-%COMP%]:before {\n  content: \"\uF28B\";\n}\n.fa-pause-circle-o[_ngcontent-%COMP%]:before {\n  content: \"\uF28C\";\n}\n.fa-stop-circle[_ngcontent-%COMP%]:before {\n  content: \"\uF28D\";\n}\n.fa-stop-circle-o[_ngcontent-%COMP%]:before {\n  content: \"\uF28E\";\n}\n.fa-shopping-bag[_ngcontent-%COMP%]:before {\n  content: \"\uF290\";\n}\n.fa-shopping-basket[_ngcontent-%COMP%]:before {\n  content: \"\uF291\";\n}\n.fa-hashtag[_ngcontent-%COMP%]:before {\n  content: \"\uF292\";\n}\n.fa-bluetooth[_ngcontent-%COMP%]:before {\n  content: \"\uF293\";\n}\n.fa-bluetooth-b[_ngcontent-%COMP%]:before {\n  content: \"\uF294\";\n}\n.fa-percent[_ngcontent-%COMP%]:before {\n  content: \"\uF295\";\n}\n.fa-gitlab[_ngcontent-%COMP%]:before {\n  content: \"\uF296\";\n}\n.fa-wpbeginner[_ngcontent-%COMP%]:before {\n  content: \"\uF297\";\n}\n.fa-wpforms[_ngcontent-%COMP%]:before {\n  content: \"\uF298\";\n}\n.fa-envira[_ngcontent-%COMP%]:before {\n  content: \"\uF299\";\n}\n.fa-universal-access[_ngcontent-%COMP%]:before {\n  content: \"\uF29A\";\n}\n.fa-wheelchair-alt[_ngcontent-%COMP%]:before {\n  content: \"\uF29B\";\n}\n.fa-question-circle-o[_ngcontent-%COMP%]:before {\n  content: \"\uF29C\";\n}\n.fa-blind[_ngcontent-%COMP%]:before {\n  content: \"\uF29D\";\n}\n.fa-audio-description[_ngcontent-%COMP%]:before {\n  content: \"\uF29E\";\n}\n.fa-volume-control-phone[_ngcontent-%COMP%]:before {\n  content: \"\uF2A0\";\n}\n.fa-braille[_ngcontent-%COMP%]:before {\n  content: \"\uF2A1\";\n}\n.fa-assistive-listening-systems[_ngcontent-%COMP%]:before {\n  content: \"\uF2A2\";\n}\n.fa-asl-interpreting[_ngcontent-%COMP%]:before, .fa-american-sign-language-interpreting[_ngcontent-%COMP%]:before {\n  content: \"\uF2A3\";\n}\n.fa-deafness[_ngcontent-%COMP%]:before, .fa-hard-of-hearing[_ngcontent-%COMP%]:before, .fa-deaf[_ngcontent-%COMP%]:before {\n  content: \"\uF2A4\";\n}\n.fa-glide[_ngcontent-%COMP%]:before {\n  content: \"\uF2A5\";\n}\n.fa-glide-g[_ngcontent-%COMP%]:before {\n  content: \"\uF2A6\";\n}\n.fa-signing[_ngcontent-%COMP%]:before, .fa-sign-language[_ngcontent-%COMP%]:before {\n  content: \"\uF2A7\";\n}\n.fa-low-vision[_ngcontent-%COMP%]:before {\n  content: \"\uF2A8\";\n}\n.fa-viadeo[_ngcontent-%COMP%]:before {\n  content: \"\uF2A9\";\n}\n.fa-viadeo-square[_ngcontent-%COMP%]:before {\n  content: \"\uF2AA\";\n}\n.fa-snapchat[_ngcontent-%COMP%]:before {\n  content: \"\uF2AB\";\n}\n.fa-snapchat-ghost[_ngcontent-%COMP%]:before {\n  content: \"\uF2AC\";\n}\n.fa-snapchat-square[_ngcontent-%COMP%]:before {\n  content: \"\uF2AD\";\n}\n.fa-pied-piper[_ngcontent-%COMP%]:before {\n  content: \"\uF2AE\";\n}\n.fa-first-order[_ngcontent-%COMP%]:before {\n  content: \"\uF2B0\";\n}\n.fa-yoast[_ngcontent-%COMP%]:before {\n  content: \"\uF2B1\";\n}\n.fa-themeisle[_ngcontent-%COMP%]:before {\n  content: \"\uF2B2\";\n}\n.fa-google-plus-circle[_ngcontent-%COMP%]:before, .fa-google-plus-official[_ngcontent-%COMP%]:before {\n  content: \"\uF2B3\";\n}\n.fa-fa[_ngcontent-%COMP%]:before, .fa-font-awesome[_ngcontent-%COMP%]:before {\n  content: \"\uF2B4\";\n}\n.fa-handshake-o[_ngcontent-%COMP%]:before {\n  content: \"\uF2B5\";\n}\n.fa-envelope-open[_ngcontent-%COMP%]:before {\n  content: \"\uF2B6\";\n}\n.fa-envelope-open-o[_ngcontent-%COMP%]:before {\n  content: \"\uF2B7\";\n}\n.fa-linode[_ngcontent-%COMP%]:before {\n  content: \"\uF2B8\";\n}\n.fa-address-book[_ngcontent-%COMP%]:before {\n  content: \"\uF2B9\";\n}\n.fa-address-book-o[_ngcontent-%COMP%]:before {\n  content: \"\uF2BA\";\n}\n.fa-vcard[_ngcontent-%COMP%]:before, .fa-address-card[_ngcontent-%COMP%]:before {\n  content: \"\uF2BB\";\n}\n.fa-vcard-o[_ngcontent-%COMP%]:before, .fa-address-card-o[_ngcontent-%COMP%]:before {\n  content: \"\uF2BC\";\n}\n.fa-user-circle[_ngcontent-%COMP%]:before {\n  content: \"\uF2BD\";\n}\n.fa-user-circle-o[_ngcontent-%COMP%]:before {\n  content: \"\uF2BE\";\n}\n.fa-user-o[_ngcontent-%COMP%]:before {\n  content: \"\uF2C0\";\n}\n.fa-id-badge[_ngcontent-%COMP%]:before {\n  content: \"\uF2C1\";\n}\n.fa-drivers-license[_ngcontent-%COMP%]:before, .fa-id-card[_ngcontent-%COMP%]:before {\n  content: \"\uF2C2\";\n}\n.fa-drivers-license-o[_ngcontent-%COMP%]:before, .fa-id-card-o[_ngcontent-%COMP%]:before {\n  content: \"\uF2C3\";\n}\n.fa-quora[_ngcontent-%COMP%]:before {\n  content: \"\uF2C4\";\n}\n.fa-free-code-camp[_ngcontent-%COMP%]:before {\n  content: \"\uF2C5\";\n}\n.fa-telegram[_ngcontent-%COMP%]:before {\n  content: \"\uF2C6\";\n}\n.fa-thermometer-4[_ngcontent-%COMP%]:before, .fa-thermometer[_ngcontent-%COMP%]:before, .fa-thermometer-full[_ngcontent-%COMP%]:before {\n  content: \"\uF2C7\";\n}\n.fa-thermometer-3[_ngcontent-%COMP%]:before, .fa-thermometer-three-quarters[_ngcontent-%COMP%]:before {\n  content: \"\uF2C8\";\n}\n.fa-thermometer-2[_ngcontent-%COMP%]:before, .fa-thermometer-half[_ngcontent-%COMP%]:before {\n  content: \"\uF2C9\";\n}\n.fa-thermometer-1[_ngcontent-%COMP%]:before, .fa-thermometer-quarter[_ngcontent-%COMP%]:before {\n  content: \"\uF2CA\";\n}\n.fa-thermometer-0[_ngcontent-%COMP%]:before, .fa-thermometer-empty[_ngcontent-%COMP%]:before {\n  content: \"\uF2CB\";\n}\n.fa-shower[_ngcontent-%COMP%]:before {\n  content: \"\uF2CC\";\n}\n.fa-bathtub[_ngcontent-%COMP%]:before, .fa-s15[_ngcontent-%COMP%]:before, .fa-bath[_ngcontent-%COMP%]:before {\n  content: \"\uF2CD\";\n}\n.fa-podcast[_ngcontent-%COMP%]:before {\n  content: \"\uF2CE\";\n}\n.fa-window-maximize[_ngcontent-%COMP%]:before {\n  content: \"\uF2D0\";\n}\n.fa-window-minimize[_ngcontent-%COMP%]:before {\n  content: \"\uF2D1\";\n}\n.fa-window-restore[_ngcontent-%COMP%]:before {\n  content: \"\uF2D2\";\n}\n.fa-times-rectangle[_ngcontent-%COMP%]:before, .fa-window-close[_ngcontent-%COMP%]:before {\n  content: \"\uF2D3\";\n}\n.fa-times-rectangle-o[_ngcontent-%COMP%]:before, .fa-window-close-o[_ngcontent-%COMP%]:before {\n  content: \"\uF2D4\";\n}\n.fa-bandcamp[_ngcontent-%COMP%]:before {\n  content: \"\uF2D5\";\n}\n.fa-grav[_ngcontent-%COMP%]:before {\n  content: \"\uF2D6\";\n}\n.fa-etsy[_ngcontent-%COMP%]:before {\n  content: \"\uF2D7\";\n}\n.fa-imdb[_ngcontent-%COMP%]:before {\n  content: \"\uF2D8\";\n}\n.fa-ravelry[_ngcontent-%COMP%]:before {\n  content: \"\uF2D9\";\n}\n.fa-eercast[_ngcontent-%COMP%]:before {\n  content: \"\uF2DA\";\n}\n.fa-microchip[_ngcontent-%COMP%]:before {\n  content: \"\uF2DB\";\n}\n.fa-snowflake-o[_ngcontent-%COMP%]:before {\n  content: \"\uF2DC\";\n}\n.fa-superpowers[_ngcontent-%COMP%]:before {\n  content: \"\uF2DD\";\n}\n.fa-wpexplorer[_ngcontent-%COMP%]:before {\n  content: \"\uF2DE\";\n}\n.fa-meetup[_ngcontent-%COMP%]:before {\n  content: \"\uF2E0\";\n}\n.sr-only[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n.sr-only-focusable[_ngcontent-%COMP%]:active, .sr-only-focusable[_ngcontent-%COMP%]:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n}\nfooter[_ngcontent-%COMP%] {\n  background: #16222A;\n  background: linear-gradient(59deg, #142401, #786546);\n  color: white;\n}\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 14px;\n  transition-duration: 0.2s;\n}\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #FA944B;\n  text-decoration: none;\n}\n.copy[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding: 10px;\n  border-top: 1px solid #FFFFFF;\n}\n.footer-middle[_ngcontent-%COMP%] {\n  padding-top: 2em;\n  color: white;\n}\n\n\nul.social-network[_ngcontent-%COMP%] {\n  list-style: none;\n  display: inline;\n  margin-left: 0 !important;\n  padding: 0;\n}\nul.social-network[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline;\n  margin: 0 5px;\n}\n\n.social-network[_ngcontent-%COMP%]   a.icoFacebook[_ngcontent-%COMP%]:hover {\n  background-color: #3B5998;\n}\n.social-network[_ngcontent-%COMP%]   a.icoLinkedin[_ngcontent-%COMP%]:hover {\n  background-color: #007bb7;\n}\n.social-network[_ngcontent-%COMP%]   a.icoFacebook[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], .social-network[_ngcontent-%COMP%]   a.icoLinkedin[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.social-network[_ngcontent-%COMP%]   a.socialIcon[_ngcontent-%COMP%]:hover, .socialHoverClass[_ngcontent-%COMP%] {\n  color: #44BCDD;\n}\n.social-circle[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  margin: 0 auto 0 auto;\n  border-radius: 50%;\n  text-align: center;\n  width: 30px;\n  height: 30px;\n  font-size: 15px;\n}\n.social-circle[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin: 0;\n  line-height: 30px;\n  text-align: center;\n}\n.social-circle[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], .triggeredHover[_ngcontent-%COMP%] {\n  -moz-transform: rotate(360deg);\n  -webkit-transform: rotate(360deg);\n  -ms--transform: rotate(360deg);\n  transform: rotate(360deg);\n  transition: all 0.2s;\n}\n.social-circle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #595959;\n  transition: all 0.8s;\n}\n.social-network[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background-color: #F9F9F9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9saWJzL2ZvbnQtYXdlc29tZS00LjcuMC9zY3NzL2ZvbnQtYXdlc29tZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2xpYnMvZm9udC1hd2Vzb21lLTQuNy4wL3Njc3MvX3BhdGguc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9saWJzL2ZvbnQtYXdlc29tZS00LjcuMC9zY3NzL19jb3JlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvbGlicy9mb250LWF3ZXNvbWUtNC43LjAvc2Nzcy9fbGFyZ2VyLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvbGlicy9mb250LWF3ZXNvbWUtNC43LjAvc2Nzcy9fZml4ZWQtd2lkdGguc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9saWJzL2ZvbnQtYXdlc29tZS00LjcuMC9zY3NzL19saXN0LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvbGlicy9mb250LWF3ZXNvbWUtNC43LjAvc2Nzcy9fdmFyaWFibGVzLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvbGlicy9mb250LWF3ZXNvbWUtNC43LjAvc2Nzcy9fYm9yZGVyZWQtcHVsbGVkLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvbGlicy9mb250LWF3ZXNvbWUtNC43LjAvc2Nzcy9fYW5pbWF0ZWQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9saWJzL2ZvbnQtYXdlc29tZS00LjcuMC9zY3NzL19yb3RhdGVkLWZsaXBwZWQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9saWJzL2ZvbnQtYXdlc29tZS00LjcuMC9zY3NzL19taXhpbnMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9saWJzL2ZvbnQtYXdlc29tZS00LjcuMC9zY3NzL19zdGFja2VkLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvbGlicy9mb250LWF3ZXNvbWUtNC43LjAvc2Nzcy9faWNvbnMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9saWJzL2ZvbnQtYXdlc29tZS00LjcuMC9zY3NzL19zY3JlZW4tcmVhZGVyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQ2hCLFNBQUE7QUNEQTs7O0VBQUE7QUNBQTsrQkFBQTtBQUdBO0VBQ0UsMEJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtRQUFBO0VBTUEsbUJBQUE7RUFDQSxrQkFBQTtBRkNGO0FHWEE7RUFDRSxxQkFBQTtFQUNBLDZDQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7QUhhRjtBSW5CQSw2REFBQTtBQUNBO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FKc0JGO0FJcEJBO0VBQXdCLGNBQUE7QUp3QnhCO0FJdkJBO0VBQXdCLGNBQUE7QUoyQnhCO0FJMUJBO0VBQXdCLGNBQUE7QUo4QnhCO0FJN0JBO0VBQXdCLGNBQUE7QUppQ3hCO0FLM0NBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtBTDhDRjtBTS9DQTtFQUNFLGVBQUE7RUFDQSwyQkNNb0I7RURMcEIscUJBQUE7QU5rREY7QU1qREU7RUFBTyxrQkFBQTtBTm9EVDtBTWxEQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkNEb0I7RURFcEIsbUJBQUE7RUFDQSxrQkFBQTtBTnFERjtBTXBERTtFQUNFLHFCQUFBO0FOc0RKO0FRbkVBO0VBQ0UsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0FSc0VGO0FRbkVBO0VBQStCLFdBQUE7QVJ1RS9CO0FRdEVBO0VBQWdDLFlBQUE7QVIwRWhDO0FRdkVFO0VBQWdDLG1CQUFBO0FSMkVsQztBUTFFRTtFQUFpQyxrQkFBQTtBUjZFbkM7QVExRUEsMkJBQUE7QUFDQTtFQUFjLFlBQUE7QVI4RWQ7QVE3RUE7RUFBYSxXQUFBO0FSaUZiO0FROUVFO0VBQWMsbUJBQUE7QVJrRmhCO0FRakZFO0VBQWUsa0JBQUE7QVJvRmpCO0FTeEdBO0VBQ0UsNkNBQUE7RUFDUSxxQ0FBQTtBVDJHVjtBU3hHQTtFQUNFLCtDQUFBO0VBQ1EsdUNBQUE7QVQyR1Y7QVN4R0E7RUFDRTtJQUVVLHVCQUFBO0VUMkdWO0VTekdBO0lBRVUseUJBQUE7RVQyR1Y7QUFDRjtBU3hHQTtFQUNFO0lBRVUsdUJBQUE7RVQwR1Y7RVN4R0E7SUFFVSx5QkFBQTtFVDBHVjtBQUNGO0FVdklBO0VDV0Usc0VBQUE7RUFHUSx3QkFBQTtBWCtIVjtBVTVJQTtFQ1VFLHNFQUFBO0VBR1EseUJBQUE7QVhzSVY7QVVsSkE7RUNTRSxzRUFBQTtFQUdRLHlCQUFBO0FYNklWO0FVdkpBO0VDY0UsZ0ZBQUE7RUFHUSx1QkFBQTtBWDZJVjtBVTdKQTtFQ2FFLGdGQUFBO0VBR1EsdUJBQUE7QVhvSlY7QVUvSkE7Ozs7O0VBS0UsWUFBQTtBVmtLRjtBWWpMQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QVpvTEY7QVlsTEE7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QVpxTEY7QVluTEE7RUFBOEIsb0JBQUE7QVp1TDlCO0FZdExBO0VBQThCLGNBQUE7QVowTDlCO0FZekxBO0VBQTZCLFdMVFA7QVBzTXRCO0FhaE5BO21FQUFBO0FBR0E7RUFBa0MsWU53VW5CO0FQckhmO0FhbE5BO0VBQWtDLFlOMmRuQjtBUHJRZjtBYXJOQTtFQUFtQyxZTjBqQm5CO0FQaldoQjtBYXhOQTtFQUF1QyxZTnNPbkI7QVBWcEI7QWEzTkE7RUFBa0MsWU51V25CO0FQeElmO0FhOU5BO0VBQWlDLFlOa25CbkI7QVBoWmQ7QWFqT0E7RUFBbUMsWU5zbkJuQjtBUGpaaEI7QWFwT0E7RUFBaUMsWU55dEJuQjtBUGpmZDtBYXZPQTtFQUFpQyxZTm1SbkI7QVB4Q2Q7QWExT0E7RUFBcUMsWU51cEJuQjtBUHphbEI7QWE3T0E7RUFBK0IsWU5xcEJuQjtBUHBhWjtBYWhQQTtFQUFvQyxZTnNwQm5CO0FQbGFqQjtBYW5QQTtFQUFrQyxZTnlJbkI7QVA4R2Y7QWF0UEE7OztFQUVrQyxZTnFxQm5CO0FQM2FmO0FhelBBO0VBQXdDLFlOOGlCbkI7QVBqVHJCO0FhNVBBO0VBQXlDLFlONGlCbkI7QVA1U3RCO0FhL1BBO0VBQXNDLFlONGZuQjtBUHpQbkI7QWFsUUE7RUFBbUMsWU5pa0JuQjtBUDNUaEI7QWFyUUE7O0VBQ2dDLFlOZ0tuQjtBUHlHYjtBYXhRQTtFQUFvQyxZTitxQm5CO0FQbmFqQjtBYTNRQTtFQUFpQyxZTndWbkI7QVB6RWQ7QWE5UUE7RUFBbUMsWU51UG5CO0FQMkJoQjtBYWpSQTtFQUFvQyxZTmdKbkI7QVBxSWpCO0FhcFJBO0VBQWlDLFlObWhCbkI7QVAzUGQ7QWF2UkE7RUFBcUMsWU5nTW5CO0FQMkZsQjtBYTFSQTtFQUFnRCxZTlluQjtBUGtSN0I7QWE3UkE7RUFBOEMsWU5jbkI7QVBtUjNCO0FhaFNBO0VBQWtDLFlOcVduQjtBUGpFZjtBYW5TQTtFQUEwQyxZTndlbkI7QVBqTXZCO0FhdFNBOztFQUNtQyxZTnNnQm5CO0FQNU5oQjtBYXpTQTtFQUFvQyxZTmdnQm5CO0FQbk5qQjtBYTVTQTtFQUFxQyxZTndZbkI7QVB4RmxCO0FhL1NBO0VBQWlDLFlOMlluQjtBUHhGZDtBYWxUQTtFQUFpQyxZTjRQbkI7QVAwRGQ7QWFyVEE7RUFBdUMsWU5vVW5CO0FQWHBCO0FheFRBO0VBQXVDLFlOaXRCbkI7QVByWnBCO0FhM1RBO0VBQXdDLFlOK3NCbkI7QVBoWnJCO0FhOVRBO0VBQXNDLFlOZ3RCbkI7QVA5WW5CO0FhalVBO0VBQW1DLFlOeWVuQjtBUHBLaEI7QWFwVUE7RUFBb0MsWU53Qm5CO0FQZ1RqQjtBYXZVQTtFQUFnQyxZTnltQm5CO0FQOVJiO0FhMVVBO0VBQWlDLFlOeW1CbkI7QVAzUmQ7QWE3VUE7RUFBaUMsWU55RG5CO0FQd1JkO0FhaFZBO0VBQXFDLFlOeURuQjtBUDJSbEI7QWFuVkE7RUFBa0MsWU4rZG5CO0FQeElmO0FhdFZBO0VBQW1DLFlOMkVuQjtBUCtRaEI7QWF6VkE7RUFBaUMsWU4wUG5CO0FQbUdkO0FhNVZBO0VBQWlDLFlOaURuQjtBUCtTZDtBYS9WQTtFQUFtQyxZTjBWbkI7QVBTaEI7QWFsV0E7RUFBd0MsWU53bUJuQjtBUGxRckI7QWFyV0E7RUFBdUMsWU53bUJuQjtBUC9QcEI7QWF4V0E7RUFBdUMsWU5wQ25CO0FQZ1pwQjtBYTNXQTtFQUF5QyxZTnZDbkI7QVBzWnRCO0FhOVdBO0VBQXdDLFlOckNuQjtBUHVackI7QWFqWEE7RUFBMEMsWU54Q25CO0FQNlp2QjtBYXBYQTtFQUFpQyxZTitXbkI7QVBTZDtBYXZYQTs7RUFDb0MsWU4yYW5CO0FQaERqQjtBYTFYQTtFQUFtQyxZTnNVbkI7QVB3RGhCO0FhN1hBO0VBQXlDLFlOa3JCbkI7QVBqVHRCO0FhaFlBOzs7RUFFc0MsWU4wYm5CO0FQdERuQjtBYW5ZQTtFQUFtQyxZTmtibkI7QVAzQ2hCO0FhdFlBO0VBQXVDLFlOd1huQjtBUGtCcEI7QWF6WUE7RUFBbUMsWU50RG5CO0FQbWNoQjtBYTVZQTtFQUFpQyxZTm1uQm5CO0FQbk9kO0FhL1lBOztFQUM0QyxZTithbkI7QVA1QnpCO0FhbFpBO0VBQTJDLFlOOGZuQjtBUHhHeEI7QWFyWkE7RUFBMkMsWU4rRW5CO0FQMFV4QjtBYXhaQTtFQUFtQyxZTnpCbkI7QVBxYmhCO0FhM1pBO0VBQTBDLFlObWpCbkI7QVBwSnZCO0FhOVpBO0VBQTBDLFlOcUxuQjtBUDZPdkI7QWFqYUE7RUFBcUMsWU5sQm5CO0FQdWJsQjtBYXBhQTtFQUFpQyxZTnNibkI7QVBkZDtBYXZhQTtFQUFrQyxZTmdhbkI7QVBXZjtBYTFhQTtFQUFpQyxZTm1qQm5CO0FQcklkO0FhN2FBO0VBQW9DLFlOK05uQjtBUGtOakI7QWFoYkE7RUFBeUMsWU5nTG5CO0FQb1F0QjtBYW5iQTtFQUF5QyxZTjRpQm5CO0FQckh0QjtBYXRiQTtFQUFrQyxZTitJbkI7QVAyU2Y7QWF6YkE7RUFBeUMsWU55RW5CO0FQb1h0QjtBYTViQTtFQUEwQyxZTnlFbkI7QVB1WHZCO0FhL2JBO0VBQXdDLFlOa2JuQjtBUGlCckI7QWFsY0E7RUFBeUMsWU51WG5CO0FQK0V0QjtBYXJjQTtFQUF5QyxZTjJsQm5CO0FQbEp0QjtBYXhjQTtFQUF5QyxZTjJEbkI7QVBpWnRCO0FhM2NBO0VBQTRDLFlOeWJuQjtBUHNCekI7QWE5Y0E7RUFBd0MsWU4wU25CO0FQd0tyQjtBYWpkQTtFQUF1QyxZTjBHbkI7QVAyV3BCO0FhcGRBO0VBQTJDLFlOdWxCbkI7QVAvSHhCO0FhdmRBO0VBQTJDLFlOdURuQjtBUG9heEI7QWExZEE7RUFBZ0MsWU5uQ25CO0FQaWdCYjtBYTdkQTtFQUF1QyxZTm5EbkI7QVBvaEJwQjtBYWhlQTtFQUF3QyxZTm5EbkI7QVB1aEJyQjtBYW5lQTtFQUFxQyxZTm5EbkI7QVAwaEJsQjtBYXRlQTtFQUF1QyxZTnZEbkI7QVBpaUJwQjtBYXplQTs7RUFDa0MsWU40ZG5CO0FQaUJmO0FhNWVBO0VBQW1DLFlOOEluQjtBUGtXaEI7QWEvZUE7RUFBcUMsWU5zRm5CO0FQNlpsQjtBYWxmQTtFQUFpQyxZTitabkI7QVB1RmQ7QWFyZkE7RUFBa0MsWU5vV25CO0FQcUpmO0FheGZBO0VBQXFDLFlOcERuQjtBUGdqQmxCO0FhM2ZBO0VBQStDLFlOdUluQjtBUHdYNUI7QWE5ZkE7RUFBaUMsWU5rTm5CO0FQZ1RkO0FhamdCQTtFQUFpQyxZTjBTbkI7QVAyTmQ7QWFwZ0JBO0VBQWlDLFlONktuQjtBUDJWZDtBYXZnQkE7RUFBZ0MsWU55SW5CO0FQa1liO0FhMWdCQTtFQUFzQyxZTnlJbkI7QVBxWW5CO0FhN2dCQTs7RUFDaUQsWU5pSW5CO0FQZ1o5QjtBYWhoQkE7RUFBa0MsWU4rWW5CO0FQcUlmO0FhbmhCQTtFQUFxQyxZQUFBO0FidWhCckM7QWF0aEJBO0VBQW1DLFlOb2FuQjtBUHNIaEI7QWF6aEJBO0VBQW9DLFlOZ0VuQjtBUDZkakI7QWE1aEJBO0VBQW1DLFlONlRuQjtBUG1PaEI7QWEvaEJBO0VBQXVDLFlOdUNuQjtBUDRmcEI7QWFsaUJBO0VBQXlDLFlObUNuQjtBUG1nQnRCO0FhcmlCQTtFQUFvQyxZTithbkI7QVAwSGpCO0FheGlCQTtFQUEwQyxZTmtkbkI7QVAwRnZCO0FhM2lCQTtFQUFtQyxZTjBLbkI7QVBxWWhCO0FhOWlCQTtFQUF3QyxZTjJLbkI7QVB1WXJCO0FhampCQTtFQUFxQyxZTjNFbkI7QVBnb0JsQjtBYXBqQkE7RUFBcUMsWU43RW5CO0FQcW9CbEI7QWF2akJBOztFQUNzQyxZTmxFbkI7QVA2bkJuQjtBYTFqQkE7RUFBMkMsWU4ra0JuQjtBUGpCeEI7QWE3akJBO0VBQTRDLFlONEhuQjtBUHFjekI7QWFoa0JBO0VBQXlDLFlOVG5CO0FQNmtCdEI7QWFua0JBO0VBQWdDLFlOMlFuQjtBUDRUYjtBYXRrQkE7O0VBQ2lDLFlONkNuQjtBUDZoQmQ7QWF6a0JBO0VBQXFDLFlOa0RuQjtBUDJoQmxCO0FhNWtCQTtFQUF3QyxZTnNpQm5CO0FQMENyQjtBYS9rQkE7RUFBMEMsWU5vaUJuQjtBUCtDdkI7QWFsbEJBO0VBQXNDLFlOMmVuQjtBUDJHbkI7QWFybEJBO0VBQW9DLFlOOE5uQjtBUDJYakI7QWF4bEJBO0VBQXFDLFlOb2NuQjtBUHdKbEI7QWEzbEJBO0VBQTRDLFlOdVJuQjtBUHdVekI7QWE5bEJBO0VBQXVDLFlONmhCbkI7QVBxRXBCO0Fham1CQTtFQUEwQyxZTnNHbkI7QVArZnZCO0FhcG1CQTtFQUFvQyxZTjhibkI7QVAwS2pCO0Fhdm1CQTtFQUFtQyxZTnFqQm5CO0FQc0RoQjtBYTFtQkE7RUFBMEMsWU5nTG5CO0FQOGJ2QjtBYTdtQkE7RUFBbUMsWU51a0JuQjtBUDBDaEI7QWFobkJBO0VBQW9DLFlOcVFuQjtBUCtXakI7QWFubkJBO0VBQWtDLFlOaVduQjtBUHNSZjtBYXRuQkE7RUFBcUMsWU4yZG5CO0FQK0psQjtBYXpuQkE7RUFBdUMsWU5qRG5CO0FQOHFCcEI7QWE1bkJBO0VBQXlDLFlOK1ZuQjtBUGlTdEI7QWEvbkJBO0VBQW9DLFlOc2pCbkI7QVA2RWpCO0FhbG9CQTs7RUFDcUMsWU5nR25CO0FQc2lCbEI7QWFyb0JBO0VBQW1DLFlOb0tuQjtBUHFlaEI7QWF4b0JBO0VBQW1DLFlOMGpCbkI7QVBrRmhCO0FhM29CQTtFQUF3QyxZTm9DbkI7QVAybUJyQjtBYTlvQkE7O0VBQ2dDLFlOK1luQjtBUG1RYjtBYWpwQkE7RUFBa0MsWU5vTW5CO0FQaWRmO0FhcHBCQTtFQUFxQyxZTnJEbkI7QVA2c0JsQjtBYXZwQkE7RUFBaUMsWU5oRm5CO0FQMnVCZDtBYTFwQkE7RUFBd0MsWU5yQm5CO0FQbXJCckI7QWE3cEJBO0VBQXlDLFlOb0xuQjtBUDZldEI7QWFocUJBO0VBQXdDLFlOa0xuQjtBUGtmckI7QWFucUJBO0VBQXNDLFlObUxuQjtBUG9mbkI7QWF0cUJBO0VBQXdDLFlOK0tuQjtBUDJmckI7QWF6cUJBO0VBQThDLFlOckluQjtBUGt6QjNCO0FhNXFCQTtFQUErQyxZTmpJbkI7QVBpekI1QjtBYS9xQkE7RUFBNEMsWU5qSW5CO0FQb3pCekI7QWFsckJBO0VBQThDLFlOekluQjtBUCt6QjNCO0FhcnJCQTtFQUFrQyxZTjJKbkI7QVA4aEJmO0FheHJCQTtFQUFtQyxZTjZsQm5CO0FQK0ZoQjtBYTNyQkE7RUFBa0MsWU5xZW5CO0FQME5mO0FhOXJCQTtFQUFtQyxZTnlHbkI7QVB5bEJoQjtBYWpzQkE7RUFBc0MsWU56RW5CO0FQOHdCbkI7QWFwc0JBO0VBQXVDLFlObEluQjtBUDAwQnBCO0FhdnNCQTs7RUFDa0MsWU5pakJuQjtBUDBKZjtBYTFzQkE7O0VBQ2lDLFlONE9uQjtBUGtlZDtBYTdzQkE7RUFBa0MsWU5kbkI7QVArdEJmO0FhaHRCQTtFQUFrQyxZTjBHbkI7QVAwbUJmO0FhbnRCQTs7RUFDcUMsWU42WG5CO0FQMFZsQjtBYXR0QkE7O0VBQ29DLFlOMkZuQjtBUCtuQmpCO0FhenRCQTtFQUFzQyxZTjZTbkI7QVBnYm5CO0FhNXRCQTs7RUFDcUMsWU5xR25CO0FQMm5CbEI7QWEvdEJBO0VBQW1DLFlOZ2JuQjtBUG1UaEI7QWFsdUJBOzs7RUFFaUMsWU5sSW5CO0FQdzJCZDtBYXJ1QkE7RUFBb0MsWU5zT25CO0FQbWdCakI7QWF4dUJBO0VBQW9DLFlOb09uQjtBUHdnQmpCO0FhM3VCQTtFQUEwQyxZTitibkI7QVBnVHZCO0FhOXVCQTtFQUFzQyxZTjJnQm5CO0FQdU9uQjtBYWp2QkE7RUFBa0MsWU51Y25CO0FQOFNmO0FhcHZCQTtFQUFrQyxZTnlPbkI7QVArZ0JmO0FhdnZCQTtFQUFrQyxZTjZmbkI7QVA4UGY7QWExdkJBO0VBQXNDLFlObVRuQjtBUDJjbkI7QWE3dkJBO0VBQTZDLFlOb1RuQjtBUDZjMUI7QWFod0JBO0VBQStDLFlOZ0luQjtBUG9vQjVCO0FhbndCQTtFQUF3QyxZTjRIbkI7QVAyb0JyQjtBYXR3QkE7RUFBa0MsWU5xUW5CO0FQcWdCZjtBYXp3QkE7RUFBdUMsWU5wRm5CO0FQaTJCcEI7QWE1d0JBO0VBQXFDLFlOOUVuQjtBUDgxQmxCO0FhL3dCQTtFQUF1QyxZTnJGbkI7QVB3MkJwQjtBYWx4QkE7RUFBd0MsWU5yRm5CO0FQMjJCckI7QWFyeEJBO0VBQW9DLFlOaENuQjtBUHl6QmpCO0FheHhCQTs7RUFDaUMsWU4wWW5CO0FQa1pkO0FhM3hCQTs7RUFDc0MsWU44WW5CO0FQaVpuQjtBYTl4QkE7O0VBQ3FDLFlOMlluQjtBUHVabEI7QWFqeUJBO0VBQXFDLFlOVW5CO0FQMnhCbEI7QWFweUJBO0VBQXFDLFlOdU1uQjtBUGltQmxCO0FhdnlCQTs7RUFDaUMsWU5xZm5CO0FQc1RkO0FhMXlCQTs7RUFDa0MsWU5vRm5CO0FQMHRCZjtBYTd5QkE7O0VBQ3VDLFlOK2FuQjtBUGtZcEI7QWFoekJBO0VBQXNDLFlON0NuQjtBUGkyQm5CO0FhbnpCQTtFQUF1QyxZTjFDbkI7QVBpMkJwQjtBYXR6QkE7O0VBQ2lDLFlOcEluQjtBUDg3QmQ7QWF6ekJBO0VBQW9DLFlONlduQjtBUGdkakI7QWE1ekJBO0VBQXFDLFlOeWVuQjtBUHVWbEI7QWEvekJBOztFQUNzQyxZTnJFbkI7QVB3NEJuQjtBYWwwQkE7RUFBd0MsWU5xTG5CO0FQaXBCckI7QWFyMEJBO0VBQXFDLFlOR25CO0FQczBCbEI7QWF4MEJBO0VBQTJDLFlObkVuQjtBUCs0QnhCO0FhMzBCQTtFQUF5QyxZTm5FbkI7QVBrNUJ0QjtBYTkwQkE7RUFBb0MsWU5pZm5CO0FQaVdqQjtBYWoxQkE7RUFBd0MsWU44WW5CO0FQdWNyQjtBYXAxQkE7RUFBcUMsWU55Wm5CO0FQK2JsQjtBYXYxQkE7RUFBbUMsWU45Sm5CO0FQeS9CaEI7QWExMUJBO0VBQW1DLFlObEVuQjtBUGc2QmhCO0FhNzFCQTtFQUFvQyxZTjFDbkI7QVAyNEJqQjtBYWgyQkE7RUFBd0MsWU44Qm5CO0FQczBCckI7QWFuMkJBO0VBQXVDLFlOMUluQjtBUGkvQnBCO0FhdDJCQTtFQUF1QyxZTnNIbkI7QVBvdkJwQjtBYXoyQkE7RUFBc0MsWU5yT25CO0FQa2xDbkI7QWE1MkJBO0VBQW1DLFlONE1uQjtBUG9xQmhCO0FhLzJCQTtFQUF3QyxZTlVuQjtBUHkyQnJCO0FhbDNCQTtFQUFpQyxZTjNLbkI7QVBpaUNkO0FhcjNCQTtFQUFxQyxZTnVGbkI7QVBreUJsQjtBYXgzQkE7RUFBd0MsWU4yUW5CO0FQaW5CckI7QWEzM0JBO0VBQThDLFlOck9uQjtBUG9tQzNCO0FhOTNCQTtFQUErQyxZTnJPbkI7QVB1bUM1QjtBYWo0QkE7RUFBNEMsWU5yT25CO0FQMG1DekI7QWFwNEJBO0VBQThDLFlOek9uQjtBUGluQzNCO0FhdjRCQTtFQUF1QyxZTnJPbkI7QVBnbkNwQjtBYTE0QkE7RUFBd0MsWU5yT25CO0FQbW5DckI7QWE3NEJBO0VBQXFDLFlOck9uQjtBUHNuQ2xCO0FhaDVCQTtFQUF1QyxZTnpPbkI7QVA2bkNwQjtBYW41QkE7RUFBb0MsWU5wRG5CO0FQMjhCakI7QWF0NUJBO0VBQW1DLFlONEluQjtBUDh3QmhCO0FhejVCQTtFQUFtQyxZTndZbkI7QVBxaEJoQjtBYTU1QkE7O0VBQ21DLFlOdU1uQjtBUHl0QmhCO0FhLzVCQTtFQUFxQyxZTnpHbkI7QVA0Z0NsQjtBYWw2QkE7RUFBdUMsWU55UW5CO0FQNnBCcEI7QWFyNkJBO0VBQXdDLFlOeVFuQjtBUGdxQnJCO0FheDZCQTtFQUFvQyxZTitWbkI7QVA2a0JqQjtBYTM2QkE7RUFBbUMsWU45R25CO0FQNmhDaEI7QWE5NkJBOztFQUNrQyxZTm9SbkI7QVA4cEJmO0FhajdCQTtFQUF1QyxZTitDbkI7QVBzNEJwQjtBYXA3QkE7RUFBcUMsWU5tQm5CO0FQcTZCbEI7QWF2N0JBO0VBQTBDLFlOb0JuQjtBUHU2QnZCO0FhMTdCQTtFQUFvQyxZTnFVbkI7QVB5bkJqQjtBYTc3QkE7RUFBb0MsWU4yQm5CO0FQczZCakI7QWFoOEJBO0VBQWtDLFlOZ0xuQjtBUG94QmY7QWFuOEJBO0VBQW9DLFlOMkJuQjtBUDQ2QmpCO0FhdDhCQTtFQUF1QyxZTnVIbkI7QVBtMUJwQjtBYXo4QkE7RUFBbUMsWU5NbkI7QVB1OEJoQjtBYTU4QkE7RUFBMkMsWU5JbkI7QVA0OEJ4QjtBYS84QkE7RUFBcUMsWU42WG5CO0FQc2xCbEI7QWFsOUJBO0VBQWlDLFlOaEhuQjtBUHNrQ2Q7QWFyOUJBOztFQUNzQyxZTnVRbkI7QVBrdEJuQjtBYXg5QkE7OztFQUV3QyxZTnNWbkI7QVBzb0JyQjtBYTM5QkE7RUFBMkMsWU53SW5CO0FQdTFCeEI7QWE5OUJBO0VBQWlDLFlOaEduQjtBUGtrQ2Q7QWFqK0JBO0VBQXNDLFlOdkhuQjtBUDRsQ25CO0FhcCtCQTs7RUFDeUMsWU50Sm5CO0FQOG5DdEI7QWF2K0JBO0VBQXFDLFlOeU9uQjtBUGt3QmxCO0FhMStCQTtFQUFpQyxZTjBGbkI7QVBvNUJkO0FhNytCQTtFQUF3QyxZTjFEbkI7QVAyaUNyQjtBYWgvQkE7RUFBd0MsWU5rV25CO0FQa3BCckI7QWFuL0JBO0VBQXNDLFlONFZuQjtBUDJwQm5CO0FhdC9CQTtFQUFtQyxZTmxFbkI7QVA0akNoQjtBYXovQkE7RUFBeUMsWU5nT25CO0FQNnhCdEI7QWE1L0JBO0VBQXVDLFlOMkpuQjtBUHEyQnBCO0FhLy9CQTtFQUE2QyxZTjJKbkI7QVB3MkIxQjtBYWxnQ0E7RUFBbUMsWU5zUm5CO0FQZ3ZCaEI7QWFyZ0NBO0VBQXVDLFlONUxuQjtBUHFzQ3BCO0FheGdDQTtFQUE4QyxZTnhCbkI7QVBvaUMzQjtBYTNnQ0E7RUFBbUMsWU51UG5CO0FQd3hCaEI7QWE5Z0NBO0VBQW1DLFlONkluQjtBUHE0QmhCO0FhamhDQTtFQUFnRCxZTjlKbkI7QVBtckM3QjtBYXBoQ0E7RUFBaUQsWU45Sm5CO0FQc3JDOUI7QWF2aENBO0VBQThDLFlOOUpuQjtBUHlyQzNCO0FhMWhDQTtFQUFnRCxZTmxLbkI7QVBnc0M3QjtBYTdoQ0E7RUFBa0MsWU44RG5CO0FQbStCZjtBYWhpQ0E7RUFBaUMsWU5ySG5CO0FQeXBDZDtBYW5pQ0E7RUFBbUMsWU52U25CO0FQODBDaEI7QWF0aUNBO0VBQXVDLFlOMlpuQjtBUCtvQnBCO0FhemlDQTtFQUFxQyxZTmhObkI7QVA2dkNsQjtBYTVpQ0E7RUFBdUMsWU43Rm5CO0FQNm9DcEI7QWEvaUNBO0VBQXVDLFlON0ZuQjtBUGdwQ3BCO0FhbGpDQTtFQUF1QyxZTitPbkI7QVB1MEJwQjtBYXJqQ0E7RUFBd0MsWU5pTW5CO0FQdzNCckI7QWF4akNBO0VBQW1DLFlONlduQjtBUCtzQmhCO0FhM2pDQTtFQUF5QyxZTjBJbkI7QVBxN0J0QjtBYTlqQ0E7RUFBMkMsWU4wSW5CO0FQdzdCeEI7QWFqa0NBO0VBQXFDLFlOcUZuQjtBUGcvQmxCO0FhcGtDQTtFQUF1QyxZTm1GbkI7QVBxL0JwQjtBYXZrQ0E7RUFBeUMsWU5uTG5CO0FQOHZDdEI7QWExa0NBO0VBQTBDLFlOMEtuQjtBUG82QnZCO0FhN2tDQTtFQUFpRCxZTnBGbkI7QVBxcUM5QjtBYWhsQ0E7RUFBeUMsWU53UG5CO0FQNDFCdEI7QWFubENBO0VBQW9DLFlOakpuQjtBUHd1Q2pCO0FhdGxDQTs7RUFDZ0QsWU4vTW5CO0FQeXlDN0I7QWF6bENBOztFQUM4QyxZTjlNbkI7QVAyeUMzQjtBYTVsQ0E7O0VBQ2lELFlOak5uQjtBUGl6QzlCO0FhL2xDQTs7RUFDZ0MsWU52R25CO0FQMHNDYjtBYWxtQ0E7RUFBZ0MsWU5oQ25CO0FQc29DYjtBYXJtQ0E7O0VBQ2dDLFlOcVluQjtBUG91QmI7QWF4bUNBOztFQUNnQyxZTjRDbkI7QVBna0NiO0FhM21DQTs7OztFQUdnQyxZTmdEbkI7QVArakNiO0FhOW1DQTs7O0VBRWdDLFlOaU5uQjtBUGk2QmI7QWFqbkNBOztFQUNnQyxZTitDbkI7QVBza0NiO0FhcG5DQTs7RUFDZ0MsWU4zUG5CO0FQbTNDYjtBYXZuQ0E7RUFBaUMsWU5oR25CO0FQMnRDZDtBYTFuQ0E7RUFBc0MsWU5wRm5CO0FQa3RDbkI7QWE3bkNBO0VBQTJDLFlOMFBuQjtBUHU0QnhCO0FhaG9DQTtFQUE0QyxZTjBQbkI7QVAwNEJ6QjtBYW5vQ0E7RUFBNEMsWU4wUG5CO0FQNjRCekI7QWF0b0NBO0VBQTZDLFlOMFBuQjtBUGc1QjFCO0Fhem9DQTtFQUE2QyxZTjZQbkI7QVBnNUIxQjtBYTVvQ0E7RUFBOEMsWU42UG5CO0FQbTVCM0I7QWEvb0NBO0VBQXNDLFlOa1VuQjtBUGkxQm5CO0FhbHBDQTtFQUF3QyxZTjhUbkI7QVB3MUJyQjtBYXJwQ0E7RUFBMkMsWU55YW5CO0FQZ3ZCeEI7QWF4cENBO0VBQW9DLFlOc2FuQjtBUHN2QmpCO0FhM3BDQTtFQUFpQyxZTjJabkI7QVBvd0JkO0FhOXBDQTtFQUF3QyxZTjJabkI7QVB1d0JyQjtBYWpxQ0E7RUFBeUMsWU5vYW5CO0FQaXdCdEI7QWFwcUNBO0VBQW9DLFlOeEpuQjtBUGcwQ2pCO0FhdnFDQTtFQUEyQyxZTjhQbkI7QVA2NkJ4QjtBYTFxQ0E7RUFBc0MsWU5nQm5CO0FQOHBDbkI7QWE3cUNBO0VBQW1DLFlOcEZuQjtBUHF3Q2hCO0FhaHJDQTtFQUFnQyxZTjNXbkI7QVAraERiO0FhbnJDQTtFQUFzQyxZTi9SbkI7QVBzOUNuQjtBYXRyQ0E7RUFBNkMsWU4vUm5CO0FQeTlDMUI7QWF6ckNBO0VBQW1DLFlOK1VuQjtBUDgyQmhCO0FhNXJDQTtFQUEwQyxZTitVbkI7QVBpM0J2QjtBYS9yQ0E7RUFBNEMsWU5nRG5CO0FQbXBDekI7QWFsc0NBO0VBQTBDLFlOa0RuQjtBUG9wQ3ZCO0FhcnNDQTtFQUE0QyxZTitDbkI7QVAwcEN6QjtBYXhzQ0E7RUFBNkMsWU4rQ25CO0FQNnBDMUI7QWEzc0NBO0VBQWtDLFlOalduQjtBUGdqRGY7QWE5c0NBO0VBQW9DLFlObVluQjtBUCswQmpCO0FhanRDQTtFQUFvQyxZTjdXbkI7QVBra0RqQjtBYXB0Q0E7RUFBa0MsWU5rQ25CO0FQc3JDZjtBYXZ0Q0E7RUFBcUMsWU41S25CO0FQdTRDbEI7QWExdENBO0VBQWtDLFlOZ05uQjtBUDhnQ2Y7QWE3dENBO0VBQXVDLFlOeEZuQjtBUHl6Q3BCO0FhaHVDQTtFQUFtQyxZTjRUbkI7QVB3NkJoQjtBYW51Q0E7RUFBbUMsWU50SW5CO0FQNjJDaEI7QWF0dUNBO0VBQWlDLFlONkNuQjtBUDZyQ2Q7QWF6dUNBOztFQUNxQyxZTjVEbkI7QVB5eUNsQjtBYTV1Q0E7RUFBa0MsWU44UG5CO0FQay9CZjtBYS91Q0E7RUFBbUMsWU51RW5CO0FQNHFDaEI7QWFsdkNBO0VBQW9DLFlOOVduQjtBUG9tRGpCO0FhcnZDQTtFQUFnQyxZTnRTbkI7QVAraERiO0FheHZDQTtFQUErQixZTmlXbkI7QVAyNUJaO0FhM3ZDQTtFQUFrQyxZTnVXbkI7QVB3NUJmO0FhOXZDQTtFQUFtQyxZTitJbkI7QVBtbkNoQjtBYWp3Q0E7RUFBc0MsWU5rRm5CO0FQbXJDbkI7QWFwd0NBO0VBQTJDLFlONk5uQjtBUDJpQ3hCO0FhdndDQTtFQUFpRCxZTi9XbkI7QVAwbkQ5QjtBYTF3Q0E7RUFBZ0QsWU5qWG5CO0FQK25EN0I7QWE3d0NBOztFQUNnRCxZTnpSbkI7QVAwaUQ3QjtBYWh4Q0E7RUFBeUMsWU5uTW5CO0FQdTlDdEI7QWFueENBO0VBQXVDLFlOaVduQjtBUHM3QnBCO0FhdHhDQTtFQUF5QyxZTm9WbkI7QVBzOEJ0QjtBYXp4Q0E7O0VBQ2dDLFlOMFNuQjtBUG0vQmI7QWE1eENBO0VBQTBDLFlOMEduQjtBUHNyQ3ZCO0FhL3hDQTtFQUEwQyxZTjRNbkI7QVB1bEN2QjtBYWx5Q0E7RUFBa0MsWU5zTG5CO0FQZ25DZjtBYXJ5Q0E7RUFBNEMsWU56TG5CO0FQaytDekI7QWF4eUNBO0VBQXNDLFlOb1duQjtBUHc4Qm5CO0FhM3lDQTtFQUFtQyxZTjhEbkI7QVBpdkNoQjtBYTl5Q0E7OztFQUV1QyxZTjhTbkI7QVBvZ0NwQjtBYWp6Q0E7O0VBQzJDLFlOMUZuQjtBUCs0Q3hCO0FhcHpDQTtFQUFrQyxZTnNXbkI7QVBrOUJmO0FhdnpDQTtFQUFtQyxZTmxHbkI7QVA2NUNoQjtBYTF6Q0E7RUFBbUMsWU5nSG5CO0FQOHNDaEI7QWE3ekNBO0VBQTBDLFlOaUhuQjtBUGd0Q3ZCO0FhaDBDQTtFQUErQyxZTnlObkI7QVAybUM1QjtBYW4wQ0E7RUFBd0MsWU51Tm5CO0FQZ25DckI7QWF0MENBO0VBQXNDLFlOL05uQjtBUHlpRG5CO0FhejBDQTtFQUFpQyxZTjVObkI7QVB5aURkO0FhNTBDQTtFQUEwQyxZTjJFbkI7QVBxd0N2QjtBYS8wQ0E7RUFBMkMsWU55RW5CO0FQMHdDeEI7QWFsMUNBO0VBQW1DLFlOdk5uQjtBUDZpRGhCO0FhcjFDQTtFQUFtQyxZTnpDbkI7QVBrNENoQjtBYXgxQ0E7RUFBcUMsWU5wQ25CO0FQZzRDbEI7QWEzMUNBO0VBQWdDLFlOdExuQjtBUHFoRGI7QWE5MUNBO0VBQXFDLFlON1VuQjtBUCtxRGxCO0FhajJDQTtFQUFrQyxZTjFSbkI7QVArbkRmO0FhcDJDQTtFQUFnQyxZTnNEbkI7QVBrekNiO0FhdjJDQTtFQUFrQyxZTm1MbkI7QVB3ckNmO0FhMTJDQTtFQUFpQyxZTnJQbkI7QVBtbURkO0FhNzJDQTtFQUFrQyxZTnJQbkI7QVBzbURmO0FhaDNDQTtFQUFvQyxZTjdXbkI7QVBpdURqQjtBYW4zQ0E7RUFBMkMsWU43V25CO0FQb3VEeEI7QWF0M0NBO0VBQWtDLFlOMExuQjtBUGdzQ2Y7QWF6M0NBO0VBQXlDLFlOMExuQjtBUG1zQ3RCO0FhNTNDQTtFQUFvQyxZTnlGbkI7QVB1eUNqQjtBYS8zQ0E7O0VBQ2dDLFlOelVuQjtBUDRzRGI7QWFsNENBOztFQUNpQyxZTitNbkI7QVB1ckNkO0FhcjRDQTtFQUFpQyxZTjRQbkI7QVA2b0NkO0FheDRDQTtFQUFvQyxZTnVLbkI7QVBxdUNqQjtBYTM0Q0E7RUFBdUMsWU50UG5CO0FQcW9EcEI7QWE5NENBO0VBQXVDLFlOaUtuQjtBUGl2Q3BCO0FhajVDQTtFQUFxQyxZTjlQbkI7QVBtcERsQjtBYXA1Q0E7RUFBdUMsWU4vTG5CO0FQdWxEcEI7QWF2NUNBO0VBQXdDLFlOeExuQjtBUG1sRHJCO0FhMTVDQTtFQUF5QyxZTnJNbkI7QVBtbUR0QjtBYTc1Q0E7RUFBOEMsWU4vTG5CO0FQZ21EM0I7QWFoNkNBOzs7RUFFeUMsWU54TW5CO0FQNG1EdEI7QWFuNkNBOztFQUMyQyxZTjlNbkI7QVBxbkR4QjtBYXQ2Q0E7O0VBQ3lDLFlOL01uQjtBUHluRHRCO0FhejZDQTs7RUFDeUMsWU5wTW5CO0FQaW5EdEI7QWE1NkNBO0VBQXdDLFlOak5uQjtBUGlvRHJCO0FhLzZDQTtFQUFpQyxZTnVSbkI7QVA0cENkO0FhbDdDQTtFQUFvQyxZTjVTbkI7QVBrdURqQjtBYXI3Q0E7RUFBcUMsWU45RW5CO0FQdWdEbEI7QWF4N0NBOzs7OztFQUlzQyxZTm5FbkI7QVArL0NuQjtBYTM3Q0E7RUFBMkMsWU4vVG5CO0FQOHZEeEI7QWE5N0NBOzs7RUFFa0MsWU5xRG5CO0FQNjRDZjtBYWo4Q0E7O0VBQ21DLFlOblFuQjtBUHdzRGhCO0FhcDhDQTtFQUF1QyxZTnpLbkI7QVBpbkRwQjtBYXY4Q0E7RUFBZ0MsWU4zS25CO0FQc25EYjtBYTE4Q0E7OztFQUV3QyxZTnhKbkI7QVBzbURyQjtBYTc4Q0E7RUFBMEMsWU4yS25CO0FQc3lDdkI7QWFoOUNBO0VBQStCLFlOaUNuQjtBUG03Q1o7QWFuOUNBOztFQUNtQyxZTjBRbkI7QVA2c0NoQjtBYXQ5Q0E7O0VBQ3dDLFlOVm5CO0FQbytDckI7QWF6OUNBOztFQUMwQyxZTlhuQjtBUHcrQ3ZCO0FhNTlDQTtFQUFvQyxZTjFJbkI7QVAwbURqQjtBYS85Q0E7RUFBd0MsWU5sVm5CO0FQcXpEckI7QWFsK0NBO0VBQW1DLFlOakpuQjtBUHVuRGhCO0FhcitDQTtFQUFzQyxZTmJuQjtBUHMvQ25CO0FheCtDQTtFQUFvQyxZTitGbkI7QVA2NENqQjtBYTMrQ0E7RUFBc0MsWU51RW5CO0FQdzZDbkI7QWE5K0NBO0VBQTZDLFlOdUVuQjtBUDI2QzFCO0Fhai9DQTtFQUFpQyxZTnpabkI7QVA4NERkO0FhcC9DQTs7RUFDcUMsWU41TW5CO0FQb3NEbEI7QWF2L0NBO0VBQWdDLFlOME1uQjtBUGl6Q2I7QWExL0NBO0VBQXVDLFlOeGFuQjtBUHM2RHBCO0FhNy9DQTtFQUFpQyxZTkluQjtBUDYvQ2Q7QWFoZ0RBO0VBQXVDLFlOdUZuQjtBUDY2Q3BCO0FhbmdEQTtFQUFtQyxZTjJNbkI7QVA0ekNoQjtBYXRnREE7RUFBaUMsWU4rUW5CO0FQMnZDZDtBYXpnREE7RUFBd0MsWU56Q25CO0FQc2pEckI7QWE1Z0RBO0VBQWlDLFlOd1BuQjtBUHd4Q2Q7QWEvZ0RBO0VBQXVDLFlOclpuQjtBUHc2RHBCO0FhbGhEQTtFQUFtQyxZTnZCbkI7QVA2aURoQjtBYXJoREE7RUFBMEMsWU4zTG5CO0FQb3REdkI7QWF4aERBO0VBQW9DLFlONVhuQjtBUHc1RGpCO0FhM2hEQTtFQUEwQyxZTmhZbkI7QVArNUR2QjtBYTloREE7RUFBd0MsWU5uWW5CO0FQcTZEckI7QWFqaURBO0VBQW9DLFlOdFluQjtBUDI2RGpCO0FhcGlEQTtFQUFzQyxZTmxZbkI7QVAwNkRuQjtBYXZpREE7RUFBc0MsWU5sWW5CO0FQNjZEbkI7QWExaURBO0VBQXVDLFlOM2JuQjtBUHkrRHBCO0FhN2lEQTtFQUF5QyxZTjNibkI7QVA0K0R0QjtBYWhqREE7RUFBa0MsWU4rS25CO0FQcTRDZjtBYW5qREE7RUFBc0MsWU5uVm5CO0FQMDREbkI7QWF0akRBO0VBQStCLFlOOWRuQjtBUHdoRVo7QWF6akRBO0VBQXVDLFlONVJuQjtBUHkxRHBCO0FhNWpEQTtFQUF3QyxZTi9DbkI7QVArbURyQjtBYS9qREE7RUFBMEMsWU45Ym5CO0FQaWdFdkI7QWFsa0RBO0VBQXVDLFlOdGZuQjtBUDRqRXBCO0FhcmtEQTtFQUFzQyxZTi9CbkI7QVB3bURuQjtBYXhrREE7RUFBdUMsWU56SG5CO0FQcXNEcEI7QWEza0RBO0VBQW1DLFlOdkluQjtBUHN0RGhCO0FhOWtEQTtFQUEwQyxZTnZJbkI7QVB5dER2QjtBYWpsREE7RUFBdUMsWU40Sm5CO0FQeTdDcEI7QWFwbERBO0VBQXNDLFlONEpuQjtBUDQ3Q25CO0FhdmxEQTtFQUFvQyxZTnhjbkI7QVBtaUVqQjtBYTFsREE7RUFBZ0MsWU5qYm5CO0FQK2dFYjtBYTdsREE7RUFBb0MsWU52Sm5CO0FQd3ZEakI7QWFobURBO0VBQXNDLFlOM2dCbkI7QVArbUVuQjtBYW5tREE7RUFBK0IsWU43Wm5CO0FQb2dFWjtBYXRtREE7OztFQUVnQyxZTnpLbkI7QVBteERiO0Fhem1EQTtFQUFxQyxZTnBHbkI7QVBpdERsQjtBYTVtREE7RUFBdUMsWU54Ym5CO0FQd2lFcEI7QWEvbURBO0VBQTJDLFlONVduQjtBUCs5RHhCO0FhbG5EQTtFQUFxQyxZTjlWbkI7QVBvOURsQjtBYXJuREE7RUFBcUMsWU45UG5CO0FQdTNEbEI7QWF4bkRBO0VBQW9DLFlOckpuQjtBUGl4RGpCO0FhM25EQTtFQUFtQyxZTmVuQjtBUGduRGhCO0FhOW5EQTtFQUF5QyxZTjJCbkI7QVB1bUR0QjtBYWpvREE7RUFBd0MsWU5vQ25CO0FQaW1EckI7QWFwb0RBO0VBQXFDLFlOcUNuQjtBUG1tRGxCO0Fhdm9EQTtFQUFzQyxZTjVhbkI7QVB1akVuQjtBYTFvREE7RUFBNEMsWU45YW5CO0FQNGpFekI7QWE3b0RBO0VBQW9DLFlOL1ZuQjtBUGcvRGpCO0FhaHBEQTtFQUFpQyxZTm9CbkI7QVBnb0RkO0FhbnBEQTtFQUF3QyxZTjhLbkI7QVB5K0NyQjtBYXRwREE7RUFBdUMsWU4vRm5CO0FQeXZEcEI7QWF6cERBO0VBQXdDLFlONkVuQjtBUGdsRHJCO0FhNXBEQTtFQUFzQyxZTjlNbkI7QVA4MkRuQjtBYS9wREE7RUFBa0MsWU4rS25CO0FQby9DZjtBYWxxREE7RUFBaUMsWU43SG5CO0FQbXlEZDtBYXJxREE7RUFBb0MsWU5uSG5CO0FQNHhEakI7QWF4cURBOztFQUN3QyxZTmtJbkI7QVAwaURyQjtBYTNxREE7RUFBNEMsWU5rSW5CO0FQNmlEekI7QWE5cURBO0VBQXlDLFlOMEtuQjtBUHdnRHRCO0FhanJEQTtFQUF3QyxZTmxJbkI7QVB1ekRyQjtBYXByREE7RUFBdUMsWU55S25CO0FQK2dEcEI7QWF2ckRBO0VBQXdDLFlObkluQjtBUDh6RHJCO0FhMXJEQTtFQUEwQyxZTmxJbkI7QVBnMER2QjtBYTdyREE7RUFBMEMsWU5wSW5CO0FQcTBEdkI7QWFoc0RBO0VBQW1DLFlOMUduQjtBUDh5RGhCO0FhbnNEQTtFQUF1QyxZTjdRbkI7QVBvOURwQjtBYXRzREE7RUFBOEMsWU4xVW5CO0FQb2hFM0I7QWF6c0RBO0VBQXdDLFlOekVuQjtBUHN4RHJCO0FhNXNEQTtFQUFxQyxZTmtMbkI7QVA4aERsQjtBYS9zREE7RUFBbUMsWU5YbkI7QVA4dERoQjtBYWx0REE7RUFBc0MsWU51Sm5CO0FQK2pEbkI7QWFydERBO0VBQXVDLFlOd0puQjtBUGlrRHBCO0FheHREQTs7RUFDZ0MsWU4vZm5CO0FQMnRFYjtBYTN0REE7RUFBb0MsWU40Sm5CO0FQbWtEakI7QWE5dERBO0VBQWtDLFlOOEduQjtBUG9uRGY7QWFqdURBO0VBQW1DLFlOd0RuQjtBUDZxRGhCO0FhcHVEQTtFQUFtQyxZTjlJbkI7QVBzM0RoQjtBYXZ1REE7O0VBQ3lDLFlOMExuQjtBUGlqRHRCO0FhMXVEQTtFQUEwQyxZTmpIbkI7QVArMUR2QjtBYTd1REE7RUFBcUMsWU5ySG5CO0FQczJEbEI7QWFodkRBO0VBQXlDLFlOblduQjtBUHVsRXRCO0FhbnZEQTs7O0VBRXlDLFlOL2dCbkI7QVBzd0V0QjtBYXR2REE7O0VBQ21ELFlOOWdCbkI7QVB3d0VoQztBYXp2REE7O0VBQ3lDLFlObGhCbkI7QVArd0V0QjtBYTV2REE7O0VBQzRDLFlObmhCbkI7QVBteEV6QjtBYS92REE7O0VBQzBDLFlOeGhCbkI7QVAyeEV2QjtBYWx3REE7RUFBMEMsWU4zSW5CO0FQaTVEdkI7QWFyd0RBO0VBQXFDLFlOM09uQjtBUG8vRGxCO0FheHdEQTtFQUF5QyxZTnhJbkI7QVBvNUR0QjtBYTN3REE7RUFBMkMsWU54SW5CO0FQdTVEeEI7QWE5d0RBO0VBQXdDLFlOd0JuQjtBUDB2RHJCO0FhanhEQTtFQUEwQyxZTndCbkI7QVA2dkR2QjtBYXB4REE7RUFBbUMsWU4vZG5CO0FQdXZFaEI7QWF2eERBO0VBQTJDLFlObGVuQjtBUDZ2RXhCO0FhMXhEQTtFQUFrQyxZTnBjbkI7QVBrdUVmO0FhN3hEQTtFQUEwQyxZTmxqQm5CO0FQbTFFdkI7QWFoeURBO0VBQXdDLFlOeFBuQjtBUDRoRXJCO0FhbnlEQTs7RUFDNEMsWU56UG5CO0FQZ2lFekI7QWF0eURBOztFQUMyQyxZTjdQbkI7QVB1aUV4QjtBYXp5REE7O0VBQzBDLFlOaFFuQjtBUDZpRXZCO0FhNXlEQTtFQUFzQyxZTnJRbkI7QVBxakVuQjtBYS95REE7O0VBQ3dDLFlOeFJuQjtBUDJrRXJCO0FhbHpEQTs7RUFDeUMsWU43Um5CO0FQbWxFdEI7QWFyekRBO0VBQTRDLFlOMVJuQjtBUG1sRXpCO0FheHpEQTtFQUEwQyxZTnBTbkI7QVBnbUV2QjtBYTN6REE7RUFBeUMsWU4zUm5CO0FQMGxFdEI7QWE5ekRBO0VBQTJDLFlOL1JuQjtBUGltRXhCO0FhajBEQTtFQUF5QyxZTmpTbkI7QVBzbUV0QjtBYXAwREE7RUFBc0MsWU4rRG5CO0FQeXdEbkI7QWF2MERBO0VBQXVDLFlOL0ZuQjtBUDA2RHBCO0FhMTBEQTtFQUE2QyxZTi9ibkI7QVA2d0UxQjtBYTcwREE7RUFBK0IsWU50VW5CO0FQdXBFWjtBYWgxREE7RUFBc0MsWU50VW5CO0FQMHBFbkI7QWFuMURBO0VBQXdDLFlOa0VuQjtBUHF4RHJCO0FhdDFEQTtFQUEwQyxZTnJLbkI7QVArL0R2QjtBYXoxREE7RUFBaUQsWU5yS25CO0FQa2dFOUI7QWE1MURBO0VBQXVDLFlONVVuQjtBUDRxRXBCO0FhLzFEQTtFQUF3QyxZTndIbkI7QVAydURyQjtBYWwyREE7RUFBbUMsWU5uRm5CO0FQeTdEaEI7QWFyMkRBO0VBQW1DLFlOemVuQjtBUGsxRWhCO0FheDJEQTtFQUFvQyxZTjlXbkI7QVAwdEVqQjtBYTMyREE7RUFBa0MsWU54S25CO0FQdWhFZjtBYTkyREE7RUFBOEMsWU5wUW5CO0FQc25FM0I7QWFqM0RBOztFQUN1QyxZTlNuQjtBUDQyRHBCO0FhcDNEQTtFQUFtQyxZTmpkbkI7QVB5MEVoQjtBYXYzREE7RUFBa0MsWU56b0JuQjtBUG9nRmY7QWExM0RBO0VBQW1DLFlOL25CbkI7QVA2L0VoQjtBYTczREE7RUFBNEMsWU4zaEJuQjtBUDQ1RXpCO0FhaDREQTtFQUE2QyxZTjloQm5CO0FQazZFMUI7QWFuNERBO0VBQTZDLFlONWhCbkI7QVBtNkUxQjtBYXQ0REE7RUFBNkMsWU5qaUJuQjtBUDI2RTFCO0FhejREQTtFQUFxQyxZTnBSbkI7QVBpcUVsQjtBYTU0REE7RUFBb0MsWU41Tm5CO0FQNG1FakI7QWEvNERBO0VBQXNDLFlONU5uQjtBUCttRW5CO0FhbDVEQTtFQUFrQyxZTi9ObkI7QVBxbkVmO0FhcjVEQTtFQUFnQyxZTmxPbkI7QVAybkViO0FheDVEQTtFQUF1QyxZTnBlbkI7QVBnNEVwQjtBYTM1REE7RUFBeUMsWU5wZW5CO0FQbTRFdEI7QWE5NURBO0VBQWtDLFlOdFNuQjtBUHdzRWY7QWFqNkRBO0VBQWtDLFlOaUZuQjtBUG8xRGY7QWFwNkRBO0VBQXNDLFlObGtCbkI7QVAwK0VuQjtBYXY2REE7RUFBc0MsWU5yWG5CO0FQZ3lFbkI7QWExNkRBO0VBQXlDLFlOcEluQjtBUGtqRXRCO0FhNzZEQTtFQUFpQyxZTnBjbkI7QVBxM0VkO0FhaDdEQTtFQUE0QyxZTmhlbkI7QVBvNUV6QjtBYW43REE7RUFBcUMsWU5wZm5CO0FQMjZFbEI7QWF0N0RBO0VBQWlDLFlObE5uQjtBUDRvRWQ7QWF6N0RBO0VBQXlDLFlOMVhuQjtBUHV6RXRCO0FhNTdEQTtFQUFnQyxZTm9EbkI7QVA0NERiO0FhLzdEQTtFQUF5QyxZTjNKbkI7QVA4bEV0QjtBYWw4REE7RUFBcUMsWU56Tm5CO0FQK3BFbEI7QWFyOERBO0VBQW1DLFlObEhuQjtBUDJqRWhCO0FheDhEQTtFQUF5QyxZTjdMbkI7QVB5b0V0QjtBYTM4REE7RUFBMkMsWU43TG5CO0FQNG9FeEI7QWE5OERBO0VBQXdDLFlOM0NuQjtBUDYvRHJCO0FhajlEQTtFQUEwQyxZTjNDbkI7QVBnZ0V2QjtBYXA5REE7RUFBeUMsWU5yR25CO0FQNmpFdEI7QWF2OURBO0VBQTRDLFlOckduQjtBUGdrRXpCO0FhMTlEQTtFQUFvQyxZTjdVbkI7QVAyeUVqQjtBYTc5REE7RUFBc0MsWU5ubEJuQjtBUG9qRm5CO0FhaCtEQTtFQUF3QyxZTm5sQm5CO0FQdWpGckI7QWFuK0RBO0VBQW9DLFlOL0xuQjtBUHNxRWpCO0FhdCtEQTtFQUFtQyxZTmxYbkI7QVA0MUVoQjtBYXorREE7RUFBdUMsWU5rRm5CO0FQMjVEcEI7QWE1K0RBO0VBQW9DLFlObUZuQjtBUDY1RGpCO0FhLytEQTtFQUFtQyxZTjljbkI7QVBpOEVoQjtBYWwvREE7RUFBNkMsWU4yQm5CO0FQMjlEMUI7QWFyL0RBO0VBQTJDLFlObUVuQjtBUHM3RHhCO0FheC9EQTtFQUE4QyxZTnhLbkI7QVBvcUUzQjtBYTMvREE7RUFBa0MsWU45bEJuQjtBUDZsRmY7QWE5L0RBO0VBQThDLFlOdG9CbkI7QVB3b0YzQjtBYWpnRUE7RUFBaUQsWU5xRG5CO0FQZzlEOUI7QWFwZ0VBO0VBQW9DLFlOeGxCbkI7QVBnbUZqQjtBYXZnRUE7RUFBd0QsWU41b0JuQjtBUHVwRnJDO0FhMWdFQTs7RUFDZ0UsWU45cUJuQjtBUDRyRjdDO0FhN2dFQTs7O0VBRWlDLFlOdmZuQjtBUHdnRmQ7QWFoaEVBO0VBQWtDLFlOaFluQjtBUG81RWY7QWFuaEVBO0VBQW9DLFlOaFluQjtBUHU1RWpCO0FhdGhFQTs7RUFDMEMsWU4xSG5CO0FQb3BFdkI7QWF6aEVBO0VBQXVDLFlOelJuQjtBUHN6RXBCO0FhNWhFQTtFQUFtQyxZTmlDbkI7QVArL0RoQjtBYS9oRUE7RUFBMEMsWU5pQ25CO0FQa2dFdkI7QWFsaUVBO0VBQXFDLFlObEhuQjtBUHdwRWxCO0FhcmlFQTtFQUEyQyxZTmxIbkI7QVAycEV4QjtBYXhpRUE7RUFBNEMsWU5sSG5CO0FQOHBFekI7QWEzaUVBO0VBQXVDLFlOck5uQjtBUG93RXBCO0FhOWlFQTtFQUF3QyxZTnBibkI7QVBzK0VyQjtBYWpqRUE7RUFBa0MsWU5tRW5CO0FQay9EZjtBYXBqRUE7RUFBc0MsWU5wRG5CO0FQNG1FbkI7QWF2akVBOztFQUNpRCxZTnpZbkI7QVBvOEU5QjtBYTFqRUE7O0VBQ3lDLFlON2FuQjtBUDIrRXRCO0FhN2pFQTtFQUF3QyxZTnRYbkI7QVB1N0VyQjtBYWhrRUE7RUFBMEMsWU5sZm5CO0FQc2pGdkI7QWFua0VBO0VBQTRDLFlObGZuQjtBUHlqRnpCO0FhdGtFQTtFQUFtQyxZTnRUbkI7QVBnNEVoQjtBYXprRUE7RUFBeUMsWU5wdEJuQjtBUGl5RnRCO0FhNWtFQTtFQUEyQyxZTnB0Qm5CO0FQb3lGeEI7QWEva0VBOztFQUN5QyxZTnJ0Qm5CO0FQd3lGdEI7QWFsbEVBOztFQUMyQyxZTnR0Qm5CO0FQNHlGeEI7QWFybEVBO0VBQXdDLFlOSm5CO0FQNmxFckI7QWF4bEVBO0VBQTBDLFlOSm5CO0FQZ21FdkI7QWEzbEVBO0VBQW1DLFlOSG5CO0FQa21FaEI7QWE5bEVBO0VBQXFDLFlOM1duQjtBUDY4RWxCO0Fham1FQTs7RUFDb0MsWU41V25CO0FQaTlFakI7QWFwbUVBOztFQUNzQyxZTjdXbkI7QVBxOUVuQjtBYXZtRUE7RUFBa0MsWU50Tm5CO0FQaTBFZjtBYTFtRUE7RUFBMkMsWU4zYm5CO0FQeWlGeEI7QWE3bUVBO0VBQXFDLFlOdEZuQjtBUHVzRWxCO0FhaG5FQTs7O0VBRTZDLFlOeEVuQjtBUDRyRTFCO0Fhbm5FQTs7RUFDdUQsWU52RW5CO0FQOHJFcEM7QWF0bkVBOztFQUM2QyxZTjNFbkI7QVBxc0UxQjtBYXpuRUE7O0VBQ2dELFlONUVuQjtBUHlzRTdCO0FhNW5FQTs7RUFDOEMsWU5qRm5CO0FQaXRFM0I7QWEvbkVBO0VBQW1DLFlOM0tuQjtBUDh5RWhCO0FhbG9FQTs7O0VBRWlDLFlOenJCbkI7QVArekZkO0Fhcm9FQTtFQUFvQyxZTmxQbkI7QVAyM0VqQjtBYXhvRUE7RUFBNEMsWU5LbkI7QVB1b0V6QjtBYTNvRUE7RUFBNEMsWU5LbkI7QVAwb0V6QjtBYTlvRUE7RUFBMkMsWU5LbkI7QVA2b0V4QjtBYWpwRUE7O0VBQ3lDLFlORG5CO0FQc3BFdEI7QWFwcEVBOztFQUMyQyxZTkZuQjtBUDBwRXhCO0FhdnBFQTtFQUFxQyxZTnhzQm5CO0FQbTJGbEI7QWExcEVBO0VBQWlDLFlOcGJuQjtBUGtsRmQ7QWE3cEVBO0VBQWlDLFlOMWhCbkI7QVAyckZkO0FhaHFFQTtFQUFpQyxZTnhZbkI7QVA0aUZkO0FhbnFFQTtFQUFvQyxZTi9PbkI7QVBzNUVqQjtBYXRxRUE7RUFBb0MsWU56aUJuQjtBUG10RmpCO0FhenFFQTtFQUFzQyxZTmpVbkI7QVA4K0VuQjtBYTVxRUE7RUFBd0MsWU43S25CO0FQNjFFckI7QWEvcUVBO0VBQXdDLFlOaEluQjtBUG16RXJCO0FhbHJFQTtFQUF1QyxZTkpuQjtBUDByRXBCO0FhcnJFQTtFQUFtQyxZTnhVbkI7QVBpZ0ZoQjtBYzE4RkE7RUg4QkUsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QVhnN0ZGO0FXdDZGRTtFQUVFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FYdzZGSjtBQTc5RkE7RUFDSSxtQkFBQTtFQUVBLG9EQUFBO0VBQ0EsWUFBQTtBQWcrRko7QUE3OUZFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQWcrRko7QUE3OUZFO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FBZytGSjtBQTc5RkU7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FBZytGSjtBQTc5RkU7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUFnK0ZKO0FBNTlGRSxlQUFBO0FBRUEsd0JBQUE7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtBQTY5Rko7QUExOUZFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7QUE2OUZKO0FBejlGRSx3QkFBQTtBQUVBO0VBQ0UseUJBQUE7QUEyOUZKO0FBeDlGRTtFQUNFLHlCQUFBO0FBMjlGSjtBQXg5RkU7O0VBRUUsV0FBQTtBQTI5Rko7QUF4OUZFOztFQUVFLGNBQUE7QUEyOUZKO0FBeDlGRTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUdBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUEyOUZKO0FBeDlGRTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBMjlGSjtBQXg5RkU7O0VBRUUsOEJBQUE7RUFDQSxpQ0FBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7RUFLQSxvQkFBQTtBQTI5Rko7QUF4OUZFO0VBQ0UsY0FBQTtFQUtBLG9CQUFBO0FBMjlGSjtBQXg5RkU7RUFDRSx5QkFBQTtBQTI5RkoiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKkZPT1RFUiovXG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL2xpYnMvZm9udC1hd2Vzb21lLTQuNy4wL3Njc3MvZm9udC1hd2Vzb21lLnNjc3NcIjtcblxuZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMTYyMjJBO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDU5ZGVnLCAjMTQyNDAxICwgIzc4NjU0Nik7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDU5ZGVnLCAgIzE0MjQwMSwjNzg2NTQ2ICk7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIFxuICBmb290ZXIgYSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG4gIH1cbiAgXG4gIGZvb3RlciBhOmhvdmVyIHtcbiAgICBjb2xvcjogI0ZBOTQ0QjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgXG4gIC5jb3B5IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0ZGRkZGRjtcbiAgfVxuICBcbiAgLmZvb3Rlci1taWRkbGUge1xuICAgIHBhZGRpbmctdG9wOiAyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIFxuICBcbiAgLypTT0PEsEFMIMSwQ09OUyovXG4gIFxuICAvKiBmb290ZXIgc29jaWFsIGljb25zICovXG4gIFxuICB1bC5zb2NpYWwtbmV0d29yayB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIFxuICB1bC5zb2NpYWwtbmV0d29yayBsaSB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIG1hcmdpbjogMCA1cHg7XG4gIH1cbiAgXG4gIFxuICAvKiBmb290ZXIgc29jaWFsIGljb25zICovXG4gIFxuICAuc29jaWFsLW5ldHdvcmsgYS5pY29GYWNlYm9vazpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNCNTk5ODtcbiAgfVxuICBcbiAgLnNvY2lhbC1uZXR3b3JrIGEuaWNvTGlua2VkaW46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiYjc7XG4gIH1cbiAgXG4gIC5zb2NpYWwtbmV0d29yayBhLmljb0ZhY2Vib29rOmhvdmVyIGksXG4gIC5zb2NpYWwtbmV0d29yayBhLmljb0xpbmtlZGluOmhvdmVyIGkge1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIFxuICAuc29jaWFsLW5ldHdvcmsgYS5zb2NpYWxJY29uOmhvdmVyLFxuICAuc29jaWFsSG92ZXJDbGFzcyB7XG4gICAgY29sb3I6ICM0NEJDREQ7XG4gIH1cbiAgXG4gIC5zb2NpYWwtY2lyY2xlIGxpIGEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAwIGF1dG8gMCBhdXRvO1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuICBcbiAgLnNvY2lhbC1jaXJjbGUgbGkgaSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLnNvY2lhbC1jaXJjbGUgbGkgYTpob3ZlciBpLFxuICAudHJpZ2dlcmVkSG92ZXIge1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgLW1zLS10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgfVxuICBcbiAgLnNvY2lhbC1jaXJjbGUgaSB7XG4gICAgY29sb3I6ICM1OTU5NTk7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC44cztcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjhzO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjhzO1xuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC44cztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC44cztcbiAgfVxuICBcbiAgLnNvY2lhbC1uZXR3b3JrIGEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOUY5Rjk7XG4gIH1cbiAgXG4gICIsIi8qIVxuICogIEZvbnQgQXdlc29tZSA0LjcuMCBieSBAZGF2ZWdhbmR5IC0gaHR0cDovL2ZvbnRhd2Vzb21lLmlvIC0gQGZvbnRhd2Vzb21lXG4gKiAgTGljZW5zZSAtIGh0dHA6Ly9mb250YXdlc29tZS5pby9saWNlbnNlIChGb250OiBTSUwgT0ZMIDEuMSwgQ1NTOiBNSVQgTGljZW5zZSlcbiAqL1xuXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5AaW1wb3J0IFwibWl4aW5zXCI7XG5AaW1wb3J0IFwicGF0aFwiO1xuQGltcG9ydCBcImNvcmVcIjtcbkBpbXBvcnQgXCJsYXJnZXJcIjtcbkBpbXBvcnQgXCJmaXhlZC13aWR0aFwiO1xuQGltcG9ydCBcImxpc3RcIjtcbkBpbXBvcnQgXCJib3JkZXJlZC1wdWxsZWRcIjtcbkBpbXBvcnQgXCJhbmltYXRlZFwiO1xuQGltcG9ydCBcInJvdGF0ZWQtZmxpcHBlZFwiO1xuQGltcG9ydCBcInN0YWNrZWRcIjtcbkBpbXBvcnQgXCJpY29uc1wiO1xuQGltcG9ydCBcInNjcmVlbi1yZWFkZXJcIjtcbiIsIi8qIEZPTlQgUEFUSFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRm9udEF3ZXNvbWUnO1xuICBzcmM6IHVybCgnI3skZmEtZm9udC1wYXRofS9mb250YXdlc29tZS13ZWJmb250LmVvdD92PSN7JGZhLXZlcnNpb259Jyk7XG4gIHNyYzogdXJsKCcjeyRmYS1mb250LXBhdGh9L2ZvbnRhd2Vzb21lLXdlYmZvbnQuZW90PyNpZWZpeCZ2PSN7JGZhLXZlcnNpb259JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxuICAgIHVybCgnI3skZmEtZm9udC1wYXRofS9mb250YXdlc29tZS13ZWJmb250LndvZmYyP3Y9I3skZmEtdmVyc2lvbn0nKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgdXJsKCcjeyRmYS1mb250LXBhdGh9L2ZvbnRhd2Vzb21lLXdlYmZvbnQud29mZj92PSN7JGZhLXZlcnNpb259JykgZm9ybWF0KCd3b2ZmJyksXG4gICAgdXJsKCcjeyRmYS1mb250LXBhdGh9L2ZvbnRhd2Vzb21lLXdlYmZvbnQudHRmP3Y9I3skZmEtdmVyc2lvbn0nKSBmb3JtYXQoJ3RydWV0eXBlJyksXG4gICAgdXJsKCcjeyRmYS1mb250LXBhdGh9L2ZvbnRhd2Vzb21lLXdlYmZvbnQuc3ZnP3Y9I3skZmEtdmVyc2lvbn0jZm9udGF3ZXNvbWVyZWd1bGFyJykgZm9ybWF0KCdzdmcnKTtcbi8vICBzcmM6IHVybCgnI3skZmEtZm9udC1wYXRofS9Gb250QXdlc29tZS5vdGYnKSBmb3JtYXQoJ29wZW50eXBlJyk7IC8vIHVzZWQgd2hlbiBkZXZlbG9waW5nIGZvbnRzXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbiIsIi8vIEJhc2UgQ2xhc3MgRGVmaW5pdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4uI3skZmEtY3NzLXByZWZpeH0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsICN7JGZhLWZvbnQtc2l6ZS1iYXNlfS8jeyRmYS1saW5lLWhlaWdodC1iYXNlfSBGb250QXdlc29tZTsgLy8gc2hvcnRlbmluZyBmb250IGRlY2xhcmF0aW9uXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDsgLy8gY2FuJ3QgaGF2ZSBmb250LXNpemUgaW5oZXJpdCBvbiBsaW5lIGFib3ZlLCBzbyBuZWVkIHRvIG92ZXJyaWRlXG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvOyAvLyBvcHRpbWl6ZWxlZ2liaWxpdHkgdGhyb3dzIHRoaW5ncyBvZmYgIzEwOTRcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG5cbn1cbiIsIi8vIEljb24gU2l6ZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyogbWFrZXMgdGhlIGZvbnQgMzMlIGxhcmdlciByZWxhdGl2ZSB0byB0aGUgaWNvbiBjb250YWluZXIgKi9cbi4jeyRmYS1jc3MtcHJlZml4fS1sZyB7XG4gIGZvbnQtc2l6ZTogKDRlbSAvIDMpO1xuICBsaW5lLWhlaWdodDogKDNlbSAvIDQpO1xuICB2ZXJ0aWNhbC1hbGlnbjogLTE1JTtcbn1cbi4jeyRmYS1jc3MtcHJlZml4fS0yeCB7IGZvbnQtc2l6ZTogMmVtOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tM3ggeyBmb250LXNpemU6IDNlbTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LTR4IHsgZm9udC1zaXplOiA0ZW07IH1cbi4jeyRmYS1jc3MtcHJlZml4fS01eCB7IGZvbnQtc2l6ZTogNWVtOyB9XG4iLCIvLyBGaXhlZCBXaWR0aCBJY29uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLiN7JGZhLWNzcy1wcmVmaXh9LWZ3IHtcbiAgd2lkdGg6ICgxOGVtIC8gMTQpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iLCIvLyBMaXN0IEljb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi4jeyRmYS1jc3MtcHJlZml4fS11bCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbWFyZ2luLWxlZnQ6ICRmYS1saS13aWR0aDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICA+IGxpIHsgcG9zaXRpb246IHJlbGF0aXZlOyB9XG59XG4uI3skZmEtY3NzLXByZWZpeH0tbGkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0kZmEtbGktd2lkdGg7XG4gIHdpZHRoOiAkZmEtbGktd2lkdGg7XG4gIHRvcDogKDJlbSAvIDE0KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAmLiN7JGZhLWNzcy1wcmVmaXh9LWxnIHtcbiAgICBsZWZ0OiAtJGZhLWxpLXdpZHRoICsgKDRlbSAvIDE0KTtcbiAgfVxufVxuIiwiLy8gVmFyaWFibGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4kZmEtZm9udC1wYXRoOiAgICAgICAgXCIuLi9mb250c1wiICFkZWZhdWx0O1xuJGZhLWZvbnQtc2l6ZS1iYXNlOiAgIDE0cHggIWRlZmF1bHQ7XG4kZmEtbGluZS1oZWlnaHQtYmFzZTogMSAhZGVmYXVsdDtcbi8vJGZhLWZvbnQtcGF0aDogICAgICAgIFwiLy9uZXRkbmEuYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvZm9udHNcIiAhZGVmYXVsdDsgLy8gZm9yIHJlZmVyZW5jaW5nIEJvb3RzdHJhcCBDRE4gZm9udCBmaWxlcyBkaXJlY3RseVxuJGZhLWNzcy1wcmVmaXg6ICAgICAgIGZhICFkZWZhdWx0O1xuJGZhLXZlcnNpb246ICAgICAgICAgIFwiNC43LjBcIiAhZGVmYXVsdDtcbiRmYS1ib3JkZXItY29sb3I6ICAgICAjZWVlICFkZWZhdWx0O1xuJGZhLWludmVyc2U6ICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kZmEtbGktd2lkdGg6ICAgICAgICAgKDMwZW0gLyAxNCkgIWRlZmF1bHQ7XG5cbiRmYS12YXItNTAwcHg6IFwiXFxmMjZlXCI7XG4kZmEtdmFyLWFkZHJlc3MtYm9vazogXCJcXGYyYjlcIjtcbiRmYS12YXItYWRkcmVzcy1ib29rLW86IFwiXFxmMmJhXCI7XG4kZmEtdmFyLWFkZHJlc3MtY2FyZDogXCJcXGYyYmJcIjtcbiRmYS12YXItYWRkcmVzcy1jYXJkLW86IFwiXFxmMmJjXCI7XG4kZmEtdmFyLWFkanVzdDogXCJcXGYwNDJcIjtcbiRmYS12YXItYWRuOiBcIlxcZjE3MFwiO1xuJGZhLXZhci1hbGlnbi1jZW50ZXI6IFwiXFxmMDM3XCI7XG4kZmEtdmFyLWFsaWduLWp1c3RpZnk6IFwiXFxmMDM5XCI7XG4kZmEtdmFyLWFsaWduLWxlZnQ6IFwiXFxmMDM2XCI7XG4kZmEtdmFyLWFsaWduLXJpZ2h0OiBcIlxcZjAzOFwiO1xuJGZhLXZhci1hbWF6b246IFwiXFxmMjcwXCI7XG4kZmEtdmFyLWFtYnVsYW5jZTogXCJcXGYwZjlcIjtcbiRmYS12YXItYW1lcmljYW4tc2lnbi1sYW5ndWFnZS1pbnRlcnByZXRpbmc6IFwiXFxmMmEzXCI7XG4kZmEtdmFyLWFuY2hvcjogXCJcXGYxM2RcIjtcbiRmYS12YXItYW5kcm9pZDogXCJcXGYxN2JcIjtcbiRmYS12YXItYW5nZWxsaXN0OiBcIlxcZjIwOVwiO1xuJGZhLXZhci1hbmdsZS1kb3VibGUtZG93bjogXCJcXGYxMDNcIjtcbiRmYS12YXItYW5nbGUtZG91YmxlLWxlZnQ6IFwiXFxmMTAwXCI7XG4kZmEtdmFyLWFuZ2xlLWRvdWJsZS1yaWdodDogXCJcXGYxMDFcIjtcbiRmYS12YXItYW5nbGUtZG91YmxlLXVwOiBcIlxcZjEwMlwiO1xuJGZhLXZhci1hbmdsZS1kb3duOiBcIlxcZjEwN1wiO1xuJGZhLXZhci1hbmdsZS1sZWZ0OiBcIlxcZjEwNFwiO1xuJGZhLXZhci1hbmdsZS1yaWdodDogXCJcXGYxMDVcIjtcbiRmYS12YXItYW5nbGUtdXA6IFwiXFxmMTA2XCI7XG4kZmEtdmFyLWFwcGxlOiBcIlxcZjE3OVwiO1xuJGZhLXZhci1hcmNoaXZlOiBcIlxcZjE4N1wiO1xuJGZhLXZhci1hcmVhLWNoYXJ0OiBcIlxcZjFmZVwiO1xuJGZhLXZhci1hcnJvdy1jaXJjbGUtZG93bjogXCJcXGYwYWJcIjtcbiRmYS12YXItYXJyb3ctY2lyY2xlLWxlZnQ6IFwiXFxmMGE4XCI7XG4kZmEtdmFyLWFycm93LWNpcmNsZS1vLWRvd246IFwiXFxmMDFhXCI7XG4kZmEtdmFyLWFycm93LWNpcmNsZS1vLWxlZnQ6IFwiXFxmMTkwXCI7XG4kZmEtdmFyLWFycm93LWNpcmNsZS1vLXJpZ2h0OiBcIlxcZjE4ZVwiO1xuJGZhLXZhci1hcnJvdy1jaXJjbGUtby11cDogXCJcXGYwMWJcIjtcbiRmYS12YXItYXJyb3ctY2lyY2xlLXJpZ2h0OiBcIlxcZjBhOVwiO1xuJGZhLXZhci1hcnJvdy1jaXJjbGUtdXA6IFwiXFxmMGFhXCI7XG4kZmEtdmFyLWFycm93LWRvd246IFwiXFxmMDYzXCI7XG4kZmEtdmFyLWFycm93LWxlZnQ6IFwiXFxmMDYwXCI7XG4kZmEtdmFyLWFycm93LXJpZ2h0OiBcIlxcZjA2MVwiO1xuJGZhLXZhci1hcnJvdy11cDogXCJcXGYwNjJcIjtcbiRmYS12YXItYXJyb3dzOiBcIlxcZjA0N1wiO1xuJGZhLXZhci1hcnJvd3MtYWx0OiBcIlxcZjBiMlwiO1xuJGZhLXZhci1hcnJvd3MtaDogXCJcXGYwN2VcIjtcbiRmYS12YXItYXJyb3dzLXY6IFwiXFxmMDdkXCI7XG4kZmEtdmFyLWFzbC1pbnRlcnByZXRpbmc6IFwiXFxmMmEzXCI7XG4kZmEtdmFyLWFzc2lzdGl2ZS1saXN0ZW5pbmctc3lzdGVtczogXCJcXGYyYTJcIjtcbiRmYS12YXItYXN0ZXJpc2s6IFwiXFxmMDY5XCI7XG4kZmEtdmFyLWF0OiBcIlxcZjFmYVwiO1xuJGZhLXZhci1hdWRpby1kZXNjcmlwdGlvbjogXCJcXGYyOWVcIjtcbiRmYS12YXItYXV0b21vYmlsZTogXCJcXGYxYjlcIjtcbiRmYS12YXItYmFja3dhcmQ6IFwiXFxmMDRhXCI7XG4kZmEtdmFyLWJhbGFuY2Utc2NhbGU6IFwiXFxmMjRlXCI7XG4kZmEtdmFyLWJhbjogXCJcXGYwNWVcIjtcbiRmYS12YXItYmFuZGNhbXA6IFwiXFxmMmQ1XCI7XG4kZmEtdmFyLWJhbms6IFwiXFxmMTljXCI7XG4kZmEtdmFyLWJhci1jaGFydDogXCJcXGYwODBcIjtcbiRmYS12YXItYmFyLWNoYXJ0LW86IFwiXFxmMDgwXCI7XG4kZmEtdmFyLWJhcmNvZGU6IFwiXFxmMDJhXCI7XG4kZmEtdmFyLWJhcnM6IFwiXFxmMGM5XCI7XG4kZmEtdmFyLWJhdGg6IFwiXFxmMmNkXCI7XG4kZmEtdmFyLWJhdGh0dWI6IFwiXFxmMmNkXCI7XG4kZmEtdmFyLWJhdHRlcnk6IFwiXFxmMjQwXCI7XG4kZmEtdmFyLWJhdHRlcnktMDogXCJcXGYyNDRcIjtcbiRmYS12YXItYmF0dGVyeS0xOiBcIlxcZjI0M1wiO1xuJGZhLXZhci1iYXR0ZXJ5LTI6IFwiXFxmMjQyXCI7XG4kZmEtdmFyLWJhdHRlcnktMzogXCJcXGYyNDFcIjtcbiRmYS12YXItYmF0dGVyeS00OiBcIlxcZjI0MFwiO1xuJGZhLXZhci1iYXR0ZXJ5LWVtcHR5OiBcIlxcZjI0NFwiO1xuJGZhLXZhci1iYXR0ZXJ5LWZ1bGw6IFwiXFxmMjQwXCI7XG4kZmEtdmFyLWJhdHRlcnktaGFsZjogXCJcXGYyNDJcIjtcbiRmYS12YXItYmF0dGVyeS1xdWFydGVyOiBcIlxcZjI0M1wiO1xuJGZhLXZhci1iYXR0ZXJ5LXRocmVlLXF1YXJ0ZXJzOiBcIlxcZjI0MVwiO1xuJGZhLXZhci1iZWQ6IFwiXFxmMjM2XCI7XG4kZmEtdmFyLWJlZXI6IFwiXFxmMGZjXCI7XG4kZmEtdmFyLWJlaGFuY2U6IFwiXFxmMWI0XCI7XG4kZmEtdmFyLWJlaGFuY2Utc3F1YXJlOiBcIlxcZjFiNVwiO1xuJGZhLXZhci1iZWxsOiBcIlxcZjBmM1wiO1xuJGZhLXZhci1iZWxsLW86IFwiXFxmMGEyXCI7XG4kZmEtdmFyLWJlbGwtc2xhc2g6IFwiXFxmMWY2XCI7XG4kZmEtdmFyLWJlbGwtc2xhc2gtbzogXCJcXGYxZjdcIjtcbiRmYS12YXItYmljeWNsZTogXCJcXGYyMDZcIjtcbiRmYS12YXItYmlub2N1bGFyczogXCJcXGYxZTVcIjtcbiRmYS12YXItYmlydGhkYXktY2FrZTogXCJcXGYxZmRcIjtcbiRmYS12YXItYml0YnVja2V0OiBcIlxcZjE3MVwiO1xuJGZhLXZhci1iaXRidWNrZXQtc3F1YXJlOiBcIlxcZjE3MlwiO1xuJGZhLXZhci1iaXRjb2luOiBcIlxcZjE1YVwiO1xuJGZhLXZhci1ibGFjay10aWU6IFwiXFxmMjdlXCI7XG4kZmEtdmFyLWJsaW5kOiBcIlxcZjI5ZFwiO1xuJGZhLXZhci1ibHVldG9vdGg6IFwiXFxmMjkzXCI7XG4kZmEtdmFyLWJsdWV0b290aC1iOiBcIlxcZjI5NFwiO1xuJGZhLXZhci1ib2xkOiBcIlxcZjAzMlwiO1xuJGZhLXZhci1ib2x0OiBcIlxcZjBlN1wiO1xuJGZhLXZhci1ib21iOiBcIlxcZjFlMlwiO1xuJGZhLXZhci1ib29rOiBcIlxcZjAyZFwiO1xuJGZhLXZhci1ib29rbWFyazogXCJcXGYwMmVcIjtcbiRmYS12YXItYm9va21hcmstbzogXCJcXGYwOTdcIjtcbiRmYS12YXItYnJhaWxsZTogXCJcXGYyYTFcIjtcbiRmYS12YXItYnJpZWZjYXNlOiBcIlxcZjBiMVwiO1xuJGZhLXZhci1idGM6IFwiXFxmMTVhXCI7XG4kZmEtdmFyLWJ1ZzogXCJcXGYxODhcIjtcbiRmYS12YXItYnVpbGRpbmc6IFwiXFxmMWFkXCI7XG4kZmEtdmFyLWJ1aWxkaW5nLW86IFwiXFxmMGY3XCI7XG4kZmEtdmFyLWJ1bGxob3JuOiBcIlxcZjBhMVwiO1xuJGZhLXZhci1idWxsc2V5ZTogXCJcXGYxNDBcIjtcbiRmYS12YXItYnVzOiBcIlxcZjIwN1wiO1xuJGZhLXZhci1idXlzZWxsYWRzOiBcIlxcZjIwZFwiO1xuJGZhLXZhci1jYWI6IFwiXFxmMWJhXCI7XG4kZmEtdmFyLWNhbGN1bGF0b3I6IFwiXFxmMWVjXCI7XG4kZmEtdmFyLWNhbGVuZGFyOiBcIlxcZjA3M1wiO1xuJGZhLXZhci1jYWxlbmRhci1jaGVjay1vOiBcIlxcZjI3NFwiO1xuJGZhLXZhci1jYWxlbmRhci1taW51cy1vOiBcIlxcZjI3MlwiO1xuJGZhLXZhci1jYWxlbmRhci1vOiBcIlxcZjEzM1wiO1xuJGZhLXZhci1jYWxlbmRhci1wbHVzLW86IFwiXFxmMjcxXCI7XG4kZmEtdmFyLWNhbGVuZGFyLXRpbWVzLW86IFwiXFxmMjczXCI7XG4kZmEtdmFyLWNhbWVyYTogXCJcXGYwMzBcIjtcbiRmYS12YXItY2FtZXJhLXJldHJvOiBcIlxcZjA4M1wiO1xuJGZhLXZhci1jYXI6IFwiXFxmMWI5XCI7XG4kZmEtdmFyLWNhcmV0LWRvd246IFwiXFxmMGQ3XCI7XG4kZmEtdmFyLWNhcmV0LWxlZnQ6IFwiXFxmMGQ5XCI7XG4kZmEtdmFyLWNhcmV0LXJpZ2h0OiBcIlxcZjBkYVwiO1xuJGZhLXZhci1jYXJldC1zcXVhcmUtby1kb3duOiBcIlxcZjE1MFwiO1xuJGZhLXZhci1jYXJldC1zcXVhcmUtby1sZWZ0OiBcIlxcZjE5MVwiO1xuJGZhLXZhci1jYXJldC1zcXVhcmUtby1yaWdodDogXCJcXGYxNTJcIjtcbiRmYS12YXItY2FyZXQtc3F1YXJlLW8tdXA6IFwiXFxmMTUxXCI7XG4kZmEtdmFyLWNhcmV0LXVwOiBcIlxcZjBkOFwiO1xuJGZhLXZhci1jYXJ0LWFycm93LWRvd246IFwiXFxmMjE4XCI7XG4kZmEtdmFyLWNhcnQtcGx1czogXCJcXGYyMTdcIjtcbiRmYS12YXItY2M6IFwiXFxmMjBhXCI7XG4kZmEtdmFyLWNjLWFtZXg6IFwiXFxmMWYzXCI7XG4kZmEtdmFyLWNjLWRpbmVycy1jbHViOiBcIlxcZjI0Y1wiO1xuJGZhLXZhci1jYy1kaXNjb3ZlcjogXCJcXGYxZjJcIjtcbiRmYS12YXItY2MtamNiOiBcIlxcZjI0YlwiO1xuJGZhLXZhci1jYy1tYXN0ZXJjYXJkOiBcIlxcZjFmMVwiO1xuJGZhLXZhci1jYy1wYXlwYWw6IFwiXFxmMWY0XCI7XG4kZmEtdmFyLWNjLXN0cmlwZTogXCJcXGYxZjVcIjtcbiRmYS12YXItY2MtdmlzYTogXCJcXGYxZjBcIjtcbiRmYS12YXItY2VydGlmaWNhdGU6IFwiXFxmMGEzXCI7XG4kZmEtdmFyLWNoYWluOiBcIlxcZjBjMVwiO1xuJGZhLXZhci1jaGFpbi1icm9rZW46IFwiXFxmMTI3XCI7XG4kZmEtdmFyLWNoZWNrOiBcIlxcZjAwY1wiO1xuJGZhLXZhci1jaGVjay1jaXJjbGU6IFwiXFxmMDU4XCI7XG4kZmEtdmFyLWNoZWNrLWNpcmNsZS1vOiBcIlxcZjA1ZFwiO1xuJGZhLXZhci1jaGVjay1zcXVhcmU6IFwiXFxmMTRhXCI7XG4kZmEtdmFyLWNoZWNrLXNxdWFyZS1vOiBcIlxcZjA0NlwiO1xuJGZhLXZhci1jaGV2cm9uLWNpcmNsZS1kb3duOiBcIlxcZjEzYVwiO1xuJGZhLXZhci1jaGV2cm9uLWNpcmNsZS1sZWZ0OiBcIlxcZjEzN1wiO1xuJGZhLXZhci1jaGV2cm9uLWNpcmNsZS1yaWdodDogXCJcXGYxMzhcIjtcbiRmYS12YXItY2hldnJvbi1jaXJjbGUtdXA6IFwiXFxmMTM5XCI7XG4kZmEtdmFyLWNoZXZyb24tZG93bjogXCJcXGYwNzhcIjtcbiRmYS12YXItY2hldnJvbi1sZWZ0OiBcIlxcZjA1M1wiO1xuJGZhLXZhci1jaGV2cm9uLXJpZ2h0OiBcIlxcZjA1NFwiO1xuJGZhLXZhci1jaGV2cm9uLXVwOiBcIlxcZjA3N1wiO1xuJGZhLXZhci1jaGlsZDogXCJcXGYxYWVcIjtcbiRmYS12YXItY2hyb21lOiBcIlxcZjI2OFwiO1xuJGZhLXZhci1jaXJjbGU6IFwiXFxmMTExXCI7XG4kZmEtdmFyLWNpcmNsZS1vOiBcIlxcZjEwY1wiO1xuJGZhLXZhci1jaXJjbGUtby1ub3RjaDogXCJcXGYxY2VcIjtcbiRmYS12YXItY2lyY2xlLXRoaW46IFwiXFxmMWRiXCI7XG4kZmEtdmFyLWNsaXBib2FyZDogXCJcXGYwZWFcIjtcbiRmYS12YXItY2xvY2stbzogXCJcXGYwMTdcIjtcbiRmYS12YXItY2xvbmU6IFwiXFxmMjRkXCI7XG4kZmEtdmFyLWNsb3NlOiBcIlxcZjAwZFwiO1xuJGZhLXZhci1jbG91ZDogXCJcXGYwYzJcIjtcbiRmYS12YXItY2xvdWQtZG93bmxvYWQ6IFwiXFxmMGVkXCI7XG4kZmEtdmFyLWNsb3VkLXVwbG9hZDogXCJcXGYwZWVcIjtcbiRmYS12YXItY255OiBcIlxcZjE1N1wiO1xuJGZhLXZhci1jb2RlOiBcIlxcZjEyMVwiO1xuJGZhLXZhci1jb2RlLWZvcms6IFwiXFxmMTI2XCI7XG4kZmEtdmFyLWNvZGVwZW46IFwiXFxmMWNiXCI7XG4kZmEtdmFyLWNvZGllcGllOiBcIlxcZjI4NFwiO1xuJGZhLXZhci1jb2ZmZWU6IFwiXFxmMGY0XCI7XG4kZmEtdmFyLWNvZzogXCJcXGYwMTNcIjtcbiRmYS12YXItY29nczogXCJcXGYwODVcIjtcbiRmYS12YXItY29sdW1uczogXCJcXGYwZGJcIjtcbiRmYS12YXItY29tbWVudDogXCJcXGYwNzVcIjtcbiRmYS12YXItY29tbWVudC1vOiBcIlxcZjBlNVwiO1xuJGZhLXZhci1jb21tZW50aW5nOiBcIlxcZjI3YVwiO1xuJGZhLXZhci1jb21tZW50aW5nLW86IFwiXFxmMjdiXCI7XG4kZmEtdmFyLWNvbW1lbnRzOiBcIlxcZjA4NlwiO1xuJGZhLXZhci1jb21tZW50cy1vOiBcIlxcZjBlNlwiO1xuJGZhLXZhci1jb21wYXNzOiBcIlxcZjE0ZVwiO1xuJGZhLXZhci1jb21wcmVzczogXCJcXGYwNjZcIjtcbiRmYS12YXItY29ubmVjdGRldmVsb3A6IFwiXFxmMjBlXCI7XG4kZmEtdmFyLWNvbnRhbzogXCJcXGYyNmRcIjtcbiRmYS12YXItY29weTogXCJcXGYwYzVcIjtcbiRmYS12YXItY29weXJpZ2h0OiBcIlxcZjFmOVwiO1xuJGZhLXZhci1jcmVhdGl2ZS1jb21tb25zOiBcIlxcZjI1ZVwiO1xuJGZhLXZhci1jcmVkaXQtY2FyZDogXCJcXGYwOWRcIjtcbiRmYS12YXItY3JlZGl0LWNhcmQtYWx0OiBcIlxcZjI4M1wiO1xuJGZhLXZhci1jcm9wOiBcIlxcZjEyNVwiO1xuJGZhLXZhci1jcm9zc2hhaXJzOiBcIlxcZjA1YlwiO1xuJGZhLXZhci1jc3MzOiBcIlxcZjEzY1wiO1xuJGZhLXZhci1jdWJlOiBcIlxcZjFiMlwiO1xuJGZhLXZhci1jdWJlczogXCJcXGYxYjNcIjtcbiRmYS12YXItY3V0OiBcIlxcZjBjNFwiO1xuJGZhLXZhci1jdXRsZXJ5OiBcIlxcZjBmNVwiO1xuJGZhLXZhci1kYXNoYm9hcmQ6IFwiXFxmMGU0XCI7XG4kZmEtdmFyLWRhc2hjdWJlOiBcIlxcZjIxMFwiO1xuJGZhLXZhci1kYXRhYmFzZTogXCJcXGYxYzBcIjtcbiRmYS12YXItZGVhZjogXCJcXGYyYTRcIjtcbiRmYS12YXItZGVhZm5lc3M6IFwiXFxmMmE0XCI7XG4kZmEtdmFyLWRlZGVudDogXCJcXGYwM2JcIjtcbiRmYS12YXItZGVsaWNpb3VzOiBcIlxcZjFhNVwiO1xuJGZhLXZhci1kZXNrdG9wOiBcIlxcZjEwOFwiO1xuJGZhLXZhci1kZXZpYW50YXJ0OiBcIlxcZjFiZFwiO1xuJGZhLXZhci1kaWFtb25kOiBcIlxcZjIxOVwiO1xuJGZhLXZhci1kaWdnOiBcIlxcZjFhNlwiO1xuJGZhLXZhci1kb2xsYXI6IFwiXFxmMTU1XCI7XG4kZmEtdmFyLWRvdC1jaXJjbGUtbzogXCJcXGYxOTJcIjtcbiRmYS12YXItZG93bmxvYWQ6IFwiXFxmMDE5XCI7XG4kZmEtdmFyLWRyaWJiYmxlOiBcIlxcZjE3ZFwiO1xuJGZhLXZhci1kcml2ZXJzLWxpY2Vuc2U6IFwiXFxmMmMyXCI7XG4kZmEtdmFyLWRyaXZlcnMtbGljZW5zZS1vOiBcIlxcZjJjM1wiO1xuJGZhLXZhci1kcm9wYm94OiBcIlxcZjE2YlwiO1xuJGZhLXZhci1kcnVwYWw6IFwiXFxmMWE5XCI7XG4kZmEtdmFyLWVkZ2U6IFwiXFxmMjgyXCI7XG4kZmEtdmFyLWVkaXQ6IFwiXFxmMDQ0XCI7XG4kZmEtdmFyLWVlcmNhc3Q6IFwiXFxmMmRhXCI7XG4kZmEtdmFyLWVqZWN0OiBcIlxcZjA1MlwiO1xuJGZhLXZhci1lbGxpcHNpcy1oOiBcIlxcZjE0MVwiO1xuJGZhLXZhci1lbGxpcHNpcy12OiBcIlxcZjE0MlwiO1xuJGZhLXZhci1lbXBpcmU6IFwiXFxmMWQxXCI7XG4kZmEtdmFyLWVudmVsb3BlOiBcIlxcZjBlMFwiO1xuJGZhLXZhci1lbnZlbG9wZS1vOiBcIlxcZjAwM1wiO1xuJGZhLXZhci1lbnZlbG9wZS1vcGVuOiBcIlxcZjJiNlwiO1xuJGZhLXZhci1lbnZlbG9wZS1vcGVuLW86IFwiXFxmMmI3XCI7XG4kZmEtdmFyLWVudmVsb3BlLXNxdWFyZTogXCJcXGYxOTlcIjtcbiRmYS12YXItZW52aXJhOiBcIlxcZjI5OVwiO1xuJGZhLXZhci1lcmFzZXI6IFwiXFxmMTJkXCI7XG4kZmEtdmFyLWV0c3k6IFwiXFxmMmQ3XCI7XG4kZmEtdmFyLWV1cjogXCJcXGYxNTNcIjtcbiRmYS12YXItZXVybzogXCJcXGYxNTNcIjtcbiRmYS12YXItZXhjaGFuZ2U6IFwiXFxmMGVjXCI7XG4kZmEtdmFyLWV4Y2xhbWF0aW9uOiBcIlxcZjEyYVwiO1xuJGZhLXZhci1leGNsYW1hdGlvbi1jaXJjbGU6IFwiXFxmMDZhXCI7XG4kZmEtdmFyLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlOiBcIlxcZjA3MVwiO1xuJGZhLXZhci1leHBhbmQ6IFwiXFxmMDY1XCI7XG4kZmEtdmFyLWV4cGVkaXRlZHNzbDogXCJcXGYyM2VcIjtcbiRmYS12YXItZXh0ZXJuYWwtbGluazogXCJcXGYwOGVcIjtcbiRmYS12YXItZXh0ZXJuYWwtbGluay1zcXVhcmU6IFwiXFxmMTRjXCI7XG4kZmEtdmFyLWV5ZTogXCJcXGYwNmVcIjtcbiRmYS12YXItZXllLXNsYXNoOiBcIlxcZjA3MFwiO1xuJGZhLXZhci1leWVkcm9wcGVyOiBcIlxcZjFmYlwiO1xuJGZhLXZhci1mYTogXCJcXGYyYjRcIjtcbiRmYS12YXItZmFjZWJvb2s6IFwiXFxmMDlhXCI7XG4kZmEtdmFyLWZhY2Vib29rLWY6IFwiXFxmMDlhXCI7XG4kZmEtdmFyLWZhY2Vib29rLW9mZmljaWFsOiBcIlxcZjIzMFwiO1xuJGZhLXZhci1mYWNlYm9vay1zcXVhcmU6IFwiXFxmMDgyXCI7XG4kZmEtdmFyLWZhc3QtYmFja3dhcmQ6IFwiXFxmMDQ5XCI7XG4kZmEtdmFyLWZhc3QtZm9yd2FyZDogXCJcXGYwNTBcIjtcbiRmYS12YXItZmF4OiBcIlxcZjFhY1wiO1xuJGZhLXZhci1mZWVkOiBcIlxcZjA5ZVwiO1xuJGZhLXZhci1mZW1hbGU6IFwiXFxmMTgyXCI7XG4kZmEtdmFyLWZpZ2h0ZXItamV0OiBcIlxcZjBmYlwiO1xuJGZhLXZhci1maWxlOiBcIlxcZjE1YlwiO1xuJGZhLXZhci1maWxlLWFyY2hpdmUtbzogXCJcXGYxYzZcIjtcbiRmYS12YXItZmlsZS1hdWRpby1vOiBcIlxcZjFjN1wiO1xuJGZhLXZhci1maWxlLWNvZGUtbzogXCJcXGYxYzlcIjtcbiRmYS12YXItZmlsZS1leGNlbC1vOiBcIlxcZjFjM1wiO1xuJGZhLXZhci1maWxlLWltYWdlLW86IFwiXFxmMWM1XCI7XG4kZmEtdmFyLWZpbGUtbW92aWUtbzogXCJcXGYxYzhcIjtcbiRmYS12YXItZmlsZS1vOiBcIlxcZjAxNlwiO1xuJGZhLXZhci1maWxlLXBkZi1vOiBcIlxcZjFjMVwiO1xuJGZhLXZhci1maWxlLXBob3RvLW86IFwiXFxmMWM1XCI7XG4kZmEtdmFyLWZpbGUtcGljdHVyZS1vOiBcIlxcZjFjNVwiO1xuJGZhLXZhci1maWxlLXBvd2VycG9pbnQtbzogXCJcXGYxYzRcIjtcbiRmYS12YXItZmlsZS1zb3VuZC1vOiBcIlxcZjFjN1wiO1xuJGZhLXZhci1maWxlLXRleHQ6IFwiXFxmMTVjXCI7XG4kZmEtdmFyLWZpbGUtdGV4dC1vOiBcIlxcZjBmNlwiO1xuJGZhLXZhci1maWxlLXZpZGVvLW86IFwiXFxmMWM4XCI7XG4kZmEtdmFyLWZpbGUtd29yZC1vOiBcIlxcZjFjMlwiO1xuJGZhLXZhci1maWxlLXppcC1vOiBcIlxcZjFjNlwiO1xuJGZhLXZhci1maWxlcy1vOiBcIlxcZjBjNVwiO1xuJGZhLXZhci1maWxtOiBcIlxcZjAwOFwiO1xuJGZhLXZhci1maWx0ZXI6IFwiXFxmMGIwXCI7XG4kZmEtdmFyLWZpcmU6IFwiXFxmMDZkXCI7XG4kZmEtdmFyLWZpcmUtZXh0aW5ndWlzaGVyOiBcIlxcZjEzNFwiO1xuJGZhLXZhci1maXJlZm94OiBcIlxcZjI2OVwiO1xuJGZhLXZhci1maXJzdC1vcmRlcjogXCJcXGYyYjBcIjtcbiRmYS12YXItZmxhZzogXCJcXGYwMjRcIjtcbiRmYS12YXItZmxhZy1jaGVja2VyZWQ6IFwiXFxmMTFlXCI7XG4kZmEtdmFyLWZsYWctbzogXCJcXGYxMWRcIjtcbiRmYS12YXItZmxhc2g6IFwiXFxmMGU3XCI7XG4kZmEtdmFyLWZsYXNrOiBcIlxcZjBjM1wiO1xuJGZhLXZhci1mbGlja3I6IFwiXFxmMTZlXCI7XG4kZmEtdmFyLWZsb3BweS1vOiBcIlxcZjBjN1wiO1xuJGZhLXZhci1mb2xkZXI6IFwiXFxmMDdiXCI7XG4kZmEtdmFyLWZvbGRlci1vOiBcIlxcZjExNFwiO1xuJGZhLXZhci1mb2xkZXItb3BlbjogXCJcXGYwN2NcIjtcbiRmYS12YXItZm9sZGVyLW9wZW4tbzogXCJcXGYxMTVcIjtcbiRmYS12YXItZm9udDogXCJcXGYwMzFcIjtcbiRmYS12YXItZm9udC1hd2Vzb21lOiBcIlxcZjJiNFwiO1xuJGZhLXZhci1mb250aWNvbnM6IFwiXFxmMjgwXCI7XG4kZmEtdmFyLWZvcnQtYXdlc29tZTogXCJcXGYyODZcIjtcbiRmYS12YXItZm9ydW1iZWU6IFwiXFxmMjExXCI7XG4kZmEtdmFyLWZvcndhcmQ6IFwiXFxmMDRlXCI7XG4kZmEtdmFyLWZvdXJzcXVhcmU6IFwiXFxmMTgwXCI7XG4kZmEtdmFyLWZyZWUtY29kZS1jYW1wOiBcIlxcZjJjNVwiO1xuJGZhLXZhci1mcm93bi1vOiBcIlxcZjExOVwiO1xuJGZhLXZhci1mdXRib2wtbzogXCJcXGYxZTNcIjtcbiRmYS12YXItZ2FtZXBhZDogXCJcXGYxMWJcIjtcbiRmYS12YXItZ2F2ZWw6IFwiXFxmMGUzXCI7XG4kZmEtdmFyLWdicDogXCJcXGYxNTRcIjtcbiRmYS12YXItZ2U6IFwiXFxmMWQxXCI7XG4kZmEtdmFyLWdlYXI6IFwiXFxmMDEzXCI7XG4kZmEtdmFyLWdlYXJzOiBcIlxcZjA4NVwiO1xuJGZhLXZhci1nZW5kZXJsZXNzOiBcIlxcZjIyZFwiO1xuJGZhLXZhci1nZXQtcG9ja2V0OiBcIlxcZjI2NVwiO1xuJGZhLXZhci1nZzogXCJcXGYyNjBcIjtcbiRmYS12YXItZ2ctY2lyY2xlOiBcIlxcZjI2MVwiO1xuJGZhLXZhci1naWZ0OiBcIlxcZjA2YlwiO1xuJGZhLXZhci1naXQ6IFwiXFxmMWQzXCI7XG4kZmEtdmFyLWdpdC1zcXVhcmU6IFwiXFxmMWQyXCI7XG4kZmEtdmFyLWdpdGh1YjogXCJcXGYwOWJcIjtcbiRmYS12YXItZ2l0aHViLWFsdDogXCJcXGYxMTNcIjtcbiRmYS12YXItZ2l0aHViLXNxdWFyZTogXCJcXGYwOTJcIjtcbiRmYS12YXItZ2l0bGFiOiBcIlxcZjI5NlwiO1xuJGZhLXZhci1naXR0aXA6IFwiXFxmMTg0XCI7XG4kZmEtdmFyLWdsYXNzOiBcIlxcZjAwMFwiO1xuJGZhLXZhci1nbGlkZTogXCJcXGYyYTVcIjtcbiRmYS12YXItZ2xpZGUtZzogXCJcXGYyYTZcIjtcbiRmYS12YXItZ2xvYmU6IFwiXFxmMGFjXCI7XG4kZmEtdmFyLWdvb2dsZTogXCJcXGYxYTBcIjtcbiRmYS12YXItZ29vZ2xlLXBsdXM6IFwiXFxmMGQ1XCI7XG4kZmEtdmFyLWdvb2dsZS1wbHVzLWNpcmNsZTogXCJcXGYyYjNcIjtcbiRmYS12YXItZ29vZ2xlLXBsdXMtb2ZmaWNpYWw6IFwiXFxmMmIzXCI7XG4kZmEtdmFyLWdvb2dsZS1wbHVzLXNxdWFyZTogXCJcXGYwZDRcIjtcbiRmYS12YXItZ29vZ2xlLXdhbGxldDogXCJcXGYxZWVcIjtcbiRmYS12YXItZ3JhZHVhdGlvbi1jYXA6IFwiXFxmMTlkXCI7XG4kZmEtdmFyLWdyYXRpcGF5OiBcIlxcZjE4NFwiO1xuJGZhLXZhci1ncmF2OiBcIlxcZjJkNlwiO1xuJGZhLXZhci1ncm91cDogXCJcXGYwYzBcIjtcbiRmYS12YXItaC1zcXVhcmU6IFwiXFxmMGZkXCI7XG4kZmEtdmFyLWhhY2tlci1uZXdzOiBcIlxcZjFkNFwiO1xuJGZhLXZhci1oYW5kLWdyYWItbzogXCJcXGYyNTVcIjtcbiRmYS12YXItaGFuZC1saXphcmQtbzogXCJcXGYyNThcIjtcbiRmYS12YXItaGFuZC1vLWRvd246IFwiXFxmMGE3XCI7XG4kZmEtdmFyLWhhbmQtby1sZWZ0OiBcIlxcZjBhNVwiO1xuJGZhLXZhci1oYW5kLW8tcmlnaHQ6IFwiXFxmMGE0XCI7XG4kZmEtdmFyLWhhbmQtby11cDogXCJcXGYwYTZcIjtcbiRmYS12YXItaGFuZC1wYXBlci1vOiBcIlxcZjI1NlwiO1xuJGZhLXZhci1oYW5kLXBlYWNlLW86IFwiXFxmMjViXCI7XG4kZmEtdmFyLWhhbmQtcG9pbnRlci1vOiBcIlxcZjI1YVwiO1xuJGZhLXZhci1oYW5kLXJvY2stbzogXCJcXGYyNTVcIjtcbiRmYS12YXItaGFuZC1zY2lzc29ycy1vOiBcIlxcZjI1N1wiO1xuJGZhLXZhci1oYW5kLXNwb2NrLW86IFwiXFxmMjU5XCI7XG4kZmEtdmFyLWhhbmQtc3RvcC1vOiBcIlxcZjI1NlwiO1xuJGZhLXZhci1oYW5kc2hha2UtbzogXCJcXGYyYjVcIjtcbiRmYS12YXItaGFyZC1vZi1oZWFyaW5nOiBcIlxcZjJhNFwiO1xuJGZhLXZhci1oYXNodGFnOiBcIlxcZjI5MlwiO1xuJGZhLXZhci1oZGQtbzogXCJcXGYwYTBcIjtcbiRmYS12YXItaGVhZGVyOiBcIlxcZjFkY1wiO1xuJGZhLXZhci1oZWFkcGhvbmVzOiBcIlxcZjAyNVwiO1xuJGZhLXZhci1oZWFydDogXCJcXGYwMDRcIjtcbiRmYS12YXItaGVhcnQtbzogXCJcXGYwOGFcIjtcbiRmYS12YXItaGVhcnRiZWF0OiBcIlxcZjIxZVwiO1xuJGZhLXZhci1oaXN0b3J5OiBcIlxcZjFkYVwiO1xuJGZhLXZhci1ob21lOiBcIlxcZjAxNVwiO1xuJGZhLXZhci1ob3NwaXRhbC1vOiBcIlxcZjBmOFwiO1xuJGZhLXZhci1ob3RlbDogXCJcXGYyMzZcIjtcbiRmYS12YXItaG91cmdsYXNzOiBcIlxcZjI1NFwiO1xuJGZhLXZhci1ob3VyZ2xhc3MtMTogXCJcXGYyNTFcIjtcbiRmYS12YXItaG91cmdsYXNzLTI6IFwiXFxmMjUyXCI7XG4kZmEtdmFyLWhvdXJnbGFzcy0zOiBcIlxcZjI1M1wiO1xuJGZhLXZhci1ob3VyZ2xhc3MtZW5kOiBcIlxcZjI1M1wiO1xuJGZhLXZhci1ob3VyZ2xhc3MtaGFsZjogXCJcXGYyNTJcIjtcbiRmYS12YXItaG91cmdsYXNzLW86IFwiXFxmMjUwXCI7XG4kZmEtdmFyLWhvdXJnbGFzcy1zdGFydDogXCJcXGYyNTFcIjtcbiRmYS12YXItaG91eno6IFwiXFxmMjdjXCI7XG4kZmEtdmFyLWh0bWw1OiBcIlxcZjEzYlwiO1xuJGZhLXZhci1pLWN1cnNvcjogXCJcXGYyNDZcIjtcbiRmYS12YXItaWQtYmFkZ2U6IFwiXFxmMmMxXCI7XG4kZmEtdmFyLWlkLWNhcmQ6IFwiXFxmMmMyXCI7XG4kZmEtdmFyLWlkLWNhcmQtbzogXCJcXGYyYzNcIjtcbiRmYS12YXItaWxzOiBcIlxcZjIwYlwiO1xuJGZhLXZhci1pbWFnZTogXCJcXGYwM2VcIjtcbiRmYS12YXItaW1kYjogXCJcXGYyZDhcIjtcbiRmYS12YXItaW5ib3g6IFwiXFxmMDFjXCI7XG4kZmEtdmFyLWluZGVudDogXCJcXGYwM2NcIjtcbiRmYS12YXItaW5kdXN0cnk6IFwiXFxmMjc1XCI7XG4kZmEtdmFyLWluZm86IFwiXFxmMTI5XCI7XG4kZmEtdmFyLWluZm8tY2lyY2xlOiBcIlxcZjA1YVwiO1xuJGZhLXZhci1pbnI6IFwiXFxmMTU2XCI7XG4kZmEtdmFyLWluc3RhZ3JhbTogXCJcXGYxNmRcIjtcbiRmYS12YXItaW5zdGl0dXRpb246IFwiXFxmMTljXCI7XG4kZmEtdmFyLWludGVybmV0LWV4cGxvcmVyOiBcIlxcZjI2YlwiO1xuJGZhLXZhci1pbnRlcnNleDogXCJcXGYyMjRcIjtcbiRmYS12YXItaW94aG9zdDogXCJcXGYyMDhcIjtcbiRmYS12YXItaXRhbGljOiBcIlxcZjAzM1wiO1xuJGZhLXZhci1qb29tbGE6IFwiXFxmMWFhXCI7XG4kZmEtdmFyLWpweTogXCJcXGYxNTdcIjtcbiRmYS12YXItanNmaWRkbGU6IFwiXFxmMWNjXCI7XG4kZmEtdmFyLWtleTogXCJcXGYwODRcIjtcbiRmYS12YXIta2V5Ym9hcmQtbzogXCJcXGYxMWNcIjtcbiRmYS12YXIta3J3OiBcIlxcZjE1OVwiO1xuJGZhLXZhci1sYW5ndWFnZTogXCJcXGYxYWJcIjtcbiRmYS12YXItbGFwdG9wOiBcIlxcZjEwOVwiO1xuJGZhLXZhci1sYXN0Zm06IFwiXFxmMjAyXCI7XG4kZmEtdmFyLWxhc3RmbS1zcXVhcmU6IFwiXFxmMjAzXCI7XG4kZmEtdmFyLWxlYWY6IFwiXFxmMDZjXCI7XG4kZmEtdmFyLWxlYW5wdWI6IFwiXFxmMjEyXCI7XG4kZmEtdmFyLWxlZ2FsOiBcIlxcZjBlM1wiO1xuJGZhLXZhci1sZW1vbi1vOiBcIlxcZjA5NFwiO1xuJGZhLXZhci1sZXZlbC1kb3duOiBcIlxcZjE0OVwiO1xuJGZhLXZhci1sZXZlbC11cDogXCJcXGYxNDhcIjtcbiRmYS12YXItbGlmZS1ib3V5OiBcIlxcZjFjZFwiO1xuJGZhLXZhci1saWZlLWJ1b3k6IFwiXFxmMWNkXCI7XG4kZmEtdmFyLWxpZmUtcmluZzogXCJcXGYxY2RcIjtcbiRmYS12YXItbGlmZS1zYXZlcjogXCJcXGYxY2RcIjtcbiRmYS12YXItbGlnaHRidWxiLW86IFwiXFxmMGViXCI7XG4kZmEtdmFyLWxpbmUtY2hhcnQ6IFwiXFxmMjAxXCI7XG4kZmEtdmFyLWxpbms6IFwiXFxmMGMxXCI7XG4kZmEtdmFyLWxpbmtlZGluOiBcIlxcZjBlMVwiO1xuJGZhLXZhci1saW5rZWRpbi1zcXVhcmU6IFwiXFxmMDhjXCI7XG4kZmEtdmFyLWxpbm9kZTogXCJcXGYyYjhcIjtcbiRmYS12YXItbGludXg6IFwiXFxmMTdjXCI7XG4kZmEtdmFyLWxpc3Q6IFwiXFxmMDNhXCI7XG4kZmEtdmFyLWxpc3QtYWx0OiBcIlxcZjAyMlwiO1xuJGZhLXZhci1saXN0LW9sOiBcIlxcZjBjYlwiO1xuJGZhLXZhci1saXN0LXVsOiBcIlxcZjBjYVwiO1xuJGZhLXZhci1sb2NhdGlvbi1hcnJvdzogXCJcXGYxMjRcIjtcbiRmYS12YXItbG9jazogXCJcXGYwMjNcIjtcbiRmYS12YXItbG9uZy1hcnJvdy1kb3duOiBcIlxcZjE3NVwiO1xuJGZhLXZhci1sb25nLWFycm93LWxlZnQ6IFwiXFxmMTc3XCI7XG4kZmEtdmFyLWxvbmctYXJyb3ctcmlnaHQ6IFwiXFxmMTc4XCI7XG4kZmEtdmFyLWxvbmctYXJyb3ctdXA6IFwiXFxmMTc2XCI7XG4kZmEtdmFyLWxvdy12aXNpb246IFwiXFxmMmE4XCI7XG4kZmEtdmFyLW1hZ2ljOiBcIlxcZjBkMFwiO1xuJGZhLXZhci1tYWduZXQ6IFwiXFxmMDc2XCI7XG4kZmEtdmFyLW1haWwtZm9yd2FyZDogXCJcXGYwNjRcIjtcbiRmYS12YXItbWFpbC1yZXBseTogXCJcXGYxMTJcIjtcbiRmYS12YXItbWFpbC1yZXBseS1hbGw6IFwiXFxmMTIyXCI7XG4kZmEtdmFyLW1hbGU6IFwiXFxmMTgzXCI7XG4kZmEtdmFyLW1hcDogXCJcXGYyNzlcIjtcbiRmYS12YXItbWFwLW1hcmtlcjogXCJcXGYwNDFcIjtcbiRmYS12YXItbWFwLW86IFwiXFxmMjc4XCI7XG4kZmEtdmFyLW1hcC1waW46IFwiXFxmMjc2XCI7XG4kZmEtdmFyLW1hcC1zaWduczogXCJcXGYyNzdcIjtcbiRmYS12YXItbWFyczogXCJcXGYyMjJcIjtcbiRmYS12YXItbWFycy1kb3VibGU6IFwiXFxmMjI3XCI7XG4kZmEtdmFyLW1hcnMtc3Ryb2tlOiBcIlxcZjIyOVwiO1xuJGZhLXZhci1tYXJzLXN0cm9rZS1oOiBcIlxcZjIyYlwiO1xuJGZhLXZhci1tYXJzLXN0cm9rZS12OiBcIlxcZjIyYVwiO1xuJGZhLXZhci1tYXhjZG46IFwiXFxmMTM2XCI7XG4kZmEtdmFyLW1lYW5wYXRoOiBcIlxcZjIwY1wiO1xuJGZhLXZhci1tZWRpdW06IFwiXFxmMjNhXCI7XG4kZmEtdmFyLW1lZGtpdDogXCJcXGYwZmFcIjtcbiRmYS12YXItbWVldHVwOiBcIlxcZjJlMFwiO1xuJGZhLXZhci1tZWgtbzogXCJcXGYxMWFcIjtcbiRmYS12YXItbWVyY3VyeTogXCJcXGYyMjNcIjtcbiRmYS12YXItbWljcm9jaGlwOiBcIlxcZjJkYlwiO1xuJGZhLXZhci1taWNyb3Bob25lOiBcIlxcZjEzMFwiO1xuJGZhLXZhci1taWNyb3Bob25lLXNsYXNoOiBcIlxcZjEzMVwiO1xuJGZhLXZhci1taW51czogXCJcXGYwNjhcIjtcbiRmYS12YXItbWludXMtY2lyY2xlOiBcIlxcZjA1NlwiO1xuJGZhLXZhci1taW51cy1zcXVhcmU6IFwiXFxmMTQ2XCI7XG4kZmEtdmFyLW1pbnVzLXNxdWFyZS1vOiBcIlxcZjE0N1wiO1xuJGZhLXZhci1taXhjbG91ZDogXCJcXGYyODlcIjtcbiRmYS12YXItbW9iaWxlOiBcIlxcZjEwYlwiO1xuJGZhLXZhci1tb2JpbGUtcGhvbmU6IFwiXFxmMTBiXCI7XG4kZmEtdmFyLW1vZHg6IFwiXFxmMjg1XCI7XG4kZmEtdmFyLW1vbmV5OiBcIlxcZjBkNlwiO1xuJGZhLXZhci1tb29uLW86IFwiXFxmMTg2XCI7XG4kZmEtdmFyLW1vcnRhci1ib2FyZDogXCJcXGYxOWRcIjtcbiRmYS12YXItbW90b3JjeWNsZTogXCJcXGYyMWNcIjtcbiRmYS12YXItbW91c2UtcG9pbnRlcjogXCJcXGYyNDVcIjtcbiRmYS12YXItbXVzaWM6IFwiXFxmMDAxXCI7XG4kZmEtdmFyLW5hdmljb246IFwiXFxmMGM5XCI7XG4kZmEtdmFyLW5ldXRlcjogXCJcXGYyMmNcIjtcbiRmYS12YXItbmV3c3BhcGVyLW86IFwiXFxmMWVhXCI7XG4kZmEtdmFyLW9iamVjdC1ncm91cDogXCJcXGYyNDdcIjtcbiRmYS12YXItb2JqZWN0LXVuZ3JvdXA6IFwiXFxmMjQ4XCI7XG4kZmEtdmFyLW9kbm9rbGFzc25pa2k6IFwiXFxmMjYzXCI7XG4kZmEtdmFyLW9kbm9rbGFzc25pa2ktc3F1YXJlOiBcIlxcZjI2NFwiO1xuJGZhLXZhci1vcGVuY2FydDogXCJcXGYyM2RcIjtcbiRmYS12YXItb3BlbmlkOiBcIlxcZjE5YlwiO1xuJGZhLXZhci1vcGVyYTogXCJcXGYyNmFcIjtcbiRmYS12YXItb3B0aW4tbW9uc3RlcjogXCJcXGYyM2NcIjtcbiRmYS12YXItb3V0ZGVudDogXCJcXGYwM2JcIjtcbiRmYS12YXItcGFnZWxpbmVzOiBcIlxcZjE4Y1wiO1xuJGZhLXZhci1wYWludC1icnVzaDogXCJcXGYxZmNcIjtcbiRmYS12YXItcGFwZXItcGxhbmU6IFwiXFxmMWQ4XCI7XG4kZmEtdmFyLXBhcGVyLXBsYW5lLW86IFwiXFxmMWQ5XCI7XG4kZmEtdmFyLXBhcGVyY2xpcDogXCJcXGYwYzZcIjtcbiRmYS12YXItcGFyYWdyYXBoOiBcIlxcZjFkZFwiO1xuJGZhLXZhci1wYXN0ZTogXCJcXGYwZWFcIjtcbiRmYS12YXItcGF1c2U6IFwiXFxmMDRjXCI7XG4kZmEtdmFyLXBhdXNlLWNpcmNsZTogXCJcXGYyOGJcIjtcbiRmYS12YXItcGF1c2UtY2lyY2xlLW86IFwiXFxmMjhjXCI7XG4kZmEtdmFyLXBhdzogXCJcXGYxYjBcIjtcbiRmYS12YXItcGF5cGFsOiBcIlxcZjFlZFwiO1xuJGZhLXZhci1wZW5jaWw6IFwiXFxmMDQwXCI7XG4kZmEtdmFyLXBlbmNpbC1zcXVhcmU6IFwiXFxmMTRiXCI7XG4kZmEtdmFyLXBlbmNpbC1zcXVhcmUtbzogXCJcXGYwNDRcIjtcbiRmYS12YXItcGVyY2VudDogXCJcXGYyOTVcIjtcbiRmYS12YXItcGhvbmU6IFwiXFxmMDk1XCI7XG4kZmEtdmFyLXBob25lLXNxdWFyZTogXCJcXGYwOThcIjtcbiRmYS12YXItcGhvdG86IFwiXFxmMDNlXCI7XG4kZmEtdmFyLXBpY3R1cmUtbzogXCJcXGYwM2VcIjtcbiRmYS12YXItcGllLWNoYXJ0OiBcIlxcZjIwMFwiO1xuJGZhLXZhci1waWVkLXBpcGVyOiBcIlxcZjJhZVwiO1xuJGZhLXZhci1waWVkLXBpcGVyLWFsdDogXCJcXGYxYThcIjtcbiRmYS12YXItcGllZC1waXBlci1wcDogXCJcXGYxYTdcIjtcbiRmYS12YXItcGludGVyZXN0OiBcIlxcZjBkMlwiO1xuJGZhLXZhci1waW50ZXJlc3QtcDogXCJcXGYyMzFcIjtcbiRmYS12YXItcGludGVyZXN0LXNxdWFyZTogXCJcXGYwZDNcIjtcbiRmYS12YXItcGxhbmU6IFwiXFxmMDcyXCI7XG4kZmEtdmFyLXBsYXk6IFwiXFxmMDRiXCI7XG4kZmEtdmFyLXBsYXktY2lyY2xlOiBcIlxcZjE0NFwiO1xuJGZhLXZhci1wbGF5LWNpcmNsZS1vOiBcIlxcZjAxZFwiO1xuJGZhLXZhci1wbHVnOiBcIlxcZjFlNlwiO1xuJGZhLXZhci1wbHVzOiBcIlxcZjA2N1wiO1xuJGZhLXZhci1wbHVzLWNpcmNsZTogXCJcXGYwNTVcIjtcbiRmYS12YXItcGx1cy1zcXVhcmU6IFwiXFxmMGZlXCI7XG4kZmEtdmFyLXBsdXMtc3F1YXJlLW86IFwiXFxmMTk2XCI7XG4kZmEtdmFyLXBvZGNhc3Q6IFwiXFxmMmNlXCI7XG4kZmEtdmFyLXBvd2VyLW9mZjogXCJcXGYwMTFcIjtcbiRmYS12YXItcHJpbnQ6IFwiXFxmMDJmXCI7XG4kZmEtdmFyLXByb2R1Y3QtaHVudDogXCJcXGYyODhcIjtcbiRmYS12YXItcHV6emxlLXBpZWNlOiBcIlxcZjEyZVwiO1xuJGZhLXZhci1xcTogXCJcXGYxZDZcIjtcbiRmYS12YXItcXJjb2RlOiBcIlxcZjAyOVwiO1xuJGZhLXZhci1xdWVzdGlvbjogXCJcXGYxMjhcIjtcbiRmYS12YXItcXVlc3Rpb24tY2lyY2xlOiBcIlxcZjA1OVwiO1xuJGZhLXZhci1xdWVzdGlvbi1jaXJjbGUtbzogXCJcXGYyOWNcIjtcbiRmYS12YXItcXVvcmE6IFwiXFxmMmM0XCI7XG4kZmEtdmFyLXF1b3RlLWxlZnQ6IFwiXFxmMTBkXCI7XG4kZmEtdmFyLXF1b3RlLXJpZ2h0OiBcIlxcZjEwZVwiO1xuJGZhLXZhci1yYTogXCJcXGYxZDBcIjtcbiRmYS12YXItcmFuZG9tOiBcIlxcZjA3NFwiO1xuJGZhLXZhci1yYXZlbHJ5OiBcIlxcZjJkOVwiO1xuJGZhLXZhci1yZWJlbDogXCJcXGYxZDBcIjtcbiRmYS12YXItcmVjeWNsZTogXCJcXGYxYjhcIjtcbiRmYS12YXItcmVkZGl0OiBcIlxcZjFhMVwiO1xuJGZhLXZhci1yZWRkaXQtYWxpZW46IFwiXFxmMjgxXCI7XG4kZmEtdmFyLXJlZGRpdC1zcXVhcmU6IFwiXFxmMWEyXCI7XG4kZmEtdmFyLXJlZnJlc2g6IFwiXFxmMDIxXCI7XG4kZmEtdmFyLXJlZ2lzdGVyZWQ6IFwiXFxmMjVkXCI7XG4kZmEtdmFyLXJlbW92ZTogXCJcXGYwMGRcIjtcbiRmYS12YXItcmVucmVuOiBcIlxcZjE4YlwiO1xuJGZhLXZhci1yZW9yZGVyOiBcIlxcZjBjOVwiO1xuJGZhLXZhci1yZXBlYXQ6IFwiXFxmMDFlXCI7XG4kZmEtdmFyLXJlcGx5OiBcIlxcZjExMlwiO1xuJGZhLXZhci1yZXBseS1hbGw6IFwiXFxmMTIyXCI7XG4kZmEtdmFyLXJlc2lzdGFuY2U6IFwiXFxmMWQwXCI7XG4kZmEtdmFyLXJldHdlZXQ6IFwiXFxmMDc5XCI7XG4kZmEtdmFyLXJtYjogXCJcXGYxNTdcIjtcbiRmYS12YXItcm9hZDogXCJcXGYwMThcIjtcbiRmYS12YXItcm9ja2V0OiBcIlxcZjEzNVwiO1xuJGZhLXZhci1yb3RhdGUtbGVmdDogXCJcXGYwZTJcIjtcbiRmYS12YXItcm90YXRlLXJpZ2h0OiBcIlxcZjAxZVwiO1xuJGZhLXZhci1yb3VibGU6IFwiXFxmMTU4XCI7XG4kZmEtdmFyLXJzczogXCJcXGYwOWVcIjtcbiRmYS12YXItcnNzLXNxdWFyZTogXCJcXGYxNDNcIjtcbiRmYS12YXItcnViOiBcIlxcZjE1OFwiO1xuJGZhLXZhci1ydWJsZTogXCJcXGYxNThcIjtcbiRmYS12YXItcnVwZWU6IFwiXFxmMTU2XCI7XG4kZmEtdmFyLXMxNTogXCJcXGYyY2RcIjtcbiRmYS12YXItc2FmYXJpOiBcIlxcZjI2N1wiO1xuJGZhLXZhci1zYXZlOiBcIlxcZjBjN1wiO1xuJGZhLXZhci1zY2lzc29yczogXCJcXGYwYzRcIjtcbiRmYS12YXItc2NyaWJkOiBcIlxcZjI4YVwiO1xuJGZhLXZhci1zZWFyY2g6IFwiXFxmMDAyXCI7XG4kZmEtdmFyLXNlYXJjaC1taW51czogXCJcXGYwMTBcIjtcbiRmYS12YXItc2VhcmNoLXBsdXM6IFwiXFxmMDBlXCI7XG4kZmEtdmFyLXNlbGxzeTogXCJcXGYyMTNcIjtcbiRmYS12YXItc2VuZDogXCJcXGYxZDhcIjtcbiRmYS12YXItc2VuZC1vOiBcIlxcZjFkOVwiO1xuJGZhLXZhci1zZXJ2ZXI6IFwiXFxmMjMzXCI7XG4kZmEtdmFyLXNoYXJlOiBcIlxcZjA2NFwiO1xuJGZhLXZhci1zaGFyZS1hbHQ6IFwiXFxmMWUwXCI7XG4kZmEtdmFyLXNoYXJlLWFsdC1zcXVhcmU6IFwiXFxmMWUxXCI7XG4kZmEtdmFyLXNoYXJlLXNxdWFyZTogXCJcXGYxNGRcIjtcbiRmYS12YXItc2hhcmUtc3F1YXJlLW86IFwiXFxmMDQ1XCI7XG4kZmEtdmFyLXNoZWtlbDogXCJcXGYyMGJcIjtcbiRmYS12YXItc2hlcWVsOiBcIlxcZjIwYlwiO1xuJGZhLXZhci1zaGllbGQ6IFwiXFxmMTMyXCI7XG4kZmEtdmFyLXNoaXA6IFwiXFxmMjFhXCI7XG4kZmEtdmFyLXNoaXJ0c2luYnVsazogXCJcXGYyMTRcIjtcbiRmYS12YXItc2hvcHBpbmctYmFnOiBcIlxcZjI5MFwiO1xuJGZhLXZhci1zaG9wcGluZy1iYXNrZXQ6IFwiXFxmMjkxXCI7XG4kZmEtdmFyLXNob3BwaW5nLWNhcnQ6IFwiXFxmMDdhXCI7XG4kZmEtdmFyLXNob3dlcjogXCJcXGYyY2NcIjtcbiRmYS12YXItc2lnbi1pbjogXCJcXGYwOTBcIjtcbiRmYS12YXItc2lnbi1sYW5ndWFnZTogXCJcXGYyYTdcIjtcbiRmYS12YXItc2lnbi1vdXQ6IFwiXFxmMDhiXCI7XG4kZmEtdmFyLXNpZ25hbDogXCJcXGYwMTJcIjtcbiRmYS12YXItc2lnbmluZzogXCJcXGYyYTdcIjtcbiRmYS12YXItc2ltcGx5YnVpbHQ6IFwiXFxmMjE1XCI7XG4kZmEtdmFyLXNpdGVtYXA6IFwiXFxmMGU4XCI7XG4kZmEtdmFyLXNreWF0bGFzOiBcIlxcZjIxNlwiO1xuJGZhLXZhci1za3lwZTogXCJcXGYxN2VcIjtcbiRmYS12YXItc2xhY2s6IFwiXFxmMTk4XCI7XG4kZmEtdmFyLXNsaWRlcnM6IFwiXFxmMWRlXCI7XG4kZmEtdmFyLXNsaWRlc2hhcmU6IFwiXFxmMWU3XCI7XG4kZmEtdmFyLXNtaWxlLW86IFwiXFxmMTE4XCI7XG4kZmEtdmFyLXNuYXBjaGF0OiBcIlxcZjJhYlwiO1xuJGZhLXZhci1zbmFwY2hhdC1naG9zdDogXCJcXGYyYWNcIjtcbiRmYS12YXItc25hcGNoYXQtc3F1YXJlOiBcIlxcZjJhZFwiO1xuJGZhLXZhci1zbm93Zmxha2UtbzogXCJcXGYyZGNcIjtcbiRmYS12YXItc29jY2VyLWJhbGwtbzogXCJcXGYxZTNcIjtcbiRmYS12YXItc29ydDogXCJcXGYwZGNcIjtcbiRmYS12YXItc29ydC1hbHBoYS1hc2M6IFwiXFxmMTVkXCI7XG4kZmEtdmFyLXNvcnQtYWxwaGEtZGVzYzogXCJcXGYxNWVcIjtcbiRmYS12YXItc29ydC1hbW91bnQtYXNjOiBcIlxcZjE2MFwiO1xuJGZhLXZhci1zb3J0LWFtb3VudC1kZXNjOiBcIlxcZjE2MVwiO1xuJGZhLXZhci1zb3J0LWFzYzogXCJcXGYwZGVcIjtcbiRmYS12YXItc29ydC1kZXNjOiBcIlxcZjBkZFwiO1xuJGZhLXZhci1zb3J0LWRvd246IFwiXFxmMGRkXCI7XG4kZmEtdmFyLXNvcnQtbnVtZXJpYy1hc2M6IFwiXFxmMTYyXCI7XG4kZmEtdmFyLXNvcnQtbnVtZXJpYy1kZXNjOiBcIlxcZjE2M1wiO1xuJGZhLXZhci1zb3J0LXVwOiBcIlxcZjBkZVwiO1xuJGZhLXZhci1zb3VuZGNsb3VkOiBcIlxcZjFiZVwiO1xuJGZhLXZhci1zcGFjZS1zaHV0dGxlOiBcIlxcZjE5N1wiO1xuJGZhLXZhci1zcGlubmVyOiBcIlxcZjExMFwiO1xuJGZhLXZhci1zcG9vbjogXCJcXGYxYjFcIjtcbiRmYS12YXItc3BvdGlmeTogXCJcXGYxYmNcIjtcbiRmYS12YXItc3F1YXJlOiBcIlxcZjBjOFwiO1xuJGZhLXZhci1zcXVhcmUtbzogXCJcXGYwOTZcIjtcbiRmYS12YXItc3RhY2stZXhjaGFuZ2U6IFwiXFxmMThkXCI7XG4kZmEtdmFyLXN0YWNrLW92ZXJmbG93OiBcIlxcZjE2Y1wiO1xuJGZhLXZhci1zdGFyOiBcIlxcZjAwNVwiO1xuJGZhLXZhci1zdGFyLWhhbGY6IFwiXFxmMDg5XCI7XG4kZmEtdmFyLXN0YXItaGFsZi1lbXB0eTogXCJcXGYxMjNcIjtcbiRmYS12YXItc3Rhci1oYWxmLWZ1bGw6IFwiXFxmMTIzXCI7XG4kZmEtdmFyLXN0YXItaGFsZi1vOiBcIlxcZjEyM1wiO1xuJGZhLXZhci1zdGFyLW86IFwiXFxmMDA2XCI7XG4kZmEtdmFyLXN0ZWFtOiBcIlxcZjFiNlwiO1xuJGZhLXZhci1zdGVhbS1zcXVhcmU6IFwiXFxmMWI3XCI7XG4kZmEtdmFyLXN0ZXAtYmFja3dhcmQ6IFwiXFxmMDQ4XCI7XG4kZmEtdmFyLXN0ZXAtZm9yd2FyZDogXCJcXGYwNTFcIjtcbiRmYS12YXItc3RldGhvc2NvcGU6IFwiXFxmMGYxXCI7XG4kZmEtdmFyLXN0aWNreS1ub3RlOiBcIlxcZjI0OVwiO1xuJGZhLXZhci1zdGlja3ktbm90ZS1vOiBcIlxcZjI0YVwiO1xuJGZhLXZhci1zdG9wOiBcIlxcZjA0ZFwiO1xuJGZhLXZhci1zdG9wLWNpcmNsZTogXCJcXGYyOGRcIjtcbiRmYS12YXItc3RvcC1jaXJjbGUtbzogXCJcXGYyOGVcIjtcbiRmYS12YXItc3RyZWV0LXZpZXc6IFwiXFxmMjFkXCI7XG4kZmEtdmFyLXN0cmlrZXRocm91Z2g6IFwiXFxmMGNjXCI7XG4kZmEtdmFyLXN0dW1ibGV1cG9uOiBcIlxcZjFhNFwiO1xuJGZhLXZhci1zdHVtYmxldXBvbi1jaXJjbGU6IFwiXFxmMWEzXCI7XG4kZmEtdmFyLXN1YnNjcmlwdDogXCJcXGYxMmNcIjtcbiRmYS12YXItc3Vid2F5OiBcIlxcZjIzOVwiO1xuJGZhLXZhci1zdWl0Y2FzZTogXCJcXGYwZjJcIjtcbiRmYS12YXItc3VuLW86IFwiXFxmMTg1XCI7XG4kZmEtdmFyLXN1cGVycG93ZXJzOiBcIlxcZjJkZFwiO1xuJGZhLXZhci1zdXBlcnNjcmlwdDogXCJcXGYxMmJcIjtcbiRmYS12YXItc3VwcG9ydDogXCJcXGYxY2RcIjtcbiRmYS12YXItdGFibGU6IFwiXFxmMGNlXCI7XG4kZmEtdmFyLXRhYmxldDogXCJcXGYxMGFcIjtcbiRmYS12YXItdGFjaG9tZXRlcjogXCJcXGYwZTRcIjtcbiRmYS12YXItdGFnOiBcIlxcZjAyYlwiO1xuJGZhLXZhci10YWdzOiBcIlxcZjAyY1wiO1xuJGZhLXZhci10YXNrczogXCJcXGYwYWVcIjtcbiRmYS12YXItdGF4aTogXCJcXGYxYmFcIjtcbiRmYS12YXItdGVsZWdyYW06IFwiXFxmMmM2XCI7XG4kZmEtdmFyLXRlbGV2aXNpb246IFwiXFxmMjZjXCI7XG4kZmEtdmFyLXRlbmNlbnQtd2VpYm86IFwiXFxmMWQ1XCI7XG4kZmEtdmFyLXRlcm1pbmFsOiBcIlxcZjEyMFwiO1xuJGZhLXZhci10ZXh0LWhlaWdodDogXCJcXGYwMzRcIjtcbiRmYS12YXItdGV4dC13aWR0aDogXCJcXGYwMzVcIjtcbiRmYS12YXItdGg6IFwiXFxmMDBhXCI7XG4kZmEtdmFyLXRoLWxhcmdlOiBcIlxcZjAwOVwiO1xuJGZhLXZhci10aC1saXN0OiBcIlxcZjAwYlwiO1xuJGZhLXZhci10aGVtZWlzbGU6IFwiXFxmMmIyXCI7XG4kZmEtdmFyLXRoZXJtb21ldGVyOiBcIlxcZjJjN1wiO1xuJGZhLXZhci10aGVybW9tZXRlci0wOiBcIlxcZjJjYlwiO1xuJGZhLXZhci10aGVybW9tZXRlci0xOiBcIlxcZjJjYVwiO1xuJGZhLXZhci10aGVybW9tZXRlci0yOiBcIlxcZjJjOVwiO1xuJGZhLXZhci10aGVybW9tZXRlci0zOiBcIlxcZjJjOFwiO1xuJGZhLXZhci10aGVybW9tZXRlci00OiBcIlxcZjJjN1wiO1xuJGZhLXZhci10aGVybW9tZXRlci1lbXB0eTogXCJcXGYyY2JcIjtcbiRmYS12YXItdGhlcm1vbWV0ZXItZnVsbDogXCJcXGYyYzdcIjtcbiRmYS12YXItdGhlcm1vbWV0ZXItaGFsZjogXCJcXGYyYzlcIjtcbiRmYS12YXItdGhlcm1vbWV0ZXItcXVhcnRlcjogXCJcXGYyY2FcIjtcbiRmYS12YXItdGhlcm1vbWV0ZXItdGhyZWUtcXVhcnRlcnM6IFwiXFxmMmM4XCI7XG4kZmEtdmFyLXRodW1iLXRhY2s6IFwiXFxmMDhkXCI7XG4kZmEtdmFyLXRodW1icy1kb3duOiBcIlxcZjE2NVwiO1xuJGZhLXZhci10aHVtYnMtby1kb3duOiBcIlxcZjA4OFwiO1xuJGZhLXZhci10aHVtYnMtby11cDogXCJcXGYwODdcIjtcbiRmYS12YXItdGh1bWJzLXVwOiBcIlxcZjE2NFwiO1xuJGZhLXZhci10aWNrZXQ6IFwiXFxmMTQ1XCI7XG4kZmEtdmFyLXRpbWVzOiBcIlxcZjAwZFwiO1xuJGZhLXZhci10aW1lcy1jaXJjbGU6IFwiXFxmMDU3XCI7XG4kZmEtdmFyLXRpbWVzLWNpcmNsZS1vOiBcIlxcZjA1Y1wiO1xuJGZhLXZhci10aW1lcy1yZWN0YW5nbGU6IFwiXFxmMmQzXCI7XG4kZmEtdmFyLXRpbWVzLXJlY3RhbmdsZS1vOiBcIlxcZjJkNFwiO1xuJGZhLXZhci10aW50OiBcIlxcZjA0M1wiO1xuJGZhLXZhci10b2dnbGUtZG93bjogXCJcXGYxNTBcIjtcbiRmYS12YXItdG9nZ2xlLWxlZnQ6IFwiXFxmMTkxXCI7XG4kZmEtdmFyLXRvZ2dsZS1vZmY6IFwiXFxmMjA0XCI7XG4kZmEtdmFyLXRvZ2dsZS1vbjogXCJcXGYyMDVcIjtcbiRmYS12YXItdG9nZ2xlLXJpZ2h0OiBcIlxcZjE1MlwiO1xuJGZhLXZhci10b2dnbGUtdXA6IFwiXFxmMTUxXCI7XG4kZmEtdmFyLXRyYWRlbWFyazogXCJcXGYyNWNcIjtcbiRmYS12YXItdHJhaW46IFwiXFxmMjM4XCI7XG4kZmEtdmFyLXRyYW5zZ2VuZGVyOiBcIlxcZjIyNFwiO1xuJGZhLXZhci10cmFuc2dlbmRlci1hbHQ6IFwiXFxmMjI1XCI7XG4kZmEtdmFyLXRyYXNoOiBcIlxcZjFmOFwiO1xuJGZhLXZhci10cmFzaC1vOiBcIlxcZjAxNFwiO1xuJGZhLXZhci10cmVlOiBcIlxcZjFiYlwiO1xuJGZhLXZhci10cmVsbG86IFwiXFxmMTgxXCI7XG4kZmEtdmFyLXRyaXBhZHZpc29yOiBcIlxcZjI2MlwiO1xuJGZhLXZhci10cm9waHk6IFwiXFxmMDkxXCI7XG4kZmEtdmFyLXRydWNrOiBcIlxcZjBkMVwiO1xuJGZhLXZhci10cnk6IFwiXFxmMTk1XCI7XG4kZmEtdmFyLXR0eTogXCJcXGYxZTRcIjtcbiRmYS12YXItdHVtYmxyOiBcIlxcZjE3M1wiO1xuJGZhLXZhci10dW1ibHItc3F1YXJlOiBcIlxcZjE3NFwiO1xuJGZhLXZhci10dXJraXNoLWxpcmE6IFwiXFxmMTk1XCI7XG4kZmEtdmFyLXR2OiBcIlxcZjI2Y1wiO1xuJGZhLXZhci10d2l0Y2g6IFwiXFxmMWU4XCI7XG4kZmEtdmFyLXR3aXR0ZXI6IFwiXFxmMDk5XCI7XG4kZmEtdmFyLXR3aXR0ZXItc3F1YXJlOiBcIlxcZjA4MVwiO1xuJGZhLXZhci11bWJyZWxsYTogXCJcXGYwZTlcIjtcbiRmYS12YXItdW5kZXJsaW5lOiBcIlxcZjBjZFwiO1xuJGZhLXZhci11bmRvOiBcIlxcZjBlMlwiO1xuJGZhLXZhci11bml2ZXJzYWwtYWNjZXNzOiBcIlxcZjI5YVwiO1xuJGZhLXZhci11bml2ZXJzaXR5OiBcIlxcZjE5Y1wiO1xuJGZhLXZhci11bmxpbms6IFwiXFxmMTI3XCI7XG4kZmEtdmFyLXVubG9jazogXCJcXGYwOWNcIjtcbiRmYS12YXItdW5sb2NrLWFsdDogXCJcXGYxM2VcIjtcbiRmYS12YXItdW5zb3J0ZWQ6IFwiXFxmMGRjXCI7XG4kZmEtdmFyLXVwbG9hZDogXCJcXGYwOTNcIjtcbiRmYS12YXItdXNiOiBcIlxcZjI4N1wiO1xuJGZhLXZhci11c2Q6IFwiXFxmMTU1XCI7XG4kZmEtdmFyLXVzZXI6IFwiXFxmMDA3XCI7XG4kZmEtdmFyLXVzZXItY2lyY2xlOiBcIlxcZjJiZFwiO1xuJGZhLXZhci11c2VyLWNpcmNsZS1vOiBcIlxcZjJiZVwiO1xuJGZhLXZhci11c2VyLW1kOiBcIlxcZjBmMFwiO1xuJGZhLXZhci11c2VyLW86IFwiXFxmMmMwXCI7XG4kZmEtdmFyLXVzZXItcGx1czogXCJcXGYyMzRcIjtcbiRmYS12YXItdXNlci1zZWNyZXQ6IFwiXFxmMjFiXCI7XG4kZmEtdmFyLXVzZXItdGltZXM6IFwiXFxmMjM1XCI7XG4kZmEtdmFyLXVzZXJzOiBcIlxcZjBjMFwiO1xuJGZhLXZhci12Y2FyZDogXCJcXGYyYmJcIjtcbiRmYS12YXItdmNhcmQtbzogXCJcXGYyYmNcIjtcbiRmYS12YXItdmVudXM6IFwiXFxmMjIxXCI7XG4kZmEtdmFyLXZlbnVzLWRvdWJsZTogXCJcXGYyMjZcIjtcbiRmYS12YXItdmVudXMtbWFyczogXCJcXGYyMjhcIjtcbiRmYS12YXItdmlhY29pbjogXCJcXGYyMzdcIjtcbiRmYS12YXItdmlhZGVvOiBcIlxcZjJhOVwiO1xuJGZhLXZhci12aWFkZW8tc3F1YXJlOiBcIlxcZjJhYVwiO1xuJGZhLXZhci12aWRlby1jYW1lcmE6IFwiXFxmMDNkXCI7XG4kZmEtdmFyLXZpbWVvOiBcIlxcZjI3ZFwiO1xuJGZhLXZhci12aW1lby1zcXVhcmU6IFwiXFxmMTk0XCI7XG4kZmEtdmFyLXZpbmU6IFwiXFxmMWNhXCI7XG4kZmEtdmFyLXZrOiBcIlxcZjE4OVwiO1xuJGZhLXZhci12b2x1bWUtY29udHJvbC1waG9uZTogXCJcXGYyYTBcIjtcbiRmYS12YXItdm9sdW1lLWRvd246IFwiXFxmMDI3XCI7XG4kZmEtdmFyLXZvbHVtZS1vZmY6IFwiXFxmMDI2XCI7XG4kZmEtdmFyLXZvbHVtZS11cDogXCJcXGYwMjhcIjtcbiRmYS12YXItd2FybmluZzogXCJcXGYwNzFcIjtcbiRmYS12YXItd2VjaGF0OiBcIlxcZjFkN1wiO1xuJGZhLXZhci13ZWlibzogXCJcXGYxOGFcIjtcbiRmYS12YXItd2VpeGluOiBcIlxcZjFkN1wiO1xuJGZhLXZhci13aGF0c2FwcDogXCJcXGYyMzJcIjtcbiRmYS12YXItd2hlZWxjaGFpcjogXCJcXGYxOTNcIjtcbiRmYS12YXItd2hlZWxjaGFpci1hbHQ6IFwiXFxmMjliXCI7XG4kZmEtdmFyLXdpZmk6IFwiXFxmMWViXCI7XG4kZmEtdmFyLXdpa2lwZWRpYS13OiBcIlxcZjI2NlwiO1xuJGZhLXZhci13aW5kb3ctY2xvc2U6IFwiXFxmMmQzXCI7XG4kZmEtdmFyLXdpbmRvdy1jbG9zZS1vOiBcIlxcZjJkNFwiO1xuJGZhLXZhci13aW5kb3ctbWF4aW1pemU6IFwiXFxmMmQwXCI7XG4kZmEtdmFyLXdpbmRvdy1taW5pbWl6ZTogXCJcXGYyZDFcIjtcbiRmYS12YXItd2luZG93LXJlc3RvcmU6IFwiXFxmMmQyXCI7XG4kZmEtdmFyLXdpbmRvd3M6IFwiXFxmMTdhXCI7XG4kZmEtdmFyLXdvbjogXCJcXGYxNTlcIjtcbiRmYS12YXItd29yZHByZXNzOiBcIlxcZjE5YVwiO1xuJGZhLXZhci13cGJlZ2lubmVyOiBcIlxcZjI5N1wiO1xuJGZhLXZhci13cGV4cGxvcmVyOiBcIlxcZjJkZVwiO1xuJGZhLXZhci13cGZvcm1zOiBcIlxcZjI5OFwiO1xuJGZhLXZhci13cmVuY2g6IFwiXFxmMGFkXCI7XG4kZmEtdmFyLXhpbmc6IFwiXFxmMTY4XCI7XG4kZmEtdmFyLXhpbmctc3F1YXJlOiBcIlxcZjE2OVwiO1xuJGZhLXZhci15LWNvbWJpbmF0b3I6IFwiXFxmMjNiXCI7XG4kZmEtdmFyLXktY29tYmluYXRvci1zcXVhcmU6IFwiXFxmMWQ0XCI7XG4kZmEtdmFyLXlhaG9vOiBcIlxcZjE5ZVwiO1xuJGZhLXZhci15YzogXCJcXGYyM2JcIjtcbiRmYS12YXIteWMtc3F1YXJlOiBcIlxcZjFkNFwiO1xuJGZhLXZhci15ZWxwOiBcIlxcZjFlOVwiO1xuJGZhLXZhci15ZW46IFwiXFxmMTU3XCI7XG4kZmEtdmFyLXlvYXN0OiBcIlxcZjJiMVwiO1xuJGZhLXZhci15b3V0dWJlOiBcIlxcZjE2N1wiO1xuJGZhLXZhci15b3V0dWJlLXBsYXk6IFwiXFxmMTZhXCI7XG4kZmEtdmFyLXlvdXR1YmUtc3F1YXJlOiBcIlxcZjE2NlwiO1xuXG4iLCIvLyBCb3JkZXJlZCAmIFB1bGxlZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4uI3skZmEtY3NzLXByZWZpeH0tYm9yZGVyIHtcbiAgcGFkZGluZzogLjJlbSAuMjVlbSAuMTVlbTtcbiAgYm9yZGVyOiBzb2xpZCAuMDhlbSAkZmEtYm9yZGVyLWNvbG9yO1xuICBib3JkZXItcmFkaXVzOiAuMWVtO1xufVxuXG4uI3skZmEtY3NzLXByZWZpeH0tcHVsbC1sZWZ0IHsgZmxvYXQ6IGxlZnQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1wdWxsLXJpZ2h0IHsgZmxvYXQ6IHJpZ2h0OyB9XG5cbi4jeyRmYS1jc3MtcHJlZml4fSB7XG4gICYuI3skZmEtY3NzLXByZWZpeH0tcHVsbC1sZWZ0IHsgbWFyZ2luLXJpZ2h0OiAuM2VtOyB9XG4gICYuI3skZmEtY3NzLXByZWZpeH0tcHVsbC1yaWdodCB7IG1hcmdpbi1sZWZ0OiAuM2VtOyB9XG59XG5cbi8qIERlcHJlY2F0ZWQgYXMgb2YgNC40LjAgKi9cbi5wdWxsLXJpZ2h0IHsgZmxvYXQ6IHJpZ2h0OyB9XG4ucHVsbC1sZWZ0IHsgZmxvYXQ6IGxlZnQ7IH1cblxuLiN7JGZhLWNzcy1wcmVmaXh9IHtcbiAgJi5wdWxsLWxlZnQgeyBtYXJnaW4tcmlnaHQ6IC4zZW07IH1cbiAgJi5wdWxsLXJpZ2h0IHsgbWFyZ2luLWxlZnQ6IC4zZW07IH1cbn1cbiIsIi8vIFNwaW5uaW5nIEljb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4uI3skZmEtY3NzLXByZWZpeH0tc3BpbiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYS1zcGluIDJzIGluZmluaXRlIGxpbmVhcjtcbiAgICAgICAgICBhbmltYXRpb246IGZhLXNwaW4gMnMgaW5maW5pdGUgbGluZWFyO1xufVxuXG4uI3skZmEtY3NzLXByZWZpeH0tcHVsc2Uge1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmEtc3BpbiAxcyBpbmZpbml0ZSBzdGVwcyg4KTtcbiAgICAgICAgICBhbmltYXRpb246IGZhLXNwaW4gMXMgaW5maW5pdGUgc3RlcHMoOCk7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYS1zcGluIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmEtc3BpbiB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcbiAgfVxufVxuIiwiLy8gUm90YXRlZCAmIEZsaXBwZWQgSWNvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLiN7JGZhLWNzcy1wcmVmaXh9LXJvdGF0ZS05MCAgeyBAaW5jbHVkZSBmYS1pY29uLXJvdGF0ZSg5MGRlZywgMSk7ICB9XG4uI3skZmEtY3NzLXByZWZpeH0tcm90YXRlLTE4MCB7IEBpbmNsdWRlIGZhLWljb24tcm90YXRlKDE4MGRlZywgMik7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1yb3RhdGUtMjcwIHsgQGluY2x1ZGUgZmEtaWNvbi1yb3RhdGUoMjcwZGVnLCAzKTsgfVxuXG4uI3skZmEtY3NzLXByZWZpeH0tZmxpcC1ob3Jpem9udGFsIHsgQGluY2x1ZGUgZmEtaWNvbi1mbGlwKC0xLCAxLCAwKTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWZsaXAtdmVydGljYWwgICB7IEBpbmNsdWRlIGZhLWljb24tZmxpcCgxLCAtMSwgMik7IH1cblxuLy8gSG9vayBmb3IgSUU4LTlcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuOnJvb3QgLiN7JGZhLWNzcy1wcmVmaXh9LXJvdGF0ZS05MCxcbjpyb290IC4jeyRmYS1jc3MtcHJlZml4fS1yb3RhdGUtMTgwLFxuOnJvb3QgLiN7JGZhLWNzcy1wcmVmaXh9LXJvdGF0ZS0yNzAsXG46cm9vdCAuI3skZmEtY3NzLXByZWZpeH0tZmxpcC1ob3Jpem9udGFsLFxuOnJvb3QgLiN7JGZhLWNzcy1wcmVmaXh9LWZsaXAtdmVydGljYWwge1xuICBmaWx0ZXI6IG5vbmU7XG59XG4iLCIvLyBNaXhpbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbkBtaXhpbiBmYS1pY29uKCkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsICN7JGZhLWZvbnQtc2l6ZS1iYXNlfS8jeyRmYS1saW5lLWhlaWdodC1iYXNlfSBGb250QXdlc29tZTsgLy8gc2hvcnRlbmluZyBmb250IGRlY2xhcmF0aW9uXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDsgLy8gY2FuJ3QgaGF2ZSBmb250LXNpemUgaW5oZXJpdCBvbiBsaW5lIGFib3ZlLCBzbyBuZWVkIHRvIG92ZXJyaWRlXG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvOyAvLyBvcHRpbWl6ZWxlZ2liaWxpdHkgdGhyb3dzIHRoaW5ncyBvZmYgIzEwOTRcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG5cbn1cblxuQG1peGluIGZhLWljb24tcm90YXRlKCRkZWdyZWVzLCAkcm90YXRpb24pIHtcbiAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0jeyRyb3RhdGlvbn0pXCI7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG59XG5cbkBtaXhpbiBmYS1pY29uLWZsaXAoJGhvcml6LCAkdmVydCwgJHJvdGF0aW9uKSB7XG4gIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249I3skcm90YXRpb259LCBtaXJyb3I9MSlcIjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKCRob3JpeiwgJHZlcnQpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoJGhvcml6LCAkdmVydCk7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgkaG9yaXosICR2ZXJ0KTtcbn1cblxuXG4vLyBPbmx5IGRpc3BsYXkgY29udGVudCB0byBzY3JlZW4gcmVhZGVycy4gQSBsYSBCb290c3RyYXAgNC5cbi8vXG4vLyBTZWU6IGh0dHA6Ly9hMTF5cHJvamVjdC5jb20vcG9zdHMvaG93LXRvLWhpZGUtY29udGVudC9cblxuQG1peGluIHNyLW9ubHkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxcHg7XG4gIGhlaWdodDogMXB4O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IC0xcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNsaXA6IHJlY3QoMCwwLDAsMCk7XG4gIGJvcmRlcjogMDtcbn1cblxuLy8gVXNlIGluIGNvbmp1bmN0aW9uIHdpdGggLnNyLW9ubHkgdG8gb25seSBkaXNwbGF5IGNvbnRlbnQgd2hlbiBpdCdzIGZvY3VzZWQuXG4vL1xuLy8gVXNlZnVsIGZvciBcIlNraXAgdG8gbWFpbiBjb250ZW50XCIgbGlua3M7IHNlZSBodHRwOi8vd3d3LnczLm9yZy9UUi8yMDEzL05PVEUtV0NBRzIwLVRFQ0hTLTIwMTMwOTA1L0cxXG4vL1xuLy8gQ3JlZGl0OiBIVE1MNSBCb2lsZXJwbGF0ZVxuXG5AbWl4aW4gc3Itb25seS1mb2N1c2FibGUge1xuICAmOmFjdGl2ZSxcbiAgJjpmb2N1cyB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luOiAwO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIGNsaXA6IGF1dG87XG4gIH1cbn1cbiIsIi8vIFN0YWNrZWQgSWNvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLiN7JGZhLWNzcy1wcmVmaXh9LXN0YWNrIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyZW07XG4gIGhlaWdodDogMmVtO1xuICBsaW5lLWhlaWdodDogMmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLiN7JGZhLWNzcy1wcmVmaXh9LXN0YWNrLTF4LCAuI3skZmEtY3NzLXByZWZpeH0tc3RhY2stMngge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uI3skZmEtY3NzLXByZWZpeH0tc3RhY2stMXggeyBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXN0YWNrLTJ4IHsgZm9udC1zaXplOiAyZW07IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1pbnZlcnNlIHsgY29sb3I6ICRmYS1pbnZlcnNlOyB9XG4iLCIvKiBGb250IEF3ZXNvbWUgdXNlcyB0aGUgVW5pY29kZSBQcml2YXRlIFVzZSBBcmVhIChQVUEpIHRvIGVuc3VyZSBzY3JlZW5cbiAgIHJlYWRlcnMgZG8gbm90IHJlYWQgb2ZmIHJhbmRvbSBjaGFyYWN0ZXJzIHRoYXQgcmVwcmVzZW50IGljb25zICovXG5cbi4jeyRmYS1jc3MtcHJlZml4fS1nbGFzczpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWdsYXNzOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbXVzaWM6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1tdXNpYzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXNlYXJjaDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXNlYXJjaDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWVudmVsb3BlLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1lbnZlbG9wZS1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0taGVhcnQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1oZWFydDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXN0YXI6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zdGFyOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc3Rhci1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc3Rhci1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdXNlcjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXVzZXI7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1maWxtOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZmlsbTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXRoLWxhcmdlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdGgtbGFyZ2U7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS10aDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXRoOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdGgtbGlzdDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXRoLWxpc3Q7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jaGVjazpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNoZWNrOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcmVtb3ZlOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1jbG9zZTpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tdGltZXM6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci10aW1lczsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXNlYXJjaC1wbHVzOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc2VhcmNoLXBsdXM7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zZWFyY2gtbWludXM6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zZWFyY2gtbWludXM7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1wb3dlci1vZmY6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1wb3dlci1vZmY7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zaWduYWw6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zaWduYWw7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1nZWFyOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1jb2c6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jb2c7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS10cmFzaC1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdHJhc2gtbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWhvbWU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1ob21lOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZmlsZS1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZmlsZS1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY2xvY2stbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNsb2NrLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1yb2FkOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcm9hZDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWRvd25sb2FkOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZG93bmxvYWQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hcnJvdy1jaXJjbGUtby1kb3duOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYXJyb3ctY2lyY2xlLW8tZG93bjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWFycm93LWNpcmNsZS1vLXVwOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYXJyb3ctY2lyY2xlLW8tdXA7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1pbmJveDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWluYm94OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcGxheS1jaXJjbGUtbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXBsYXktY2lyY2xlLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1yb3RhdGUtcmlnaHQ6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LXJlcGVhdDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXJlcGVhdDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXJlZnJlc2g6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1yZWZyZXNoOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbGlzdC1hbHQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1saXN0LWFsdDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWxvY2s6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1sb2NrOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZmxhZzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWZsYWc7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1oZWFkcGhvbmVzOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItaGVhZHBob25lczsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXZvbHVtZS1vZmY6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci12b2x1bWUtb2ZmOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdm9sdW1lLWRvd246YmVmb3JlIHsgY29udGVudDogJGZhLXZhci12b2x1bWUtZG93bjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXZvbHVtZS11cDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXZvbHVtZS11cDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXFyY29kZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXFyY29kZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWJhcmNvZGU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1iYXJjb2RlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdGFnOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdGFnOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdGFnczpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXRhZ3M7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1ib29rOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYm9vazsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWJvb2ttYXJrOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYm9va21hcms7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1wcmludDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXByaW50OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY2FtZXJhOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2FtZXJhOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZm9udDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWZvbnQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1ib2xkOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYm9sZDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWl0YWxpYzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWl0YWxpYzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXRleHQtaGVpZ2h0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdGV4dC1oZWlnaHQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS10ZXh0LXdpZHRoOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdGV4dC13aWR0aDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWFsaWduLWxlZnQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1hbGlnbi1sZWZ0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYWxpZ24tY2VudGVyOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYWxpZ24tY2VudGVyOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYWxpZ24tcmlnaHQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1hbGlnbi1yaWdodDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWFsaWduLWp1c3RpZnk6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1hbGlnbi1qdXN0aWZ5OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbGlzdDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWxpc3Q7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1kZWRlbnQ6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LW91dGRlbnQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1vdXRkZW50OyB9XG4uI3skZmEtY3NzLXByZWZpeH0taW5kZW50OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItaW5kZW50OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdmlkZW8tY2FtZXJhOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdmlkZW8tY2FtZXJhOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcGhvdG86YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWltYWdlOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1waWN0dXJlLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1waWN0dXJlLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1wZW5jaWw6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1wZW5jaWw7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1tYXAtbWFya2VyOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbWFwLW1hcmtlcjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWFkanVzdDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWFkanVzdDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXRpbnQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci10aW50OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZWRpdDpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tcGVuY2lsLXNxdWFyZS1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcGVuY2lsLXNxdWFyZS1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc2hhcmUtc3F1YXJlLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zaGFyZS1zcXVhcmUtbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNoZWNrLXNxdWFyZS1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2hlY2stc3F1YXJlLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hcnJvd3M6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1hcnJvd3M7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zdGVwLWJhY2t3YXJkOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc3RlcC1iYWNrd2FyZDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWZhc3QtYmFja3dhcmQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1mYXN0LWJhY2t3YXJkOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYmFja3dhcmQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1iYWNrd2FyZDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXBsYXk6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1wbGF5OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcGF1c2U6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1wYXVzZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXN0b3A6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zdG9wOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZm9yd2FyZDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWZvcndhcmQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1mYXN0LWZvcndhcmQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1mYXN0LWZvcndhcmQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zdGVwLWZvcndhcmQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zdGVwLWZvcndhcmQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1lamVjdDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWVqZWN0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY2hldnJvbi1sZWZ0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2hldnJvbi1sZWZ0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY2hldnJvbi1yaWdodDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNoZXZyb24tcmlnaHQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1wbHVzLWNpcmNsZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXBsdXMtY2lyY2xlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbWludXMtY2lyY2xlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbWludXMtY2lyY2xlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdGltZXMtY2lyY2xlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdGltZXMtY2lyY2xlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY2hlY2stY2lyY2xlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2hlY2stY2lyY2xlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcXVlc3Rpb24tY2lyY2xlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcXVlc3Rpb24tY2lyY2xlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0taW5mby1jaXJjbGU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1pbmZvLWNpcmNsZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNyb3NzaGFpcnM6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jcm9zc2hhaXJzOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdGltZXMtY2lyY2xlLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci10aW1lcy1jaXJjbGUtbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNoZWNrLWNpcmNsZS1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2hlY2stY2lyY2xlLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1iYW46YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1iYW47IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hcnJvdy1sZWZ0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYXJyb3ctbGVmdDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWFycm93LXJpZ2h0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYXJyb3ctcmlnaHQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hcnJvdy11cDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWFycm93LXVwOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYXJyb3ctZG93bjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWFycm93LWRvd247IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1tYWlsLWZvcndhcmQ6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LXNoYXJlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc2hhcmU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1leHBhbmQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1leHBhbmQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jb21wcmVzczpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNvbXByZXNzOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcGx1czpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXBsdXM7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1taW51czpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLW1pbnVzOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYXN0ZXJpc2s6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1hc3RlcmlzazsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWV4Y2xhbWF0aW9uLWNpcmNsZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWV4Y2xhbWF0aW9uLWNpcmNsZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWdpZnQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1naWZ0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbGVhZjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWxlYWY7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1maXJlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZmlyZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWV5ZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWV5ZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWV5ZS1zbGFzaDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWV5ZS1zbGFzaDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXdhcm5pbmc6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWV4Y2xhbWF0aW9uLXRyaWFuZ2xlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZXhjbGFtYXRpb24tdHJpYW5nbGU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1wbGFuZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXBsYW5lOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY2FsZW5kYXI6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jYWxlbmRhcjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXJhbmRvbTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXJhbmRvbTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNvbW1lbnQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jb21tZW50OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbWFnbmV0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbWFnbmV0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY2hldnJvbi11cDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNoZXZyb24tdXA7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jaGV2cm9uLWRvd246YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jaGV2cm9uLWRvd247IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1yZXR3ZWV0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcmV0d2VldDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXNob3BwaW5nLWNhcnQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zaG9wcGluZy1jYXJ0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZm9sZGVyOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZm9sZGVyOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZm9sZGVyLW9wZW46YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1mb2xkZXItb3BlbjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWFycm93cy12OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYXJyb3dzLXY7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hcnJvd3MtaDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWFycm93cy1oOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYmFyLWNoYXJ0LW86YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWJhci1jaGFydDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWJhci1jaGFydDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXR3aXR0ZXItc3F1YXJlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdHdpdHRlci1zcXVhcmU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1mYWNlYm9vay1zcXVhcmU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1mYWNlYm9vay1zcXVhcmU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jYW1lcmEtcmV0cm86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jYW1lcmEtcmV0cm87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1rZXk6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1rZXk7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1nZWFyczpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tY29nczpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNvZ3M7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jb21tZW50czpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNvbW1lbnRzOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdGh1bWJzLW8tdXA6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci10aHVtYnMtby11cDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXRodW1icy1vLWRvd246YmVmb3JlIHsgY29udGVudDogJGZhLXZhci10aHVtYnMtby1kb3duOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc3Rhci1oYWxmOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc3Rhci1oYWxmOyB9XG4uI3skZmEtY3NzLXByZWZpeH0taGVhcnQtbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWhlYXJ0LW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zaWduLW91dDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXNpZ24tb3V0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbGlua2VkaW4tc3F1YXJlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbGlua2VkaW4tc3F1YXJlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdGh1bWItdGFjazpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXRodW1iLXRhY2s7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1leHRlcm5hbC1saW5rOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZXh0ZXJuYWwtbGluazsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXNpZ24taW46YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zaWduLWluOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdHJvcGh5OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdHJvcGh5OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZ2l0aHViLXNxdWFyZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWdpdGh1Yi1zcXVhcmU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS11cGxvYWQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci11cGxvYWQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1sZW1vbi1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbGVtb24tbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXBob25lOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcGhvbmU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zcXVhcmUtbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXNxdWFyZS1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYm9va21hcmstbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWJvb2ttYXJrLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1waG9uZS1zcXVhcmU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1waG9uZS1zcXVhcmU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS10d2l0dGVyOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdHdpdHRlcjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWZhY2Vib29rLWY6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWZhY2Vib29rOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZmFjZWJvb2s7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1naXRodWI6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1naXRodWI7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS11bmxvY2s6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci11bmxvY2s7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jcmVkaXQtY2FyZDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNyZWRpdC1jYXJkOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZmVlZDpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tcnNzOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcnNzOyB9XG4uI3skZmEtY3NzLXByZWZpeH0taGRkLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1oZGQtbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWJ1bGxob3JuOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYnVsbGhvcm47IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1iZWxsOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYmVsbDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNlcnRpZmljYXRlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2VydGlmaWNhdGU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1oYW5kLW8tcmlnaHQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1oYW5kLW8tcmlnaHQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1oYW5kLW8tbGVmdDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWhhbmQtby1sZWZ0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0taGFuZC1vLXVwOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItaGFuZC1vLXVwOyB9XG4uI3skZmEtY3NzLXByZWZpeH0taGFuZC1vLWRvd246YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1oYW5kLW8tZG93bjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWFycm93LWNpcmNsZS1sZWZ0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYXJyb3ctY2lyY2xlLWxlZnQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hcnJvdy1jaXJjbGUtcmlnaHQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1hcnJvdy1jaXJjbGUtcmlnaHQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hcnJvdy1jaXJjbGUtdXA6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1hcnJvdy1jaXJjbGUtdXA7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hcnJvdy1jaXJjbGUtZG93bjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWFycm93LWNpcmNsZS1kb3duOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZ2xvYmU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1nbG9iZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXdyZW5jaDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXdyZW5jaDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXRhc2tzOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdGFza3M7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1maWx0ZXI6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1maWx0ZXI7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1icmllZmNhc2U6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1icmllZmNhc2U7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hcnJvd3MtYWx0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYXJyb3dzLWFsdDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWdyb3VwOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS11c2VyczpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXVzZXJzOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY2hhaW46YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWxpbms6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1saW5rOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY2xvdWQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jbG91ZDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWZsYXNrOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZmxhc2s7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jdXQ6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LXNjaXNzb3JzOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc2Npc3NvcnM7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jb3B5OmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1maWxlcy1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZmlsZXMtbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXBhcGVyY2xpcDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXBhcGVyY2xpcDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXNhdmU6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWZsb3BweS1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZmxvcHB5LW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zcXVhcmU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zcXVhcmU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1uYXZpY29uOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1yZW9yZGVyOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1iYXJzOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYmFyczsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWxpc3QtdWw6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1saXN0LXVsOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbGlzdC1vbDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWxpc3Qtb2w7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zdHJpa2V0aHJvdWdoOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc3RyaWtldGhyb3VnaDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXVuZGVybGluZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXVuZGVybGluZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXRhYmxlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdGFibGU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1tYWdpYzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLW1hZ2ljOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdHJ1Y2s6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci10cnVjazsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXBpbnRlcmVzdDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXBpbnRlcmVzdDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXBpbnRlcmVzdC1zcXVhcmU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1waW50ZXJlc3Qtc3F1YXJlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZ29vZ2xlLXBsdXMtc3F1YXJlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZ29vZ2xlLXBsdXMtc3F1YXJlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZ29vZ2xlLXBsdXM6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1nb29nbGUtcGx1czsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LW1vbmV5OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbW9uZXk7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jYXJldC1kb3duOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2FyZXQtZG93bjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNhcmV0LXVwOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2FyZXQtdXA7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jYXJldC1sZWZ0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2FyZXQtbGVmdDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNhcmV0LXJpZ2h0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2FyZXQtcmlnaHQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jb2x1bW5zOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY29sdW1uczsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXVuc29ydGVkOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1zb3J0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc29ydDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXNvcnQtZG93bjpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tc29ydC1kZXNjOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc29ydC1kZXNjOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc29ydC11cDpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tc29ydC1hc2M6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zb3J0LWFzYzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWVudmVsb3BlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZW52ZWxvcGU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1saW5rZWRpbjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWxpbmtlZGluOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcm90YXRlLWxlZnQ6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LXVuZG86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci11bmRvOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbGVnYWw6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWdhdmVsOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZ2F2ZWw7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1kYXNoYm9hcmQ6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LXRhY2hvbWV0ZXI6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci10YWNob21ldGVyOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY29tbWVudC1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY29tbWVudC1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY29tbWVudHMtbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNvbW1lbnRzLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1mbGFzaDpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tYm9sdDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWJvbHQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zaXRlbWFwOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc2l0ZW1hcDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXVtYnJlbGxhOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdW1icmVsbGE7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1wYXN0ZTpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tY2xpcGJvYXJkOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2xpcGJvYXJkOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbGlnaHRidWxiLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1saWdodGJ1bGItbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWV4Y2hhbmdlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZXhjaGFuZ2U7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jbG91ZC1kb3dubG9hZDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNsb3VkLWRvd25sb2FkOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY2xvdWQtdXBsb2FkOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2xvdWQtdXBsb2FkOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdXNlci1tZDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXVzZXItbWQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zdGV0aG9zY29wZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXN0ZXRob3Njb3BlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc3VpdGNhc2U6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zdWl0Y2FzZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWJlbGwtbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWJlbGwtbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNvZmZlZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNvZmZlZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWN1dGxlcnk6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jdXRsZXJ5OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZmlsZS10ZXh0LW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1maWxlLXRleHQtbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWJ1aWxkaW5nLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1idWlsZGluZy1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0taG9zcGl0YWwtbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWhvc3BpdGFsLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hbWJ1bGFuY2U6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1hbWJ1bGFuY2U7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1tZWRraXQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1tZWRraXQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1maWdodGVyLWpldDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWZpZ2h0ZXItamV0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYmVlcjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWJlZXI7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1oLXNxdWFyZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWgtc3F1YXJlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcGx1cy1zcXVhcmU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1wbHVzLXNxdWFyZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWFuZ2xlLWRvdWJsZS1sZWZ0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYW5nbGUtZG91YmxlLWxlZnQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hbmdsZS1kb3VibGUtcmlnaHQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1hbmdsZS1kb3VibGUtcmlnaHQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hbmdsZS1kb3VibGUtdXA6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1hbmdsZS1kb3VibGUtdXA7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hbmdsZS1kb3VibGUtZG93bjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWFuZ2xlLWRvdWJsZS1kb3duOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYW5nbGUtbGVmdDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWFuZ2xlLWxlZnQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hbmdsZS1yaWdodDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWFuZ2xlLXJpZ2h0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYW5nbGUtdXA6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1hbmdsZS11cDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWFuZ2xlLWRvd246YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1hbmdsZS1kb3duOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZGVza3RvcDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWRlc2t0b3A7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1sYXB0b3A6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1sYXB0b3A7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS10YWJsZXQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci10YWJsZXQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1tb2JpbGUtcGhvbmU6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LW1vYmlsZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLW1vYmlsZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNpcmNsZS1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2lyY2xlLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1xdW90ZS1sZWZ0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcXVvdGUtbGVmdDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXF1b3RlLXJpZ2h0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcXVvdGUtcmlnaHQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zcGlubmVyOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc3Bpbm5lcjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNpcmNsZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNpcmNsZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LW1haWwtcmVwbHk6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LXJlcGx5OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcmVwbHk7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1naXRodWItYWx0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZ2l0aHViLWFsdDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWZvbGRlci1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZm9sZGVyLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1mb2xkZXItb3Blbi1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZm9sZGVyLW9wZW4tbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXNtaWxlLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zbWlsZS1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZnJvd24tbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWZyb3duLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1tZWgtbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLW1laC1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZ2FtZXBhZDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWdhbWVwYWQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1rZXlib2FyZC1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXIta2V5Ym9hcmQtbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWZsYWctbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWZsYWctbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWZsYWctY2hlY2tlcmVkOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZmxhZy1jaGVja2VyZWQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS10ZXJtaW5hbDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXRlcm1pbmFsOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY29kZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNvZGU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1tYWlsLXJlcGx5LWFsbDpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tcmVwbHktYWxsOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcmVwbHktYWxsOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc3Rhci1oYWxmLWVtcHR5OmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1zdGFyLWhhbGYtZnVsbDpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tc3Rhci1oYWxmLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zdGFyLWhhbGYtbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWxvY2F0aW9uLWFycm93OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbG9jYXRpb24tYXJyb3c7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jcm9wOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY3JvcDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNvZGUtZm9yazpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNvZGUtZm9yazsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXVubGluazpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tY2hhaW4tYnJva2VuOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2hhaW4tYnJva2VuOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcXVlc3Rpb246YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1xdWVzdGlvbjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWluZm86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1pbmZvOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZXhjbGFtYXRpb246YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1leGNsYW1hdGlvbjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXN1cGVyc2NyaXB0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc3VwZXJzY3JpcHQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zdWJzY3JpcHQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zdWJzY3JpcHQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1lcmFzZXI6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1lcmFzZXI7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1wdXp6bGUtcGllY2U6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1wdXp6bGUtcGllY2U7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1taWNyb3Bob25lOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbWljcm9waG9uZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LW1pY3JvcGhvbmUtc2xhc2g6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1taWNyb3Bob25lLXNsYXNoOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc2hpZWxkOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc2hpZWxkOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY2FsZW5kYXItbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNhbGVuZGFyLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1maXJlLWV4dGluZ3Vpc2hlcjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWZpcmUtZXh0aW5ndWlzaGVyOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcm9ja2V0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcm9ja2V0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbWF4Y2RuOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbWF4Y2RuOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY2hldnJvbi1jaXJjbGUtbGVmdDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNoZXZyb24tY2lyY2xlLWxlZnQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jaGV2cm9uLWNpcmNsZS1yaWdodDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNoZXZyb24tY2lyY2xlLXJpZ2h0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY2hldnJvbi1jaXJjbGUtdXA6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jaGV2cm9uLWNpcmNsZS11cDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNoZXZyb24tY2lyY2xlLWRvd246YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jaGV2cm9uLWNpcmNsZS1kb3duOyB9XG4uI3skZmEtY3NzLXByZWZpeH0taHRtbDU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1odG1sNTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNzczM6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jc3MzOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYW5jaG9yOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYW5jaG9yOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdW5sb2NrLWFsdDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXVubG9jay1hbHQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1idWxsc2V5ZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWJ1bGxzZXllOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZWxsaXBzaXMtaDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWVsbGlwc2lzLWg7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1lbGxpcHNpcy12OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZWxsaXBzaXMtdjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXJzcy1zcXVhcmU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1yc3Mtc3F1YXJlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcGxheS1jaXJjbGU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1wbGF5LWNpcmNsZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXRpY2tldDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXRpY2tldDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LW1pbnVzLXNxdWFyZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLW1pbnVzLXNxdWFyZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LW1pbnVzLXNxdWFyZS1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbWludXMtc3F1YXJlLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1sZXZlbC11cDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWxldmVsLXVwOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbGV2ZWwtZG93bjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWxldmVsLWRvd247IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jaGVjay1zcXVhcmU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jaGVjay1zcXVhcmU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1wZW5jaWwtc3F1YXJlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcGVuY2lsLXNxdWFyZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWV4dGVybmFsLWxpbmstc3F1YXJlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZXh0ZXJuYWwtbGluay1zcXVhcmU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zaGFyZS1zcXVhcmU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zaGFyZS1zcXVhcmU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jb21wYXNzOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY29tcGFzczsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXRvZ2dsZS1kb3duOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1jYXJldC1zcXVhcmUtby1kb3duOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2FyZXQtc3F1YXJlLW8tZG93bjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXRvZ2dsZS11cDpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tY2FyZXQtc3F1YXJlLW8tdXA6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jYXJldC1zcXVhcmUtby11cDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXRvZ2dsZS1yaWdodDpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tY2FyZXQtc3F1YXJlLW8tcmlnaHQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jYXJldC1zcXVhcmUtby1yaWdodDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWV1cm86YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWV1cjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWV1cjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWdicDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWdicDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWRvbGxhcjpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tdXNkOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdXNkOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcnVwZWU6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWlucjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWlucjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNueTpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tcm1iOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS15ZW46YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWpweTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWpweTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXJ1YmxlOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1yb3VibGU6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LXJ1YjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXJ1YjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXdvbjpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0ta3J3OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXIta3J3OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYml0Y29pbjpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tYnRjOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYnRjOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZmlsZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWZpbGU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1maWxlLXRleHQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1maWxlLXRleHQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zb3J0LWFscGhhLWFzYzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXNvcnQtYWxwaGEtYXNjOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc29ydC1hbHBoYS1kZXNjOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc29ydC1hbHBoYS1kZXNjOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc29ydC1hbW91bnQtYXNjOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc29ydC1hbW91bnQtYXNjOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc29ydC1hbW91bnQtZGVzYzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXNvcnQtYW1vdW50LWRlc2M7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zb3J0LW51bWVyaWMtYXNjOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc29ydC1udW1lcmljLWFzYzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXNvcnQtbnVtZXJpYy1kZXNjOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc29ydC1udW1lcmljLWRlc2M7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS10aHVtYnMtdXA6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci10aHVtYnMtdXA7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS10aHVtYnMtZG93bjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXRodW1icy1kb3duOyB9XG4uI3skZmEtY3NzLXByZWZpeH0teW91dHViZS1zcXVhcmU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci15b3V0dWJlLXNxdWFyZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXlvdXR1YmU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci15b3V0dWJlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0teGluZzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXhpbmc7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS14aW5nLXNxdWFyZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXhpbmctc3F1YXJlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0teW91dHViZS1wbGF5OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXIteW91dHViZS1wbGF5OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZHJvcGJveDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWRyb3Bib3g7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zdGFjay1vdmVyZmxvdzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXN0YWNrLW92ZXJmbG93OyB9XG4uI3skZmEtY3NzLXByZWZpeH0taW5zdGFncmFtOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItaW5zdGFncmFtOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZmxpY2tyOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZmxpY2tyOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYWRuOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYWRuOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYml0YnVja2V0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYml0YnVja2V0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYml0YnVja2V0LXNxdWFyZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWJpdGJ1Y2tldC1zcXVhcmU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS10dW1ibHI6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci10dW1ibHI7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS10dW1ibHItc3F1YXJlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdHVtYmxyLXNxdWFyZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWxvbmctYXJyb3ctZG93bjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWxvbmctYXJyb3ctZG93bjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWxvbmctYXJyb3ctdXA6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1sb25nLWFycm93LXVwOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbG9uZy1hcnJvdy1sZWZ0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbG9uZy1hcnJvdy1sZWZ0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbG9uZy1hcnJvdy1yaWdodDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWxvbmctYXJyb3ctcmlnaHQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hcHBsZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWFwcGxlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0td2luZG93czpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXdpbmRvd3M7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hbmRyb2lkOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYW5kcm9pZDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWxpbnV4OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbGludXg7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1kcmliYmJsZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWRyaWJiYmxlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc2t5cGU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1za3lwZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWZvdXJzcXVhcmU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1mb3Vyc3F1YXJlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdHJlbGxvOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdHJlbGxvOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZmVtYWxlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZmVtYWxlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbWFsZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLW1hbGU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1naXR0aXA6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWdyYXRpcGF5OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZ3JhdGlwYXk7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zdW4tbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXN1bi1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbW9vbi1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbW9vbi1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYXJjaGl2ZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWFyY2hpdmU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1idWc6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1idWc7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS12azpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXZrOyB9XG4uI3skZmEtY3NzLXByZWZpeH0td2VpYm86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci13ZWlibzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXJlbnJlbjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXJlbnJlbjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXBhZ2VsaW5lczpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXBhZ2VsaW5lczsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXN0YWNrLWV4Y2hhbmdlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc3RhY2stZXhjaGFuZ2U7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hcnJvdy1jaXJjbGUtby1yaWdodDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWFycm93LWNpcmNsZS1vLXJpZ2h0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYXJyb3ctY2lyY2xlLW8tbGVmdDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWFycm93LWNpcmNsZS1vLWxlZnQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS10b2dnbGUtbGVmdDpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tY2FyZXQtc3F1YXJlLW8tbGVmdDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNhcmV0LXNxdWFyZS1vLWxlZnQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1kb3QtY2lyY2xlLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1kb3QtY2lyY2xlLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS13aGVlbGNoYWlyOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItd2hlZWxjaGFpcjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXZpbWVvLXNxdWFyZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXZpbWVvLXNxdWFyZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXR1cmtpc2gtbGlyYTpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tdHJ5OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdHJ5OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcGx1cy1zcXVhcmUtbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXBsdXMtc3F1YXJlLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zcGFjZS1zaHV0dGxlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc3BhY2Utc2h1dHRsZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXNsYWNrOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc2xhY2s7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1lbnZlbG9wZS1zcXVhcmU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1lbnZlbG9wZS1zcXVhcmU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS13b3JkcHJlc3M6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci13b3JkcHJlc3M7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1vcGVuaWQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1vcGVuaWQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1pbnN0aXR1dGlvbjpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tYmFuazpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tdW5pdmVyc2l0eTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXVuaXZlcnNpdHk7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1tb3J0YXItYm9hcmQ6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWdyYWR1YXRpb24tY2FwOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZ3JhZHVhdGlvbi1jYXA7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS15YWhvbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXlhaG9vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZ29vZ2xlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZ29vZ2xlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcmVkZGl0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcmVkZGl0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcmVkZGl0LXNxdWFyZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXJlZGRpdC1zcXVhcmU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zdHVtYmxldXBvbi1jaXJjbGU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zdHVtYmxldXBvbi1jaXJjbGU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zdHVtYmxldXBvbjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXN0dW1ibGV1cG9uOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZGVsaWNpb3VzOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZGVsaWNpb3VzOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZGlnZzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWRpZ2c7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1waWVkLXBpcGVyLXBwOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcGllZC1waXBlci1wcDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXBpZWQtcGlwZXItYWx0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcGllZC1waXBlci1hbHQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1kcnVwYWw6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1kcnVwYWw7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1qb29tbGE6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1qb29tbGE7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1sYW5ndWFnZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWxhbmd1YWdlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZmF4OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZmF4OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYnVpbGRpbmc6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1idWlsZGluZzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNoaWxkOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2hpbGQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1wYXc6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1wYXc7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zcG9vbjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXNwb29uOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY3ViZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWN1YmU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jdWJlczpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWN1YmVzOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYmVoYW5jZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWJlaGFuY2U7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1iZWhhbmNlLXNxdWFyZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWJlaGFuY2Utc3F1YXJlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc3RlYW06YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zdGVhbTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXN0ZWFtLXNxdWFyZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXN0ZWFtLXNxdWFyZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXJlY3ljbGU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1yZWN5Y2xlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYXV0b21vYmlsZTpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tY2FyOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2FyOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY2FiOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS10YXhpOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdGF4aTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXRyZWU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci10cmVlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc3BvdGlmeTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXNwb3RpZnk7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1kZXZpYW50YXJ0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZGV2aWFudGFydDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXNvdW5kY2xvdWQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zb3VuZGNsb3VkOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZGF0YWJhc2U6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1kYXRhYmFzZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWZpbGUtcGRmLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1maWxlLXBkZi1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZmlsZS13b3JkLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1maWxlLXdvcmQtbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWZpbGUtZXhjZWwtbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWZpbGUtZXhjZWwtbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWZpbGUtcG93ZXJwb2ludC1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZmlsZS1wb3dlcnBvaW50LW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1maWxlLXBob3RvLW86YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWZpbGUtcGljdHVyZS1vOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1maWxlLWltYWdlLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1maWxlLWltYWdlLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1maWxlLXppcC1vOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1maWxlLWFyY2hpdmUtbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWZpbGUtYXJjaGl2ZS1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZmlsZS1zb3VuZC1vOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1maWxlLWF1ZGlvLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1maWxlLWF1ZGlvLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1maWxlLW1vdmllLW86YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWZpbGUtdmlkZW8tbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWZpbGUtdmlkZW8tbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWZpbGUtY29kZS1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZmlsZS1jb2RlLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS12aW5lOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdmluZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNvZGVwZW46YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jb2RlcGVuOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tanNmaWRkbGU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1qc2ZpZGRsZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWxpZmUtYm91eTpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tbGlmZS1idW95OmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1saWZlLXNhdmVyOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1zdXBwb3J0OmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1saWZlLXJpbmc6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1saWZlLXJpbmc7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jaXJjbGUtby1ub3RjaDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNpcmNsZS1vLW5vdGNoOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcmE6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LXJlc2lzdGFuY2U6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LXJlYmVsOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcmViZWw7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1nZTpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tZW1waXJlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZW1waXJlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZ2l0LXNxdWFyZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWdpdC1zcXVhcmU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1naXQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1naXQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS15LWNvbWJpbmF0b3Itc3F1YXJlOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS15Yy1zcXVhcmU6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWhhY2tlci1uZXdzOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItaGFja2VyLW5ld3M7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS10ZW5jZW50LXdlaWJvOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdGVuY2VudC13ZWlibzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXFxOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcXE7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS13ZWNoYXQ6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LXdlaXhpbjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXdlaXhpbjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXNlbmQ6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LXBhcGVyLXBsYW5lOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcGFwZXItcGxhbmU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zZW5kLW86YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LXBhcGVyLXBsYW5lLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1wYXBlci1wbGFuZS1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0taGlzdG9yeTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWhpc3Rvcnk7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jaXJjbGUtdGhpbjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNpcmNsZS10aGluOyB9XG4uI3skZmEtY3NzLXByZWZpeH0taGVhZGVyOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItaGVhZGVyOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcGFyYWdyYXBoOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcGFyYWdyYXBoOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc2xpZGVyczpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXNsaWRlcnM7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zaGFyZS1hbHQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zaGFyZS1hbHQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zaGFyZS1hbHQtc3F1YXJlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc2hhcmUtYWx0LXNxdWFyZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWJvbWI6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1ib21iOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc29jY2VyLWJhbGwtbzpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tZnV0Ym9sLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1mdXRib2wtbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXR0eTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXR0eTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWJpbm9jdWxhcnM6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1iaW5vY3VsYXJzOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcGx1ZzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXBsdWc7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zbGlkZXNoYXJlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc2xpZGVzaGFyZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXR3aXRjaDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXR3aXRjaDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXllbHA6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci15ZWxwOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbmV3c3BhcGVyLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1uZXdzcGFwZXItbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXdpZmk6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci13aWZpOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY2FsY3VsYXRvcjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNhbGN1bGF0b3I7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1wYXlwYWw6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1wYXlwYWw7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1nb29nbGUtd2FsbGV0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZ29vZ2xlLXdhbGxldDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNjLXZpc2E6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jYy12aXNhOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY2MtbWFzdGVyY2FyZDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNjLW1hc3RlcmNhcmQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jYy1kaXNjb3ZlcjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNjLWRpc2NvdmVyOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY2MtYW1leDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNjLWFtZXg7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jYy1wYXlwYWw6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jYy1wYXlwYWw7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jYy1zdHJpcGU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jYy1zdHJpcGU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1iZWxsLXNsYXNoOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYmVsbC1zbGFzaDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWJlbGwtc2xhc2gtbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWJlbGwtc2xhc2gtbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXRyYXNoOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdHJhc2g7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jb3B5cmlnaHQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jb3B5cmlnaHQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hdDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWF0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZXllZHJvcHBlcjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWV5ZWRyb3BwZXI7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1wYWludC1icnVzaDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXBhaW50LWJydXNoOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYmlydGhkYXktY2FrZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWJpcnRoZGF5LWNha2U7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hcmVhLWNoYXJ0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYXJlYS1jaGFydDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXBpZS1jaGFydDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXBpZS1jaGFydDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWxpbmUtY2hhcnQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1saW5lLWNoYXJ0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbGFzdGZtOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbGFzdGZtOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbGFzdGZtLXNxdWFyZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWxhc3RmbS1zcXVhcmU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS10b2dnbGUtb2ZmOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdG9nZ2xlLW9mZjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXRvZ2dsZS1vbjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXRvZ2dsZS1vbjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWJpY3ljbGU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1iaWN5Y2xlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYnVzOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYnVzOyB9XG4uI3skZmEtY3NzLXByZWZpeH0taW94aG9zdDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWlveGhvc3Q7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hbmdlbGxpc3Q6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1hbmdlbGxpc3Q7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jYzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNjOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc2hla2VsOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1zaGVxZWw6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWlsczpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWlsczsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LW1lYW5wYXRoOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbWVhbnBhdGg7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1idXlzZWxsYWRzOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYnV5c2VsbGFkczsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNvbm5lY3RkZXZlbG9wOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY29ubmVjdGRldmVsb3A7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1kYXNoY3ViZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWRhc2hjdWJlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZm9ydW1iZWU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1mb3J1bWJlZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWxlYW5wdWI6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1sZWFucHViOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc2VsbHN5OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc2VsbHN5OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc2hpcnRzaW5idWxrOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc2hpcnRzaW5idWxrOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc2ltcGx5YnVpbHQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zaW1wbHlidWlsdDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXNreWF0bGFzOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc2t5YXRsYXM7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jYXJ0LXBsdXM6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jYXJ0LXBsdXM7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jYXJ0LWFycm93LWRvd246YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jYXJ0LWFycm93LWRvd247IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1kaWFtb25kOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZGlhbW9uZDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXNoaXA6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zaGlwOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdXNlci1zZWNyZXQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci11c2VyLXNlY3JldDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LW1vdG9yY3ljbGU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1tb3RvcmN5Y2xlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc3RyZWV0LXZpZXc6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zdHJlZXQtdmlldzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWhlYXJ0YmVhdDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWhlYXJ0YmVhdDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXZlbnVzOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdmVudXM7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1tYXJzOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbWFyczsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LW1lcmN1cnk6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1tZXJjdXJ5OyB9XG4uI3skZmEtY3NzLXByZWZpeH0taW50ZXJzZXg6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LXRyYW5zZ2VuZGVyOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdHJhbnNnZW5kZXI7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS10cmFuc2dlbmRlci1hbHQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci10cmFuc2dlbmRlci1hbHQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS12ZW51cy1kb3VibGU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci12ZW51cy1kb3VibGU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1tYXJzLWRvdWJsZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLW1hcnMtZG91YmxlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdmVudXMtbWFyczpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXZlbnVzLW1hcnM7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1tYXJzLXN0cm9rZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLW1hcnMtc3Ryb2tlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbWFycy1zdHJva2UtdjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLW1hcnMtc3Ryb2tlLXY7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1tYXJzLXN0cm9rZS1oOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbWFycy1zdHJva2UtaDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LW5ldXRlcjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLW5ldXRlcjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWdlbmRlcmxlc3M6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1nZW5kZXJsZXNzOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZmFjZWJvb2stb2ZmaWNpYWw6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1mYWNlYm9vay1vZmZpY2lhbDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXBpbnRlcmVzdC1wOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcGludGVyZXN0LXA7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS13aGF0c2FwcDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXdoYXRzYXBwOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc2VydmVyOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc2VydmVyOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdXNlci1wbHVzOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdXNlci1wbHVzOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdXNlci10aW1lczpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXVzZXItdGltZXM7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1ob3RlbDpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tYmVkOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYmVkOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdmlhY29pbjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXZpYWNvaW47IH1cbi4jeyRmYS1jc3MtcHJlZml4fS10cmFpbjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXRyYWluOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc3Vid2F5OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc3Vid2F5OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbWVkaXVtOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbWVkaXVtOyB9XG4uI3skZmEtY3NzLXByZWZpeH0teWM6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LXktY29tYmluYXRvcjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXktY29tYmluYXRvcjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LW9wdGluLW1vbnN0ZXI6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1vcHRpbi1tb25zdGVyOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tb3BlbmNhcnQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1vcGVuY2FydDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWV4cGVkaXRlZHNzbDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWV4cGVkaXRlZHNzbDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWJhdHRlcnktNDpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tYmF0dGVyeTpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tYmF0dGVyeS1mdWxsOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYmF0dGVyeS1mdWxsOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYmF0dGVyeS0zOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1iYXR0ZXJ5LXRocmVlLXF1YXJ0ZXJzOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYmF0dGVyeS10aHJlZS1xdWFydGVyczsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWJhdHRlcnktMjpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tYmF0dGVyeS1oYWxmOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYmF0dGVyeS1oYWxmOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYmF0dGVyeS0xOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1iYXR0ZXJ5LXF1YXJ0ZXI6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1iYXR0ZXJ5LXF1YXJ0ZXI7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1iYXR0ZXJ5LTA6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWJhdHRlcnktZW1wdHk6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1iYXR0ZXJ5LWVtcHR5OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbW91c2UtcG9pbnRlcjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLW1vdXNlLXBvaW50ZXI7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1pLWN1cnNvcjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWktY3Vyc29yOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tb2JqZWN0LWdyb3VwOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItb2JqZWN0LWdyb3VwOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tb2JqZWN0LXVuZ3JvdXA6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1vYmplY3QtdW5ncm91cDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXN0aWNreS1ub3RlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc3RpY2t5LW5vdGU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zdGlja3ktbm90ZS1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc3RpY2t5LW5vdGUtbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNjLWpjYjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNjLWpjYjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNjLWRpbmVycy1jbHViOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2MtZGluZXJzLWNsdWI7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jbG9uZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNsb25lOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYmFsYW5jZS1zY2FsZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWJhbGFuY2Utc2NhbGU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1ob3VyZ2xhc3MtbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWhvdXJnbGFzcy1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0taG91cmdsYXNzLTE6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWhvdXJnbGFzcy1zdGFydDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWhvdXJnbGFzcy1zdGFydDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWhvdXJnbGFzcy0yOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1ob3VyZ2xhc3MtaGFsZjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWhvdXJnbGFzcy1oYWxmOyB9XG4uI3skZmEtY3NzLXByZWZpeH0taG91cmdsYXNzLTM6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWhvdXJnbGFzcy1lbmQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1ob3VyZ2xhc3MtZW5kOyB9XG4uI3skZmEtY3NzLXByZWZpeH0taG91cmdsYXNzOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItaG91cmdsYXNzOyB9XG4uI3skZmEtY3NzLXByZWZpeH0taGFuZC1ncmFiLW86YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWhhbmQtcm9jay1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItaGFuZC1yb2NrLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1oYW5kLXN0b3AtbzpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0taGFuZC1wYXBlci1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItaGFuZC1wYXBlci1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0taGFuZC1zY2lzc29ycy1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItaGFuZC1zY2lzc29ycy1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0taGFuZC1saXphcmQtbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWhhbmQtbGl6YXJkLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1oYW5kLXNwb2NrLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1oYW5kLXNwb2NrLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1oYW5kLXBvaW50ZXItbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWhhbmQtcG9pbnRlci1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0taGFuZC1wZWFjZS1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItaGFuZC1wZWFjZS1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdHJhZGVtYXJrOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdHJhZGVtYXJrOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcmVnaXN0ZXJlZDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXJlZ2lzdGVyZWQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jcmVhdGl2ZS1jb21tb25zOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY3JlYXRpdmUtY29tbW9uczsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWdnOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZ2c7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1nZy1jaXJjbGU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1nZy1jaXJjbGU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS10cmlwYWR2aXNvcjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXRyaXBhZHZpc29yOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tb2Rub2tsYXNzbmlraTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLW9kbm9rbGFzc25pa2k7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1vZG5va2xhc3NuaWtpLXNxdWFyZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLW9kbm9rbGFzc25pa2ktc3F1YXJlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZ2V0LXBvY2tldDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWdldC1wb2NrZXQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS13aWtpcGVkaWEtdzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXdpa2lwZWRpYS13OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc2FmYXJpOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc2FmYXJpOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY2hyb21lOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2hyb21lOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZmlyZWZveDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWZpcmVmb3g7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1vcGVyYTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLW9wZXJhOyB9XG4uI3skZmEtY3NzLXByZWZpeH0taW50ZXJuZXQtZXhwbG9yZXI6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1pbnRlcm5ldC1leHBsb3JlcjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXR2OmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS10ZWxldmlzaW9uOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdGVsZXZpc2lvbjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNvbnRhbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNvbnRhbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LTUwMHB4OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItNTAwcHg7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hbWF6b246YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1hbWF6b247IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jYWxlbmRhci1wbHVzLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jYWxlbmRhci1wbHVzLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jYWxlbmRhci1taW51cy1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY2FsZW5kYXItbWludXMtbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWNhbGVuZGFyLXRpbWVzLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jYWxlbmRhci10aW1lcy1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY2FsZW5kYXItY2hlY2stbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNhbGVuZGFyLWNoZWNrLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1pbmR1c3RyeTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWluZHVzdHJ5OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbWFwLXBpbjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLW1hcC1waW47IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1tYXAtc2lnbnM6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1tYXAtc2lnbnM7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1tYXAtbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLW1hcC1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbWFwOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbWFwOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY29tbWVudGluZzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWNvbW1lbnRpbmc7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1jb21tZW50aW5nLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jb21tZW50aW5nLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1ob3V6ejpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWhvdXp6OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdmltZW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci12aW1lbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWJsYWNrLXRpZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWJsYWNrLXRpZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWZvbnRpY29uczpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWZvbnRpY29uczsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXJlZGRpdC1hbGllbjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXJlZGRpdC1hbGllbjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWVkZ2U6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1lZGdlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY3JlZGl0LWNhcmQtYWx0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItY3JlZGl0LWNhcmQtYWx0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tY29kaWVwaWU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1jb2RpZXBpZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LW1vZHg6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1tb2R4OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZm9ydC1hd2Vzb21lOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZm9ydC1hd2Vzb21lOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdXNiOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdXNiOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcHJvZHVjdC1odW50OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcHJvZHVjdC1odW50OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbWl4Y2xvdWQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1taXhjbG91ZDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXNjcmliZDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXNjcmliZDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXBhdXNlLWNpcmNsZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXBhdXNlLWNpcmNsZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXBhdXNlLWNpcmNsZS1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcGF1c2UtY2lyY2xlLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zdG9wLWNpcmNsZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXN0b3AtY2lyY2xlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc3RvcC1jaXJjbGUtbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXN0b3AtY2lyY2xlLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zaG9wcGluZy1iYWc6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zaG9wcGluZy1iYWc7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zaG9wcGluZy1iYXNrZXQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zaG9wcGluZy1iYXNrZXQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1oYXNodGFnOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItaGFzaHRhZzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWJsdWV0b290aDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWJsdWV0b290aDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWJsdWV0b290aC1iOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYmx1ZXRvb3RoLWI7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1wZXJjZW50OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItcGVyY2VudDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWdpdGxhYjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWdpdGxhYjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXdwYmVnaW5uZXI6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci13cGJlZ2lubmVyOyB9XG4uI3skZmEtY3NzLXByZWZpeH0td3Bmb3JtczpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXdwZm9ybXM7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1lbnZpcmE6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1lbnZpcmE7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS11bml2ZXJzYWwtYWNjZXNzOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdW5pdmVyc2FsLWFjY2VzczsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXdoZWVsY2hhaXItYWx0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItd2hlZWxjaGFpci1hbHQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1xdWVzdGlvbi1jaXJjbGUtbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXF1ZXN0aW9uLWNpcmNsZS1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYmxpbmQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1ibGluZDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWF1ZGlvLWRlc2NyaXB0aW9uOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYXVkaW8tZGVzY3JpcHRpb247IH1cbi4jeyRmYS1jc3MtcHJlZml4fS12b2x1bWUtY29udHJvbC1waG9uZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXZvbHVtZS1jb250cm9sLXBob25lOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYnJhaWxsZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWJyYWlsbGU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hc3Npc3RpdmUtbGlzdGVuaW5nLXN5c3RlbXM6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1hc3Npc3RpdmUtbGlzdGVuaW5nLXN5c3RlbXM7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1hc2wtaW50ZXJwcmV0aW5nOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1hbWVyaWNhbi1zaWduLWxhbmd1YWdlLWludGVycHJldGluZzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWFtZXJpY2FuLXNpZ24tbGFuZ3VhZ2UtaW50ZXJwcmV0aW5nOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZGVhZm5lc3M6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWhhcmQtb2YtaGVhcmluZzpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tZGVhZjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWRlYWY7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1nbGlkZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWdsaWRlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZ2xpZGUtZzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWdsaWRlLWc7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zaWduaW5nOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1zaWduLWxhbmd1YWdlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc2lnbi1sYW5ndWFnZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWxvdy12aXNpb246YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1sb3ctdmlzaW9uOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdmlhZGVvOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdmlhZGVvOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdmlhZGVvLXNxdWFyZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXZpYWRlby1zcXVhcmU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zbmFwY2hhdDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXNuYXBjaGF0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc25hcGNoYXQtZ2hvc3Q6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1zbmFwY2hhdC1naG9zdDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXNuYXBjaGF0LXNxdWFyZTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXNuYXBjaGF0LXNxdWFyZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXBpZWQtcGlwZXI6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1waWVkLXBpcGVyOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZmlyc3Qtb3JkZXI6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1maXJzdC1vcmRlcjsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXlvYXN0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXIteW9hc3Q7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS10aGVtZWlzbGU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci10aGVtZWlzbGU7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1nb29nbGUtcGx1cy1jaXJjbGU6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LWdvb2dsZS1wbHVzLW9mZmljaWFsOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZ29vZ2xlLXBsdXMtb2ZmaWNpYWw7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1mYTpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tZm9udC1hd2Vzb21lOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZm9udC1hd2Vzb21lOyB9XG4uI3skZmEtY3NzLXByZWZpeH0taGFuZHNoYWtlLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1oYW5kc2hha2UtbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWVudmVsb3BlLW9wZW46YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1lbnZlbG9wZS1vcGVuOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZW52ZWxvcGUtb3Blbi1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZW52ZWxvcGUtb3Blbi1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tbGlub2RlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItbGlub2RlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYWRkcmVzcy1ib29rOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYWRkcmVzcy1ib29rOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYWRkcmVzcy1ib29rLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1hZGRyZXNzLWJvb2stbzsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXZjYXJkOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1hZGRyZXNzLWNhcmQ6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1hZGRyZXNzLWNhcmQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS12Y2FyZC1vOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1hZGRyZXNzLWNhcmQtbzpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWFkZHJlc3MtY2FyZC1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdXNlci1jaXJjbGU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci11c2VyLWNpcmNsZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXVzZXItY2lyY2xlLW86YmVmb3JlIHsgY29udGVudDogJGZhLXZhci11c2VyLWNpcmNsZS1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdXNlci1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItdXNlci1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0taWQtYmFkZ2U6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1pZC1iYWRnZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWRyaXZlcnMtbGljZW5zZTpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0taWQtY2FyZDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWlkLWNhcmQ7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1kcml2ZXJzLWxpY2Vuc2UtbzpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0taWQtY2FyZC1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItaWQtY2FyZC1vOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcXVvcmE6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1xdW9yYTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWZyZWUtY29kZS1jYW1wOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZnJlZS1jb2RlLWNhbXA7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS10ZWxlZ3JhbTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXRlbGVncmFtOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdGhlcm1vbWV0ZXItNDpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tdGhlcm1vbWV0ZXI6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LXRoZXJtb21ldGVyLWZ1bGw6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci10aGVybW9tZXRlci1mdWxsOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdGhlcm1vbWV0ZXItMzpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tdGhlcm1vbWV0ZXItdGhyZWUtcXVhcnRlcnM6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci10aGVybW9tZXRlci10aHJlZS1xdWFydGVyczsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXRoZXJtb21ldGVyLTI6YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LXRoZXJtb21ldGVyLWhhbGY6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci10aGVybW9tZXRlci1oYWxmOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdGhlcm1vbWV0ZXItMTpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tdGhlcm1vbWV0ZXItcXVhcnRlcjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXRoZXJtb21ldGVyLXF1YXJ0ZXI7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS10aGVybW9tZXRlci0wOmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS10aGVybW9tZXRlci1lbXB0eTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXRoZXJtb21ldGVyLWVtcHR5OyB9XG4uI3skZmEtY3NzLXByZWZpeH0tc2hvd2VyOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc2hvd2VyOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tYmF0aHR1YjpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0tczE1OmJlZm9yZSxcbi4jeyRmYS1jc3MtcHJlZml4fS1iYXRoOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItYmF0aDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXBvZGNhc3Q6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1wb2RjYXN0OyB9XG4uI3skZmEtY3NzLXByZWZpeH0td2luZG93LW1heGltaXplOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItd2luZG93LW1heGltaXplOyB9XG4uI3skZmEtY3NzLXByZWZpeH0td2luZG93LW1pbmltaXplOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItd2luZG93LW1pbmltaXplOyB9XG4uI3skZmEtY3NzLXByZWZpeH0td2luZG93LXJlc3RvcmU6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci13aW5kb3ctcmVzdG9yZTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXRpbWVzLXJlY3RhbmdsZTpiZWZvcmUsXG4uI3skZmEtY3NzLXByZWZpeH0td2luZG93LWNsb3NlOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItd2luZG93LWNsb3NlOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tdGltZXMtcmVjdGFuZ2xlLW86YmVmb3JlLFxuLiN7JGZhLWNzcy1wcmVmaXh9LXdpbmRvdy1jbG9zZS1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItd2luZG93LWNsb3NlLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1iYW5kY2FtcDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWJhbmRjYW1wOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tZ3JhdjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLWdyYXY7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1ldHN5OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZXRzeTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LWltZGI6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1pbWRiOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tcmF2ZWxyeTpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXJhdmVscnk7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1lZXJjYXN0OmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItZWVyY2FzdDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LW1pY3JvY2hpcDpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLW1pY3JvY2hpcDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXNub3dmbGFrZS1vOmJlZm9yZSB7IGNvbnRlbnQ6ICRmYS12YXItc25vd2ZsYWtlLW87IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1zdXBlcnBvd2VyczpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXN1cGVycG93ZXJzOyB9XG4uI3skZmEtY3NzLXByZWZpeH0td3BleHBsb3JlcjpiZWZvcmUgeyBjb250ZW50OiAkZmEtdmFyLXdwZXhwbG9yZXI7IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1tZWV0dXA6YmVmb3JlIHsgY29udGVudDogJGZhLXZhci1tZWV0dXA7IH1cbiIsIi8vIFNjcmVlbiBSZWFkZXJzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi5zci1vbmx5IHsgQGluY2x1ZGUgc3Itb25seSgpOyB9XG4uc3Itb25seS1mb2N1c2FibGUgeyBAaW5jbHVkZSBzci1vbmx5LWZvY3VzYWJsZSgpOyB9XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent() {
          _classCallCheck(this, AppComponent);

          this.title = 'skirmesh-ui';
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 4,
        vars: 0,
        consts: [["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"], ["rel", "stylesheet", "href", "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "meta", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "meta", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "link", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "UU9E":
    /*!********************************************!*\
      !*** ./src/service/node-status.service.ts ***!
      \********************************************/

    /*! exports provided: NodeConfigService */

    /***/
    function UU9E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NodeConfigService", function () {
        return NodeConfigService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-socket-io */
      "7JkF");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NodeConfigService = /*#__PURE__*/function (_ngx_socket_io__WEBPA) {
        _inherits(NodeConfigService, _ngx_socket_io__WEBPA);

        var _super = _createSuper(NodeConfigService);

        function NodeConfigService() {
          var _this;

          _classCallCheck(this, NodeConfigService);

          _this = _super.call(this, {
            url: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ws_url,
            options: {}
          });

          _this.getMessages = function () {
            return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
              _this.on('new-message', function (message) {
                observer.next(message);
              });
            });
          };

          return _this;
        }

        _createClass(NodeConfigService, [{
          key: "sendMessage",
          value: function sendMessage(message) {
            this.emit('new-message', message);
          }
        }]);

        return NodeConfigService;
      }(ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__["Socket"]);

      NodeConfigService.ɵfac = function NodeConfigService_Factory(t) {
        return new (t || NodeConfigService)();
      };

      NodeConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: NodeConfigService,
        factory: NodeConfigService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _service_node_status_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../service/node-status.service */
      "UU9E");
      /* harmony import */


      var _global_global_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./global/global.module */
      "w1+i");
      /* harmony import */


      var _service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../service/auth.service */
      "u6mN");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var angularx_social_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! angularx-social-login */
      "ahC7");
      /* harmony import */


      var src_service_user_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/service/user-service.service */
      "7ttW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
        providers: [src_service_user_service_service__WEBPACK_IMPORTED_MODULE_8__["UserServiceService"], _service_node_status_service__WEBPACK_IMPORTED_MODULE_3__["NodeConfigService"], _service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["SocialAuthService"], {
          provide: 'SocialAuthServiceConfig',
          useValue: {
            autoLogin: false,
            providers: [{
              id: angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["FacebookLoginProvider"].PROVIDER_ID,
              provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["FacebookLoginProvider"]('348781009877452')
            }]
          }
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _global_global_module__WEBPACK_IMPORTED_MODULE_4__["GlobalModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _global_global_module__WEBPACK_IMPORTED_MODULE_4__["GlobalModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]]
        });
      })();
      /***/

    },

    /***/
    "sqTj":
    /*!***************************************************!*\
      !*** ./src/app/global/header/header.component.ts ***!
      \***************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function sqTj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_service_user_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/service/user-service.service */
      "7ttW");
      /* harmony import */


      var src_service_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/service/token-storage.service */
      "E48x");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = function _c0() {
        return ["/non-secure/home"];
      };

      var _c1 = function _c1() {
        return ["/non-secure/feature-list"];
      };

      var _c2 = function _c2() {
        return ["/non-secure/player-info"];
      };

      var _c3 = function _c3() {
        return ["/non-secure/field-info"];
      };

      function HeaderComponent_ul_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ul_6_Template_a_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.openInfoMenu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Info ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ul_6_Template_a_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.closeInfoMenu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ul_6_Template_a_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.closeInfoMenu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Features");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ul_6_Template_a_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.closeInfoMenu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Player Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ul_6_Template_a_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.closeInfoMenu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Field Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));
        }
      }

      var _c4 = function _c4() {
        return ["/auth/sign-up"];
      };

      function HeaderComponent_ul_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Features");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Player Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Field Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c4));
        }
      }

      var _c5 = function _c5() {
        return ["/secure/dashboard"];
      };

      var _c6 = function _c6() {
        return ["/secure/profile"];
      };

      function HeaderComponent_ul_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c5));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c6));
        }
      }

      var _c7 = function _c7() {
        return ["/secure/find-game"];
      };

      var _c8 = function _c8() {
        return ["/secure/current-game"];
      };

      function HeaderComponent_ul_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Find Games");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Current Games");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c7));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c8));
        }
      }

      var _c9 = function _c9() {
        return ["/secure/start-game"];
      };

      var _c10 = function _c10() {
        return ["/secure/manageGame"];
      };

      var _c11 = function _c11() {
        return ["/secure/mydevices"];
      };

      function HeaderComponent_ul_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Start Games");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Manage Games");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "My Devices");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c9));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c10));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c11));
        }
      }

      var _c12 = function _c12() {
        return ["/auth/login"];
      };

      function HeaderComponent_ul_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sign In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c12));
        }
      }

      function HeaderComponent_ul_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ul_12_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.signOut();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sign Out");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(userService, tokenService, router) {
          _classCallCheck(this, HeaderComponent);

          this.router = router;
          this.isSideNavOpen = false;
          this.isSecure = true;
          this.isPlayer = false;
          this.isField = false;
          this.userSvc = userService;
          this.tokenSvc = tokenService;
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            // window.location.href.includes('/auth/sign-up')? document.getElementById("nav_register").classList.add('active'):null;
            // window.location.href.includes('/non-secure/field-info')? document.getElementById("nav_fieldInfo").classList.add('active'):null;
            // window.location.href.includes('/non-secure/player-info')? document.getElementById("nav_playerInfo").classList.add('active'):null;
            // window.location.href.includes('/non-secure/feature-list')? document.getElementById("nav_featureList").classList.add('active'):null;
            // window.location.href.includes('/non-secure/home')? document.getElementById("nav_home").classList.add('active'):null;
            // window.location.href.includes('home')? $("#nav_home").addClass('active'):null;
            // window.location.href.includes('newGame')? $("#nav_newGame").addClass('active'):null;
            // window.location.href.includes('pastGames')? $("#nav_pastGames").addClass('active'):null;
            this.userSvc.isSignedIn().subscribe(function (isSignedIn) {
              _this2.isSecure = isSignedIn;
            });
            this.userSvc.getUserTye().subscribe(function (userType) {
              if (userType == 'field') {
                _this2.isField = true;
              } else if (userType == 'player') {
                _this2.isPlayer = true;
              }
            });
          }
        }, {
          key: "signOut",
          value: function signOut() {
            this.tokenSvc.signOut();
            this.userSvc.setSignIn(false);
            this.router.navigate(['/secure-player']);
          }
        }, {
          key: "closeInfoMenu",
          value: function closeInfoMenu() {
            var menu = document.getElementById("infoDropdown");
            menu.style.display == 'none';
          }
        }, {
          key: "openInfoMenu",
          value: function openInfoMenu() {
            var menu = document.getElementById("infoDropdown");

            if (menu.style.display == 'none') {
              menu.style.display = 'block';
            } else {
              menu.style.display = 'none';
            }
          }
        }, {
          key: "openMenu",
          value: function openMenu() {
            var menu = document.getElementById("navdrop");
            menu.classList.toggle('collapse');
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_service_user_service_service__WEBPACK_IMPORTED_MODULE_1__["UserServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_service_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 13,
        vars: 9,
        consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "container-fluid"], ["type", "button", "aria-controls", "navbarTogglerDemo03", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], ["src", "../../../assets/images/logo.png", "alt", "user", 1, "hc_custom", "img-fluid", 3, "routerLink"], ["id", "navdrop", 1, "collapse", "navbar-collapse"], ["class", "navbar-nav mt-2 mt-lg-0", 4, "ngIf"], ["class", "navbar-nav mr-auto mt-2 mt-lg-0", 4, "ngIf"], ["class", "navbar-nav mr-auto  mt-2 mt-lg-0", 4, "ngIf"], ["class", "navbar-nav my-2 my-lg-0", 4, "ngIf"], [1, "navbar-nav", "mt-2", "mt-lg-0"], [1, "nav-item", "dropdown"], ["id", "navbarDropdownMenuLink", "role", "button", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", 3, "click"], ["id", "infoDropdown", "aria-labelledby", "navbarDropdownMenuLink", 1, "dropdown-menu"], [1, "dropdown-item", 3, "routerLink", "click"], [1, "navbar-nav", "mr-auto", "mt-2", "mt-lg-0"], [1, "nav-item"], ["id", "nav_home", 1, "nav-link", 3, "routerLink"], ["id", "nav_featureList", 1, "nav-link", 3, "routerLink"], ["id", "nav_playerInfo", 1, "nav-link", 3, "routerLink"], ["id", "nav_fieldInfo", 1, "nav-link", 3, "routerLink"], ["id", "nav_register", 1, "nav-link", 3, "routerLink"], ["id", "secure_nav_dashboard", 1, "nav-link", 3, "routerLink"], ["id", "secure_nav_profile", 1, "nav-link", 3, "routerLink"], ["id", "secure_nav_mygame", 1, "nav-link", 3, "routerLink"], ["id", "secure_nav_currentgame", 1, "nav-link", 3, "routerLink"], [1, "navbar-nav", "my-2", "my-lg-0"], [1, "form-inline"], ["type", "submit", 1, "btn", "btn-outline-success", "my-2", "my-sm-0", 3, "routerLink"], [1, "form-inline", "my-2", "my-lg-0"], ["type", "submit", 1, "btn", "btn-outline-danger", "my-2", "my-sm-0", 3, "click"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_2_listener() {
              return ctx.openMenu();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_ul_6_Template, 13, 8, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeaderComponent_ul_7_Template, 16, 10, "ul", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HeaderComponent_ul_8_Template, 7, 4, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HeaderComponent_ul_9_Template, 7, 4, "ul", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HeaderComponent_ul_10_Template, 10, 6, "ul", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HeaderComponent_ul_11_Template, 4, 2, "ul", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HeaderComponent_ul_12_Template, 4, 0, "ul", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSecure);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSecure);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSecure);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSecure && ctx.isPlayer);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSecure && ctx.isField);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSecure);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSecure);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
        styles: [".hc_custom[_ngcontent-%COMP%] {\n  max-height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGdCQUFBO0FBQUYiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uaGNfY3VzdG9tIHtcbiAgbWF4LWhlaWdodDogNDBweDs7XG59Il19 */"]
      });
      /***/
    },

    /***/
    "u6mN":
    /*!*************************************!*\
      !*** ./src/service/auth.service.ts ***!
      \*************************************/

    /*! exports provided: AuthService */

    /***/
    function u6mN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(http) {
          _classCallCheck(this, AuthService);

          this.http = http; // option={
          // }

          this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          this.options = {
            headers: this.headers
          };
        }

        _createClass(AuthService, [{
          key: "createUser",
          value: function createUser(data) {
            return this.http.post('http://api.skirmesh.net/resources' + '/users', data, this.options);
          }
        }, {
          key: "userLogin",
          value: function userLogin(data) {
            return this.http.post('http://api.skirmesh.net' + '/login', data, this.options);
          }
        }, {
          key: "getUser",
          value: function getUser(token) {
            return this.http.get('http://api.skirmesh.net' + '/resources/user?token=' + token);
          }
        }, {
          key: "saveProfile",
          value: function saveProfile(token, data) {
            return this.http.put('http://api.skirmesh.net' + '/resources/user?token=' + token, data, this.options);
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      };

      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _helpers_auth_guard_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./helpers/auth-guard.guard */
      "vbbz");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: 'secure',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | secure-secure-module */
          [__webpack_require__.e("default~auth-auth-module~non-secure-non-secure-module~secure-secure-module"), __webpack_require__.e("secure-secure-module")]).then(__webpack_require__.bind(null,
          /*! ./secure/secure.module */
          "EPeh")).then(function (m) {
            return m.SecureModule;
          });
        },
        canActivate: [_helpers_auth_guard_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuardGuard"]]
      }, {
        path: 'auth',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | auth-auth-module */
          [__webpack_require__.e("default~auth-auth-module~non-secure-non-secure-module~secure-secure-module"), __webpack_require__.e("default~auth-auth-module~non-secure-non-secure-module"), __webpack_require__.e("auth-auth-module")]).then(__webpack_require__.bind(null,
          /*! ./auth/auth.module */
          "Yj9t")).then(function (m) {
            return m.AuthModule;
          });
        }
      }, {
        path: 'non-secure',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | non-secure-non-secure-module */
          [__webpack_require__.e("default~auth-auth-module~non-secure-non-secure-module~secure-secure-module"), __webpack_require__.e("default~auth-auth-module~non-secure-non-secure-module"), __webpack_require__.e("non-secure-non-secure-module")]).then(__webpack_require__.bind(null,
          /*! ./non-secure/non-secure.module */
          "6txL")).then(function (m) {
            return m.NonSecureModule;
          });
        }
      }, {
        path: "**",
        redirectTo: '/auth/login'
      }];
      var routerOptions = {
        useHash: false,
        anchorScrolling: 'enabled'
      };

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, routerOptions)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "vbbz":
    /*!*********************************************!*\
      !*** ./src/app/helpers/auth-guard.guard.ts ***!
      \*********************************************/

    /*! exports provided: AuthGuardGuard */

    /***/
    function vbbz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuardGuard", function () {
        return AuthGuardGuard;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_service_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/service/token-storage.service */
      "E48x");
      /* harmony import */


      var src_service_user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/service/user-service.service */
      "7ttW");
      /* harmony import */


      var src_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/service/auth.service */
      "u6mN");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AuthGuardGuard = /*#__PURE__*/function () {
        function AuthGuardGuard(tokenStorage, userSvc, authSvc, router) {
          _classCallCheck(this, AuthGuardGuard);

          this.tokenStorage = tokenStorage;
          this.userSvc = userSvc;
          this.authSvc = authSvc;
          this.router = router;
        }

        _createClass(AuthGuardGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var _this3 = this;

            //if session storage has valid key return true else false
            var token = this.tokenStorage.getToken();

            if (token) {
              return this.authSvc.getUser(token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (userdata) {
                console.log(userdata, "userdata");

                if (userdata) {
                  _this3.userSvc.setSignIn(true);

                  _this3.userSvc.setUserData(userdata);

                  return true;
                }
              }));
            } else {
              return false;
            }
          }
        }]);

        return AuthGuardGuard;
      }();

      AuthGuardGuard.ɵfac = function AuthGuardGuard_Factory(t) {
        return new (t || AuthGuardGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_service_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_service_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      AuthGuardGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: AuthGuardGuard,
        factory: AuthGuardGuard.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "w1+i":
    /*!*****************************************!*\
      !*** ./src/app/global/global.module.ts ***!
      \*****************************************/

    /*! exports provided: GlobalModule */

    /***/
    function w1I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GlobalModule", function () {
        return GlobalModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./footer/footer.component */
      "HNvH");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./header/header.component */
      "sqTj");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var GlobalModule = function GlobalModule() {
        _classCallCheck(this, GlobalModule);
      };

      GlobalModule.ɵfac = function GlobalModule_Factory(t) {
        return new (t || GlobalModule)();
      };

      GlobalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: GlobalModule
      });
      GlobalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](GlobalModule, {
          declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
          exports: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]]
        });
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map