import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Tabs } from 'ionic-angular';
import { EventListPage } from '../events/event-list';
import { ProfileOnePage } from '../profile/profile-one/profile-one';



@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    
    @ViewChild('myTabs') tabRef: Tabs;
    
    isProfile =  false;

    tab1Root = EventListPage;
    tab2Root = EventListPage;
    tab3Root = EventListPage;
    tab4Root = ProfileOnePage;

  constructor() {

  }

  public onTabsChange() {
    let selectedTab = this.tabRef.getSelected();
    this.isProfile = selectedTab.index == 3;
  }
}
