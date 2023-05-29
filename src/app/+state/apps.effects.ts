import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of } from 'rxjs';
import * as AppsActions from './apps.actions';
import * as AppsFeature from './apps.reducer';

@Injectable()
export class AppsEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppsActions.initApps),
      switchMap(() => of(AppsActions.loadAppsSuccess({ apps: [] }))),
      catchError((error) => {
        console.error('Error', error);
        return of(AppsActions.loadAppsFailure({ error }));
      })
    )
  );
}
