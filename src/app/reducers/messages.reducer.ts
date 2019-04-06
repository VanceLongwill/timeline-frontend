import { Action } from '@ngrx/store';

import { Message } from '../message.model';
import * as MessagesActions from '../actions/messages.actions';

export interface MessagesState {
  hasError: boolean;
  errorMessage: string;
  loading: boolean;
  messages: Message[];
}

export const initialState: MessagesState = {
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
          ...state.messages,
          action.payload.message, // optimistic
        ],
        loading: true,
        hasError: false,
      };
  }
}

