import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Component } from '@angular/core';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { Hotspot } from '@ionic-native/hotspot';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GetqrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-getqr',
  templateUrl: 'getqr.html',
})
export class GetqrPage {

  scannedCode = null;
  credsArray = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public barcodeScanner: BarcodeScanner, public hotspot: Hotspot) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GetqrPage');
  }


  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
      this.credsArray = this.scannedCode.split('&%&');
      this.hotspot.connectToWifi(this.credsArray[0], this.credsArray[1]);

    }, (err) => {
        console.log('Error: ', err);
    });
  }

}
