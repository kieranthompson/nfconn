webpackJsonp([3],{

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegacyqrPageModule", function() { return LegacyqrPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngx_qrcode2__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__legacyqr__ = __webpack_require__(320);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LegacyqrPageModule = (function () {
    function LegacyqrPageModule() {
    }
    LegacyqrPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__legacyqr__["a" /* LegacyqrPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0_ngx_qrcode2__["a" /* NgxQRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__legacyqr__["a" /* LegacyqrPage */]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_0_ngx_qrcode2__["a" /* NgxQRCodeModule */]
            ]
        })
    ], LegacyqrPageModule);
    return LegacyqrPageModule;
}());

//# sourceMappingURL=legacyqr.module.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LegacyqrPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_barcode_scanner__ = __webpack_require__(214);
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
            selector: 'page-legacyqr',template:/*ion-inline-start:"/Users/kieran/Desktop/finalyearproject/frontendrest/src/pages/legacyqr/legacyqr.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      QR Code App\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n \n<ion-content padding>\n  <ion-item>\n    <ion-input type="text" placeholder="MY QR Code data" [(ngModel)]="qrData">\n    </ion-input>\n  </ion-item>\n  <button ion-button full icon-left (click)="createCode()"><ion-icon name="barcode"></ion-icon>Create Code</button>\n  <button ion-button full icon-left (click)="scanCode()" color="secondary"><ion-icon name="qr-scanner"></ion-icon>Scan Code</button>\n \n  <ion-card *ngIf="createdCode">\n    <ngx-qrcode [qrc-value]="createdCode"></ngx-qrcode>\n    <ion-card-content>\n      <p>Value: {{ createdCode }}</p>\n    </ion-card-content>\n  </ion-card>\n \n  <ion-card *ngIf="scannedCode">\n    <ion-card-content>\n      Result from Scan: {{ scannedCode }}\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/kieran/Desktop/finalyearproject/frontendrest/src/pages/legacyqr/legacyqr.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], LegacyqrPage);
    return LegacyqrPage;
}());

//# sourceMappingURL=legacyqr.js.map

/***/ })

});
//# sourceMappingURL=3.js.map