import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Message } from './message';

interface ApiResponse<T> {
  status: number;
  data: T;
}

type GetMessagesResponse = ApiResponse<Message[]>;
type CreateMessageResponse  = ApiResponse<null>;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  createMessage(msg: Message): Observable<CreateMessageResponse> {
    return this.http.post<CreateMessageResponse>(`${this.baseUrl}/messages`, msg);
  }

  getMessages(prevId: number = 0): Observable<GetMessagesResponse> {
    return this.http.get<GetMessagesResponse>(`${this.baseUrl}/messages`);
  }

  // @TODO:
  // createReply
  // getReplies
}
