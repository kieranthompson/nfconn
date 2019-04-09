webpackJsonp([8],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetqrPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_barcode_scanner__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_hotspot__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(24);
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
 * Generated class for the GetqrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GetqrPage = (function () {
    function GetqrPage(navCtrl, navParams, barcodeScanner, hotspot) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.barcodeScanner = barcodeScanner;
        this.hotspot = hotspot;
        this.scannedCode = null;
        this.credsArray = [];
    }
    GetqrPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GetqrPage');
    };
    GetqrPage.prototype.scanCode = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            _this.scannedCode = barcodeData.text;
            _this.credsArray = _this.scannedCode.split('&%&');
            _this.hotspot.connectToWifi(_this.credsArray[0], _this.credsArray[1]);
        }, function (err) {
            console.log('Error: ', err);
        });
    };
    GetqrPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-getqr',template:/*ion-inline-start:"/Users/thkie/Desktop/nfconn/frontendrest/src/pages/getqr/getqr.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>getqr</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n  <button ion-button full icon-left (click)="scanCode()" color="secondary"><ion-icon name="qr-scanner"></ion-icon>Scan Code</button>\n</ion-content>\n'/*ion-inline-end:"/Users/thkie/Desktop/nfconn/frontendrest/src/pages/getqr/getqr.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_hotspot__["a" /* Hotspot */]])
    ], GetqrPage);
    return GetqrPage;
}());

//# sourceMappingURL=getqr.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_hotspot__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_nfc__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(24);
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
            selector: 'page-guest',template:/*ion-inline-start:"/Users/thkie/Desktop/nfconn/frontendrest/src/pages/guest/guest.html"*/'<!--\n  Generated template for the GuestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>guest</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <h1>Connect to Wifi</h1>\n  <img src="./assets/imgs/nfclogo.png">\n</ion-content>\n'/*ion-inline-end:"/Users/thkie/Desktop/nfconn/frontendrest/src/pages/guest/guest.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_nfc__["a" /* NFC */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_nfc__["b" /* Ndef */], __WEBPACK_IMPORTED_MODULE_0__ionic_native_hotspot__["a" /* Hotspot */]])
    ], GuestPage);
    return GuestPage;
}());

