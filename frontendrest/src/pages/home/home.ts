import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../services/authservice';
import { UserPage } from '../userpage/userpage'; 
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  usercreds: { name: '', password: '' };
  
  constructor(public navCtrl: NavController, public authservice: AuthService) {
    this.usercreds = {
      name: '',
      password: ''
    }
  }

  login(user): void {
    this.authservice.authenticate(user).then(data => {
      if(data) {
        this.navCtrl.setRoot(UserPage);
      }
    })
  }

  signup() {
    this.navCtrl.push(SignupPage);
  }

}
