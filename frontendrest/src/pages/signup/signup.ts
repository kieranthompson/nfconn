import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthService } from '../../services/authservice';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  newcreds = {name: '', password: ''};
  constructor(public navCtrl: NavController, public navParams: NavParams, public authservice: AuthService, public alertCtrl: AlertController) {
    
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

      }
    });
  }

}
