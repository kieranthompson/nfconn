webpackJsonp([5],{

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegacyqrPageModule", function() { return LegacyqrPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngx_qrcode2__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__legacyqr__ = __webpack_require__(216);
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

/***/ })

});
//# sourceMappingURL=5.js.map