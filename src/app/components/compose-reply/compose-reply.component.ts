import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { Reply } from '../../models/reply.model';
import { State } from '../../reducers';
import { ReplyCreate } from '../../actions/replies.actions';

@Component({
  selector: 'app-compose-reply',
  templateUrl: './compose-reply.component.html',
  styleUrls: ['./compose-reply.component.scss']
})
export class ComposeReplyComponent implements OnInit {
  @Input() parentId: Reply['parentId'];
  reply: Reply;
  submitted = false;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.reply = new Reply(this.parentId);
  }

  onSubmit() {
    this.submitted = true;
    this.store.dispatch(new ReplyCreate({ reply: this.reply }));
    this.reply = new Reply(this.parentId);
  }

}
