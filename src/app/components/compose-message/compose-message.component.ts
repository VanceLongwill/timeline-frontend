import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { Message } from '../../message.model';
import { ApiService } from '../../api.service';

import { State } from '../../reducers';
import { MessageCreate } from '../../actions/messages.actions';

@Component({
  selector: 'app-compose-message',
  templateUrl: './compose-message.component.html',
  styleUrls: ['./compose-message.component.scss']
})
export class ComposeMessageComponent implements OnInit {
  msg: Message = new Message();
  submitted = false;

  constructor(private store: Store<State>) {}
  ngOnInit() {}

  onSubmit() {
    this.submitted = true;
    this.store.dispatch(new MessageCreate({ message: this.msg }));
    this.msg = new Message();
  }
}
