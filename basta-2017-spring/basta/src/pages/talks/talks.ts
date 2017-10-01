import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

/*
  Generated class for the Talks page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-talks',
  templateUrl: 'talks.html'
})
export class TalksPage {
  title: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private loadingCtrl: LoadingController) {
    this.title = this.navParams.get('title');
  }

  goBack() {
    this.navCtrl.pop();
  } 

  showLoading() {
    let loading = this.loadingCtrl.create({
      content: 'Ich bin ein Loading.',
      duration: 1000
    });
    loading.present();
  }

  setRoot() {
    this.navCtrl.setRoot(TalksPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TalksPage');
  }

}
