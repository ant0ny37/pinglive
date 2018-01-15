import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the DbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DbProvider {

  users: AngularFireList<any[]>;

  constructor(public db: AngularFireDatabase) {
    this.users = db.list('users');
  }

  addUser(userId: string, userName: string, userEmail: string) {
    //this.usersRef.push({ text: newName });
    this.db.object('/users/' + userId).update({ name: userName, email: userEmail, license: null });
  }
  /*
  updateItem(key: string, newText: string) {
    this.itemsRef.update(key, { text: newText });
  }
  deleteItem(key: string) {    
    this.itemsRef.remove(key); 
  }
  deleteEverything() {
    this.itemsRef.remove();
  }
*/
}