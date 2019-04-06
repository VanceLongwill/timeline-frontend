import { Action } from '@ngrx/store';
import { Message } from '../message.model';

export enum ActionTypes {
  MessagesFetch = '[Messages] MessagesFetch',
  MessagesFetchSuccess = '[Messages] MessagesFetchSuccess',
  MessagesFetchFail = '[Messages] MessagesFetchFail',
  MessageCreate = '[Messages] MessageCreate',
  MessageCreateSuccess = '[Messages] MessageCreateSuccess',
  MessageCreateFail = '[Messages] MessageCreateFail',

}

export class MessagesFetch implements Action {
  readonly type = ActionTypes.MessagesFetch;
}

export class MessagesFetchSuccess implements Action {
  readonly type = ActionTypes.MessagesFetchSuccess;
  constructor(public payload: {
    messages: Message[]
  }) {}
}

export class MessagesFetchFail implements Action {
  readonly type = ActionTypes.MessagesFetchFail;
  constructor(public payload: {
    error: string
  }) {}
}

export class MessageCreate implements Action {
  readonly type = ActionTypes.MessageCreate;
  constructor(public payload: {
    message: Message
  }) {}
}

export class MessageCreateSuccess implements Action {
  readonly type = ActionTypes.MessageCreateSuccess;
}

export class MessageCreateFail implements Action {
  readonly type = ActionTypes.MessageCreateFail;
  constructor(public payload: {
    error: string
  }) {}
}

export type ActionsUnion = MessagesFetch
  | MessagesFetchSuccess
  | MessagesFetchFail
  | MessageCreate
  | MessageCreateSuccess
  | MessageCreateFail;
