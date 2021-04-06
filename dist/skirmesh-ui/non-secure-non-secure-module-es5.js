(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["non-secure-non-secure-module"], {
    /***/
    "6txL":
    /*!*************************************************!*\
      !*** ./src/app/non-secure/non-secure.module.ts ***!
      \*************************************************/

    /*! exports provided: NonSecureModule */

    /***/
    function txL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NonSecureModule", function () {
        return NonSecureModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _non_secure_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./non-secure-routing.module */
      "KSAr");
      /* harmony import */


      var _non_secure_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./non-secure.component */
      "rhqG");
      /* harmony import */


      var _features_list_features_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./features-list/features-list.component */
      "ihVn");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./home/home.component */
      "dd6G");
      /* harmony import */


      var _global_global_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../global/global.module */
      "w1+i");
      /* harmony import */


      var _auth_auth_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../auth/auth-routing.module */
      "6epW");
      /* harmony import */


      var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./contact-us/contact-us.component */
      "yAZj");
      /* harmony import */


      var _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./privacy-policy/privacy-policy.component */
      "KgFt");
      /* harmony import */


      var _faq_faq_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./faq/faq.component */
      "L7hD");
      /* harmony import */


      var _player_info_player_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./player-info/player-info.component */
      "Uyby");
      /* harmony import */


      var _field_info_field_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./field-info/field-info.component */
      "f1wA");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NonSecureModule = function NonSecureModule() {
        _classCallCheck(this, NonSecureModule);
      };

      NonSecureModule.ɵfac = function NonSecureModule_Factory(t) {
        return new (t || NonSecureModule)();
      };

      NonSecureModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
        type: NonSecureModule
      });
      NonSecureModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _non_secure_routing_module__WEBPACK_IMPORTED_MODULE_1__["NonSecureRoutingModule"], _auth_auth_routing_module__WEBPACK_IMPORTED_MODULE_6__["AuthRoutingModule"], _global_global_module__WEBPACK_IMPORTED_MODULE_5__["GlobalModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](NonSecureModule, {
          declarations: [_non_secure_component__WEBPACK_IMPORTED_MODULE_2__["NonSecureComponent"], _features_list_features_list_component__WEBPACK_IMPORTED_MODULE_3__["FeaturesListComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_7__["ContactUsComponent"], _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_8__["PrivacyPolicyComponent"], _faq_faq_component__WEBPACK_IMPORTED_MODULE_9__["FaqComponent"], _player_info_player_info_component__WEBPACK_IMPORTED_MODULE_10__["PlayerInfoComponent"], _field_info_field_info_component__WEBPACK_IMPORTED_MODULE_11__["FieldInfoComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _non_secure_routing_module__WEBPACK_IMPORTED_MODULE_1__["NonSecureRoutingModule"], _auth_auth_routing_module__WEBPACK_IMPORTED_MODULE_6__["AuthRoutingModule"], _global_global_module__WEBPACK_IMPORTED_MODULE_5__["GlobalModule"]]
        });
      })();
      /***/

    },

    /***/
    "KSAr":
    /*!*********************************************************!*\
      !*** ./src/app/non-secure/non-secure-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: NonSecureRoutingModule */

    /***/
    function KSAr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NonSecureRoutingModule", function () {
        return NonSecureRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./contact-us/contact-us.component */
      "yAZj");
      /* harmony import */


      var _faq_faq_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./faq/faq.component */
      "L7hD");
      /* harmony import */


      var _features_list_features_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./features-list/features-list.component */
      "ihVn");
      /* harmony import */


      var _field_info_field_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./field-info/field-info.component */
      "f1wA");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home/home.component */
      "dd6G");
      /* harmony import */


      var _non_secure_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./non-secure.component */
      "rhqG");
      /* harmony import */


      var _player_info_player_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./player-info/player-info.component */
      "Uyby");
      /* harmony import */


      var _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./privacy-policy/privacy-policy.component */
      "KgFt");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      "fXoL"); // const routes: Routes = [{ path: '', component: NonSecureComponent }];


      var routes = [{
        path: '',
        component: _non_secure_component__WEBPACK_IMPORTED_MODULE_6__["NonSecureComponent"],
        children: [{
          path: 'home',
          component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
        }, {
          path: 'feature-list',
          component: _features_list_features_list_component__WEBPACK_IMPORTED_MODULE_3__["FeaturesListComponent"]
        }, {
          path: 'faq',
          component: _faq_faq_component__WEBPACK_IMPORTED_MODULE_2__["FaqComponent"]
        }, {
          path: 'contact-us',
          component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_1__["ContactUsComponent"]
        }, {
          path: 'privacy-policy',
          component: _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_8__["PrivacyPolicyComponent"]
        }, {
          path: 'field-info',
          component: _field_info_field_info_component__WEBPACK_IMPORTED_MODULE_4__["FieldInfoComponent"]
        }, {
          path: 'player-info',
          component: _player_info_player_info_component__WEBPACK_IMPORTED_MODULE_7__["PlayerInfoComponent"]
        }, {
          path: "",
          redirectTo: '/non-secure/home'
        }]
      }];

      var NonSecureRoutingModule = function NonSecureRoutingModule() {
        _classCallCheck(this, NonSecureRoutingModule);
      };

      NonSecureRoutingModule.ɵfac = function NonSecureRoutingModule_Factory(t) {
        return new (t || NonSecureRoutingModule)();
      };

      NonSecureRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
        type: NonSecureRoutingModule
      });
      NonSecureRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](NonSecureRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "KgFt":
    /*!***********************************************************************!*\
      !*** ./src/app/non-secure/privacy-policy/privacy-policy.component.ts ***!
      \***********************************************************************/

    /*! exports provided: PrivacyPolicyComponent */

    /***/
    function KgFt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrivacyPolicyComponent", function () {
        return PrivacyPolicyComponent;
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

      var PrivacyPolicyComponent = /*#__PURE__*/function () {
        function PrivacyPolicyComponent() {
          _classCallCheck(this, PrivacyPolicyComponent);
        }

        _createClass(PrivacyPolicyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PrivacyPolicyComponent;
      }();

      PrivacyPolicyComponent.ɵfac = function PrivacyPolicyComponent_Factory(t) {
        return new (t || PrivacyPolicyComponent)();
      };

      PrivacyPolicyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PrivacyPolicyComponent,
        selectors: [["app-privacy-policy"]],
        decls: 51,
        vars: 2,
        consts: [[1, "container"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-body"], [1, "card-title"], ["id", "content"], [1, "timeline"], ["data-date", "Section 1", 1, "event"], ["data-date", "Section 2", 1, "event"], ["data-date", "Section 3", 1, "event"], ["data-date", "Section 5", 1, "event"], ["data-date", "Section 6", 1, "event"], ["data-date", "Section 7", 1, "event"], ["data-date", "Section 8", 1, "event"], [3, "routerLink"]],
        template: function PrivacyPolicyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Privacy policy.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Last updated: March 2021 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Skirmesh (\"us\", \"we\", or \"our\") operates http://www.skirmesh.net (the \"Site\"). This page informs you of our policies regarding the collection, use and disclosure of Personal Information we receive from users of the Site. We use your Personal Information only for providing and improving the Site. By using the Site, you agree to the collection and use of information in accordance with this policy. Information Collection And Use While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to your name (\"Personal Information\"). ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Information Collection And Use");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to your name (\"Personal Information\"). ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Log Data");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Like many site operators, we collect information that your browser sends whenever you visit our Site (\"Log Data\"). This Log Data may include information such as your computer's Internet Protocol (\"IP\") address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages and other statistics. In addition, we may use third party services such as Google Analytics that collect, monitor and analyze this data.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Communications");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "TWe may use your Personal Information to contact you with newsletters, marketing or promotional materials and other information.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Cookies");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer's hard drive. Like many sites, we use \"cookies\" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Security");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Changes To This Privacy Policy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " This Privacy Policy is effective as of March 2021 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page. We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy. If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us, or by placing a prominent notice on our website. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Contact Us");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " If you have any questions about this Privacy Policy, please ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "contact us");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, ".");

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

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: [".custom_skirmesh[_ngcontent-%COMP%] {\n  background-image: url('soldierB.jpg');\n  min-height: 500px;\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.timeline[_ngcontent-%COMP%] {\n  border-left: 3px solid #727cf5;\n  border-bottom-right-radius: 4px;\n  border-top-right-radius: 4px;\n  background: rgba(114, 124, 245, 0.09);\n  margin: 0 auto;\n  letter-spacing: 0.2px;\n  position: relative;\n  line-height: 1.4em;\n  font-size: 1.03em;\n  padding: 50px;\n  list-style: none;\n  text-align: left;\n  max-width: 75%;\n}\n\n@media (max-width: 767px) {\n  .timeline[_ngcontent-%COMP%] {\n    max-width: 98%;\n    padding: 25px;\n  }\n}\n\n.timeline[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 1.4em;\n}\n\n.timeline[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .timeline[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 1rem;\n  margin-bottom: 10px;\n}\n\n.timeline[_ngcontent-%COMP%]   .event[_ngcontent-%COMP%] {\n  border-bottom: 1px dashed #e8ebf1;\n  padding-bottom: 25px;\n  margin-bottom: 25px;\n  position: relative;\n}\n\n@media (max-width: 767px) {\n  .timeline[_ngcontent-%COMP%]   .event[_ngcontent-%COMP%] {\n    padding-top: 30px;\n  }\n}\n\n.timeline[_ngcontent-%COMP%]   .event[_ngcontent-%COMP%]:last-of-type {\n  padding-bottom: 0;\n  margin-bottom: 0;\n  border: none;\n}\n\n.timeline[_ngcontent-%COMP%]   .event[_ngcontent-%COMP%]:before, .timeline[_ngcontent-%COMP%]   .event[_ngcontent-%COMP%]:after {\n  position: absolute;\n  display: block;\n  top: 0;\n}\n\n.timeline[_ngcontent-%COMP%]   .event[_ngcontent-%COMP%]:before {\n  left: -207px;\n  content: attr(data-date);\n  text-align: right;\n  font-weight: 100;\n  font-size: 0.9em;\n  min-width: 120px;\n}\n\n@media (max-width: 767px) {\n  .timeline[_ngcontent-%COMP%]   .event[_ngcontent-%COMP%]:before {\n    left: 0px;\n    text-align: left;\n  }\n}\n\n.timeline[_ngcontent-%COMP%]   .event[_ngcontent-%COMP%]:after {\n  box-shadow: 0 0 0 3px #727cf5;\n  left: -55.8px;\n  border-radius: 50%;\n  height: 9px;\n  width: 9px;\n  content: \"\";\n  top: 5px;\n}\n\n@media (max-width: 767px) {\n  .timeline[_ngcontent-%COMP%]   .event[_ngcontent-%COMP%]:after {\n    left: -31.8px;\n  }\n}\n\n.rtl[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%] {\n  border-left: 0;\n  text-align: right;\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: 4px;\n  border-top-left-radius: 4px;\n  border-right: 3px solid #727cf5;\n}\n\n.rtl[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .event[_ngcontent-%COMP%]::before {\n  left: 0;\n  right: -170px;\n}\n\n.rtl[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .event[_ngcontent-%COMP%]::after {\n  left: 0;\n  right: -55.8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3ByaXZhY3ktcG9saWN5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUkscUNBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBQUo7O0FBR0E7RUFDSSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdBO0VBQ0k7SUFDSSxjQUFBO0lBQ0EsYUFBQTtFQUFOO0FBQ0Y7O0FBR0E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FBREo7O0FBSUE7O0VBRUksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJQTtFQUNJLGlDQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUE7RUFDSTtJQUNJLGlCQUFBO0VBRE47QUFDRjs7QUFJQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBRko7O0FBS0E7O0VBRUksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsTUFBQTtBQUZKOztBQUtBO0VBQ0ksWUFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFGSjs7QUFLQTtFQUNJO0lBQ0ksU0FBQTtJQUNBLGdCQUFBO0VBRk47QUFDRjs7QUFLQTtFQUVJLDZCQUFBO0VBQ0EsYUFBQTtFQUVBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBQUpKOztBQU9BO0VBQ0k7SUFDSSxhQUFBO0VBSk47QUFDRjs7QUFPQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7QUFMSjs7QUFRQTtFQUNJLE9BQUE7RUFDQSxhQUFBO0FBTEo7O0FBUUE7RUFDSSxPQUFBO0VBQ0EsY0FBQTtBQUxKIiwiZmlsZSI6InByaXZhY3ktcG9saWN5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbV9za2lybWVzaCB7XG5cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc29sZGllckIuanBnJyk7XG4gICAgbWluLWhlaWdodDogNTAwcHg7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIFxufVxuLnRpbWVsaW5lIHtcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICM3MjdjZjU7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTE0LCAxMjQsIDI0NSwgMC4wOSk7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsaW5lLWhlaWdodDogMS40ZW07XG4gICAgZm9udC1zaXplOiAxLjAzZW07XG4gICAgcGFkZGluZzogNTBweDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWF4LXdpZHRoOiA3NSU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIC50aW1lbGluZSB7XG4gICAgICAgIG1heC13aWR0aDogOTglO1xuICAgICAgICBwYWRkaW5nOiAyNXB4O1xuICAgIH1cbn1cblxuLnRpbWVsaW5lIGgxIHtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogMS40ZW07XG59XG5cbi50aW1lbGluZSBoMixcbi50aW1lbGluZSBoMyB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnRpbWVsaW5lIC5ldmVudCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZThlYmYxO1xuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAudGltZWxpbmUgLmV2ZW50IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgfVxufVxuXG4udGltZWxpbmUgLmV2ZW50Omxhc3Qtb2YtdHlwZSB7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi50aW1lbGluZSAuZXZlbnQ6YmVmb3JlLFxuLnRpbWVsaW5lIC5ldmVudDphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRvcDogMDtcbn1cblxuLnRpbWVsaW5lIC5ldmVudDpiZWZvcmUge1xuICAgIGxlZnQ6IC0yMDdweDtcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtZGF0ZSk7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICAgIG1pbi13aWR0aDogMTIwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIC50aW1lbGluZSAuZXZlbnQ6YmVmb3JlIHtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbn1cblxuLnRpbWVsaW5lIC5ldmVudDphZnRlciB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAzcHggIzcyN2NmNTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggIzcyN2NmNTtcbiAgICBsZWZ0OiAtNTUuOHB4O1xuICAgIC8vIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGhlaWdodDogOXB4O1xuICAgIHdpZHRoOiA5cHg7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB0b3A6IDVweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLnRpbWVsaW5lIC5ldmVudDphZnRlciB7XG4gICAgICAgIGxlZnQ6IC0zMS44cHg7XG4gICAgfVxufVxuXG4ucnRsIC50aW1lbGluZSB7XG4gICAgYm9yZGVyLWxlZnQ6IDA7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcbiAgICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAjNzI3Y2Y1O1xufVxuXG4ucnRsIC50aW1lbGluZSAuZXZlbnQ6OmJlZm9yZSB7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogLTE3MHB4O1xufVxuXG4ucnRsIC50aW1lbGluZSAuZXZlbnQ6OmFmdGVyIHtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAtNTUuOHB4O1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "L7hD":
    /*!*************************************************!*\
      !*** ./src/app/non-secure/faq/faq.component.ts ***!
      \*************************************************/

    /*! exports provided: FaqComponent */

    /***/
    function L7hD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FaqComponent", function () {
        return FaqComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FaqComponent = /*#__PURE__*/function () {
        function FaqComponent() {
          _classCallCheck(this, FaqComponent);
        }

        _createClass(FaqComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FaqComponent;
      }();

      FaqComponent.ɵfac = function FaqComponent_Factory(t) {
        return new (t || FaqComponent)();
      };

      FaqComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FaqComponent,
        selectors: [["app-faq"]],
        decls: 0,
        vars: 0,
        template: function FaqComponent_Template(rf, ctx) {},
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXEuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "Uyby":
    /*!*****************************************************************!*\
      !*** ./src/app/non-secure/player-info/player-info.component.ts ***!
      \*****************************************************************/

    /*! exports provided: PlayerInfoComponent */

    /***/
    function Uyby(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlayerInfoComponent", function () {
        return PlayerInfoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PlayerInfoComponent = /*#__PURE__*/function () {
        function PlayerInfoComponent() {
          _classCallCheck(this, PlayerInfoComponent);
        }

        _createClass(PlayerInfoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PlayerInfoComponent;
      }();

      PlayerInfoComponent.ɵfac = function PlayerInfoComponent_Factory(t) {
        return new (t || PlayerInfoComponent)();
      };

      PlayerInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PlayerInfoComponent,
        selectors: [["app-player-info"]],
        decls: 2,
        vars: 0,
        template: function PlayerInfoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "player-info works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGF5ZXItaW5mby5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    "dd6G":
    /*!***************************************************!*\
      !*** ./src/app/non-secure/home/home.component.ts ***!
      \***************************************************/

    /*! exports provided: HomeComponent */

    /***/
    function dd6G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent() {
          _classCallCheck(this, HomeComponent);
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)();
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 2,
        vars: 0,
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "home works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "f1wA":
    /*!***************************************************************!*\
      !*** ./src/app/non-secure/field-info/field-info.component.ts ***!
      \***************************************************************/

    /*! exports provided: FieldInfoComponent */

    /***/
    function f1wA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FieldInfoComponent", function () {
        return FieldInfoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FieldInfoComponent = /*#__PURE__*/function () {
        function FieldInfoComponent() {
          _classCallCheck(this, FieldInfoComponent);
        }

        _createClass(FieldInfoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "tab3LearnMore",
          value: function tab3LearnMore() {
            var dots = document.getElementById("dots-tab3");
            var moreText = document.getElementById("more-tab3");
            var btnText = document.getElementById("btn-tab3");

            if (dots.style.display === "none") {
              dots.style.display = "inline";
              btnText.innerHTML = "Read more";
              moreText.style.display = "none";
            } else {
              dots.style.display = "none";
              btnText.innerHTML = "Read less";
              moreText.style.display = "inline";
            }
          }
        }, {
          key: "tab2LearnMore",
          value: function tab2LearnMore() {
            var dots = document.getElementById("dots-tab2");
            var moreText = document.getElementById("more-tab2");
            var btnText = document.getElementById("btn-tab2");

            if (dots.style.display === "none") {
              dots.style.display = "inline";
              btnText.innerHTML = "Read more";
              moreText.style.display = "none";
            } else {
              dots.style.display = "none";
              btnText.innerHTML = "Read less";
              moreText.style.display = "inline";
            }
          }
        }, {
          key: "tab1LearnMore",
          value: function tab1LearnMore() {
            var dots = document.getElementById("dots-tab1");
            var moreText = document.getElementById("more-tab1");
            var btnText = document.getElementById("btn-tab1");

            if (dots.style.display === "none") {
              dots.style.display = "inline";
              btnText.innerHTML = "Read more";
              moreText.style.display = "none";
            } else {
              dots.style.display = "none";
              btnText.innerHTML = "Read less";
              moreText.style.display = "inline";
            }
          }
        }]);

        return FieldInfoComponent;
      }();

      FieldInfoComponent.ɵfac = function FieldInfoComponent_Factory(t) {
        return new (t || FieldInfoComponent)();
      };

      FieldInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FieldInfoComponent,
        selectors: [["app-field-info"]],
        decls: 112,
        vars: 0,
        consts: [[1, "custom_skirmesh"], [1, "cust_skirmesh_board"], [1, "container"], [1, "row"], [1, "col-md-4"], [1, "blog-card", "blog-card-blog"], [1, "blog-card-image"], ["href", "#"], ["src", "../../../assets/images/soldierA.jpg", 1, "img"], [1, "ripple-cont"], [1, "blog-table"], [1, "blog-category", "blog-text-success"], [1, "far", "fa-newspaper"], [1, "blog-card-caption"], [1, "blog-card-description"], ["id", "dots-tab1"], ["id", "more-tab1"], [1, "ftr"], [1, "author"], ["id", "btn-tab1", 1, "btn", "btn-outline-success", 3, "click"], ["src", "../../../assets/images/soldierB.jpg", 1, "img"], [1, "fas", "fa-blog"], ["id", "dots-tab2"], ["id", "more-tab2"], ["id", "btn-tab2", 1, "btn", "btn-outline-success", 3, "click"], ["src", "../../../assets/images/soldierC.jpg", 1, "img"], ["id", "dots-tab3"], ["id", "more-tab3"], ["id", "btn-tab3", 1, "btn", "btn-outline-success", 3, "click"], [1, "col"], ["role", "form", "name", "ajax-form", "id", "ajax-form", "action", "https://formsubmit.io/send/bharath.ram89@gmail.com", "method", "post", 1, "cust_skirmesh_board", "form-main"], [1, "text-center", "center-cust"], [1, "form-group"], ["for", "name2"], ["id", "name2", "name", "name", "onblur", "if(this.value == '') this.value='Name'", "onfocus", "if(this.value == 'Name') this.value=''", "type", "text", "value", "Name", 1, "form-control"], ["id", "err-name", 1, "error", 2, "display", "none"], ["for", "email2"], ["id", "email2", "name", "email", "type", "text", "onfocus", "if(this.value == 'E-mail') this.value='';", "onblur", "if(this.value == '') this.value='E-mail';", "value", "E-mail", 1, "form-control"], ["id", "err-emailvld", 1, "error", 2, "display", "none"], ["for", "message2"], ["id", "message2", "name", "message", "rows", "5", "onblur", "if(this.value == '') this.value='Message'", "onfocus", "if(this.value == 'Message') this.value=''", 1, "form-control"], ["id", "err-message", 1, "error", 2, "display", "none"], [1, "col-xs-12"], ["id", "ajaxsuccess", 1, "text-success"], ["id", "err-form", 1, "error", 2, "display", "none"], ["id", "err-timedout", 1, "error"], ["id", "err-state", 1, "error"], ["type", "submit", "id", "send", 1, "btn", "btn-primary", "btn-shadow", "btn-rounded", "w-md"]],
        template: function FieldInfoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Take Airsoft into the future");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Turn your Airsoft Field into a video game");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h6", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " News");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h4", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Enhanced Safety");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Deploy marshals to maintain player safety and fair gameplay - let our system worry about keeping track of who\u2019s where and done what. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Our system maintains accurate point tally, objective control status, and general gameplay accountability among as many objectives you want, which allows marshals to focus on player safety rather than get distracted verifying objective ownership or other sundry gameday tasks that should be and are automated by Skirmesh gaming systems.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FieldInfoComponent_Template_button_click_29_listener() {
              return ctx.tab1LearnMore();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Learn More ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h6", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " News");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h4", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Fan Favorite Missions - Digitized");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Point Capture. Bomb. Medic stations and more. All digitized, overlaid on your field map, and linked to the cloud to allow the Commanding Officers, players, or anyone in the world to watch the action in real time. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Games are easy to start, pause, stop, resume, and are archived automatically. Our proprietary rule set ensures fair gameplay and accountable action for every player. Skirmesh is an expandable system with deployable objectives(nodes). Each can serve a variety of functions and can be configured to create diabolic scenarios that challenge tactics and teamwork of the most skilled players. Control the \u201Cworth\u201D of an objective in an assault to steer the fight or allow teams to capture, destroy entire objectives to remove them from play, and establish forward operating bases complete with a medic station to enhance the team footprint and dominance on the field. Every detail is configurable in real time to provide the gameplay mastermind the ability to shift the fight on the fly. Simply put, this system gives purpose and structure to otherwise chaotic scenarios.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FieldInfoComponent_Template_button_click_52_listener() {
              return ctx.tab2LearnMore();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Learn More ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h6", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " News");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h4", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "New Customer Engagement Channels");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Personalized player profiles linked to unique RFID bracelets give you and your customers new insight into Airsoft gameplay. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Players are able to review objectives captured, breach assists, and how frequently they play. As we continue to develop the system, we will provide more detail and coverage of stats and actions. Fields can better understand customer acquisition as we will can identify unique and repeat customers to provide a broad based customer value datastream.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FieldInfoComponent_Template_button_click_75_listener() {
              return ctx.tab3LearnMore();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Learn More ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "form", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h4", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Interested in bringing your field to the future? Message us here ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "label", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "input", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Please enter name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "label", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "input", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "E-mail is not a valid format");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "label", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Message");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "textarea", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Message");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Please enter message");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "E-mail was successfully sent.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "There was a problem validating the form please check!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "The connection to the server timed out!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "button", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Submit");

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
        styles: [".custom_skirmesh[_ngcontent-%COMP%] {\n  background-image: url('soldierB.jpg');\n  min-height: 500px;\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.container[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.cust_skirmesh_board[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  background-color: #e3d1b3;\n  max-width: 1140px;\n  margin-right: auto;\n  margin-left: auto;\n  padding: 10px;\n}\n\n#more-tab3[_ngcontent-%COMP%] {\n  display: none;\n}\n\n#more-tab2[_ngcontent-%COMP%] {\n  display: none;\n}\n\n#more-tab1[_ngcontent-%COMP%] {\n  display: none;\n}\n\nh3[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 10px;\n  color: black;\n}\n\nh4[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 10px;\n  color: black;\n}\n\n.row[_ngcontent-%COMP%] {\n  margin-right: 0px;\n  margin-left: 0px;\n}\n\n#ajaxsuccess[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 100%;\n  display: none;\n  clear: both;\n  margin: 8px 0px;\n}\n\n.error[_ngcontent-%COMP%] {\n  margin: 8px 0px;\n  display: none;\n  color: red;\n}\n\n.blog-card-blog[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n\n.blog-card[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  width: 100%;\n  margin-bottom: 30px;\n  border-radius: 6px;\n  color: rgba(0, 0, 0, 0.87);\n  background: #fff;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.blog-card[_ngcontent-%COMP%]   .blog-card-image[_ngcontent-%COMP%] {\n  height: 60%;\n  position: relative;\n  overflow: hidden;\n  margin-left: 15px;\n  margin-right: 15px;\n  margin-top: -30px;\n  border-radius: 6px;\n  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n}\n\n.blog-card[_ngcontent-%COMP%]   .blog-card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 6px;\n  pointer-events: none;\n}\n\n.blog-card[_ngcontent-%COMP%]   .blog-table[_ngcontent-%COMP%] {\n  padding: 15px 30px;\n}\n\n.blog-table[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n\n.blog-category[_ngcontent-%COMP%] {\n  position: relative;\n  line-height: 0;\n  margin: 15px 0;\n}\n\n.blog-text-success[_ngcontent-%COMP%] {\n  color: #28a745 !important;\n}\n\n.blog-card-blog[_ngcontent-%COMP%]   .blog-card-caption[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.blog-card-caption[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-family: \"Roboto Slab\", \"Times New Roman\", serif;\n}\n\n.fa[_ngcontent-%COMP%] {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.blog-card-caption[_ngcontent-%COMP%], .blog-card-caption[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #333;\n  text-decoration: none;\n}\n\np[_ngcontent-%COMP%] {\n  color: #3C4857;\n}\n\np[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\n.blog-card[_ngcontent-%COMP%]   .ftr[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n.blog-card[_ngcontent-%COMP%]   .ftr[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%] {\n  color: #888;\n}\n\n.blog-card[_ngcontent-%COMP%]   .ftr[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.blog-card[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  overflow: hidden;\n  border-radius: 50%;\n  margin-right: 5px;\n}\n\n.blog-card[_ngcontent-%COMP%]   .ftr[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%] {\n  position: relative;\n  top: 1px;\n  font-size: 14px;\n}\n\n.blog-card[_ngcontent-%COMP%]   .ftr[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%] {\n  float: right;\n  line-height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ZpZWxkLWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxxQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFBSjs7QUFHQTtFQUNJLGdCQUFBO0FBQUo7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUNFO0VBQ0ksYUFBQTtBQUVOOztBQUFFO0VBQ0UsYUFBQTtBQUdKOztBQURJO0VBQ0ksYUFBQTtBQUlSOztBQUZFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFLSjs7QUFIRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBTUo7O0FBREU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBSUo7O0FBRkU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUtKOztBQUhBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FBTUo7O0FBSkU7RUFDSSxnQkFBQTtBQU9OOztBQUxFO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLCtHQUFBO0FBUU47O0FBTkU7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUhBQUE7QUFTTjs7QUFQRTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQVVOOztBQVJFO0VBQ0ksa0JBQUE7QUFXTjs7QUFURTtFQUNJLGtCQUFBO0FBWU47O0FBVkU7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBYU47O0FBWEU7RUFDSSx5QkFBQTtBQWNOOztBQVpFO0VBQ0ksZUFBQTtBQWVOOztBQWJFO0VBQ0ksZ0JBQUE7RUFDQSxvREFBQTtBQWdCTjs7QUFkRTtFQUNJLHFCQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBQWlCTjs7QUFmRTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtBQWtCTjs7QUFmRTtFQUNJLGNBQUE7QUFrQk47O0FBZkU7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFrQk47O0FBaEJFO0VBQ0ksZ0JBQUE7QUFtQk47O0FBakJFO0VBQ0ksV0FBQTtBQW9CTjs7QUFqQkU7RUFDSSxxQkFBQTtBQW9CTjs7QUFsQkU7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQXFCTjs7QUFuQkU7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FBc0JOOztBQXBCRTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQXVCTiIsImZpbGUiOiJmaWVsZC1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICBcbi5jdXN0b21fc2tpcm1lc2h7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NvbGRpZXJCLmpwZycpO1xuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBcbn1cbi5jb250YWluZXJ7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5jdXN0X3NraXJtZXNoX2JvYXJkeyAgIFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgI2UzZDFiMztcbiAgICBtYXgtd2lkdGg6IDExNDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgcGFkZGluZzogMTBweDtcbn1cbiAgI21vcmUtdGFiM3tcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgI21vcmUtdGFiMntcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAjbW9yZS10YWIxe1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgaDN7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICBoNHtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIC8vIG1hcmdpbi10b3A6NTBweDtcbiAgfVxuXG5cbiAgLnJvd3tcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xufVxuICAjYWpheHN1Y2Nlc3Mge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGNsZWFyOiBib3RoO1xuICAgIG1hcmdpbjogOHB4IDBweDtcbiAgfVxuLmVycm9yIHtcbiAgICBtYXJnaW46IDhweCAwcHg7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBjb2xvcjogcmVkO1xuICB9XG4gIC5ibG9nLWNhcmQtYmxvZyB7XG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG4gIC5ibG9nLWNhcmQge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICB9XG4gIC5ibG9nLWNhcmQgLmJsb2ctY2FyZC1pbWFnZSB7XG4gICAgICBoZWlnaHQ6IDYwJTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgIG1hcmdpbi10b3A6IC0zMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgYm94LXNoYWRvdzogMCAxNnB4IDM4cHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjU2KSwgMCA0cHggMjVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgfVxuICAuYmxvZy1jYXJkIC5ibG9nLWNhcmQtaW1hZ2UgaW1nIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgLmJsb2ctY2FyZCAuYmxvZy10YWJsZSB7XG4gICAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XG4gIH1cbiAgLmJsb2ctdGFibGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG4gIC5ibG9nLWNhdGVnb3J5IHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgICAgbWFyZ2luOiAxNXB4IDA7XG4gIH1cbiAgLmJsb2ctdGV4dC1zdWNjZXNzIHtcbiAgICAgIGNvbG9yOiAjMjhhNzQ1IWltcG9ydGFudDtcbiAgfVxuICAuYmxvZy1jYXJkLWJsb2cgLmJsb2ctY2FyZC1jYXB0aW9uIHtcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgfVxuICAuYmxvZy1jYXJkLWNhcHRpb24ge1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90byBTbGFiXCIsIFwiVGltZXMgTmV3IFJvbWFuXCIsIHNlcmlmO1xuICB9XG4gIC5mYSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxNHB4LzEgRm9udEF3ZXNvbWU7XG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICB0ZXh0LXJlbmRlcmluZzogYXV0bztcbiAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgfVxuICAuYmxvZy1jYXJkLWNhcHRpb24sIC5ibG9nLWNhcmQtY2FwdGlvbiBhIHtcbiAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gIFxuICBwIHtcbiAgICAgIGNvbG9yOiAjM0M0ODU3O1xuICB9XG4gIFxuICBwIHtcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG4gIC5ibG9nLWNhcmQgLmZ0ciB7XG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICB9XG4gIC5ibG9nLWNhcmQgLmZ0ciAuYXV0aG9yIHtcbiAgICAgIGNvbG9yOiAjODg4O1xuICB9XG4gIFxuICAuYmxvZy1jYXJkIC5mdHIgZGl2IHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAuYmxvZy1jYXJkIC5hdXRob3IgLmF2YXRhciB7XG4gICAgICB3aWR0aDogMzZweDtcbiAgICAgIGhlaWdodDogMzZweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgfVxuICAuYmxvZy1jYXJkIC5mdHIgLnN0YXRzIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRvcDogMXB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC5ibG9nLWNhcmQgLmZ0ciAuc3RhdHMge1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIH0iXX0= */"]
      });
      /***/
    },

    /***/
    "ihVn":
    /*!*********************************************************************!*\
      !*** ./src/app/non-secure/features-list/features-list.component.ts ***!
      \*********************************************************************/

    /*! exports provided: FeaturesListComponent */

    /***/
    function ihVn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeaturesListComponent", function () {
        return FeaturesListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FeaturesListComponent = /*#__PURE__*/function () {
        function FeaturesListComponent() {
          _classCallCheck(this, FeaturesListComponent);
        }

        _createClass(FeaturesListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FeaturesListComponent;
      }();

      FeaturesListComponent.ɵfac = function FeaturesListComponent_Factory(t) {
        return new (t || FeaturesListComponent)();
      };

      FeaturesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FeaturesListComponent,
        selectors: [["app-features-list"]],
        decls: 86,
        vars: 0,
        consts: [[1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-8", "col-md-10", "col-12"], [1, "mt-4"], [1, "p-2", "bg-light", "shadow", "rounded", "text-success"], [1, "list-unstyled", "mt-3"], [1, "text-muted", "ml-3"], [1, "mdi", "mdi-circle-medium", "mr-2"], ["href", "#", 1, "btn", "btn-primary"]],
        template: function FeaturesListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "features-list works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Version 1.3.8");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " - 4th Jun 2020");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Latest Update Bootstrap v4.5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Latest Update jQuery v3.5.1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Latest Update Material Design Icons v5.3.45");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "New ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "RTL Version");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " (Only CSS Base)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "New ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Dark Version");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " (Only CSS Base)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "New ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Dark RTL Version");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " (Only CSS Base)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Added 6 Colors scheme");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Fixed some responsive issues");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h5", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Version 1.3.0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " - 28t May 2020");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Latest Update Material Design Icons v5.3.45");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "New ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "RTL Version");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " (Only CSS Base)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "New ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Dark Version");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " (Only CSS Base)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "New ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Dark RTL Version");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " (Only CSS Base)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Added 6 Colors scheme");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Fixed some responsive issues");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h5", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Version 1.0.0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " - 4th March, 2020");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Initial Released");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Purchase Now");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWF0dXJlcy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "rhqG":
    /*!****************************************************!*\
      !*** ./src/app/non-secure/non-secure.component.ts ***!
      \****************************************************/

    /*! exports provided: NonSecureComponent */

    /***/
    function rhqG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NonSecureComponent", function () {
        return NonSecureComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _global_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../global/header/header.component */
      "sqTj");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _global_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../global/footer/footer.component */
      "HNvH");

      var NonSecureComponent = /*#__PURE__*/function () {
        function NonSecureComponent() {
          _classCallCheck(this, NonSecureComponent);
        }

        _createClass(NonSecureComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NonSecureComponent;
      }();

      NonSecureComponent.ɵfac = function NonSecureComponent_Factory(t) {
        return new (t || NonSecureComponent)();
      };

      NonSecureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NonSecureComponent,
        selectors: [["app-non-secure"]],
        decls: 3,
        vars: 0,
        template: function NonSecureComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
          }
        },
        directives: [_global_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _global_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub24tc2VjdXJlLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "yAZj":
    /*!***************************************************************!*\
      !*** ./src/app/non-secure/contact-us/contact-us.component.ts ***!
      \***************************************************************/

    /*! exports provided: ContactUsComponent */

    /***/
    function yAZj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function () {
        return ContactUsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ContactUsComponent = /*#__PURE__*/function () {
        function ContactUsComponent() {
          _classCallCheck(this, ContactUsComponent);
        }

        _createClass(ContactUsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ContactUsComponent;
      }();

      ContactUsComponent.ɵfac = function ContactUsComponent_Factory(t) {
        return new (t || ContactUsComponent)();
      };

      ContactUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ContactUsComponent,
        selectors: [["app-contact-us"]],
        decls: 75,
        vars: 0,
        consts: [[1, "custom_skirmesh"], [1, "container"], [1, "row", "center-cust", "cust_skirmesh_board"], [1, "text-center"], [1, "row", "text-center", "cust_skirmesh_board"], [1, "col-sm-4"], [1, "contact-detail-box"], [1, "fa", "fa-th", "fa-3x", "text-colored"], ["title", "Phone"], ["href", "mailto:skirmesh.net@gmail.com", 1, "text-muted"], [1, "fa", "fa-map-marker", "fa-3x", "text-colored"], [1, "fa", "fa-book", "fa-3x", "text-colored"], [1, "row", 2, "padding-top", "30px"], [1, "col-sm-6"], [1, "contact-map"], ["src", "https://www.google.com/maps/embed/v1/place?q=New+York+University&key=AIzaSyD4h-WYczU9DBnRPHAz5lUCo88C9IZrM7k", "frameborder", "0", "scrolling", "no", "marginheight", "0", "marginwidth", "0", 2, "width", "100%", "height", "360px"], ["role", "form", "name", "ajax-form", "id", "ajax-form", "action", "https://formsubmit.io/send/bharath.ram89@gmail.com", "method", "post", 1, "cust_skirmesh_board", "form-main"], [1, "text-center", "center-cust"], [1, "form-group"], ["for", "name2"], ["id", "name2", "name", "name", "onblur", "if(this.value == '') this.value='Name'", "onfocus", "if(this.value == 'Name') this.value=''", "type", "text", "value", "Name", 1, "form-control"], ["id", "err-name", 1, "error", 2, "display", "none"], ["for", "email2"], ["id", "email2", "name", "email", "type", "text", "onfocus", "if(this.value == 'E-mail') this.value='';", "onblur", "if(this.value == '') this.value='E-mail';", "value", "E-mail", 1, "form-control"], ["id", "err-emailvld", 1, "error", 2, "display", "none"], ["for", "message2"], ["id", "message2", "name", "message", "rows", "5", "onblur", "if(this.value == '') this.value='Message'", "onfocus", "if(this.value == 'Message') this.value=''", 1, "form-control"], ["id", "err-message", 1, "error", 2, "display", "none"], [1, "row"], [1, "col-xs-12"], ["id", "ajaxsuccess", 1, "text-success"], ["id", "err-form", 1, "error", 2, "display", "none"], ["id", "err-timedout", 1, "error"], ["id", "err-state", 1, "error"], ["type", "submit", "id", "send", 1, "btn", "btn-primary", "btn-shadow", "btn-rounded", "w-md"]],
        template: function ContactUsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Get In Touch");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Phone/Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "P:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " (123) 456-7890");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " E: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "skirmesh.net@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Our Locations");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " San Francisco, CA 94107");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Chesapeake, VA 23322");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Charleston, SC 29407");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "24x7 Support");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "SLA of less than 48hrs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "iframe", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "form", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Message us here ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Please enter name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "E-mail is not a valid format");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Message");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "textarea", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Message");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Please enter message");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "E-mail was successfully sent.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "There was a problem validating the form please check!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "The connection to the server timed out!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Submit");

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
        styles: ["body[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.center-cust[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n.cust_skirmesh_board[_ngcontent-%COMP%] {\n  background-color: #e3d1b3;\n  padding: 10px;\n}\n\n.row[_ngcontent-%COMP%] {\n  margin-right: 0px;\n  margin-left: 0px;\n}\n\n.custom_skirmesh[_ngcontent-%COMP%] {\n  background-image: url('soldierB.jpg');\n  min-height: 500px;\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding-top: 30px;\n  padding-bottom: 30px;\n}\n\n\n\n.form-control[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n  outline: none !important;\n  border: 2px solid #cecece;\n  height: 38px;\n}\n\n.form-control[_ngcontent-%COMP%]:hover, .form-control[_ngcontent-%COMP%]:focus {\n  border-color: #97a0af;\n}\n\n.error[_ngcontent-%COMP%] {\n  margin: 8px 0px;\n  display: none;\n  color: red;\n}\n\n#ajaxsuccess[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 100%;\n  display: none;\n  clear: both;\n  margin: 8px 0px;\n}\n\n.con_sub_text[_ngcontent-%COMP%] {\n  margin: 20px 0px;\n  font-size: 15px;\n}\n\n.contact-detail-box[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n\n.contact-detail-box[_ngcontent-%COMP%]   address[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.contact-map[_ngcontent-%COMP%] {\n  background-color: #ededed;\n}\n\n.title-box[_ngcontent-%COMP%]   .border[_ngcontent-%COMP%], .btn-primary[_ngcontent-%COMP%], .back-to-top[_ngcontent-%COMP%], .logo[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .question-q-box[_ngcontent-%COMP%], .social-circle[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #223b04 !important;\n}\n\n.title-box[_ngcontent-%COMP%]   .title-alt[_ngcontent-%COMP%], .text-colored[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .navbar-custom[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .navbar-custom[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .navbar-custom[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active, .navbar-custom[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #f16000;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  border: 1px solid #f16000 !important;\n}\n\n.btn-primary[_ngcontent-%COMP%]:hover, .btn-primary[_ngcontent-%COMP%]:focus, .btn-primary[_ngcontent-%COMP%]:active, .btn-primary.active[_ngcontent-%COMP%], .btn-primary.focus[_ngcontent-%COMP%], .btn-primary[_ngcontent-%COMP%]:active, .btn-primary[_ngcontent-%COMP%]:focus, .btn-primary[_ngcontent-%COMP%]:hover, .open[_ngcontent-%COMP%]    > .dropdown-toggle.btn-primary[_ngcontent-%COMP%], .btn-primary.active.focus[_ngcontent-%COMP%], .btn-primary.active[_ngcontent-%COMP%]:focus, .btn-primary.active[_ngcontent-%COMP%]:hover, .btn-primary[_ngcontent-%COMP%]:active.focus, .btn-primary[_ngcontent-%COMP%]:active:focus, .btn-primary[_ngcontent-%COMP%]:active:hover, .open[_ngcontent-%COMP%]    > .dropdown-toggle.btn-primary.focus[_ngcontent-%COMP%], .open[_ngcontent-%COMP%]    > .dropdown-toggle.btn-primary[_ngcontent-%COMP%]:focus, .open[_ngcontent-%COMP%]    > .dropdown-toggle.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #d85600 !important;\n  border: 1px solid #d85600 !important;\n}\n\n.btn-shadow.btn-primary[_ngcontent-%COMP%] {\n  box-shadow: 1px 5px 9px rgba(241, 96, 1, 0.32);\n}\n\n\n\n@media (min-width: 768px) {\n  .nav-custom-left[_ngcontent-%COMP%] {\n    margin-left: 5%;\n  }\n\n  .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    padding-top: 10px;\n    padding-bottom: 10px;\n  }\n\n  .contact-page[_ngcontent-%COMP%]   .col-sm-6[_ngcontent-%COMP%] {\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n}\n\n@media (max-width: 768px) {\n  .navbar-custom[_ngcontent-%COMP%] {\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);\n  }\n\n  .screen-space[_ngcontent-%COMP%] {\n    margin: 0px auto 50px auto;\n  }\n\n  .feature-detail[_ngcontent-%COMP%] {\n    padding: 0px 0px 50px 30px !important;\n  }\n\n  .footer[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n}\n\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .blog-wrapper[_ngcontent-%COMP%]   .blog-item[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n\n  .navbar-custom[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n\n  .blog-detail-box[_ngcontent-%COMP%] {\n    padding-right: 0px;\n  }\n}\n\n@media (max-width: 767px) {\n  .blog-wrapper[_ngcontent-%COMP%]   .blog-item[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .logo[_ngcontent-%COMP%] {\n    margin-top: 7px;\n  }\n\n  .blog-detail-box[_ngcontent-%COMP%] {\n    padding-right: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvbnRhY3QtdXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBSyxnQkFBQTtBQUVMOztBQUFBO0VBQ0ksdUJBQUE7QUFHSjs7QUFEQTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtBQUlKOztBQUZBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQUtKOztBQUhBO0VBQ0kscUNBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQU1KOztBQUpBLHlCQUFBOztBQUVBO0VBQ0UsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQU1GOztBQUpBO0VBQ0UscUJBQUE7QUFPRjs7QUFIQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQU1GOztBQUpBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFPRjs7QUFMQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQVFGOztBQUxBO0VBQ0UsbUJBQUE7QUFRRjs7QUFMQTtFQUNFLGVBQUE7QUFRRjs7QUFOQTtFQUNFLHlCQUFBO0FBU0Y7O0FBTkE7O0VBRUUsb0NBQUE7QUFTRjs7QUFQQTs7Ozs7RUFLRSxjQUFBO0FBVUY7O0FBUEE7RUFDRSxvQ0FBQTtBQVVGOztBQVJBOzs7Ozs7Ozs7Ozs7Ozs7RUFlRSxvQ0FBQTtFQUNBLG9DQUFBO0FBV0Y7O0FBUkE7RUFDRSw4Q0FBQTtBQVdGOztBQU5BLDRCQUFBOztBQUNBO0VBQ0k7SUFDRixlQUFBO0VBU0E7O0VBUEE7SUFDRSxpQkFBQTtJQUNBLG9CQUFBO0VBVUY7O0VBUkE7SUFDRSxrQkFBQTtJQUNBLG1CQUFBO0VBV0Y7QUFDRjs7QUFSQTtFQUNFO0lBR0Usd0NBQUE7RUFVRjs7RUFSQTtJQUNFLDBCQUFBO0VBV0Y7O0VBVEE7SUFDRSxxQ0FBQTtFQVlGOztFQVZBO0lBQ0UsZ0JBQUE7RUFhRjtBQUNGOztBQVRBO0VBQ0U7SUFDRSxVQUFBO0VBV0Y7O0VBVEE7SUFDRSxlQUFBO0VBWUY7O0VBVkE7SUFDQSxrQkFBQTtFQWFBO0FBQ0Y7O0FBUkE7RUFDRTtJQUNFLFdBQUE7RUFVRjs7RUFSQTtJQUNFLGVBQUE7RUFXRjs7RUFUQTtJQUNBLGtCQUFBO0VBWUE7QUFDRiIsImZpbGUiOiJjb250YWN0LXVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXttYXJnaW4tdG9wOjIwcHg7fVxuXG4uY2VudGVyLWN1c3R7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uY3VzdF9za2lybWVzaF9ib2FyZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgI2UzZDFiMztcbiAgICBwYWRkaW5nOiAxMHB4Oztcbn1cbi5yb3d7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cbi5jdXN0b21fc2tpcm1lc2h7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NvbGRpZXJCLmpwZycpO1xuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cbi8qPT09PT09PSBDb250YWN0ID09PT09PSovXG5cbi5mb3JtLWNvbnRyb2wge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAycHggc29saWQgI2NlY2VjZTtcbiAgaGVpZ2h0OiAzOHB4O1xufVxuLmZvcm0tY29udHJvbDpob3ZlciAsLmZvcm0tY29udHJvbDpmb2N1c3tcbiAgYm9yZGVyLWNvbG9yOiAjOTdhMGFmO1xufVxuXG5cbi5lcnJvciB7XG4gIG1hcmdpbjogOHB4IDBweDtcbiAgZGlzcGxheTogbm9uZTtcbiAgY29sb3I6IHJlZDtcbn1cbiNhamF4c3VjY2VzcyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGNsZWFyOiBib3RoO1xuICBtYXJnaW46IDhweCAwcHg7XG59XG4uY29uX3N1Yl90ZXh0IHtcbiAgbWFyZ2luOiAyMHB4IDBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uY29udGFjdC1kZXRhaWwtYm94IHtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLmNvbnRhY3QtZGV0YWlsLWJveCBhZGRyZXNzIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmNvbnRhY3QtbWFwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcbn1cblxuLnRpdGxlLWJveCAuYm9yZGVyLC5idG4tcHJpbWFyeSwuYmFjay10by10b3AsXG4ubG9nbyBpLC5xdWVzdGlvbi1xLWJveCwuc29jaWFsLWNpcmNsZSBsaSBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyM2IwNCAhaW1wb3J0YW50O1xufVxuLnRpdGxlLWJveCAudGl0bGUtYWx0LC50ZXh0LWNvbG9yZWQsLmZvb3RlciBhOmhvdmVyLFxuLm5hdmJhci1jdXN0b20gLm5hdmJhci1uYXYgbGkgYTpob3Zlcixcbi5uYXZiYXItY3VzdG9tIC5uYXZiYXItbmF2IGxpIGE6Zm9jdXMsXG4ubmF2YmFyLWN1c3RvbSAubmF2YmFyLW5hdiBsaSBhOmFjdGl2ZSxcbi5uYXZiYXItY3VzdG9tIC5uYXZiYXItbmF2IGxpLmFjdGl2ZSBhIHtcbiAgY29sb3I6ICNmMTYwMDA7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMTYwMDAgIWltcG9ydGFudDtcbn1cbi5idG4tcHJpbWFyeTpob3Zlcixcbi5idG4tcHJpbWFyeTpmb2N1cyxcbi5idG4tcHJpbWFyeTphY3RpdmUsXG4uYnRuLXByaW1hcnkuYWN0aXZlLFxuLmJ0bi1wcmltYXJ5LmZvY3VzLFxuLmJ0bi1wcmltYXJ5OmFjdGl2ZSxcbi5idG4tcHJpbWFyeTpmb2N1cyxcbi5idG4tcHJpbWFyeTpob3Zlcixcbi5vcGVuID4gLmRyb3Bkb3duLXRvZ2dsZS5idG4tcHJpbWFyeSxcbi5idG4tcHJpbWFyeS5hY3RpdmUuZm9jdXMsIC5idG4tcHJpbWFyeS5hY3RpdmU6Zm9jdXMsIFxuLmJ0bi1wcmltYXJ5LmFjdGl2ZTpob3ZlciwgLmJ0bi1wcmltYXJ5OmFjdGl2ZS5mb2N1cywgXG4uYnRuLXByaW1hcnk6YWN0aXZlOmZvY3VzLCAuYnRuLXByaW1hcnk6YWN0aXZlOmhvdmVyLCBcbi5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLXByaW1hcnkuZm9jdXMsIFxuLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4tcHJpbWFyeTpmb2N1cywgXG4ub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1wcmltYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q4NTYwMCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDg1NjAwICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tc2hhZG93LmJ0bi1wcmltYXJ5IHtcbiAgYm94LXNoYWRvdzogMXB4IDVweCA5cHggcmdiYSgyNDEsIDk2LCAxLCAwLjMyKTtcbn1cblxuXG5cbi8qPT09PT09PSBSZXNwb25zaXZlID09PT09PSovXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAubmF2LWN1c3RvbS1sZWZ0IHtcblx0XHRtYXJnaW4tbGVmdDogNSU7XG5cdH1cbiAgLm5hdmJhci1uYXY+bGk+YSB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIH1cbiAgLmNvbnRhY3QtcGFnZSAuY29sLXNtLTYge1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubmF2YmFyLWN1c3RvbSB7XG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogMCAycHggMnB4IHJnYmEoMCwwLDAsLjEpO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggMnB4IHJnYmEoMCwwLDAsLjEpO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKDAsMCwwLC4xKTtcbiAgfVxuICAuc2NyZWVuLXNwYWNlIHtcbiAgICBtYXJnaW46IDBweCBhdXRvIDUwcHggYXV0bztcbiAgfVxuICAuZmVhdHVyZS1kZXRhaWwge1xuICAgIHBhZGRpbmc6IDBweCAwcHggNTBweCAzMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZvb3RlciBoNSB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgfVxufVxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCl7XG4gIC5ibG9nLXdyYXBwZXIgLmJsb2ctaXRlbSB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAubmF2YmFyLWN1c3RvbSAubmF2YmFyLW5hdiBsaSBhIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgLmJsb2ctZGV0YWlsLWJveCB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY3cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCl7XG4gIFxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5ibG9nLXdyYXBwZXIgLmJsb2ctaXRlbSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmxvZ28ge1xuICAgIG1hcmdpbi10b3A6IDdweDtcbiAgfVxuICAuYmxvZy1kZXRhaWwtYm94IHtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xufVxufSJdfQ== */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=non-secure-non-secure-module-es5.js.map