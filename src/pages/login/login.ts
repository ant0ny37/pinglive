import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  hasError: boolean;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private loadingCtrl: LoadingController,
              private auth: AuthProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signInWithFacebook() {

    this.auth.signInWithFacebook()
    .then((result) => {
      this.navCtrl.setRoot(TabsPage);
    }, (error) => {
      this.hasError = true;
    });
  }

  signInWithGoogle() {

    this.auth.signInWithGoogle()
    .then((result) => {
      this.navCtrl.setRoot(TabsPage);
    }, (error) => {
      this.hasError = true;
    });
  }
}
