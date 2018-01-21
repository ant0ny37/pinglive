import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable()
export class DataProvider {
  // Data Provider
  // This is the provider class for most of the Firebase observables in the app.

  constructor(public angularfireDatabase: AngularFireDatabase) {
    console.log("Initializing Data Provider");
  }

  // Get all users
  getUsers() {
    return this.angularfireDatabase.list('/users');
  }

  // Get logged in user data
  getCurrentUser() {
    return this.angularfireDatabase.object('/users/' + firebase.auth().currentUser.uid);
  }

  // Get user by their userId
  getUser(userId) {
    return this.angularfireDatabase.object('/users/' + userId);
  }

  addUser(userId: string, userName: string, userEmail: string) {
    this.angularfireDatabase.object('/users/' + userId).update({ name: userName, email: userEmail, license: null });
  }
}
