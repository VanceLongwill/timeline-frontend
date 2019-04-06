import { Action } from '@ngrx/store';
import { Reply } from '../models/reply.model';

export enum ActionTypes {
  RepliesFetch = '[Replies] RepliesFetch',
  RepliesFetchSuccess = '[Replies] RepliesFetchSuccess',
  RepliesFetchFail = '[Replies] RepliesFetchFail',
  ReplyCreate = '[Replies] ReplyCreate',
  ReplyCreateSuccess = '[Replies] ReplyCreateSuccess',
  ReplyCreateFail = '[Replies] ReplyCreateFail',

}

export class RepliesFetch implements Action {
  readonly type = ActionTypes.RepliesFetch;
  constructor(public payload: {
    messageId: Reply['parentId'];
  }) {}
}

export class RepliesFetchSuccess implements Action {
  readonly type = ActionTypes.RepliesFetchSuccess;
  constructor(public payload: {
    messageId: Reply['parentId'];
    replies: Reply[]
  }) {}
}

export class RepliesFetchFail implements Action {
  readonly type = ActionTypes.RepliesFetchFail;
  constructor(public payload: {
    messageId: Reply['parentId'];
    error: string
  }) {}
}

export class ReplyCreate implements Action {
  readonly type = ActionTypes.ReplyCreate;
  constructor(public payload: {
    reply: Reply;
  }) {}
}

export class ReplyCreateSuccess implements Action {
  readonly type = ActionTypes.ReplyCreateSuccess;
  constructor(public payload: {
    messageId: Reply['parentId'];
  }) {}
}

export class ReplyCreateFail implements Action {
  readonly type = ActionTypes.ReplyCreateFail;
  constructor(public payload: {
    messageId: Reply['parentId'];
    error: string
  }) {}
}

export type ActionsUnion = RepliesFetch
  | RepliesFetchSuccess
  | RepliesFetchFail
  | ReplyCreate
  | ReplyCreateSuccess
  | ReplyCreateFail;
