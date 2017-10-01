import { Component } from '@angular/core';
import { TalksPage } from '../talks/talks';
import { NavController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  goToTalks() {
    this.navCtrl.push(TalksPage, { title: 'Web Apps mit Ionic 2' });
  }

  getLocation() {
    Geolocation.getCurrentPosition().then(
      res => {
        console.log(res);
      }
    );
  }
}
