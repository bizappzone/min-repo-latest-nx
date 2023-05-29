import { Action } from '@ngrx/store';

import * as AppsActions from './apps.actions';
import { AppsEntity } from './apps.models';
import { AppsState, initialAppsState, appsReducer } from './apps.reducer';

describe('Apps Reducer', () => {
  const createAppsEntity = (id: string, name = ''): AppsEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Apps actions', () => {
    it('loadAppsSuccess should return the list of known Apps', () => {
      const apps = [
        createAppsEntity('PRODUCT-AAA'),
        createAppsEntity('PRODUCT-zzz'),
      ];
      const action = AppsActions.loadAppsSuccess({ apps });

      const result: AppsState = appsReducer(initialAppsState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = appsReducer(initialAppsState, action);

      expect(result).toBe(initialAppsState);
    });
  });
});
