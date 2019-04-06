import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { Message } from '../message.model';
import { Reply } from '../reply.model';
import { State } from '../reducers';
import { RepliesFetch } from '../actions/replies.actions';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() msg: Message;
  isLoadingReplies: Observable<boolean>;
  replies: Observable<Reply[]>;
  repliesEmpty = true;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.loadReplyState();
  }

  OnChanges() {
    this.loadReplyState();
  }

  loadReplyState() {
    if (this.msg.id) {
      this.replies = this.store.pipe(select('replies'), select(this.msg.id), select('replies'));
      this.isLoadingReplies = this.store.pipe(select('replies'), select(this.msg.id), select('loading'));
    }
  }

  fetchReplies() {
    this.store.dispatch(new RepliesFetch({ messageId: this.msg.id }));
  }

  toggleReplies() {
    if (this.repliesEmpty) {
      this.fetchReplies();
      this.repliesEmpty = false;
    }
  }
}
