webpackJsonp([7],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_hotspot__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_nfc__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the GuestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GuestPage = (function () {
    function GuestPage(loadingCtrl, navCtrl, navParams, alertctrl, nfc, ndef, hostpot) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertctrl = alertctrl;
        this.nfc = nfc;
        this.ndef = ndef;
        this.hostpot = hostpot;
        this.credentialsArray = [];
    }
    GuestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GuestPage');
        this.addNFCListener();
    };
    GuestPage.prototype.addNFCListener = function () {
        var _this = this;
        this.nfc.addNdefListener(function () {
        }, function (err) {
        }).subscribe(function (data) {
            var payload = data.tag.ndefMessage[0].payload;
            var tagContent = _this.nfc.bytesToString(payload).substring(3);
            _this.credentialsArray = tagContent.split('&%&');
            _this.presentLoadingDefault();
            console.log(tagContent);
            console.log(_this.credentialsArray[0] + " " + _this.credentialsArray[1]);
            console.log('it worked');
            _this.hostpot.connectToWifi(_this.credentialsArray[0], _this.credentialsArray[1]).then(function () {
            });
        });
    };
    GuestPage.prototype.presentLoadingDefault = function () {
        var loading = this.loadingCtrl.create({
            content: 'connecting...',
            spinner: 'dots'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 10000);
    };
    GuestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-guest',template:/*ion-inline-start:"/Users/kieran/Desktop/finalyearproject/frontendrest/src/pages/guest/guest.html"*/'<!--\n  Generated template for the GuestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>guest</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <h1>Connect to Wifi</h1>\n  <img src="./assets/imgs/nfclogo.png">\n</ion-content>\n'/*ion-inline-end:"/Users/kieran/Desktop/finalyearproject/frontendrest/src/pages/guest/guest.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_nfc__["a" /* NFC */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_nfc__["b" /* Ndef */], __WEBPACK_IMPORTED_MODULE_0__ionic_native_hotspot__["a" /* Hotspot */]])
    ], GuestPage);
    return GuestPage;
}());

//# sourceMappingURL=guest.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_hotspot__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_android_fingerprint_auth__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_authservice__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SignupPage = (function () {
    function SignupPage(navParams, storage, fingerprint, navCtrl, authservice, alertCtrl, hotspot) {
        this.navParams = navParams;
        this.storage = storage;
        this.fingerprint = fingerprint;
        this.navCtrl = navCtrl;
        this.authservice = authservice;
        this.alertCtrl = alertCtrl;
        this.hotspot = hotspot;
        this.newcreds = { name: '', password: '', wifi_ssid: '', wifi_password: '' };
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.hotspot.scanWifi().then(function (networks) {
            _this.networks = networks;
        });
    };
    SignupPage.prototype.register = function (user) {
        var _this = this;
        this.authservice.adduser(user).then(function (data) {
            if (data) {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Success',
                    subTitle: 'User Registered',
                    buttons: ['ok']
                });
                alert_1.present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
                _this.storeCredentials();
            }
        });
    };
    SignupPage.prototype.setWifiCredentials = function (wifi_ssid) {
        this.newcreds.wifi_ssid = wifi_ssid;
    };
    SignupPage.prototype.storeCredentials = function () {
        this.storage.set('username', this.newcreds.name);
        this.storage.set('password', this.newcreds.password);
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/kieran/Desktop/finalyearproject/frontendrest/src/pages/signup/signup.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>signup</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n <ion-list>\n   <ion-item>\n    <ion-label floating>Username</ion-label>\n    <ion-input [(ngModel)]=\'newcreds.name\' type=\'text\'></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Password</ion-label>\n    <ion-input [(ngModel)]=\'newcreds.password\' type=\'password\'></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating> Wireless Networks</ion-label>\n    <ion-select floating [(ngModel)]=\'newcreds.wifi_ssid\' (ionChange)="setWifiCredentials(newcreds.wifi_ssid)">\n      <ion-option *ngFor="let network of networks" [value]="network.SSID">{{network.SSID}}</ion-option>\n    </ion-select>\n  </ion-item>\n  \n  <ion-item>\n      <ion-label floating>Wireless Password</ion-label>\n      <ion-input [(ngModel)]="newcreds.wifi_password" type="password"></ion-input>\n    </ion-item>\n </ion-list>\n\n \n <button ion-button (click)=\'register(newcreds)\'>Register</button>\n\n \n</ion-content>\n\n\n'/*ion-inline-end:"/Users/kieran/Desktop/finalyearproject/frontendrest/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_android_fingerprint_auth__["a" /* AndroidFingerprintAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__services_authservice__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_hotspot__["a" /* Hotspot */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authservice__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_nfc__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the UserpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserPage = (function () {
    function UserPage(navCtrl, navParams, authservice, alertCtrl, nfc, ndef) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authservice = authservice;
        this.alertCtrl = alertCtrl;
        this.nfc = nfc;
        this.ndef = ndef;
        this.infobool = false;
        this.username = '';
        this.ssid = 'this is my ssid';
        this.wifi_password = ' ';
    }
    UserPage.prototype.ionViewDidEnter = function () {
        this.shareWifi();
    };
    UserPage.prototype.shareWifi = function () {
        var _this = this;
        this.authservice.getinfo().then(function (data) {
            if (data.success) {
                _this.username = data.username;
                console.log('current user: ' + data.username);
                _this.ssid = data.wifi_ssid;
                _this.wifi_password = data.wifi_password;
                _this.infobool = !_this.infobool;
                console.log(_this.ssid);
                console.log(_this.wifi_password);
                var creds_1 = _this.ssid + '&%&' + _this.wifi_password;
                console.log(creds_1);
                var message = _this.ndef.textRecord(creds_1, null, null);
                _this.nfc.share([message]).then(function () {
                    _this.alertCtrl.create({
                        title: 'Sent!',
                        subTitle: 'Your wifi credentials have been sent: ' + creds_1,
                        buttons: ['ok']
                    }).present();
                }).catch(function (err) {
                    console.log(err);
                });
            }
        });
    };
    UserPage.prototype.logout = function () {
        this.authservice.logout();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    UserPage.prototype.getInfo = function () {
        var _this = this;
        this.authservice.getinfo().then(function (data) {
            if (data.success) {
                var alert_1 = _this.alertCtrl.create({
                    title: data.success,
                    subTitle: data.msg,
                    buttons: ['ok']
                });
                alert_1.present(alert_1);
            }
        });
    };
    UserPage.prototype.getWifi = function () {
        var _this = this;
        this.authservice.getinfo().then(function (data) {
            if (data.success) {
                _this.username = data.username;
                console.log('current user: ' + data.username);
                _this.ssid = data.wifi_ssid;
                _this.wifi_password = data.wifi_password;
                _this.infobool = !_this.infobool;
                console.log(_this.ssid);
                console.log(_this.wifi_password);
            }
        });
    };
    UserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-userpage',template:/*ion-inline-start:"/Users/kieran/Desktop/finalyearproject/frontendrest/src/pages/userpage/userpage.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>NFConn</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h2>NFConn</h2>\n  <div *ngIf="infobool">\n    <p>Welcome {{ username }}!</p>\n    <p>Current Wifi Network: {{ ssid }}</p>\n  </div>\n  <img src="./assets/imgs/nfclogo.png">\n  <button ion-button (click)=\'logout()\'>Logout</button>\n  <button ion-button (click)=\'getInfo()\'>GetInfo</button>\n  <button ion-button (click)=\'getWifi()\'>getWifiCreds</button>\n</ion-content>\n'/*ion-inline-end:"/Users/kieran/Desktop/finalyearproject/frontendrest/src/pages/userpage/userpage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_authservice__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_nfc__["a" /* NFC */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_nfc__["b" /* Ndef */]])
    ], UserPage);
    return UserPage;
}());

