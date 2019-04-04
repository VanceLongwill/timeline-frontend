import { Component, OnInit } from '@angular/core';
import { Message } from '../message';

@Component({
  selector: 'app-compose-message',
  templateUrl: './compose-message.component.html',
  styleUrls: ['./compose-message.component.scss']
})
export class ComposeMessageComponent implements OnInit {
  msg: Message = new Message();
  submitted = false;

  ngOnInit() {}

  onSubmit() {
    this.submitted = true;
  }
}
