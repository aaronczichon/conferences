import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SubPage } from '../sub/sub';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  params = { id: 'ionic-workshop-2' };
  page = SubPage;
  constructor(public navCtrl: NavController) {

  }

  goToSub() {
    this.navCtrl.push(SubPage, { id: 'ionic-workshop' });
  }
}
