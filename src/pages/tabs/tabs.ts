import { Component } from '@angular/core';

import { PlayerPage } from '../player/player';
import { SearchPage } from '../search/search';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PlayerPage;
  tab2Root = SearchPage;

  constructor() {

  }
}