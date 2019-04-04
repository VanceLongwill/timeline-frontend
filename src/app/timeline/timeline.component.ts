import { Component, OnInit } from '@angular/core';

import { Message } from '../message';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  messages: Message[];
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
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getMessages().subscribe(res => {
      this.messages = res.data;
    });
  }

}
