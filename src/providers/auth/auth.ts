import { Injectable } from '@angular/core';
import { Platform, LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { TwitterConnect } from '@ionic-native/twitter-connect';

import { DbProvider } from '../db/db';

@Injectable()
export class AuthProvider {
  public user: Observable<firebase.User>;

  constructor(private platform: Platform, 
              private facebook: Facebook, 
              private googlePlus: GooglePlus, 
              private twitterConnect: TwitterConnect, 
              private loadingCtrl: LoadingController, 
              public afAuth: AngularFireAuth, 
              public db: DbProvider) {
    this.user = afAuth.authState;
  }

  signInWithFacebook(): Promise<any> {

    return new Promise((resolve, reject) => {

      this.facebook.login(['email'])
      .then((facebookData: FacebookLoginResponse) => {
        const loading = this.loadingCtrl.create({
          content: 'Connexion en cours...'
        });
        loading.present();
        const credential = firebase.auth.FacebookAuthProvider.credential(facebookData.authResponse.accessToken);
        firebase.auth().signInWithCredential(credential).then((firebaseData) => {

          this.db.addUser(firebaseData.uid, firebaseData.displayName, firebaseData.email);
          
          loading.dismiss();
          resolve(firebaseData);
        });
      }, (error) => {
        reject(error);
      });
    });
  }

  signInWithGoogle(): Promise<any> {

    return new Promise((resolve, reject) => {

      this.googlePlus.login({
        'webClientId' : '475003173933-5pqdcnojb85qinpnl1vc2112dpb8aad8.apps.googleusercontent.com'
      }).then((googleData) => {

        const loading = this.loadingCtrl.create({
          content: 'Connexion en cours...'
        });
        loading.present();
        const credential = firebase.auth.GoogleAuthProvider.credential(googleData.idToken, googleData.accessToken);
        firebase.auth().signInWithCredential(credential).then((firebaseData) => {

          this.db.addUser(firebaseData.uid, firebaseData.displayName, firebaseData.email);
          
          loading.dismiss();
          resolve(firebaseData);
        });
      }).catch(error => {
        reject(error);
      });
    });
  }

  signInWithTwitter(): Promise<any> {

    return new Promise((resolve, reject) => {
      this.twitterConnect.login().then((response) => {

        const loading = this.loadingCtrl.create({
          content: 'Connexion en cours...'
        });
        loading.present();
        const credential = firebase.auth.TwitterAuthProvider.credential(response.token, response.secret);
        firebase.auth().signInWithCredential(credential).then((firebaseData) => {

          this.db.addUser(firebaseData.uid, firebaseData.displayName, firebaseData.email);
          
          loading.dismiss();
          resolve(firebaseData);
        });
      }, (error) => {
        reject(error);
      });
    });
  }
}
