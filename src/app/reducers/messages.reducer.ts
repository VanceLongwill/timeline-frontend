import { Action } from '@ngrx/store';

import { Message } from '../message.model';
import * as MessagesActions from '../actions/messages.actions';

export interface MessagesState {
  hasError: boolean;
  errorMessage: string;
  loading: boolean;
  messages: Message[];
  optimisticUpdateCount: number;
}

export const initialState: MessagesState = {
  optimisticUpdateCount: 0,
  hasError: false,
  errorMessage: '',
  loading: false,
  messages: [],
};

export function messagesReducer(state: MessagesState = initialState, action: MessagesActions.ActionsUnion) {
  switch (action.type) {
    case MessagesActions.ActionTypes.MessagesFetch:
      return {
        ...state,
        loading: true,
      };
    case MessagesActions.ActionTypes.MessagesFetchFail:
      return {
        ...state,
        loading: false,
        hasError: true,
        errorMessage: action.payload.error,
      };
    case MessagesActions.ActionTypes.MessagesFetchSuccess:
      return {
        ...state,
        messages: action.payload.messages,
        loading: false,
        hasError: false,
      };
    case MessagesActions.ActionTypes.MessageCreate:
      return {
        ...state,
        messages: [
          { // optimistic update
            ...action.payload.message,
            createdAt: new Date(),
          },
          ...state.messages,
        ],
      };
    case MessagesActions.ActionTypes.MessageCreateFail:
      // undo the optimistic update on fail
      const messages = state.messages.slice(1);
      return {
        ...state,
        messages,
      };
    default:
      return state;
  }
}

