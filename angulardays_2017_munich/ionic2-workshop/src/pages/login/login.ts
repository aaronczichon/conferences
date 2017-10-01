import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  loginData = {
    email: '',
    password: ''
  };
  constructor(private viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    this.loginData.email = navParams.get('email');
    this.loginData.password = navParams.get('password');
    console.log(this.loginData);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goBack() {
    this.navCtrl.pop();
  }

  close() {
    this.viewCtrl.dismiss();
  }
}
