import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthService } from '../../services/authservice';
import { HomePage } from '../home/home';
import { NFC, Ndef } from '@ionic-native/nfc';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the UserpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userpage',
  templateUrl: 'userpage.html',
})
export class UserPage {

  username: string;
  ssid: string;
  wifi_password: string;
  infobool =false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authservice: AuthService, public alertCtrl: AlertController, public nfc: NFC, public ndef: Ndef) {
    this.username = '';
    this.ssid = 'this is my ssid';
    this.wifi_password = ' ';
  }

  ionViewDidEnter() {
    this.shareWifi();
  }

  shareWifi(): void {
    this.authservice.getinfo().then((data: any) => {
      if(data.success) {
        this.username = data.username;
        console.log('current user: ' + data.username);
        this.ssid = data.wifi_ssid;
        this.wifi_password = data.wifi_password;
        this.infobool = !this.infobool;
        console.log(this.ssid);
        console.log(this.wifi_password);
        
        let creds: string = this.ssid + '&%&' + this.wifi_password;
        console.log(creds);
        let message = this.ndef.textRecord(creds, null, null);

        this.nfc.share([message]).then(() => {

          this.alertCtrl.create({
          title: 'Sent!',
          subTitle: 'Your wifi credentials have been sent: ' + creds,
          buttons: ['ok']
      }).present();

    }).catch(err => {
      console.log(err);
    })
      }
    });
    
  }

  logout(): void {
    this.authservice.logout();
    this.navCtrl.setRoot(HomePage);
  }
  
  getInfo(): void {
    this.authservice.getinfo().then((data: any) => {
      if(data.success) {
        let alert = this.alertCtrl.create({
            title: data.success,
            subTitle: data.msg,
            buttons: ['ok']
        });
        alert.present(alert);
    }
    
  });
}

getWifi(): void {
  this.authservice.getinfo().then((data: any) => {
    if(data.success) {
      this.username = data.username;
      console.log('current user: ' + data.username);
      this.ssid = data.wifi_ssid;
      this.wifi_password = data.wifi_password;
      this.infobool = !this.infobool;
      console.log(this.ssid);
      console.log(this.wifi_password);
    }
  });
}

} 