//# sourceMappingURL=userpage.js.map

/***/ }),

/***/ 124:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 124;

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/guest/guest.module": [
		313,
		6
	],
	"../pages/legacyqr/legacyqr.module": [
		314,
		3
	],
	"../pages/settings/settings.module": [
		315,
		2
	],
	"../pages/signup/signup.module": [
		316,
		5
	],
	"../pages/tabs/tabs.module": [
		317,
		1
	],
	"../pages/userpage/userpage.module": [
		318,
		4
	],
	"../pages/wifilist/wifilist.module": [
		319,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 166;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(239);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_guest_guest__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_userpage_userpage__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_storage__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_android_fingerprint_auth__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_barcode_scanner__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_qrcode2__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_authservice__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_nfc__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_hotspot__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_userpage_userpage__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_guest_guest__["a" /* GuestPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_15_ngx_qrcode2__["a" /* NgxQRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/guest/guest.module#GuestPageModule', name: 'GuestPage', segment: 'guest', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/legacyqr/legacyqr.module#LegacyqrPageModule', name: 'LegacyqrPage', segment: 'legacyqr', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/userpage/userpage.module#UserpagePageModule', name: 'UserPage', segment: 'userpage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wifilist/wifilist.module#WifilistPageModule', name: 'WifilistPage', segment: 'wifilist', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_userpage_userpage__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_guest_guest__["a" /* GuestPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_16__services_authservice__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_nfc__["a" /* NFC */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_nfc__["b" /* Ndef */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_hotspot__["a" /* Hotspot */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_android_fingerprint_auth__["a" /* AndroidFingerprintAuth */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15_ngx_qrcode2__["a" /* NgxQRCodeModule */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/kieran/Desktop/finalyearproject/frontendrest/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/kieran/Desktop/finalyearproject/frontendrest/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.isLoggedin = false;
        this.http = http;
        this.isLoggedin = false;
        this.AuthToken = null;
    }
    AuthService.prototype.storeUserCredentials = function (token) {
        window.localStorage.setItem('kieran', token);
        this.useCredentials(token);
    };
    AuthService.prototype.useCredentials = function (token) {
        this.isLoggedin = true;
        this.AuthToken = token;
    };
    AuthService.prototype.loadUserCredentials = function () {
        var token = window.localStorage.getItem('kieran');
        this.useCredentials(token);
    };
    AuthService.prototype.destroyUserCredentials = function () {
        this.isLoggedin = false;
        this.AuthToken = null;
        window.localStorage.clear();
    };
    AuthService.prototype.authenticate = function (user) {
        var _this = this;
        var creds = "name=" + user.name + "&password=" + user.password;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return new Promise(function (resolve) {
            _this.http.post('http://54.88.11.212:3333/authenticate', creds, { headers: headers }).subscribe(function (data) {
                if (data.json().success) {
                    _this.storeUserCredentials(data.json().token);
                    resolve(true);
                }
                else
                    resolve(false);
            });
        });
    };
    AuthService.prototype.adduser = function (user) {
        var _this = this;
        var creds = "name=" + user.name + "&password=" + user.password + "&wifi_ssid=" + user.wifi_ssid + "&wifi_password=" + user.wifi_password;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return new Promise(function (resolve) {
            _this.http.post('http://54.88.11.212:3333/adduser', creds, { headers: headers }).subscribe(function (data) {
                if (data.json().success) {
                    resolve(true);
                }
                else
                    resolve(false);
            });
        });
    };
    AuthService.prototype.getinfo = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.loadUserCredentials();
            console.log(_this.AuthToken);
            headers.append('Authorization', 'Bearer ' + _this.AuthToken);
            _this.http.get('http://54.88.11.212:3333/getinfo', { headers: headers }).subscribe(function (data) {
                if (data.json().success)
                    resolve(data.json());
                else
                    resolve(false);
            });
        });
    };
    AuthService.prototype.getWifi = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.loadUserCredentials();
            console.log(_this.AuthToken);
            headers.append('Authorization', 'Bearer ' + _this.AuthToken);
            _this.http.get('http://54.88.11.212:3333/getWifi', { headers: headers }).subscribe(function (data) {
                if (data.json().success)
                    resolve(data.json());
                else
                    resolve(false);
            });
        });
    };
    AuthService.prototype.logout = function () {
        this.destroyUserCredentials();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=authservice.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_android_fingerprint_auth__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guest_guest__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_authservice__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__userpage_userpage__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__signup_signup__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = (function () {
    function HomePage(loadingCtrl, navCtrl, storage, fingerprint, authservice, alertCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.fingerprint = fingerprint;
        this.authservice = authservice;
        this.alertCtrl = alertCtrl;
        this.homePage = HomePage_1;
        this.usercreds = {
            name: '',
            password: ''
        };
    }
    HomePage_1 = HomePage;
    HomePage.prototype.ionViewDidLoad = function () {
        this.addFingerPrint();
    };
    HomePage.prototype.login = function (user) {
        var _this = this;
        this.authservice.authenticate(user).then(function (data) {
            if (data) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__userpage_userpage__["a" /* UserPage */], data);
            }
        });
    };
    HomePage.prototype.addFingerPrint = function () {
        var _this = this;
        this.fingerprint.isAvailable().then(function (result) {
            if (result.isAvailable) {
                _this.fingerprint.encrypt({ clientId: 'nfconn', username: 'user', password: 'password' })
                    .then(function (result) {
                    if (result.withFingerprint) {
                        _this.storage.get('username').then(function (data) {
                            _this.usercreds.name = data;
                            _this.presentLoadingDefault();
                        });
                        _this.storage.get('password').then(function (data) {
                            _this.usercreds.password = data;
                            _this.authservice.authenticate(_this.usercreds).then(function (data) {
                                if (data) {
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__userpage_userpage__["a" /* UserPage */], data);
                                }
                            });
                        });
                    }
                }).catch(function (err) {
                    console.log(err);
                });
            }
        });
    };
    HomePage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__signup_signup__["a" /* SignupPage */]);
    };
    HomePage.prototype.guestPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__guest_guest__["a" /* GuestPage */]);
    };
    HomePage.prototype.presentLoadingDefault = function () {
        var loading = this.loadingCtrl.create({
            content: 'Signing In',
            spinner: 'dots'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 1500);
    };
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/kieran/Desktop/finalyearproject/frontendrest/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      NFConn\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class=\'home\'>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>username</ion-label>\n      <ion-input [(ngModel)]=\'usercreds.name\' type=\'text\'></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>password</ion-label>\n      <ion-input [(ngModel)]=\'usercreds.password\' type=\'password\'></ion-input>\n    </ion-item>\n  </ion-list>\n  <button ion-button (click)=\'login(usercreds)\'>Login</button>\n  <button ion-button (click)=\'signup()\'>Sign up</button>\n  <button ion-button (click)=\'guestPage()\'>Recieve Wifi</button>\n  <hr>\n  <img src="./assets/imgs/nfclogo.png">\n  <hr>\n  <small>developed by Kieran Thompson</small>\n</ion-content> '/*ion-inline-end:"/Users/kieran/Desktop/finalyearproject/frontendrest/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_0__ionic_native_android_fingerprint_auth__["a" /* AndroidFingerprintAuth */], __WEBPACK_IMPORTED_MODULE_5__services_authservice__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[215]);
//# sourceMappingURL=main.js.map