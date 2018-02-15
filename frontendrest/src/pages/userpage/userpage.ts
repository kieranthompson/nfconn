import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthService } from '../../services/authservice';
import { HomePage } from '../home/home';
import { NFC, Ndef } from '@ionic-native/nfc';

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

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public authservice: AuthService,
              public alertCtrl: AlertController,
              public nfc: NFC, 
              public ndef: Ndef) {
  }

  nfcConnect() {
    this.nfc.addNdefListener(() => {
      console.log('successfully attached ndef listener');
    }, (err) => {
      console.log('error attaching ndef listener', err);
    }).subscribe((event) => {
      console.log('received ndef message. the tag contains: ', event.tag);
      console.log('decoded tag id', this.nfc.bytesToHexString(event.tag.id));
    
      let message = this.ndef.textRecord(null, null, 'Hello world');
      console.log(message);
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserpagePage');
  }

} 
