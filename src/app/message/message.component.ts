import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ApiService } from '../api.service';
import { Message } from '../message.model';
import { Reply } from '../reply.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() msg: Message;
  replies: Reply[];
  hideReplies = true;
  isLoadingReplies = false;
  getSubscription: Subscription;
  constructor(private apiService: ApiService) {}

  ngOnInit() {
  }

  fetchReplies() {
    this.isLoadingReplies = true;
    this.getSubscription = this.apiService.getReplies(this.msg.id).subscribe(res => {
      this.replies = res.data;
      this.isLoadingReplies = false;
    }, err => {
      // @TODO remove
      this.replies = [{
        id: 1,
        createdAt: new Date(),
        body: 'first comment',
        author: 'some guy',
        parentId: this.msg.id
      }];
      // @TODO: handle error
      this.isLoadingReplies = false;
    });
  }

  toggleReplies() {
    if (this.replies == null) {
      this.fetchReplies();
    }
    this.hideReplies = !this.hideReplies;
  }

  OnDestroy() {
    this.getSubscription.unsubscribe();
  }
}

// @TODO: add collapse alla reddit - https://ng-bootstrap.github.io/#/components/collapse/examples
