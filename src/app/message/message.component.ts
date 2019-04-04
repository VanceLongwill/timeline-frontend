import { Component, Input, OnInit } from '@angular/core';

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
  constructor(private apiService: ApiService) {}

  ngOnInit() {
  }

  fetchReplies() {
    // @TODO: handle loading state
    this.apiService.getReplies(this.msg.id).subscribe(res => {
      this.replies = res.data;
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
    });
  }

  toggleReplies() {
    if (this.replies == null) {
      this.fetchReplies();
    }

    this.hideReplies = !this.hideReplies;
  }

}

// @TODO: add collapse alla reddit - https://ng-bootstrap.github.io/#/components/collapse/examples
