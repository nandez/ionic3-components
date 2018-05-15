import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NextEventsTagPage } from './next-events';
import { EventsResultsTagPage } from './events-results';

@Component({
  selector: 'event-list',
  templateUrl: 'event-list.html'
})
export class EventListPage {
    
    nextEventsRoot = NextEventsTagPage;
    eventResultsRoot = EventsResultsTagPage;
        
  constructor(public navCtrl: NavController) {

  }

}
