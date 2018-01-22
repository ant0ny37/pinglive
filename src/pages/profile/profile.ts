import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

import { AddLicensePage } from '../add-license/add-license';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  private profile: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App, private nativePageTransitions: NativePageTransitions) {
  }

  ionViewDidLoad() {
    this.profile = null;
  }

  addLicense() {
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 300,
      slowdownfactor: -1,
      iosdelay: 50
     };
 
    this.nativePageTransitions.slide(options);
    this.app.getRootNav().push(AddLicensePage);
  }
}
