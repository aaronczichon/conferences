import { Component } from '@angular/core';
import { LoginPage } from '../login/login';
import { NavController, AlertController, ModalController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: string[] = [];

  constructor(
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    private modalCtr: ModalController,
    private camera: Camera) {
    this.items.push('Item 1');
    this.items.push('Item 2');
    this.items.push('Item 3');
  }

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    mediaType: this.camera.MediaType.PICTURE
  }

  goToLogin() {
    let params = {
      email: 'aaron.czichon@webatlas-gbr.de',
      password: 'supersecretpassword'
    };
    this.navCtrl.push(LoginPage, params);
  }

  setRoot() {
    this.navCtrl.setRoot(LoginPage);
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Hinweis',
      message: 'Dies ist ein Hinweis für die Angular Days.',
      buttons: ['Ok']
    });

    alert.present();
  }

  showCamera() {
    this.camera.getPicture(this.options)
    .then(data => {
      // Irgendwas mit dem Bild machen
    });
  }

  showModal() {
    let modal = this.modalCtr.create(LoginPage);
    modal.onDidDismiss(() => {
      this.showAlert();
    });
    modal.present();
  }
}
