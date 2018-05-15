import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { CompetitionResultsPage } from './competition-results';
import { CompetitionSummaryPage } from './competition-summary';


@Component({
    selector: 'page-competition-detail',
    templateUrl: 'competition-detail.html',
})
export class CompetitionDetailsPage {

    resultsRoot = CompetitionResultsPage;
    summaryRoot = CompetitionSummaryPage;

    constructor(public navCtrl: NavController, public appCtrl: App) {

    }

    goToCompetitor() {
        //this.appCtrl.getRootNav().push(EventDetailsPage);
    }
}