//# sourceMappingURL=guest.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_hotspot__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_android_fingerprint_auth__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_authservice__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(52);
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
        this.storage.remove('username');
        this.storage.remove('password');
        this.storage.set('username', this.newcreds.name);
        this.storage.set('password', this.newcreds.password);
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/thkie/Desktop/nfconn/frontendrest/src/pages/signup/signup.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>signup</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n <ion-list>\n   <ion-item>\n    <ion-label floating>Username</ion-label>\n    <ion-input [(ngModel)]=\'newcreds.name\' type=\'text\'></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Password</ion-label>\n    <ion-input [(ngModel)]=\'newcreds.password\' type=\'password\'></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating> Wireless Networks</ion-label>\n    <ion-select floating [(ngModel)]=\'newcreds.wifi_ssid\' (ionChange)="setWifiCredentials(newcreds.wifi_ssid)">\n      <ion-option *ngFor="let network of networks" [value]="network.SSID">{{network.SSID}}</ion-option>\n    </ion-select>\n  </ion-item>\n  \n  <ion-item>\n      <ion-label floating>Wireless Password</ion-label>\n      <ion-input [(ngModel)]="newcreds.wifi_password" type="password"></ion-input>\n    </ion-item>\n </ion-list>\n\n \n <button ion-button (click)=\'register(newcreds)\'>Register</button>\n\n \n</ion-content>\n\n\n'/*ion-inline-end:"/Users/thkie/Desktop/nfconn/frontendrest/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_android_fingerprint_auth__["a" /* AndroidFingerprintAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__services_authservice__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_hotspot__["a" /* Hotspot */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authservice__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_nfc__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserPage = (function () {
    function UserPage(navCtrl, navParams, authservice, alertCtrl, nfc, ndef) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authservice = authservice;
        this.alertCtrl = alertCtrl;
        this.nfc = nfc;
        this.ndef = ndef;
        this.qrData = null;
        this.createdCode = null;
        this.infobool = false;
        this.username = '';
        this.ssid = 'this is my ssid';
        this.wifi_password = ' ';
    }
    UserPage.prototype.ionViewDidEnter = function () {
        this.shareWifi();
    };
    UserPage.prototype.createCode = function () {
        this.createdCode = this.qrData;
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
                var creds_1 = _this.qrData = _this.ssid + '&%&' + _this.wifi_password;
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
            selector: 'page-userpage',template:/*ion-inline-start:"/Users/thkie/Desktop/nfconn/frontendrest/src/pages/userpage/userpage.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>NFConn</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h2>NFConn</h2>\n  <div *ngIf="infobool">\n    <p>Welcome {{ username }}!</p>\n    <p>Current Wifi Network: {{ ssid }}</p>\n  </div>\n  <img *ngIf="!createdCode" src="./assets/imgs/nfclogo.png">\n  <ion-card *ngIf="createdCode">\n    <ngx-qrcode [qrc-value]="createdCode"></ngx-qrcode>\n    <ion-card-content>\n      <p>Value: {{ createdCode }}</p>\n    </ion-card-content>\n  </ion-card>\n  <button ion-button (click)=\'logout()\'>Logout</button>\n  <button ion-button (click)=\'getInfo()\'>GetInfo</button>\n  <button ion-button (click)=\'getWifi()\'>getWifiCreds</button>\n  <button ion-button full icon-left (click)="createCode()"><ion-icon name="barcode"></ion-icon>Create Code</button>\n</ion-content>\n'/*ion-inline-end:"/Users/thkie/Desktop/nfconn/frontendrest/src/pages/userpage/userpage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_authservice__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_nfc__["a" /* NFC */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_nfc__["b" /* Ndef */]])
    ], UserPage);
    return UserPage;
}());

//# sourceMappingURL=userpage.js.map

/***/ }),

/***/ 126:
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
webpackEmptyAsyncContext.id = 126;

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/getqr/getqr.module": [
		315,
		7
	],
	"../pages/guest/guest.module": [
		316,
		6
	],
	"../pages/legacyqr/legacyqr.module": [
		317,
		5
	],
	"../pages/settings/settings.module": [
		318,
		2
	],
	"../pages/signup/signup.module": [
		319,
		4
	],
	"../pages/tabs/tabs.module": [
		320,
		1
	],
	"../pages/userpage/userpage.module": [
		322,
		3
	],
	"../pages/wifilist/wifilist.module": [
		321,
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
webpackAsyncContext.id = 168;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LegacyqrPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_barcode_scanner__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LegacyqrPage = (function () {
    function LegacyqrPage(barcodeScanner) {
        this.barcodeScanner = barcodeScanner;
        this.qrData = null;
        this.createdCode = null;
        this.scannedCode = null;
    }
    LegacyqrPage.prototype.createCode = function () {
        this.createdCode = this.qrData;
    };
    LegacyqrPage.prototype.scanCode = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            _this.scannedCode = barcodeData.text;
        }, function (err) {
            console.log('Error: ', err);
        });
    };
    LegacyqrPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-legacyqr',template:/*ion-inline-start:"/Users/thkie/Desktop/nfconn/frontendrest/src/pages/legacyqr/legacyqr.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      QR Section\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n \n<ion-content padding>\n  <ion-item>\n    <ion-input type="text" placeholder="MY QR Code data" [(ngModel)]="qrData">\n    </ion-input>\n  </ion-item>\n  <button ion-button full icon-left (click)="createCode()"><ion-icon name="barcode"></ion-icon>Create Code</button>\n  <button ion-button full icon-left (click)="scanCode()" color="secondary"><ion-icon name="qr-scanner"></ion-icon>Scan Code</button>\n \n  <ion-card *ngIf="createdCode">\n    <ngx-qrcode [qrc-value]="createdCode"></ngx-qrcode>\n    <ion-card-content>\n      <p>Value: {{ createdCode }}</p>\n    </ion-card-content>\n  </ion-card>\n \n  <ion-card *ngIf="scannedCode">\n    <ion-card-content>\n      Result from Scan: {{ scannedCode }}\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/thkie/Desktop/nfconn/frontendrest/src/pages/legacyqr/legacyqr.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], LegacyqrPage);
    return LegacyqrPage;
}());

