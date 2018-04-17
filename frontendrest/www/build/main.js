webpackJsonp([5],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_hotspot__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authservice__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(48);
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
    function SignupPage(navParams, navCtrl, authservice, alertCtrl, hotspot) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.authservice = authservice;
        this.alertCtrl = alertCtrl;
        this.hotspot = hotspot;
        this.newcreds = { name: '', password: '', wifi_ssid: '', wifi_password: '' };
    }
    SignupPage.prototype.OnInit = function () {
    };
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
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
            }
        });
    };
    SignupPage.prototype.setWifiCredentials = function (wifi_ssid) {
        this.newcreds.wifi_ssid = wifi_ssid;
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/kieran/Desktop/finalyearproject/frontendrest/src/pages/signup/signup.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>signup</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n <ion-list>\n   <ion-item>\n    <ion-label floating>Username</ion-label>\n    <ion-input [(ngModel)]=\'newcreds.name\' type=\'text\'></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Password</ion-label>\n    <ion-input [(ngModel)]=\'newcreds.password\' type=\'password\'></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating> Wireless Networks</ion-label>\n    <ion-select floating [(ngModel)]=\'newcreds.wifi_ssid\' (ionChange)="setWifiCredentials(newcreds.wifi_ssid)">\n      <ion-option *ngFor="let network of networks" [value]="network.SSID">{{network.SSID}}</ion-option>\n    </ion-select>\n  </ion-item>\n  \n  <ion-item>\n      <ion-label floating>Wireless Password</ion-label>\n      <ion-input [(ngModel)]="newcreds.wifi_password" type="password"></ion-input>\n    </ion-item>\n </ion-list>\n\n \n <button ion-button (click)=\'register(newcreds)\'>Register</button>\n\n \n</ion-content>\n\n\n'/*ion-inline-end:"/Users/kieran/Desktop/finalyearproject/frontendrest/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__services_authservice__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_hotspot__["a" /* Hotspot */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authservice__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_nfc__ = __webpack_require__(159);
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
    }
    UserPage.prototype.resetScanData = function () {
        this.granted = false;
        this.scanned = false;
        this.tagId = "";
    };
    UserPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.nfc.enabled().then(function (resolve) {
            _this.addListenNFC();
            var successAlert = _this.alertCtrl.create({
                title: 'Success',
                subTitle: 'logged in successfully'
            });
            successAlert.present();
            alert('NFC IS SUPPORTED BY YOUR DEVICE');
        }).catch(function (reject) {
            alert('NFC IS NOT SUPPORTED BY YOUR DEVICE');
        });
    };
    UserPage.prototype.addListenNFC = function () {
        var _this = this;
        this.nfc.addTagDiscoveredListener(function (nfcEvent) { return _this.sesReadNFC(nfcEvent.tag); }).subscribe(function (data) {
            if (data && data.tag && data.tag.id) {
                var tagId = _this.nfc.bytesToHexString(data.tag.id);
                if (tagId) {
                    _this.tagId = tagId;
                    _this.scanned = true;
                    // only testing data consider to ask web api for access
                    _this.granted = [
                        "7d3c6179"
                    ].indexOf(tagId) != -1;
                }
                else {
                    alert('NFC_NOT_DETECTED');
                }
            }
        });
    };
    UserPage.prototype.sesReadNFC = function (data) {
    };
    UserPage.prototype.failNFC = function (err) {
        alert("Error while reading: Please Retry");
    };
    UserPage.prototype.logout = function () {
        this.authservice.logout();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    UserPage.prototype.getInfo = function () {
        var _this = this;
        this.authservice.getinfo().then(function (data) {
            if (data.success) {
                var alert = _this.alertCtrl.create({
                    title: data.success,
                    subTitle: data.msg,
                    buttons: ['ok']
                });
                alert.present(alert);
            }
        });
    };
    UserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-userpage',template:/*ion-inline-start:"/Users/kieran/Desktop/finalyearproject/frontendrest/src/pages/userpage/userpage.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>NFConn</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h2>NFConn</h2>\n  <!-- <p>Welcome {{user.name}}!</p>\n  <p>Current Wifi Network: {{user.wifi_ssid}}</p> -->\n  <button ion-button (click)=\'logout()\'>Logout</button>\n  <button ion-button (click)=\'getInfo()\'>GetInfo</button>\n</ion-content>\n'/*ion-inline-end:"/Users/kieran/Desktop/finalyearproject/frontendrest/src/pages/userpage/userpage.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_authservice__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authservice__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_nfc__["a" /* NFC */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_nfc__["a" /* NFC */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_nfc__["b" /* Ndef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_nfc__["b" /* Ndef */]) === "function" && _f || Object])
    ], UserPage);
    return UserPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=userpage.js.map

/***/ }),

/***/ 114:
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
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/settings/settings.module": [
		277,
		2
	],
	"../pages/signup/signup.module": [
		278,
		4
	],
	"../pages/tabs/tabs.module": [
		279,
		1
	],
	"../pages/userpage/userpage.module": [
		280,
		3
	],
	"../pages/wifilist/wifilist.module": [
		281,
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
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_userpage_userpage__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_authservice__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_nfc__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_hotspot__ = __webpack_require__(157);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_userpage_userpage__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/userpage/userpage.module#UserpagePageModule', name: 'UserPage', segment: 'userpage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wifilist/wifilist.module#WifilistPageModule', name: 'WifilistPage', segment: 'wifilist', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_userpage_userpage__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__services_authservice__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_nfc__["a" /* NFC */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_nfc__["b" /* Ndef */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_hotspot__["a" /* Hotspot */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(48);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(115);
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

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authservice__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__userpage_userpage__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(102);
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
    function HomePage(navCtrl, authservice, alertCtrl) {
        this.navCtrl = navCtrl;
        this.authservice = authservice;
        this.alertCtrl = alertCtrl;
        this.homePage = HomePage_1;
        this.usercreds = {
            name: '',
            password: ''
        };
    }
    HomePage_1 = HomePage;
    HomePage.prototype.login = function (user) {
        var _this = this;
        this.authservice.authenticate(user).then(function (data) {
            if (data) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__userpage_userpage__["a" /* UserPage */], data);
            }
        });
    };
    HomePage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
    };
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/kieran/Desktop/finalyearproject/frontendrest/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      NFConn\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class=\'home\'>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>username</ion-label>\n      <ion-input [(ngModel)]=\'usercreds.name\' type=\'text\'></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>password</ion-label>\n      <ion-input [(ngModel)]=\'usercreds.password\' type=\'password\'></ion-input>\n    </ion-item>\n  </ion-list>\n  <button ion-button (click)=\'login(usercreds)\'>Login</button>\n  <button ion-button (click)=\'signup()\'>Sign up</button>\n  <hr>\n  <small>developed by Kieran Thompson</small>\n</ion-content> '/*ion-inline-end:"/Users/kieran/Desktop/finalyearproject/frontendrest/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_authservice__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map