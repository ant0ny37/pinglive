import { Injectable, NgZone } from '@angular/core';

import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { TwitterConnect } from '@ionic-native/twitter-connect';

import * as firebase from 'firebase';
import { Login } from '../login';
import { NavController } from 'ionic-angular';
import { LoadingProvider } from './loading';
import { AlertProvider } from './alert';
import { DataProvider } from './data';

@Injectable()
export class LoginProvider {
  private navCtrl: NavController;

  constructor(public loadingProvider: LoadingProvider, 
              public alertProvider: AlertProvider, 
              public dataProvider: DataProvider, 
              public zone: NgZone, 
              private facebook: Facebook, 
              private googlePlus: GooglePlus, 
              private twitterConnect: TwitterConnect, ) {

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.zone.run(() => {
          this.navCtrl.setRoot(Login.homePage, { animate: false });
        });
      }
    });
  }

  setNavController(navCtrl) {
    this.navCtrl = navCtrl;
  }

  facebookLogin() {

    this.loadingProvider.show();
    this.facebook.login(['email']).then((facebookData: FacebookLoginResponse) => {
      let credential = firebase.auth.FacebookAuthProvider.credential(facebookData.authResponse.accessToken);
      firebase.auth().signInWithCredential(credential)
        .then((user) => {
          this.dataProvider.addUser(user.uid, user.displayName, user.email);
          this.loadingProvider.hide();
        })
        .catch((error) => {
          this.loadingProvider.hide();
          let code = error["code"];
          this.alertProvider.showErrorMessage(code);
        });
    }, error => { this.loadingProvider.hide(); });
  }

  googleLogin() {
    this.loadingProvider.show();
    this.googlePlus.login({
      'webClientId': Login.googleClientId
    }).then((googleData) => {
      let credential = firebase.auth.GoogleAuthProvider.credential(googleData['idToken'], null);
      firebase.auth().signInWithCredential(credential)
        .then((user) => {
          this.dataProvider.addUser(user.uid, user.displayName, user.email);
          this.loadingProvider.hide();
        })
        .catch((error) => {
          this.loadingProvider.hide();
          let code = error["code"];
          this.alertProvider.showErrorMessage(code);
        });
    }, error => { this.loadingProvider.hide(); });
  }

  twitterLogin() {
    this.loadingProvider.show();
    this.twitterConnect.login().then((twitterData) => {
      let credential = firebase.auth.TwitterAuthProvider.credential(twitterData.token, twitterData.secret);
      firebase.auth().signInWithCredential(credential)
        .then((user) => {
          this.dataProvider.addUser(user.uid, user.displayName, user.email);
          this.loadingProvider.hide();
        })
        .catch((error) => {
          this.loadingProvider.hide();
          let code = error["code"];
          this.alertProvider.showErrorMessage(code);
        });
    }, error => { this.loadingProvider.hide(); });
  }
}
