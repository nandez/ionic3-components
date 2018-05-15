import { SharedModule } from './shared.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { MODULES, PROVIDERS } from './app.imports';
import { SuperTabsModule } from 'ionic2-super-tabs';

import { EventListPage } from './../pages/events/event-list';
import { NextEventsTagPage } from '../pages/events/next-events';
import { EventsResultsTagPage } from '../pages/events/events-results';
import { ProfileOnePage } from '../pages/profile/profile-one/profile-one';
import { EventDetailsPage } from '../pages/events/event-detail';
import { CompetitionDetailsPage } from '../pages/events/competition-detail';
import { CompetitionResultsPage } from '../pages/events/competition-results';
import { CompetitionSummaryPage } from '../pages/events/competition-summary';
import { CompetitorPage } from '../pages/events/competitor';

@NgModule({
  declarations: [
    // App Core
    MyApp,

    // EVO TEST
    EventListPage,
    NextEventsTagPage,
    EventsResultsTagPage,
    ProfileOnePage,
    EventDetailsPage,
    CompetitionDetailsPage,
    CompetitionResultsPage,
    CompetitionSummaryPage,
    CompetitorPage
  ],
  imports: [
    MODULES,
    IonicModule.forRoot(MyApp),
    SuperTabsModule.forRoot(),
    SharedModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    // EVO TEST
    EventListPage,
    NextEventsTagPage,
    EventsResultsTagPage,
    ProfileOnePage,
    EventDetailsPage,
    CompetitionDetailsPage,
    CompetitionResultsPage,
    CompetitionSummaryPage,
    CompetitorPage
  ],
  providers: [PROVIDERS, { provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
