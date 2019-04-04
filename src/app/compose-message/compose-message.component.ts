import { Component, OnInit } from '@angular/core';
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

  constructor(private apiService: ApiService) {}
  ngOnInit() {}

  onSubmit() {
    // @TODO: handle loading state
    this.submitted = true;
    this.apiService.createMessage(this.msg).subscribe(res => {
      if (res.status === 201) {
        // @TODO: handle success
      } else {
        console.log('Unable to create message');
        // @TODO: handle error
      }
    });
  }
}
