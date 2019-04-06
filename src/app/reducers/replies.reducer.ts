import { Action } from '@ngrx/store';

import { Reply } from '../models/reply.model';
import * as RepliesActions from '../actions/replies.actions';

export interface RepliesState {
  [messageId: string]: {
    replies: Reply[];
    hasError: boolean;
    errorMessage: string;
    loading: boolean;
  };
}

export const initialState: RepliesState = {};

export function repliesReducer(state: RepliesState = initialState, action: RepliesActions.ActionsUnion) {
  switch (action.type) {
    case RepliesActions.ActionTypes.RepliesFetch:
      return {
        ...state,
        [action.payload.messageId]: {
          loading: true,
          replies: [],
          hasError: false,
          errorMessage: ''
        }
      };
    case RepliesActions.ActionTypes.RepliesFetchFail:
      return {
        ...state,
        [action.payload.messageId]: {
          ...state[action.payload.messageId],
          loading: false,
          hasError: true,
          errorMessage: action.payload.error,
        }
      };
    case RepliesActions.ActionTypes.RepliesFetchSuccess:
      return {
        ...state,
        [action.payload.messageId]: {
          ...state[action.payload.messageId],
          replies: action.payload.replies,
          hasError: false,
          loading: false,
        }
      };
    case RepliesActions.ActionTypes.ReplyCreate:
      let messageId = action.payload.reply.parentId;
      return {
        ...state,
        [messageId]: {
          ...state[messageId],
          replies: [
            ...state[messageId].replies,
            { // optimistic update
              ...action.payload.reply,
              createdAt: new Date(),
            },
          ]
        },
      };
    case RepliesActions.ActionTypes.ReplyCreateFail:
      messageId = action.payload.messageId;
      // undo the optimistic update on fail
      const replies = state[messageId]
        .replies.slice(1);
      return {
        ...state,
        [messageId]: {
          ...state[messageId],
          replies,
          hasError: true,
          errorMessage: action.payload.error,
        }
      };
    case RepliesActions.ActionTypes.ReplyCreateSuccess:
      messageId = action.payload.messageId;
      return {
        ...state,
        [messageId]: {
          ...state[messageId],
          hasError: false,
        }
      };
    default:
      return state;
  }
}

