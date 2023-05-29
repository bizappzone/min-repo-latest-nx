import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as AppsActions from './apps.actions';
import { AppsEntity } from './apps.models';

export const APPS_FEATURE_KEY = 'apps';

export interface AppsState extends EntityState<AppsEntity> {
  selectedId?: string | number; // which Apps record has been selected
  loaded: boolean; // has the Apps list been loaded
  error?: string | null; // last known error (if any)
}

export interface AppsPartialState {
  readonly [APPS_FEATURE_KEY]: AppsState;
}

export const appsAdapter: EntityAdapter<AppsEntity> =
  createEntityAdapter<AppsEntity>();

export const initialAppsState: AppsState = appsAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const reducer = createReducer(
  initialAppsState,
  on(AppsActions.initApps, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(AppsActions.loadAppsSuccess, (state, { apps }) =>
    appsAdapter.setAll(apps, { ...state, loaded: true })
  ),
  on(AppsActions.loadAppsFailure, (state, { error }) => ({ ...state, error }))
);

export function appsReducer(state: AppsState | undefined, action: Action) {
  return reducer(state, action);
}
