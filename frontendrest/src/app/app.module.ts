
import { GuestPage } from './../pages/guest/guest';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UserPage } from '../pages/userpage/userpage';
import { SignupPage } from '../pages/signup/signup';
import { IonicStorageModule } from '@ionic/storage';
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { AuthService } from '../services/authservice';
import { NFC, Ndef } from '@ionic-native/nfc';
import { Hotspot } from '@ionic-native/hotspot';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UserPage,
    SignupPage,
    GuestPage
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NgxQRCodeModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UserPage,
    SignupPage,
    GuestPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    NFC,
    Ndef,
    Hotspot,
    AndroidFingerprintAuth,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NgxQRCodeModule
  ]
})
export class AppModule {}