//# sourceMappingURL=legacyqr.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(241);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_legacyqr_legacyqr__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_getqr_getqr__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_guest_guest__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_userpage_userpage__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_android_fingerprint_auth__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_barcode_scanner__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ngx_qrcode2__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_authservice__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_nfc__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_hotspot__ = __webpack_require__(45);
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
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_userpage_userpage__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_guest_guest__["a" /* GuestPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_getqr_getqr__["a" /* GetqrPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_legacyqr_legacyqr__["a" /* LegacyqrPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_17_ngx_qrcode2__["a" /* NgxQRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/getqr/getqr.module#GetqrPageModule', name: 'GetqrPage', segment: 'getqr', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/guest/guest.module#GuestPageModule', name: 'GuestPage', segment: 'guest', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/legacyqr/legacyqr.module#LegacyqrPageModule', name: 'LegacyqrPage', segment: 'legacyqr', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wifilist/wifilist.module#WifilistPageModule', name: 'WifilistPage', segment: 'wifilist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/userpage/userpage.module#UserpagePageModule', name: 'UserPage', segment: 'userpage', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_userpage_userpage__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_guest_guest__["a" /* GuestPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_getqr_getqr__["a" /* GetqrPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_legacyqr_legacyqr__["a" /* LegacyqrPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_18__services_authservice__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_nfc__["a" /* NFC */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_nfc__["b" /* Ndef */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_hotspot__["a" /* Hotspot */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_android_fingerprint_auth__["a" /* AndroidFingerprintAuth */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17_ngx_qrcode2__["a" /* NgxQRCodeModule */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(52);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/thkie/Desktop/nfconn/frontendrest/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/thkie/Desktop/nfconn/frontendrest/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(173);
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

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getqr_getqr__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_android_fingerprint_auth__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guest_guest__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_authservice__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__userpage_userpage__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__signup_signup__ = __webpack_require__(115);
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
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__userpage_userpage__["a" /* UserPage */], data);
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
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__userpage_userpage__["a" /* UserPage */], data);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__signup_signup__["a" /* SignupPage */]);
    };
    HomePage.prototype.guestPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__guest_guest__["a" /* GuestPage */]);
    };
    HomePage.prototype.getqrPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__getqr_getqr__["a" /* GetqrPage */]);
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
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/thkie/Desktop/nfconn/frontendrest/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      NFConn\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class=\'home\'>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>username</ion-label>\n      <ion-input [(ngModel)]=\'usercreds.name\' type=\'text\'></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>password</ion-label>\n      <ion-input [(ngModel)]=\'usercreds.password\' type=\'password\'></ion-input>\n    </ion-item>\n  </ion-list>\n  <button ion-button (click)=\'login(usercreds)\'>Login</button>\n  <button ion-button (click)=\'signup()\'>Sign up</button>\n  <button ion-button (click)=\'guestPage()\'>Recieve Wifi</button>\n  <button ion-button (click)=\'getqrPage()\'>No NFC? QR</button>\n  <hr>\n  <img src="./assets/imgs/nfclogo.png">\n  <hr>\n  <small>developed by Kieran Thompson</small>\n</ion-content> '/*ion-inline-end:"/Users/thkie/Desktop/nfconn/frontendrest/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_android_fingerprint_auth__["a" /* AndroidFingerprintAuth */], __WEBPACK_IMPORTED_MODULE_6__services_authservice__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[217]);
//# sourceMappingURL=main.js.map