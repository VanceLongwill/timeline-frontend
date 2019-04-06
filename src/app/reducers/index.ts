import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

import { MessagesState, messagesReducer } from './messages.reducer';
import { RepliesState, repliesReducer } from './replies.reducer';

export interface State {
  messages: MessagesState;
  replies: RepliesState;
}

export const reducers: ActionReducerMap<State> = {
  messages: messagesReducer,
  replies: repliesReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
