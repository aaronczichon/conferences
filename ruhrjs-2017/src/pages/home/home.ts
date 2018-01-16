import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController) {

  }

  handleActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Settings',
      subTitle: 'Here you can change the settings',
      buttons: [
        {
          text: 'Go to another page',
          handler: () => {
            alert('not implemented');
          }
        }
      ]
    });

    actionSheet.present();
  }

}
