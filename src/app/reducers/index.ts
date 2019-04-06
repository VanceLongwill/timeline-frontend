import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

import { MessagesState, messagesReducer } from './messages.reducer';

export interface State {
  messages: MessagesState;
}

export const reducers: ActionReducerMap<State> = {
  messages: messagesReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
