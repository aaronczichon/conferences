import { Component } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private alertCtrl: AlertController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  logout() {
    const alert = this.alertCtrl.create({
      title: 'Hinweis',
      message: 'Sind Sie sich sicher, dass Sie sich ausloggen wollen?',
      buttons: [{
        text: 'Abbrechen',
        handler: () => {
          // do nothing
        }
      }, {
        text: 'Ja',
        handler: () => {
          // do logout
        }
      }]
    });

    alert.present();
  }
}

