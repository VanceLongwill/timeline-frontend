import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ComposeReplyComponent } from './compose-reply/compose-reply.component';
import { ReplyComponent } from './reply/reply.component';
// Use the below for app-wide access to bootstrap components (try to import individual components as needed to keep bundle size small)
import {
  NgbAccordionModule,
} from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './effects/app.effects';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    TimelineComponent,
    ComposeMessageComponent,
    ComposeReplyComponent,
    ReplyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbAccordionModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
