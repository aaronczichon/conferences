import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AddUserPage } from '../add-user/add-user';

/**
 * Generated class for the SubPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sub',
  templateUrl: 'sub.html',
})
export class SubPage {
  id: string;
  page = SubPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {
    this.id = navParams.get('id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubPage');
  }

  showAddUser() {
    const modal = this.modalCtrl.create(AddUserPage);

    modal.present();

    modal.onDidDismiss((data) => {
      console.log('Unser neue User', data);
    });
  }

}
