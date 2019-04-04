import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Use the below for app-wide access to bootstrap components (try to import individual components as needed to keep bundle size small)
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    TimelineComponent,
    ComposeMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    // NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
