import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { CompetitorPage } from './competitor';

@Component({
    selector: 'page-competition-results',
    templateUrl: 'competition-results.html',
})
export class CompetitionResultsPage {

    constructor(public navCtrl: NavController, public appCtrl: App) {
    }

    getDetailRider(){
        this.appCtrl.getRootNav().push(CompetitorPage);
    }
}