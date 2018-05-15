import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

@Component({
    selector: 'page-competitor',
    templateUrl: 'competitor.html',
})
export class CompetitorPage {

    constructor(public navCtrl: NavController, public appCtrl: App) {
    }
}