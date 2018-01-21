import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Loading } from 'ionic-angular/components/loading/loading';

import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { TwitterConnect } from '@ionic-native/twitter-connect';

import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { PlayerPage } from '../pages/player/player';
import { SearchPage } from '../pages/search/search';

import { LoginProvider } from '../providers/login';
import { LogoutProvider } from '../providers/logout';
import { LoadingProvider } from '../providers/loading';
import { DataProvider } from '../providers/data';
import { AlertProvider } from '../providers/alert';

import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { Login } from '../login';

export const authConfig = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDalDifuONB0kMnfvRe0JTB7WgDN6TJo8I",
    authDomain: "pinglive-6ec8a.firebaseapp.com",
    databaseURL: "https://pinglive-6ec8a.firebaseio.com",
    projectId: "pinglive-6ec8a",
    storageBucket: "pinglive-6ec8a.appspot.com",
    messagingSenderId: "475003173933"
  }
};

firebase.initializeApp(Login.firebaseConfig);

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    TabsPage,
    PlayerPage,
    SearchPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(Login.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    TabsPage,
    PlayerPage,
    SearchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    GooglePlus,
    TwitterConnect,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider, 
    LogoutProvider, 
    LoadingProvider, 
    DataProvider,
    AlertProvider
  ]
})
export class AppModule {}
