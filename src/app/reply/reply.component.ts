import { Component, Input, OnInit } from '@angular/core';
import { Reply } from '../reply.model';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.scss']
})
export class ReplyComponent implements OnInit {
  @Input() reply: Reply;
  constructor() { }

  ngOnInit() {
  }

}
