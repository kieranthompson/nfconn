import { GetqrPage } from './../getqr/getqr';
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth';
import { Storage } from '@ionic/storage';
import { GuestPage } from './../guest/guest';
import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { AuthService } from '../../services/authservice';
import { UserPage } from '../userpage/userpage'; 
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  usercreds: { name: string, password: string};
  homePage = HomePage;
  
  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, public storage: Storage, public fingerprint: AndroidFingerprintAuth, public authservice: AuthService, private alertCtrl: AlertController) {
    this.usercreds = {
      name: '',
      password: ''
    }
    
  }

  ionViewDidLoad() {
    this.addFingerPrint();
  }

  login(user) {
    this.authservice.authenticate(user).then(data => {
        if(data) {
            this.navCtrl.setRoot(UserPage, data);
        }
    });
  }

  addFingerPrint() {
    this.fingerprint.isAvailable().then((result) => {
      if(result.isAvailable) {
        this.fingerprint.encrypt({clientId: 'nfconn', username: 'user', password: 'password'})
        .then((result) => {
          if(result.withFingerprint) {
            this.storage.get('username').then((data) => {
              this.usercreds.name = data;
              this.presentLoadingDefault();
            })
            this.storage.get('password').then((data) => {
              this.usercreds.password = data;
              this.authservice.authenticate(this.usercreds).then(data => {
                if(data) {
                  this.navCtrl.setRoot(UserPage, data);
                }
              })
            })
            
          }
        }).catch(err => {
          console.log(err);
        }) 
      }

    });
  }
  signup() {
    this.navCtrl.push(SignupPage);
  }

  guestPage() {
    this.navCtrl.push(GuestPage);
  }

  getqrPage() {
    this.navCtrl.setRoot(GetqrPage);
  }

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Signing In',
      spinner: 'dots'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 1500);
  }
}
