import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Hotspot, HotspotNetwork } from '@ionic-native/hotspot';
import { Storage } from '@ionic/storage';
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth';
import { AuthService } from '../../services/authservice';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  newcreds = {name: '', password: '', wifi_ssid: '', wifi_password: ''};
  networks: any;
  constructor(public navParams: NavParams,public storage: Storage, public fingerprint: AndroidFingerprintAuth, public navCtrl: NavController, public authservice: AuthService, public alertCtrl: AlertController, private hotspot: Hotspot) {
    
  }

  ionViewDidLoad(){
   this.hotspot.scanWifi().then((networks: Array<HotspotNetwork>) => {
    this.networks = networks;
   });
  }

  register(user) {
    this.authservice.adduser(user).then(data => {
      if(data) {
        let alert = this.alertCtrl.create({
          title: 'Success',
          subTitle: 'User Registered',
          buttons: ['ok']
        });
        alert.present();
        this.navCtrl.setRoot(HomePage);
        this.storeCredentials();
      }
    });
  }

  setWifiCredentials(wifi_ssid) {
    this.newcreds.wifi_ssid = wifi_ssid;
  }


  storeCredentials(): void {
    this.storage.remove('username');
    this.storage.remove('password');
    this.storage.set('username', this.newcreds.name);
    this.storage.set('password', this.newcreds.password);
  }

}
