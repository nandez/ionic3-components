import { CompetitionDetailsPage } from './competition-detail';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

@Component({
    selector: 'page-event-detail',
    templateUrl: 'event-detail.html',
})
export class EventDetailsPage {

    users = new Array(5);

    constructor(public navCtrl: NavController, public appCtrl: App) {
    }

    goToCompetition(){
        this.appCtrl.getRootNav().push(CompetitionDetailsPage);
    }
}
