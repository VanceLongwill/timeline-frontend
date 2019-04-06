import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';
import { Message } from '../message.model';

import { MessagesFetch, MessagesFetchFail, MessagesFetchSuccess } from '../actions/messages.actions';
import { MessagesState } from '../reducers/messages.reducer';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  isLoadingMessages: Observable<boolean>;
  messages: Observable<Message[]>;
  // messages: Message[] = [
  //   {
  //     id: 1,
  //     body: 'first message',
  //     author: 'John Smith',
  //     createdAt: new Date(),
  //   },
  //   {
  //     id: 2,
  //     body: 'second message',
  //     author: 'Bob Smith',
  //     createdAt: new Date(),
  //   }
  // ];
  getSubscription: Subscription;
  constructor(private store: Store<MessagesState>) {
    this.messages = store.pipe(select('messages'), select('messages'));
    this.isLoadingMessages = store.pipe(select('loading'));
  }

  ngOnInit() {
    this.store.dispatch(new MessagesFetch());
  }

}
