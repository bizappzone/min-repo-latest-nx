import { AppsEntity } from './apps.models';
import {
  appsAdapter,
  AppsPartialState,
  initialAppsState,
} from './apps.reducer';
import * as AppsSelectors from './apps.selectors';

describe('Apps Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getAppsId = (it: AppsEntity) => it.id;
  const createAppsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as AppsEntity);

  let state: AppsPartialState;

  beforeEach(() => {
    state = {
      apps: appsAdapter.setAll(
        [
          createAppsEntity('PRODUCT-AAA'),
          createAppsEntity('PRODUCT-BBB'),
          createAppsEntity('PRODUCT-CCC'),
        ],
        {
          ...initialAppsState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Apps Selectors', () => {
    it('selectAllApps() should return the list of Apps', () => {
      const results = AppsSelectors.selectAllApps(state);
      const selId = getAppsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = AppsSelectors.selectEntity(state) as AppsEntity;
      const selId = getAppsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectAppsLoaded() should return the current "loaded" status', () => {
      const result = AppsSelectors.selectAppsLoaded(state);

      expect(result).toBe(true);
    });

    it('selectAppsError() should return the current "error" state', () => {
      const result = AppsSelectors.selectAppsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
