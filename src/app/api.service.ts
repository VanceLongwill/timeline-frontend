import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Message } from './message.model';
import { Reply } from './reply.model';

// Generic interface for our api responses
interface ApiResponse<T> {
  status: number;
  message?: string;
  data: T;
}

// Alias types for convenience & clarity
type GetMessagesResponse = ApiResponse<Message[]>;
type CreateMessageResponse  = ApiResponse<null>;
type CreateReplyResponse  = ApiResponse<null>;
type GetRepliesResponse = ApiResponse<Reply[]>;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  createMessage(msg: Message): Observable<CreateMessageResponse> {
    msg.createdAt = new Date();
    return this.http.post<CreateMessageResponse>(`${this.baseUrl}/messages`, msg);
  }

  getMessages(prevId: number = 0): Observable<GetMessagesResponse> {
    // @TODO: pagination
    return this.http.get<GetMessagesResponse>(`${this.baseUrl}/messages`);
  }

  createReply(reply: Reply): Observable<CreateReplyResponse> {
    reply.createdAt = new Date();
    return this.http.post<CreateReplyResponse>(`${this.baseUrl}/messages/${reply.parentId}/reply`, reply);
  }

  getReplies(msgId: Message['id']): Observable<GetRepliesResponse> {
    // @TODO: pagination
    return this.http.get<GetRepliesResponse>(`${this.baseUrl}/messages/${msgId}/replies`);
  }
}
