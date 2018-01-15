import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';

@IonicPage({
  name: 'player'
})
@Component({
  selector: 'page-player',
  templateUrl: 'player.html'
})
export class PlayerPage {

  constructor(private navCtrl: NavController, private modalCtrl: ModalController) {}
}
