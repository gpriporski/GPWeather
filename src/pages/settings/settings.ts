import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  city:string;
  code:string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage:Storage) {

      this.storage.get('location').then((val) => {
        if(val != null) {
          let location = JSON.parse(val);
          this.city = location.city;
          this.code = location.code;
        } else {
          this.city = 'Sofia';
          this.code = 'BG';
        }
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  saveForm() {
    let location = {
      city: this.city,
      code: this.code
    }
    this.storage.set('location', JSON.stringify(location));
    this.navCtrl.push(HomePage);
  }

}
