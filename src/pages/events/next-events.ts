import { EventDetailsPage } from './event-detail';
import { NavController, App } from 'ionic-angular';
import { Component } from "@angular/core";


@Component({
    selector: 'next-events-tab',
    templateUrl: 'next-events.html'
  })
export class NextEventsTagPage {


    constructor(public navCtrl: NavController, public appCtrl: App) {

    }

    public goToNextEvent(){
        this.appCtrl.getRootNav().push(EventDetailsPage);
    }
}