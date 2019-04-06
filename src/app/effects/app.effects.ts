import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { ApiService } from '../services/api.service';
import * as MessageActions from '../actions/messages.actions';
import * as RepliesActions from '../actions/replies.actions';

@Injectable()
export class AppEffects {
  constructor(private actions: Actions, private apiService: ApiService) {}

  @Effect()
  fetchMessages = this.actions
    .pipe(
      ofType(MessageActions.ActionTypes.MessagesFetch),
      mergeMap(() => this.apiService.getMessages()
        .pipe(
          map(res =>
            new MessageActions.MessagesFetchSuccess({
              messages: res.data
            })
          ),
          catchError(res => of(new MessageActions.MessagesFetchFail({
            error: res ? res.message : 'unknown error'
          })))
        )
      )
    );

  @Effect()
  createMessage = this.actions
    .pipe(
      ofType(MessageActions.ActionTypes.MessageCreate),
      mergeMap((action: MessageActions.MessageCreate) => this.apiService.createMessage(action.payload.message)
        .pipe(
          map(res => new MessageActions.MessageCreateSuccess({ id: res.resourceId })),
          catchError(res => of(new MessageActions.MessageCreateFail({
            error: res ? res.message : 'unknown error'
          })))
        )
      )
    );

  @Effect()
  fetchReplies = this.actions
    .pipe(
      ofType(RepliesActions.ActionTypes.RepliesFetch),
      mergeMap((action: RepliesActions.RepliesFetch) => this.apiService.getReplies(action.payload.messageId)
        .pipe(
          map(res =>
            new RepliesActions.RepliesFetchSuccess({
              messageId: action.payload.messageId,
              replies: res.data
            })
          ),
          catchError(res => of(new RepliesActions.RepliesFetchFail({
            messageId: action.payload.messageId,
            error: res ? res.message : 'unknown error'
          })))
        )
      )
    );

  @Effect()
  createReply = this.actions
    .pipe(
      ofType(RepliesActions.ActionTypes.ReplyCreate),
      mergeMap((action: RepliesActions.ReplyCreate) => this.apiService.createReply(action.payload.reply)
        .pipe(
          map(res => new RepliesActions.ReplyCreateSuccess({
            messageId: action.payload.reply.parentId,
          })),
          catchError(res => of(new RepliesActions.ReplyCreateFail({
            messageId: action.payload.reply.parentId,
            error: res ? res.message : 'unknown error'
          })))
        )
      )
    );
}
