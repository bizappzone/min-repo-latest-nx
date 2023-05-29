import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as AppsActions from './apps.actions';
import { AppsEffects } from './apps.effects';

describe('AppsEffects', () => {
  let actions: Observable<Action>;
  let effects: AppsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        AppsEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(AppsEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: AppsActions.initApps() });

      const expected = hot('-a-|', {
        a: AppsActions.loadAppsSuccess({ apps: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
