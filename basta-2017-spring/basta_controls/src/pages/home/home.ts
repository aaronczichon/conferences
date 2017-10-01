import { Component } from '@angular/core';
import { PopoverPage } from '../popover/popover';
import { NavController, ActionSheetController, AlertController, LoadingController, PopoverController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, 
  private actionSheetCtrl: ActionSheetController, 
  private alertCtrl: AlertController, 
  private loadingCtrl: LoadingController,
  private popoverCtrl: PopoverController) {
    
  }

  openActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Sample Sheet',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
          }
        },{
          text: 'Mein Profil',
          handler: () => {
          }
        },{
          text: 'Abbrechen',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    });
    actionSheet.present();
  }

  openAlert() {
    let alert = this.alertCtrl.create({
      buttons: ['Ok'],
      title: 'Hinweis',
      message: 'Hallo BASTA!'
    });
    alert.present();
  }

  showLoading() {
    let loading = this.loadingCtrl.create({
      content: 'Ich lade Daten...',
      duration: 1000
    });
    loading.present();
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }
}
