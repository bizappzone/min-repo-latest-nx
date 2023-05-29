import { createAction, props } from '@ngrx/store';
import { AppsEntity } from './apps.models';

export const initApps = createAction('[Apps Page] Init');

export const loadAppsSuccess = createAction(
  '[Apps/API] Load Apps Success',
  props<{ apps: AppsEntity[] }>()
);

export const loadAppsFailure = createAction(
  '[Apps/API] Load Apps Failure',
  props<{ error: any }>()
);
