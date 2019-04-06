import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { ApiService } from '../api.service';
import * as MessageActions from '../actions/messages.actions';

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
          catchError((res) => of(new MessageActions.MessagesFetchFail({
            error: res.message
          })))
        )
      )
    );

}