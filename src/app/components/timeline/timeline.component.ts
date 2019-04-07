import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { Message } from '../../models/message.model';
import { MessagesFetch } from '../../actions/messages.actions';
import { State } from '../../reducers';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  isLoadingMessages: Observable<boolean>;
  hasError: Observable<boolean>;
  messages: Observable<Message[]>;
  constructor(private store: Store<State>) {
    // store.messages
    this.messages = store.pipe(select('messages'), select('messages'));
    this.isLoadingMessages = store.pipe(select('messages'), select('loading'));
    this.hasError = store.pipe(select('messages'), select('hasError'));
  }

  ngOnInit() {
    this.store.dispatch(new MessagesFetch());
  }

  handleRefresh() {
    this.store.dispatch(new MessagesFetch());
  }

}
