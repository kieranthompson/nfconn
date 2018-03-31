import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Hotspot, HotspotNetwork } from '@ionic-native/hotspot';
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
  constructor(public navParams: NavParams, public navCtrl: NavController, public authservice: AuthService, public alertCtrl: AlertController, private hotspot: Hotspot) {
    
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

      }
    });
  }

}
