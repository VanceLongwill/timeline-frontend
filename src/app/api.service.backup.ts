import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Message } from './message';

@Injectable()
export class ApiService {
  baseUrl = '';
  constructor(private http: HttpClient) {}

  createMessage(msg: Message) {}
}
