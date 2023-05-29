import { createFeatureSelector, createSelector } from '@ngrx/store';
import { APPS_FEATURE_KEY, AppsState, appsAdapter } from './apps.reducer';

// Lookup the 'Apps' feature state managed by NgRx
export const selectAppsState =
  createFeatureSelector<AppsState>(APPS_FEATURE_KEY);

const { selectAll, selectEntities } = appsAdapter.getSelectors();

export const selectAppsLoaded = createSelector(
  selectAppsState,
  (state: AppsState) => state.loaded
);

export const selectAppsError = createSelector(
  selectAppsState,
  (state: AppsState) => state.error
);

export const selectAllApps = createSelector(
  selectAppsState,
  (state: AppsState) => selectAll(state)
);

export const selectAppsEntities = createSelector(
  selectAppsState,
  (state: AppsState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectAppsState,
  (state: AppsState) => state.selectedId
);

export const selectEntity = createSelector(
  selectAppsEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
