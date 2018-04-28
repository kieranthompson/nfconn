import { Hotspot, HotspotNetwork } from '@ionic-native/hotspot';
import { Component } from '@angular/core';
import { NFC, Ndef } from '@ionic-native/nfc';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';


/**
 * Generated class for the GuestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-guest',
  templateUrl: 'guest.html',
})
export class GuestPage {

  credentialsArray = [];

  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams, public alertctrl: AlertController, public nfc: NFC, public ndef: Ndef, public hostpot: Hotspot) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GuestPage');
    this.addNFCListener();
  }

  addNFCListener(): void {
     this.nfc.addNdefListener(() => {

     }, err => {

     }).subscribe((data) => {
      let payload = data.tag.ndefMessage[0].payload;
      let tagContent = this.nfc.bytesToString(payload).substring(3);
      this.credentialsArray = tagContent.split('&%&');
      this.presentLoadingDefault();
      console.log(tagContent);
      console.log(this.credentialsArray[0] + " " + this.credentialsArray[1]);
      console.log('it worked');
      this.hostpot.connectToWifi(this.credentialsArray[0], this.credentialsArray[1]).then(() => {

      });
     });
  }

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'connecting...',
      spinner: 'dots'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 10000);
  }

}
 