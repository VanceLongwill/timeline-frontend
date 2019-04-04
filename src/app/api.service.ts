import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';

import { Message } from './message.model';
import { Reply } from './reply.model';

// Generic interface for our api responses
interface ApiResponse<T> {
  status: number;
  message?: string;
  data: T;
}

// Alias types for convenience & clarity
// NB: createdAt fields from the API will be strings not Date objects
type GetMessagesResponse = ApiResponse<Message[]>;
type CreateMessageResponse  = ApiResponse<null>;
type CreateReplyResponse  = ApiResponse<null>;
type GetRepliesResponse = ApiResponse<Reply[]>;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:3000';
  retryLimit = 3;
  constructor(private http: HttpClient) {}

  createMessage(msg: Message): Observable<CreateMessageResponse> {
    msg.createdAt = new Date();
    return this.http.post<CreateMessageResponse>(`${this.baseUrl}/messages`, msg)
      .pipe(
        retry(this.retryLimit)
      );
  }

  getMessages(prevId: number = 0): Observable<GetMessagesResponse> {
    // @TODO: pagination
    return this.http.get<GetMessagesResponse>(`${this.baseUrl}/messages`)
      .pipe(
        retry(this.retryLimit),
        map((res) => {
          // Convert timestamp strings to Date objects
          res.data.forEach(msg => {
            msg.createdAt = new Date(msg.createdAt);
          });
          return res;
        })
      );
  }

  createReply(reply: Reply): Observable<CreateReplyResponse> {
    reply.createdAt = new Date();
    return this.http.post<CreateReplyResponse>(`${this.baseUrl}/messages/${reply.parentId}/reply`, reply)
      .pipe(
        retry(this.retryLimit)
      );
  }

  getReplies(msgId: Message['id']): Observable<GetRepliesResponse> {
    // @TODO: pagination
    return this.http.get<GetRepliesResponse>(`${this.baseUrl}/messages/${msgId}/replies`)
      .pipe(
        retry(this.retryLimit),
        map((res) => {
          // Convert timestamp strings to Date objects
          res.data.forEach(reply => {
            reply.createdAt = new Date(reply.createdAt);
          });
          return res;
        })
      );
  }
}
