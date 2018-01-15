import { Injectable } from '@angular/core';
import { Platform, LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';

import { DbProvider } from '../db/db';

@Injectable()
export class AuthProvider {
  public user: Observable<firebase.User>;

  constructor(private platform: Platform, private facebook: Facebook, private googlePlus: GooglePlus, private loadingCtrl: LoadingController, public afAuth: AngularFireAuth, public db: DbProvider) {
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

      this.googlePlus.login()
      .then((googleData) => {
        const loading = this.loadingCtrl.create({
          content: 'Connexion en cours...'
        });
        loading.present();
        const credential = firebase.auth.GoogleAuthProvider.credential(googleData.authResponse.accessToken);
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
