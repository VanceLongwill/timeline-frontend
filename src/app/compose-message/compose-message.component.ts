import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Message } from '../message.model';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-compose-message',
  templateUrl: './compose-message.component.html',
  styleUrls: ['./compose-message.component.scss']
})
export class ComposeMessageComponent implements OnInit {
  msg: Message = new Message();
  submitted = false;
  createSubscription: Subscription;

  constructor(private apiService: ApiService) {}
  ngOnInit() {}

  onSubmit() {
    this.submitted = true;
    this.createSubscription = this.apiService.createMessage(this.msg).subscribe(res => {

    }, err => {
      // @TODO: handle error
    });
  }


  OnDestroy() {
    this.createSubscription.unsubscribe();
  }
}
