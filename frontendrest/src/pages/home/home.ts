import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AuthService } from '../../services/authservice';
import { UserPage } from '../userpage/userpage'; 
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  usercreds: { name: '', password: '' };
  homePage = HomePage;
  
  constructor(public navCtrl: NavController, public authservice: AuthService, private alertCtrl: AlertController) {
    this.usercreds = {
      name: '',
      password: ''
    }
    
  }

  login(user): void {
    this.authservice.authenticate(user).then(data => {
      if(data) {
        this.navCtrl.setRoot(UserPage, data);
      } else {
        this.alertCtrl.create({
          title: 'Failure',
          subTitle: 'Could not authenticate log in details',
          buttons: ['ok']
        }).present();
      }
    }).catch(err => {
      
    })
  }

  signup() {
    this.navCtrl.push(SignupPage);
  }

}
