import { Component, Input, OnInit } from '@angular/core';

import { ApiService } from '../api.service';
import { Reply } from '../reply.model';

@Component({
  selector: 'app-compose-reply',
  templateUrl: './compose-reply.component.html',
  styleUrls: ['./compose-reply.component.scss']
})
export class ComposeReplyComponent implements OnInit {
  @Input() parentId: Reply['parentId'];
  reply: Reply;
  submitted = false;
  constructor(private apiService: ApiService) {
    this.reply = new Reply(this.parentId);
  }

  ngOnInit() {
  }

  onSubmit() {
    this.apiService.createReply(this.reply).subscribe(res => {
      console.log(res);
      if (res.status === 201) {
        this.submitted = true;
      } else {
        console.log('Unable to create message');
        // @TODO: handle error
      }
    });
  }

}
