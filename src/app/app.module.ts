import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Loading } from 'ionic-angular/components/loading/loading';

import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';

import { AuthProvider } from '../providers/auth/auth';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { PlayerPage } from '../pages/player/player';
import { SearchPage } from '../pages/search/search';
import { DbProvider } from '../providers/db/db';

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
    AngularFireAuthModule,
    AngularFireModule.initializeApp(authConfig.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule
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
    AuthProvider,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DbProvider
  ]
})
export class AppModule {}
