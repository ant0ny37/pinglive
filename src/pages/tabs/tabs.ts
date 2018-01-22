import { Component } from '@angular/core';

import { ProfilePage } from '../profile/profile';
import { SearchPage } from '../search/search';
import { BookmarksPage } from '../bookmarks/bookmarks';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  profile: any = ProfilePage;
  search: any = SearchPage;
  bookmarks: any = BookmarksPage;

  constructor() {

  }
}